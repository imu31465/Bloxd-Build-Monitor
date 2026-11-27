# Changed — Bundle Modifications Report (Part 115 / 126)

- **Updated at**: `2026-11-28T08:15 JST`
- **Part**: `115 / 126` (**419** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 114](part-114.md) · [Part 116 →](part-116.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmClientGame.js` (4udp6d.2845de07 → fl4vv.bd3c59ce · continued)

- **File**: `bundles/bloxd.io/chunks/js/wasmClientGame.js` (942 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b)

#### 770. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7184` → after: `L7184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7184) · [Before (L7184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7184)

```diff
-           if (!iR || !GR.wanted) return this.He ? void this.releaseAfterDispose(qR.map(Zi)) : (this.releaseAll(qR.map(Zi)), void(iR && this.sets.delete(RR)));
+           if (!fr || !Qr.wanted) return this.vU ? void this.releaseAfterDispose(Ir.map(af)) : (this.releaseAll(Ir.map(af)), void(fr && this.sets.delete(rr)));
```

#### 771. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7191` → after: `L7191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7191) · [Before (L7191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7191)

```diff
-         const [tR] = yR, uR = [tR.width, tR.height], ZR = yR.every((RR => RR.width === uR[0] && RR.height === uR[1])), qR = JR.urls.length === qy.nc.CubeFaces;
+         const [Wr] = Zr, ar = [Wr.width, Wr.height], jr = Zr.every((rr => rr.width === ar[0] && rr.height === ar[1])), Ir = Sr.urls.length === IZ.kc.CubeFaces;
```

#### 772. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7194-L7195` → after: `L7194-L7195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7194-L7195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7194-L7195) · [Before (L7194-L7195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7194-L7195)

```diff
-           const GR = yR.map((RR => `${RR.width}x${RR.height}`));
-           return void this.host.onLoadFailed(RR, JR.urls[0], new Error(`set ${RR}'s images can't make its texture: ${GR.join(", ")}`))
+           const Qr = Zr.map((rr => `${rr.width}x${rr.height}`));
+           return void this.host.onLoadFailed(rr, Sr.urls[0], new Error(`set ${rr}'s images can't make its texture: ${Qr.join(", ")}`))
```

#### 773. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7211` → after: `L7211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7211) · [Before (L7211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7211)

```diff
-         for (const JR of RR) this.host.jtR(JR)
+         for (const Sr of rr) this.host.KWr(Sr)
```

#### 774. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7215` → after: `L7215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7215) · [Before (L7215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7215)

```diff
-           this.host.jtR(JR)
+           this.host.KWr(Sr)
```

#### 775. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7225` → after: `L7225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7225) · [Before (L7225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7225)

```diff
-       const yR = new Uint8Array(qy.nc.SkyImagesReadyBytes),
+       const Zr = new Uint8Array(IZ.kc.SkyImagesReadyBytes),
```

#### 776. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7227` → after: `L7227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7227) · [Before (L7227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7227)

```diff
-       return tR.setUint16(0, RR, !0), tR.setUint16(2, JR.length, !0), tR.setUint16(4, GR[0], !0), tR.setUint16(6, GR[1], !0), JR.slice(0, qy.nc.CubeFaces).forEach(((RR, JR) => {
+       return Wr.setUint16(0, rr, !0), Wr.setUint16(2, Sr.length, !0), Wr.setUint16(4, Qr[0], !0), Wr.setUint16(6, Qr[1], !0), Sr.slice(0, IZ.kc.CubeFaces).forEach(((rr, Sr) => {
```

#### 777. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7233` → after: `L7233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7233) · [Before (L7233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7233)

```diff
-       const JR = new Uint8Array(qy.nc.SkyImagesReadyBytes),
+       const Sr = new Uint8Array(IZ.kc.SkyImagesReadyBytes),
```

#### 778. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7235` → after: `L7235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7235) · [Before (L7235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7235)

```diff
-       return GR.setUint16(0, RR, !0), GR.setUint16(2, qy.nc.Failed, !0), JR
+       return Qr.setUint16(0, rr, !0), Qr.setUint16(2, IZ.kc.Failed, !0), Sr
```

#### 779. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7241` → after: `L7241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7241) · [Before (L7241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7241)

```diff
-         GR = await (0, yi.B)(RR)
+         Qr = await (0, Qf.K)(rr)
```

#### 780. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7243` → after: `L7243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7243) · [Before (L7243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7243)

```diff
-         throw new Ji.d("fetch", RR, {
+         throw new rf.e("fetch", rr, {
```

#### 781. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7276` → after: `L7276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7276) · [Before (L7276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7276)

```diff
-         throw new Ji.d("decode", RR, {
+         throw new rf.e("decode", rr, {
```

#### 782. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7281` → after: `L7281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7281) · [Before (L7281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7281)

```diff
-         id: (0, Ji.l)(tR),
+         id: (0, rf.k)(Wr),
```

#### 783. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7286-L7290` → after: `L7286-L7290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7286-L7290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7286-L7290) · [Before (L7286-L7290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7286-L7290)

```diff
-     var Ki = GR(2374),
-       wi = GR(34957),
-       ri = GR(40498);
-     const ei = Ki.i.length,
-       ai = new Set([...Ki.i, "earth"]);
+     var pf = Qr(2325),
+       xf = Qr(35261),
+       mf = Qr(40801);
+     const Nf = pf.h.length,
+       Uf = new Set([...pf.h, "earth"]);
```

#### 784. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7299` → after: `L7299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7299) · [Before (L7299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7299)

```diff
-               kind: qy.nc.KindCustom,
+               kind: IZ.kc.KindCustom,
```

#### 785. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7305` → after: `L7305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7305) · [Before (L7305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7305)

```diff
-               urls: (0, ri.g)(tR),
+               urls: (0, mf.f)(Wr),
```

#### 786. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7310` → after: `L7310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7310) · [Before (L7310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7310)

```diff
-             kind: qy.nc.KindEarth,
+             kind: IZ.kc.KindEarth,
```

#### 787. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7315` → after: `L7315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7315) · [Before (L7315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7315)

```diff
-       Ki.i.forEach(((JR, GR) => {
+       pf.h.forEach(((Sr, Qr) => {
```

#### 788. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7317` → after: `L7317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7317) · [Before (L7317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7317)

```diff
-         yR(GR, null !== (tR = ni(RR[JR])) && void 0 !== tR ? tR : wi.o[JR])
+         Zr(Qr, null !== (Wr = hf(rr[Sr])) && void 0 !== Wr ? Wr : xf.o[Sr])
```

#### 789. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7328` → after: `L7328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7328) · [Before (L7328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7328)

```diff
-         JR.length > 255 ? qR.push(`Ignoring texture pack skybox ${rR}, whose name is over 255 bytes`) : ZR.length === qy.nc.MaxAdded ? qR.push(`Ignoring texture pack skybox ${rR}, past the ${qy.nc.MaxAdded} skies a pack can add`) : (ZR.push(JR), yR(qy.nc.AddedId, RR))
+         Sr.length > 255 ? Ir.push(`Ignoring texture pack skybox ${Nr}, whose name is over 255 bytes`) : jr.length === IZ.kc.MaxAdded ? Ir.push(`Ignoring texture pack skybox ${Nr}, past the ${IZ.kc.MaxAdded} skies a pack can add`) : (jr.push(Sr), Zr(IZ.kc.AddedId, rr))
```

#### 790. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7332` → after: `L7332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7332) · [Before (L7332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7332)

```diff
-         urls: wi.f.map((RR => wi.h + RR)),
+         urls: xf.g.map((rr => xf.h + rr)),
```

#### 791. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7335` → after: `L7335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7335) · [Before (L7335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7335)

```diff
-         urls: [wi.k],
+         urls: [xf.l],
```

#### 792. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7338` → after: `L7338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7338) · [Before (L7338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7338)

```diff
-         urls: [wi.b],
+         urls: [xf.e],
```

#### 793. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7341` → after: `L7341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7341) · [Before (L7341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7341)

```diff
-       const fR = qy.nc.SkyTableHeaderBytes + GR.length * qy.nc.SkyTableEntryBytes,
+       const Er = IZ.kc.SkyTableHeaderBytes + Qr.length * IZ.kc.SkyTableEntryBytes,
```

#### 794. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7345` → after: `L7345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7345) · [Before (L7345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7345)

```diff
-         const GR = qy.nc.SkyTableHeaderBytes + JR * qy.nc.SkyTableEntryBytes;
+         const Qr = IZ.kc.SkyTableHeaderBytes + Sr * IZ.kc.SkyTableEntryBytes;
```

#### 795. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7365` → after: `L7365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7365) · [Before (L7365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7365)

```diff
-             "number" === typeof iR && Number.isFinite(iR) && (JR.setFloat32(GR + qy.v.CameraOffsetAt + 4 * uR, iR, !0), tR |= qR)
+             "number" === typeof fr && Number.isFinite(fr) && (Sr.setFloat32(Qr + IZ.x.CameraOffsetAt + 4 * ar, fr, !0), Wr |= Ir)
```

#### 796. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7371` → after: `L7371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7371) · [Before (L7371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7371)

```diff
-           JR.setUint32(GR + qy.v.PresentAt, tR, !0), JR.setUint8(GR + qy.v.FlagsAt, uR)
+           Sr.setUint32(Qr + IZ.x.PresentAt, Wr, !0), Sr.setUint8(Qr + IZ.x.FlagsAt, ar)
```

#### 797. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7390` → after: `L7390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7390) · [Before (L7390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7390)

```diff
-       })) ? RR : null
+       })) ? rr : null
```

#### 798. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7393-L7400` → after: `L7393-L7400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7393-L7400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7393-L7400) · [Before (L7393-L7400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7393-L7400)

```diff
-         ["inclination", qy.v.Inclination],
-         ["turbidity", qy.v.Turbidity],
-         ["luminance", qy.v.Luminance],
-         ["rayleigh", qy.v.Rayleigh],
-         ["mieCoefficient", qy.v.MieCoefficient],
-         ["mieDirectionalG", qy.v.MieDirectionalG],
-         ["distance", qy.v.Distance],
-         ["azimuth", qy.v.Azimuth]
+         ["inclination", IZ.x.Inclination],
+         ["turbidity", IZ.x.Turbidity],
+         ["luminance", IZ.x.Luminance],
+         ["rayleigh", IZ.x.Rayleigh],
+         ["mieCoefficient", IZ.x.MieCoefficient],
+         ["mieDirectionalG", IZ.x.MieDirectionalG],
+         ["distance", IZ.x.Distance],
+         ["azimuth", IZ.x.Azimuth]
```

#### 799. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7403-L7405` → after: `L7403-L7405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7403-L7405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7403-L7405) · [Before (L7403-L7405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7403-L7405)

```diff
-         ["sunPosition", qy.v.SunPosition, qy.v.SunPositionAt],
-         ["up", qy.v.Up, qy.v.UpAt],
-         ["vertexTint", qy.v.VertexTint, qy.v.VertexTintAt]
+         ["sunPosition", IZ.x.SunPosition, IZ.x.SunPositionAt],
+         ["up", IZ.x.Up, IZ.x.UpAt],
+         ["vertexTint", IZ.x.VertexTint, IZ.x.VertexTintAt]
```

#### 800. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7408-L7410` → after: `L7408-L7410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7408-L7410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7408-L7410) · [Before (L7408-L7410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7408-L7410)

```diff
-         ["xCameraOffset", qy.v.CameraOffsetX],
-         ["yCameraOffset", qy.v.CameraOffsetY],
-         ["zCameraOffset", qy.v.CameraOffsetZ]
+         ["xCameraOffset", IZ.x.CameraOffsetX],
+         ["yCameraOffset", IZ.x.CameraOffsetY],
+         ["zCameraOffset", IZ.x.CameraOffsetZ]
```

#### 801. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7413-L7415` → after: `L7413-L7415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7413-L7415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7413-L7415) · [Before (L7413-L7415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7413-L7415)

```diff
-         ["useSunPosition", qy.v.UseSunPosition],
-         ["dithering", qy.v.Dithering],
-         ["infiniteDistance", qy.v.InfiniteDistance]
+         ["useSunPosition", IZ.x.UseSunPosition],
+         ["dithering", IZ.x.Dithering],
+         ["infiniteDistance", IZ.x.InfiniteDistance]
```

#### 802. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7445` → after: `L7445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7445) · [Before (L7445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7445)

```diff
-                       return "string" !== typeof RR ? null : null !== (JR = null === (GR = li.exec(RR)) || void 0 === GR || null === (yR = GR.groups) || void 0 === yR ? void 0 : yR.base64) && void 0 !== JR ? JR : null
+                       return "string" !== typeof rr ? null : null !== (Sr = null === (Qr = Tf.exec(rr)) || void 0 === Qr || null === (Zr = Qr.groups) || void 0 === Zr ? void 0 : Zr.base64) && void 0 !== Sr ? Sr : null
```

#### 803. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7449` → after: `L7449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7449) · [Before (L7449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7449)

```diff
-                 }(yR) || (GR(`Ignoring texture pack skybox ${JR}, whose faces are not all data URLs`, null), !1)
+                 }(Zr) || (Qr(`Ignoring texture pack skybox ${Sr}, whose faces are not all data URLs`, null), !1)
```

#### 804. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7462` → after: `L7462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7462) · [Before (L7462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7462)

```diff
-         this.host = RR, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.He = !1, this.wait = null !== (JR = RR.wait) && void 0 !== JR ? JR : (RR, JR) => {
+         this.host = rr, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.vU = !1, this.wait = null !== (Sr = rr.wait) && void 0 !== Sr ? Sr : (rr, Sr) => {
```

#### 805. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7465-L7466` → after: `L7465-L7466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7465-L7466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7465-L7466) · [Before (L7465-L7466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7465-L7466)

```diff
-           loadImage: null !== (GR = RR.loadImage) && void 0 !== GR ? GR : Vi,
-           jtR: null !== (yR = RR.jtR) && void 0 !== yR ? yR : Ji.m,
+           loadImage: null !== (Qr = rr.loadImage) && void 0 !== Qr ? Qr : Ef,
+           KWr: null !== (Zr = rr.KWr) && void 0 !== Zr ? Zr : rf.m,
```

#### 806. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7469` → after: `L7469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7469) · [Before (L7469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7469)

```diff
-               kind: qy.nc.SkyImagesReady,
+               kind: IZ.kc.SkyImagesReady,
```

#### 807. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7474` → after: `L7474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7474) · [Before (L7474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7474)

```diff
-             RR.warn(`sky image set ${JR} (${GR}) didn't load: the last sky stays`, yR)
+             rr.warn(`sky image set ${Sr} (${Qr}) didn't load: the last sky stays`, Zr)
```

#### 808. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7483` → after: `L7483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7483) · [Before (L7483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7483)

```diff
-           this.write(null !== RR && void 0 !== RR ? RR : {})
+           this.write(null !== rr && void 0 !== rr ? rr : {})
```

#### 809. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7496` → after: `L7496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7496) · [Before (L7496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7496)

```diff
-         this.He = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
+         this.vU = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
```

#### 810. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7499` → after: `L7499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7499) · [Before (L7499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7499)

```diff
-         if (this.He) return;
+         if (this.vU) return;
```

#### 811. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7507-L7508` → after: `L7507-L7508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7507-L7508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7507-L7508) · [Before (L7507-L7508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7507-L7508)

```diff
-           this.written = JR, this.loader.reset(JR.sets), this.queue = this.queue.filter((RR => RR.kind !== qy.nc.SkyImagesReady)), this.queue.push({
-             kind: qy.nc.SkyTable,
+           this.written = Sr, this.loader.reset(Sr.sets), this.queue = this.queue.filter((rr => rr.kind !== IZ.kc.SkyImagesReady)), this.queue.push({
+             kind: IZ.kc.SkyTable,
```

#### 812. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7515-L7520` → after: `L7515-L7520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7515-L7520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7515-L7520) · [Before (L7515-L7520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7515-L7520)

```diff
-     var gi = GR(2991),
-       bi = GR(2989),
-       vi = GR(299),
-       Oi = GR(182),
-       xi = GR(3943),
-       Ni = GR(3948),
+     var vf = Qr(2963),
+       Of = Qr(2961),
+       Lf = Qr(308),
+       lf = Qr(190),
+       Xf = Qr(3891),
+       Pf = Qr(3900),
```

#### 813. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7522-L7530` → after: `L7522-L7530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7522-L7530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7522-L7530) · [Before (L7522-L7530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7522-L7530)

```diff
-       Hi = GR(279),
-       oi = GR(4035),
-       ci = GR(4064),
-       Pi = GR(4074),
-       Ii = GR(116),
-       mi = GR(4139),
-       zi = GR(4137),
-       Si = GR(342),
-       ji = GR(42374);
+       qf = Qr(285),
+       Rf = Qr(3991),
+       gf = Qr(4020),
+       Cf = Qr(4032),
+       Mf = Qr(124),
+       Gf = Qr(4091),
+       kf = Qr(4088),
+       Af = Qr(345),
+       Vf = Qr(42707);
```

#### 814. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7533-L7534` → after: `L7533-L7534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7533-L7534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7533-L7534) · [Before (L7533-L7534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7533-L7534)

```diff
-         this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, tu.l)(Ny.M, (RR => {
-           this.onReply((0, yu.i)(Ny.M, RR), performance.now())
+         this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, Za.j)(qZ.I, (rr => {
+           this.onReply((0, Qa.d)(qZ.I, rr), performance.now())
```

#### 815. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7538` → after: `L7538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7538) · [Before (L7538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7538)

```diff
-         null === this.id ? this.id = RR : RR !== this.id && (this.id = RR, this.sentMs = document.hidden ? null : JR)
+         null === this.id ? this.id = rr : rr !== this.id && (this.id = rr, this.sentMs = document.hidden ? null : Sr)
```

#### 816. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7574` → after: `L7574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7574) · [Before (L7574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7574)

```diff
-     const Yi = {
+     const of = {
```

#### 817. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7591` → after: `L7591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7591) · [Before (L7591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7591)

```diff
-         if (this.count = 0, RR < 30) return Yi;
+         if (this.count = 0, rr < 30) return of;
```

#### 818. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7607` → after: `L7607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7607) · [Before (L7607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7607)

```diff
-           tR = (GR >>> qy.hb.LagsShift) - (this.word >>> qy.hb.LagsShift) & qy.hb.CountMask,
+           Wr = (Qr >>> IZ._.LagsShift) - (this.word >>> IZ._.LagsShift) & IZ._.CountMask,
```

#### 819. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7610` → after: `L7610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7610) · [Before (L7610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7610)

```diff
-         this.word = GR, this.lagUs = yR, this.primed = !0, ZR && JR && tR > 0 && 0 !== (GR & qy.hb.Defaulted) && this.lags.add(uR, tR)
+         this.word = Qr, this.lagUs = Zr, this.primed = !0, jr && Sr && Wr > 0 && 0 !== (Qr & IZ._.Defaulted) && this.lags.add(ar, Wr)
```

#### 820. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7616` → after: `L7616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7616) · [Before (L7616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7616)

```diff
-         return RR ? this.lags.take() : (this.lags.clear(), Yi)
+         return rr ? this.lags.take() : (this.lags.clear(), of)
```

#### 821. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7619-L7625` → after: `L7619-L7625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7619-L7625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7619-L7625) · [Before (L7619-L7625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7619-L7625)

```diff
-     var Fi = GR(4019),
-       Ti = GR(35081),
-       si = GR(4044),
-       Rf = GR(42430),
-       Jf = GR(35072),
-       Gf = GR(3956),
-       yf = GR(4048);
+     var Df = Qr(3982),
+       df = Qr(35392),
+       sf = Qr(3995),
+       uf = Qr(42753),
+       rE = Qr(35386),
+       SE = Qr(3906),
+       QE = Qr(3998);
```

#### 822. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7656` → after: `L7656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7656) · [Before (L7656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7656)

```diff
-         this.shell = RR, this.tracker = new Ni.e, this.gpu = new Ei, this.pacing = new Qi, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpan … [truncated]
+         this.shell = rr, this.tracker = new Pf.b, this.gpu = new Ff, this.pacing = new Jf, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpan … [truncated]
```

#### 823. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7658` → after: `L7658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7658) · [Before (L7658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7658)

```diff
-         }), (RR => this.shell.mN(RR))), this.onVisibility = () => {
+         }), (rr => this.shell.sH(rr))), this.onVisibility = () => {
```

#### 824. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7662` → after: `L7662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7662) · [Before (L7662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7662)

```diff
-         }, (0, Ti.c)(RR.backend, RR.canvas, RR.adapterVendor), this.tracker.start((() => !RR.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, Gf.c)("wasm", (() => {
+         }, (0, df.d)(rr.backend, rr.canvas, rr.adapterVendor), this.tracker.start((() => !rr.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, SE.c)("wasm", (() => {
```

#### 825. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7667` → after: `L7667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7667) · [Before (L7667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7667)

```diff
-           return `${RR.backend}, quality steps aim at up to ${yf.d.target.maxFps} fps, pixel n ${JR}, msaa ${GR}`
+           return `${rr.backend}, quality steps aim at up to ${QE.b.target.maxFps} fps, pixel n ${Sr}, msaa ${Qr}`
```

#### 826. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7688` → after: `L7688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7688) · [Before (L7688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7688)

```diff
-         const ZR = RR.headerWord(qy.L.TickUs) / 1e3 + (0, ny.H)();
+         const jr = rr.headerWord(IZ.L.TickUs) / 1e3 + (0, zZ.Q)();
```

#### 827. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7690` → after: `L7690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7690) · [Before (L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7690)

```diff
-         (uR.UW(ZR), null === (tR = this.frameDebug) || void 0 === tR || tR.wasmFrame(RR, JR, GR, yR, uR.isSampling(), ZR), null !== this.game) && (null === (qR = this.frameDebug) || void 0 === qR || qR.inGame());
+         (ar.FY(jr), null === (Wr = this.frameDebug) || void 0 === Wr || Wr.wasmFrame(rr, Sr, Qr, Zr, ar.isSampling(), jr), null !== this.game) && (null === (Ir = this.frameDebug) || void 0 === Ir || Ir.inGame());
```

#### 828. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7721` → after: `L7721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7721) · [Before (L7721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7721)

```diff
-         if (!(JR < Pi.b)) {
+         if (!(Sr < Cf.d)) {
```

#### 829. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7740` → after: `L7740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7740) · [Before (L7740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7740)

```diff
-           fR = iR ? ZR : (0, xi.e)(ZR),
+           Er = fr ? jr : (0, Xf.f)(jr),
```

#### 830. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7744` → after: `L7744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7744) · [Before (L7744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7744)

```diff
-           rR = (0, ci.z)((0, ci.v)(KR), this.unsentPage),
+           Nr = (0, gf.x)((0, gf.u)(xr), this.unsentPage),
```

#### 831. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7754` → after: `L7754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7754) · [Before (L7754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7754)

```diff
-                 autoMsaaOff: (0, Jf.b)()
+                 autoMsaaOff: (0, rE.c)()
```

#### 832. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7756` → after: `L7756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7756) · [Before (L7756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7756)

```diff
-             for (const nR of (0, bi.e)()) {
+             for (const zr of (0, Of.f)()) {
```

#### 833. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7759-L7761` → after: `L7759-L7761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7759-L7761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7759-L7761) · [Before (L7759-L7761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7759-L7761)

```diff
-               if ((0, vi.K)(UR)) WR = (0, ci.e)(UR);
-               else if ((0, ci.k)(UR)) WR = iR[UR];
-               else if ((0, oi.l)(UR)) WR = LR[UR];
+               if ((0, Lf.L)(Yr)) nr = (0, gf.e)(Yr);
+               else if ((0, gf.m)(Yr)) nr = fr[Yr];
+               else if ((0, Rf.n)(Yr)) nr = hr[Yr];
```

#### 834. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7766` → after: `L7766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7766) · [Before (L7766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7766)

```diff
-                 case "ii":
+                 case "Zf":
```

#### 835. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7769-L7770` → after: `L7769-L7770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7769-L7770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7769-L7770) · [Before (L7769-L7770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7769-L7770)

```diff
-                 case "ei":
-                   WR = (0, si.z)((0, Rf.g)().n);
+                 case "Ef":
+                   nr = (0, sf.B)((0, uf.g)().n);
```

#### 836. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7772` → after: `L7772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7772) · [Before (L7772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7772)

```diff
-                 case "ai":
+                 case "pf":
```

#### 837. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7775` → after: `L7775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7775) · [Before (L7775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7775)

```diff
-                 case "Li":
+                 case "mf":
```

#### 838. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7778` → after: `L7778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7778) · [Before (L7778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7778)

```diff
-                 case "ni":
+                 case "Nf":
```

#### 839. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7781` → after: `L7781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7781) · [Before (L7781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7781)

```diff
-                 case "Ui":
+                 case "Uf":
```

#### 840. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7784` → after: `L7784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7784) · [Before (L7784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7784)

```diff
-                 case "Wi":
+                 case "tf":
```

#### 841. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7787` → after: `L7787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7787) · [Before (L7787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7787)

```diff
-                 case "Ai":
+                 case "hf":
```

#### 842. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7790` → after: `L7790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7790) · [Before (L7790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7790)

```diff
-                 case "Ci":
+                 case "zf":
```

#### 843. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7793` → after: `L7793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7793) · [Before (L7793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7793)

```diff
-                 case "Xi":
+                 case "Yf":
```

#### 844. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7796` → after: `L7796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7796) · [Before (L7796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7796)

```diff
-                 case "Mi":
+                 case "nf":
```

#### 845. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7799` → after: `L7799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7799) · [Before (L7799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7799)

```diff
-                 case "Bi":
+                 case "ef":
```

#### 846. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7802` → after: `L7802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7802) · [Before (L7802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7802)

```diff
-                 case "li":
+                 case "Kf":
```

#### 847. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7805` → after: `L7805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7805) · [Before (L7805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7805)

```diff
-                 case "Di":
+                 case "Lf":
```

#### 848. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7808` → after: `L7808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7808) · [Before (L7808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7808)

```diff
-                 case "Hi":
+                 case "lf":
```

#### 849. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7811` → after: `L7811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7811) · [Before (L7811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7811)

```diff
-                 case "gi":
+                 case "yf":
```

#### 850. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7814` → after: `L7814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7814) · [Before (L7814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7814)

```diff
-                 case "bi":
+                 case "Bf":
```

#### 851. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7817` → after: `L7817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7817) · [Before (L7817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7817)

```diff
-                 case "Oi":
+                 case "Tf":
```

#### 852. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7820` → after: `L7820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7820) · [Before (L7820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7820)

```diff
-                 case "xi":
+                 case "vf":
```

#### 853. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7823` → after: `L7823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7823) · [Before (L7823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7823)

```diff
-                 case "Ni":
+                 case "Of":
```

#### 854. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7826` → after: `L7826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7826) · [Before (L7826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7826)

```diff
-                 case "oi":
+                 case "Xf":
```

#### 855. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7829` → after: `L7829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7829) · [Before (L7829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7829)

```diff
-                 case "ci":
+                 case "Pf":
```

#### 856. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7832` → after: `L7832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7832) · [Before (L7832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7832)

```diff
-                 case "Pi":
+                 case "Hf":
```

#### 857. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7835` → after: `L7835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7835) · [Before (L7835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7835)

```diff
-                 case "Ii":
+                 case "qf":
```

#### 858. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7838-L7839` → after: `L7838-L7839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7838-L7839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7838-L7839) · [Before (L7838-L7839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7838-L7839)

```diff
-                 case "si":
-                   WR = (0, gi.k)(ZR);
+                 case "Jf":
+                   nr = (0, vf.i)(jr);
```

#### 859. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7841` → after: `L7841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7841) · [Before (L7841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7841)

```diff
-                 case "ri":
+                 case "ff":
```

#### 860. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7856` → after: `L7845-L7847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7845-L7847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7845-L7847) · [Before (L7856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7856)

```diff
-                 case "Jf":
+                 case "gf":
+                 case "Cf":
+                 case "Mf":
```

#### 861. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7858` → after: `L7849-L7858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7849-L7858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7849-L7858) · [Before (L7858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7858)

```diff
-                 case "yf":
+                 case "kf":
+                 case "Af":
+                 case "Vf":
+                 case "wf":
+                 case "Ff":
+                 case "bf":
+                 case "Df":
+                 case "df":
+                 case "sf":
+                 case "uf":
```

#### 862. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7861` → after: `L7861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7861) · [Before (L7861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7861)

```diff
-                 case "Uf":
+                 case "NE":
```

#### 863. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7864` → after: `L7864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7864) · [Before (L7864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7864)

```diff
-                 case "Wf":
+                 case "UE":
```

#### 864. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7867-L7868` → after: `L7867-L7868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7867-L7868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7867-L7868) · [Before (L7867-L7868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7867-L7868)

```diff
-                 case "Af":
-                   WR = ji.d[RR.backend];
+                 case "tE":
+                   nr = Vf.c[rr.backend];
```

#### 865. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7870-L7871` → after: `L7870-L7871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7870-L7871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7870-L7871) · [Before (L7870-L7871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7870-L7871)

```diff
-                 case "Cf":
-                   WR = (0, Ii.c)();
+                 case "hE":
+                   nr = (0, Mf.b)();
```

#### 866. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7873` → after: `L7873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7873) · [Before (L7873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7873)

```diff
-                 case "Xf":
+                 case "zE":
```

#### 867. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7876` → after: `L7876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7876) · [Before (L7876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7876)

```diff
-                 case "Mf":
+                 case "YE":
```

#### 868. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7879-L7880` → after: `L7879-L7880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7879-L7880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7879-L7880) · [Before (L7879-L7880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7879-L7880)

```diff
-                 case "Bf":
-                   WR = null !== (fR = yR.d.get("gameEntrySource")) && void 0 !== fR ? fR : Oi.e;
+                 case "nE":
+                   nr = null !== (Er = Zr.c.get("gameEntrySource")) && void 0 !== Er ? Er : lf.e;
```

#### 869. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7882-L7883` → after: `L7882-L7883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7882-L7883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7882-L7883) · [Before (L7882-L7883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7882-L7883)

```diff
-                 case "lf":
-                   WR = null !== (VR = JR.frameLimiter) && void 0 !== VR ? VR : Oi.e;
+                 case "eE":
+                   nr = null !== (pr = Sr.frameLimiter) && void 0 !== pr ? pr : lf.e;
```

#### 870. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7885-L7886` → after: `L7885-L7886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7885-L7886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7885-L7886) · [Before (L7885-L7886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7885-L7886)

```diff
-                 case "pf":
-                   WR = (0, Di.g)();
+                 case "KE":
+                   nr = (0, Hf.j)();
```

#### 871. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7888-L7889` → after: `L7888-L7889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7888-L7889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7888-L7889) · [Before (L7888-L7889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7888-L7889)

```diff
-                 case "gf":
-                   WR = null !== (KR = (0, Hi.d)()) && void 0 !== KR ? KR : Oi.e;
+                 case "yE":
+                   nr = null !== (xr = (0, qf.b)()) && void 0 !== xr ? xr : lf.e;
```

#### 872. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7891-L7892` → after: `L7891-L7892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7891-L7892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7891-L7892) · [Before (L7891-L7892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7891-L7892)

```diff
-                 case "bf":
-                   WR = (0, Di.b)(aR.width, aR.height);
+                 case "TE":
+                   nr = (0, Hf.d)(tr.width, tr.height);
```

#### 873. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7894-L7895` → after: `L7894-L7895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7894-L7895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7894-L7895) · [Before (L7894-L7895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7894-L7895)

```diff
-                 case "vf":
-                   WR = (0, bi.f)(-(new Date).getTimezoneOffset());
+                 case "vE":
+                   nr = (0, Of.j)(-(new Date).getTimezoneOffset());
```

#### 874. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7897-L7898` → after: `L7897-L7898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7897-L7898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7897-L7898) · [Before (L7897-L7898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7897-L7898)

```diff
-                 case "mf":
-                   WR = null !== (wR = RR.fallbackReason) && void 0 !== wR ? wR : Oi.e;
+                 case "qE":
+                   nr = null !== (mr = rr.fallbackReason) && void 0 !== mr ? mr : lf.e;
```

#### 875. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7900` → after: `L7900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7900) · [Before (L7900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7900)

```diff
-                 case "jf":
+                 case "CE":
```

#### 876. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7903` → after: `L7903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7903) · [Before (L7903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7903)

```diff
-                 case "df":
+                 case "ME":
```

#### 877. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7906` → after: `L7906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7906) · [Before (L7906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7906)

```diff
-                 case "Nf":
+                 case "LE":
```

#### 878. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7909-L7910` → after: `L7909-L7910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7909-L7910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7909-L7910) · [Before (L7909-L7910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7909-L7910)

```diff
-                 case "Df":
-                   WR = (0, zi.f)().replayState;
+                 case "lE":
+                   nr = (0, kf.h)().replayState;
```

#### 879. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7912-L7913` → after: `L7912-L7913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7912-L7913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7912-L7913) · [Before (L7912-L7913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7912-L7913)

```diff
-                 case "Hf":
-                   WR = (0, zi.f)().replaySelection;
+                 case "XE":
+                   nr = (0, kf.h)().replaySelection;
```

#### 880. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7915` → after: `L7915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7915) · [Before (L7915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7915)

```diff
-                 case "Pf":
+                 case "PE":
```

#### 881. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7918` → after: `L7918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7918) · [Before (L7918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7918)

```diff
-                 case "Ef":
+                 case "GE":
```

#### 882. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7921` → after: `L7921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7921) · [Before (L7921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7921)

```diff
-                 case "Yf": {
+                 case "kE": {
```

#### 883. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7926-L7927` → after: `L7926-L7927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7926-L7927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7926-L7927) · [Before (L7926-L7927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7926-L7927)

```diff
-                 case "kf":
-                   WR = Si.A;
+                 case "AE":
+                   nr = Af.z;
```

#### 884. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7929-L7930` → after: `L7929-L7930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7929-L7930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7929-L7930) · [Before (L7929-L7930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7929-L7930)

```diff
-                 case "JV":
-                   WR = (0, ci.o)();
+                 case "bE":
+                   nr = (0, gf.q)();
```

#### 885. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7932-L7933` → after: `L7932-L7933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7932-L7933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7932-L7933) · [Before (L7932-L7933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7932-L7933)

```diff
-                 case "Of": {
-                   const JR = RR.sa();
+                 case "OE": {
+                   const Sr = rr.ct();
```

#### 886. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7937-L7938` → after: `L7937-L7938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7937-L7938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7937-L7938) · [Before (L7937-L7938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7937-L7938)

```diff
-                 case "zf":
-                 case "Sf":
+                 case "RE":
+                 case "gE":
```

#### 887. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7942` → after: `L7942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7942) · [Before (L7942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7942)

```diff
-                   throw new Error(`Unhandled field name: ${UR}`)
+                   throw new Error(`Unhandled field name: ${Yr}`)
```

#### 888. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7944` → after: `L7944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7944) · [Before (L7944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7944)

```diff
-               if (void 0 === WR) throw new Error(`Metric ${UR} has no value`);
+               if (void 0 === nr) throw new Error(`Metric ${Yr} has no value`);
```

#### 889. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7956-L7960` → after: `L7956-L7960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7956-L7960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7956-L7960) · [Before (L7956-L7960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7956-L7960)

```diff
-             return (0, tG.b)(), RR(eR.l.Send, JR, GR)
-           }(this.shell.writeCmd, wR.pd, function(RR) {
-             const JR = (0, IR.i)((0, qG.g)(RR)),
-               GR = new Uint8Array(eR.Nd.BYTES + JR.length);
-             return new DataView(GR.buffer).setUint16(0, qG.d.AnalyticsUpdate, !0), GR.set(JR, eR.Nd.BYTES), GR
+             return (0, WQ.b)(), rr(Ur.k.Send, Sr, Qr)
+           }(this.shell.writeCmd, mr.Dd, function(rr) {
+             const Sr = (0, kr.e)((0, IQ.e)(rr)),
+               Qr = new Uint8Array(Ur.Md.BYTES + Sr.length);
+             return new DataView(Qr.buffer).setUint16(0, IQ.b.AnalyticsUpdate, !0), Qr.set(Sr, Ur.Md.BYTES), Qr
```

#### 890. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7962` → after: `L7962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7962) · [Before (L7962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7962)

```diff
-         this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, gi.h), (0, ci.u)(aR, "wasm", KR)
+         this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, vf.h), (0, gf.s)(tr, "wasm", xr)
```

#### 891. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7965` → after: `L7965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7965) · [Before (L7965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7965)

```diff
-     var qf = GR(40957);
+     var jE = Qr(41299);
```

#### 892. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7969-L7971` → after: `L7969-L7971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7969-L7971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7969-L7971) · [Before (L7969-L7971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7969-L7971)

```diff
-       return (0, qf.e)(((RR, GR, yR) => JR.Vq(RR, GR, yR)), ((JR, GR, tR) => {
-         const uR = `${JR},${GR},${tR}`;
-         return yR.has(uR) || yR.set(uR, (0, kJ.e)(RR, JR, GR, tR)), yR.get(uR)
+       return (0, jE.d)(((rr, Qr, Zr) => Sr.aI(rr, Qr, Zr)), ((Sr, Qr, Wr) => {
+         const ar = `${Sr},${Qr},${Wr}`;
+         return Zr.has(ar) || Zr.set(ar, (0, bS.c)(rr, Sr, Qr, Wr)), Zr.get(ar)
```

#### 893. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7974-L7975` → after: `L7974-L7975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7974-L7975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7974-L7975) · [Before (L7974-L7975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7974-L7975)

```diff
-     var Vf = GR(40959),
-       Kf = GR(42423);
+     var fE = Qr(41303),
+       EE = Qr(42751);
```

#### 894. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7978-L7979` → after: `L7978-L7979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7978-L7979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7978-L7979) · [Before (L7978-L7979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7978-L7979)

```diff
-       const JR = null !== RR && 0 !== (eR.s.playerFlags(RR.api.apiView, 0) & eR.xd.CursorAim);
-       JR !== (0, Kf.r)() && (0, Kf.O)(JR, null !== RR)
+       const Sr = null !== rr && 0 !== (Ur.p.playerFlags(rr.api.apiView, 0) & Ur.ud.CursorAim);
+       Sr !== (0, EE.m)() && (0, EE.G)(Sr, null !== rr)
```

#### 895. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7983` → after: `L7983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7983) · [Before (L7983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7983)

```diff
-       return (0, xy.e)(Ny.D, RR)
+       return (0, HZ.b)(qZ.D, rr)
```

#### 896. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7985-L7986` → after: `L7985-L7986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7985-L7986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7985-L7986) · [Before (L7985-L7986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7985-L7986)

```diff
-     var ef = GR(42568);
-     const af = new uR.e((RR => GR(54591)(`./${RR}/${RR}Client`)));
+     var mE = Qr(42895);
+     const NE = new ar.f((rr => Qr(55099)(`./${rr}/${rr}Client`)));
```

#### 897. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7990` → after: `L7990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7990) · [Before (L7990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7990)

```diff
-       Lf ??= GR.e(33).then((() => GR(40419))).then((RR => {
+       UE ??= Qr.e(33).then((() => Qr(40714))).then((rr => {
```

#### 898. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8023-L8024` → after: `L8023-L8024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8023-L8024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8023-L8024) · [Before (L8023-L8024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8023-L8024)

```diff
-         return RR.crash(Ht.w, wR), null
-       }(0, iR.f)(Dt(GR, uR));
+         return rr.crash(RW.G, mr), null
+       }(0, fr.e)(qW(Qr, ar));
```

#### 899. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8036` → after: `L8036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8036) · [Before (L8036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8036)

```diff
-       (0, ny.v)();
+       (0, zZ.E)();
```

#### 900. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8069-L8070` → after: `L8069-L8070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8069-L8070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8069-L8070) · [Before (L8069-L8070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8069-L8070)

```diff
-           Xf(tR.l), Xf(Ut), Xf((() => {
-             yR.d.set({
+           eE(Wr.o), eE(zW), eE((() => {
+             Zr.c.set({
```

#### 901. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8083` → after: `L8083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8083) · [Before (L8083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8083)

```diff
-         screenBandY: qR.k,
+         screenBandY: Ir.h,
```

#### 902. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8093-L8095` → after: `L8093-L8095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8093-L8095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8093-L8095) · [Before (L8093-L8095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8093-L8095)

```diff
-           (0, ZR.q)("userContextUpdated", JR)
-         }(KR), Af || (Af = !0, (0, ZR.q)("appManagerUpdated|openInGameMenuName", (RR => {
-           !RR && (0, fR.n)().includes(fR.d) && (0, fR.q)(fR.d)
+           (0, jr.j)("userContextUpdated", Sr)
+         }(xr), YE || (YE = !0, (0, jr.j)("appManagerUpdated|openInGameMenuName", (rr => {
+           !rr && (0, Er.p)().includes(Er.e) && (0, Er.s)(Er.e)
```

#### 903. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8108` → after: `L8108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8108) · [Before (L8108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8108)

```diff
-   42430: (RR, JR, GR) => {
+   42753: (rr, Sr, Qr) => {
```

#### 904. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8112-L8113` → after: `L8112-L8113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8112-L8113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8112-L8113) · [Before (L8112-L8113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8112-L8113)

```diff
-       j: () => WR,
-       m: () => CR,
+       k: () => nr,
+       n: () => Kr,
```

#### 905. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8117-L8125` → after: `L8117-L8125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8117-L8125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8117-L8125) · [Before (L8117-L8125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8117-L8125)

```diff
-     var yR = GR(177),
-       tR = GR(25),
-       uR = GR(32),
-       ZR = GR(4044),
-       qR = GR(1397),
-       iR = GR(35072),
-       fR = GR(310),
-       VR = GR(103),
-       KR = GR(173);
+     var Zr = Qr(181),
+       Wr = Qr(26),
+       ar = Qr(34),
+       jr = Qr(3995),
+       Ir = Qr(1364),
+       fr = Qr(35386),
+       Er = Qr(319),
+       pr = Qr(109),
+       xr = Qr(174);
```

#### 906. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8129` → after: `L8129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8129) · [Before (L8129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8129)

```diff
-       const JR = (0, ZR.E)(),
+       const Sr = (0, jr.J)(),
```

#### 907. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8133-L8134` → after: `L8133-L8134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8133-L8134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8133-L8134) · [Before (L8133-L8134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8133-L8134)

```diff
-             n: (0, ZR.v)(RR.pixelScale, JR),
-             pixelated: (0, ZR.s)(RR.pixelSmoothing)
+             n: (0, jr.y)(rr.pixelScale, Sr),
+             pixelated: (0, jr.v)(rr.pixelSmoothing)
```

#### 908. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8136-L8137` → after: `L8136-L8137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8136-L8137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8136-L8137) · [Before (L8136-L8137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8136-L8137)

```diff
-         }(tR.d.get("clientEscMenuOptions"), JR);
-       return GR.sampleCount > 1 && (0, iR.b)() && (GR.sampleCount = 1), GR.n = null !== (RR = (0, iR.k)()) && void 0 !== RR ? RR : GR.n, yR.i.includes((0, VR.getSoftwareRenderer)()) && (GR.sampleCount = 1, GR.n = Math.max(GR.n, (0, ZR.v)(KR.u.pixelScale, JR))), GR
+         }(Wr.c.get("clientEscMenuOptions"), Sr);
+       return Qr.sampleCount > 1 && (0, fr.c)() && (Qr.sampleCount = 1), Qr.n = null !== (rr = (0, fr.n)()) && void 0 !== rr ? rr : Qr.n, Zr.i.includes((0, pr.getSoftwareRenderer)()) && (Qr.sampleCount = 1, Qr.n = Math.max(Qr.n, (0, jr.y)(xr.l.pixelScale, Sr))), Qr
```

#### 909. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8157` → after: `L8157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8157) · [Before (L8157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8157)

```diff
-       const JR = (0, ZR.l)(),
+       const Sr = (0, jr.m)(),
```

#### 910. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8164` → after: `L8164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8164) · [Before (L8164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8164)

```diff
-       const uR = (0, ZR.l)(),
+       const ar = (0, jr.m)(),
```

#### 911. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8168` → after: `L8168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8168) · [Before (L8168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8168)

```diff
-       return (0, ZR.e)(RR, VR), RR.style.left = `${null!==(JR=null===(GR=LR)||void 0===GR?void 0:GR.rect.left)&&void 0!==JR?JR:0}px`, RR.style.top = `${null!==(yR=null===(tR=LR)||void 0===tR?void 0:tR.rect.top)&&void 0!==yR?yR:0}px`, (0, qR.T)(RR.style, LR), VR
+       return (0, jr.g)(rr, pr), rr.style.left = `${null!==(Sr=null===(Qr=hr)||void 0===Qr?void 0:Qr.rect.left)&&void 0!==Sr?Sr:0}px`, rr.style.top = `${null!==(Zr=null===(Wr=hr)||void 0===Wr?void 0:Wr.rect.top)&&void 0!==Zr?Zr:0}px`, (0, Ir.cb)(rr.style, hr), pr
```

#### 912. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8172` → after: `L8172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8172) · [Before (L8172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8172)

```diff
-       LR = RR, UR(), (0, qR.M)(eR.style, RR, ""), nR()
+       hr = rr, Yr(), (0, Ir.X)(Ur.style, rr, ""), zr()
```

#### 913. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8176` → after: `L8176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8176) · [Before (L8176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8176)

```diff
-       RR.style.imageRendering = (0, ZR.F)(JR.pixelated)
+       rr.style.imageRendering = (0, jr.K)(Sr.pixelated)
```

#### 914. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8180` → after: `L8180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8180) · [Before (L8180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8180)

```diff
-       const GR = (0, uR.q)("appManagerUpdated|clientEscMenuOptions", (() => {
+       const Qr = (0, ar.j)("appManagerUpdated|clientEscMenuOptions", (() => {
```

#### 915. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8183-L8184` → after: `L8183-L8184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8183-L8184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8183-L8184) · [Before (L8183-L8184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8183-L8184)

```diff
-         yR = (0, iR.v)(JR),
-         tR = (0, fR.l)(JR);
+         Zr = (0, fr.A)(Sr),
+         Wr = (0, Er.q)(Sr);
```

#### 916. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8190` → after: `L8190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8190) · [Before (L8190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8190)

```diff
-   42488: (RR, JR, GR) => {
+   42816: (rr, Sr, Qr) => {
```

#### 917. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8192-L8193` → after: `L8192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8192) · [Before (L8192-L8193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8192-L8193)

```diff
-       d: () => qR,
-       f: () => aR,
+       e: () => Ir,
```

#### 918. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8195-L8196` → after: `L8194-L8196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8194-L8196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8194-L8196) · [Before (L8195-L8196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8195-L8196)

```diff
-       h: () => AR,
-       l: () => WR,
+       i: () => fr,
+       j: () => er,
+       k: () => nr,
```

#### 919. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8199` → after: `L8199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8199) · [Before (L8199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8199)

```diff
-     var yR = GR(2457);
+     var Zr = Qr(2398);
```

#### 920. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8205` → after: `L8205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8205) · [Before (L8205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8205)

```diff
-         super(`${"fetch"===RR?"fetching":"decoding"} ${JR} failed`, GR), this.stage = RR, this.source = JR, this.name = "ShellImageError"
+         super(`${"fetch"===rr?"fetching":"decoding"} ${Sr} failed`, Qr), this.stage = rr, this.source = Sr, this.name = "ShellImageError"
```

#### 921. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8209` → after: `L8209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8209) · [Before (L8209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8209)

```diff
-       let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yR.B,
+       let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Zr.K,
```

#### 922. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8211` → after: `L8211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8211) · [Before (L8211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8211)

```diff
-       return VR(await fR(RR, JR), "string" === typeof RR ? RR : null, GR)
+       return pr(await Er(rr, Sr), "string" === typeof rr ? rr : null, Qr)
```

#### 923. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8234` → after: `L8234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8234) · [Before (L8234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8234)

```diff
-         throw new qR("decode", null !== JR && void 0 !== JR ? JR : `${RR.byteLength} bytes`, {
+         throw new Ir("decode", null !== Sr && void 0 !== Sr ? Sr : `${rr.byteLength} bytes`, {
```

#### 924. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8247` → after: `L8247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8247) · [Before (L8247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8247)

```diff
-         null === (JR = RR.EtR) || void 0 === JR || JR.call(RR, UR);
+         null === (Sr = rr.BWr) || void 0 === Sr || Sr.call(rr, Yr);
```

#### 925. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8254` → after: `L8254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8254) · [Before (L8254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8254)

```diff
-       eR.has(JR) && void 0 !== RR.dtR ? RR.dtR(JR, GR) : RR.StR(JR, GR)
+       Ur.has(Sr) && void 0 !== rr.yWr ? rr.yWr(Sr, Qr) : rr.eWr(Sr, Qr)
```

#### 926. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8266` → after: `L8266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8266) · [Before (L8266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8266)

```diff
-         JR.decoding = !1, JR.failures++, 1 === JR.failures && console.warn(`shellImages: decoding image ${RR} again failed; trying again until it decodes`, GR), setTimeout((() => {
+         Sr.decoding = !1, Sr.failures++, 1 === Sr.failures && console.warn(`shellImages: decoding image ${rr} again failed; trying again until it decodes`, Qr), setTimeout((() => {
```

#### 927. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8277` → after: `L8277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8277) · [Before (L8277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8277)

```diff
-       let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yR.B,
+       let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Zr.K,
```

#### 928. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8280` → after: `L8280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8280) · [Before (L8280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8280)

```diff
-       const ZR = "string" === typeof RR ? RR : null,
+       const jr = "string" === typeof rr ? rr : null,
```

#### 929. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8306` → after: `L8306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8306) · [Before (L8306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8306)

```diff
-       null === (JR = KR) || void 0 === JR || JR.jtR(RR)
+       null === (Sr = xr) || void 0 === Sr || Sr.KWr(rr)
```

#### 930. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8309` → after: `L8309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8309) · [Before (L8309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8309)

```diff
-   37183: (RR, JR, GR) => {
+   37529: (rr, Sr, Qr) => {
```

#### 931. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8312-L8314` → after: `L8312-L8314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8312-L8314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8312-L8314) · [Before (L8312-L8314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8312-L8314)

```diff
-       h: () => fR,
-       i: () => ZR,
-       k: () => KR
+       g: () => Er,
+       k: () => jr,
+       l: () => xr
```

#### 932. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8316-L8317` → after: `L8316-L8317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8316-L8317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8316-L8317) · [Before (L8316-L8317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8316-L8317)

```diff
-     var yR = GR(37169),
-       tR = GR(14);
+     var Zr = Qr(37514),
+       Wr = Qr(13);
```

#### 933. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8329-L8333` → after: `L8329-L8333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8329-L8333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8329-L8333) · [Before (L8329-L8333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8329-L8333)

```diff
-         qR = (RR instanceof Error && null !== (tR = RR.stack) && void 0 !== tR ? tR : "").split("\n").filter((RR => uR.test(RR))).slice(0, 8).map((RR => RR.trim())),
-         iR = null === JR ? "wasm memory unknown" : `wasm memory ${Math.round(JR/2**20)} MB`,
-         fR = null === GR.panic ? "" : `, panic: ${(0,yR.e)(GR.panic)}`,
-         VR = `${ZR}: ${RR instanceof Error?RR.message:String(RR)}`;
-       return `${(0,yR.k)(GR.kind,GR.refusedBytes)} ${VR} (${iR})${fR}${qR.length>0?` | ${qR.join(" < ")}`:""}`
+         Ir = (rr instanceof Error && null !== (Wr = rr.stack) && void 0 !== Wr ? Wr : "").split("\n").filter((rr => ar.test(rr))).slice(0, 8).map((rr => rr.trim())),
+         fr = null === Sr ? "wasm memory unknown" : `wasm memory ${Math.round(Sr/2**20)} MB`,
+         Er = null === Qr.panic ? "" : `, panic: ${(0,Zr.i)(Qr.panic)}`,
+         pr = `${jr}: ${rr instanceof Error?rr.message:String(rr)}`;
+       return `${(0,Zr.l)(Qr.kind,Qr.refusedBytes)} ${pr} (${fr})${Er}${Ir.length>0?` | ${Ir.join(" < ")}`:""}`
```

#### 934. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8345` → after: `L8345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8345) · [Before (L8345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8345)

```diff
-         arrayBufferDetached: (0, tR.R)(null === (JR = (0, tR.I)(GR, "detached")) || void 0 === JR ? void 0 : JR.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
+         arrayBufferDetached: (0, Wr.V)(null === (Sr = (0, Wr.O)(Qr, "detached")) || void 0 === Sr ? void 0 : Sr.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
```

#### 935. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8358` → after: `L8358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8358) · [Before (L8358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8358)

```diff
-         return null !== (GR = null === (yR = JSON.stringify(RR)) || void 0 === yR ? void 0 : yR.slice(0, VR)) && void 0 !== GR ? GR : JR
+         return null !== (Qr = null === (Zr = JSON.stringify(rr)) || void 0 === Zr ? void 0 : Zr.slice(0, pr)) && void 0 !== Qr ? Qr : Sr
```

#### 936. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8364` → after: `L8364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8364) · [Before (L8364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8364)

```diff
-   54591: (RR, JR, GR) => {
+   55099: (rr, Sr, Qr) => {
```

#### 937. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8366-L8389` → after: `L8366-L8389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8366-L8389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8366-L8389) · [Before (L8366-L8389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8366-L8389)

```diff
-       "./bedwars/bedwarsClient": [40540, 9],
-       "./bridgeBattle/bridgeBattleClient": [40542, 10],
-       "./buildAFactory2/buildAFactory2Client": [39650, 89, 86, 87, 257, 274, 11],
-       "./classic/classicClient": [40546, 12],
-       "./classic/smp2/smp2Client": [40555, 13],
-       "./clutch/clutchClient": [40567, 14],
-       "./containmentBreach/containmentBreachClient": [40575, 15],
-       "./cooking/cookingClient": [40701, 16],
-       "./defusal/defusalClient": [40705, 17],
-       "./frontline/frontlineClient": [40714, 89, 86, 87, 18],
-       "./goalRush/goalRushClient": [40737, 19],
-       "./greenville/greenvilleClient": [40740, 181, 225, 20],
-       "./hideseek/hideseekClient": [40770, 21],
-       "./luckyBedwars/luckyBedwarsClient": [40772, 22],
-       "./murderMystery/murderMysteryClient": [40774, 23],
-       "./ninetyNineNights/ninetyNineNightsClient": [40777, 24],
- ... (8 more removed lines; see GitHub link above)
+       "./bedwars/bedwarsClient": [40850, 9],
+       "./bridgeBattle/bridgeBattleClient": [40858, 10],
+       "./buildAFactory2/buildAFactory2Client": [39989, 89, 86, 87, 258, 275, 11],
+       "./classic/classicClient": [40862, 12],
+       "./classic/smp2/smp2Client": [40866, 13],
+       "./clutch/clutchClient": [40879, 14],
+       "./containmentBreach/containmentBreachClient": [40888, 15],
+       "./cooking/cookingClient": [41034, 16],
+       "./defusal/defusalClient": [41036, 17],
+       "./frontline/frontlineClient": [41040, 89, 86, 87, 18],
+       "./goalRush/goalRushClient": [41071, 19],
+       "./greenville/greenvilleClient": [41078, 181, 226, 20],
+       "./hideseek/hideseekClient": [41117, 21],
+       "./luckyBedwars/luckyBedwarsClient": [41123, 22],
+       "./murderMystery/murderMysteryClient": [41126, 23],
+       "./ninetyNineNights/ninetyNineNightsClient": [41129, 24],
+ ... (8 more added lines; see GitHub link above)
```

#### 938. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8401` → after: `L8401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8401) · [Before (L8401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8401)

```diff
-     tR.keys = () => Object.keys(yR), tR.id = 54591, RR.exports = tR
+     Wr.keys = () => Object.keys(Zr), Wr.id = 55099, rr.exports = Wr
```

#### 939. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8403` → after: `L8403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8403) · [Before (L8403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8403)

```diff
-   37169: (RR, JR, GR) => {
+   37514: (rr, Sr, Qr) => {
```

#### 940. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8405-L8406` → after: `L8405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8405) · [Before (L8405-L8406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8405-L8406)

```diff
-       b: () => yR,
-       c: () => uR,
+       d: () => Zr,
```

#### 941. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8408-L8409` → after: `L8407-L8409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8407-L8409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8407-L8409) · [Before (L8408-L8409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8408-L8409)

```diff
-       h: () => ZR,
-       k: () => tR
+       i: () => fr,
+       j: () => jr,
+       l: () => Wr
```

#### 942. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8414` → after: `L8414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8414) · [Before (L8414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8414)

```diff
-       return uR(RR, JR) ? `trap=alloc_failed ${JR} bytes` : `trap=${RR}`
+       return ar(rr, Sr) ? `trap=alloc_failed ${Sr} bytes` : `trap=${rr}`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (28 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e)

#### 1. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L4)

```diff
-   42154: (RR, JR, GR) => {
+   42485: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L6-L7)

```diff
-       e: () => tR,
-       i: () => VR
+       d: () => Wr,
+       e: () => pr
```

#### 3. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L14)

```diff
-       if (JR.at !== RR.length) throw new Error(`msgpack: ${RR.length-JR.at} bytes after the value`);
+       if (Sr.at !== rr.length) throw new Error(`msgpack: ${rr.length-Sr.at} bytes after the value`);
```

#### 4. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L92` → after: `L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L92) · [Before (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L92)

```diff
-             throw new Error(`msgpack: unknown byte 0x${RR.toString(16)} at ${this.at-1}`)
+             throw new Error(`msgpack: unknown byte 0x${rr.toString(16)} at ${this.at-1}`)
```

#### 5. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L97` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L97) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L97)

```diff
-         if (JR + RR > this.bytes.length) throw new Error(`msgpack: ${RR} bytes past the end at ${JR}`);
+         if (Sr + rr > this.bytes.length) throw new Error(`msgpack: ${rr} bytes past the end at ${Sr}`);
```

#### 6. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L169` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L169) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L169)

```diff
-           throw new Error(`msgpack: ext type ${JR} of ${RR} bytes`)
+           throw new Error(`msgpack: ext type ${Sr} of ${rr} bytes`)
```

#### 7. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L210` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L210) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L210)

```diff
-               if (Object.getPrototypeOf(RR) !== Object.prototype && null !== Object.getPrototypeOf(RR)) throw new Error(`msgpack: can't encode a ${null!==(GR=null===(yR=RR.constructor)||void 0===yR?void 0:yR.name)&&void 0!==GR?GR:"object"}`);
+               if (Object.getPrototypeOf(rr) !== Object.prototype && null !== Object.getPrototypeOf(rr)) throw new Error(`msgpack: can't encode a ${null!==(Qr=null===(Zr=rr.constructor)||void 0===Zr?void 0:Zr.name)&&void 0!==Qr?Qr:"object"}`);
```

#### 8. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L255` → after: `L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L255) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L255)

```diff
-   54639: (RR, JR, GR) => {
+   55144: (rr, Sr, Qr) => {
```

#### 9. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L261-L268` → after: `L261-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L261-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L261-L268) · [Before (L261-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L261-L268)

```diff
-     var yR = GR(163),
-       tR = GR(1295),
-       uR = GR(37640),
-       ZR = GR(42154),
-       qR = GR(5676),
-       iR = GR(42329),
-       fR = GR(42451);
-     const VR = Uint8Array.of(13, ...(0, ZR.i)(yR.g));
+     var Zr = Qr(161),
+       Wr = Qr(1267),
+       ar = Qr(38018),
+       jr = Qr(42485),
+       Ir = Qr(5610),
+       fr = Qr(42654),
+       Er = Qr(42774);
+     const pr = Uint8Array.of(13, ...(0, jr.e)(Zr.f));
```

#### 10. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L290` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L290) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L290)

```diff
-       } = GR, ZR = () => (0, fR.j)(JR.endpoint, JR.roomName, JR.joinOptions, GR), {
+       } = Qr, jr = () => (0, Er.i)(Sr.endpoint, Sr.roomName, Sr.joinOptions, Qr), {
```

#### 11. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L292-L293` → after: `L292-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L292-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L292-L293) · [Before (L292-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L292-L293)

```diff
-       } = GR, iR = qR ? null !== (yR = await qR.take(uR)) && void 0 !== yR ? yR : await qR.reserveInstead(ZR, uR) : await ZR();
-       return (0, tR.r)(uR), LR(RR, JR.endpoint, iR, GR, !1)
+       } = Qr, fr = Ir ? null !== (Zr = await Ir.take(ar)) && void 0 !== Zr ? Zr : await Ir.reserveInstead(jr, ar) : await jr();
+       return (0, Wr.l)(ar), hr(rr, Sr.endpoint, fr, Qr, !1)
```

#### 12. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L297-L298` → after: `L297-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L297-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L297-L298) · [Before (L297-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L297-L298)

```diff
-       const ZR = await (0, fR.h)(JR, GR, yR, uR);
-       return (0, tR.r)(uR.signal), LR(RR, JR, ZR, uR, !0)
+       const jr = await (0, Er.e)(Sr, Qr, Zr, ar);
+       return (0, Wr.l)(ar.signal), hr(rr, Sr, jr, ar, !0)
```

#### 13. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L302` → after: `L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L302) · [Before (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L302)

```diff
-       const yR = (0, fR.k)(RR, JR);
+       const Zr = (0, Er.m)(rr, Sr);
```

#### 14. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L309` → after: `L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L309) · [Before (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L309)

```diff
-       return (null !== (yR = RR.setTimer) && void 0 !== yR ? yR : (RR, JR) => {
+       return (null !== (Zr = rr.setTimer) && void 0 !== Zr ? Zr : (rr, Sr) => {
```

#### 15. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L329` → after: `L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L329) · [Before (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L329)

```diff
-         WR = !0, null === (JR = LR) || void 0 === JR || JR.reject(new iR.b("the room socket closed before the resume", "closed", RR.code))
+         nr = !0, null === (Sr = hr) || void 0 === Sr || Sr.reject(new fr.e("the room socket closed before the resume", "closed", rr.code))
```

#### 16. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L334-L336` → after: `L334-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L334-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L334-L336) · [Before (L334-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L334-L336)

```diff
-           if (RR === (ZR ? qR.H.Resumed : qR.H.Activated)) UR = !0, null === (GR = LR) || void 0 === GR || GR.resolve();
-           else if (!ZR || RR !== qR.H.ResumeRefused && RR !== qR.H.Activated)
-             if (RR === qR.H.Error) {
+           if (rr === (jr ? Ir.G.Resumed : Ir.G.Activated)) Yr = !0, null === (Qr = hr) || void 0 === Qr || Qr.resolve();
+           else if (!jr || rr !== Ir.G.ResumeRefused && rr !== Ir.G.Activated)
+             if (rr === Ir.G.Error) {
```

#### 17. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L338` → after: `L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L338) · [Before (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L338)

```diff
-               null === (yR = LR) || void 0 === yR || yR.reject(new iR.b(`the room refused the join (code ${JR})`, "roomError", JR))
+               null === (Zr = hr) || void 0 === Zr || Zr.reject(new fr.e(`the room refused the join (code ${Sr})`, "roomError", Sr))
```

#### 18. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L341` → after: `L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L341) · [Before (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L341)

```diff
-               null === (tR = LR) || void 0 === tR || tR.reject(new iR.b("the room socket closed before the join", "closed", JR, null, wR))
+               null === (Wr = hr) || void 0 === Wr || Wr.reject(new fr.e("the room socket closed before the join", "closed", Sr, null, mr))
```

#### 19. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L345` → after: `L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L345) · [Before (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L345)

```diff
-             null === (uR = LR) || void 0 === uR || uR.reject(new iR.p("the core refused the resume: it held no game"))
+             null === (ar = hr) || void 0 === ar || ar.reject(new fr.s("the core refused the resume: it held no game"))
```

#### 20. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L352` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L352) · [Before (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L352)

```diff
-       if (null === MR) throw XR(), new iR.b("the core could not take the room socket", "attach");
+       if (null === Br) throw yr(), new fr.e("the core could not take the room socket", "attach");
```

#### 21. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L355` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L355) · [Before (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L355)

```diff
-       const lR = ZR ? null : new uR.d((() => {
+       const vr = jr ? null : new ar.b((() => {
```

#### 22. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L357` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L357) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L357)

```diff
-         null === (JR = RR.flushNet) || void 0 === JR || JR.call(RR), null === (GR = LR) || void 0 === GR || GR.reject(new uR.g(wR ? "socket" : "socket_unopened"))
+         null === (Sr = rr.flushNet) || void 0 === Sr || Sr.call(rr), null === (Qr = hr) || void 0 === Qr || Qr.reject(new ar.c(mr ? "socket" : "socket_unopened"))
```

#### 23. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L367-L368` → after: `L367-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L367-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L367-L368) · [Before (L367-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L367-L368)

```diff
-         if (pR = !0, XR(), ZR && (KR.removeEventListener("close", AR), !UR && !(null !== fR && void 0 !== fR && fR.aborted && (0, tR.g)(fR) instanceof iR.s))) return void(WR || RR.closeSocket(MR));
-         UR && RR.leaveRoom(MR) || RR.sendRaw(MR, iR.j) ? aR(yR, (() => {
+         if (Or = !0, yr(), jr && (xr.removeEventListener("close", er), !Yr && !(null !== Er && void 0 !== Er && Er.aborted && (0, Wr.f)(Er) instanceof fr.v))) return void(nr || rr.closeSocket(Br));
+         Yr && rr.leaveRoom(Br) || rr.sendRaw(Br, fr.o) ? tr(Zr, (() => {
```

#### 24. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L370` → after: `L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L370) · [Before (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L370)

```diff
-         }), iR.e) : RR.closeSocket(MR)
+         }), fr.g) : rr.closeSocket(Br)
```

#### 25. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L377` → after: `L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L377) · [Before (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L377)

```diff
-             GR((0, tR.g)(fR))
+             Qr((0, Wr.f)(Er))
```

#### 26. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L410` → after: `L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L410) · [Before (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L410)

```diff
-         const tR = eR(RR, await (0, fR.h)(RR, JR, GR, yR), yR);
+         const Wr = Ur(rr, await (0, Er.e)(rr, Sr, Qr, Zr), Zr);
```

#### 27. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L414` → after: `L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L414) · [Before (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L414)

```diff
-           }), iR.e);
+           }), fr.g);
```

#### 28. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L416` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L416) · [Before (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L416)

```diff
-             tR.send(iR.j)
+             Wr.send(fr.o)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (21 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933)

#### 1. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L4)

```diff
-   37520: (RR, JR, GR) => {
+   37908: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L9` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L9)

```diff
-       if (!JR.ok) throw new Error(`Fetching ${RR} failed: HTTP ${JR.status}`);
+       if (!Sr.ok) throw new Error(`Fetching ${rr} failed: HTTP ${Sr.status}`);
```

#### 3. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L14)

```diff
-       b: () => yR
+       e: () => Zr
```

#### 4. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L17)

```diff
-   42208: (RR, JR, GR) => {
+   42541: (rr, Sr, Qr) => {
```

#### 5. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L20)

```diff
-       probeWebgl2AheadOfJoin: () => VR._,
+       probeWebgl2AheadOfJoin: () => pr.I,
```

#### 6. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L24-L33` → after: `L24-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L24-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L24-L33) · [Before (L24-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L24-L33)

```diff
-     var yR = GR(2448),
-       tR = GR(37213),
-       uR = GR(42212),
-       ZR = GR(1406),
-       qR = GR(42230),
-       iR = (GR(42265), GR(37520)),
-       fR = GR(2372),
-       VR = GR(42281),
-       KR = GR(42379),
-       wR = GR(37362);
+     var Zr = Qr(2396),
+       Wr = Qr(37566),
+       ar = Qr(42550),
+       jr = Qr(1371),
+       Ir = Qr(42559),
+       fr = (Qr(42589), Qr(37908)),
+       Er = Qr(2318),
+       pr = Qr(42598),
+       xr = Qr(42715),
+       mr = Qr(37748);
```

#### 7. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L44)

```diff
-         const RR = await (0, VR.W)();
+         const rr = await (0, pr.H)();
```

#### 8. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L46-L47` → after: `L46-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L46-L47) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L46-L47)

```diff
-         if ((0, qR.o)(RR)) return (0, VR.bb)("none"), void AR("none");
-         (0, VR.bb)(RR.backend);
+         if ((0, Ir.p)(rr)) return (0, pr.L)("none"), void er("none");
+         (0, pr.L)(rr.backend);
```

#### 9. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L50-L51` → after: `L50-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L50-L51) · [Before (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L50-L51)

```diff
-         const GR = "unloaded" === (0, yR.s)();
-         if (GR && (0, VR.r)(), !await (0, KR.e)(JR)) return void console.warn(`${rR} the join's early wasm load failed: the boot loads the client itself`);
+         const Qr = "unloaded" === (0, Zr.y)();
+         if (Qr && (0, pr.j)(), !await (0, xr.e)(Sr)) return void console.warn(`${Nr} the join's early wasm load failed: the boot loads the client itself`);
```

#### 10. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L53` → after: `L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L53) · [Before (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L53)

```diff
-         const uR = (0, tR.o)(JR.name);
+         const ar = (0, Wr.l)(Sr.name);
```

#### 11. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L59)

```diff
-         }) : console.warn(`${rR} the join's wasm load left no record of how it compiled ${JR.name}`)
+         }) : console.warn(`${Nr} the join's wasm load left no record of how it compiled ${Sr.name}`)
```

#### 12. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L61` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L61) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L61)

```diff
-         console.warn(`${rR} the join's early wasm load did not start: the boot loads the client itself`, RR)
+         console.warn(`${Nr} the join's early wasm load did not start: the boot loads the client itself`, rr)
```

#### 13. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L78` → after: `L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L78) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L78)

```diff
-         const GR = null !== (JR = RR.joinStarted) && void 0 !== JR ? JR : () => !1;
+         const Qr = null !== (Sr = rr.joinStarted) && void 0 !== Sr ? Sr : () => !1;
```

#### 14. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L87-L88` → after: `L87-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L87-L88) · [Before (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L87-L88)

```diff
-         const JR = await (0, VR.j)();
-         null === JR || RR() || "unloaded" !== (0, yR.s)() || (UR = JR.name, await (0, tR.e)([JR, uR.d], "low"))
+         const Sr = await (0, pr.f)();
+         null === Sr || rr() || "unloaded" !== (0, Zr.y)() || (Yr = Sr.name, await (0, Wr.e)([Sr, ar.i], "low"))
```

#### 15. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L90` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L90) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L90)

```diff
-         console.warn(`${rR} the compile ahead of the join did not start: the join loads the client itself`, RR)
+         console.warn(`${Nr} the compile ahead of the join did not start: the join loads the client itself`, rr)
```

#### 16. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L105-L106` → after: `L105-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L105-L106) · [Before (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L105-L106)

```diff
-               const RR = await fetch((0, fR.h)("static/js/4udp6d.wasmJoinFiles.json"), {
-                 ...fR.d,
+               const rr = await fetch((0, Er.c)("static/js/fl4vv.wasmJoinFiles.json"), {
+                 ...Er.b,
```

#### 17. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L109-L110` → after: `L109-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L109-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L109-L110) · [Before (L109-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L109-L110)

```diff
-               if (RR.ok && /\bno-store\b/.test(null !== (GR = RR.headers.get("Cache-Control")) && void 0 !== GR ? GR : "")) return !1;
-               JR = await (0, fR.k)(RR)
+               if (rr.ok && /\bno-store\b/.test(null !== (Qr = rr.headers.get("Cache-Control")) && void 0 !== Qr ? Qr : "")) return !1;
+               Sr = await (0, Er.d)(rr)
```

#### 18. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L112` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L112) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L112)

```diff
-               return console.warn(`${rR} the join's chunk list did not load: the join downloads its chunks itself`, tR), !RR()
+               return console.warn(`${Nr} the join's chunk list did not load: the join downloads its chunks itself`, Wr), !rr()
```

#### 19. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L117-L119` → after: `L117-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L117-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L117-L119) · [Before (L117-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L117-L119)

```diff
-               const RR = (0, fR.h)(uR);
-               yR ? BR(RR) : (0, iR.b)(RR).catch((JR => {
-                 console.warn(`${rR} prefetching ${RR} failed`, JR)
+               const rr = (0, Er.c)(ar);
+               Zr ? Tr(rr) : (0, fr.e)(rr).catch((Sr => {
+                 console.warn(`${Nr} prefetching ${rr} failed`, Sr)
```

#### 20. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L124-L125` → after: `L124-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L124-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L124-L125) · [Before (L124-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L124-L125)

```diff
-         const GR = [(0, iR.b)((0, wR.f)())];
-         (0, wR.c)(JR) && GR.push((0, iR.b)((0, wR.j)()));
+         const Qr = [(0, fr.e)((0, mr.c)())];
+         (0, mr.b)(Sr) && Qr.push((0, fr.e)((0, mr.e)()));
```

#### 21. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L128` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L128) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L128)

```diff
-         console.warn(`${rR} the prefetch failed: the join downloads the client itself`, RR)
+         console.warn(`${Nr} the prefetch failed: the join downloads the client itself`, rr)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (148 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b)

#### 1. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L4)

```diff
-   40429: (RR, JR, GR) => {
+   40728: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L14)

```diff
-           hK: JR.hK,
+           sx: Sr.sx,
```

#### 3. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L32)

```diff
-       c: () => tR
+       e: () => Wr
```

#### 4. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L35)

```diff
-   40393: (RR, JR, GR) => {
+   40699: (rr, Sr, Qr) => {
```

#### 5. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L39-L40` → after: `L38-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L38-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L38-L40) · [Before (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L39-L40)

```diff
-       e: () => iR,
-       i: () => ZR
+       h: () => Er,
+       i: () => fr,
+       l: () => jr
```

#### 6. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L42` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L42) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L42)

```diff
-     var yR = GR(216);
+     var Zr = Qr(215);
```

#### 7. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L51` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L51) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L51)

```diff
-       return null !== (JR = (0, yR.b)(ZR, RR)) && void 0 !== JR ? JR : null
+       return null !== (Sr = (0, Zr.b)(jr, rr)) && void 0 !== Sr ? Sr : null
```

#### 8. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L56)

```diff
-       return null !== (JR = (0, yR.b)(qR, RR)) && void 0 !== JR ? JR : null
+       return null !== (Sr = (0, Zr.b)(Ir, rr)) && void 0 !== Sr ? Sr : null
```

#### 9. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L59)

```diff
-   39862: (RR, JR, GR) => {
+   40197: (rr, Sr, Qr) => {
```

#### 10. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L62` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L62) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L62)

```diff
-       f: () => uR
+       g: () => ar
```

#### 11. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L72` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L72) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L72)

```diff
-       return null !== (JR = yR.get(RR)) && void 0 !== JR ? JR : null
+       return null !== (Sr = Zr.get(rr)) && void 0 !== Sr ? Sr : null
```

#### 12. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L75` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L75) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L75)

```diff
-   42736: (RR, JR, GR) => {
+   43054: (rr, Sr, Qr) => {
```

#### 13. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L95` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L95) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L95)

```diff
-       e: () => yR
+       b: () => Zr
```

#### 14. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L98` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L98) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L98)

```diff
-   37238: (RR, JR, GR) => {
+   37596: (rr, Sr, Qr) => {
```

#### 15. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L100` → after: `L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L100) · [Before (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L100)

```diff
-       e: () => uR
+       d: () => ar
```

#### 16. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L106` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L106) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L106)

```diff
-       let [uR, ZR] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [RR, JR], qR = Math.min(Number.isFinite(GR) && GR > 0 ? GR : 1, tR);
+       let [ar, jr] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [rr, Sr], Ir = Math.min(Number.isFinite(Qr) && Qr > 0 ? Qr : 1, Wr);
```

#### 17. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L111` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L111) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L111)

```diff
-   35176: (RR, JR, GR) => {
+   35490: (rr, Sr, Qr) => {
```

#### 18. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L113-L114` → after: `L113-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L113-L114) · [Before (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L113-L114)

```diff
-       e: () => yR,
-       i: () => VR
+       d: () => Zr,
+       f: () => pr
```

#### 19. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L161` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L161) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L161)

```diff
-           const yR = JR.deltaY * (JR.deltaMode === WheelEvent.DOM_DELTA_LINE ? iR : JR.deltaMode === WheelEvent.DOM_DELTA_PAGE ? fR : 1),
+           const Zr = Sr.deltaY * (Sr.deltaMode === WheelEvent.DOM_DELTA_LINE ? fr : Sr.deltaMode === WheelEvent.DOM_DELTA_PAGE ? Er : 1),
```

#### 20. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L175` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L175) · [Before (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L175)

```diff
-   45007: (RR, JR, GR) => {
+   45305: (rr, Sr, Qr) => {
```

#### 21. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L182-L183` → after: `L182-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L182-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L182-L183) · [Before (L182-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L182-L183)

```diff
-     var yR = GR(2457),
-       tR = GR(688);
+     var Zr = Qr(2398),
+       Wr = Qr(692);
```

#### 22. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L189` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L189) · [Before (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L189)

```diff
-         client: String(tR.d)
+         client: String(Wr.e)
```

#### 23. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L193` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L193) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L193)

```diff
-         JR.wasm = null !== (GR = null === RR || void 0 === RR ? void 0 : RR.FK()) && void 0 !== GR ? GR : JR.wasm
+         Sr.wasm = null !== (Qr = null === rr || void 0 === rr ? void 0 : rr.bx()) && void 0 !== Qr ? Qr : Sr.wasm
```

#### 24. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L202` → after: `L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L202) · [Before (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L202)

```diff
-         } = await Promise.resolve().then((() => GR(3968)));
+         } = await Promise.resolve().then((() => Qr(3926)));
```

#### 25. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L210` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L210) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L210)

```diff
-       Promise.resolve().then((() => GR(42288))).then((GR => {
+       Promise.resolve().then((() => Qr(42607))).then((Qr => {
```

#### 26. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L216` → after: `L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L216) · [Before (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L216)

```diff
-         console.warn(`${uR} ${RR} didn't load, and the report couldn't be sent`, yR.error, JR)
+         console.warn(`${ar} ${rr} didn't load, and the report couldn't be sent`, Zr.error, Sr)
```

#### 27. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L256` → after: `L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L256) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L256)

```diff
-             const GR = RR.UtR(JR);
+             const Qr = rr.dZr(Sr);
```

#### 28. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L275` → after: `L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L275) · [Before (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L275)

```diff
-         fetch: async () => qR(await (0, yR.B)(rR(), {
+         fetch: async () => Ir(await (0, Zr.K)(Nr(), {
```

#### 29. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L288` → after: `L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L288) · [Before (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L288)

```diff
-       return GR(45013)
+       return Qr(45314)
```

#### 30. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L290-L315` → after: `L290-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L290-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L290-L315) · [Before (L290-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L290-L315)

```diff
-     var eR = GR(2448),
-       aR = GR(1282),
-       LR = GR(350),
-       nR = GR(342),
-       UR = GR(709),
-       WR = GR(5676),
-       AR = GR(42230),
-       CR = GR(42259),
-       XR = GR(42475),
-       MR = (GR(42265), GR(37232)),
-       BR = GR(42344),
-       lR = GR(42352),
-       pR = GR(42357),
-       gR = GR(42239),
-       bR = GR(42494),
-       vR = GR(42503),
- ... (10 more removed lines; see GitHub link above)
+     var Ur = Qr(2396),
+       tr = Qr(1262),
+       hr = Qr(351),
+       zr = Qr(345),
+       Yr = Qr(712),
+       nr = Qr(5610),
+       er = Qr(42559),
+       Kr = Qr(42585),
+       yr = Qr(42805),
+       Br = (Qr(42589), Qr(37587)),
+       Tr = Qr(42680),
+       vr = Qr(42684),
+       Or = Qr(42691),
+       Lr = Qr(42574),
+       lr = Qr(42820),
+       Xr = Qr(42827),
+ ... (10 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L330` → after: `L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L330) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L330)

```diff
-         GR = (0, AR.M)(RR),
+         Qr = (0, er.T)(rr),
```

#### 32. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L332` → after: `L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L332) · [Before (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L332)

```diff
-       return null !== GR && null !== yR && "function" === typeof JR.WtR && "function" === typeof JR.AtR && "function" === typeof JR.CtR && "function" === typeof JR.ZH ? JR : null
+       return null !== Qr && null !== Zr && "function" === typeof Sr.sZr && "function" === typeof Sr.uZr && "function" === typeof Sr.rWr && "function" === typeof Sr.uR ? Sr : null
```

#### 33. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L336` → after: `L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L336) · [Before (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L336)

```diff
-       return GR(45017)
+       return Qr(45323)
```

#### 34. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L341-L343` → after: `L341-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L341-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L341-L343) · [Before (L341-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L341-L343)

```diff
-       "lost" === RR && (0, OR.D)();
-       const qR = await (0, OR.W)();
-       if (null === qR || (0, AR.o)(qR) || (0, OR.c)()) return;
+       "lost" === rr && (0, Pr.s)();
+       const Ir = await (0, Pr.H)();
+       if (null === Ir || (0, er.p)(Ir) || (0, Pr.d)()) return;
```

#### 35. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L346-L348` → after: `L346-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L346-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L346-L348) · [Before (L346-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L346-L348)

```diff
-       const fR = iR && (0, nR.m)(qR.adapter, null !== yR && void 0 !== yR ? yR : null, "lost" === RR, uR),
-         VR = null !== (tR = "lost" === RR ? (0, CR.l)((0, eR.F)() ? (0, AR.M)((0, eR.w)()) : null) : void 0) && void 0 !== tR ? tR : JR,
-         KR = iR ? (0, AR.W)(RR, void 0, (0, CR.d)(VR)) : (0, UR.u)() ? null : UR.e;
+       const Er = fr && (0, zr.p)(Ir.adapter, null !== Zr && void 0 !== Zr ? Zr : null, "lost" === rr, ar),
+         pr = null !== (Wr = "lost" === rr ? (0, Kr.j)((0, Ur.R)() ? (0, er.T)((0, Ur.z)()) : null) : void 0) && void 0 !== Wr ? Wr : Sr,
+         xr = fr ? (0, er.gb)(rr, void 0, (0, Kr.b)(pr)) : (0, Yr.w)() ? null : Yr.i;
```

#### 36. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L350` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L350) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L350)

```diff
-         (0, OR.t)();
+         (0, Pr.l)();
```

#### 37. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L357` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L357) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L357)

```diff
-             const fR = (0, eR.F)(),
+             const Er = (0, Ur.R)(),
```

#### 38. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L361-L362` → after: `L361-L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L361-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L361-L362) · [Before (L361-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L361-L362)

```diff
-               } = await Promise.resolve().then((() => GR(42288)));
-             KR(RR.backend, tR, ZR(fR ? (0, eR.w)() : null), {
+               } = await Promise.resolve().then((() => Qr(42607)));
+             xr(rr.backend, Wr, jr(Er ? (0, Ur.z)() : null), {
```

#### 39. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L368-L369` → after: `L368-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L368-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L368-L369) · [Before (L368-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L368-L369)

```diff
-             }), await VR(NR.d)
-           }(qR, RR, VR, null !== yR && void 0 !== yR ? yR : "start_failed" === RR ? 0 : 1, {
+             }), await pr(qr.c)
+           }(Ir, rr, pr, null !== Zr && void 0 !== Zr ? Zr : "start_failed" === rr ? 0 : 1, {
```

#### 40. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L374-L375` → after: `L374-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L374-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L374-L375) · [Before (L374-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L374-L375)

```diff
-           console.warn(`${zR} ${qR.backend} failed at home (${RR}), and its report couldn't be sent`, rR)
-         }(0, NR.j)()
+           console.warn(`${Vr} ${Ir.backend} failed at home (${rr}), and its report couldn't be sent`, Nr)
+         }(0, qr.h)()
```

#### 41. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L379-L380` → after: `L379-L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L379-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L379-L380) · [Before (L379-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L379-L380)

```diff
-           yR = `${iR?"WebGPU":"WebGL"} failed at home (${RR}${void 0===JR.error?"":`: ${JR.error instanceof Error?JR.error.message:(0,PR.k)(JR.error)}`}) and ${KR}`;
-         console.warn(`${zR} ${yR}: the previews stop`, null !== (wR = JR.error) && void 0 !== wR ? wR : ""), (0, OR.x)({
+           Zr = `${fr?"WebGPU":"WebGL"} failed at home (${rr}${void 0===Sr.error?"":`: ${Sr.error instanceof Error?Sr.error.message:(0,Gr.l)(Sr.error)}`}) and ${xr}`;
+         console.warn(`${Vr} ${Zr}: the previews stop`, null !== (mr = Sr.error) && void 0 !== mr ? mr : ""), (0, Pr.o)({
```

#### 42. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L387` → after: `L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L387) · [Before (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L387)

```diff
-           } = await Promise.resolve().then((() => GR(42288)));
+           } = await Promise.resolve().then((() => Qr(42607)));
```

#### 43. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L390` → after: `L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L390) · [Before (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L390)

```diff
-           console.warn(`${zR} ${qR.backend} failed at home (${RR}), and its count couldn't be sent`, aR)
+           console.warn(`${Vr} ${Ir.backend} failed at home (${rr}), and its count couldn't be sent`, tr)
```

#### 44. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L403-L405` → after: `L403-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L403-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L403-L405) · [Before (L403-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L403-L405)

```diff
-           boundAtMs: "start_failed" === JR ? null : (0, OR.Q)(),
-           indirectHangs: (0, OR.H)(),
-           restoresSkipped: (0, OR.S)()
+           boundAtMs: "start_failed" === Sr ? null : (0, Pr.D)(),
+           indirectHangs: (0, Pr.t)(),
+           restoresSkipped: (0, Pr.F)()
```

#### 45. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L410` → after: `L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L410) · [Before (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L410)

```diff
-       if (!(0, eR.F)()) {
+       if (!(0, Ur.R)()) {
```

#### 46. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L414-L415` → after: `L414-L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L414-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L414-L415) · [Before (L414-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L414-L415)

```diff
-         const JR = await (0, OR.W)();
-         if (null === JR || (0, AR.o)(JR)) return null;
+         const Sr = await (0, Pr.H)();
+         if (null === Sr || (0, er.p)(Sr)) return null;
```

#### 47. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L419` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L419) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L419)

```diff
-           })), await (0, xR.e)(GR), !(0, eR.F)()) return null
+           })), await (0, Hr.e)(Qr), !(0, Ur.R)()) return null
```

#### 48. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L421` → after: `L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L421) · [Before (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L421)

```diff
-       return hR((0, eR.w)())
+       return ur((0, Ur.z)())
```

#### 49. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L430` → after: `L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L430) · [Before (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L430)

```diff
-               return null !== (JR = this.models.drawnUrl(RR)) && void 0 !== JR ? JR : uR.images.glbUrl(RR)
+               return null !== (Sr = this.models.drawnUrl(rr)) && void 0 !== Sr ? Sr : ar.images.glbUrl(rr)
```

#### 50. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L434-L435` → after: `L434-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L434-L435) · [Before (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L434-L435)

```diff
-         this.images = new XR.f(ZR, (RR => {
-           console.warn(`${zR} image ${RR.key.kind}:${RR.key.index}:${RR.key.word} failed`, RR.error)
+         this.images = new yr.g(jr, (rr => {
+           console.warn(`${Vr} image ${rr.key.kind}:${rr.key.index}:${rr.key.word} failed`, rr.error)
```

#### 51. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L439-L440` → after: `L439-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L439-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L439-L440) · [Before (L439-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L439-L440)

```diff
-         }), RR.startModels(), this.models = new BR.e(uR.files, ((JR, GR) => RR.buildModel(JR, GR)), (RR => {
-           console.warn(`${zR} model file ${RR.file} (${RR.url}) failed`, RR.error)
+         }), rr.startModels(), this.models = new Tr.j(ar.files, ((Sr, Qr) => rr.buildModel(Sr, Qr)), (rr => {
+           console.warn(`${Vr} model file ${rr.file} (${rr.url}) failed`, rr.error)
```

#### 52. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L451-L452` → after: `L451-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L451-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L451-L452) · [Before (L451-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L451-L452)

```diff
-           if (RR === BR.c) {
-             const RR = new DataView(GR.buffer, GR.byteOffset, pR.e),
+           if (rr === Tr.d) {
+             const rr = new DataView(Qr.buffer, Qr.byteOffset, Or.c),
```

#### 53. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L454-L455` → after: `L454-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L454-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L454-L455) · [Before (L454-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L454-L455)

```diff
-               tR = RR.getUint32(pR.h, !0),
-               uR = this.page.hostCall(sR, (() => this.host.XtR(this.id, yR, JR, GR.subarray(pR.e))));
+               Wr = rr.getUint32(Or.f, !0),
+               ar = this.page.hostCall(sr, (() => this.host.SWr(this.id, Zr, Sr, Qr.subarray(Or.c))));
```

#### 54. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L458-L459` → after: `L458-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L458-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L458-L459) · [Before (L458-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L458-L459)

```diff
-           return RR === XR.b && (this.page.hostCall(void 0, (() => {
-             this.host.MtR(this.id, GR)
+           return rr === yr.e && (this.page.hostCall(void 0, (() => {
+             this.host.QWr(this.id, Qr)
```

#### 55. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L471` → after: `L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L471) · [Before (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L471)

```diff
-         const [yR, tR] = (0, mR.e)(RR, JR, this.page.dpr(), GR);
+         const [Zr, Wr] = (0, Ar.d)(rr, Sr, this.page.dpr(), Qr);
```

#### 56. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L477` → after: `L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L477) · [Before (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L477)

```diff
-         return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.BtR(this.id, RR, JR, GR, yR))))
+         return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.ZWr(this.id, rr, Sr, Qr, Zr))))
```

#### 57. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L480` → after: `L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L480) · [Before (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L480)

```diff
-         return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.ltR(this.id, RR, JR, GR, yR))))
+         return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.WWr(this.id, rr, Sr, Qr, Zr))))
```

#### 58. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L483` → after: `L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L483) · [Before (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L483)

```diff
-         return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.ptR(this.id, RR, JR, GR))))
+         return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.aWr(this.id, rr, Sr, Qr))))
```

#### 59. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L492` → after: `L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L492) · [Before (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L492)

```diff
-         const tR = null !== (JR = null === GR || void 0 === GR ? void 0 : GR.model) && void 0 !== JR ? JR : -1,
+         const Wr = null !== (Sr = null === Qr || void 0 === Qr ? void 0 : Qr.model) && void 0 !== Sr ? Sr : -1,
```

#### 60. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L497` → after: `L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L497) · [Before (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L497)

```diff
-           this.host.gtR(this.id, tR, uR, null !== (RR = null === GR || void 0 === GR ? void 0 : GR.flyClip) && void 0 !== RR ? RR : "", null !== (JR = null === yR || void 0 === yR ? void 0 : yR.opts) && void 0 !== JR ? JR : "", ZR)
+           this.host.jWr(this.id, Wr, ar, null !== (rr = null === Qr || void 0 === Qr ? void 0 : Qr.flyClip) && void 0 !== rr ? rr : "", null !== (Sr = null === Zr || void 0 === Zr ? void 0 : Zr.opts) && void 0 !== Sr ? Sr : "", jr)
```

#### 61. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L502` → after: `L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L502) · [Before (L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L502)

```diff
-           this.host.btR(this.id, RR, JR, GR)
+           this.host.IWr(this.id, rr, Sr, Qr)
```

#### 62. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L506` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L506) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L506)

```diff
-         return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.vtR(this.id, RR, JR, GR, yR))))
+         return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.fWr(this.id, rr, Sr, Qr, Zr))))
```

#### 63. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L527` → after: `L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L527) · [Before (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L527)

```diff
-           this.host.OtR(this.id, JR, GR, yR)
+           this.host.EWr(this.id, Sr, Qr, Zr)
```

#### 64. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L536` → after: `L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L536) · [Before (L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L536)

```diff
-         this.quiet = 0, this.models.refresh(), (0, bR.f)(this.images)
+         this.quiet = 0, this.models.refresh(), (0, lr.h)(this.images)
```

#### 65. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L541` → after: `L541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L541) · [Before (L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L541)

```diff
-           const GR = JR === FR ? [] : [JR === TR ? RR : (RR | BR.d) >>> 0];
+           const Qr = Sr === Dr ? [] : [Sr === dr ? rr : (rr | Tr.f) >>> 0];
```

#### 66. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L549` → after: `L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L549) · [Before (L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L549)

```diff
-           const RR = this.host.xtR(this.id);
+           const rr = this.host.pWr(this.id);
```

#### 67. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L551` → after: `L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L551) · [Before (L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L551)

```diff
-           const GR = this.host.NtR(this.id);
+           const Qr = this.host.xWr(this.id);
```

#### 68. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L567` → after: `L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L567) · [Before (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L567)

```diff
-           JR.length > 0 && this.images.onEvent(JR), this.page.isTrapped || RR.CtR(this.id)
+           Sr.length > 0 && this.images.onEvent(Sr), this.page.isTrapped || rr.rWr(this.id)
```

#### 69. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L583` → after: `L583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L583) · [Before (L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L583)

```diff
-             this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${zR} a model worker was lost: ${RR}`))
+             this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${Vr} a model worker was lost: ${rr}`))
```

#### 70. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L586` → after: `L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L586) · [Before (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L586)

```diff
-         }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.Be = {
+         }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.zU = {
```

#### 71. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L595-L596` → after: `L595-L596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L595-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L595-L596) · [Before (L595-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L595-L596)

```diff
-               if (!this.stopIfTrapped(GR) && (this.stop(), (0, AR.s)(GR))) return void this.deps.onRenderFailed("frames_refused", GR);
-               console.warn(`${zR} the previews stopped: their frame threw`, GR)
+               if (!this.stopIfTrapped(Qr) && (this.stop(), (0, er.t)(Qr))) return void this.deps.onRenderFailed("frames_refused", Qr);
+               console.warn(`${Vr} the previews stopped: their frame threw`, Qr)
```

#### 72. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L626` → after: `L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L626) · [Before (L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L626)

```diff
-           if (!uR.DtR()) {
+           if (!ar.mWr()) {
```

#### 73. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L630-L631` → after: `L630-L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L630-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L630-L631) · [Before (L630-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L630-L631)

```diff
-             if (!uR.HtR(ZR)) throw new Error("the page has a renderer already");
-             (0, OR.A)(performance.now()), this.samples = JR, (0, oR.f)((0, AR.n)(RR))
+             if (!ar.NWr(jr)) throw new Error("the page has a renderer already");
+             (0, Pr.p)(performance.now()), this.samples = Sr, (0, Cr.g)((0, er.n)(rr))
```

#### 74. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L643-L644` → after: `L643-L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L643-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L643-L644) · [Before (L643-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L643-L644)

```diff
-           console.warn(`${zR} an ended session's renderer didn't free`, uR)
-         } else JR.HtR(GR) && ((0, OR.A)(performance.now()), this.samples = yR, (0, oR.f)(this.registryOf(RR)))
+           console.warn(`${Vr} an ended session's renderer didn't free`, ar)
+         } else Sr.NWr(Qr) && ((0, Pr.p)(performance.now()), this.samples = Zr, (0, Cr.g)(this.registryOf(rr)))
```

#### 75. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L666-L667` → after: `L666-L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L666-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L666-L667) · [Before (L666-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L666-L667)

```diff
-             return void console.warn(`${zR} the session's core kept the page's renderer`, tR)
-           }!0 === (null === (JR = this.host) || void 0 === JR ? void 0 : JR.attached()) && console.warn(`${zR} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (GR = this.host) || void 0 === GR ? void 0 : GR.DtR()) … [truncated]
+             return void console.warn(`${Vr} the session's core kept the page's renderer`, Wr)
+           }!0 === (null === (Sr = this.host) || void 0 === Sr ? void 0 : Sr.attached()) && console.warn(`${Vr} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (Qr = this.host) || void 0 === Qr ? void 0 : Qr.mWr()) … [truncated]
```

#### 76. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L684` → after: `L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L684) · [Before (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L684)

```diff
-           [iR, fR] = (0, mR.e)(JR, GR, this.deps.dpr(), yR);
+           [fr, Er] = (0, Ar.d)(Sr, Qr, this.deps.dpr(), Zr);
```

#### 77. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L686-L687` → after: `L686-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L686-L687) · [Before (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L686-L687)

```diff
-         if (!this.guarded((() => (uR.AtR(ZR, qR), tR.open(ZR, iR, fR, RR))))) throw this.hostCall(void 0, (() => {
-           uR.CtR(ZR)
+         if (!this.guarded((() => (ar.uZr(jr, Ir), Wr.open(jr, fr, Er, rr))))) throw this.hostCall(void 0, (() => {
+           ar.rWr(jr)
```

#### 78. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L704` → after: `L704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L704) · [Before (L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L704)

```diff
-         return this.prefetchedOr(RR, yR.B)
+         return this.prefetchedOr(rr, Zr.K)
```

#### 79. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L712` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L712) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L712)

```diff
-           JR = await Promise.all([RR, this.deps.images.lifeformAtlasUrl(bR.b)]).catch((() => null));
+           Sr = await Promise.all([rr, this.deps.images.lifeformAtlasUrl(lr.d)]).catch((() => null));
```

#### 80. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L746` → after: `L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L746) · [Before (L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L746)

```diff
-         this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${zR} the model workers didn't start: models won't draw in the previews`, RR))
+         this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${Vr} the model workers didn't start: models won't draw in the previews`, rr))
```

#### 81. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L756` → after: `L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L756) · [Before (L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L756)

```diff
-         return this.module = RR, null === this.host && (this.host = this.guarded((() => new RR.WtR)), this.tellInGame(), this.handOverShaderPack()), this.host
+         return this.module = rr, null === this.host && (this.host = this.guarded((() => new rr.sZr)), this.tellInGame(), this.handOverShaderPack()), this.host
```

#### 82. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L763` → after: `L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L763) · [Before (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L763)

```diff
-           RR.otR(this.deps.game.inGame())
+           rr.UWr(this.deps.game.inGame())
```

#### 83. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L772` → after: `L772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L772) · [Before (L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L772)

```diff
-           RR.ntR(...JR) || console.warn(`${zR} the host refused the shader pack: previews draw without it at home`)
+           rr.DZr(...Sr) || console.warn(`${Vr} the host refused the shader pack: previews draw without it at home`)
```

#### 84. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L779` → after: `L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L779) · [Before (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L779)

```diff
-           this.stop(), console.warn(`${zR} the previews stopped: ${RR} threw`, GR)
+           this.stop(), console.warn(`${Vr} the previews stopped: ${rr} threw`, Qr)
```

#### 85. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L786` → after: `L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L786) · [Before (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L786)

```diff
-           JR.wasm = null === GR ? JR.wasm : this.hostCall(JR.wasm, (() => GR.FK()))
+           Sr.wasm = null === Qr ? Sr.wasm : this.hostCall(Sr.wasm, (() => Qr.bx()))
```

#### 86. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L799` → after: `L799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L799) · [Before (L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L799)

```diff
-             tR = RR.ctR(yR)
+             Wr = rr.tWr(Zr)
```

#### 87. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L816` → after: `L816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L816) · [Before (L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L816)

```diff
-         return null !== RR && this.guarded((() => RR.DtR())) ? RR : (this.opening ??= this.openAtHome().finally((() => {
+         return null !== rr && this.guarded((() => rr.mWr())) ? rr : (this.opening ??= this.openAtHome().finally((() => {
```

#### 88. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L822` → after: `L822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L822) · [Before (L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L822)

```diff
-         const JR = null !== (RR = this.module) && void 0 !== RR ? RR : await this.loadModule();
+         const Sr = null !== (rr = this.module) && void 0 !== rr ? rr : await this.loadModule();
```

#### 89. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L825` → after: `L825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L825) · [Before (L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L825)

```diff
-           yR = () => this.guarded((() => GR.DtR()));
+           Zr = () => this.guarded((() => Qr.mWr()));
```

#### 90. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L827` → after: `L827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L827) · [Before (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L827)

```diff
-         if (null !== (0, OR.O)() || (0, OR.c)()) return null;
+         if (null !== (0, Pr.B)() || (0, Pr.d)()) return null;
```

#### 91. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L835` → after: `L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L835) · [Before (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L835)

```diff
-           qR = await (0, AR.v)(JR, "previewRenderer", tR, ZR, cR.f, uR)
+           Ir = await (0, er.z)(Sr, "previewRenderer", Wr, jr, Mr.i, ar)
```

#### 92. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L837` → after: `L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L837) · [Before (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L837)

```diff
-           throw iR instanceof gR.e ? this.stopForTrap(iR) : (0, AR.t)(iR) && await this.deps.onRenderFailed("start_failed", iR), iR
+           throw fr instanceof Lr.d ? this.stopForTrap(fr) : (0, er.x)(fr) && await this.deps.onRenderFailed("start_failed", fr), fr
```

#### 93. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L839` → after: `L839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L839) · [Before (L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L839)

```diff
-         return this.guarded((() => GR.HtR(qR))) ? ((0, OR.A)(performance.now()), this.samples = ZR, this.pageCanvas = tR, (0, oR.f)(this.registryOf(JR)), GR) : yR() ? GR : null
+         return this.guarded((() => Qr.NWr(Ir))) ? ((0, Pr.p)(performance.now()), this.samples = jr, this.pageCanvas = Wr, (0, Cr.g)(this.registryOf(Sr)), Qr) : Zr() ? Qr : null
```

#### 94. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L847` → after: `L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L847) · [Before (L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L847)

```diff
-         this.module.ZH(this.deps.heldLow());
+         this.module.uR(this.deps.heldLow());
```

#### 95. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L859-L860` → after: `L859-L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L859-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L859-L860) · [Before (L859-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L859-L860)

```diff
-             const JR = RR.PtR();
-             for (let RR = 0; RR + 1 < JR.length; RR += 2) JR[RR] === WR.K.RenderDeviceLost && this.deps.onDeviceLost(), this.logError(JR[RR], JR[RR + 1])
+             const Sr = rr.hWr();
+             for (let rr = 0; rr + 1 < Sr.length; rr += 2) Sr[rr] === nr.J.RenderDeviceLost && this.deps.onDeviceLost(), this.logError(Sr[rr], Sr[rr + 1])
```

#### 96. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L863-L865` → after: `L863-L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L863-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L863-L865) · [Before (L863-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L863-L865)

```diff
-             if (uR === kR) return this.stop(), void this.deps.onFatal(RR.mtR(), RR.ztR());
-             if (uR === QR) return this.stop(), void console.warn(`${zR} the previews stopped: the page's renderer went with its session`);
-             (0, LR.b)(JR), this.startFrames()
+             if (ar === br) return this.stop(), void this.deps.onFatal(rr.YWr(), rr.nWr());
+             if (ar === Jr) return this.stop(), void console.warn(`${Vr} the previews stopped: the page's renderer went with its session`);
+             (0, hr.e)(Sr), this.startFrames()
```

#### 97. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L867` → after: `L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L867) · [Before (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L867)

```diff
-             const JR = RR.ItR();
+             const Sr = rr.zWr();
```

#### 98. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L869-L870` → after: `L869-L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L869-L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L869-L870) · [Before (L869-L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L869-L870)

```diff
-             const GR = JR[2] === WR.Yc.PIPELINE_FAILED ? "pipeline_failed" : "lost";
-             this.deps.onRenderFailed(GR, void 0, JR[1], JR[2] === WR.Yc.RESTORE_LOST)
+             const Qr = Sr[2] === nr.fd.PIPELINE_FAILED ? "pipeline_failed" : "lost";
+             this.deps.onRenderFailed(Qr, void 0, Sr[1], Sr[2] === nr.fd.RESTORE_LOST)
```

#### 99. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L878` → after: `L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L878) · [Before (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L878)

```diff
-         return !this.isStopped && !(0, OR.c)() && null === (0, OR.O)()
+         return !this.isStopped && !(0, Pr.d)() && null === (0, Pr.B)()
```

#### 100. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L881` → after: `L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L881) · [Before (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L881)

```diff
-         return null !== this.module && ((0, gR.j)(this.module) || "failed" === (0, eR.s)())
+         return null !== this.module && ((0, Lr.h)(this.module) || "failed" === (0, Ur.y)())
```

#### 101. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L902` → after: `L902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L902) · [Before (L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L902)

```diff
-           StR: (JR, GR) => {
+           eWr: (Sr, Qr) => {
```

#### 102. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L904` → after: `L904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L904) · [Before (L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L904)

```diff
-               RR.StR(JR, GR)
+               rr.eWr(Sr, Qr)
```

#### 103. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L907` → after: `L907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L907) · [Before (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L907)

```diff
-           jtR: JR => {
+           KWr: Sr => {
```

#### 104. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L909` → after: `L909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L909) · [Before (L909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L909)

```diff
-               RR.jtR(JR)
+               rr.KWr(Sr)
```

#### 105. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L912-L913` → after: `L912-L913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L912-L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L912-L913) · [Before (L912-L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L912-L913)

```diff
-           ...void 0 === RR.dtR ? {} : {
-             dtR: (JR, GR) => {
+           ...void 0 === rr.yWr ? {} : {
+             yWr: (Sr, Qr) => {
```

#### 106. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L916` → after: `L916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L916) · [Before (L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L916)

```diff
-                 null === (yR = RR.dtR) || void 0 === yR || yR.call(RR, JR, GR)
+                 null === (Zr = rr.yWr) || void 0 === Zr || Zr.call(rr, Sr, Qr)
```

#### 107. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L920-L921` → after: `L920-L921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L920-L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L920-L921) · [Before (L920-L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L920-L921)

```diff
-           ...void 0 === RR.EtR ? {} : {
-             EtR: JR => {
+           ...void 0 === rr.BWr ? {} : {
+             BWr: Sr => {
```

#### 108. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L924` → after: `L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L924) · [Before (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L924)

```diff
-                 null === (GR = RR.EtR) || void 0 === GR || GR.call(RR, JR)
+                 null === (Qr = rr.BWr) || void 0 === Qr || Qr.call(rr, Sr)
```

#### 109. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L931` → after: `L931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L931) · [Before (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L931)

```diff
-         return !!this.isTrapped && (this.stopped || (this.stop(), (0, oR.f)(null)), !0)
+         return !!this.isTrapped && (this.stopped || (this.stop(), (0, Cr.g)(null)), !0)
```

#### 110. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L934` → after: `L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L934) · [Before (L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L934)

```diff
-         return !(null === this.module || !(0, gR.n)(this.module, RR)) && (this.stopForTrap(RR), !0)
+         return !(null === this.module || !(0, Lr.l)(this.module, rr)) && (this.stopForTrap(rr), !0)
```

#### 111. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L937` → after: `L937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L937) · [Before (L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L937)

```diff
-         this.stop(), (0, oR.f)(null), (0, IR.g)("previews", RR)
+         this.stop(), (0, Cr.g)(null), (0, kr.e)("previews", rr)
```

#### 112. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L944-L945` → after: `L944-L945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L944-L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L944-L945) · [Before (L944-L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L944-L945)

```diff
-         const GR = `${RR}:${JR}`;
-         this.loggedErrors.has(GR) || (this.loggedErrors.add(GR), console.warn(`${zR} error ${RR} (detail ${JR})`))
+         const Qr = `${rr}:${Sr}`;
+         this.loggedErrors.has(Qr) || (this.loggedErrors.add(Qr), console.warn(`${Vr} error ${rr} (detail ${Sr})`))
```

#### 113. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L952` → after: `L952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L952) · [Before (L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L952)

```diff
-         const RR = (0, lR.m)(aR.clientSideServerUrls.staticUrl, {
+         const rr = (0, vr.r)(tr.clientSideServerUrls.staticUrl, {
```

#### 114. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L955` → after: `L955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L955) · [Before (L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L955)

```diff
-             return null !== (JR = null === (GR = bR.e.current) || void 0 === GR ? void 0 : GR.modelUrl(RR)) && void 0 !== JR ? JR : null
+             return null !== (Sr = null === (Qr = lr.e.current) || void 0 === Qr ? void 0 : Qr.modelUrl(rr)) && void 0 !== Sr ? Sr : null
```

#### 115. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L963` → after: `L963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L963) · [Before (L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L963)

```diff
-             } = await GR.e(51).then((() => GR(54712))), {
+             } = await Qr.e(51).then((() => Qr(55199))), {
```

#### 116. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L968-L969` → after: `L968-L969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L968-L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L968-L969) · [Before (L968-L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L968-L969)

```diff
-           fetchAnimations: async () => qR(await (0, yR.B)(RJ())),
-           playerFile: async () => (await (0, lR.j)()).PLAYER_FILE,
+           fetchAnimations: async () => Ir(await (0, Zr.K)(rS())),
+           playerFile: async () => (await (0, vr.o)()).PLAYER_FILE,
```

#### 117. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L976` → after: `L976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L976) · [Before (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L976)

```diff
-           openExtras: OR.J,
+           openExtras: Pr.w,
```

#### 118. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L978` → after: `L978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L978) · [Before (L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L978)

```diff
-           images: (0, bR.j)((0, XR.l)(RR.url), (() => bR.e.current)),
+           images: (0, lr.i)((0, yr.o)(rr.url), (() => lr.e.current)),
```

#### 119. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L980-L981` → after: `L980-L981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L980-L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L980-L981) · [Before (L980-L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L980-L981)

```diff
-           game: vR.d,
-           fetchModel: RR => (0, lR.f)(RR),
+           game: Xr.b,
+           fetchModel: rr => (0, vr.j)(rr),
```

#### 120. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L991` → after: `L991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L991) · [Before (L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L991)

```diff
-             console.error(`${zR} the previews stopped: renderer error ${RR} (detail ${JR})`)
+             console.error(`${Vr} the previews stopped: renderer error ${rr} (detail ${Sr})`)
```

#### 121. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L994` → after: `L994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L994) · [Before (L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L994)

```diff
-             (0, OR.M)() === DR.d.webgpu && ((0, CR.e)((0, eR.F)() ? (0, AR.M)((0, eR.w)()) : null), nR.C.lost())
+             (0, Pr.z)() === Rr.c.webgpu && ((0, Kr.d)((0, Ur.R)() ? (0, er.T)((0, Ur.z)()) : null), zr.A.lost())
```

#### 122. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L997` → after: `L997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L997) · [Before (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L997)

```diff
-             nR.C.drew(), (0, MR.q)()
+             zr.A.drew(), (0, Br.k)()
```

#### 123. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L999-L1000` → after: `L999-L1000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L999-L1000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L999-L1000) · [Before (L999-L1000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L999-L1000)

```diff
-           frameDue: MR.s,
-           heldLow: MR.r
+           frameDue: Br.p,
+           heldLow: Br.l
```

#### 124. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1004-L1006` → after: `L1004-L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1004-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1004-L1006) · [Before (L1004-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1004-L1006)

```diff
-     var iJ = GR(664),
-       fJ = GR(39862),
-       VJ = GR(4555);
+     var fS = Qr(679),
+       ES = Qr(40197),
+       pS = Qr(4489);
```

#### 125. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1027-L1029` → after: `L1027-L1029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1027-L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1027-L1029) · [Before (L1027-L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1027-L1029)

```diff
-     var wJ = GR(40429),
-       rJ = GR(40393),
-       eJ = GR(45021);
+     var mS = Qr(40728),
+       NS = Qr(40699),
+       US = Qr(45329);
```

#### 126. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1038-L1039` → after: `L1038-L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1038-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1038-L1039) · [Before (L1038-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1038-L1039)

```diff
-         const GR = void 0 === RR ? null : (0, rJ.e)(RR),
-           yR = void 0 === JR ? null : (0, rJ.d)(JR);
+         const Qr = void 0 === rr ? null : (0, NS.i)(rr),
+           Zr = void 0 === Sr ? null : (0, NS.h)(Sr);
```

#### 127. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1050` → after: `L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1050) · [Before (L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1050)

```diff
-       if (void 0 === GR) return console.warn(`[bloxd-previews] pet model ${RR.model} isn't a Player attachment model`), null;
+       if (void 0 === Qr) return console.warn(`[bloxd-previews] pet model ${rr.model} isn't a Player attachment model`), null;
```

#### 128. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1066` → after: `L1066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1066) · [Before (L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1066)

```diff
-         flyClip: null !== (JR = null === iR || void 0 === iR ? void 0 : iR.fly) && void 0 !== JR ? JR : null
+         flyClip: null !== (Sr = null === fr || void 0 === fr ? void 0 : fr.fly) && void 0 !== Sr ? Sr : null
```

#### 129. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1074` → after: `L1074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1074) · [Before (L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1074)

```diff
-       } = (0, wJ.c)(RR);
+       } = (0, mS.e)(rr);
```

#### 130. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1081-L1083` → after: `L1081-L1083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1081-L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1081-L1083) · [Before (L1081-L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1081-L1083)

```diff
-     var UJ = GR(35176),
-       WJ = GR(37341),
-       AJ = GR(42736);
+     var YS = Qr(35490),
+       nS = Qr(37718),
+       eS = Qr(43054);
```

#### 131. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1088` → after: `L1088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1088) · [Before (L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1088)

```diff
-       return iJ.k.indexOf(RR)
+       return fS.n.indexOf(rr)
```

#### 132. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1093` → after: `L1093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1093) · [Before (L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1093)

```diff
-       const JR = (0, fJ.f)(RR),
+       const Sr = (0, ES.g)(rr),
```

#### 133. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1095` → after: `L1095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1095) · [Before (L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1095)

```diff
-       return -1 !== GR ? GR : (BJ.has(RR) || (BJ.add(RR), console.warn(`${CJ} an animation the previews' table lacks: the mob idles instead`)), -1)
+       return -1 !== Qr ? Qr : (TS.has(rr) || (TS.add(rr), console.warn(`${KS} an animation the previews' table lacks: the mob idles instead`)), -1)
```

#### 134. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1100` → after: `L1100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1100) · [Before (L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1100)

```diff
-       return null !== (JR = KJ[RR]) && void 0 !== JR ? JR : -1
+       return null !== (Sr = xS[rr]) && void 0 !== Sr ? Sr : -1
```

#### 135. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1130` → after: `L1130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1130) · [Before (L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1130)

```diff
-         this.preview = RR, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.tunings = new aJ, this.companions = null, this.nametag = null, this.stopRasteringNametag = null, this.detachControls = void 0, this.detachControls = (0 … [truncated]
+         this.preview = rr, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.tunings = new tS, this.companions = null, this.nametag = null, this.stopRasteringNametag = null, this.detachControls = void 0, this.detachControls = (0 … [truncated]
```

#### 136. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1132` → after: `L1132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1132) · [Before (L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1132)

```diff
-           captureFrame: JR => (0, AJ.e)((() => RR.isClosed ? null : RR.canvas), MR.e, JR),
+           captureFrame: Sr => (0, eS.b)((() => rr.isClosed ? null : rr.canvas), Br.b, Sr),
```

#### 137. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1134` → after: `L1134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1134) · [Before (L1134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1134)

```diff
-             console.warn(`${CJ} isolateHead: noa's character preview only`)
+             console.warn(`${KS} isolateHead: noa's character preview only`)
```

#### 138. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1137` → after: `L1137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1137) · [Before (L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1137)

```diff
-             console.warn(`${CJ} isolatePet: noa's character preview only`)
+             console.warn(`${KS} isolatePet: noa's character preview only`)
```

#### 139. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1140` → after: `L1140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1140) · [Before (L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1140)

```diff
-           if (RR.isStopped) throw new Error(`${CJ} the previews stopped before the character drew`);
+           if (rr.isStopped) throw new Error(`${KS} the previews stopped before the character drew`);
```

#### 140. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1157` → after: `L1157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1157) · [Before (L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1157)

```diff
-           this.nametag !== RR || this.preview.isClosed || (GR(), this.stopRasteringNametag = (0, WJ.h)(GR))
+           this.nametag !== rr || this.preview.isClosed || (Qr(), this.stopRasteringNametag = (0, nS.f)(Qr))
```

#### 141. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1176` → after: `L1176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1176) · [Before (L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1176)

```diff
-           radius: null !== yR && void 0 !== yR ? yR : tR.radius
+           radius: null !== Zr && void 0 !== Zr ? Zr : Wr.radius
```

#### 142. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1201` → after: `L1201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1201) · [Before (L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1201)

```diff
-       RR.setMob(MJ(GR), null !== yR && void 0 !== yR ? yR : "", 1, lJ(tR))
+       rr.setMob(BS(Qr), null !== Zr && void 0 !== Zr ? Zr : "", 1, vS(Wr))
```

#### 143. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1229` → after: `L1229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1229) · [Before (L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1229)

```diff
-           console.error(`${CJ} couldn't open a lineup figure`, RR)
+           console.error(`${KS} couldn't open a lineup figure`, rr)
```

#### 144. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1250` → after: `L1250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1250) · [Before (L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1250)

```diff
-           const RR = null === GR.gC ? 0 : null !== (tR = (0, VJ.b)(GR.gC)) && void 0 !== tR ? tR : 0;
+           const rr = null === Qr.jB ? 0 : null !== (Wr = (0, pS.e)(Qr.jB)) && void 0 !== Wr ? Wr : 0;
```

#### 145. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1265` → after: `L1265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1265) · [Before (L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1265)

```diff
-         qR.top = -(null !== (RR = GR.lift) && void 0 !== RR ? RR : 0) * yR[1] + "px", qR.left = `${uR}px`, qR.width = `${ZR}px`, qR.zIndex = this.order, qR.visibility = this.shown && this.loaded ? "visible" : "hidden"
+         Ir.top = -(null !== (rr = Qr.lift) && void 0 !== rr ? rr : 0) * Zr[1] + "px", Ir.left = `${ar}px`, Ir.width = `${jr}px`, Ir.zIndex = this.order, Ir.visibility = this.shown && this.loaded ? "visible" : "hidden"
```

#### 146. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1317` → after: `L1317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1317) · [Before (L1317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1317)

```diff
-             return (lJ(JR) === KJ.gunAimed ? yR : tR) * GR
+             return (vS(Sr) === xS.gunAimed ? Zr : Wr) * Qr
```

#### 147. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1352` → after: `L1352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1352) · [Before (L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1352)

```diff
-   45013: (RR, JR, GR) => {
+   45314: (rr, Sr, Qr) => {
```

#### 148. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1355` → after: `L1355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1355) · [Before (L1355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1355)

```diff
-   45017: (RR, JR, GR) => {
+   45323: (rr, Sr, Qr) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (46 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7)

#### 1. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L4)

```diff
-   38101: (RR, JR, GR) => {
+   38450: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L6)

```diff
-       c: () => KR,
+       d: () => xr,
```

#### 3. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L9-L11` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L9-L11) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L9-L11)

```diff
-     var yR = GR(679),
-       tR = GR(46),
-       uR = GR(38053);
+     var Zr = Qr(688),
+       Wr = Qr(43),
+       ar = Qr(38411);
```

#### 4. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L24)

```diff
-         fR = await Promise.race([(async () => await tR.g.setItem(qR, GR) && tR.g.setItem(ZR, uR))(), (0, yR.T)(VR).then((() => !1))]);
+         Er = await Promise.race([(async () => await Wr.h.setItem(Ir, Qr) && Wr.h.setItem(jr, ar))(), (0, Zr.T)(pr).then((() => !1))]);
```

#### 5. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L28` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L28)

```diff
-         tK: fR
+         sp: Er
```

#### 6. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L30)

```diff
-       tR.k.setItem(iR, KR)
+       Wr.n.setItem(fr, xr)
```

#### 7. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L34-L35` → after: `L34-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L34-L35) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L34-L35)

```diff
-       const JR = tR.k.getItem(iR);
-       null !== JR && tR.k.removeItem(iR);
+       const Sr = Wr.n.getItem(fr);
+       null !== Sr && Wr.n.removeItem(fr);
```

#### 8. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L37)

```diff
-         yR = await tR.g.getItem(qR),
+         Zr = await Wr.h.getItem(Ir),
```

#### 9. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L41` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L41) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L41)

```diff
-       if (null !== yR && (KR || ("number" !== typeof yR || GR - yR > fR)) && (wR = VR && KR && JR.tK ? await tR.g.getItem(ZR) : null, await Promise.all([tR.g.removeItem(qR), tR.g.removeItem(ZR)])), !VR) return null;
+       if (null !== Zr && (xr || ("number" !== typeof Zr || Qr - Zr > Er)) && (mr = pr && xr && Sr.sp ? await Wr.h.getItem(jr) : null, await Promise.all([Wr.h.removeItem(Ir), Wr.h.removeItem(jr)])), !pr) return null;
```

#### 10. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L49)

```diff
-   38094: (RR, JR, GR) => {
+   38446: (rr, Sr, Qr) => {
```

#### 11. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L52-L53` → after: `L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L53) · [Before (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L52-L53)

```diff
-       g: () => uR,
-       k: () => tR
+       f: () => Wr
```

#### 12. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L65` → after: `L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L65) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L65)

```diff
-   38112: (RR, JR, GR) => {
+   38462: (rr, Sr, Qr) => {
```

#### 13. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L67-L68` → after: `L67-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L67-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L67-L68) · [Before (L67-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L67-L68)

```diff
-       e: () => yR,
-       h: () => tR
+       d: () => Zr,
+       e: () => Wr
```

#### 14. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L121` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L121) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L121)

```diff
-   38116: (RR, JR, GR) => {
+   38464: (rr, Sr, Qr) => {
```

#### 15. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L123-L125` → after: `L123-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L123-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L123-L125) · [Before (L123-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L123-L125)

```diff
-       e: () => fR,
-       f: () => KR,
-       i: () => VR
+       c: () => Er,
+       d: () => xr,
+       e: () => pr
```

#### 16. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L127-L129` → after: `L127-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L127-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L127-L129) · [Before (L127-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L127-L129)

```diff
-     var yR = GR(25),
-       tR = GR(32),
-       uR = GR(38112);
+     var Zr = Qr(26),
+       Wr = Qr(34),
+       ar = Qr(38462);
```

#### 17. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L136` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L136) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L136)

```diff
-         of uR.h) RR[JR] = !0;
+         of ar.e) rr[Sr] = !0;
```

#### 18. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L142` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L142) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L142)

```diff
-       tR.n.JK("replayViewer|uiVisibilityChanged")
+       Wr.i.Jp("replayViewer|uiVisibilityChanged")
```

#### 19. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L153` → after: `L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L153) · [Before (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L153)

```diff
-       }, "nametag" === RR && yR.d.set({
+       }, "nametag" === rr && Zr.c.set({
```

#### 20. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L159` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L159) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L159)

```diff
-       qR = ZR(), yR.d.set({
+       Ir = jr(), Zr.c.set({
```

#### 21. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L164` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L164) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L164)

```diff
-   64119: (RR, JR, GR) => {
+   64584: (rr, Sr, Qr) => {
```

#### 22. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L169-L174` → after: `L169-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L169-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L169-L174) · [Before (L169-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L169-L174)

```diff
-     var yR = GR(38053),
-       tR = GR(38101),
-       uR = GR(38094),
-       ZR = GR(38116),
-       qR = GR(5676),
-       iR = GR(54582);
+     var Zr = Qr(38411),
+       Wr = Qr(38450),
+       ar = Qr(38446),
+       jr = Qr(38464),
+       Ir = Qr(5610),
+       fr = Qr(55093);
```

#### 23. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L176` → after: `L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L176) · [Before (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L176)

```diff
-       VR = new Set(["Be"]);
+       pr = new Set(["zU"]);
```

#### 24. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L180` → after: `L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L180) · [Before (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L180)

```diff
-         this.deps = RR, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this … [truncated]
+         this.deps = rr, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this … [truncated]
```

#### 25. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L189` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L189) · [Before (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L189)

```diff
-         return null !== this.lastView && this.lastView.state !== qR.ld.None
+         return null !== this.lastView && this.lastView.state !== Ir.yd.None
```

#### 26. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L219` → after: `L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L219) · [Before (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L219)

```diff
-           KR = await fR.open(RR, (() => (0, tR.c)(RR, JR)))
+           xr = await Er.open(rr, (() => (0, Wr.d)(rr, Sr)))
```

#### 27. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L231` → after: `L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L231) · [Before (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L231)

```diff
-               case qR.cd.ModuleTrap:
+               case Ir.kd.ModuleTrap:
```

#### 28. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L233` → after: `L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L233) · [Before (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L233)

```diff
-               case qR.cd.ModuleLoad:
+               case Ir.kd.ModuleLoad:
```

#### 29. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L235` → after: `L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L235) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L235)

```diff
-               case qR.cd.TooLarge:
+               case Ir.kd.TooLarge:
```

#### 30. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L242` → after: `L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L242) · [Before (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L242)

```diff
-         return this.rejectSave(new Error(yR.d.saveClosed.text)), this.fileName = null !== (GR = null !== (uR = JR.fileName) && void 0 !== uR ? uR : null === (ZR = JR.fileHandle) || void 0 === ZR ? void 0 : ZR.name) && void 0 !== GR ? GR : null, this.fileHandle = null !== (iR = JR … [truncated]
+         return this.rejectSave(new Error(Zr.d.saveClosed.text)), this.fileName = null !== (Qr = null !== (ar = Sr.fileName) && void 0 !== ar ? ar : null === (jr = Sr.fileHandle) || void 0 === jr ? void 0 : jr.name) && void 0 !== Qr ? Qr : null, this.fileHandle = null !== (fr = Sr … [truncated]
```

#### 31. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L250` → after: `L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L250) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L250)

```diff
-         this.holds.has("Be") || this.deps.client.play()
+         this.holds.has("zU") || this.deps.client.play()
```

#### 32. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L256` → after: `L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L256) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L256)

```diff
-         this.isOpen && this.pause(), this.hold("Be")
+         this.isOpen && this.pause(), this.hold("zU")
```

#### 33. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L261` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L261) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L261)

```diff
-         null !== GR && (JR || RR < GR.gK) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(RR, JR)
+         null !== Qr && (Sr || rr < Qr.lx) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(rr, Sr)
```

#### 34. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L271` → after: `L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L271) · [Before (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L271)

```diff
-         null !== RR && RR.state !== qR.ld.None && this.setCameraMode(iR.d[(iR.d.indexOf(RR.cameraMode) + 1) % iR.d.length])
+         null !== rr && rr.state !== Ir.yd.None && this.setCameraMode(fr.c[(fr.c.indexOf(rr.cameraMode) + 1) % fr.c.length])
```

#### 35. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L297` → after: `L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L297) · [Before (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L297)

```diff
-           this.pendingSave = GR, this.editsAtSave = this.edits, this.deps.client.save((0, iR.g)()).then((RR => {
+           this.pendingSave = Qr, this.editsAtSave = this.edits, this.deps.client.save((0, fr.d)()).then((rr => {
```

#### 36. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L300` → after: `L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L300) · [Before (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L300)

```diff
-             this.pendingSave === GR && this.rejectSave(RR instanceof Error ? RR : new Error(String(RR)))
+             this.pendingSave === Qr && this.rejectSave(rr instanceof Error ? rr : new Error(String(rr)))
```

#### 37. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L318` → after: `L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L318) · [Before (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L318)

```diff
-         this.fileHandle = RR, this.fileName = null !== (GR = null !== (yR = null === RR || void 0 === RR ? void 0 : RR.name) && void 0 !== yR ? yR : JR) && void 0 !== GR ? GR : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this … [truncated]
+         this.fileHandle = rr, this.fileName = null !== (Qr = null !== (Zr = null === rr || void 0 === rr ? void 0 : rr.name) && void 0 !== Zr ? Zr : Sr) && void 0 !== Qr ? Qr : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this … [truncated]
```

#### 38. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L327-L328` → after: `L327-L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L327-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L327-L328) · [Before (L327-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L327-L328)

```diff
-         this.lastView = yR, this.opening && null !== yR && yR.state !== qR.ld.None && yR.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, ZR.f)()), this.cropAsked ? (this.cropAsked = !1, null !== yR && yR.state === qR.ld.Cropping ? this.crop … [truncated]
-         const uR = 0 === this.settleFrames && 0 === (null !== (RR = null === (JR = (GR = this.deps).meshPending) || void 0 === JR ? void 0 : JR.call(GR)) && void 0 !== RR ? RR : 0);
+         this.lastView = Zr, this.opening && null !== Zr && Zr.state !== Ir.yd.None && Zr.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, jr.d)()), this.cropAsked ? (this.cropAsked = !1, null !== Zr && Zr.state === Ir.yd.Cropping ? this.crop … [truncated]
+         const ar = 0 === this.settleFrames && 0 === (null !== (rr = null === (Sr = (Qr = this.deps).meshPending) || void 0 === Sr ? void 0 : Sr.call(Qr)) && void 0 !== rr ? rr : 0);
```

#### 39. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L335` → after: `L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L335) · [Before (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L335)

```diff
-         (0, ZR.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
+         (0, jr.d)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
```

#### 40. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L339` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L339) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L339)

```diff
-           case qR.cd.TooLarge:
+           case Ir.kd.TooLarge:
```

#### 41. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L341-L342` → after: `L341-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L341-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L341-L342) · [Before (L341-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L341-L342)

```diff
-           case qR.cd.Open:
-           case qR.cd.NothingStaged: {
+           case Ir.kd.Open:
+           case Ir.kd.NothingStaged: {
```

#### 42. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L344` → after: `L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L344) · [Before (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L344)

```diff
-             const JR = (0, uR.g)(RR.version) ? yR.d.replayTooOld : yR.d.cantOpen;
+             const Sr = (0, ar.e)(rr.version) ? Zr.d.replayTooOld : Zr.d.cantOpen;
```

#### 43. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L348-L349` → after: `L348-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L348-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L348-L349) · [Before (L348-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L348-L349)

```diff
-           case qR.cd.Crop:
-             if (RR.code === qR.ad.Busy) {
+           case Ir.kd.Crop:
+             if (rr.code === Ir.jd.Busy) {
```

#### 44. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L359-L362` → after: `L359-L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L359-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L359-L362) · [Before (L359-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L359-L362)

```diff
-           case qR.cd.ModuleTrap:
-           case qR.cd.ModuleLoad:
-           case qR.cd.Port:
-             this.moduleEnded(RR.reason === qR.cd.ModuleTrap ? yR.d.coreStopped : yR.d.cantOpen);
+           case Ir.kd.ModuleTrap:
+           case Ir.kd.ModuleLoad:
+           case Ir.kd.Port:
+             this.moduleEnded(rr.reason === Ir.kd.ModuleTrap ? Zr.d.coreStopped : Zr.d.cantOpen);
```

#### 45. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L364` → after: `L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L364) · [Before (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L364)

```diff
-           case qR.cd.NotLive:
+           case Ir.kd.NotLive:
```

#### 46. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L368` → after: `L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L368) · [Before (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L368)

```diff
-             console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${RR.reason})`), this.seekAsked = !1, this.release("seek")
+             console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${rr.reason})`), this.seekAsked = !1, this.release("seek")
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (125 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989)

#### 1. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L4)

```diff
-   42743: (RR, JR, GR) => {
+   43057: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L13-L16` → after: `L13-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L13-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L13-L16) · [Before (L13-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L13-L16)

```diff
-     var yR = GR(37357),
-       tR = GR(2144),
-       uR = GR(2363),
-       ZR = GR(4442);
+     var Zr = Qr(37743),
+       Wr = Qr(2098),
+       ar = Qr(2304),
+       jr = Qr(4377);
```

#### 3. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L19-L20` → after: `L19-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L19-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L19-L20) · [Before (L19-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L19-L20)

```diff
-       (0, uR.r)((() => {
-         (0, tR.e)()
+       (0, ar.v)((() => {
+         (0, Wr.b)()
```
