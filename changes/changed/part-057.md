# Changed — Bundle Modifications Report (Part 057 / 067)

- **Updated at**: `2026-11-20T22:47 JST`
- **Part**: `57 / 67` (**406** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 056](part-056.md) · [Part 058 →](part-058.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmClientGame.js` (7rj44.0704ff61 → qepqb8.0352199c · continued)

- **File**: `bundles/bloxd.io/chunks/js/wasmClientGame.js` (974 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b)

#### 547. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4863` → after: `L4938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4938) · [Before (L4863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4863)

```diff
-             const sz = tz * Nz.cc,
+             const Pv = zv * Wv.Bc,
```

#### 548. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4866-L4869` → after: `L4941-L4944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4941-L4944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4941-L4944) · [Before (L4866-L4869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4866-L4869)

```diff
-               wN: zz.getUint32(sz + Nz.pc, !0),
-               position: [Fz(Nz.lc), Fz(Nz.lc + 8), Fz(Nz.lc + 16)],
-               direction: [Fz(Nz.ec), Fz(Nz.ec + 8), Fz(Nz.ec + 16)],
-               easing: [Fz(Nz.ic), Fz(Nz.ic + 8), Fz(Nz.ic + 16), Fz(Nz.ic + 24)]
+               MT: vv.getUint32(Pv + Wv.Oc, !0),
+               position: [hv(Wv.Kc), hv(Wv.Kc + 8), hv(Wv.Kc + 16)],
+               direction: [hv(Wv.Ec), hv(Wv.Ec + 8), hv(Wv.Ec + 16)],
+               easing: [hv(Wv.Hc), hv(Wv.Hc + 8), hv(Wv.Hc + 16), hv(Wv.Hc + 24)]
```

#### 549. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4884` → after: `L4959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4959) · [Before (L4884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4884)

```diff
-         return this.deps.replay.setKeyframe(zz.wN, Float64Array.from([...zz.position, ...zz.direction, ...zz.easing]))
+         return this.deps.replay.setKeyframe(vv.MT, Float64Array.from([...vv.position, ...vv.direction, ...vv.easing]))
```

#### 550. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4894` → after: `L4969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4969) · [Before (L4894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4894)

```diff
-         return this.deps.replay.setMark(null !== (tz = null === zz || void 0 === zz ? void 0 : zz.inTick) && void 0 !== tz ? tz : -1, null !== (sz = null === zz || void 0 === zz ? void 0 : zz.outTick) && void 0 !== sz ? sz : -1)
+         return this.deps.replay.setMark(null !== (zv = null === vv || void 0 === vv ? void 0 : vv.inTick) && void 0 !== zv ? zv : -1, null !== (Pv = null === vv || void 0 === vv ? void 0 : vv.outTick) && void 0 !== Pv ? Pv : -1)
```

#### 551. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4911` → after: `L4986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4986) · [Before (L4911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4911)

```diff
-         return null !== sz && (0, wz.xf)(sz, 0, zz, null === tz ? JW : IW.encode(tz))
+         return null !== Pv && (0, av.yf)(Pv, 0, vv, null === zv ? nS : OS.encode(zv))
```

#### 552. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4920` → after: `L4995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4995) · [Before (L4920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4920)

```diff
-         return null !== Wz && (0, wz.zf)(Wz, 0, zz, tz, Math.max(0, sz), IW.encode(Fz))
+         return null !== Sv && (0, av.Cf)(Sv, 0, vv, zv, Math.max(0, Pv), OS.encode(hv))
```

#### 553. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4928` → after: `L5003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5003) · [Before (L4928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4928)

```diff
-                 return zz + Ss.qb + (null !== (sz = null === tz || void 0 === tz ? void 0 : tz.byteLength) && void 0 !== sz ? sz : 0)
+                 return vv + EP.kb + (null !== (Pv = null === zv || void 0 === zv ? void 0 : zv.byteLength) && void 0 !== Pv ? Pv : 0)
```

#### 554. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4935` → after: `L5010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5010) · [Before (L4935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4935)

```diff
-               Fz.setUint16(Wz, null !== (Xz = null === Oz || void 0 === Oz ? void 0 : Oz.byteLength) && void 0 !== Xz ? Xz : Nz.tc, !0), Wz += Ss.qb, null !== Oz && (sz.set(Oz, Wz), Wz += Oz.byteLength)
+               hv.setUint16(Sv, null !== (ev = null === gv || void 0 === gv ? void 0 : gv.byteLength) && void 0 !== ev ? ev : Wv.Qc, !0), Sv += EP.kb, null !== gv && (Pv.set(gv, Sv), Sv += gv.byteLength)
```

#### 555. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4939` → after: `L5014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5014) · [Before (L4939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4939)

```diff
-         return null !== Xz && (0, wz.wf)(Xz, 0, null !== (Fz = zz.id) && void 0 !== Fz ? Fz : wz.dd, null !== (Wz = tz.id) && void 0 !== Wz ? Wz : wz.dd, Oz)
+         return null !== ev && (0, av.xf)(ev, 0, null !== (hv = vv.id) && void 0 !== hv ? hv : av.ad, null !== (Sv = zv.id) && void 0 !== Sv ? Sv : av.ad, gv)
```

#### 556. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4950` → after: `L5025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5025) · [Before (L4950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4950)

```diff
-         this.deps.core.KWz()
+         this.deps.core.xhv()
```

#### 557. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4968` → after: `L5043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5043) · [Before (L4968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4968)

```diff
-         }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (tz = zz.now) && void 0 !== tz ? tz : () => performance.now()
+         }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (zv = vv.now) && void 0 !== zv ? zv : () => performance.now()
```

#### 558. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4979` → after: `L5054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5054) · [Before (L4979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4979)

```diff
-         this.live && (this.viewerShown(!0 === (null === (tz = (sz = this.deps).viewerOpen) || void 0 === tz ? void 0 : tz.call(sz))), this.deps.client.recorderSession(zz, (0, xW.h)()))
+         this.live && (this.viewerShown(!0 === (null === (zv = (Pv = this.deps).viewerOpen) || void 0 === zv ? void 0 : zv.call(Pv))), this.deps.client.recorderSession(vv, (0, FS.c)()))
```

#### 559. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4986` → after: `L5061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5061) · [Before (L4986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4986)

```diff
-         this.live && (this.state.recording || !0 !== (null === (zz = (tz = this.deps).viewerOpen) || void 0 === zz ? void 0 : zz.call(tz))) ? this.deps.client.recorderControl(Nz.Kc.ToggleRecording) : this.deps.notify(PW.d.closeViewerFirst)
+         this.live && (this.state.recording || !0 !== (null === (vv = (zv = this.deps).viewerOpen) || void 0 === vv ? void 0 : vv.call(zv))) ? this.deps.client.recorderControl(Wv.fd.ToggleRecording) : this.deps.notify(mS.c.closeViewerFirst)
```

#### 560. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4989` → after: `L5064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5064) · [Before (L4989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4989)

```diff
-         this.live ? this.deps.client.recorderControl(Nz.Kc.SaveClip) : this.deps.notify(PW.d.clippingNotOn)
+         this.live ? this.deps.client.recorderControl(Wv.fd.SaveClip) : this.deps.notify(mS.c.clippingNotOn)
```

#### 561. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4992` → after: `L5067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5067) · [Before (L4992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4992)

```diff
-         this.live && this.deps.client.recorderControl(zz ? Nz.Kc.ViewerOpened : Nz.Kc.ViewerClosed)
+         this.live && this.deps.client.recorderControl(vv ? Wv.fd.ViewerOpened : Wv.fd.ViewerClosed)
```

#### 562. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5027` → after: `L5102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5102) · [Before (L5027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5027)

```diff
-         } = this.deps, Wz = PW.d;
+         } = this.deps, Sv = mS.c;
```

#### 563. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5029` → after: `L5104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5104) · [Before (L5029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5029)

```diff
-           case Nz.Gc.RecordingStarted:
+           case Wv.cd.RecordingStarted:
```

#### 564. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5036-L5037` → after: `L5111-L5112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5111-L5112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5111-L5112) · [Before (L5036-L5037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5036-L5037)

```diff
-           case Nz.Gc.RecordingStopped:
-             this.stopRecording(), Fz(Wz.recordingStopped), this.saveState(Nz.Tc.Recording, "saving");
+           case Wv.cd.RecordingStopped:
+             this.stopRecording(), hv(Sv.recordingStopped), this.saveState(Wv.qd.Recording, "saving");
```

#### 565. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5039` → after: `L5114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5114) · [Before (L5039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5039)

```diff
-           case Nz.Gc.RecordingDiscarded:
+           case Wv.cd.RecordingDiscarded:
```

#### 566. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5042` → after: `L5117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5117) · [Before (L5042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5042)

```diff
-           case Nz.Gc.RecordingTurnedOff:
+           case Wv.cd.RecordingTurnedOff:
```

#### 567. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5045` → after: `L5120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5120) · [Before (L5045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5045)

```diff
-           case Nz.Gc.LimitReached:
+           case Wv.cd.LimitReached:
```

#### 568. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5048-L5049` → after: `L5123-L5124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5123-L5124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5123-L5124) · [Before (L5048-L5049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5048-L5049)

```diff
-           case Nz.Gc.ClipSaved:
-             this.saveState(Nz.Tc.Clip, "saving");
+           case Wv.cd.ClipSaved:
+             this.saveState(Wv.qd.Clip, "saving");
```

#### 569. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5051` → after: `L5126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5126) · [Before (L5051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5051)

```diff
-           case Nz.Gc.ClipEmpty:
+           case Wv.cd.ClipEmpty:
```

#### 570. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5054` → after: `L5129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5129) · [Before (L5054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5054)

```diff
-           case Nz.Gc.ClippingNotOn:
+           case Wv.cd.ClippingNotOn:
```

#### 571. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5057` → after: `L5132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5132) · [Before (L5057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5057)

```diff
-           case Nz.Gc.Disallowed:
+           case Wv.cd.Disallowed:
```

#### 572. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5060` → after: `L5135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5135) · [Before (L5060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5060)

```diff
-           case Nz.Gc.ClippingOn:
+           case Wv.cd.ClippingOn:
```

#### 573. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5067` → after: `L5142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5142) · [Before (L5067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5067)

```diff
-           case Nz.Gc.ClippingOff:
+           case Wv.cd.ClippingOff:
```

#### 574. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5074` → after: `L5149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5149) · [Before (L5074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5074)

```diff
-           case Nz.Gc.ClipSettingsChanged:
+           case Wv.cd.ClipSettingsChanged:
```

#### 575. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5080` → after: `L5155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5155) · [Before (L5080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5080)

```diff
-           case Nz.Gc.SaveBusy:
+           case Wv.cd.SaveBusy:
```

#### 576. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5083` → after: `L5158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5158) · [Before (L5083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5083)

```diff
-           case Nz.Gc.CloseViewerFirst:
+           case Wv.cd.CloseViewerFirst:
```

#### 577. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5088` → after: `L5163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5163) · [Before (L5088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5088)

```diff
-         this.deps.download(tz), this.saveState(zz, "done"), this.deps.notify(zz === Nz.Tc.Clip ? PW.d.clipSaved : PW.d.recordingSaved)
+         this.deps.download(zv), this.saveState(vv, "done"), this.deps.notify(vv === Wv.qd.Clip ? mS.c.clipSaved : mS.c.recordingSaved)
```

#### 578. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5091` → after: `L5166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5166) · [Before (L5091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5091)

```diff
-         this.saveState(zz, "failed"), this.deps.notify(zz === Nz.Tc.Clip ? PW.d.clipFailed : PW.d.recordingFailed)
+         this.saveState(vv, "failed"), this.deps.notify(vv === Wv.qd.Clip ? mS.c.clipFailed : mS.c.recordingFailed)
```

#### 579. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5113` → after: `L5188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5188) · [Before (L5113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5113)

```diff
-         if (tz + Ss.qb > sz) return null;
+         if (zv + EP.kb > Pv) return null;
```

#### 580. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5115` → after: `L5190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5190) · [Before (L5115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5115)

```diff
-         if (tz += Ss.qb, Fz !== Nz.tc) {
+         if (zv += EP.kb, hv !== Wv.Qc) {
```

#### 581. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5120` → after: `L5195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5195) · [Before (L5120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5120)

```diff
-       return tz === sz ? Wz : null
+       return zv === Pv ? Sv : null
```

#### 582. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5136` → after: `L5211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5211) · [Before (L5136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5136)

```diff
-               case Nz.Vc.Cleared:
+               case Wv.ud.Cleared:
```

#### 583. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5138` → after: `L5213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5213) · [Before (L5138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5138)

```diff
-               case Nz.Vc.Text:
+               case Wv.ud.Text:
```

#### 584. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5140` → after: `L5215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5215) · [Before (L5140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5140)

```diff
-               case Nz.Vc.Int:
+               case Wv.ud.Int:
```

#### 585. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5142` → after: `L5217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5217) · [Before (L5142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5142)

```diff
-               case Nz.Vc.Double:
+               case Wv.ud.Double:
```

#### 586. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5157` → after: `L5232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5232) · [Before (L5157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5157)

```diff
-               case Nz.Yc.FlyingText: {
+               case Wv.yd.FlyingText: {
```

#### 587. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5161-L5162` → after: `L5236-L5237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5236-L5237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5236-L5237) · [Before (L5161-L5162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5161-L5162)

```diff
-                   fX: sz,
-                   pX: Fz,
+                   sP: Pv,
+                   aP: hv,
```

#### 588. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5167` → after: `L5242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5242) · [Before (L5167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5167)

```diff
-               case Nz.Yc.PlayerKilled: {
+               case Wv.yd.PlayerKilled: {
```

#### 589. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5177` → after: `L5252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5252) · [Before (L5177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5177)

```diff
-               case Nz.Yc.Killfeed: {
+               case Wv.yd.Killfeed: {
```

#### 590. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5219` → after: `L5294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5294) · [Before (L5219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5219)

```diff
-       return (zz, tz, Xz, Oz) => !(zz < Nz.X.ReplayFailed || zz > Nz.X.RecorderEvent) && (sz = tz, Fz = !0, (0, wz.ue)(zz, tz, Xz, Oz, Wz) && Fz)
+       return (vv, zv, ev, gv) => !(vv < Wv.$.ReplayFailed || vv > Wv.$.RecorderEvent) && (Pv = zv, hv = !0, (0, av.me)(vv, zv, ev, gv, Sv) && hv)
```

#### 591. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5235` → after: `L5310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5310) · [Before (L5235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5235)

```diff
-               if (Wz + Nz.V > sz.byteLength) throw new Error(`the recorder module's events end mid-head at ${Wz}`);
+               if (Sv + Wv.Y > Pv.byteLength) throw new Error(`the recorder module's events end mid-head at ${Sv}`);
```

#### 592. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5239-L5241` → after: `L5314-L5316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5314-L5316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5314-L5316) · [Before (L5239-L5241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5239-L5241)

```diff
-                 oz = Wz + Nz.V;
-               if (oz + Oz > sz.byteLength || !tz(Xz, Fz, oz, Oz)) throw new Error(`the recorder module wrote a malformed event ${Xz} (${Oz} bytes) at ${Wz}`);
-               Wz = oz + (0, Nz.ke)(Oz)
+                 pv = Sv + Wv.Y;
+               if (pv + gv > Pv.byteLength || !zv(ev, hv, pv, gv)) throw new Error(`the recorder module wrote a malformed event ${ev} (${gv} bytes) at ${Sv}`);
+               Sv = pv + (0, Wv.Le)(gv)
```

#### 593. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5259` → after: `L5334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5334) · [Before (L5259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5259)

```diff
-         const sz = null !== (tz = this.parts.get(zz.save)) && void 0 !== tz ? tz : [];
+         const Pv = null !== (zv = this.parts.get(vv.save)) && void 0 !== zv ? zv : [];
```

#### 594. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5283` → after: `L5358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5358) · [Before (L5283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5283)

```diff
-       return sz.e(57).then((() => sz(41688)))
+       return Pv.e(58).then((() => Pv(41945)))
```

#### 595. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5308` → after: `L5383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5383) · [Before (L5308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5308)

```diff
-             tz === Nz.Tc.Edited ? null === (Fz = this.viewer) || void 0 === Fz || Fz.saveDone(sz) : this.recorder.fileReady(tz, sz)
+             zv === Wv.qd.Edited ? null === (hv = this.viewer) || void 0 === hv || hv.saveDone(Pv) : this.recorder.fileReady(zv, Pv)
```

#### 596. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5340` → after: `L5415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5415) · [Before (L5340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5340)

```diff
-               case Nz.Gc.FileDiscarded:
+               case Wv.cd.FileDiscarded:
```

#### 597. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5343` → after: `L5418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5418) · [Before (L5343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5343)

```diff
-               case Nz.Gc.SaveFailed:
+               case Wv.cd.SaveFailed:
```

#### 598. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5346` → after: `L5421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5421) · [Before (L5346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5346)

```diff
-               case Nz.Gc.SaveBusy:
+               case Wv.cd.SaveBusy:
```

#### 599. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5369` → after: `L5444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5444) · [Before (L5369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5369)

```diff
-         return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (zz = this.deps.loadViewer) && void 0 !== zz ? zz : MW)().catch((zz => {
+         return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (vv = this.deps.loadViewer) && void 0 !== vv ? vv : QS)().catch((vv => {
```

#### 600. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5387` → after: `L5462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5462) · [Before (L5387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5387)

```diff
-           zz > 0 && this.recorder.wN()
+           vv > 0 && this.recorder.MT()
```

#### 601. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5399` → after: `L5474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5474) · [Before (L5399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5399)

```diff
-         zz === Nz.Tc.Edited ? null === (tz = this.viewer) || void 0 === tz || tz.saveFailed(!1) : this.recorder.failed(zz)
+         vv === Wv.qd.Edited ? null === (zv = this.viewer) || void 0 === zv || zv.saveFailed(!1) : this.recorder.failed(vv)
```

#### 602. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5402-L5405` → after: `L5477-L5480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5477-L5480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5477-L5480) · [Before (L5402-L5405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5402-L5405)

```diff
-     var hW = sz(39748),
-       QW = sz(39765),
-       kW = sz(4438),
-       iW = sz(40080);
+     var AS = Pv(39933),
+       LS = Pv(39949),
+       HS = Pv(4550),
+       MS = Pv(40295);
```

#### 603. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5412` → after: `L5487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5487) · [Before (L5412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5412)

```diff
-         const sz = (0, dz.p)(0, performance.now()),
+         const Pv = (0, Qv.s)(0, performance.now()),
```

#### 604. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5414-L5415` → after: `L5489-L5490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5489-L5490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5489-L5490) · [Before (L5414-L5415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5414-L5415)

```diff
-         (0, iW.h)((() => {
-           (0, dz.t)(Nz.qb.MouseDown, 0, 0, 0, sz), (0, dz.t)(Nz.qb.MouseMove, 0, zz * Fz, tz * Fz, 0), (0, dz.t)(Nz.qb.MouseUp, 0, 0, 0, sz)
+         (0, MS.g)((() => {
+           (0, Qv.x)(Wv.Bb.MouseDown, 0, 0, 0, Pv), (0, Qv.x)(Wv.Bb.MouseMove, 0, vv * hv, zv * hv, 0), (0, Qv.x)(Wv.Bb.MouseUp, 0, 0, 0, Pv)
```

#### 605. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5420` → after: `L5495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5495) · [Before (L5420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5420)

```diff
-         this.analogue[0] = null !== (tz = null === zz || void 0 === zz ? void 0 : zz.x) && void 0 !== tz ? tz : 0, this.analogue[1] = null !== (sz = null === zz || void 0 === zz ? void 0 : zz.y) && void 0 !== sz ? sz : 0, this.send()
+         this.analogue[0] = null !== (zv = null === vv || void 0 === vv ? void 0 : vv.x) && void 0 !== zv ? zv : 0, this.analogue[1] = null !== (Pv = null === vv || void 0 === vv ? void 0 : vv.y) && void 0 !== Pv ? Pv : 0, this.send()
```

#### 606. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5424` → after: `L5499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5499) · [Before (L5424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5424)

```diff
-         this.keys = tz ? this.keys | sz : this.keys & ~sz, this.send()
+         this.keys = zv ? this.keys | Pv : this.keys & ~Pv, this.send()
```

#### 607. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5431` → after: `L5506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5506) · [Before (L5431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5431)

```diff
-         this.unsent = null !== zz && !(0, wz.He)(zz, 0, this.analogue, this.keys)
+         this.unsent = null !== vv && !(0, av.Ce)(vv, 0, this.analogue, this.keys)
```

#### 608. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5434-L5437` → after: `L5509-L5512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5509-L5512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5509-L5512) · [Before (L5434-L5437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5434-L5437)

```diff
-     var lW = sz(695),
-       nW = sz(292),
-       aW = sz(106),
-       qW = sz(8755);
+     var BS = Pv(716),
+       JS = Pv(284),
+       ES = Pv(73),
+       oS = Pv(8909);
```

#### 609. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5440-L5441` → after: `L5515-L5516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5515-L5516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5515-L5516) · [Before (L5440-L5441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5440-L5441)

```diff
-       const zz = Fz.b.get("clientEscMenuOptions"),
-         tz = (0, lW.n)(zz);
+       const vv = hv.c.get("clientEscMenuOptions"),
+         zv = (0, BS.k)(vv);
```

#### 610. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5443` → after: `L5518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5518) · [Before (L5443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5443)

```diff
-         mouse: (0, aW.isMobile)() ? tz : zz.mouseSensitivity,
+         mouse: (0, ES.isMobile)() ? zv : vv.mouseSensitivity,
```

#### 611. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5450-L5451` → after: `L5525-L5526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5525-L5526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5525-L5526) · [Before (L5450-L5451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5450-L5451)

```diff
-       const zz = Fz.b.get("clientEscMenuOptions"),
-         tz = Fz.b.get("isTouchScreen") ? (0, lW.n)(zz) : zz.mouseSensitivity,
+       const vv = hv.c.get("clientEscMenuOptions"),
+         zv = hv.c.get("isTouchScreen") ? (0, BS.k)(vv) : vv.mouseSensitivity,
```

#### 612. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5453` → after: `L5528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5528) · [Before (L5453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5453)

```diff
-       return sz > 0 ? tz / sz : 1
+       return Pv > 0 ? zv / Pv : 1
```

#### 613. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5458` → after: `L5533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5533) · [Before (L5458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5458)

```diff
-         zz.setSoundPrefs(Fz.b.get("soundVolume"), Fz.b.get("soundOnFromAd"))
+         vv.setSoundPrefs(hv.c.get("soundVolume"), hv.c.get("soundOnFromAd"))
```

#### 614. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5467` → after: `L5542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5542) · [Before (L5467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5467)

```diff
-         } = Fz.b.get("clientEscMenuOptions"), oz = {
+         } = hv.c.get("clientEscMenuOptions"), pv = {
```

#### 615. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5473` → after: `L5548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5548) · [Before (L5473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5473)

```diff
-         sz && (0, Nz._d)(sz) === (0, Nz._d)(oz) && sz.fogChunks === Xz || (sz = oz, zz.setEnvPrefs(sz))
+         Pv && (0, Wv.se)(Pv) === (0, Wv.se)(pv) && Pv.fogChunks === ev || (Pv = pv, vv.setEnvPrefs(Pv))
```

#### 616. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5478` → after: `L5553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5553) · [Before (L5478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5478)

```diff
-           const zz = Fz.b.get("clientEscMenuOptions");
+           const vv = hv.c.get("clientEscMenuOptions");
```

#### 617. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5480` → after: `L5555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5555) · [Before (L5480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5480)

```diff
-             nametagsHidden: Fz.b.get("areNametagsHidden"),
+             nametagsHidden: hv.c.get("areNametagsHidden"),
```

#### 618. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5487` → after: `L5562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5562) · [Before (L5487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5487)

```diff
-             nametagCutDistance: (0, qW.g)()
+             nametagCutDistance: (0, oS.f)()
```

#### 619. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5490` → after: `L5565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5565) · [Before (L5490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5490)

```diff
-         (0, Cz.Zd)(Xz, tz) || (Xz = tz, zz.setUiPrefs(tz))
+         (0, Ov.Ud)(ev, zv) || (ev = zv, vv.setUiPrefs(zv))
```

#### 620. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5495` → after: `L5570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5570) · [Before (L5495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5495)

```diff
-         (0, Cz.Zd)(vz, tz) || (vz = tz, zz.setLookPrefs(tz))
+         (0, Ov.Ud)(dv, zv) || (dv = zv, vv.setLookPrefs(zv))
```

#### 621. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5498` → after: `L5573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5573) · [Before (L5498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5498)

```diff
-       const Kz = [(0, Oz.q)("appManagerUpdated|soundVolume", tz), (0, Oz.q)("appManagerUpdated|soundOnFromAd", tz), (0, Oz.q)("appManagerUpdated|clientEscMenuOptions", (() => {
+       const lv = [(0, gv.l)("appManagerUpdated|soundVolume", zv), (0, gv.l)("appManagerUpdated|soundOnFromAd", zv), (0, gv.l)("appManagerUpdated|clientEscMenuOptions", (() => {
```

#### 622. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5500` → after: `L5575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5575) · [Before (L5500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5500)

```diff
-       })), (0, Oz.q)("appManagerUpdated|areNametagsHidden", oz), (0, Oz.q)("appManagerUpdated|showDistantNametags", oz)];
+       })), (0, gv.l)("appManagerUpdated|areNametagsHidden", pv), (0, gv.l)("appManagerUpdated|showDistantNametags", pv)];
```

#### 623. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5505-L5510` → after: `L5580-L5585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5580-L5585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5580-L5585) · [Before (L5505-L5510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5505-L5510)

```diff
-     var pW = sz(40021),
-       fW = sz(40026);
-     var EW = (0, fW.c)("lend"),
-       zX = (0, fW.c)("starting"),
-       tX = (0, fW.c)("generation"),
-       sX = (0, fW.c)("end");
+     var XS = Pv(40217),
+       uS = Pv(40221);
+     var ve = (0, uS.b)("lend"),
+       ze = (0, uS.b)("starting"),
+       Pe = (0, uS.b)("generation"),
+       he = (0, uS.b)("end");
```

#### 624. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5527` → after: `L5602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5602) · [Before (L5527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5527)

```diff
-         return null !== (0, pW.c)(this, EW)[EW] || (0, pW.c)(this, zX)[zX]
+         return null !== (0, XS.e)(this, ve)[ve] || (0, XS.e)(this, ze)[ze]
```

#### 625. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5531-L5532` → after: `L5606-L5607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5606-L5607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5606-L5607) · [Before (L5531-L5532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5531-L5532)

```diff
-         const tz = (0, pW.c)(this, tX)[tX];
-         (0, pW.c)(this, zX)[zX] = !0;
+         const zv = (0, XS.e)(this, Pe)[Pe];
+         (0, XS.e)(this, ze)[ze] = !0;
```

#### 626. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5536` → after: `L5611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5611) · [Before (L5536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5536)

```diff
-           (0, pW.c)(this, zX)[zX] = !1
+           (0, XS.e)(this, ze)[ze] = !1
```

#### 627. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5538` → after: `L5613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5613) · [Before (L5538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5538)

```diff
-         if (tz !== (0, pW.c)(this, tX)[tX]) return "refused";
+         if (zv !== (0, XS.e)(this, Pe)[Pe]) return "refused";
```

#### 628. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5547-L5548` → after: `L5622-L5623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5622-L5623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5622-L5623) · [Before (L5547-L5548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5547-L5548)

```diff
-           0 !== oz ? (new Uint8Array(tz.buffer, oz, Oz.length).set(Oz), zz.uWz(sz.headLen, Fz, Wz) && (Xz = "sealing")) : Xz = "tooLarge"
-         }), !0), "sealing" !== Xz ? (sz.end(), Xz) : ((0, pW.c)(this, EW)[EW] = sz, "sealing")
+           0 !== pv ? (new Uint8Array(zv.buffer, pv, gv.length).set(gv), vv.thv(Pv.headLen, hv, Sv) && (ev = "sealing")) : ev = "tooLarge"
+         }), !0), "sealing" !== ev ? (Pv.end(), ev) : ((0, XS.e)(this, ve)[ve] = Pv, "sealing")
```

#### 629. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5551` → after: `L5626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5626) · [Before (L5551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5551)

```diff
-         const zz = (0, pW.c)(this, EW)[EW];
+         const vv = (0, XS.e)(this, ve)[ve];
```

#### 630. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5556-L5558` → after: `L5631-L5633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5631-L5633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5631-L5633) · [Before (L5556-L5558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5556-L5558)

```diff
-             tz = zz.NWz(), tz > 0 && (sz = zz.bWz())
-           }))) return (0, pW.c)(this, sX)[sX](zz, "stopped");
-         if (tz < 0) return (0, pW.c)(this, sX)[sX](zz, "read");
+             zv = vv.qhv(), zv > 0 && (Pv = vv.Ihv())
+           }))) return (0, XS.e)(this, he)[he](vv, "stopped");
+         if (zv < 0) return (0, XS.e)(this, he)[he](vv, "read");
```

#### 631. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5568` → after: `L5643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5643) · [Before (L5568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5568)

```diff
-           zz.wWz()
+           vv.Qhv()
```

#### 632. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5570` → after: `L5645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5645) · [Before (L5570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5570)

```diff
-         const Oz = (0, pW.c)(this, sX)[sX](zz, Xz ? "givenUp" : "stopped");
+         const gv = (0, XS.e)(this, he)[he](vv, ev ? "givenUp" : "stopped");
```

#### 633. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5574-L5575` → after: `L5649-L5650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5649-L5650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5649-L5650) · [Before (L5574-L5575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5574-L5575)

```diff
-         (0, pW.c)(this, tX)[tX]++;
-         const zz = (0, pW.c)(this, EW)[EW];
+         (0, XS.e)(this, Pe)[Pe]++;
+         const vv = (0, XS.e)(this, ve)[ve];
```

#### 634. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5577-L5578` → after: `L5652-L5653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5652-L5653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5652-L5653) · [Before (L5577-L5578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5577-L5578)

```diff
-           zz.wWz()
-         })), (0, pW.c)(this, sX)[sX](zz, "stopped"))
+           vv.Qhv()
+         })), (0, XS.e)(this, he)[he](vv, "stopped"))
```

#### 635. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5583` → after: `L5658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5658) · [Before (L5583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5583)

```diff
-       return (0, pW.c)(this, EW)[EW] = null, zz.end(), tz
+       return (0, XS.e)(this, ve)[ve] = null, vv.end(), zv
```

#### 636. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5604` → after: `L5679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5679) · [Before (L5604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5604)

```diff
-         if (zz.busy() || !OX(zz.memoryBytes(), zz.clipSeconds())) return "Ow";
+         if (vv.busy() || !pe(vv.memoryBytes(), vv.clipSeconds())) return "Yw";
```

#### 637. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5612` → after: `L5687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5687) · [Before (L5612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5612)

```diff
-         if (!sz) return zz.trapped() ? "trapped" : zz.lw() ? "lw" : "failed";
+         if (!Pv) return vv.trapped() ? "trapped" : vv.ea() ? "ea" : "failed";
```

#### 638. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5619-L5659` → after: `L5694-L5734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5694-L5734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5694-L5734) · [Before (L5619-L5659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5619-L5659)

```diff
-       KX = new Set([Nz.Kc.ToggleRecording, Nz.Kc.SaveClip]);
-     var uX = (0, fW.c)("bindings"),
-       NX = (0, fW.c)("module"),
-       bX = (0, fW.c)("memory"),
-       wX = (0, fW.c)("trapped"),
-       DX = (0, fW.c)("lw"),
-       gX = (0, fW.c)("recycleDue"),
-       HX = (0, fW.c)("loading"),
-       BX = (0, fW.c)("generation"),
-       PX = (0, fW.c)("viewDrawn"),
-       rX = (0, fW.c)("clip"),
-       YX = (0, fW.c)("session"),
-       xX = (0, fW.c)("control"),
-       mX = (0, fW.c)("deferred"),
-       JX = (0, fW.c)("coreU8"),
-       IX = (0, fW.c)("coreU32"),
- ... (25 more removed lines; see GitHub link above)
+       Te = new Set([Wv.fd.ToggleRecording, Wv.fd.SaveClip]);
+     var We = (0, uS.b)("bindings"),
+       we = (0, uS.b)("module"),
+       ae = (0, uS.b)("memory"),
+       se = (0, uS.b)("trapped"),
+       Ce = (0, uS.b)("ea"),
+       ie = (0, uS.b)("recycleDue"),
+       ce = (0, uS.b)("loading"),
+       Ge = (0, uS.b)("generation"),
+       me = (0, uS.b)("viewDrawn"),
+       je = (0, uS.b)("clip"),
+       fe = (0, uS.b)("session"),
+       Fe = (0, uS.b)("control"),
+       Ye = (0, uS.b)("deferred"),
+       ne = (0, uS.b)("coreU8"),
+       Oe = (0, uS.b)("coreU32"),
+ ... (25 more added lines; see GitHub link above)
```

#### 639. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5759-L5760` → after: `L5834-L5835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5834-L5835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5834-L5835) · [Before (L5759-L5760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5759-L5760)

```diff
-         }), (0, pW.c)(this, eX)[eX] = new FX({
-           ensureLoaded: () => (0, pW.c)(this, AX)[AX](),
+         }), (0, XS.e)(this, Ke)[Ke] = new Se({
+           ensureLoaded: () => (0, XS.e)(this, qe)[qe](),
```

#### 640. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5762-L5763` → after: `L5837-L5838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5837-L5838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5837-L5838) · [Before (L5762-L5763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5762-L5763)

```diff
-             tz && (0, pW.c)(this, GX)[GX]("an edited save's stage");
-             const sz = (0, pW.c)(this, RX)[RX](((tz, sz) => (zz(tz, sz), !0)));
+             zv && (0, XS.e)(this, Ue)[Ue]("an edited save's stage");
+             const Pv = (0, XS.e)(this, ke)[ke](((zv, Pv) => (vv(zv, Pv), !0)));
```

#### 641. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5771` → after: `L5846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5846) · [Before (L5771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5771)

```diff
-         return null !== (0, pW.c)(this, NX)[NX]
+         return null !== (0, XS.e)(this, we)[we]
```

#### 642. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5774` → after: `L5849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5849) · [Before (L5774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5774)

```diff
-         return (0, pW.c)(this, wX)[wX]
+         return (0, XS.e)(this, se)[se]
```

#### 643. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5777` → after: `L5852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5852) · [Before (L5777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5777)

```diff
-         return null !== (0, pW.c)(this, HX)[HX]
+         return null !== (0, XS.e)(this, ce)[ce]
```

#### 644. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5780` → after: `L5855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5855) · [Before (L5780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5780)

```diff
-         (0, pW.c)(this, DX)[DX] || (0, pW.c)(this, wX)[wX] || (0, pW.c)(this, NX)[NX] || (0, pW.c)(this, HX)[HX] || this.deps.prefetch()
+         (0, XS.e)(this, Ce)[Ce] || (0, XS.e)(this, se)[se] || (0, XS.e)(this, we)[we] || (0, XS.e)(this, ce)[ce] || this.deps.prefetch()
```

#### 645. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5783` → after: `L5858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5858) · [Before (L5783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5783)

```diff
-         (0, pW.c)(this, PX)[PX] = !0, (0, pW.c)(this, TX)[TX]() && (0, pW.c)(this, jX)[jX]()
+         (0, XS.e)(this, me)[me] = !0, (0, XS.e)(this, Re)[Re]() && (0, XS.e)(this, te)[te]()
```

#### 646. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5786` → after: `L5861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5861) · [Before (L5786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5786)

```diff
-         (0, pW.c)(this, rX)[rX] = {
+         (0, XS.e)(this, je)[je] = {
```

#### 647. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5789` → after: `L5864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5864) · [Before (L5789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5789)

```diff
-         }, (0, pW.c)(this, LX)[LX](Nz.Ec.Prefs, XX(zz, tz)), zz && (0, pW.c)(this, PX)[PX] && (0, pW.c)(this, jX)[jX]()
+         }, (0, XS.e)(this, ye)[ye](Wv.$c.Prefs, ge(vv, zv)), vv && (0, XS.e)(this, me)[me] && (0, XS.e)(this, te)[te]()
```

#### 648. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5795-L5796` → after: `L5870-L5871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5870-L5871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5870-L5871) · [Before (L5795-L5796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5795-L5796)

```diff
-         if (KX.has(zz)) return (0, pW.c)(this, NX)[NX] ? void(0, pW.c)(this, LX)[LX](Nz.Ec.Control, tz) : ((0, pW.c)(this, xX)[xX] = tz, void(0, pW.c)(this, jX)[jX]());
-         (0, pW.c)(this, DX)[DX] || this.deps.coreCommand(Nz.Ec.Control, tz)
+         if (Te.has(vv)) return (0, XS.e)(this, we)[we] ? void(0, XS.e)(this, ye)[ye](Wv.$c.Control, zv) : ((0, XS.e)(this, Fe)[Fe] = zv, void(0, XS.e)(this, te)[te]());
+         (0, XS.e)(this, Ce)[Ce] || this.deps.coreCommand(Wv.$c.Control, zv)
```

#### 649. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5799` → after: `L5874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5874) · [Before (L5799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5799)

```diff
-         (0, pW.c)(this, YX)[YX] = zz, (0, pW.c)(this, ZX)[ZX](zz)
+         (0, XS.e)(this, fe)[fe] = vv, (0, XS.e)(this, Ve)[Ve](vv)
```

#### 650. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5802` → after: `L5877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5877) · [Before (L5802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5802)

```diff
-         (0, pW.c)(this, LX)[LX](Nz.Ec.FilePartDone, function(zz, tz) {
+         (0, XS.e)(this, ye)[ye](Wv.$c.FilePartDone, function(vv, zv) {
```

#### 651. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5809` → after: `L5884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5884) · [Before (L5809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5809)

```diff
-         return (0, pW.c)(this, LX)[LX](Nz.Ec.FileDone, function(zz) {
+         return (0, XS.e)(this, ye)[ye](Wv.$c.FileDone, function(vv) {
```

#### 652. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5812` → after: `L5887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5887) · [Before (L5812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5812)

```diff
-         }(zz)), (0, pW.c)(this, MX)[MX]()
+         }(vv)), (0, XS.e)(this, Qe)[Qe]()
```

#### 653. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5815` → after: `L5890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5890) · [Before (L5815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5815)

```diff
-         return (0, pW.c)(this, GX)[GX]("saveEdited"), (0, pW.c)(this, eX)[eX].start(zz)
+         return (0, XS.e)(this, Ue)[Ue]("saveEdited"), (0, XS.e)(this, Ke)[Ke].start(vv)
```

#### 654. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5818-L5824` → after: `L5893-L5899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5893-L5899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5893-L5899) · [Before (L5818-L5824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5818-L5824)

```diff
-         if (!(0, pW.c)(this, NX)[NX]) return;
-         "read" === (0, pW.c)(this, eX)[eX].beforeRecorderStep() && (0, pW.c)(this, MX)[MX]();
-         const zz = (0, pW.c)(this, gX)[gX];
-         (0, pW.c)(this, gX)[gX] = null;
-         const tz = (0, pW.c)(this, NX)[NX],
-           sz = (0, pW.c)(this, bX)[bX];
-         if (!tz || !sz) return void(null === zz || void 0 === zz || zz.resolve((0, pW.c)(this, wX)[wX] ? "trapped" : "Ow"));
+         if (!(0, XS.e)(this, we)[we]) return;
+         "read" === (0, XS.e)(this, Ke)[Ke].beforeRecorderStep() && (0, XS.e)(this, Qe)[Qe]();
+         const vv = (0, XS.e)(this, ie)[ie];
+         (0, XS.e)(this, ie)[ie] = null;
+         const zv = (0, XS.e)(this, we)[we],
+           Pv = (0, XS.e)(this, ae)[ae];
+         if (!zv || !Pv) return void(null === vv || void 0 === vv || vv.resolve((0, XS.e)(this, se)[se] ? "trapped" : "Yw"));
```

#### 655. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5827` → after: `L5902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5902) · [Before (L5827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5827)

```diff
-         } = this.deps, Wz = Fz.HWz(2);
+         } = this.deps, Sv = hv.Lhv(2);
```

#### 656. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5832-L5833` → after: `L5907-L5908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5907-L5908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5907-L5908) · [Before (L5832-L5833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5832-L5833)

```diff
-           const zz = (0, pW.c)(this, qX)[qX]();
-           Uz = null !== (uz = zz[Wz >>> 2]) && void 0 !== uz ? uz : 0, Kz = null !== (Nz = zz[1 + (Wz >>> 2)]) && void 0 !== Nz ? Nz : 0
+           const vv = (0, XS.e)(this, oe)[oe]();
+           Nv = null !== (Tv = vv[Sv >>> 2]) && void 0 !== Tv ? Tv : 0, lv = null !== (Wv = vv[1 + (Sv >>> 2)]) && void 0 !== Wv ? Wv : 0
```

#### 657. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5838` → after: `L5913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5913) · [Before (L5838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5838)

```diff
-             0 !== zz && (0, pW.c)(this, SX)[SX](sz).set((0, pW.c)(this, aX)[aX]().subarray(Uz, Uz + Kz), zz)
+             0 !== vv && (0, XS.e)(this, be)[be](Pv).set((0, XS.e)(this, Ee)[Ee]().subarray(Nv, Nv + lv), vv)
```

#### 658. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5840` → after: `L5915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5915) · [Before (L5840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5840)

```diff
-           Xz = tz.step(), Oz = tz.BWz(), oz = tz.PWz(), vz = tz.rWz()
+           ev = zv.step(), gv = zv.Hhv(), pv = zv.Mhv(), dv = zv.yhv()
```

#### 659. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5842` → after: `L5917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5917) · [Before (L5842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5842)

```diff
-           if (!(0, pW.c)(this, fX)[fX](bz)) throw null === zz || void 0 === zz || zz.resolve("Ow"), bz;
+           if (!(0, XS.e)(this, ue)[ue](wv)) throw null === vv || void 0 === vv || vv.resolve("Yw"), wv;
```

#### 660. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5846-L5847` → after: `L5921-L5922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5921-L5922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5921-L5922) · [Before (L5846-L5847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5846-L5847)

```diff
-           const zz = Fz.YWz(2, Xz);
-           0 !== zz && (0, pW.c)(this, aX)[aX]().set((0, pW.c)(this, SX)[SX](sz).subarray(Oz, Oz + Xz), zz)
+           const vv = hv.Bhv(2, ev);
+           0 !== vv && (0, XS.e)(this, Ee)[Ee]().set((0, XS.e)(this, be)[be](Pv).subarray(gv, gv + ev), vv)
```

#### 661. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5850` → after: `L5925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5925) · [Before (L5850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5850)

```diff
-           (0, pW.c)(this, mX)[mX] = [];
+           (0, XS.e)(this, Ye)[Ye] = [];
```

#### 662. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5854` → after: `L5929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5929) · [Before (L5854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5854)

```diff
-             throw null === zz || void 0 === zz || zz.resolve("Ow"), bz
+             throw null === vv || void 0 === vv || vv.resolve("Yw"), wv
```

#### 663. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5856-L5858` → after: `L5931-L5933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5931-L5933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5931-L5933) · [Before (L5856-L5858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5856-L5858)

```diff
-             const zz = (0, pW.c)(this, mX)[mX];
-             (0, pW.c)(this, mX)[mX] = null;
-             for (const [tz, sz] of zz)(0, pW.c)(this, LX)[LX](tz, sz)
+             const vv = (0, XS.e)(this, Ye)[Ye];
+             (0, XS.e)(this, Ye)[Ye] = null;
+             for (const [zv, Pv] of vv)(0, XS.e)(this, ye)[ye](zv, Pv)
```

#### 664. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5861-L5862` → after: `L5936-L5937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5936-L5937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5936-L5937) · [Before (L5861-L5862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5861-L5862)

```diff
-         if (!(0, pW.c)(this, TX)[TX]() && !(0, pW.c)(this, cX)[cX]()) return (0, pW.c)(this, lX)[lX](), void(null === zz || void 0 === zz || zz.resolve("Ow"));
-         null === zz || void 0 === zz || zz.resolve((0, pW.c)(this, iX)[iX]())
+         if (!(0, XS.e)(this, Re)[Re]() && !(0, XS.e)(this, xe)[xe]()) return (0, XS.e)(this, Be)[Be](), void(null === vv || void 0 === vv || vv.resolve("Yw"));
+         null === vv || void 0 === vv || vv.resolve((0, XS.e)(this, Me)[Me]())
```

#### 665. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5865` → after: `L5940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5940) · [Before (L5865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5865)

```diff
-         (0, pW.c)(this, DX)[DX] = !0, (0, pW.c)(this, lX)[lX]()
+         (0, XS.e)(this, Ce)[Ce] = !0, (0, XS.e)(this, Be)[Be]()
```

#### 666. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5870` → after: `L5945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5945) · [Before (L5870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5870)

```diff
-       (0, pW.c)(this, LX)[LX](Nz.Ec.Session, function(zz) {
+       (0, XS.e)(this, ye)[ye](Wv.$c.Session, function(vv) {
```

#### 667. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5892` → after: `L5967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5967) · [Before (L5892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5892)

```diff
-       return null !== (zz = null === (tz = (0, pW.c)(this, rX)[rX]) || void 0 === tz ? void 0 : tz.on) && void 0 !== zz && zz
+       return null !== (vv = null === (zv = (0, XS.e)(this, je)[je]) || void 0 === zv ? void 0 : zv.on) && void 0 !== vv && vv
```

#### 668. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5896` → after: `L5971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5971) · [Before (L5896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5896)

```diff
-       const zz = (0, pW.c)(this, NX)[NX];
+       const vv = (0, XS.e)(this, we)[we];
```

#### 669. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5901` → after: `L5976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5976) · [Before (L5901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5901)

```diff
-         if (!(0, pW.c)(this, fX)[fX](sz)) throw sz
+         if (!(0, XS.e)(this, ue)[ue](Pv)) throw Pv
```

#### 670. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5903` → after: `L5978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5978) · [Before (L5903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5903)

```diff
-       return tz || (0, pW.c)(this, eX)[eX].active
+       return zv || (0, XS.e)(this, Ke)[Ke].active
```

#### 671. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5906` → after: `L5981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5981) · [Before (L5906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5906)

```diff
-       !(0, pW.c)(this, DX)[DX] && this.deps.allowed() ? await (0, pW.c)(this, AX)[AX]() : (0, pW.c)(this, xX)[xX] = null
+       !(0, XS.e)(this, Ce)[Ce] && this.deps.allowed() ? await (0, XS.e)(this, qe)[qe]() : (0, XS.e)(this, Fe)[Fe] = null
```

#### 672. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5910` → after: `L5985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5985) · [Before (L5910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5910)

```diff
-       return (0, pW.c)(this, wX)[wX] || (0, pW.c)(this, DX)[DX] ? Promise.resolve(!1) : (0, pW.c)(this, NX)[NX] ? Promise.resolve(!0) : ((0, pW.c)(this, HX)[HX] ??= (0, pW.c)(this, yX)[yX](), (0, pW.c)(this, HX)[HX])
+       return (0, XS.e)(this, se)[se] || (0, XS.e)(this, Ce)[Ce] ? Promise.resolve(!1) : (0, XS.e)(this, we)[we] ? Promise.resolve(!0) : ((0, XS.e)(this, ce)[ce] ??= (0, XS.e)(this, Ie)[Ie](), (0, XS.e)(this, ce)[ce])
```

#### 673. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5915` → after: `L5990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5990) · [Before (L5915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5915)

```diff
-         return zz = await (0, pW.c)(this, hX)[hX](), zz
+         return vv = await (0, XS.e)(this, Ae)[Ae](), vv
```

#### 674. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5917` → after: `L5992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5992) · [Before (L5917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5917)

```diff
-         zz || ((0, pW.c)(this, xX)[xX] = null), (0, pW.c)(this, HX)[HX] = null
+         vv || ((0, XS.e)(this, Fe)[Fe] = null), (0, XS.e)(this, ce)[ce] = null
```

#### 675. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5922-L5923` → after: `L5997-L5998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5997-L5998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5997-L5998) · [Before (L5922-L5923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5922-L5923)

```diff
-       if (!(0, pW.c)(this, NX)[NX]) return Promise.resolve((0, pW.c)(this, wX)[wX] ? "trapped" : "Ow");
-       if (!(0, pW.c)(this, gX)[gX]) {
+       if (!(0, XS.e)(this, we)[we]) return Promise.resolve((0, XS.e)(this, se)[se] ? "trapped" : "Yw");
+       if (!(0, XS.e)(this, ie)[ie]) {
```

#### 676. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5928` → after: `L6003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6003) · [Before (L5928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5928)

```diff
-         (0, pW.c)(this, gX)[gX] = {
+         (0, XS.e)(this, ie)[ie] = {
```

#### 677. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5933` → after: `L6008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6008) · [Before (L5933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5933)

```diff
-       return (0, pW.c)(this, gX)[gX].promise
+       return (0, XS.e)(this, ie)[ie].promise
```

#### 678. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5937-L5938` → after: `L6012-L6013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6012-L6013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6012-L6013) · [Before (L5937-L5938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5937-L5938)

```diff
-       const tz = (0, pW.c)(this, gX)[gX];
-       (0, pW.c)(this, gX)[gX] = null, null === tz || void 0 === tz || tz.resolve(zz)
+       const zv = (0, XS.e)(this, ie)[ie];
+       (0, XS.e)(this, ie)[ie] = null, null === zv || void 0 === zv || zv.resolve(vv)
```

#### 679. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5941` → after: `L6016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6016) · [Before (L5941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5941)

```diff
-       let zz = (0, pW.c)(this, uX)[uX];
+       let vv = (0, XS.e)(this, We)[We];
```

#### 680. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5943` → after: `L6018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6018) · [Before (L5943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5943)

```diff
-         const tz = (0, pW.c)(this, BX)[BX];
+         const zv = (0, XS.e)(this, Ge)[Ge];
```

#### 681. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5947` → after: `L6022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6022) · [Before (L5947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5947)

```diff
-           return tz === (0, pW.c)(this, BX)[BX] && await (0, pW.c)(this, VX)[VX](sz), !1
+           return zv === (0, XS.e)(this, Ge)[Ge] && await (0, XS.e)(this, re)[re](Pv), !1
```

#### 682. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5949` → after: `L6024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6024) · [Before (L5949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5949)

```diff
-         if (tz !== (0, pW.c)(this, BX)[BX]) return this.deps.unload(), !1;
+         if (zv !== (0, XS.e)(this, Ge)[Ge]) return this.deps.unload(), !1;
```

#### 683. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5951` → after: `L6026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6026) · [Before (L5951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5951)

```diff
-           Wz = (0, pW.c)(this, pX)[pX]((() => Fz.xWz()));
+           Sv = (0, XS.e)(this, Xe)[Xe]((() => hv.Jhv()));
```

#### 684. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5953-L5955` → after: `L6028-L6030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6028-L6030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6028-L6030) · [Before (L5953-L5955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5953-L5955)

```diff
-         const Xz = this.deps.core.mWz();
-         if (Wz !== Xz) return await (0, pW.c)(this, VX)[VX](new Error(`recorder port version ${Wz}, the core's ${Xz}`)), !1;
-         (0, pW.c)(this, uX)[uX] = zz
+         const ev = this.deps.core.Ehv();
+         if (Sv !== ev) return await (0, XS.e)(this, re)[re](new Error(`recorder port version ${Sv}, the core's ${ev}`)), !1;
+         (0, XS.e)(this, We)[We] = vv
```

#### 685. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5959-L5962` → after: `L6034-L6037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6034-L6037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6034-L6037) · [Before (L5959-L5962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5959-L5962)

```diff
-         if (!(0, pW.c)(this, pX)[pX]((() => ((0, pW.c)(this, NX)[NX] = new tz.JWz, (0, pW.c)(this, bX)[bX] = tz.DWz(), !0)))) return !1;
-         (0, pW.c)(this, kX)[kX]();
-         const zz = (0, pW.c)(this, xX)[xX];
-         return (0, pW.c)(this, xX)[xX] = null, zz && (0, pW.c)(this, LX)[LX](Nz.Ec.Control, zz), (0, pW.c)(this, QX)[QX]()
+         if (!(0, XS.e)(this, Xe)[Xe]((() => ((0, XS.e)(this, we)[we] = new zv.ohv, (0, XS.e)(this, ae)[ae] = zv.Zhv(), !0)))) return !1;
+         (0, XS.e)(this, He)[He]();
+         const vv = (0, XS.e)(this, Fe)[Fe];
+         return (0, XS.e)(this, Fe)[Fe] = null, vv && (0, XS.e)(this, ye)[ye](Wv.$c.Control, vv), (0, XS.e)(this, Le)[Le]()
```

#### 686. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5964` → after: `L6039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6039) · [Before (L5964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5964)

```diff
-         return (0, pW.c)(this, lX)[lX](), await (0, pW.c)(this, VX)[VX](sz), !1
+         return (0, XS.e)(this, Be)[Be](), await (0, XS.e)(this, re)[re](Pv), !1
```

#### 687. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5969` → after: `L6044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6044) · [Before (L5969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5969)

```diff
-       return this.deps.core.IWz(0), 1 === this.deps.core.IWz(1) || ((0, pW.c)(this, lX)[lX](), this.deps.failed(UX), !1)
+       return this.deps.core.bhv(0), 1 === this.deps.core.bhv(1) || ((0, XS.e)(this, Be)[Be](), this.deps.failed(le), !1)
```

#### 688. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5973` → after: `L6048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6048) · [Before (L5973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5973)

```diff
-       (0, pW.c)(this, rX)[rX] && (0, pW.c)(this, LX)[LX](Nz.Ec.Prefs, XX((0, pW.c)(this, rX)[rX].on, (0, pW.c)(this, rX)[rX].seconds)), (0, pW.c)(this, YX)[YX] && (0, pW.c)(this, ZX)[ZX]((0, pW.c)(this, YX)[YX])
+       (0, XS.e)(this, je)[je] && (0, XS.e)(this, ye)[ye](Wv.$c.Prefs, ge((0, XS.e)(this, je)[je].on, (0, XS.e)(this, je)[je].seconds)), (0, XS.e)(this, fe)[fe] && (0, XS.e)(this, Ve)[Ve]((0, XS.e)(this, fe)[fe])
```

#### 689. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5981` → after: `L6056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6056) · [Before (L5981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5981)

```diff
-           return null !== (zz = null === (tz = (0, pW.c)(this, rX)[rX]) || void 0 === tz ? void 0 : tz.seconds) && void 0 !== zz ? zz : 0
+           return null !== (vv = null === (zv = (0, XS.e)(this, je)[je]) || void 0 === zv ? void 0 : zv.seconds) && void 0 !== vv ? vv : 0
```

#### 690. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5983-L5986` → after: `L6058-L6061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6058-L6061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6058-L6061) · [Before (L5983-L5986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5983-L5986)

```diff
-         trapped: () => (0, pW.c)(this, wX)[wX],
-         busy: () => (0, pW.c)(this, cX)[cX](),
-         loadInFlight: () => (0, pW.c)(this, HX)[HX],
-         lw: () => (0, pW.c)(this, DX)[DX],
+         trapped: () => (0, XS.e)(this, se)[se],
+         busy: () => (0, XS.e)(this, xe)[xe](),
+         loadInFlight: () => (0, XS.e)(this, ce)[ce],
+         ea: () => (0, XS.e)(this, Ce)[Ce],
```

#### 691. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5988` → after: `L6063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6063) · [Before (L5988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5988)

```diff
-           (0, pW.c)(this, lX)[lX]()
+           (0, XS.e)(this, Be)[Be]()
```

#### 692. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5990` → after: `L6065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6065) · [Before (L5990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5990)

```diff
-         load: () => (0, pW.c)(this, AX)[AX]()
+         load: () => (0, XS.e)(this, qe)[qe]()
```

#### 693. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5995-L5996` → after: `L6070-L6071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6070-L6071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6070-L6071) · [Before (L5995-L5996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5995-L5996)

```diff
-       (0, pW.c)(this, mX)[mX] ? (0, pW.c)(this, mX)[mX].push([zz, tz]): (0, pW.c)(this, RX)[RX](((sz, Fz) => {
-         const Wz = sz.gWz(tz.length);
+       (0, XS.e)(this, Ye)[Ye] ? (0, XS.e)(this, Ye)[Ye].push([vv, zv]): (0, XS.e)(this, ke)[ke](((Pv, hv) => {
+         const Sv = Pv.Ahv(zv.length);
```

#### 694. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6002` → after: `L6077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6077) · [Before (L6002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6002)

```diff
-       (0, pW.c)(this, BX)[BX]++, (0, pW.c)(this, dX)[dX]("Ow"), (0, pW.c)(this, eX)[eX].stop(), this.deps.core.IWz(0), (0, pW.c)(this, nX)[nX](), (0, pW.c)(this, wX)[wX] || ((0, pW.c)(this, uX)[uX] = null, this.deps.unload())
+       (0, XS.e)(this, Ge)[Ge]++, (0, XS.e)(this, Ze)[Ze]("Yw"), (0, XS.e)(this, Ke)[Ke].stop(), this.deps.core.bhv(0), (0, XS.e)(this, Je)[Je](), (0, XS.e)(this, se)[se] || ((0, XS.e)(this, We)[We] = null, this.deps.unload())
```

#### 695. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6006` → after: `L6081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6081) · [Before (L6006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6006)

```diff
-       (0, pW.c)(this, RX)[RX]((zz => {
+       (0, XS.e)(this, ke)[ke]((vv => {
```

#### 696. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6008` → after: `L6083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6083) · [Before (L6008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6008)

```diff
-       })), (0, pW.c)(this, NX)[NX] = null, (0, pW.c)(this, bX)[bX] = null, (0, pW.c)(this, CX)[CX] = null
+       })), (0, XS.e)(this, we)[we] = null, (0, XS.e)(this, ae)[ae] = null, (0, XS.e)(this, De)[De] = null
```

#### 697. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6014` → after: `L6089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6089) · [Before (L6014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6014)

```diff
-       return (null === (zz = (0, pW.c)(this, JX)[JX]) || void 0 === zz ? void 0 : zz.buffer) !== tz && ((0, pW.c)(this, JX)[JX] = new Uint8Array(tz)), (0, pW.c)(this, JX)[JX]
+       return (null === (vv = (0, XS.e)(this, ne)[ne]) || void 0 === vv ? void 0 : vv.buffer) !== zv && ((0, XS.e)(this, ne)[ne] = new Uint8Array(zv)), (0, XS.e)(this, ne)[ne]
```

#### 698. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6020` → after: `L6095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6095) · [Before (L6020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6020)

```diff
-       return (null === (zz = (0, pW.c)(this, IX)[IX]) || void 0 === zz ? void 0 : zz.buffer) !== tz && ((0, pW.c)(this, IX)[IX] = new Uint32Array(tz, 0, tz.byteLength >>> 2)), (0, pW.c)(this, IX)[IX]
+       return (null === (vv = (0, XS.e)(this, Oe)[Oe]) || void 0 === vv ? void 0 : vv.buffer) !== zv && ((0, XS.e)(this, Oe)[Oe] = new Uint32Array(zv, 0, zv.byteLength >>> 2)), (0, XS.e)(this, Oe)[Oe]
```

#### 699. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6026` → after: `L6101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6101) · [Before (L6026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6026)

```diff
-       return (null === (tz = (0, pW.c)(this, CX)[CX]) || void 0 === tz ? void 0 : tz.buffer) !== sz && ((0, pW.c)(this, CX)[CX] = new Uint8Array(sz)), (0, pW.c)(this, CX)[CX]
+       return (null === (zv = (0, XS.e)(this, De)[De]) || void 0 === zv ? void 0 : zv.buffer) !== Pv && ((0, XS.e)(this, De)[De] = new Uint8Array(Pv)), (0, XS.e)(this, De)[De]
```

#### 700. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6035-L6037` → after: `L6110-L6112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6110-L6112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6110-L6112) · [Before (L6035-L6037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6035-L6037)

```diff
-       const tz = (0, pW.c)(this, NX)[NX],
-         sz = (0, pW.c)(this, bX)[bX];
-       if (tz && sz) return (0, pW.c)(this, pX)[pX]((() => zz(tz, sz)))
+       const zv = (0, XS.e)(this, we)[we],
+         Pv = (0, XS.e)(this, ae)[ae];
+       if (zv && Pv) return (0, XS.e)(this, Xe)[Xe]((() => vv(zv, Pv)))
```

#### 701. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6041` → after: `L6116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6116) · [Before (L6041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6041)

```diff
-       if (!(0, pW.c)(this, wX)[wX]) try {
+       if (!(0, XS.e)(this, se)[se]) try {
```

#### 702. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6044` → after: `L6119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6119) · [Before (L6044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6044)

```diff
-         if (!(0, pW.c)(this, fX)[fX](tz)) throw tz;
+         if (!(0, XS.e)(this, ue)[ue](zv)) throw zv;
```

#### 703. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6050` → after: `L6125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6125) · [Before (L6050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6050)

```diff
-       return zz instanceof WebAssembly.RuntimeError && ((0, pW.c)(this, wX)[wX] = !0, (0, pW.c)(this, NX)[NX] = null, (0, pW.c)(this, bX)[bX] = null, (0, pW.c)(this, CX)[CX] = null, (0, pW.c)(this, uX)[uX] = null, (0, pW.c)(this, xX)[xX] = null, (0, pW.c)(this, dX)[dX]("trapped") … [truncated]
+       return vv instanceof WebAssembly.RuntimeError && ((0, XS.e)(this, se)[se] = !0, (0, XS.e)(this, we)[we] = null, (0, XS.e)(this, ae)[ae] = null, (0, XS.e)(this, De)[De] = null, (0, XS.e)(this, We)[We] = null, (0, XS.e)(this, Fe)[Fe] = null, (0, XS.e)(this, Ze)[Ze]("trapped") … [truncated]
```

#### 704. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6052` → after: `L6127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6127) · [Before (L6052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6052)

```diff
-     var mO = sz(38057);
+     var Yg = Pv(38178);
```

#### 705. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6054` → after: `L6129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6129) · [Before (L6054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6054)

```diff
-       ["skyblock", () => sz.e(49).then((() => sz(38053)))]
+       ["skyblock", () => Pv.e(50).then((() => Pv(38169)))]
```

#### 706. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6060-L6061` → after: `L6135-L6136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6135-L6136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6135-L6136) · [Before (L6060-L6061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6060-L6061)

```diff
-         const tz = (0, mO.d)(zz);
-         if (!tz) throw new Error(`${zz}'s replay hook module registered no hook`);
+         const zv = (0, Yg.e)(vv);
+         if (!zv) throw new Error(`${vv}'s replay hook module registered no hook`);
```

#### 707. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6141-L6159` → after: `L6216-L6234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6216-L6234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6216-L6234) · [Before (L6141-L6159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6141-L6159)

```diff
-     var eO = (0, fW.c)("bindings"),
-       ZO = (0, fW.c)("module"),
-       GO = (0, fW.c)("memory"),
-       TO = (0, fW.c)("trapped"),
-       cO = (0, fW.c)("generation"),
-       jO = (0, fW.c)("loading"),
-       AO = (0, fW.c)("lend"),
-       yO = (0, fW.c)("givenUp"),
-       MO = (0, fW.c)("afterSave"),
-       dO = (0, fW.c)("opens"),
-       hO = (0, fW.c)("saveAskedAt"),
-       QO = (0, fW.c)("unload"),
-       kO = (0, fW.c)("dropModule"),
-       iO = (0, fW.c)("loadFailed"),
-       LO = (0, fW.c)("saveReadsBody"),
-       lO = (0, fW.c)("command"),
- ... (3 more removed lines; see GitHub link above)
+     var Kg = (0, uS.b)("bindings"),
+       Vg = (0, uS.b)("module"),
+       Ug = (0, uS.b)("memory"),
+       Rg = (0, uS.b)("trapped"),
+       xg = (0, uS.b)("generation"),
+       tg = (0, uS.b)("loading"),
+       qg = (0, uS.b)("lend"),
+       Ig = (0, uS.b)("givenUp"),
+       Qg = (0, uS.b)("afterSave"),
+       Zg = (0, uS.b)("opens"),
+       Ag = (0, uS.b)("saveAskedAt"),
+       Lg = (0, uS.b)("unload"),
+       Hg = (0, uS.b)("dropModule"),
+       Mg = (0, uS.b)("loadFailed"),
+       yg = (0, uS.b)("saveReadsBody"),
+       Bg = (0, uS.b)("command"),
+ ... (3 more added lines; see GitHub link above)
```

#### 708. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6215` → after: `L6290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6290) · [Before (L6215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6215)

```diff
-         return null !== (0, pW.c)(this, ZO)[ZO] && null === (0, pW.c)(this, MO)[MO]
+         return null !== (0, XS.e)(this, Vg)[Vg] && null === (0, XS.e)(this, Qg)[Qg]
```

#### 709. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6218-L6219` → after: `L6293-L6294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6293-L6294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6293-L6294) · [Before (L6218-L6219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6218-L6219)

```diff
-         if ((0, pW.c)(this, TO)[TO]) return Nz.Rc.ModuleTrap;
-         let tz = (0, pW.c)(this, eO)[eO];
+         if ((0, XS.e)(this, Rg)[Rg]) return Wv.md.ModuleTrap;
+         let zv = (0, XS.e)(this, Kg)[Kg];
```

#### 710. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6221-L6222` → after: `L6296-L6297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6296-L6297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6296-L6297) · [Before (L6221-L6222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6221-L6222)

```diff
-           const zz = (0, pW.c)(this, cO)[cO];
-           (0, pW.c)(this, jO)[jO]++;
+           const vv = (0, XS.e)(this, xg)[xg];
+           (0, XS.e)(this, tg)[tg]++;
```

#### 711. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6226` → after: `L6301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6301) · [Before (L6226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6226)

```diff
-             return (0, pW.c)(this, jO)[jO]--, zz !== (0, pW.c)(this, cO)[cO] ? "stopped" : (0, pW.c)(this, iO)[iO](Fz)
+             return (0, XS.e)(this, tg)[tg]--, vv !== (0, XS.e)(this, xg)[xg] ? "stopped" : (0, XS.e)(this, Mg)[Mg](hv)
```

#### 712. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6228-L6233` → after: `L6303-L6308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6303-L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6303-L6308) · [Before (L6228-L6233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6228-L6233)

```diff
-           if ((0, pW.c)(this, jO)[jO]--, zz !== (0, pW.c)(this, cO)[cO]) return (0, pW.c)(this, eO)[eO] || 0 !== (0, pW.c)(this, jO)[jO] || (0, pW.c)(this, TO)[TO] || this.deps.unload(), "stopped";
-           if ((0, pW.c)(this, TO)[TO]) return Nz.Rc.ModuleTrap;
-           const sz = tz.xWz(),
-             Wz = this.deps.core.mWz();
-           if (sz !== Wz) return (0, pW.c)(this, iO)[iO](new Error(`replay port version ${sz}, the core's ${Wz}`));
-           (0, pW.c)(this, eO)[eO] = tz
+           if ((0, XS.e)(this, tg)[tg]--, vv !== (0, XS.e)(this, xg)[xg]) return (0, XS.e)(this, Kg)[Kg] || 0 !== (0, XS.e)(this, tg)[tg] || (0, XS.e)(this, Rg)[Rg] || this.deps.unload(), "stopped";
+           if ((0, XS.e)(this, Rg)[Rg]) return Wv.md.ModuleTrap;
+           const Pv = zv.Jhv(),
+             Sv = this.deps.core.Ehv();
+           if (Pv !== Sv) return (0, XS.e)(this, Mg)[Mg](new Error(`replay port version ${Pv}, the core's ${Sv}`));
+           (0, XS.e)(this, Kg)[Kg] = zv
```

#### 713. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6235` → after: `L6310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6310) · [Before (L6235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6235)

```diff
-         if (!(0, pW.c)(this, ZO)[ZO]) {
+         if (!(0, XS.e)(this, Vg)[Vg]) {
```

#### 714. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6237-L6239` → after: `L6312-L6314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6312-L6314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6312-L6314) · [Before (L6237-L6239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6237-L6239)

```diff
-           if (!(0, pW.c)(this, aO)[aO]((() => {
-               (0, pW.c)(this, ZO)[ZO] = new zz.CWz, (0, pW.c)(this, GO)[GO] = zz.eWz()
-             }))) return Nz.Rc.ModuleTrap
+           if (!(0, XS.e)(this, Eg)[Eg]((() => {
+               (0, XS.e)(this, Vg)[Vg] = new vv.rhv, (0, XS.e)(this, Ug)[Ug] = vv.khv()
+             }))) return Wv.md.ModuleTrap
```

#### 715. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6242-L6243` → after: `L6317-L6318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6317-L6318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6317-L6318) · [Before (L6242-L6243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6242-L6243)

```diff
-         return (0, pW.c)(this, nO)[nO](((tz, Fz) => {
-           null !== (0, pW.c)(this, MO)[MO] && tz.step(0, 0);
+         return (0, XS.e)(this, Jg)[Jg](((zv, hv) => {
+           null !== (0, XS.e)(this, Qg)[Qg] && zv.step(0, 0);
```

#### 716. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6245-L6246` → after: `L6320-L6321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6320-L6321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6320-L6321) · [Before (L6245-L6246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6245-L6246)

```diff
-           0 !== Wz && (new Uint8Array(Fz.buffer, Wz, zz.length).set(zz), tz.open(), (0, pW.c)(this, yO)[yO] = (0, pW.c)(this, AO)[AO], (0, pW.c)(this, MO)[MO] = null, (0, pW.c)(this, dO)[dO]++, sz = !0)
-         })) ? sz ? "opening" : Nz.Rc.TooLarge : Nz.Rc.ModuleTrap
+           0 !== Sv && (new Uint8Array(hv.buffer, Sv, vv.length).set(vv), zv.open(), (0, XS.e)(this, Ig)[Ig] = (0, XS.e)(this, qg)[qg], (0, XS.e)(this, Qg)[Qg] = null, (0, XS.e)(this, Zg)[Zg]++, Pv = !0)
+         })) ? Pv ? "opening" : Wv.md.TooLarge : Wv.md.ModuleTrap
```

#### 717. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6249-L6251` → after: `L6324-L6326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6324-L6326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6324-L6326) · [Before (L6249-L6251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6249-L6251)

```diff
-         const tz = (0, pW.c)(this, ZO)[ZO],
-           sz = (0, pW.c)(this, GO)[GO];
-         if (!tz || !sz || null !== (0, pW.c)(this, MO)[MO]) return;
+         const zv = (0, XS.e)(this, Vg)[Vg],
+           Pv = (0, XS.e)(this, Ug)[Ug];
+         if (!zv || !Pv || null !== (0, XS.e)(this, Qg)[Qg]) return;
```

#### 718. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6254` → after: `L6329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6329) · [Before (L6254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6254)

```diff
-         } = this.deps, Wz = Fz.ZWz(zz);
+         } = this.deps, Sv = hv.Xhv(vv);
```

#### 719. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6259` → after: `L6334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6334) · [Before (L6259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6259)

```diff
-           Oz = tz.step(Xz, Wz - Xz), oz = tz.BWz()
+           gv = zv.step(ev, Sv - ev), pv = zv.Hhv()
```

#### 720. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6261` → after: `L6336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6336) · [Before (L6261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6261)

```diff
-           return void(0, pW.c)(this, qO)[qO](Uz)
+           return void(0, XS.e)(this, og)[og](Nv)
```

#### 721. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6263` → after: `L6338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6338) · [Before (L6263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6263)

```diff
-         const vz = Fz.YWz(1, Oz);
+         const dv = hv.Bhv(1, gv);
```

#### 722. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6265` → after: `L6340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6340) · [Before (L6265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6265)

```diff
-           const zz = (0, pW.c)(this, nO)[nO]((zz => {
+           const vv = (0, XS.e)(this, Jg)[Jg]((vv => {
```

#### 723. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6269` → after: `L6344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6344) · [Before (L6269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6269)

```diff
-           return (0, pW.c)(this, LO)[LO] ? (0, pW.c)(this, MO)[MO] = "drop" : (0, pW.c)(this, kO)[kO](), void Fz.GWz(Nz.Rc.Port)
+           return (0, XS.e)(this, yg)[yg] ? (0, XS.e)(this, Qg)[Qg] = "drop" : (0, XS.e)(this, Hg)[Hg](), void hv.uhv(Wv.md.Port)
```

#### 724. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6274` → after: `L6349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6349) · [Before (L6274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6274)

```diff
-         (0, pW.c)(this, lO)[lO]((zz => {
+         (0, XS.e)(this, Bg)[Bg]((vv => {
```

#### 725. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6279` → after: `L6354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6354) · [Before (L6279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6279)

```diff
-         (0, pW.c)(this, lO)[lO]((zz => {
+         (0, XS.e)(this, Bg)[Bg]((vv => {
```

#### 726. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6285` → after: `L6360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6360) · [Before (L6285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6285)

```diff
-         (0, pW.c)(this, lO)[lO]((sz => {
+         (0, XS.e)(this, Bg)[Bg]((Pv => {
```

#### 727. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6290-L6291` → after: `L6365-L6366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6365-L6366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6365-L6366) · [Before (L6290-L6291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6290-L6291)

```diff
-         return (0, pW.c)(this, lO)[lO]((sz => {
-           sz.TWz(zz, tz)
+         return (0, XS.e)(this, Bg)[Bg]((Pv => {
+           Pv.vSv(vv, zv)
```

#### 728. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6295-L6296` → after: `L6370-L6371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6370-L6371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6370-L6371) · [Before (L6295-L6296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6295-L6296)

```diff
-         return (0, pW.c)(this, lO)[lO]((sz => {
-           sz.cWz(zz[0], zz[1], zz[2], tz[0], tz[1], tz[2])
+         return (0, XS.e)(this, Bg)[Bg]((Pv => {
+           Pv.zSv(vv[0], vv[1], vv[2], zv[0], zv[1], zv[2])
```

#### 729. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6300-L6301` → after: `L6375-L6376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6375-L6376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6375-L6376) · [Before (L6300-L6301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6300-L6301)

```diff
-         return (0, pW.c)(this, lO)[lO]((sz => {
-           sz.jWz(zz, tz)
+         return (0, XS.e)(this, Bg)[Bg]((Pv => {
+           Pv.PSv(vv, zv)
```

#### 730. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6305-L6306` → after: `L6380-L6381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6380-L6381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6380-L6381) · [Before (L6305-L6306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6305-L6306)

```diff
-         return (0, pW.c)(this, lO)[lO]((sz => {
-           sz.AWz(zz, tz)
+         return (0, XS.e)(this, Bg)[Bg]((Pv => {
+           Pv.hSv(vv, zv)
```

#### 731. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6310-L6311` → after: `L6385-L6386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6385-L6386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6385-L6386) · [Before (L6310-L6311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6310-L6311)

```diff
-         return (0, pW.c)(this, lO)[lO]((sz => {
-           sz.yWz(zz, tz)
+         return (0, XS.e)(this, Bg)[Bg]((Pv => {
+           Pv.SSv(vv, zv)
```

#### 732. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6315` → after: `L6390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6390) · [Before (L6315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6315)

```diff
-         return null === (0, pW.c)(this, AO)[AO] && (0, pW.c)(this, lO)[lO]((sz => {
+         return null === (0, XS.e)(this, qg)[qg] && (0, XS.e)(this, Bg)[Bg]((Pv => {
```

#### 733. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6320-L6321` → after: `L6395-L6396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6395-L6396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6395-L6396) · [Before (L6320-L6321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6320-L6321)

```diff
-         const zz = (0, pW.c)(this, hO)[hO];
-         if ((0, pW.c)(this, hO)[hO] = null, null !== zz && zz !== (0, pW.c)(this, dO)[dO]) return null;
+         const vv = (0, XS.e)(this, Ag)[Ag];
+         if ((0, XS.e)(this, Ag)[Ag] = null, null !== vv && vv !== (0, XS.e)(this, Zg)[Zg]) return null;
```

#### 734. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6324-L6325` → after: `L6399-L6400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6399-L6400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6399-L6400) · [Before (L6324-L6325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6324-L6325)

```diff
-         if ((0, pW.c)(this, nO)[nO](((zz, Fz) => {
-             tz = zz.save(), 0 !== tz && (sz = new Uint8Array(Fz.buffer, zz.MWz(), zz.dWz()).slice())
+         if ((0, XS.e)(this, Jg)[Jg](((vv, hv) => {
+             zv = vv.save(), 0 !== zv && (Pv = new Uint8Array(hv.buffer, vv.eSv(), vv.gSv()).slice())
```

#### 735. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6330` → after: `L6405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6405) · [Before (L6330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6330)

```diff
-           givenUp: () => (0, pW.c)(this, yO)[yO] === Fz,
+           givenUp: () => (0, XS.e)(this, Ig)[Ig] === hv,
```

#### 736. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6332` → after: `L6407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6407) · [Before (L6332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6332)

```diff
-             if ((0, pW.c)(this, AO)[AO] !== Fz || !(0, pW.c)(this, LO)[LO]) return null;
+             if ((0, XS.e)(this, qg)[qg] !== hv || !(0, XS.e)(this, yg)[yg]) return null;
```

#### 737. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6334-L6336` → after: `L6409-L6411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6409-L6411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6409-L6411) · [Before (L6334-L6336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6334-L6336)

```diff
-             return (0, pW.c)(this, nO)[nO](((Fz, Wz) => {
-               const Xz = Fz.hWz();
-               0 !== Xz && zz >= 0 && tz >= 0 && zz + tz <= Xz && (sz = new Uint8Array(Wz.buffer, Fz.QWz() + zz, tz))
+             return (0, XS.e)(this, Jg)[Jg](((hv, Sv) => {
+               const ev = hv.pSv();
+               0 !== ev && vv >= 0 && zv >= 0 && vv + zv <= ev && (Pv = new Uint8Array(Sv.buffer, hv.dSv() + vv, zv))
```

#### 738. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6340-L6342` → after: `L6415-L6417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6415-L6417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6415-L6417) · [Before (L6340-L6342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6340-L6342)

```diff
-             if ((0, pW.c)(this, AO)[AO] !== Fz) return;
-             (0, pW.c)(this, AO)[AO] = null, (0, pW.c)(this, yO)[yO] = null, (0, pW.c)(this, nO)[nO]((zz => {
-               zz.kWz()
+             if ((0, XS.e)(this, qg)[qg] !== hv) return;
+             (0, XS.e)(this, qg)[qg] = null, (0, XS.e)(this, Ig)[Ig] = null, (0, XS.e)(this, Jg)[Jg]((vv => {
+               vv.NSv()
```

#### 739. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6344-L6345` → after: `L6419-L6420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6419-L6420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6419-L6420) · [Before (L6344-L6345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6344-L6345)

```diff
-             const zz = (0, pW.c)(this, MO)[MO];
-             (0, pW.c)(this, MO)[MO] = null, "unload" === zz ? (0, pW.c)(this, QO)[QO]() : "drop" === zz && (0, pW.c)(this, kO)[kO]()
+             const vv = (0, XS.e)(this, Qg)[Qg];
+             (0, XS.e)(this, Qg)[Qg] = null, "unload" === vv ? (0, XS.e)(this, Lg)[Lg]() : "drop" === vv && (0, XS.e)(this, Hg)[Hg]()
```

#### 740. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6348` → after: `L6423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6423) · [Before (L6348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6348)

```diff
-         return (0, pW.c)(this, AO)[AO] = Fz, Fz
+         return (0, XS.e)(this, qg)[qg] = hv, hv
```

#### 741. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6351` → after: `L6426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6426) · [Before (L6351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6351)

```diff
-         (0, pW.c)(this, hO)[hO] = (0, pW.c)(this, dO)[dO]
+         (0, XS.e)(this, Ag)[Ag] = (0, XS.e)(this, Zg)[Zg]
```

#### 742. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6354-L6355` → after: `L6429-L6430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6429-L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6429-L6430) · [Before (L6354-L6355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6354-L6355)

```diff
-         (0, pW.c)(this, lO)[lO]((tz => {
-           tz.iWz(zz)
+         (0, XS.e)(this, Bg)[Bg]((zv => {
+           zv.lSv(vv)
```

#### 743. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6359-L6360` → after: `L6434-L6435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6434-L6435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6434-L6435) · [Before (L6359-L6360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6359-L6360)

```diff
-         (0, pW.c)(this, lO)[lO]((tz => {
-           tz.LWz(zz)
+         (0, XS.e)(this, Bg)[Bg]((zv => {
+           zv.TSv(vv)
```

#### 744. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6364` → after: `L6439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6439) · [Before (L6364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6364)

```diff
-         (0, pW.c)(this, lO)[lO]((zz => {
+         (0, XS.e)(this, Bg)[Bg]((vv => {
```

#### 745. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6369` → after: `L6444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6444) · [Before (L6369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6369)

```diff
-         (0, pW.c)(this, cO)[cO]++, (0, pW.c)(this, LO)[LO] && ((0, pW.c)(this, nO)[nO]((zz => {
+         (0, XS.e)(this, xg)[xg]++, (0, XS.e)(this, yg)[yg] && ((0, XS.e)(this, Jg)[Jg]((vv => {
```

#### 746. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6371` → after: `L6446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6446) · [Before (L6371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6371)

```diff
-         })), (0, pW.c)(this, ZO)[ZO]) ? (0, pW.c)(this, MO)[MO] = "unload" : (0, pW.c)(this, QO)[QO]()
+         })), (0, XS.e)(this, Vg)[Vg]) ? (0, XS.e)(this, Qg)[Qg] = "unload" : (0, XS.e)(this, Lg)[Lg]()
```

#### 747. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6376` → after: `L6451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6451) · [Before (L6376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6376)

```diff
-       (0, pW.c)(this, kO)[kO](), (0, pW.c)(this, TO)[TO] || ((0, pW.c)(this, eO)[eO] = null, this.deps.unload())
+       (0, XS.e)(this, Hg)[Hg](), (0, XS.e)(this, Rg)[Rg] || ((0, XS.e)(this, Kg)[Kg] = null, this.deps.unload())
```

#### 748. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6380` → after: `L6455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6455) · [Before (L6380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6380)

```diff
-       (0, pW.c)(this, nO)[nO]((zz => {
+       (0, XS.e)(this, Jg)[Jg]((vv => {
```

#### 749. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6382` → after: `L6457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6457) · [Before (L6382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6382)

```diff
-       })), (0, pW.c)(this, ZO)[ZO] = null, (0, pW.c)(this, GO)[GO] = null
+       })), (0, XS.e)(this, Vg)[Vg] = null, (0, XS.e)(this, Ug)[Ug] = null
```

#### 750. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6385` → after: `L6460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6460) · [Before (L6385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6385)

```diff
-       return await this.deps.staleOr(zz, (() => {})) ? "reloading" : Nz.Rc.ModuleLoad
+       return await this.deps.staleOr(vv, (() => {})) ? "reloading" : Wv.md.ModuleLoad
```

#### 751. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6389` → after: `L6464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6464) · [Before (L6389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6389)

```diff
-       return null !== (0, pW.c)(this, AO)[AO] && (0, pW.c)(this, yO)[yO] !== (0, pW.c)(this, AO)[AO]
+       return null !== (0, XS.e)(this, qg)[qg] && (0, XS.e)(this, Ig)[Ig] !== (0, XS.e)(this, qg)[qg]
```

#### 752. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6393` → after: `L6468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6468) · [Before (L6393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6393)

```diff
-       return null === (0, pW.c)(this, MO)[MO] && (0, pW.c)(this, nO)[nO](zz)
+       return null === (0, XS.e)(this, Qg)[Qg] && (0, XS.e)(this, Jg)[Jg](vv)
```

#### 753. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6397-L6399` → after: `L6472-L6474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6472-L6474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6472-L6474) · [Before (L6397-L6399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6397-L6399)

```diff
-       const tz = (0, pW.c)(this, ZO)[ZO],
-         sz = (0, pW.c)(this, GO)[GO];
-       return !(!tz || !sz) && (0, pW.c)(this, aO)[aO]((() => {
+       const zv = (0, XS.e)(this, Vg)[Vg],
+         Pv = (0, XS.e)(this, Ug)[Ug];
+       return !(!zv || !Pv) && (0, XS.e)(this, Eg)[Eg]((() => {
```

#### 754. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6405` → after: `L6480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6480) · [Before (L6405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6405)

```diff
-       if ((0, pW.c)(this, TO)[TO]) return !1;
+       if ((0, XS.e)(this, Rg)[Rg]) return !1;
```

#### 755. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6409` → after: `L6484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6484) · [Before (L6409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6409)

```diff
-         return (0, pW.c)(this, qO)[qO](tz), !1
+         return (0, XS.e)(this, og)[og](zv), !1
```

#### 756. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6415` → after: `L6490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6490) · [Before (L6415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6415)

```diff
-       (0, pW.c)(this, TO)[TO] = !0, (0, pW.c)(this, ZO)[ZO] = null, (0, pW.c)(this, GO)[GO] = null, (0, pW.c)(this, eO)[eO] = null, this.deps.crash(this.deps.markTrapped(zz)), this.deps.core.GWz(Nz.Rc.ModuleTrap)
+       (0, XS.e)(this, Rg)[Rg] = !0, (0, XS.e)(this, Vg)[Vg] = null, (0, XS.e)(this, Ug)[Ug] = null, (0, XS.e)(this, Kg)[Kg] = null, this.deps.crash(this.deps.markTrapped(vv)), this.deps.core.uhv(Wv.md.ModuleTrap)
```

#### 757. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6417-L6418` → after: `L6492-L6493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6492-L6493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6492-L6493) · [Before (L6417-L6418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6417-L6418)

```diff
-     var Fo = sz(6065),
-       Wo = sz(39838);
+     var Sp = Pv(6199),
+       ep = Pv(40025);
```

#### 758. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6429` → after: `L6504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6504) · [Before (L6429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6429)

```diff
-         case Nz.Yc.FlyingText: {
+         case Wv.yd.FlyingText: {
```

#### 759. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6434` → after: `L6509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6509) · [Before (L6434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6434)

```diff
-             return void console.warn(`${Xo} a replay's flying text isn't JSON`, Uz)
+             return void console.warn(`${gp} a replay's flying text isn't JSON`, Nv)
```

#### 760. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6436` → after: `L6511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6511) · [Before (L6436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6436)

```diff
-           Oz.o.Yg("forceFlyingMiddleMessage", {
+           gv.j.zC("forceFlyingMiddleMessage", {
```

#### 761. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6438` → after: `L6513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6513) · [Before (L6438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6438)

```diff
-             pX: zz.pX,
+             aP: vv.aP,
```

#### 762. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6440` → after: `L6515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6515) · [Before (L6440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6440)

```diff
-             fX: zz.fX
+             sP: vv.sP
```

#### 763. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6444-L6445` → after: `L6519-L6520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6519-L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6519-L6520) · [Before (L6444-L6445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6444-L6445)

```diff
-         case Nz.Yc.PlayerKilled:
-           (0, Wo.c)({
+         case Wv.yd.PlayerKilled:
+           (0, ep.e)({
```

#### 764. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6448` → after: `L6523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6523) · [Before (L6448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6448)

```diff
-               deadEId: null !== (tz = oo(zz.dead)) && void 0 !== tz ? tz : "",
+               deadEId: null !== (zv = dp(vv.dead)) && void 0 !== zv ? zv : "",
```

#### 765. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6450` → after: `L6525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6525) · [Before (L6450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6450)

```diff
-               withItem: null !== (sz = zz.withItem) && void 0 !== sz ? sz : "",
+               withItem: null !== (Pv = vv.withItem) && void 0 !== Pv ? Pv : "",
```

#### 766. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6455-L6456` → after: `L6530-L6531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6530-L6531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6530-L6531) · [Before (L6455-L6456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6455-L6456)

```diff
-         case Nz.Yc.Killfeed:
-           (0, Wo.c)({
+         case Wv.yd.Killfeed:
+           (0, ep.e)({
```

#### 767. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6461-L6462` → after: `L6536-L6537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6536-L6537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6536-L6537) · [Before (L6461-L6462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6461-L6462)

```diff
-                 name: null !== (Fz = zz.killerName) && void 0 !== Fz ? Fz : void 0,
-                 colour: null !== (Wz = zz.killerColour) && void 0 !== Wz ? Wz : void 0
+                 name: null !== (hv = vv.killerName) && void 0 !== hv ? hv : void 0,
+                 colour: null !== (Sv = vv.killerColour) && void 0 !== Sv ? Sv : void 0
```

#### 768. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6466-L6467` → after: `L6541-L6542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6541-L6542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6541-L6542) · [Before (L6466-L6467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6466-L6467)

```diff
-                 name: null !== (Xz = zz.victimName) && void 0 !== Xz ? Xz : void 0,
-                 colour: null !== (oz = zz.victimColour) && void 0 !== oz ? oz : void 0
+                 name: null !== (ev = vv.victimName) && void 0 !== ev ? ev : void 0,
+                 colour: null !== (pv = vv.victimColour) && void 0 !== pv ? pv : void 0
```

#### 769. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6469` → after: `L6544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6544) · [Before (L6469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6469)

```diff
-               withItem: null !== (vz = zz.withItem) && void 0 !== vz ? vz : ""
+               withItem: null !== (dv = vv.withItem) && void 0 !== dv ? dv : ""
```

#### 770. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6479` → after: `L6554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6554) · [Before (L6479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6479)

```diff
-       return Number.isInteger(tz) && tz > ZW && tz <= 2147483647 ? tz : null
+       return Number.isInteger(zv) && zv > VS && zv <= 2147483647 ? zv : null
```

#### 771. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6491` → after: `L6566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6566) · [Before (L6491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6491)

```diff
-       const tz = (0, QW.l)(Ss.fc.PlayerKilled, (tz => {
+       const zv = (0, LS.m)(EP.Xb.PlayerKilled, (zv => {
```

#### 772. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6493-L6494` → after: `L6568-L6569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6568-L6569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6568-L6569) · [Before (L6493-L6494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6493-L6494)

```diff
-           const Wz = (0, hW.f)(tz);
-           if (!(0, hW.c)(Wz)) return;
+           const Sv = (0, AS.j)(zv);
+           if (!(0, AS.d)(Sv)) return;
```

#### 773. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6501` → after: `L6576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6576) · [Before (L6501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6501)

```diff
-           zz.recordPlayerKilled(null !== (sz = Ko(Xz)) && void 0 !== sz ? sz : ZW, null !== (Fz = Ko(Oz)) && void 0 !== Fz ? Fz : ZW, "number" === typeof vz ? vz : 0, "string" === typeof oz ? oz : "")
+           vv.recordPlayerKilled(null !== (Pv = Tp(ev)) && void 0 !== Pv ? Pv : VS, null !== (hv = Tp(gv)) && void 0 !== hv ? hv : VS, "number" === typeof dv ? dv : 0, "string" === typeof pv ? pv : "")
```

#### 774. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6503-L6505` → after: `L6578-L6580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6578-L6580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6578-L6580) · [Before (L6503-L6505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6503-L6505)

```diff
-         sz = (0, QW.l)(Ss.fc.CustomKillfeed, (tz => {
-           const sz = (0, hW.f)(tz);
-           if (!(0, hW.c)(sz) || !(0, hW.c)(sz.killer) || !(0, hW.c)(sz.victim)) return;
+         Pv = (0, LS.m)(EP.Xb.CustomKillfeed, (zv => {
+           const Pv = (0, AS.j)(zv);
+           if (!(0, AS.d)(Pv) || !(0, AS.d)(Pv.killer) || !(0, AS.d)(Pv.victim)) return;
```

#### 775. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6511` → after: `L6586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6586) · [Before (L6511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6511)

```diff
-           zz.recordKillfeed(uo(Fz), uo(Wz), "string" === typeof Xz ? Xz : null)
+           vv.recordKillfeed(Wp(hv), Wp(Sv), "string" === typeof ev ? ev : null)
```

#### 776. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6520` → after: `L6595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6595) · [Before (L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6520)

```diff
-       return void 0 === zz || null === zz ? null : null !== (tz = JSON.stringify(zz)) && void 0 !== tz ? tz : null
+       return void 0 === vv || null === vv ? null : null !== (zv = JSON.stringify(vv)) && void 0 !== zv ? zv : null
```

#### 777. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6529` → after: `L6604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6604) · [Before (L6529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6529)

```diff
-         } = Fz.b.get("clientEscMenuOptions"), Xz = `${sz}:${Wz}`;
+         } = hv.c.get("clientEscMenuOptions"), ev = `${Pv}:${Sv}`;
```

#### 778. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6532` → after: `L6607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6607) · [Before (L6532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6532)

```diff
-       return sz(), (0, Oz.q)("appManagerUpdated|clientEscMenuOptions", sz)
+       return Pv(), (0, gv.l)("appManagerUpdated|clientEscMenuOptions", Pv)
```

#### 779. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6539` → after: `L6614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6614) · [Before (L6539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6539)

```diff
-         return zz.isStopped ? sz : tz(...arguments)
+         return vv.isStopped ? Pv : zv(...arguments)
```

#### 780. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6543` → after: `L6618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6618) · [Before (L6543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6543)

```diff
-       open: () => Promise.reject(new Error(PW.d.coreStopped.text)),
+       open: () => Promise.reject(new Error(mS.c.coreStopped.text)),
```

#### 781. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6551` → after: `L6626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6626) · [Before (L6551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6551)

```diff
-       return sz.e(61).then((() => sz(60625)))
+       return Pv.e(62).then((() => Pv(60894)))
```

#### 782. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6555` → after: `L6630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6630) · [Before (L6555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6555)

```diff
-       (0, PW.f)({
+       (0, mS.e)({
```

#### 783. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6567` → after: `L6642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6642) · [Before (L6567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6567)

```diff
-         } = zz, Xz = () => zz.memory().buffer, Oz = () => tz.isStopped ? null : tz.rings.cmd, oz = Ho(tz, ((zz, tz) => Wz.YWz(zz, tz)), 0), vz = () => Wz.mWz();
+         } = vv, ev = () => vv.memory().buffer, gv = () => zv.isStopped ? null : zv.rings.cmd, pv = cp(zv, ((vv, zv) => Sv.Bhv(vv, zv)), 0), dv = () => Sv.Ehv();
```

#### 784. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6571-L6575` → after: `L6646-L6650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6646-L6650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6646-L6650) · [Before (L6571-L6575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6571-L6575)

```diff
-             ZWz: Ho(tz, (zz => Wz.ZWz(zz)), -1),
-             YWz: oz,
-             mWz: vz,
-             GWz: Ho(tz, (zz => {
-               Wz.GWz(zz)
+             Xhv: cp(zv, (vv => Sv.Xhv(vv)), -1),
+             Bhv: pv,
+             Ehv: dv,
+             uhv: cp(zv, (vv => {
+               Sv.uhv(vv)
```

#### 785. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6579` → after: `L6654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6654) · [Before (L6579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6579)

```diff
-           load: async () => (Uz = await sz.e(62).then((() => sz(60635))), Uz.loadReplayModule()),
+           load: async () => (Nv = await Pv.e(63).then((() => Pv(60907))), Nv.loadReplayModule()),
```

#### 786. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6593-L6596` → after: `L6668-L6671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6668-L6671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6668-L6671) · [Before (L6593-L6596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6593-L6596)

```diff
-             IWz: Ho(tz, (zz => Wz.IWz(zz)), 0),
-             HWz: Ho(tz, (zz => Wz.HWz(zz)), 0),
-             YWz: oz,
-             mWz: vz
+             bhv: cp(zv, (vv => Sv.bhv(vv)), 0),
+             Lhv: cp(zv, (vv => Sv.Lhv(vv)), 0),
+             Bhv: pv,
+             Ehv: dv
```

#### 787. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6606` → after: `L6681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6681) · [Before (L6606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6606)

```diff
-               console.warn(`${Uo} the recorder module didn't prefetch, so a save loads it:`, zz)
+               console.warn(`${lp} the recorder module didn't prefetch, so a save loads it:`, vv)
```

#### 788. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6616` → after: `L6691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6691) · [Before (L6616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6616)

```diff
-             return null !== (zz = null === (tz = Kz) || void 0 === tz ? void 0 : tz.recorderMemoryBytes()) && void 0 !== zz ? zz : 0
+             return null !== (vv = null === (zv = lv) || void 0 === zv ? void 0 : zv.recorderMemoryBytes()) && void 0 !== vv ? vv : 0
```

#### 789. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6633-L6635` → after: `L6708-L6710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6708-L6710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6708-L6710) · [Before (L6633-L6635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6633-L6635)

```diff
-             vWz: Ho(tz, (zz => Wz.vWz(zz)), 0),
-             KWz: Ho(tz, (() => {
-               Wz.KWz()
+             Uhv: cp(zv, (vv => Sv.Uhv(vv)), 0),
+             xhv: cp(zv, (() => {
+               Sv.xhv()
```

#### 790. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6637-L6638` → after: `L6712-L6713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6712-L6713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6712-L6713) · [Before (L6637-L6638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6637-L6638)

```diff
-             Gg: Ho(tz, (() => Wz.Gg()), 0),
-             UWz: Ho(tz, (() => Wz.UWz()), 0)
+             nC: cp(zv, (() => Sv.nC()), 0),
+             Rhv: cp(zv, (() => Sv.Rhv()), 0)
```

#### 791. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6651` → after: `L6726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6726) · [Before (L6651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6651)

```diff
-             console.warn(`${Uo} the recorded game's replay hooks:`, zz)
+             console.warn(`${lp} the recorded game's replay hooks:`, vv)
```

#### 792. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6660` → after: `L6735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6735) · [Before (L6660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6660)

```diff
-           notify: PW.f,
+           notify: mS.e,
```

#### 793. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6663` → after: `L6738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6738) · [Before (L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6663)

```diff
-             null === (zz = (0, YW.f)()) || void 0 === zz || zz.recorderChanged()
+             null === (vv = (0, fS.g)()) || void 0 === vv || vv.recorderChanged()
```

#### 794. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6667` → after: `L6742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6742) · [Before (L6667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6667)

```diff
-             null === (zz = (0, YW.f)()) || void 0 === zz || zz.viewerChanged()
+             null === (vv = (0, fS.g)()) || void 0 === vv || vv.viewerChanged()
```

#### 795. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6672` → after: `L6747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6747) · [Before (L6672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6672)

```diff
-               const Wz = Ss.nb[tz.key];
+               const Sv = EP.ib[zv.key];
```

#### 796. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6674-L6675` → after: `L6749-L6750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6749-L6750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6749-L6750) · [Before (L6674-L6675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6674-L6675)

```diff
-               let Xz = null !== (sz = tz.value) && void 0 !== sz ? sz : JSON.parse(JSON.stringify(null !== (Fz = Fo.d[Wz]) && void 0 !== Fz ? Fz : null));
-               if (null !== tz.value && tz.key < Ss.Nb.Environment && "string" === typeof Xz) try {
+               let ev = null !== (Pv = zv.value) && void 0 !== Pv ? Pv : JSON.parse(JSON.stringify(null !== (hv = Sp.d[Sv]) && void 0 !== hv ? hv : null));
+               if (null !== zv.value && zv.key < EP.Fb.Environment && "string" === typeof ev) try {
```

#### 797. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6678` → after: `L6753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6753) · [Before (L6678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6678)

```diff
-                 return void console.warn(`${Xo} a replay's ${Wz} isn't JSON`, Oz)
+                 return void console.warn(`${gp} a replay's ${Sv} isn't JSON`, gv)
```

#### 798. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6687` → after: `L6762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6762) · [Before (L6687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6687)

```diff
-             this.entityHooks.opened((0, Cz.Tb)(tz)), zz.replayShaderPack(tz)
+             this.entityHooks.opened((0, Ov.Pb)(zv)), vv.replayShaderPack(zv)
```

#### 799. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6691` → after: `L6766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6766) · [Before (L6691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6691)

```diff
-             return null !== (zz = null === (sz = tz.lastHeader) || void 0 === sz ? void 0 : sz.renderPending) && void 0 !== zz ? zz : 0
+             return null !== (vv = null === (Pv = zv.lastHeader) || void 0 === Pv ? void 0 : Pv.renderPending) && void 0 !== vv ? vv : 0
```

#### 800. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6693` → after: `L6768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6768) · [Before (L6693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6693)

```diff
-           viewerOpen: rW.e,
+           viewerOpen: jS.b,
```

#### 801. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6695` → after: `L6770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6770) · [Before (L6695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6695)

```diff
-             (0, HW.j)(zz)
+             (0, cS.e)(vv)
```

#### 802. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6698` → after: `L6773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6773) · [Before (L6698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6698)

```diff
-         this.runtime = Nz, Fz.replay = Nz.sink, (0, YW.o)(Nz);
+         this.runtime = Wv, hv.replay = Wv.sink, (0, fS.v)(Wv);
```

#### 803. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6707-L6708` → after: `L6782-L6783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6782-L6783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6782-L6783) · [Before (L6707-L6708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6707-L6708)

```diff
-         this.freecam = bz, (0, YW.n)(bz), this.recordedOptions = function(zz, tz) {
-           const sz = Ss.nb,
+         this.freecam = wv, (0, fS.t)(wv), this.recordedOptions = function(vv, zv) {
+           const Pv = EP.ib,
```

#### 804. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6722` → after: `L6797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6797) · [Before (L6722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6722)

```diff
-         }(Nz.recorder, zz.options), this.stops = [(0, WF.n)((zz => {
+         }(Wv.recorder, vv.options), this.stops = [(0, hh.j)((vv => {
```

#### 805. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6729` → after: `L6804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6804) · [Before (L6729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6729)

```diff
-         })), (0, WF.z)(((zz, tz) => {
+         })), (0, hh.u)(((vv, zv) => {
```

#### 806. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6742` → after: `L6817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6817) · [Before (L6742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6742)

```diff
-         }, No(Nz.recorder), (0, kW.k)((zz => {
+         }, wp(Wv.recorder), (0, HS.h)((vv => {
```

#### 807. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6748` → after: `L6823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6823) · [Before (L6748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6748)

```diff
-           sz && (null === (Fz = (0, YW.f)()) || void 0 === Fz || Fz.keyDown(tz))
+           Pv && (null === (hv = (0, fS.g)()) || void 0 === hv || hv.keyDown(zv))
```

#### 808. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6752` → after: `L6827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6827) · [Before (L6752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6752)

```diff
-           return !0 === (null === zz || void 0 === zz ? void 0 : zz.isOpen) ? zz : null
+           return !0 === (null === vv || void 0 === vv ? void 0 : vv.isOpen) ? vv : null
```

#### 809. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6754` → after: `L6829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6829) · [Before (L6754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6754)

```diff
-         (0, BW.f)({
+         (0, GS.d)({
```

#### 810. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6758` → after: `L6833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6833) · [Before (L6758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6758)

```diff
-             return null !== (zz = null === (tz = wz()) || void 0 === tz ? void 0 : tz.id) && void 0 !== zz ? zz : null
+             return null !== (vv = null === (zv = av()) || void 0 === zv ? void 0 : zv.id) && void 0 !== vv ? vv : null
```

#### 811. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6762` → after: `L6837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6837) · [Before (L6762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6762)

```diff
-             return null !== (zz = null === (tz = wz()) || void 0 === tz ? void 0 : tz.saveRefusal) && void 0 !== zz ? zz : null
+             return null !== (vv = null === (zv = av()) || void 0 === zv ? void 0 : zv.saveRefusal) && void 0 !== vv ? vv : null
```

#### 812. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6766` → after: `L6841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6841) · [Before (L6766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6766)

```diff
-             return null !== (zz = null === (tz = wz()) || void 0 === tz ? void 0 : tz.save()) && void 0 !== zz ? zz : Promise.resolve(null)
+             return null !== (vv = null === (zv = av()) || void 0 === zv ? void 0 : zv.save()) && void 0 !== vv ? vv : Promise.resolve(null)
```

#### 813. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6770` → after: `L6845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6845) · [Before (L6770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6770)

```diff
-             return null !== (zz = null === (tz = Nz.currentViewer) || void 0 === tz ? void 0 : tz.fileHandle) && void 0 !== zz ? zz : null
+             return null !== (vv = null === (zv = Wv.currentViewer) || void 0 === zv ? void 0 : zv.fileHandle) && void 0 !== vv ? vv : null
```

#### 814. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6784` → after: `L6859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6859) · [Before (L6784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6784)

```diff
-               lobbyType: (0, ez.v)(tz.lobbyName),
+               lobbyType: (0, Dv.y)(zv.lobbyName),
```

#### 815. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6794` → after: `L6869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6869) · [Before (L6794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6794)

```diff
-           this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, YW.j)() === this.runtime && (0, YW.o)(null), (0, YW.g)() === this.freecam && (0, YW.n)(null), (0, BW.f)(Bo), null !== this.bench && window.wasmReplayBench === this.bench && (w … [truncated]
+           this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, fS.o)() === this.runtime && (0, fS.v)(null), (0, fS.k)() === this.freecam && (0, fS.t)(null), (0, GS.d)(Gp), null !== this.bench && window.wasmReplayBench === this.bench && (w … [truncated]
```

#### 816. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6801-L6802` → after: `L6876-L6877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6876-L6877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6876-L6877) · [Before (L6801-L6802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6801-L6802)

```diff
-         if (sz.isStopped) throw new Error(PW.d.coreStopped.text);
-         if (zz.byteLength > 67108864) throw new Error(PW.d.cantOpen.text);
+         if (Pv.isStopped) throw new Error(mS.c.coreStopped.text);
+         if (vv.byteLength > 67108864) throw new Error(mS.c.cantOpen.text);
```

#### 817. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6807` → after: `L6882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6882) · [Before (L6807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6807)

```diff
-             return tz.inPlayback || (0, WF.L)().leaveGame(null), tz
+             return zv.inPlayback || (0, hh.B)().leaveGame(null), zv
```

#### 818. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6810` → after: `L6885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6885) · [Before (L6810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6810)

```diff
-           throw console.warn(`${Uo} the replay viewer didn't load`, Wz), new Error(PW.d.viewerLoadFailed.text)
+           throw console.warn(`${lp} the replay viewer didn't load`, Sv), new Error(mS.c.viewerLoadFailed.text)
```

#### 819. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6812` → after: `L6887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6887) · [Before (L6812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6812)

```diff
-         if (sz.isStopped) throw new Error(PW.d.coreStopped.text);
+         if (Pv.isStopped) throw new Error(mS.c.coreStopped.text);
```

#### 820. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6816` → after: `L6891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6891) · [Before (L6816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6816)

```diff
-     var xo = sz(1884);
+     var Fp = Pv(1903);
```

#### 821. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6824` → after: `L6899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6899) · [Before (L6824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6824)

```diff
-           aux: zz.reset ? Nz.Lb.ResetFirst : 0,
+           aux: vv.reset ? Wv.hc.ResetFirst : 0,
```

#### 822. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6828` → after: `L6903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6903) · [Before (L6828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6828)

```diff
-       zz.queueOptions(sz, Fz) && (tz.reset && xo.e.reset(), xo.e.apply(tz.changes))
+       vv.queueOptions(Pv, hv) && (zv.reset && Fp.c.reset(), Fp.c.apply(zv.changes))
```

#### 823. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6901-L6905` → after: `L6976-L6980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6976-L6980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6976-L6980) · [Before (L6901-L6905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6901-L6905)

```diff
-     var To = sz(41656),
-       co = sz(41659),
-       jo = sz(40108),
-       Ao = sz(40142),
-       yo = sz(3378);
+     var Rp = Pv(41905),
+       xp = Pv(41913),
+       tp = Pv(40324),
+       qp = Pv(40348),
+       Ip = Pv(3473);
```

#### 824. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6909` → after: `L6984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6984) · [Before (L6909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6909)

```diff
-         this.host = zz, this.sets = new Map, this.table = [], this.generation = 0, this.lw = !1
+         this.host = vv, this.sets = new Map, this.table = [], this.generation = 0, this.ea = !1
```

#### 825. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6913` → after: `L6988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6988) · [Before (L6913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6913)

```diff
-           if (zz.byteLength !== Nz.id) return null;
+           if (vv.byteLength !== Wv.Jd) return null;
```

#### 826. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6920` → after: `L6995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6995) · [Before (L6920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6920)

```diff
-         tz && !this.lw && (tz.release !== Nz.kd && this.release(tz.release), tz.want !== Nz.kd && this.want(tz.want))
+         zv && !this.ea && (zv.release !== Wv.Ld && this.release(zv.release), zv.want !== Wv.Ld && this.want(zv.want))
```

#### 827. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6923` → after: `L6998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6998) · [Before (L6923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6923)

```diff
-         if (!this.lw) {
+         if (!this.ea) {
```

#### 828. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6929-L6930` → after: `L7004-L7005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7004-L7005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7004-L7005) · [Before (L6929-L6930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6929-L6930)

```diff
-         if (this.lw) return;
-         this.lw = !0, this.generation++, this.table = [];
+         if (this.ea) return;
+         this.ea = !0, this.generation++, this.table = [];
```

#### 829. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6936` → after: `L7011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7011) · [Before (L6936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6936)

```diff
-             this.host.Csz(zz)
+             this.host.rzv(vv)
```

#### 830. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6953` → after: `L7028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7028) · [Before (L6953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6953)

```diff
-         if (!sz || 1 !== sz.urls.length && sz.urls.length !== Ss.ac.CubeFaces) return this.host.sendReady(io(zz)), void this.host.onLoadFailed(zz, "", new Error(`no image set ${zz}`));
+         if (!Pv || 1 !== Pv.urls.length && Pv.urls.length !== EP.Sb.CubeFaces) return this.host.sendReady(Hp(vv)), void this.host.onLoadFailed(vv, "", new Error(`no image set ${vv}`));
```

#### 831. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6971` → after: `L7046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7046) · [Before (L6971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6971)

```diff
-           if (!vz || !sz.wanted) return this.lw ? void this.releaseAfterDispose(oz.map(Qo)) : (this.releaseAll(oz.map(Qo)), void(vz && this.sets.delete(zz)));
+           if (!dv || !Pv.wanted) return this.ea ? void this.releaseAfterDispose(pv.map(Ap)) : (this.releaseAll(pv.map(Ap)), void(dv && this.sets.delete(vv)));
```

#### 832. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6978` → after: `L7053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7053) · [Before (L6978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6978)

```diff
-         const [Wz] = Fz, Xz = [Wz.width, Wz.height], Oz = Fz.every((zz => zz.width === Xz[0] && zz.height === Xz[1])), oz = tz.urls.length === Ss.ac.CubeFaces;
+         const [Sv] = hv, ev = [Sv.width, Sv.height], gv = hv.every((vv => vv.width === ev[0] && vv.height === ev[1])), pv = zv.urls.length === EP.Sb.CubeFaces;
```

#### 833. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6981-L6982` → after: `L7056-L7057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7056-L7057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7056-L7057) · [Before (L6981-L6982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6981-L6982)

```diff
-           const sz = Fz.map((zz => `${zz.width}x${zz.height}`));
-           return void this.host.onLoadFailed(zz, tz.urls[0], new Error(`set ${zz}'s images can't make its texture: ${sz.join(", ")}`))
+           const Pv = hv.map((vv => `${vv.width}x${vv.height}`));
+           return void this.host.onLoadFailed(vv, zv.urls[0], new Error(`set ${vv}'s images can't make its texture: ${Pv.join(", ")}`))
```

#### 834. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6998` → after: `L7073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7073) · [Before (L6998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6998)

```diff
-         for (const tz of zz) this.host.Csz(tz)
+         for (const zv of vv) this.host.rzv(zv)
```

#### 835. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7002` → after: `L7077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7077) · [Before (L7002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7002)

```diff
-           this.host.Csz(tz)
+           this.host.rzv(zv)
```

#### 836. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7012` → after: `L7087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7087) · [Before (L7012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7012)

```diff
-       const Fz = new Uint8Array(Ss.ac.SkyImagesReadyBytes),
+       const hv = new Uint8Array(EP.Sb.SkyImagesReadyBytes),
```

#### 837. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7014` → after: `L7089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7089) · [Before (L7014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7014)

```diff
-       return Wz.setUint16(0, zz, !0), Wz.setUint16(2, tz.length, !0), Wz.setUint16(4, sz[0], !0), Wz.setUint16(6, sz[1], !0), tz.slice(0, Ss.ac.CubeFaces).forEach(((zz, tz) => {
+       return Sv.setUint16(0, vv, !0), Sv.setUint16(2, zv.length, !0), Sv.setUint16(4, Pv[0], !0), Sv.setUint16(6, Pv[1], !0), zv.slice(0, EP.Sb.CubeFaces).forEach(((vv, zv) => {
```

#### 838. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7020` → after: `L7095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7095) · [Before (L7020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7020)

```diff
-       const tz = new Uint8Array(Ss.ac.SkyImagesReadyBytes),
+       const zv = new Uint8Array(EP.Sb.SkyImagesReadyBytes),
```

#### 839. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7022` → after: `L7097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7097) · [Before (L7022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7022)

```diff
-       return sz.setUint16(0, zz, !0), sz.setUint16(2, Ss.ac.Failed, !0), tz
+       return Pv.setUint16(0, vv, !0), Pv.setUint16(2, EP.Sb.Failed, !0), zv
```

#### 840. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7028` → after: `L7103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7103) · [Before (L7028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7028)

```diff
-         sz = await (0, yo.G)(zz)
+         Pv = await (0, Ip.I)(vv)
```

#### 841. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7068` → after: `L7143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7143) · [Before (L7068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7068)

```diff
-         id: (0, jo.l)(Wz),
+         id: (0, tp.m)(Sv),
```

#### 842. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7073-L7075` → after: `L7148-L7150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7148-L7150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7148-L7150) · [Before (L7073-L7075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7073-L7075)

```diff
-     var ao = sz(2883),
-       qo = sz(33840);
-     const So = ao.g.length;
+     var Bp = Pv(2944),
+       Jp = Pv(33866);
+     const Ep = Bp.d.length;
```

#### 843. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7080` → after: `L7155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7155) · [Before (L7080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7080)

```diff
-       ao.g.forEach(((Fz, Wz) => {
+       Bp.d.forEach(((hv, Sv) => {
```

#### 844. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7082` → after: `L7157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7157) · [Before (L7082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7082)

```diff
-         const Oz = null !== (Xz = Ro(zz[Fz])) && void 0 !== Xz ? Xz : qo.j[Fz];
+         const gv = null !== (ev = bp(vv[hv])) && void 0 !== ev ? ev : Jp.n[hv];
```

#### 845. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7085` → after: `L7160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7160) · [Before (L7085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7085)

```diff
-           kind: Ss.ac.KindCustom,
+           kind: EP.Sb.KindCustom,
```

#### 846. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7093` → after: `L7168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7168) · [Before (L7093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7093)

```diff
-           kind: Ss.ac.KindEarth,
+           kind: EP.Sb.KindEarth,
```

#### 847. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7101` → after: `L7176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7176) · [Before (L7101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7101)

```diff
-         kind: Ss.ac.KindEarth,
+         kind: EP.Sb.KindEarth,
```

#### 848. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7107` → after: `L7182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7182) · [Before (L7107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7107)

```diff
-         urls: qo.f.map((zz => qo.h + zz)),
+         urls: Jp.g.map((vv => Jp.h + vv)),
```

#### 849. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7110` → after: `L7185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7185) · [Before (L7110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7110)

```diff
-         urls: [qo.i],
+         urls: [Jp.l],
```

#### 850. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7113` → after: `L7188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7188) · [Before (L7113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7113)

```diff
-         urls: [qo.d],
+         urls: [Jp.c],
```

#### 851. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7116` → after: `L7191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7191) · [Before (L7116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7116)

```diff
-       const Xz = new Uint8Array(Ss.ac.SkyTableHeaderBytes + sz.length * Ss.ac.SkyTableEntryBytes),
+       const ev = new Uint8Array(EP.Sb.SkyTableHeaderBytes + Pv.length * EP.Sb.SkyTableEntryBytes),
```

#### 852. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7119` → after: `L7194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7194) · [Before (L7119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7119)

```diff
-         const sz = Ss.ac.SkyTableHeaderBytes + tz * Ss.ac.SkyTableEntryBytes;
+         const Pv = EP.Sb.SkyTableHeaderBytes + zv * EP.Sb.SkyTableEntryBytes;
```

#### 853. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7139` → after: `L7214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7214) · [Before (L7139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7139)

```diff
-             "number" === typeof vz && Number.isFinite(vz) && (tz.setFloat32(sz + Ss.q.CameraOffsetAt + 4 * Xz, vz, !0), Wz |= oz)
+             "number" === typeof dv && Number.isFinite(dv) && (zv.setFloat32(Pv + EP.j.CameraOffsetAt + 4 * ev, dv, !0), Sv |= pv)
```

#### 854. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7145` → after: `L7220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7220) · [Before (L7145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7145)

```diff
-           tz.setUint32(sz + Ss.q.PresentAt, Wz, !0), tz.setUint8(sz + Ss.q.FlagsAt, Xz)
+           zv.setUint32(Pv + EP.j.PresentAt, Sv, !0), zv.setUint8(Pv + EP.j.FlagsAt, ev)
```

#### 855. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7160` → after: `L7235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7235) · [Before (L7160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7160)

```diff
-       })) ? zz : null
+       })) ? vv : null
```

#### 856. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7163-L7170` → after: `L7238-L7245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7238-L7245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7238-L7245) · [Before (L7163-L7170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7163-L7170)

```diff
-         ["inclination", Ss.q.Inclination],
-         ["turbidity", Ss.q.Turbidity],
-         ["luminance", Ss.q.Luminance],
-         ["rayleigh", Ss.q.Rayleigh],
-         ["mieCoefficient", Ss.q.MieCoefficient],
-         ["mieDirectionalG", Ss.q.MieDirectionalG],
-         ["distance", Ss.q.Distance],
-         ["azimuth", Ss.q.Azimuth]
+         ["inclination", EP.j.Inclination],
+         ["turbidity", EP.j.Turbidity],
+         ["luminance", EP.j.Luminance],
+         ["rayleigh", EP.j.Rayleigh],
+         ["mieCoefficient", EP.j.MieCoefficient],
+         ["mieDirectionalG", EP.j.MieDirectionalG],
+         ["distance", EP.j.Distance],
+         ["azimuth", EP.j.Azimuth]
```

#### 857. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7173-L7175` → after: `L7248-L7250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7248-L7250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7248-L7250) · [Before (L7173-L7175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7173-L7175)

```diff
-         ["sunPosition", Ss.q.SunPosition, Ss.q.SunPositionAt],
-         ["up", Ss.q.Up, Ss.q.UpAt],
-         ["vertexTint", Ss.q.VertexTint, Ss.q.VertexTintAt]
+         ["sunPosition", EP.j.SunPosition, EP.j.SunPositionAt],
+         ["up", EP.j.Up, EP.j.UpAt],
+         ["vertexTint", EP.j.VertexTint, EP.j.VertexTintAt]
```

#### 858. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7178-L7180` → after: `L7253-L7255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7253-L7255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7253-L7255) · [Before (L7178-L7180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7178-L7180)

```diff
-         ["xCameraOffset", Ss.q.CameraOffsetX],
-         ["yCameraOffset", Ss.q.CameraOffsetY],
-         ["zCameraOffset", Ss.q.CameraOffsetZ]
+         ["xCameraOffset", EP.j.CameraOffsetX],
+         ["yCameraOffset", EP.j.CameraOffsetY],
+         ["zCameraOffset", EP.j.CameraOffsetZ]
```

#### 859. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7183-L7185` → after: `L7258-L7260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7258-L7260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7258-L7260) · [Before (L7183-L7185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7183-L7185)

```diff
-         ["useSunPosition", Ss.q.UseSunPosition],
-         ["dithering", Ss.q.Dithering],
-         ["infiniteDistance", Ss.q.InfiniteDistance]
+         ["useSunPosition", EP.j.UseSunPosition],
+         ["dithering", EP.j.Dithering],
+         ["infiniteDistance", EP.j.InfiniteDistance]
```

#### 860. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7215` → after: `L7290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7290) · [Before (L7215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7215)

```diff
-                       return "string" !== typeof zz ? null : null !== (tz = null === (sz = Wv.exec(zz)) || void 0 === sz || null === (Fz = sz.groups) || void 0 === Fz ? void 0 : Fz.base64) && void 0 !== tz ? tz : null
+                       return "string" !== typeof vv ? null : null !== (zv = null === (Pv = Sd.exec(vv)) || void 0 === Pv || null === (hv = Pv.groups) || void 0 === hv ? void 0 : hv.base64) && void 0 !== zv ? zv : null
```

#### 861. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7219` → after: `L7294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7294) · [Before (L7219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7219)

```diff
-                 }(Fz) || (sz(`Ignoring texture pack skybox ${tz}, whose faces are not all data URLs`, null), !1)
+                 }(hv) || (Pv(`Ignoring texture pack skybox ${zv}, whose faces are not all data URLs`, null), !1)
```

#### 862. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7232` → after: `L7307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7307) · [Before (L7232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7232)

```diff
-         this.host = zz, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.lw = !1, this.wait = null !== (tz = zz.wait) && void 0 !== tz ? tz : (zz, tz) => {
+         this.host = vv, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.ea = !1, this.wait = null !== (zv = vv.wait) && void 0 !== zv ? zv : (vv, zv) => {
```

#### 863. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7235-L7236` → after: `L7310-L7311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7310-L7311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7310-L7311) · [Before (L7235-L7236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7235-L7236)

```diff
-           loadImage: null !== (sz = zz.loadImage) && void 0 !== sz ? sz : no,
-           Csz: null !== (Fz = zz.Csz) && void 0 !== Fz ? Fz : jo.m,
+           loadImage: null !== (Pv = vv.loadImage) && void 0 !== Pv ? Pv : yp,
+           rzv: null !== (hv = vv.rzv) && void 0 !== hv ? hv : tp.o,
```

#### 864. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7239` → after: `L7314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7314) · [Before (L7239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7239)

```diff
-               kind: Ss.ac.SkyImagesReady,
+               kind: EP.Sb.SkyImagesReady,
```

#### 865. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7244` → after: `L7319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7319) · [Before (L7244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7244)

```diff
-             zz.warn(`sky image set ${tz} (${sz}) didn't load: the last sky stays`, Fz)
+             vv.warn(`sky image set ${zv} (${Pv}) didn't load: the last sky stays`, hv)
```

#### 866. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7250` → after: `L7325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7325) · [Before (L7250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7250)

```diff
-         this.wait(Ao.d, (() => {
+         this.wait(qp.b, (() => {
```

#### 867. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7253` → after: `L7328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7328) · [Before (L7253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7253)

```diff
-           this.write(null !== zz && void 0 !== zz ? zz : {})
+           this.write(null !== vv && void 0 !== vv ? vv : {})
```

#### 868. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7266` → after: `L7341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7341) · [Before (L7266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7266)

```diff
-         this.lw = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
+         this.ea = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
```

#### 869. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7269` → after: `L7344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7344) · [Before (L7269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7269)

```diff
-         if (this.lw) return;
+         if (this.ea) return;
```

#### 870. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7275-L7276` → after: `L7350-L7351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7350-L7351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7350-L7351) · [Before (L7275-L7276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7275-L7276)

```diff
-         }))) || (this.written = tz, this.loader.reset(tz.sets), this.queue = this.queue.filter((zz => zz.kind !== Ss.ac.SkyImagesReady)), this.queue.push({
-           kind: Ss.ac.SkyTable,
+         }))) || (this.written = zv, this.loader.reset(zv.sets), this.queue = this.queue.filter((vv => vv.kind !== EP.Sb.SkyImagesReady)), this.queue.push({
+           kind: EP.Sb.SkyTable,
```

#### 871. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7282-L7290` → after: `L7357-L7361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7357-L7361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7357-L7361) · [Before (L7282-L7290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7282-L7290)

```diff
-     var Xv = sz(2611),
-       Ov = sz(2724),
-       ov = sz(299),
-       vv = sz(182),
-       Uv = sz(2617),
-       Kv = sz(2625),
-       uv = sz(273),
-       Nv = sz(277),
-       bv = sz(2644),
+     var ed = Pv(2654),
+       gd = Pv(2762),
+       pd = Pv(292),
+       dd = Pv(167),
+       Nd = Pv(2662),
```

#### 872. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7292-L7295` → after: `L7363-L7370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7363-L7370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7363-L7370) · [Before (L7292-L7295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7292-L7295)

```diff
-       Dv = sz(2684),
-       gv = sz(119),
-       Hv = sz(290),
-       Bv = sz(39927);
+       Td = Pv(263),
+       Wd = Pv(266),
+       wd = Pv(2686),
+       ad = Pv(2704),
+       sd = Pv(2711),
+       Cd = Pv(86),
+       cd = Pv(278),
+       Gd = Pv(40116);
```

#### 873. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7298-L7299` → after: `L7373-L7374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7373-L7374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7373-L7374) · [Before (L7298-L7299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7298-L7299)

```diff
-         this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, QW.l)(PF.I, (zz => {
-           this.onReply((0, hW.d)(PF.I, zz), performance.now())
+         this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, LS.m)(ch.W, (vv => {
+           this.onReply((0, AS.f)(ch.W, vv), performance.now())
```

#### 874. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7303` → after: `L7378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7378) · [Before (L7303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7303)

```diff
-         null === this.id ? this.id = zz : zz !== this.id && (this.id = zz, this.sentMs = document.hidden ? null : tz)
+         null === this.id ? this.id = vv : vv !== this.id && (this.id = vv, this.sentMs = document.hidden ? null : zv)
```

#### 875. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7369-L7372` → after: `L7444-L7447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7444-L7447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7444-L7447) · [Before (L7369-L7372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7369-L7372)

```diff
-         const Xz = zz.headerWord(Ss.D.Pacing),
-           Oz = zz.headerWord(Ss.D.PacingLagUs),
-           oz = (Xz >>> Ss.R.LagsShift) - (this.word >>> Ss.R.LagsShift) & Ss.R.CountMask,
-           vz = (Xz >>> Ss.R.SwitchesShift) - (this.word >>> Ss.R.SwitchesShift) & Ss.R.CountMask,
+         const ev = vv.headerWord(EP.A.Pacing),
+           gv = vv.headerWord(EP.A.PacingLagUs),
+           pv = (ev >>> EP.P.LagsShift) - (this.word >>> EP.P.LagsShift) & EP.P.CountMask,
+           dv = (ev >>> EP.P.SwitchesShift) - (this.word >>> EP.P.SwitchesShift) & EP.P.CountMask,
```

#### 876. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7375-L7376` → after: `L7450-L7451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7450-L7451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7450-L7451) · [Before (L7375-L7376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7375-L7376)

```diff
-         if (this.rose = 0 !== (Xz & ~this.word & Ss.R.Joining), this.word = Xz, this.lagUs = Oz, this.primed = !0, 0 !== (Xz & Ss.R.Tiered)) {
-           if (0 !== (Xz & Ss.R.Joining)) this.rose && (this.inJoin = !0, this.joinLags.clear()), this.inJoin && Kz && Fz && oz > 0 && this.joinLags.add(Uz, oz);
+         if (this.rose = 0 !== (ev & ~this.word & EP.P.Joining), this.word = ev, this.lagUs = gv, this.primed = !0, 0 !== (ev & EP.P.Tiered)) {
+           if (0 !== (ev & EP.P.Joining)) this.rose && (this.inJoin = !0, this.joinLags.clear()), this.inJoin && lv && hv && pv > 0 && this.joinLags.add(Nv, pv);
```

#### 877. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7379` → after: `L7454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7454) · [Before (L7379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7379)

```diff
-             this.inJoin = !1, this.joinLagP90Ms = null !== (uz = null === (Nz = this.joinLags.take([.9])) || void 0 === Nz ? void 0 : Nz[0]) && void 0 !== uz ? uz : null
+             this.inJoin = !1, this.joinLagP90Ms = null !== (Tv = null === (Wv = this.joinLags.take([.9])) || void 0 === Wv ? void 0 : Wv[0]) && void 0 !== Tv ? Tv : null
```

#### 878. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7385` → after: `L7460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7460) · [Before (L7385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7385)

```diff
-                 this.tieredMs += zz, (Xz & Ss.R.AheadMask) > 0 && (this.pacedMs += zz)
+                 this.tieredMs += vv, (ev & EP.P.AheadMask) > 0 && (this.pacedMs += vv)
```

#### 879. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7416-L7417` → after: `L7491-L7492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7491-L7492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7491-L7492) · [Before (L7416-L7417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7416-L7417)

```diff
-             lagP50Ms: null !== (zz = null === Fz || void 0 === Fz ? void 0 : Fz[0]) && void 0 !== zz ? zz : null,
-             lagP90Ms: null !== (tz = null === Fz || void 0 === Fz ? void 0 : Fz[1]) && void 0 !== tz ? tz : null
+             lagP50Ms: null !== (vv = null === hv || void 0 === hv ? void 0 : hv[0]) && void 0 !== vv ? vv : null,
+             lagP90Ms: null !== (zv = null === hv || void 0 === hv ? void 0 : hv[1]) && void 0 !== zv ? zv : null
```

#### 880. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7422-L7427` → after: `L7497-L7502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7497-L7502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7497-L7502) · [Before (L7422-L7427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7422-L7427)

```diff
-     var Jv = sz(8764),
-       Iv = sz(2588),
-       Cv = sz(39998),
-       ev = sz(8757),
-       Zv = sz(2633),
-       Gv = sz(2607);
+     var nd = Pv(8920),
+       Od = Pv(2629),
+       Dd = Pv(40194),
+       Kd = Pv(8914),
+       Vd = Pv(2679),
+       Ud = Pv(2646);
```

#### 881. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7452` → after: `L7528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7528) · [Before (L7452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7452)

```diff
-         this.shell = zz, this.tracker = new Kv.c, this.gpu = new rv, this.pacing = new mv, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpan … [truncated]
+         this.shell = vv, this.tracker = new ld.b, this.gpu = new jd, this.pacing = new Yd, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpan … [truncated]
```

#### 882. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7454` → after: `L7530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7530) · [Before (L7454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7454)

```diff
-         }, (0, Jv.e)(zz.backend, zz.canvas, zz.adapterVendor), this.tracker.start((() => !zz.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), (0, Zv.d)("wasm", (() => {
+         }, (0, nd.d)(vv.backend, vv.canvas, vv.adapterVendor), this.tracker.start((() => !vv.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), (0, Vd.b)("wasm", (() => {
```

#### 883. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7458-L7459` → after: `L7534-L7535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7534-L7535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7534-L7535) · [Before (L7458-L7459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7458-L7459)

```diff
-           } = (0, Cv.d)();
-           return `${zz.backend}, quality steps aim at up to ${Gv.c.target.maxFps} fps, pixel n ${tz}, msaa ${sz}`
+           } = (0, Dd.g)();
+           return `${vv.backend}, quality steps aim at up to ${Ud.c.target.maxFps} fps, pixel n ${zv}, msaa ${Pv}`
```

#### 884. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7474` → after: `L7550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7550) · [Before (L7474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7474)

```diff
-         this.ping.onFrame(zz.headerWord(Ss.D.PingSent), sz);
+         this.ping.onFrame(vv.headerWord(EP.A.PingSent), Pv);
```

#### 885. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7477-L7478` → after: `L7553-L7554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7553-L7554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7553-L7554) · [Before (L7477-L7478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7477-L7478)

```diff
-         const Oz = zz.headerWord(Ss.D.TickUs) / 1e3 + (0, WF.N)();
-         Xz.uB(Oz), null === (Wz = this.frameDebug) || void 0 === Wz || Wz.wasmFrame(zz, tz, sz, "drawn" === Fz, Xz.isSampling(), Oz, (0, ev.f)());
+         const gv = vv.headerWord(EP.A.TickUs) / 1e3 + (0, hh.C)();
+         ev.xG(gv), null === (Sv = this.frameDebug) || void 0 === Sv || Sv.wasmFrame(vv, zv, Pv, "drawn" === hv, ev.isSampling(), gv, (0, Kd.h)());
```

#### 886. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7482` → after: `L7558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7558) · [Before (L7482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7482)

```diff
-         this.gpu.onFrame(zz.headerWord(Ss.D.GpuSampled), zz.headerWord(Ss.D.GpuTimed), zz.headerWord(Ss.D.GpuFrameUs), Xz.isSampling()) && Xz.onGpuSampleStarted(), Xz.onFrameCpu(oz + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(tz)
+         this.gpu.onFrame(vv.headerWord(EP.A.GpuSampled), vv.headerWord(EP.A.GpuTimed), vv.headerWord(EP.A.GpuFrameUs), ev.isSampling()) && ev.onGpuSampleStarted(), ev.onFrameCpu(pv + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(zv)
```

#### 887. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7518` → after: `L7594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7594) · [Before (L7518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7518)

```diff
-           Uz = vz ? Oz : Uv.f,
+           Nv = dv ? gv : Nd.d,
```

#### 888. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7522` → after: `L7598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7598) · [Before (L7522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7522)

```diff
-           bz = (0, wv.s)((0, wv.r)(uz), this.unsentPage),
+           wv = (0, ad.r)((0, ad.o)(Tv), this.unsentPage),
```

#### 889. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7529` → after: `L7605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7605) · [Before (L7529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7529)

```diff
-               Dz = (0, bv.e)({
+               sv = (0, wd.b)({
```

#### 890. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7534` → after: `L7610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7610) · [Before (L7534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7534)

```diff
-             for (const gz of (0, Ov.c)()) {
+             for (const Cv of (0, gd.d)()) {
```

#### 891. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7537-L7539` → after: `L7613-L7615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7613-L7615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7613-L7615) · [Before (L7537-L7539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7537-L7539)

```diff
-               if ((0, ov.r)(Hz)) Bz = (0, wv.d)(Hz);
-               else if ((0, wv.i)(Hz)) Bz = vz[Hz];
-               else if ((0, bv.f)(Hz)) Bz = Dz[Hz];
+               if ((0, pd.n)(iv)) cv = (0, ad.e)(iv);
+               else if ((0, ad.j)(iv)) cv = dv[iv];
+               else if ((0, wd.d)(iv)) cv = sv[iv];
```

#### 892. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7544` → after: `L7620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7620) · [Before (L7544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7544)

```diff
-                 case "Xv":
+                 case "tp":
```

#### 893. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7547-L7548` → after: `L7623-L7624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7623-L7624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7623-L7624) · [Before (L7547-L7548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7547-L7548)

```diff
-                 case "Kv":
-                   Bz = (0, Iv.x)((0, Cv.d)().n);
+                 case "Ap":
+                   cv = (0, Od.E)((0, Dd.g)().n);
```

#### 894. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7550` → after: `L7626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7626) · [Before (L7550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7550)

```diff
-                 case "Nv":
+                 case "Lp":
```

#### 895. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7553` → after: `L7629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7629) · [Before (L7553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7553)

```diff
-                 case "bv":
+                 case "Hp":
```

#### 896. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7556` → after: `L7632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7632) · [Before (L7556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7556)

```diff
-                 case "wv":
+                 case "Mp":
```

#### 897. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7559` → after: `L7635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7635) · [Before (L7559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7559)

```diff
-                 case "Dv":
+                 case "yp":
```

#### 898. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7562` → after: `L7638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7638) · [Before (L7562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7562)

```diff
-                 case "gv":
+                 case "Bp":
```

#### 899. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7565` → after: `L7641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7641) · [Before (L7565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7565)

```diff
-                 case "Hv":
+                 case "Jp":
```

#### 900. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7568` → after: `L7644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7644) · [Before (L7568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7568)

```diff
-                 case "Bv":
+                 case "Ep":
```

#### 901. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7571` → after: `L7647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7647) · [Before (L7571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7571)

```diff
-                 case "Pv":
+                 case "bp":
```

#### 902. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7574` → after: `L7650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7650) · [Before (L7574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7574)

```diff
-                 case "rv":
+                 case "rp":
```

#### 903. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7577` → after: `L7653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7653) · [Before (L7577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7577)

```diff
-                 case "Yv":
+                 case "kp":
```

#### 904. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7580` → after: `L7656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7656) · [Before (L7580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7580)

```diff
-                 case "xv":
+                 case "Xp":
```

#### 905. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7583` → after: `L7659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7659) · [Before (L7583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7583)

```diff
-                 case "Cv":
+                 case "hd":
```

#### 906. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7586` → after: `L7662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7662) · [Before (L7586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7586)

```diff
-                 case "ev":
+                 case "Sd":
```

#### 907. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7589` → after: `L7665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7665) · [Before (L7589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7589)

```diff
-                 case "mv":
+                 case "vd":
```

#### 908. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7592` → after: `L7668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7668) · [Before (L7592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7592)

```diff
-                 case "Jv":
+                 case "zd":
```

#### 909. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7595` → after: `L7671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7671) · [Before (L7595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7595)

```diff
-                 case "Iv":
+                 case "Pd":
```

#### 910. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7598` → after: `L7674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7674) · [Before (L7598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7598)

```diff
-                 case "Zv":
+                 case "pd":
```

#### 911. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7601` → after: `L7677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7677) · [Before (L7601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7601)

```diff
-                 case "Gv":
+                 case "dd":
```

#### 912. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7604` → after: `L7680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7680) · [Before (L7604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7604)

```diff
-                 case "Tv":
+                 case "Nd":
```

#### 913. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7607` → after: `L7683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7683) · [Before (L7607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7607)

```diff
-                 case "cv":
+                 case "ld":
```

#### 914. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7610` → after: `L7686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7686) · [Before (L7610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7610)

```diff
-                 case "jv":
+                 case "Td":
```

#### 915. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7613` → after: `L7689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7689) · [Before (L7613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7613)

```diff
-                 case "Av":
+                 case "Wd":
```

#### 916. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7616` → after: `L7692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7692) · [Before (L7616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7616)

```diff
-                 case "yv":
+                 case "wd":
```

#### 917. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7619-L7620` → after: `L7695-L7696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7695-L7696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7695-L7696) · [Before (L7619-L7620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7619-L7620)

```diff
-                 case "Vv":
-                   Bz = (0, Xv.j)(Oz);
+                 case "Ud":
+                   cv = (0, ed.g)(gv);
```

#### 918. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7622` → after: `L7698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7698) · [Before (L7622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7622)

```diff
-                 case "Uv":
+                 case "Zp":
```

#### 919. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7625-L7639` → after: `L7701-L7715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7701-L7715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7701-L7715) · [Before (L7625-L7639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7625-L7639)

```diff
-                 case "Mv":
-                 case "hv":
-                 case "Qv":
-                 case "kv":
-                 case "iv":
-                 case "Lv":
-                 case "lv":
-                 case "nv":
-                 case "av":
-                 case "qv":
-                 case "Sv":
-                 case "Rv":
-                 case "fv":
-                 case "Ev":
-                 case "zU":
+                 case "sd":
+                 case "Cd":
+                 case "Gd":
+                 case "jd":
+                 case "fd":
+                 case "Fd":
+                 case "Yd":
+                 case "Od":
+                 case "Dd":
+                 case "Kd":
+                 case "Vd":
+                 case "Rd":
+                 case "xd":
+                 case "td":
+                 case "qd":
```

#### 920. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7642` → after: `L7718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7718) · [Before (L7642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7642)

```diff
-                 case "bU":
+                 case "bd":
```

#### 921. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7645` → after: `L7721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7721) · [Before (L7645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7645)

```diff
-                 case "wU":
+                 case "rd":
```

#### 922. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7648-L7649` → after: `L7724-L7725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7724-L7725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7724-L7725) · [Before (L7648-L7649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7648-L7649)

```diff
-                 case "DU":
-                   Bz = Bv.e[zz.backend];
+                 case "kd":
+                   cv = Gd.b[vv.backend];
```

#### 923. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7651-L7652` → after: `L7727-L7728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7727-L7728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7727-L7728) · [Before (L7651-L7652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7651-L7652)

```diff
-                 case "gU":
-                   Bz = (0, gv.c)();
+                 case "Xd":
+                   cv = (0, Cd.b)();
```

#### 924. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7654` → after: `L7730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7730) · [Before (L7654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7654)

```diff
-                 case "HU":
+                 case "ud":
```

#### 925. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7657` → after: `L7733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7733) · [Before (L7657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7657)

```diff
-                 case "BU":
+                 case "vN":
```

#### 926. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7660-L7661` → after: `L7736-L7737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7736-L7737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7736-L7737) · [Before (L7660-L7661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7660-L7661)

```diff
-                 case "PU":
-                   Bz = null !== (Uz = Fz.b.get("gameEntrySource")) && void 0 !== Uz ? Uz : vv.e;
+                 case "zN":
+                   cv = null !== (Nv = hv.c.get("gameEntrySource")) && void 0 !== Nv ? Nv : dd.e;
```

#### 927. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7663` → after: `L7739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7739) · [Before (L7663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7663)

```diff
-                 case "rU":
+                 case "PN":
```

#### 928. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7666-L7667` → after: `L7742-L7743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7742-L7743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7742-L7743) · [Before (L7666-L7667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7666-L7667)

```diff
-                 case "YU":
-                   Bz = (0, uv.j)();
+                 case "hN":
+                   cv = (0, Td.h)();
```

#### 929. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7669-L7670` → after: `L7745-L7746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7745-L7746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7745-L7746) · [Before (L7669-L7670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7669-L7670)

```diff
-                 case "xU":
-                   Bz = null !== (Kz = (0, Nv.e)()) && void 0 !== Kz ? Kz : vv.e;
+                 case "SN":
+                   cv = null !== (lv = (0, Wd.e)()) && void 0 !== lv ? lv : dd.e;
```

#### 930. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7672-L7673` → after: `L7748-L7749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7748-L7749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7748-L7749) · [Before (L7672-L7673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7672-L7673)

```diff
-                 case "mU":
-                   Bz = (0, uv.e)(wz.width, wz.height);
+                 case "eN":
+                   cv = (0, Td.d)(av.width, av.height);
```

#### 931. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7675-L7676` → after: `L7751-L7752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7751-L7752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7751-L7752) · [Before (L7675-L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7675-L7676)

```diff
-                 case "JU":
-                   Bz = (0, Ov.e)(-(new Date).getTimezoneOffset());
+                 case "gN":
+                   cv = (0, gd.g)(-(new Date).getTimezoneOffset());
```

#### 932. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7678-L7679` → after: `L7754-L7755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7754-L7755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7754-L7755) · [Before (L7678-L7679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7678-L7679)

```diff
-                 case "eU":
-                   Bz = null !== (uz = zz.fallbackReason) && void 0 !== uz ? uz : vv.e;
+                 case "NN":
+                   cv = null !== (Tv = vv.fallbackReason) && void 0 !== Tv ? Tv : dd.e;
```

#### 933. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7681` → after: `L7757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7757) · [Before (L7681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7681)

```diff
-                 case "TU":
+                 case "WN":
```

#### 934. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7684` → after: `L7760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7760) · [Before (L7684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7684)

```diff
-                 case "cU":
+                 case "wN":
```

#### 935. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7687` → after: `L7763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7763) · [Before (L7687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7687)

```diff
-                 case "CU":
+                 case "dN":
```

#### 936. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7690` → after: `L7766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7766) · [Before (L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7690)

```diff
-                 case "jU":
+                 case "aN":
```

#### 937. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7693` → after: `L7769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7769) · [Before (L7693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7693)

```diff
-                 case "AU": {
+                 case "sN": {
```

#### 938. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7698-L7699` → after: `L7774-L7775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7774-L7775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7774-L7775) · [Before (L7698-L7699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7698-L7699)

```diff
-                 case "yU":
-                   Bz = Hv.w;
+                 case "CN":
+                   cv = cd.z;
```

#### 939. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7701-L7703` → after: `L7777-L7779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7777-L7779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7777-L7779) · [Before (L7701-L7703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7701-L7703)

```diff
-                 case "IU":
-                 case "ZU":
-                 case "GU":
+                 case "pN":
+                 case "lN":
+                 case "TN":
```

#### 940. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7707` → after: `L7783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7783) · [Before (L7707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7707)

```diff
-                   throw new Error(`Unhandled field name: ${Hz}`)
+                   throw new Error(`Unhandled field name: ${iv}`)
```

#### 941. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7709` → after: `L7785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7785) · [Before (L7709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7709)

```diff
-               if (void 0 === Bz) throw new Error(`Metric ${Hz} has no value`);
+               if (void 0 === cv) throw new Error(`Metric ${iv} has no value`);
```

#### 942. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7721-L7722` → after: `L7797-L7798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7797-L7798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7797-L7798) · [Before (L7721-L7722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7721-L7722)

```diff
-             return (0, Lt.c)(), zz(wz.n.Send, tz, sz)
-           }(this.shell.writeCmd, Nz.ed, function(zz) {
+             return (0, Bz.b)(), vv(av.l.Send, zv, Pv)
+           }(this.shell.writeCmd, Wv.Gd, function(vv) {
```

#### 943. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7724-L7725` → after: `L7800-L7801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7800-L7801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7800-L7801) · [Before (L7724-L7725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7724-L7725)

```diff
-               sz = new Uint8Array(wz.ee.BYTES + tz.length);
-             return new DataView(sz.buffer).setUint16(0, qt.d.AnalyticsUpdate, !0), sz.set(tz, wz.ee.BYTES), sz
+               Pv = new Uint8Array(av.Wd.BYTES + zv.length);
+             return new DataView(Pv.buffer).setUint16(0, oz.d.AnalyticsUpdate, !0), Pv.set(zv, av.Wd.BYTES), Pv
```

#### 944. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7727` → after: `L7803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7803) · [Before (L7727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7727)

```diff
-         this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, Xv.g), (0, wv.o)(Dz, "wasm", uz)
+         this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, ed.e), (0, ad.m)(sv, "wasm", Tv)
```

#### 945. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7730` → after: `L7806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7806) · [Before (L7730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7730)

```diff
-     var Av = sz(38947);
+     var qd = Pv(39065);
```

#### 946. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7734-L7736` → after: `L7810-L7812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7810-L7812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7810-L7812) · [Before (L7734-L7736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7734-L7736)

```diff
-       return (0, Av.c)(((zz, sz, Fz) => tz.yK(zz, sz, Fz)), ((tz, sz, Wz) => {
-         const Xz = `${tz},${sz},${Wz}`;
-         return Fz.has(Xz) || Fz.set(Xz, (0, Mt.e)(zz, tz, sz, Wz)), Fz.get(Xz)
+       return (0, qd.c)(((vv, Pv, hv) => zv.yN(vv, Pv, hv)), ((zv, Pv, Sv) => {
+         const ev = `${zv},${Pv},${Sv}`;
+         return hv.has(ev) || hv.set(ev, (0, Zz.d)(vv, zv, Pv, Sv)), hv.get(ev)
```

#### 947. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7739-L7740` → after: `L7815-L7816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7815-L7816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7815-L7816) · [Before (L7739-L7740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7739-L7740)

```diff
-     var Mv = sz(38950),
-       dv = sz(39822);
+     var Qd = Pv(39070),
+       Zd = Pv(40019);
```

#### 948. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7743-L7744` → after: `L7819-L7820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7819-L7820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7819-L7820) · [Before (L7743-L7744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7743-L7744)

```diff
-       const tz = null !== zz && 0 !== (wz.t.playerFlags(zz.api.apiView, 0) & wz.Nd.CursorAim);
-       tz !== (0, dv.r)() && (0, dv.N)(tz, null !== zz)
+       const zv = null !== vv && 0 !== (av.t.playerFlags(vv.api.apiView, 0) & av.Gd.CursorAim);
+       zv !== (0, Zd.m)() && (0, Zd.F)(zv, null !== vv)
```

#### 949. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7748` → after: `L7824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7824) · [Before (L7748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7748)

```diff
-       return (0, BF.c)(PF.z, zz)
+       return (0, ih.b)(ch.M, vv)
```

#### 950. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7750` → after: `L7826-L7827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7826-L7827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7826-L7827) · [Before (L7750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7750)

```diff
-     const kv = new Xz.g((zz => sz(41667)(`./${zz}/${zz}Client`)));
+     var Hd = Pv(40038);
+     const Md = new ev.g((vv => Pv(41922)(`./${vv}/${vv}Client`)));
```

#### 951. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7754` → after: `L7831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7831) · [Before (L7754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7754)

```diff
-       iv ??= sz.e(27).then((() => sz(38550))).then((zz => {
+       yd ??= Pv.e(27).then((() => Pv(38663))).then((vv => {
```

#### 952. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7787` → after: `L7864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7864) · [Before (L7787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7787)

```diff
-         return zz.crash(gW.y, Nz), null
+         return vv.crash(iS.D, Wv), null
```
