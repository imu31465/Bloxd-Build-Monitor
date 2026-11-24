# Changed — Bundle Modifications Report (Part 131 / 140)

- **Updated at**: `2026-11-24T11:40 JST`
- **Part**: `131 / 140` (**427** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 130](part-130.md) · [Part 132 →](part-132.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmClientGame.js` (31kiid.1299b0d6 → fqwnlq.985c8f39 · continued)

- **File**: `bundles/bloxd.io/chunks/js/wasmClientGame.js` (862 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b)

#### 785. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7484` → after: `L7484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7484) · [Before (L7484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7484)

```diff
-         }, (0, pa.d)(kk.backend, kk.canvas, kk.adapterVendor), this.tracker.start((() => !kk.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, Ua.d)("wasm", (() => {
+         }, (0, Eq.e)(SS.backend, SS.canvas, SS.adapterVendor), this.tracker.start((() => !SS.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, yq.d)("wasm", (() => {
```

#### 786. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7488-L7489` → after: `L7488-L7489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7488-L7489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7488-L7489) · [Before (L7488-L7489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7488-L7489)

```diff
-           } = (0, ba.d)();
-           return `${kk.backend}, quality steps aim at up to ${Ca.e.target.maxFps} fps, pixel n ${Fk}, msaa ${Ik}`
+           } = (0, Yq.e)();
+           return `${SS.backend}, quality steps aim at up to ${Vq.b.target.maxFps} fps, pixel n ${HS}, msaa ${gS}`
```

#### 787. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7503` → after: `L7503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7503) · [Before (L7503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7503)

```diff
-         this.ping.onFrame(kk.headerWord(gI.F.PingSent), Fk), this.sendsStartMs = Fk, this.sendsEndMs = Ik
+         this.ping.onFrame(SS.headerWord(Rg.H.PingSent), HS), this.sendsStartMs = HS, this.sendsEndMs = gS
```

#### 788. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7507` → after: `L7507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7507) · [Before (L7507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7507)

```diff
-         this.ping.onFrame(kk.headerWord(gI.F.PingSent), Ik);
+         this.ping.onFrame(SS.headerWord(Rg.H.PingSent), gS);
```

#### 789. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7510` → after: `L7510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7510) · [Before (L7510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7510)

```diff
-         const yk = kk.headerWord(gI.F.TickUs) / 1e3 + (0, TX.L)();
+         const xS = SS.headerWord(Rg.H.TickUs) / 1e3 + (0, tt.M)();
```

#### 790. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7512` → after: `L7512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7512) · [Before (L7512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7512)

```diff
-         (ik.VJ(yk), null === (Tk = this.frameDebug) || void 0 === Tk || Tk.wasmFrame(kk, Fk, Ik, Xk, ik.isSampling(), yk), null !== this.game) && (null === (lk = this.frameDebug) || void 0 === lk || lk.inGame());
+         (XS.sC(xS), null === (bS = this.frameDebug) || void 0 === bS || bS.wasmFrame(SS, HS, gS, tS, XS.isSampling(), xS), null !== this.game) && (null === (NS = this.frameDebug) || void 0 === NS || NS.inGame());
```

#### 791. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7517` → after: `L7517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7517) · [Before (L7517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7517)

```diff
-         this.gpu.onFrame(kk.headerWord(gI.F.GpuSampled), kk.headerWord(gI.F.GpuTimed), kk.headerWord(gI.F.GpuFrameUs), ik.isSampling()) && ik.onGpuSampleStarted(), ik.onFrameCpu(qk + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(Fk)
+         this.gpu.onFrame(SS.headerWord(Rg.H.GpuSampled), SS.headerWord(Rg.H.GpuTimed), SS.headerWord(Rg.H.GpuFrameUs), XS.isSampling()) && XS.onGpuSampleStarted(), XS.onFrameCpu(uS + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(HS)
```

#### 792. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7573` → after: `L7573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7573) · [Before (L7573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7573)

```diff
-           qk = ak ? yk : (0, ea.d)(yk),
+           uS = qS ? xS : (0, kq.d)(xS),
```

#### 793. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7577` → after: `L7577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7577) · [Before (L7577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7577)

```diff
-           jk = (0, Pa.u)((0, Pa.r)(tk), this.unsentPage),
+           aS = (0, Cq.o)((0, Cq.n)(fS), this.unsentPage),
```

#### 794. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7584` → after: `L7584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7584) · [Before (L7584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7584)

```diff
-               Hk = (0, xa.j)({
+               GS = (0, Gq.g)({
```

#### 795. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7587` → after: `L7587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7587) · [Before (L7587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7587)

```diff
-                 autoMsaaOff: (0, Ra.e)()
+                 autoMsaaOff: (0, Aq.b)()
```

#### 796. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7589` → after: `L7589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7589) · [Before (L7589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7589)

```diff
-             for (const Jk of (0, ta.g)()) {
+             for (const CS of (0, uq.e)()) {
```

#### 797. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7592-L7594` → after: `L7592-L7594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7592-L7594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7592-L7594) · [Before (L7592-L7594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7592-L7594)

```diff
-               if ((0, Za.w)(xk)) Pk = (0, Pa.b)(xk);
-               else if ((0, Pa.i)(xk)) Pk = ak[xk];
-               else if ((0, xa.k)(xk)) Pk = Hk[xk];
+               if ((0, Iq.v)(nS)) PS = (0, Cq.c)(nS);
+               else if ((0, Cq.f)(nS)) PS = qS[nS];
+               else if ((0, Gq.j)(nS)) PS = GS[nS];
```

#### 798. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7599` → after: `L7599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7599) · [Before (L7599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7599)

```diff
-                 case "Ll":
+                 case "IN":
```

#### 799. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7602-L7603` → after: `L7602-L7603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7602-L7603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7602-L7603) · [Before (L7602-L7603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7602-L7603)

```diff
-                 case "wl":
-                   Pk = (0, ua.E)((0, ba.d)().n);
+                 case "jN":
+                   PS = (0, Lq.C)((0, Yq.e)().n);
```

#### 800. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7605` → after: `L7605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7605) · [Before (L7605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7605)

```diff
-                 case "Hl":
+                 case "GN":
```

#### 801. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7608` → after: `L7608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7608) · [Before (L7608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7608)

```diff
-                 case "Jl":
+                 case "CN":
```

#### 802. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7611` → after: `L7611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7611) · [Before (L7611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7611)

```diff
-                 case "xl":
+                 case "nN":
```

#### 803. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7614` → after: `L7614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7614) · [Before (L7614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7614)

```diff
-                 case "Pl":
+                 case "PN":
```

#### 804. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7617` → after: `L7617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7617) · [Before (L7617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7617)

```diff
-                 case "Kl":
+                 case "QN":
```

#### 805. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7620` → after: `L7620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7620) · [Before (L7620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7620)

```diff
-                 case "Ql":
+                 case "DN":
```

#### 806. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7623` → after: `L7623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7623) · [Before (L7623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7623)

```diff
-                 case "sl":
+                 case "wN":
```

#### 807. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7626` → after: `L7626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7626) · [Before (L7626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7626)

```diff
-                 case "Vl":
+                 case "hN":
```

#### 808. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7629` → after: `L7629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7629) · [Before (L7629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7629)

```diff
-                 case "zl":
+                 case "ZN":
```

#### 809. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7632` → after: `L7632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7632) · [Before (L7632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7632)

```diff
-                 case "Sl":
+                 case "JN":
```

#### 810. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7635` → after: `L7635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7635) · [Before (L7635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7635)

```diff
-                 case "ol":
+                 case "ON":
```

#### 811. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7638` → after: `L7638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7638) · [Before (L7638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7638)

```diff
-                 case "nl":
+                 case "EN":
```

#### 812. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7641` → after: `L7641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7641) · [Before (L7641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7641)

```diff
-                 case "Gl":
+                 case "LN":
```

#### 813. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7644` → after: `L7644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7644) · [Before (L7644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7644)

```diff
-                 case "vl":
+                 case "dN":
```

#### 814. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7647` → after: `L7647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7647) · [Before (L7647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7647)

```diff
-                 case "El":
+                 case "cN":
```

#### 815. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7650` → after: `L7650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7650) · [Before (L7650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7650)

```diff
-                 case "Ol":
+                 case "vN":
```

#### 816. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7653` → after: `L7653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7653) · [Before (L7653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7653)

```diff
-                 case "pl":
+                 case "YN":
```

#### 817. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7656` → after: `L7656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7656) · [Before (L7656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7656)

```diff
-                 case "ul":
+                 case "AN":
```

#### 818. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7659` → after: `L7659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7659) · [Before (L7659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7659)

```diff
-                 case "bl":
+                 case "yN":
```

#### 819. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7662` → after: `L7662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7662) · [Before (L7662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7662)

```diff
-                 case "Rl":
+                 case "VN":
```

#### 820. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7665-L7666` → after: `L7665-L7666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7665-L7666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7665-L7666) · [Before (L7665-L7666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7665-L7666)

```diff
-                 case "ml":
-                   Pk = (0, La.l)(yk);
+                 case "oN":
+                   PS = (0, qq.g)(xS);
```

#### 821. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7668` → after: `L7668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7668) · [Before (L7668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7668)

```diff
-                 case "el":
+                 case "KN":
```

#### 822. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7671-L7685` → after: `L7671-L7685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7671-L7685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7671-L7685) · [Before (L7671-L7685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7671-L7685)

```diff
-                 case "Ul":
-                 case "Cl":
-                 case "Nl":
-                 case "cl":
-                 case "Wl":
-                 case "fl":
-                 case "Bl":
-                 case "dl":
-                 case "Yl":
-                 case "Al":
-                 case "gl":
-                 case "hl":
-                 case "rl":
-                 case "Dl":
-                 case "Ml":
+                 case "iN":
+                 case "WN":
+                 case "zN":
+                 case "UN":
+                 case "pN":
+                 case "sN":
+                 case "BN":
+                 case "MN":
+                 case "FN":
+                 case "RN":
+                 case "TN":
+                 case "lN":
+                 case "mN":
+                 case "eN":
+                 case "rN":
```

#### 823. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7688` → after: `L7688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7688) · [Before (L7688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7688)

```diff
-                 case "ea":
+                 case "Kq":
```

#### 824. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7691` → after: `L7691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7691) · [Before (L7691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7691)

```diff
-                 case "Ha":
+                 case "jq":
```

#### 825. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7694-L7695` → after: `L7694-L7695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7694-L7695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7694-L7695) · [Before (L7694-L7695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7694-L7695)

```diff
-                 case "Ja":
-                   Pk = Va.e[kk.backend];
+                 case "Gq":
+                   PS = Dq.b[SS.backend];
```

#### 826. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7697-L7698` → after: `L7697-L7698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7697-L7698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7697-L7698) · [Before (L7697-L7698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7697-L7698)

```diff
-                 case "xa":
-                   Pk = (0, Qa.e)();
+                 case "Cq":
+                   PS = (0, Pq.c)();
```

#### 827. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7700` → after: `L7700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7700) · [Before (L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7700)

```diff
-                 case "Pa":
+                 case "nq":
```

#### 828. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7703` → after: `L7703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7703) · [Before (L7703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7703)

```diff
-                 case "Ka":
+                 case "Pq":
```

#### 829. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7706-L7707` → after: `L7706-L7707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7706-L7707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7706-L7707) · [Before (L7706-L7707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7706-L7707)

```diff
-                 case "Qa":
-                   Pk = null !== (qk = Xk.d.get("gameEntrySource")) && void 0 !== qk ? qk : ja.d;
+                 case "Qq":
+                   PS = null !== (uS = tS.b.get("gameEntrySource")) && void 0 !== uS ? uS : fq.e;
```

#### 830. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7709-L7710` → after: `L7709-L7710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7709-L7710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7709-L7710) · [Before (L7709-L7710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7709-L7710)

```diff
-                 case "sa":
-                   Pk = null !== (Lk = Fk.frameLimiter) && void 0 !== Lk ? Lk : ja.d;
+                 case "Dq":
+                   PS = null !== (IS = HS.frameLimiter) && void 0 !== IS ? IS : fq.e;
```

#### 831. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7712-L7713` → after: `L7712-L7713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7712-L7713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7712-L7713) · [Before (L7712-L7713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7712-L7713)

```diff
-                 case "Va":
-                   Pk = (0, Ha.h)();
+                 case "wq":
+                   PS = (0, Kq.f)();
```

#### 832. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7715-L7716` → after: `L7715-L7716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7715-L7716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7715-L7716) · [Before (L7715-L7716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7715-L7716)

```diff
-                 case "za":
-                   Pk = null !== (tk = (0, Ja.d)()) && void 0 !== tk ? tk : ja.d;
+                 case "hq":
+                   PS = null !== (fS = (0, jq.c)()) && void 0 !== fS ? fS : fq.e;
```

#### 833. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7718-L7719` → after: `L7718-L7719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7718-L7719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7718-L7719) · [Before (L7718-L7719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7718-L7719)

```diff
-                 case "Sa":
-                   Pk = (0, Ha.c)(wk.width, wk.height);
+                 case "Zq":
+                   PS = (0, Kq.d)(jS.width, jS.height);
```

#### 834. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7721-L7722` → after: `L7721-L7722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7721-L7722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7721-L7722) · [Before (L7721-L7722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7721-L7722)

```diff
-                 case "oa":
-                   Pk = (0, ta.j)(-(new Date).getTimezoneOffset());
+                 case "Jq":
+                   PS = (0, uq.i)(-(new Date).getTimezoneOffset());
```

#### 835. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7724-L7725` → after: `L7724-L7725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7724-L7725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7724-L7725) · [Before (L7724-L7725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7724-L7725)

```diff
-                 case "Oa":
-                   Pk = null !== (Zk = kk.fallbackReason) && void 0 !== Zk ? Zk : ja.d;
+                 case "cq":
+                   PS = null !== (kS = SS.fallbackReason) && void 0 !== kS ? kS : fq.e;
```

#### 836. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7727` → after: `L7727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7727) · [Before (L7727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7727)

```diff
-                 case "ua":
+                 case "Lq":
```

#### 837. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7730` → after: `L7730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7730) · [Before (L7730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7730)

```diff
-                 case "ba":
+                 case "Yq":
```

#### 838. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7733` → after: `L7733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7733) · [Before (L7733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7733)

```diff
-                 case "Ea":
+                 case "dq":
```

#### 839. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7736` → after: `L7736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7736) · [Before (L7736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7736)

```diff
-                 case "Ra":
+                 case "Aq":
```

#### 840. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7739` → after: `L7739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7739) · [Before (L7739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7739)

```diff
-                 case "Ua": {
+                 case "yq": {
```

#### 841. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7744-L7745` → after: `L7744-L7745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7744-L7745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7744-L7745) · [Before (L7744-L7745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7744-L7745)

```diff
-                 case "Ca":
-                   Pk = sa.C;
+                 case "Vq":
+                   PS = Qq.D;
```

#### 842. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7747-L7749` → after: `L7747-L7749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7747-L7749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7747-L7749) · [Before (L7747-L7749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7747-L7749)

```diff
-                 case "va": {
-                   const Fk = kk.Nw();
-                   Pk = null === Fk ? ja.d : String(Fk);
+                 case "Oq": {
+                   const HS = SS.Wj();
+                   PS = null === HS ? fq.e : String(HS);
```

#### 843. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7752-L7754` → after: `L7752-L7754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7752-L7754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7752-L7754) · [Before (L7752-L7754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7752-L7754)

```diff
-                 case "na":
-                 case "Ga":
-                   Pk = ja.d;
+                 case "vq":
+                 case "Eq":
+                   PS = fq.e;
```

#### 844. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7757` → after: `L7757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7757) · [Before (L7757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7757)

```diff
-                   throw new Error(`Unhandled field name: ${xk}`)
+                   throw new Error(`Unhandled field name: ${nS}`)
```

#### 845. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7759` → after: `L7759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7759) · [Before (L7759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7759)

```diff
-               if (void 0 === Pk) throw new Error(`Metric ${xk} has no value`);
+               if (void 0 === PS) throw new Error(`Metric ${nS} has no value`);
```

#### 846. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7771-L7775` → after: `L7771-L7775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7771-L7775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7771-L7775) · [Before (L7771-L7775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7771-L7775)

```diff
-             return (0, YF.d)(), kk(ek.n.Send, Fk, Ik)
-           }(this.shell.writeCmd, Zk.od, function(kk) {
-             const Fk = (0, Uk.c)((0, mF.i)(kk)),
-               Ik = new Uint8Array(ek.Zd.BYTES + Fk.length);
-             return new DataView(Ik.buffer).setUint16(0, mF.e.AnalyticsUpdate, !0), Ik.set(Fk, ek.Zd.BYTES), Ik
+             return (0, MH.c)(), SS(KS.l.Send, HS, gS)
+           }(this.shell.writeCmd, kS.vd, function(SS) {
+             const HS = (0, VS.f)((0, TH.e)(SS)),
+               gS = new Uint8Array(KS.Qd.BYTES + HS.length);
+             return new DataView(gS.buffer).setUint16(0, TH.b.AnalyticsUpdate, !0), gS.set(HS, KS.Qd.BYTES), gS
```

#### 847. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7777` → after: `L7777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7777) · [Before (L7777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7777)

```diff
-         this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, La.i), (0, Pa.o)(wk, "wasm", tk)
+         this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, qq.f), (0, Cq.j)(jS, "wasm", fS)
```

#### 848. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7780` → after: `L7780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7780) · [Before (L7780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7780)

```diff
-     var fa = Ik(39603);
+     var Uq = gS(39655);
```

#### 849. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7784-L7786` → after: `L7784-L7786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7784-L7786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7784-L7786) · [Before (L7784-L7786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7784-L7786)

```diff
-       return (0, fa.d)(((kk, Ik, Xk) => Fk.iL(kk, Ik, Xk)), ((Fk, Ik, Tk) => {
-         const ik = `${Fk},${Ik},${Tk}`;
-         return Xk.has(ik) || Xk.set(ik, (0, NF.e)(kk, Fk, Ik, Tk)), Xk.get(ik)
+       return (0, Uq.b)(((SS, gS, tS) => HS.XI(SS, gS, tS)), ((HS, gS, bS) => {
+         const XS = `${HS},${gS},${bS}`;
+         return tS.has(XS) || tS.set(XS, (0, WH.c)(SS, HS, gS, bS)), tS.get(XS)
```

#### 850. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7789-L7790` → after: `L7789-L7790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7789-L7790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7789-L7790) · [Before (L7789-L7790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7789-L7790)

```diff
-     var da = Ik(39610),
-       Ya = Ik(40891);
+     var sq = gS(39664),
+       Bq = gS(40911);
```

#### 851. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7793-L7794` → after: `L7793-L7794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7793-L7794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7793-L7794) · [Before (L7793-L7794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7793-L7794)

```diff
-       const Fk = null !== kk && 0 !== (ek.y.playerFlags(kk.api.apiView, 0) & ek.Ed.CursorAim);
-       Fk !== (0, Ya.n)() && (0, Ya.I)(Fk, null !== kk)
+       const HS = null !== SS && 0 !== (KS.t.playerFlags(SS.api.apiView, 0) & KS.zd.CursorAim);
+       HS !== (0, Bq.m)() && (0, Bq.F)(HS, null !== SS)
```

#### 852. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7798` → after: `L7798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7798) · [Before (L7798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7798)

```diff
-       return (0, xX.d)(PX.B, kk)
+       return (0, nt.d)(Pt.H, SS)
```

#### 853. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7800-L7801` → after: `L7800-L7801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7800-L7801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7800-L7801) · [Before (L7800-L7801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7800-L7801)

```diff
-     var ma = Ik(41047);
-     const ha = new ik.i((kk => Ik(42608)(`./${kk}/${kk}Client`)));
+     var Rq = gS(41053);
+     const Tq = new XS.i((SS => gS(42616)(`./${SS}/${SS}Client`)));
```

#### 854. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7805` → after: `L7805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7805) · [Before (L7805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7805)

```diff
-       ra ??= Ik.e(27).then((() => Ik(39149))).then((kk => {
+       oq ??= gS.e(27).then((() => gS(39162))).then((SS => {
```

#### 855. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7838-L7839` → after: `L7838-L7839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7838-L7839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7838-L7839) · [Before (L7838-L7839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7838-L7839)

```diff
-         return kk.crash(xT.t, Zk), null
-       }(0, ak.e)(JT(Ik, ik));
+         return SS.crash(nb.z, kS), null
+       }(0, qS.d)(Cb(gS, XS));
```

#### 856. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7851` → after: `L7851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7851) · [Before (L7851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7851)

```diff
-       (0, TX.A)();
+       (0, tt.B)();
```

#### 857. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7883-L7884` → after: `L7883-L7884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7883-L7884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7883-L7884) · [Before (L7883-L7884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7883-L7884)

```diff
-           Xq(Tk.m), Xq(IT), Xq((() => {
-             Xk.d.set({
+           Hu(bS.l), Hu(gb), Hu((() => {
+             tS.b.set({
```

#### 858. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7896` → after: `L7896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7896) · [Before (L7896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7896)

```diff
-         screenBandY: lk.j,
+         screenBandY: NS.l,
```

#### 859. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7906-L7908` → after: `L7906-L7908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7906-L7908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7906-L7908) · [Before (L7906-L7908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7906-L7908)

```diff
-           (0, yk.i)("userContextUpdated", Fk)
-         }(tk), Fq || (Fq = !0, (0, yk.i)("appManagerUpdated|openInGameMenuName", (kk => {
-           !kk && (0, qk.j)().includes(qk.c) && (0, qk.l)(qk.c)
+           (0, xS.m)("userContextUpdated", HS)
+         }(fS), rq || (rq = !0, (0, xS.m)("appManagerUpdated|openInGameMenuName", (SS => {
+           !SS && (0, uS.p)().includes(uS.d) && (0, uS.q)(uS.d)
```

#### 860. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7921` → after: `L7921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7921) · [Before (L7921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7921)

```diff
-   42608: (kk, Fk, Ik) => {
+   42616: (SS, HS, gS) => {
```

#### 861. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7923-L7940` → after: `L7923-L7940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7923-L7940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7923-L7940) · [Before (L7923-L7940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7923-L7940)

```diff
-       "./bedwars/bedwarsClient": [39277, 9],
-       "./bridgeBattle/bridgeBattleClient": [39283, 10],
-       "./buildAFactory2/buildAFactory2Client": [38483, 75, 74, 73, 225, 243, 11],
-       "./classic/classicClient": [39288, 12],
-       "./clutch/clutchClient": [39294, 13],
-       "./containmentBreach/containmentBreachClient": [39299, 14],
-       "./cooking/cookingClient": [39432, 15],
-       "./defusal/defusalClient": [39438, 16],
-       "./frontline/frontlineClient": [39445, 75, 74, 73, 17],
-       "./goalRush/goalRushClient": [39450, 18],
-       "./luckyBedwars/luckyBedwarsClient": [39453, 19],
-       "./ninetyNineNights/ninetyNineNightsClient": [39456, 20],
-       "./oneBlock/oneBlockClient": [39458, 21],
-       "./plots/plotsClient": [39460, 241, 248, 22],
-       "./pvpCiv/pvpCivClient": [39536, 23],
-       "./skyIslands/skyIslandsClient": [39543, 24],
- ... (2 more removed lines; see GitHub link above)
+       "./bedwars/bedwarsClient": [39279, 9],
+       "./bridgeBattle/bridgeBattleClient": [39287, 10],
+       "./buildAFactory2/buildAFactory2Client": [38515, 75, 74, 73, 225, 243, 11],
+       "./classic/classicClient": [39290, 12],
+       "./clutch/clutchClient": [39299, 13],
+       "./containmentBreach/containmentBreachClient": [39304, 14],
+       "./cooking/cookingClient": [39440, 15],
+       "./defusal/defusalClient": [39445, 16],
+       "./frontline/frontlineClient": [39450, 75, 74, 73, 17],
+       "./goalRush/goalRushClient": [39458, 18],
+       "./luckyBedwars/luckyBedwarsClient": [39467, 19],
+       "./ninetyNineNights/ninetyNineNightsClient": [39471, 20],
+       "./oneBlock/oneBlockClient": [39480, 21],
+       "./plots/plotsClient": [39489, 241, 248, 22],
+       "./pvpCiv/pvpCivClient": [39577, 23],
+       "./skyIslands/skyIslandsClient": [39579, 24],
+ ... (2 more added lines; see GitHub link above)
```

#### 862. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7952` → after: `L7952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7952) · [Before (L7952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7952)

```diff
-     Tk.keys = () => Object.keys(Xk), Tk.id = 42608, kk.exports = Tk
+     bS.keys = () => Object.keys(tS), bS.id = 42616, SS.exports = bS
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (31kiid.1299b0d6 → fqwnlq.985c8f39)

- **File**: `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (28 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e)

#### 1. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L4)

```diff
-   40623: (kk, Fk, Ik) => {
+   40658: (SS, HS, gS) => {
```

#### 2. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L6-L7)

```diff
-       b: () => Tk,
-       c: () => Lk
+       c: () => bS,
+       f: () => IS
```

#### 3. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L14)

```diff
-       if (Fk.at !== kk.length) throw new Error(`msgpack: ${kk.length-Fk.at} bytes after the value`);
+       if (HS.at !== SS.length) throw new Error(`msgpack: ${SS.length-HS.at} bytes after the value`);
```

#### 4. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L92` → after: `L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L92) · [Before (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L92)

```diff
-             throw new Error(`msgpack: unknown byte 0x${kk.toString(16)} at ${this.at-1}`)
+             throw new Error(`msgpack: unknown byte 0x${SS.toString(16)} at ${this.at-1}`)
```

#### 5. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L97` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L97) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L97)

```diff
-         if (Fk + kk > this.bytes.length) throw new Error(`msgpack: ${kk} bytes past the end at ${Fk}`);
+         if (HS + SS > this.bytes.length) throw new Error(`msgpack: ${SS} bytes past the end at ${HS}`);
```

#### 6. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L169` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L169) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L169)

```diff
-           throw new Error(`msgpack: ext type ${Fk} of ${kk} bytes`)
+           throw new Error(`msgpack: ext type ${HS} of ${SS} bytes`)
```

#### 7. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L210` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L210) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L210)

```diff
-               if (Object.getPrototypeOf(kk) !== Object.prototype && null !== Object.getPrototypeOf(kk)) throw new Error(`msgpack: can't encode a ${null!==(Ik=null===(Xk=kk.constructor)||void 0===Xk?void 0:Xk.name)&&void 0!==Ik?Ik:"object"}`);
+               if (Object.getPrototypeOf(SS) !== Object.prototype && null !== Object.getPrototypeOf(SS)) throw new Error(`msgpack: can't encode a ${null!==(gS=null===(tS=SS.constructor)||void 0===tS?void 0:tS.name)&&void 0!==gS?gS:"object"}`);
```

#### 8. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L255` → after: `L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L255) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L255)

```diff
-   50964: (kk, Fk, Ik) => {
+   51e3: (SS, HS, gS) => {
```

#### 9. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L261-L268` → after: `L261-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L261-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L261-L268) · [Before (L261-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L261-L268)

```diff
-     var Xk = Ik(149),
-       Tk = Ik(1199),
-       ik = Ik(36486),
-       yk = Ik(40623),
-       lk = Ik(4797),
-       ak = Ik(40689),
-       qk = Ik(40917);
-     const Lk = Uint8Array.of(13, ...(0, yk.c)(Xk.f));
+     var tS = gS(160),
+       bS = gS(1290),
+       XS = gS(36503),
+       xS = gS(40658),
+       NS = gS(4926),
+       qS = gS(40716),
+       uS = gS(40931);
+     const IS = Uint8Array.of(13, ...(0, xS.f)(tS.c));
```

#### 10. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L290` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L290) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L290)

```diff
-       } = Ik, yk = () => (0, qk.f)(Fk.endpoint, Fk.roomName, Fk.joinOptions, Ik), {
+       } = gS, xS = () => (0, uS.j)(HS.endpoint, HS.roomName, HS.joinOptions, gS), {
```

#### 11. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L292` → after: `L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L292) · [Before (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L292)

```diff
-       } = Ik, ak = lk ? null !== (Xk = await lk.take(ik)) && void 0 !== Xk ? Xk : await lk.reserveInstead(yk, ik) : await yk();
+       } = gS, qS = NS ? null !== (tS = await NS.take(XS)) && void 0 !== tS ? tS : await NS.reserveInstead(xS, XS) : await xS();
```

#### 12. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L297` → after: `L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L297) · [Before (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L297)

```diff
-       const yk = await (0, qk.e)(Fk, Ik, Xk, ik);
+       const xS = await (0, uS.f)(HS, gS, tS, XS);
```

#### 13. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L302` → after: `L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L302) · [Before (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L302)

```diff
-       const Xk = (0, qk.i)(kk, Fk);
+       const tS = (0, uS.k)(SS, HS);
```

#### 14. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L309` → after: `L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L309) · [Before (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L309)

```diff
-       return (null !== (Xk = kk.setTimer) && void 0 !== Xk ? Xk : (kk, Fk) => {
+       return (null !== (tS = SS.setTimer) && void 0 !== tS ? tS : (SS, HS) => {
```

#### 15. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L329` → after: `L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L329) · [Before (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L329)

```diff
-         Pk = !0, null === (Fk = Hk) || void 0 === Fk || Fk.reject(new ak.b("the room socket closed before the resume", "closed", kk.code))
+         PS = !0, null === (HS = GS) || void 0 === HS || HS.reject(new qS.d("the room socket closed before the resume", "closed", SS.code))
```

#### 16. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L334-L336` → after: `L334-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L334-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L334-L336) · [Before (L334-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L334-L336)

```diff
-           if (kk === (yk ? lk.I.Resumed : lk.I.Activated)) xk = !0, null === (Ik = Hk) || void 0 === Ik || Ik.resolve();
-           else if (!yk || kk !== lk.I.ResumeRefused && kk !== lk.I.Activated)
-             if (kk === lk.I.Error) {
+           if (SS === (xS ? NS.E.Resumed : NS.E.Activated)) nS = !0, null === (gS = GS) || void 0 === gS || gS.resolve();
+           else if (!xS || SS !== NS.E.ResumeRefused && SS !== NS.E.Activated)
+             if (SS === NS.E.Error) {
```

#### 17. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L338` → after: `L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L338) · [Before (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L338)

```diff
-               null === (Xk = Hk) || void 0 === Xk || Xk.reject(new ak.b(`the room refused the join (code ${Fk})`, "roomError", Fk))
+               null === (tS = GS) || void 0 === tS || tS.reject(new qS.d(`the room refused the join (code ${HS})`, "roomError", HS))
```

#### 18. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L341` → after: `L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L341) · [Before (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L341)

```diff
-               null === (Tk = Hk) || void 0 === Tk || Tk.reject(new ak.b("the room socket closed before the join", "closed", Fk, null, Zk))
+               null === (bS = GS) || void 0 === bS || bS.reject(new qS.d("the room socket closed before the join", "closed", HS, null, kS))
```

#### 19. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L345` → after: `L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L345) · [Before (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L345)

```diff
-             null === (ik = Hk) || void 0 === ik || ik.reject(new ak.m("the core refused the resume: it held no game"))
+             null === (XS = GS) || void 0 === XS || XS.reject(new qS.l("the core refused the resume: it held no game"))
```

#### 20. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L352` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L352) · [Before (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L352)

```diff
-       if (null === Vk) throw sk(), new ak.b("the core could not take the room socket", "attach");
+       if (null === hS) throw wS(), new qS.d("the core could not take the room socket", "attach");
```

#### 21. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L355` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L355) · [Before (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L355)

```diff
-       const Sk = yk ? null : new ik.e((() => {
+       const JS = xS ? null : new XS.d((() => {
```

#### 22. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L357` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L357) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L357)

```diff
-         null === (Fk = kk.flushNet) || void 0 === Fk || Fk.call(kk), null === (Ik = Hk) || void 0 === Ik || Ik.reject(new ik.f(Zk ? "socket" : "socket_unopened"))
+         null === (HS = SS.flushNet) || void 0 === HS || HS.call(SS), null === (gS = GS) || void 0 === gS || gS.reject(new XS.e(kS ? "socket" : "socket_unopened"))
```

#### 23. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L367-L368` → after: `L367-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L367-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L367-L368) · [Before (L367-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L367-L368)

```diff
-         if (vk = !0, sk(), yk && (tk.removeEventListener("close", Kk), !xk && !(null !== qk && void 0 !== qk && qk.aborted && (0, Tk.e)(qk) instanceof ak.o))) return void(Pk || kk.closeSocket(Vk));
-         xk && kk.leaveRoom(Vk) || kk.sendRaw(Vk, ak.i) ? wk(Xk, (() => {
+         if (OS = !0, wS(), xS && (fS.removeEventListener("close", QS), !nS && !(null !== uS && void 0 !== uS && uS.aborted && (0, bS.c)(uS) instanceof qS.m))) return void(PS || SS.closeSocket(hS));
+         nS && SS.leaveRoom(hS) || SS.sendRaw(hS, qS.j) ? jS(tS, (() => {
```

#### 24. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L370` → after: `L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L370) · [Before (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L370)

```diff
-         }), ak.f) : kk.closeSocket(Vk)
+         }), qS.g) : SS.closeSocket(hS)
```

#### 25. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L377` → after: `L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L377) · [Before (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L377)

```diff
-             Ik((0, Tk.e)(qk))
+             gS((0, bS.c)(uS))
```

#### 26. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L410` → after: `L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L410) · [Before (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L410)

```diff
-         const Tk = ek(kk, await (0, qk.e)(kk, Fk, Ik, Xk), Xk);
+         const bS = KS(SS, await (0, uS.f)(SS, HS, gS, tS), tS);
```

#### 27. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L414` → after: `L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L414) · [Before (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L414)

```diff
-           }), ak.f);
+           }), qS.g);
```

#### 28. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L416` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L416) · [Before (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L416)

```diff
-             Tk.send(ak.i)
+             bS.send(qS.j)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (31kiid.1299b0d6 → fqwnlq.985c8f39)

- **File**: `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (20 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933)

#### 1. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L4)

```diff
-   36810: (kk, Fk, Ik) => {
+   36814: (SS, HS, gS) => {
```

#### 2. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L9` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L9)

```diff
-       if (!Fk.ok) throw new Error(`Fetching ${kk} failed: HTTP ${Fk.status}`);
+       if (!HS.ok) throw new Error(`Fetching ${SS} failed: HTTP ${HS.status}`);
```

#### 3. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L17)

```diff
-   41063: (kk, Fk, Ik) => {
+   41066: (SS, HS, gS) => {
```

#### 4. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L23-L33` → after: `L23-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L23-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L23-L33) · [Before (L23-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L23-L33)

```diff
-     var Xk = Ik(2801),
-       Tk = Ik(36297),
-       ik = Ik(40870),
-       yk = Ik(1076),
-       lk = Ik(646),
-       ak = Ik(40726),
-       qk = (Ik(40779), Ik(36810)),
-       Lk = Ik(40745),
-       tk = Ik(40721),
-       Zk = Ik(40991),
-       jk = Ik(40852);
+     var tS = gS(3021),
+       bS = gS(36322),
+       XS = gS(40889),
+       xS = gS(1149),
+       NS = gS(699),
+       qS = gS(40755),
+       uS = (gS(40805), gS(36814)),
+       IS = gS(40770),
+       fS = gS(40748),
+       kS = gS(41005),
+       aS = gS(40876);
```

#### 5. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L44)

```diff
-         const kk = await (0, tk.Q)();
+         const SS = await (0, fS.P)();
```

#### 6. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L46-L47` → after: `L46-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L46-L47) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L46-L47)

```diff
-         if ((0, ak.h)(kk)) return (0, tk.S)("none"), void Qk("none");
-         if ("wasm" !== (0, lk.f)(window.location.search) && null !== (0, Lk.c)(kk, (0, Lk.f)(kk))) return (0, tk.S)("none"), void Qk("none");
+         if ((0, qS.m)(SS)) return (0, fS.S)("none"), void DS("none");
+         if ("wasm" !== (0, NS.g)(window.location.search) && null !== (0, IS.b)(SS, (0, IS.f)(SS))) return (0, fS.S)("none"), void DS("none");
```

#### 7. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L51-L52` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L51-L52) · [Before (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L51-L52)

```diff
-         const Ik = "unloaded" === (0, Xk.w)();
-         if (Ik && (0, tk.p)(), !await (0, Zk.b)(Fk)) return void console.warn(`${ek} the join's early wasm load failed: the boot loads the client itself`);
+         const gS = "unloaded" === (0, tS.F)();
+         if (gS && (0, fS.p)(), !await (0, kS.e)(HS)) return void console.warn(`${KS} the join's early wasm load failed: the boot loads the client itself`);
```

#### 8. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L54` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L54) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L54)

```diff
-         const ik = (0, Tk.e)(Fk.name);
+         const XS = (0, bS.g)(HS.name);
```

#### 9. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L60` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L60) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L60)

```diff
-         }) : console.warn(`${ek} the join's wasm load left no record of how it compiled ${Fk.name}`)
+         }) : console.warn(`${KS} the join's wasm load left no record of how it compiled ${HS.name}`)
```

#### 10. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L62` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L62) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L62)

```diff
-         console.warn(`${ek} the join's early wasm load did not start: the boot loads the client itself`, kk)
+         console.warn(`${KS} the join's early wasm load did not start: the boot loads the client itself`, SS)
```

#### 11. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L79` → after: `L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L79) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L79)

```diff
-         const Ik = null !== (Fk = kk.joinStarted) && void 0 !== Fk ? Fk : () => !1;
+         const gS = null !== (HS = SS.joinStarted) && void 0 !== HS ? HS : () => !1;
```

#### 12. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L88-L89` → after: `L88-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L88-L89) · [Before (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L88-L89)

```diff
-         const Fk = await (0, tk.j)();
-         null === Fk || kk() || "unloaded" !== (0, Xk.w)() || (Pk = Fk.name, await (0, Tk.b)([Fk, ik.f], "low"))
+         const HS = await (0, fS.k)();
+         null === HS || SS() || "unloaded" !== (0, tS.F)() || (PS = HS.name, await (0, bS.b)([HS, XS.h], "low"))
```

#### 13. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L91` → after: `L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L91) · [Before (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L91)

```diff
-         console.warn(`${ek} the compile ahead of the join did not start: the join loads the client itself`, kk)
+         console.warn(`${KS} the compile ahead of the join did not start: the join loads the client itself`, SS)
```

#### 14. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L106` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L106) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L106)

```diff
-               const kk = await fetch(`${Ik.p}static/js/31kiid.wasmJoinFiles.json`, {
+               const SS = await fetch(`${gS.p}static/js/fqwnlq.wasmJoinFiles.json`, {
```

#### 15. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L110-L111` → after: `L110-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L110-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L110-L111) · [Before (L110-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L110-L111)

```diff
-               if (!kk.ok) throw new Error(`HTTP ${kk.status}`);
-               if (/\bno-store\b/.test(null !== (Xk = kk.headers.get("Cache-Control")) && void 0 !== Xk ? Xk : "")) return !1;
+               if (!SS.ok) throw new Error(`HTTP ${SS.status}`);
+               if (/\bno-store\b/.test(null !== (tS = SS.headers.get("Cache-Control")) && void 0 !== tS ? tS : "")) return !1;
```

#### 16. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L116` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L116) · [Before (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L116)

```diff
-               return console.warn(`${ek} the join's chunk list did not load: the join downloads its chunks itself`, ik), !kk()
+               return console.warn(`${KS} the join's chunk list did not load: the join downloads its chunks itself`, XS), !SS()
```

#### 17. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L121` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L121) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L121)

```diff
-               const kk = `${Ik.p}${yk}`;
+               const SS = `${gS.p}${xS}`;
```

#### 18. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L123` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L123) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L123)

```diff
-                 console.warn(`${ek} prefetching ${kk} failed`, Fk)
+                 console.warn(`${KS} prefetching ${SS} failed`, HS)
```

#### 19. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L129` → after: `L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L129) · [Before (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L129)

```diff
-         (0, jk.e)(Fk) && Xk.push((0, qk.e)((0, jk.i)()));
+         (0, aS.e)(HS) && tS.push((0, uS.e)((0, aS.k)()));
```

#### 20. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L132` → after: `L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L132) · [Before (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L132)

```diff
-         console.warn(`${ek} the prefetch failed: the join downloads the client itself`, kk)
+         console.warn(`${KS} the prefetch failed: the join downloads the client itself`, SS)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (31kiid.1299b0d6 → fqwnlq.985c8f39)

- **File**: `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (149 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b)

#### 1. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L4)

```diff
-   38621: (kk, Fk, Ik) => {
+   38644: (SS, HS, gS) => {
```

#### 2. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L6)

```diff
-       d: () => Tk,
+       b: () => bS,
```

#### 3. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L17)

```diff
-       return null !== (Fk = Xk.get(kk)) && void 0 !== Fk ? Fk : null
+       return null !== (HS = tS.get(SS)) && void 0 !== HS ? HS : null
```

#### 4. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L20)

```diff
-   38649: (kk, Fk, Ik) => {
+   38672: (SS, HS, gS) => {
```

#### 5. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L24)

```diff
-     var Xk = Ik(1217);
+     var tS = gS(1309);
```

#### 6. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L56-L57` → after: `L56-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L56-L57) · [Before (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L56-L57)

```diff
-         } = this, wk = [Lk, tk, Zk, `${jk}px`, ek].filter(Boolean).join(" "), Hk = [
-           [Zk, `${jk}px`, ik(ek)].filter(Boolean).join(" "), `${jk}px sans-serif`
+         } = this, jS = [IS, fS, kS, `${aS}px`, KS].filter(Boolean).join(" "), GS = [
+           [kS, `${aS}px`, XS(KS)].filter(Boolean).join(" "), `${aS}px sans-serif`
```

#### 7. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L68` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L68) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L68)

```diff
-           yk || (yk = !0, Promise.resolve().then((() => Ik(1076))).then((Ik => {
+           xS || (xS = !0, Promise.resolve().then((() => gS(1149))).then((gS => {
```

#### 8. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L70` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L70) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L70)

```diff
-               ow: Tk
+               Zj: bS
```

#### 9. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L74-L75` → after: `L74-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L74-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L74-L75) · [Before (L74-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L74-L75)

```diff
-               Gj: Fk,
-               drawnWith: null !== Xk && void 0 !== Xk ? Xk : "the kept font, scaled"
+               ia: HS,
+               drawnWith: null !== tS && void 0 !== tS ? tS : "the kept font, scaled"
```

#### 10. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L101` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L101) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L101)

```diff
-         Fk = (0, Xk.S)(Fk);
+         HS = (0, tS.U)(HS);
```

#### 11. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L130` → after: `L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L130) · [Before (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L130)

```diff
-         "top" === this.vAlign ? tk = Tk + lk : "bottom" === this.vAlign ? (tk = qk - Hk, xk = qk) : (xk = Tk + yk / 2, tk -= Jk), Zk.forEach((Fk => {
+         "top" === this.vAlign ? fS = bS + NS : "bottom" === this.vAlign ? (fS = uS - GS, nS = uS) : (nS = bS + xS / 2, fS -= CS), kS.forEach((HS => {
```

#### 12. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L157` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L157) · [Before (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L157)

```diff
-           const Fk = Lk > 0 ? tk + Xk : tk;
+           const HS = IS > 0 ? fS + tS : fS;
```

#### 13. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L163` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L163) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L163)

```diff
-   38656: (kk, Fk, Ik) => {
+   38676: (SS, HS, gS) => {
```

#### 14. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L165-L169` → after: `L165-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L165-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L165-L169) · [Before (L165-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L165-L169)

```diff
-       c: () => wk,
-       d: () => ek,
-       h: () => Zk,
-       k: () => Lk,
-       n: () => tk
+       e: () => jS,
+       f: () => KS,
+       i: () => kS,
+       m: () => IS,
+       o: () => fS
```

#### 15. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L171-L172` → after: `L171-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L171-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L171-L172) · [Before (L171-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L171-L172)

```diff
-     var Xk = Ik(4210),
-       Tk = Ik(337);
+     var tS = gS(4356),
+       bS = gS(387);
```

#### 16. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L175` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L175) · [Before (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L175)

```diff
-       lk = 2 * Xk.i + 1,
+       NS = 2 * tS.l + 1,
```

#### 17. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L185` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L185) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L185)

```diff
-         return Ik && "object" === typeof Ik ? Ik : Fk
+         return gS && "object" === typeof gS ? gS : HS
```

#### 18. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L187` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L187) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L187)

```diff
-         return void 0 !== Ik && console.error(`Couldn't parse ${Ik}`, Xk), Fk
+         return void 0 !== gS && console.error(`Couldn't parse ${gS}`, tS), HS
```

#### 19. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L197-L199` → after: `L197-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L197-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L197-L199) · [Before (L197-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L197-L199)

```diff
-       return null !== Fk && void 0 !== Fk ? Fk : {
-         status: null !== (Ik = kk.status) && void 0 !== Ik ? Ik : "loading",
-         entries: null !== (Xk = kk.entries) && void 0 !== Xk ? Xk : []
+       return null !== HS && void 0 !== HS ? HS : {
+         status: null !== (gS = SS.status) && void 0 !== gS ? gS : "loading",
+         entries: null !== (tS = SS.entries) && void 0 !== tS ? tS : []
```

#### 20. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L204` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L204) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L204)

```diff
-       return "number" === typeof kk && Number.isFinite(kk) && kk > 0 ? kk : Fk
+       return "number" === typeof SS && Number.isFinite(SS) && SS > 0 ? SS : HS
```

#### 21. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L225` → after: `L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L225) · [Before (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L225)

```diff
-       kk.setTransform(1, 0, 0, 1, 0, 0), kk.fillStyle = Tk.J.defaultNameTagBackground, kk.fillRect(0, 0, Fk, Ik), kk.scale(Fk / yk.layoutWidth, Ik / yk.layoutHeight), kk.translate((yk.layoutWidth - ik) / 2, 0),
+       SS.setTransform(1, 0, 0, 1, 0, 0), SS.fillStyle = bS.B.defaultNameTagBackground, SS.fillRect(0, 0, HS, gS), SS.scale(HS / xS.layoutWidth, gS / xS.layoutHeight), SS.translate((xS.layoutWidth - XS) / 2, 0),
```

#### 22. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L237` → after: `L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L237) · [Before (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L237)

```diff
-           } = Tk.J;
+           } = bS.B;
```

#### 23. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L241` → after: `L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L241) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L241)

```diff
-               kk.font = `bold ${Tk}px 'Jetbrains Mono', monospace`, kk.fillStyle = ik, kk.textAlign = lk;
+               SS.font = `bold ${bS}px 'Jetbrains Mono', monospace`, SS.fillStyle = XS, SS.textAlign = NS;
```

#### 24. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L244` → after: `L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L244) · [Before (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L244)

```diff
-                 for (; ak.length > 0 && kk.measureText(`${ak}\u2026`).width > yk;) ak = ak.slice(0, -1);
+                 for (; qS.length > 0 && SS.measureText(`${qS}\u2026`).width > xS;) qS = qS.slice(0, -1);
```

#### 25. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L252` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L252) · [Before (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L252)

```diff
-             zk = null === xk ? null : (0, Tk.yc)(xk),
+             ZS = null === nS ? null : (0, bS.ic)(nS),
```

#### 26. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L254` → after: `L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L254) · [Before (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L254)

```diff
-             vk = Hk(jk.entries, Xk.k),
+             OS = GS(aS.entries, tS.p),
```

#### 27. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L269` → after: `L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L269) · [Before (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L269)

```diff
-             Rk = Jk(vk, void 0 === uk || uk.value === (null === bk || void 0 === bk ? void 0 : bk.value) ? bk : null),
+             yS = CS(OS, void 0 === YS || YS.value === (null === AS || void 0 === AS ? void 0 : AS.value) ? AS : null),
```

#### 28. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L275` → after: `L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L275) · [Before (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L275)

```diff
-             Nk = null !== (yk = null !== (Lk = null === Gk || void 0 === Gk ? void 0 : Gk.rank) && void 0 !== Lk ? Lk : Ck(Ok, Uk)) && void 0 !== yk ? yk : Ck(vk, Rk);
+             WS = null !== (xS = null !== (IS = null === ES || void 0 === ES ? void 0 : ES.rank) && void 0 !== IS ? IS : iS(cS, VS)) && void 0 !== xS ? xS : iS(OS, yS);
```

#### 29. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L277` → after: `L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L277) · [Before (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L277)

```diff
-           const ck = [...Ek ? Rk : [], ...nk ? [] : Uk],
+           const zS = [...dS ? yS : [], ...vS ? [] : VS],
```

#### 30. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L283-L285` → after: `L283-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L283-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L283-L285) · [Before (L283-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L283-L285)

```diff
-           sk(`TOP ${Xk.k}  /  ALL TIME`, 24, 52, 28, Kk, 976), sk(wk ? String(null !== (tk = Fk.title) && void 0 !== tk ? tk : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, Pk, 976), sk("RANK", 32, 174, 28, Kk, dk - 40), sk("PLAYER", dk, 174, 28, Kk, Yk), sk(wk ? Stri … [truncated]
-           const Ak = (ik - 232) / (Xk.k + qk + lk),
-             gk = 208 + Xk.k * Ak,
+           wS(`TOP ${tS.p}  /  ALL TIME`, 24, 52, 28, QS, 976), wS(jS ? String(null !== (fS = HS.title) && void 0 !== fS ? fS : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, PS, 976), wS("RANK", 32, 174, 28, QS, BS - 40), wS("PLAYER", BS, 174, 28, QS, MS), wS(jS ? Stri … [truncated]
+           const FS = (XS - 232) / (tS.p + uS + NS),
+             RS = 208 + tS.p * FS,
```

#### 31. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L289-L290` → after: `L289-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L289-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L289-L290) · [Before (L289-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L289-L290)

```diff
-               kk.fillStyle = ik ? Qk : Pk, kk.globalAlpha = ik ? .15 : Tk ? .035 : 0, kk.fillRect(24, Xk - Ak / 2 + 1, 976, Ak - 2), kk.globalAlpha = 1;
-               const yk = ik ? Qk : Pk;
+               SS.fillStyle = XS ? DS : PS, SS.globalAlpha = XS ? .15 : bS ? .035 : 0, SS.fillRect(24, tS - FS / 2 + 1, 976, FS - 2), SS.globalAlpha = 1;
+               const xS = XS ? DS : PS;
```

#### 32. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L302` → after: `L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L302) · [Before (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L302)

```diff
-             sk(Fk, 512, Xk - 28, 40, kk ? Tk.J.redUiText : Pk, 960, "center"), sk(Ik, 512, Xk + 27, 30, Kk, 960, "center")
+             wS(HS, 512, tS - 28, 40, SS ? bS.B.redUiText : PS, 960, "center"), wS(gS, 512, tS + 27, 30, QS, 960, "center")
```

#### 33. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L308` → after: `L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L308) · [Before (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L308)

```diff
-               Ik = `YOUR RANK #${ak.format(Nk)}${null===Gk?"":` of ${ak.format(Gk.total)}`}`;
+               gS = `YOUR RANK #${qS.format(WS)}${null===ES?"":` of ${qS.format(ES.total)}`}`;
```

#### 34. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L311` → after: `L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L311) · [Before (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L311)

```diff
-             sk(Ik, 512, rk - (Fk > 0 ? 15 : 0), Xk, Qk, 960, "center"), Fk > 0 && sk(`Tied with ${ak.format(Fk)} other${1===Fk?"":"s"}`, 512, rk + 24, 24, Kk, 960, "center")
+             wS(gS, 512, lS - (HS > 0 ? 15 : 0), tS, DS, 960, "center"), HS > 0 && wS(`Tied with ${qS.format(HS)} other${1===HS?"":"s"}`, 512, lS + 24, 24, QS, 960, "center")
```

#### 35. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L315` → after: `L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L315) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L315)

```diff
-           if (nk) sk(`You're in the top ${Xk.k}!`, 512, Dk, 40, Qk, 960, "center");
+           if (vS) wS(`You're in the top ${tS.p}!`, 512, mS, 40, DS, 960, "center");
```

#### 36. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L336` → after: `L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L336) · [Before (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L336)

```diff
-   38868: (kk, Fk, Ik) => {
+   38885: (SS, HS, gS) => {
```

#### 37. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L338-L339` → after: `L338-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L338-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L338-L339) · [Before (L338-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L338-L339)

```diff
-       d: () => Tk,
-       g: () => ik
+       e: () => bS,
+       i: () => XS
```

#### 38. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L365` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L365) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L365)

```diff
-   50939: (kk, Fk, Ik) => {
+   50984: (SS, HS, gS) => {
```

#### 39. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L372-L373` → after: `L372-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L372-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L372-L373) · [Before (L372-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L372-L373)

```diff
-     var Xk = Ik(2803),
-       Tk = Ik(633);
+     var tS = gS(3030),
+       bS = gS(687);
```

#### 40. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L383` → after: `L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L383) · [Before (L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L383)

```diff
-         Fk.wasm = null !== (Ik = null === kk || void 0 === kk ? void 0 : kk.Qt()) && void 0 !== Ik ? Ik : Fk.wasm
+         HS.wasm = null !== (gS = null === SS || void 0 === SS ? void 0 : SS.Qf()) && void 0 !== gS ? gS : HS.wasm
```

#### 41. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L392` → after: `L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L392) · [Before (L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L392)

```diff
-         } = await Promise.resolve().then((() => Ik(2758)));
+         } = await Promise.resolve().then((() => gS(2967)));
```

#### 42. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L400` → after: `L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L400) · [Before (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L400)

```diff
-       Promise.resolve().then((() => Ik(40757))).then((Ik => {
+       Promise.resolve().then((() => gS(40782))).then((gS => {
```

#### 43. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L406` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L406) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L406)

```diff
-         console.warn(`${ik} ${kk} didn't load, and the report couldn't be sent`, Xk.error, Fk)
+         console.warn(`${XS} ${SS} didn't load, and the report couldn't be sent`, tS.error, HS)
```

#### 44. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L446` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L446) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L446)

```diff
-             const Ik = kk.Zik(Fk);
+             const gS = SS.XXS(HS);
```

#### 45. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L465` → after: `L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L465) · [Before (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L465)

```diff
-         fetch: async () => lk(await (0, Xk.K)(jk(), {
+         fetch: async () => NS(await (0, tS.J)(aS(), {
```

#### 46. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L478` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L478) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L478)

```diff
-       return Ik(50946)
+       return gS(50991)
```

#### 47. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L480-L502` → after: `L480-L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L480-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L480-L502) · [Before (L480-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L480-L502)

```diff
-     var ek = Ik(2801),
-       wk = Ik(1194),
-       Hk = Ik(314),
-       Jk = Ik(309),
-       xk = Ik(646),
-       Pk = Ik(4797),
-       Kk = Ik(40726),
-       Qk = Ik(40946),
-       sk = (Ik(40779), Ik(40796)),
-       Vk = Ik(40799),
-       zk = Ik(40808),
-       Sk = Ik(40738),
-       vk = Ik(40966),
-       Ek = Ik(40971),
-       Ok = Ik(40721),
-       nk = Ik(40991),
- ... (7 more removed lines; see GitHub link above)
+     var KS = gS(3021),
+       jS = gS(1286),
+       GS = gS(364),
+       CS = gS(362),
+       nS = gS(699),
+       PS = gS(4926),
+       QS = gS(40755),
+       DS = gS(40954),
+       wS = (gS(40805), gS(40818)),
+       hS = gS(40824),
+       ZS = gS(40832),
+       JS = gS(40767),
+       OS = gS(40979),
+       dS = gS(40986),
+       cS = gS(40748),
+       vS = gS(41005),
+ ... (7 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L517-L519` → after: `L517-L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L517-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L517-L519) · [Before (L517-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L517-L519)

```diff
-         Ik = (0, Kk.B)(kk),
-         Xk = (0, Kk.g)(kk);
-       return null !== Ik && null !== Xk && "function" === typeof Fk.aik && "function" === typeof Fk.qik && "function" === typeof Fk.Lik ? Fk : null
+         gS = (0, QS.M)(SS),
+         tS = (0, QS.l)(SS);
+       return null !== gS && null !== tS && "function" === typeof HS.HXS && "function" === typeof HS.gXS && "function" === typeof HS.bXS ? HS : null
```

#### 49. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L523` → after: `L523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L523) · [Before (L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L523)

```diff
-       let [Xk, Tk] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [kk, Fk], ik = Math.min(Number.isFinite(Ik) && Ik > 0 ? Ik : 1, 2);
+       let [tS, bS] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [SS, HS], XS = Math.min(Number.isFinite(gS) && gS > 0 ? gS : 1, 2);
```

#### 50. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L529` → after: `L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L529) · [Before (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L529)

```diff
-       return Ik(50955)
+       return gS(50994)
```

#### 51. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L533-L535` → after: `L533-L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L533-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L533-L535) · [Before (L533-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L533-L535)

```diff
-       "lost" === kk && (0, Ok.z)();
-       const ik = await (0, Ok.Q)();
-       if (null === ik || (0, Kk.h)(ik) || (0, Ok.e)()) return;
+       "lost" === SS && (0, cS.y)();
+       const XS = await (0, cS.P)();
+       if (null === XS || (0, QS.m)(XS) || (0, cS.c)()) return;
```

#### 52. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L538-L539` → after: `L538-L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L538-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L538-L539) · [Before (L538-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L538-L539)

```diff
-       const ak = lk && (0, Jk.p)(ik.adapter, null !== Xk && void 0 !== Xk ? Xk : null, "lost" === kk, Tk),
-         qk = lk ? (0, Kk.M)(kk) : null;
+       const qS = NS && (0, CS.t)(XS.adapter, null !== tS && void 0 !== tS ? tS : null, "lost" === SS, bS),
+         uS = NS ? (0, QS.S)(SS) : null;
```

#### 53. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L541` → after: `L541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L541) · [Before (L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L541)

```diff
-         lk || (0, xk.s)(), (0, Ok.r)();
+         NS || (0, nS.s)(), (0, cS.t)();
```

#### 54. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L548` → after: `L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L548) · [Before (L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L548)

```diff
-             const qk = (0, ek.K)(),
+             const uS = (0, KS.U)(),
```

#### 55. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L552-L553` → after: `L552-L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L552-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L552-L553) · [Before (L552-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L552-L553)

```diff
-               } = await Promise.resolve().then((() => Ik(40757)));
-             tk(kk.backend, Tk, yk(qk ? (0, ek.y)() : null), {
+               } = await Promise.resolve().then((() => gS(40782)));
+             fS(SS.backend, bS, xS(uS ? (0, KS.G)() : null), {
```

#### 56. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L558-L559` → after: `L558-L559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L558-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L558-L559) · [Before (L558-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L558-L559)

```diff
-             }), await Lk(Gk.c)
-           }(ik, kk, Fk, null !== Xk && void 0 !== Xk ? Xk : "start_failed" === kk ? 0 : 1, {
+             }), await IS(ES.d)
+           }(XS, SS, HS, null !== tS && void 0 !== tS ? tS : "start_failed" === SS ? 0 : 1, {
```

#### 57. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L564-L565` → after: `L564-L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L564-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L564-L565) · [Before (L564-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L564-L565)

```diff
-           console.warn(`${Nk} ${ik.backend} failed at home (${kk}), and its report couldn't be sent`, tk)
-         }(0, Gk.i)()
+           console.warn(`${WS} ${XS.backend} failed at home (${SS}), and its report couldn't be sent`, fS)
+         }(0, ES.k)()
```

#### 58. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L569-L570` → after: `L569-L570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L569-L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L569-L570) · [Before (L569-L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L569-L570)

```diff
-           Tk = `WebGPU failed at home (${kk}${void 0===Xk.error?"":`: ${Xk.error instanceof Error?Xk.error.message:(0,Uk.j)(Xk.error)}`}) and ${qk}`;
-         console.warn(`${Nk} ${Tk}: the previews stop`, null !== (Lk = Xk.error) && void 0 !== Lk ? Lk : ""), (0, Ok.v)(Tk);
+           bS = `WebGPU failed at home (${SS}${void 0===tS.error?"":`: ${tS.error instanceof Error?tS.error.message:(0,VS.g)(tS.error)}`}) and ${uS}`;
+         console.warn(`${WS} ${bS}: the previews stop`, null !== (IS = tS.error) && void 0 !== IS ? IS : ""), (0, cS.v)(bS);
```

#### 59. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L574` → after: `L574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L574) · [Before (L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L574)

```diff
-           } = await Promise.resolve().then((() => Ik(40757)));
+           } = await Promise.resolve().then((() => gS(40782)));
```

#### 60. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L577` → after: `L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L577) · [Before (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L577)

```diff
-           console.warn(`${Nk} WebGPU failed at home (${kk}), and its count couldn't be sent`, Zk)
+           console.warn(`${WS} WebGPU failed at home (${SS}), and its count couldn't be sent`, kS)
```

#### 61. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L587` → after: `L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L587) · [Before (L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L587)

```diff
-       const ik = (0, ek.K)();
+       const XS = (0, KS.U)();
```

#### 62. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L589` → after: `L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L589) · [Before (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L589)

```diff
-         error: "lost" === Fk && null !== (Xk = (0, Kk.N)(ik ? (0, Kk.B)((0, ek.y)()) : null)) && void 0 !== Xk ? Xk : Ik,
+         error: "lost" === HS && null !== (tS = (0, QS.W)(XS ? (0, QS.M)((0, KS.G)()) : null)) && void 0 !== tS ? tS : gS,
```

#### 63. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L592-L594` → after: `L592-L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L592-L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L592-L594) · [Before (L592-L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L592-L594)

```diff
-           boundAtMs: "start_failed" === Fk ? null : (0, Ok.O)(),
-           indirectHangs: (0, Ok.C)(),
-           restoresSkipped: (0, Ok.P)()
+           boundAtMs: "start_failed" === HS ? null : (0, cS.M)(),
+           indirectHangs: (0, cS.A)(),
+           restoresSkipped: (0, cS.N)()
```

#### 64. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L599-L602` → after: `L599-L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L599-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L599-L602) · [Before (L599-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L599-L602)

```diff
-       if (!(0, ek.K)()) {
-         const kk = await (0, Ok.Q)();
-         if (null === kk || (0, Kk.h)(kk)) return null;
-         if (await (0, nk.b)(await kk.load()), !(0, ek.K)()) return null
+       if (!(0, KS.U)()) {
+         const SS = await (0, cS.P)();
+         if (null === SS || (0, QS.m)(SS)) return null;
+         if (await (0, vS.e)(await SS.load()), !(0, KS.U)()) return null
```

#### 65. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L604` → after: `L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L604) · [Before (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L604)

```diff
-       return rk((0, ek.y)())
+       return lS((0, KS.G)())
```

#### 66. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L613` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L613) · [Before (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L613)

```diff
-               return null !== (Fk = this.models.drawnUrl(kk)) && void 0 !== Fk ? Fk : ik.images.glbUrl(kk)
+               return null !== (HS = this.models.drawnUrl(SS)) && void 0 !== HS ? HS : XS.images.glbUrl(SS)
```

#### 67. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L618` → after: `L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L618) · [Before (L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L618)

```diff
-           console.warn(`${Nk} image ${kk.key.kind}:${kk.key.index}:${kk.key.word} failed`, kk.error)
+           console.warn(`${WS} image ${SS.key.kind}:${SS.key.index}:${SS.key.word} failed`, SS.error)
```

#### 68. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L622-L623` → after: `L622-L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L622-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L622-L623) · [Before (L622-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L622-L623)

```diff
-         }), kk.startModels(), this.models = new sk.h(ik.files, ((Fk, Ik) => kk.buildModel(Fk, Ik)), (kk => {
-           console.warn(`${Nk} model file ${kk.file} (${kk.url}) failed`, kk.error)
+         }), SS.startModels(), this.models = new wS.k(XS.files, ((HS, gS) => SS.buildModel(HS, gS)), (SS => {
+           console.warn(`${WS} model file ${SS.file} (${SS.url}) failed`, SS.error)
```

#### 69. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L635` → after: `L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L635) · [Before (L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L635)

```diff
-             const kk = new DataView(Ik.buffer, Ik.byteOffset, zk.b),
+             const SS = new DataView(gS.buffer, gS.byteOffset, ZS.c),
```

#### 70. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L637-L638` → after: `L637-L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L637-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L637-L638) · [Before (L637-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L637-L638)

```diff
-               Tk = kk.getUint32(zk.f, !0),
-               ik = this.page.hostCall(hk, (() => this.host.xyk(this.id, Xk, Fk, Ik.subarray(zk.b))));
+               bS = SS.getUint32(ZS.d, !0),
+               XS = this.page.hostCall(oS, (() => this.host.qxS(this.id, tS, HS, gS.subarray(ZS.c))));
```

#### 71. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L642` → after: `L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L642) · [Before (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L642)

```diff
-             this.host.Kyk(this.id, Ik)
+             this.host.IxS(this.id, gS)
```

#### 72. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L660` → after: `L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L660) · [Before (L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L660)

```diff
-         return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.Syk(this.id, kk, Fk, Ik, Xk))))
+         return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.jxS(this.id, SS, HS, gS, tS))))
```

#### 73. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L663` → after: `L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L663) · [Before (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L663)

```diff
-         return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.vyk(this.id, kk, Fk, Ik, Xk))))
+         return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.CxS(this.id, SS, HS, gS, tS))))
```

#### 74. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L666` → after: `L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L666) · [Before (L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L666)

```diff
-         return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.syk(this.id, kk, Fk, Ik))))
+         return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.kxS(this.id, SS, HS, gS))))
```

#### 75. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L669` → after: `L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L669) · [Before (L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L669)

```diff
-         return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.Vyk(this.id, kk, Fk, Ik, Xk))))
+         return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.axS(this.id, SS, HS, gS, tS))))
```

#### 76. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L690` → after: `L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L690) · [Before (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L690)

```diff
-           this.host.oyk(this.id, Fk, Ik, Xk)
+           this.host.GxS(this.id, HS, gS, tS)
```

#### 77. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L699` → after: `L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L699) · [Before (L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L699)

```diff
-         this.quiet = 0, this.models.refresh(), (0, vk.i)(this.images)
+         this.quiet = 0, this.models.refresh(), (0, OS.f)(this.images)
```

#### 78. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L704` → after: `L704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L704) · [Before (L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L704)

```diff
-           const Ik = Fk === gk ? [] : [Fk === mk ? kk : (kk | sk.g) >>> 0];
+           const gS = HS === RS ? [] : [HS === TS ? SS : (SS | wS.h) >>> 0];
```

#### 79. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L712` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L712) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L712)

```diff
-           const kk = this.host.Gyk(this.id);
+           const SS = this.host.QxS(this.id);
```

#### 80. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L714` → after: `L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L714) · [Before (L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L714)

```diff
-           const Ik = this.host.nyk(this.id);
+           const gS = this.host.PxS(this.id);
```

#### 81. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L730` → after: `L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L730) · [Before (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L730)

```diff
-           Fk.length > 0 && this.images.onEvent(Fk), this.page.isTrapped || kk.Lik(this.id)
+           HS.length > 0 && this.images.onEvent(HS), this.page.isTrapped || SS.bXS(this.id)
```

#### 82. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L746` → after: `L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L746) · [Before (L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L746)

```diff
-             this.loggedErrors.has("modelDecoder") || (this.loggedErrors.add("modelDecoder"), console.warn(`${Nk} the Draco decoder didn't load: models waiting on it won't draw`, kk))
+             this.loggedErrors.has("modelDecoder") || (this.loggedErrors.add("modelDecoder"), console.warn(`${WS} the Draco decoder didn't load: models waiting on it won't draw`, SS))
```

#### 83. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L749` → after: `L749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L749) · [Before (L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L749)

```diff
-             this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${Nk} a model worker was lost: ${kk}`))
+             this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${WS} a model worker was lost: ${SS}`))
```

#### 84. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L752` → after: `L752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L752) · [Before (L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L752)

```diff
-         }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.ke = {
+         }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.bK = {
```

#### 85. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L760-L761` → after: `L760-L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L760-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L760-L761) · [Before (L760-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L760-L761)

```diff
-             if (!this.stopIfTrapped(Ik) && (this.stop(), (0, Kk.j)(Ik))) return void this.deps.onRenderFailed("frames_refused", Ik);
-             console.warn(`${Nk} the previews stopped: their frame threw`, Ik)
+             if (!this.stopIfTrapped(gS) && (this.stop(), (0, QS.p)(gS))) return void this.deps.onRenderFailed("frames_refused", gS);
+             console.warn(`${WS} the previews stopped: their frame threw`, gS)
```

#### 86. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L791-L792` → after: `L791-L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L791-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L791-L792) · [Before (L791-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L791-L792)

```diff
-           if (!ik.Pyk()) {
-             const Fk = (0, uk.d)().sampleCount,
+           if (!XS.uxS()) {
+             const HS = (0, YS.e)().sampleCount,
```

#### 87. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L795-L796` → after: `L795-L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L795-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L795-L796) · [Before (L795-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L795-L796)

```diff
-             if (!ik.Iyk(yk)) throw new Error("the page has a renderer already");
-             (0, Ok.y)(performance.now()), this.samples = Fk, (0, bk.f)((0, Kk.g)(kk))
+             if (!XS.RXS(xS)) throw new Error("the page has a renderer already");
+             (0, cS.x)(performance.now()), this.samples = HS, (0, AS.h)((0, QS.l)(SS))
```

#### 88. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L808-L809` → after: `L808-L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L808-L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L808-L809) · [Before (L808-L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L808-L809)

```diff
-           console.warn(`${Nk} an ended session's renderer didn't free`, ik)
-         } else Fk.Iyk(Ik) && ((0, Ok.y)(performance.now()), this.samples = Xk, (0, bk.f)(this.registryOf(kk)))
+           console.warn(`${WS} an ended session's renderer didn't free`, XS)
+         } else HS.RXS(gS) && ((0, cS.x)(performance.now()), this.samples = tS, (0, AS.h)(this.registryOf(SS)))
```

#### 89. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L831-L832` → after: `L831-L832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L831-L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L831-L832) · [Before (L831-L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L831-L832)

```diff
-             return void console.warn(`${Nk} the session's core kept the page's renderer`, Tk)
-           }!0 === (null === (Fk = this.host) || void 0 === Fk ? void 0 : Fk.attached()) && console.warn(`${Nk} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (Ik = this.host) || void 0 === Ik ? void 0 : Ik.Pyk()) … [truncated]
+             return void console.warn(`${WS} the session's core kept the page's renderer`, bS)
+           }!0 === (null === (HS = this.host) || void 0 === HS ? void 0 : HS.attached()) && console.warn(`${WS} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (gS = this.host) || void 0 === gS ? void 0 : gS.uxS()) … [truncated]
```

#### 90. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L851-L852` → after: `L851-L852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L851-L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L851-L852) · [Before (L851-L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L851-L852)

```diff
-         if (!this.guarded((() => (ik.qik(yk, lk), Tk.open(yk, ak, qk, kk))))) throw this.hostCall(void 0, (() => {
-           ik.Lik(yk)
+         if (!this.guarded((() => (XS.gXS(xS, NS), bS.open(xS, qS, uS, SS))))) throw this.hostCall(void 0, (() => {
+           XS.bXS(xS)
```

#### 91. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L859` → after: `L859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L859) · [Before (L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L859)

```diff
-         if (this.prefetched || this.isStopped || (0, Ok.e)() || null !== (0, Ok.N)()) return;
+         if (this.prefetched || this.isStopped || (0, cS.c)() || null !== (0, cS.J)()) return;
```

#### 92. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L869` → after: `L869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L869) · [Before (L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L869)

```diff
-         return this.prefetchedOr(kk, Xk.K)
+         return this.prefetchedOr(SS, tS.J)
```

#### 93. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L911` → after: `L911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L911) · [Before (L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L911)

```diff
-         this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${Nk} the model workers didn't start: models won't draw in the previews`, kk))
+         this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${WS} the model workers didn't start: models won't draw in the previews`, SS))
```

#### 94. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L921` → after: `L921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L921) · [Before (L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L921)

```diff
-         return this.module = kk, null === this.host && (this.host = this.guarded((() => new kk.aik)), this.tellInGame(), this.handOverShaderPack()), this.host
+         return this.module = SS, null === this.host && (this.host = this.guarded((() => new SS.HXS)), this.tellInGame(), this.handOverShaderPack()), this.host
```

#### 95. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L928` → after: `L928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L928) · [Before (L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L928)

```diff
-           kk.zyk(this.deps.game.inGame())
+           SS.KxS(this.deps.game.inGame())
```

#### 96. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L937` → after: `L937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L937) · [Before (L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L937)

```diff
-           kk.aXk(...Fk) || console.warn(`${Nk} the host refused the shader pack: previews draw without it at home`)
+           SS.rgS(...HS) || console.warn(`${WS} the host refused the shader pack: previews draw without it at home`)
```

#### 97. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L944` → after: `L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L944) · [Before (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L944)

```diff
-           this.stop(), console.warn(`${Nk} the previews stopped: ${kk} threw`, Ik)
+           this.stop(), console.warn(`${WS} the previews stopped: ${SS} threw`, gS)
```

#### 98. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L951` → after: `L951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L951) · [Before (L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L951)

```diff
-           Fk.wasm = null === Ik ? Fk.wasm : this.hostCall(Fk.wasm, (() => Ik.Qt()))
+           HS.wasm = null === gS ? HS.wasm : this.hostCall(HS.wasm, (() => gS.Qf()))
```

#### 99. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L964` → after: `L964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L964) · [Before (L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L964)

```diff
-             Tk = kk.Qyk(Xk)
+             bS = SS.fxS(tS)
```

#### 100. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L981` → after: `L981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L981) · [Before (L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L981)

```diff
-         return null !== kk && this.guarded((() => kk.Pyk())) ? kk : (this.opening ??= this.openAtHome().finally((() => {
+         return null !== SS && this.guarded((() => SS.uxS())) ? SS : (this.opening ??= this.openAtHome().finally((() => {
```

#### 101. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L987` → after: `L987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L987) · [Before (L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L987)

```diff
-         const Fk = null !== (kk = this.module) && void 0 !== kk ? kk : await this.loadModule();
+         const HS = null !== (SS = this.module) && void 0 !== SS ? SS : await this.loadModule();
```

#### 102. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L990` → after: `L990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L990) · [Before (L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L990)

```diff
-           Xk = () => this.guarded((() => Ik.Pyk()));
+           tS = () => this.guarded((() => gS.uxS()));
```

#### 103. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L992` → after: `L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L992) · [Before (L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L992)

```diff
-         if (null !== (0, Ok.N)() || (0, Ok.e)()) return null;
+         if (null !== (0, cS.J)() || (0, cS.c)()) return null;
```

#### 104. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L997` → after: `L997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L997) · [Before (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L997)

```diff
-         const yk = (0, uk.d)().sampleCount;
+         const xS = (0, YS.e)().sampleCount;
```

#### 105. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1000` → after: `L1000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1000) · [Before (L1000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1000)

```diff
-           lk = await (0, Kk.n)(Fk, "previewRenderer", Tk, yk, Rk.e, ik)
+           NS = await (0, QS.w)(HS, "previewRenderer", bS, xS, yS.c, XS)
```

#### 106. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1002` → after: `L1002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1002) · [Before (L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1002)

```diff
-           throw ak instanceof Sk.c ? this.stopForTrap(ak) : (0, Kk.l)(ak) && await this.deps.onRenderFailed("start_failed", ak), ak
+           throw qS instanceof JS.c ? this.stopForTrap(qS) : (0, QS.t)(qS) && await this.deps.onRenderFailed("start_failed", qS), qS
```

#### 107. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1004` → after: `L1004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1004) · [Before (L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1004)

```diff
-         return this.guarded((() => Ik.Iyk(lk))) ? ((0, Ok.y)(performance.now()), this.samples = yk, this.pageCanvas = Tk, (0, bk.f)(this.registryOf(Fk)), Ik) : Xk() ? Ik : null
+         return this.guarded((() => gS.RXS(NS))) ? ((0, cS.x)(performance.now()), this.samples = xS, this.pageCanvas = bS, (0, AS.h)(this.registryOf(HS)), gS) : tS() ? gS : null
```

#### 108. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1023-L1024` → after: `L1023-L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1023-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1023-L1024) · [Before (L1023-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1023-L1024)

```diff
-             const Fk = kk.Oyk();
-             for (let kk = 0; kk + 1 < Fk.length; kk += 2) Fk[kk] === Pk.N.RenderDeviceLost && this.deps.onDeviceLost(), this.logError(Fk[kk], Fk[kk + 1])
+             const HS = SS.nxS();
+             for (let SS = 0; SS + 1 < HS.length; SS += 2) HS[SS] === PS.K.RenderDeviceLost && this.deps.onDeviceLost(), this.logError(HS[SS], HS[SS + 1])
```

#### 109. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1027-L1028` → after: `L1027-L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1027-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1027-L1028) · [Before (L1027-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1027-L1028)

```diff
-             if (ik === Yk) return this.stop(), void this.deps.onFatal(kk.wyk(), kk.Hyk());
-             if (ik === Ak) return this.stop(), void console.warn(`${Nk} the previews stopped: the page's renderer went with its session`);
+             if (XS === MS) return this.stop(), void this.deps.onFatal(SS.XxS(), SS.xxS());
+             if (XS === FS) return this.stop(), void console.warn(`${WS} the previews stopped: the page's renderer went with its session`);
```

#### 110. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1031` → after: `L1031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1031) · [Before (L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1031)

```diff
-             const Fk = kk.Jyk();
+             const HS = SS.NxS();
```

#### 111. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1033-L1034` → after: `L1033-L1034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1033-L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1033-L1034) · [Before (L1033-L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1033-L1034)

```diff
-             const Ik = Fk[2] === Pk.Xc.PIPELINE_FAILED ? "pipeline_failed" : "lost";
-             this.deps.onRenderFailed(Ik, void 0, Fk[1], Fk[2] === Pk.Xc.RESTORE_LOST)
+             const gS = HS[2] === PS.id.PIPELINE_FAILED ? "pipeline_failed" : "lost";
+             this.deps.onRenderFailed(gS, void 0, HS[1], HS[2] === PS.id.RESTORE_LOST)
```

#### 112. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1042` → after: `L1042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1042) · [Before (L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1042)

```diff
-         return null !== this.module && ((0, Sk.f)(this.module) || "failed" === (0, ek.w)())
+         return null !== this.module && ((0, JS.i)(this.module) || "failed" === (0, KS.F)())
```

#### 113. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1063` → after: `L1063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1063) · [Before (L1063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1063)

```diff
-           gIk: (Fk, Ik) => {
+           WgS: (HS, gS) => {
```

#### 114. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1065` → after: `L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1065) · [Before (L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1065)

```diff
-               kk.gIk(Fk, Ik)
+               SS.WgS(HS, gS)
```

#### 115. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1068` → after: `L1068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1068) · [Before (L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1068)

```diff
-           mIk: Fk => {
+           zgS: HS => {
```

#### 116. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1070` → after: `L1070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1070) · [Before (L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1070)

```diff
-               kk.mIk(Fk)
+               SS.zgS(HS)
```

#### 117. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1076` → after: `L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1076) · [Before (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1076)

```diff
-         return !!this.isTrapped && (this.stopped || (this.stop(), (0, bk.f)(null)), !0)
+         return !!this.isTrapped && (this.stopped || (this.stop(), (0, AS.h)(null)), !0)
```

#### 118. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1079` → after: `L1079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1079) · [Before (L1079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1079)

```diff
-         return !(null === this.module || !(0, Sk.g)(this.module, kk)) && (this.stopForTrap(kk), !0)
+         return !(null === this.module || !(0, JS.k)(this.module, SS)) && (this.stopForTrap(SS), !0)
```

#### 119. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1082` → after: `L1082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1082) · [Before (L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1082)

```diff
-         this.stop(), (0, bk.f)(null), (0, Ck.g)("previews", kk)
+         this.stop(), (0, AS.h)(null), (0, iS.g)("previews", SS)
```

#### 120. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1089-L1090` → after: `L1089-L1090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1089-L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1089-L1090) · [Before (L1089-L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1089-L1090)

```diff
-         const Ik = `${kk}:${Fk}`;
-         this.loggedErrors.has(Ik) || (this.loggedErrors.add(Ik), console.warn(`${Nk} error ${kk} (detail ${Fk})`))
+         const gS = `${SS}:${HS}`;
+         this.loggedErrors.has(gS) || (this.loggedErrors.add(gS), console.warn(`${WS} error ${SS} (detail ${HS})`))
```

#### 121. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1097` → after: `L1097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1097) · [Before (L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1097)

```diff
-         const kk = (0, Vk.j)(wk.clientSideServerUrls.staticUrl, {
+         const SS = (0, hS.m)(jS.clientSideServerUrls.staticUrl, {
```

#### 122. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1100` → after: `L1100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1100) · [Before (L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1100)

```diff
-             return null !== (Fk = null === (Ik = vk.f.current) || void 0 === Ik ? void 0 : Ik.modelUrl(kk)) && void 0 !== Fk ? Fk : null
+             return null !== (HS = null === (gS = OS.d.current) || void 0 === gS ? void 0 : gS.modelUrl(SS)) && void 0 !== HS ? HS : null
```

#### 123. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1108` → after: `L1108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1108) · [Before (L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1108)

```diff
-             } = await Ik.e(42).then((() => Ik(51022))), {
+             } = await gS.e(42).then((() => gS(51070))), {
```

#### 124. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1113-L1114` → after: `L1113-L1114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1113-L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1113-L1114) · [Before (L1113-L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1113-L1114)

```diff
-           fetchAnimations: async () => lk(await (0, Xk.K)(Mk())),
-           playerFile: async () => (await (0, Vk.i)()).PLAYER_FILE,
+           fetchAnimations: async () => NS(await (0, tS.J)(eS())),
+           playerFile: async () => (await (0, hS.l)()).PLAYER_FILE,
```

#### 125. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1121` → after: `L1121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1121) · [Before (L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1121)

```diff
-           openExtras: Ok.F,
+           openExtras: cS.B,
```

#### 126. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1123-L1124` → after: `L1123-L1124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1123-L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1123-L1124) · [Before (L1123-L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1123-L1124)

```diff
-           images: (0, vk.m)((0, Qk.o)(kk.url), (() => vk.f.current)),
-           pack: vk.f,
+           images: (0, OS.h)((0, DS.m)(SS.url), (() => OS.d.current)),
+           pack: OS.d,
```

#### 127. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1126` → after: `L1126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1126) · [Before (L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1126)

```diff
-           fetchModel: kk => (0, Vk.f)(kk),
+           fetchModel: SS => (0, hS.g)(SS),
```

#### 128. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1136` → after: `L1136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1136) · [Before (L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1136)

```diff
-             console.error(`${Nk} the previews stopped: renderer error ${kk} (detail ${Fk})`)
+             console.error(`${WS} the previews stopped: renderer error ${SS} (detail ${HS})`)
```

#### 129. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1139` → after: `L1139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1139) · [Before (L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1139)

```diff
-             (0, Ok.J)() === pk.e.webgpu && Jk.F.lost()
+             (0, cS.F)() === LS.b.webgpu && CS.F.lost()
```

#### 130. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1147-L1149` → after: `L1147-L1149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1147-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1147-L1149) · [Before (L1147-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1147-L1149)

```diff
-     var lF = Ik(614),
-       aF = Ik(38621),
-       qF = Ik(3229);
+     var xH = gS(665),
+       NH = gS(38644),
+       qH = gS(3437);
```

#### 131. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1172` → after: `L1172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1172) · [Before (L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1172)

```diff
-       return lF.m.indexOf(kk)
+       return xH.j.indexOf(SS)
```

#### 132. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1179` → after: `L1179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1179) · [Before (L1179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1179)

```diff
-       return -1 !== Ik ? Ik : (eF.has(kk) || (eF.add(kk), console.warn(`${tF} an animation the previews' table lacks: the mob idles instead`)), -1)
+       return -1 !== gS ? gS : (aH.has(SS) || (aH.add(SS), console.warn(`${IH} an animation the previews' table lacks: the mob idles instead`)), -1)
```

#### 133. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1184` → after: `L1184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1184) · [Before (L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1184)

```diff
-       return null !== (Fk = LF[kk]) && void 0 !== Fk ? Fk : -1
+       return null !== (HS = uH[SS]) && void 0 !== HS ? HS : -1
```

#### 134. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1266` → after: `L1266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1266) · [Before (L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1266)

```diff
-             console.warn(`${tF} isolateHead: noa's character preview only`)
+             console.warn(`${IH} isolateHead: noa's character preview only`)
```

#### 135. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1269` → after: `L1269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1269) · [Before (L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1269)

```diff
-           if (kk.isStopped) throw new Error(`${tF} the previews stopped before the character drew`);
+           if (SS.isStopped) throw new Error(`${IH} the previews stopped before the character drew`);
```

#### 136. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1295` → after: `L1295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1295) · [Before (L1295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1295)

```diff
-           radius: null !== Xk && void 0 !== Xk ? Xk : Tk.radius
+           radius: null !== tS && void 0 !== tS ? tS : bS.radius
```

#### 137. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1317` → after: `L1317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1317) · [Before (L1317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1317)

```diff
-       kk.setMob(jF(Ik), null !== Xk && void 0 !== Xk ? Xk : "", 1, wF(Tk))
+       SS.setMob(kH(gS), null !== tS && void 0 !== tS ? tS : "", 1, KH(bS))
```

#### 138. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1345` → after: `L1345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1345) · [Before (L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1345)

```diff
-           console.error(`${tF} couldn't open a lineup figure`, kk)
+           console.error(`${IH} couldn't open a lineup figure`, SS)
```

#### 139. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1365` → after: `L1365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1365) · [Before (L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1365)

```diff
-           const Ik = null === Fk.VK ? 0 : null !== (Xk = (0, qF.e)(Fk.VK)) && void 0 !== Xk ? Xk : 0;
+           const gS = null === HS.RD ? 0 : null !== (tS = (0, qH.d)(HS.RD)) && void 0 !== tS ? tS : 0;
```

#### 140. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1380` → after: `L1380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1380) · [Before (L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1380)

```diff
-         yk.left = `${Tk}px`, yk.width = `${ik}px`, yk.zIndex = this.order, yk.visibility = this.shown && this.loaded ? "visible" : "hidden"
+         xS.left = `${bS}px`, xS.width = `${XS}px`, xS.zIndex = this.order, xS.visibility = this.shown && this.loaded ? "visible" : "hidden"
```

#### 141. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1432` → after: `L1432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1432) · [Before (L1432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1432)

```diff
-             return (wF(Fk) === LF.gunAimed ? Xk : Tk) * Ik
+             return (KH(HS) === uH.gunAimed ? tS : bS) * gS
```

#### 142. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1466` → after: `L1466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1466) · [Before (L1466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1466)

```diff
-   36759: (kk, Fk, Ik) => {
+   36764: (SS, HS, gS) => {
```

#### 143. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1468-L1470` → after: `L1468-L1471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1468-L1471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1468-L1471) · [Before (L1468-L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1468-L1470)

```diff
-       B: () => ek,
-       D: () => wk,
-       F: () => Jk,
+       C: () => aS,
+       E: () => KS,
+       H: () => jS,
+       K: () => CS,
```

#### 144. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1472` → after: `L1473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1473) · [Before (L1472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1472)

```diff
-       i: () => Tk,
+       h: () => bS,
```

#### 145. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1476-L1479` → after: `L1477-L1479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1477-L1479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1477-L1479) · [Before (L1476-L1479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1476-L1479)

```diff
-       r: () => xk,
-       v: () => ak,
-       w: () => qk,
-       z: () => jk
+       t: () => nS,
+       x: () => qS,
+       y: () => uS
```

#### 146. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1555` → after: `L1555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1555) · [Before (L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1555)

```diff
-       Hq: {
+       Gu: {
```

#### 147. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1576` → after: `L1576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1576) · [Before (L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1576)

```diff
-       (Tk || Xk) && (kk = kk.slice(0, null !== Tk && void 0 !== Tk ? Tk : Fk * Ik));
+       (bS || tS) && (SS = SS.slice(0, null !== bS && void 0 !== bS ? bS : HS * gS));
```

#### 148. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1586` → after: `L1586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1586) · [Before (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1586)

```diff
-   50946: (kk, Fk, Ik) => {
+   50991: (SS, HS, gS) => {
```

#### 149. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1589` → after: `L1589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1589) · [Before (L1589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1589)

```diff
-   50955: (kk, Fk, Ik) => {
+   50994: (SS, HS, gS) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (31kiid.1299b0d6 → fqwnlq.985c8f39)

- **File**: `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (44 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7)

#### 1. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L4)

```diff
-   37026: (kk, Fk, Ik) => {
+   37014: (SS, HS, gS) => {
```

#### 2. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L6-L7)

```diff
-       c: () => tk,
-       e: () => Zk
+       b: () => fS,
+       d: () => kS
```

#### 3. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L9-L11` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L9-L11) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L9-L11)

```diff
-     var Xk = Ik(628),
-       Tk = Ik(41),
-       ik = Ik(36985);
+     var tS = gS(680),
+       bS = gS(45),
+       XS = gS(36973);
```

#### 4. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L24)

```diff
-         qk = await Promise.race([(async () => await Tk.g.setItem(lk, Ik) && Tk.g.setItem(yk, ik))(), (0, Xk.U)(Lk).then((() => !1))]);
+         uS = await Promise.race([(async () => await bS.e.setItem(NS, gS) && bS.e.setItem(xS, XS))(), (0, tS.Q)(IS).then((() => !1))]);
```

#### 5. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L28` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L28)

```diff
-         Gj: qk
+         ia: uS
```

#### 6. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L30)

```diff
-       Tk.m.setItem(ak, tk)
+       bS.h.setItem(qS, fS)
```

#### 7. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L34-L35` → after: `L34-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L34-L35) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L34-L35)

```diff
-       const Fk = Tk.m.getItem(ak);
-       null !== Fk && Tk.m.removeItem(ak);
+       const HS = bS.h.getItem(qS);
+       null !== HS && bS.h.removeItem(qS);
```

#### 8. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L37)

```diff
-         Xk = await Tk.g.getItem(lk),
+         tS = await bS.e.getItem(NS),
```

#### 9. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L41` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L41) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L41)

```diff
-       if (null !== Xk && (tk || ("number" !== typeof Xk || Ik - Xk > qk)) && (Zk = Lk && tk && Fk.Gj ? await Tk.g.getItem(yk) : null, await Promise.all([Tk.g.removeItem(lk), Tk.g.removeItem(yk)])), !Lk) return null;
+       if (null !== tS && (fS || ("number" !== typeof tS || gS - tS > uS)) && (kS = IS && fS && HS.ia ? await bS.e.getItem(xS) : null, await Promise.all([bS.e.removeItem(NS), bS.e.removeItem(xS)])), !IS) return null;
```

#### 10. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L49` → after: `L49-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L49-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L49-L65) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L49)

```diff
-   37021: (kk, Fk, Ik) => {
+   37005: (SS, HS, gS) => {
+     gS.d(HS, {
+       d: () => tS,
+       e: () => XS,
+       f: () => bS
+     });
+     const tS = [9];
+ 
+     function bS(SS) {
+       return tS.includes(SS)
+     }
+ 
+     function XS(SS) {
+       return null !== SS && SS >= 3 && SS < tS[0]
+     }
+   },
+ ... (1 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L52-L68` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L68) · [Before (L52-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L52-L68)

```diff
-       f: () => ik,
-       g: () => Tk
-     });
-     const Xk = [9];
- 
-     function Tk(kk) {
-       return Xk.includes(kk)
-     }
- 
-     function ik(kk) {
-       return null !== kk && kk >= 3 && kk < Xk[0]
-     }
-   },
-   37034: (kk, Fk, Ik) => {
-     Ik.d(Fk, {
-       e: () => Xk,
- ... (1 more removed lines; see GitHub link above)
+       f: () => bS
```

#### 12. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L121` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L121) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L121)

```diff
-   37042: (kk, Fk, Ik) => {
+   37029: (SS, HS, gS) => {
```

#### 13. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L123-L124` → after: `L123-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L123-L124) · [Before (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L123-L124)

```diff
-       b: () => qk,
-       f: () => tk,
+       d: () => uS,
+       g: () => fS,
```

#### 14. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L127-L129` → after: `L127-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L127-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L127-L129) · [Before (L127-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L127-L129)

```diff
-     var Xk = Ik(25),
-       Tk = Ik(34),
-       ik = Ik(37034);
+     var tS = gS(24),
+       bS = gS(31),
+       XS = gS(37023);
```

#### 15. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L136` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L136) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L136)

```diff
-         of ik.i) kk[Fk] = !0;
+         of XS.f) SS[HS] = !0;
```

#### 16. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L142` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L142) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L142)

```diff
-       Tk.g.GL("replayViewer|uiVisibilityChanged")
+       bS.k.cj("replayViewer|uiVisibilityChanged")
```

#### 17. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L153` → after: `L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L153) · [Before (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L153)

```diff
-       }, "nametag" === kk && Xk.d.set({
+       }, "nametag" === SS && tS.b.set({
```

#### 18. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L159` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L159) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L159)

```diff
-       lk = yk(), Xk.d.set({
+       NS = xS(), tS.b.set({
```

#### 19. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L164` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L164) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L164)

```diff
-   60609: (kk, Fk, Ik) => {
+   60676: (SS, HS, gS) => {
```

#### 20. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L169-L174` → after: `L169-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L169-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L169-L174) · [Before (L169-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L169-L174)

```diff
-     var Xk = Ik(36985),
-       Tk = Ik(37026),
-       ik = Ik(37021),
-       yk = Ik(37042),
-       lk = Ik(4797),
-       ak = Ik(42586);
+     var tS = gS(36973),
+       bS = gS(37014),
+       XS = gS(37005),
+       xS = gS(37029),
+       NS = gS(4926),
+       qS = gS(42596);
```

#### 21. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L176` → after: `L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L176) · [Before (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L176)

```diff
-       Lk = new Set(["ke"]);
+       IS = new Set(["bK"]);
```

#### 22. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L180` → after: `L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L180) · [Before (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L180)

```diff
-         this.deps = kk, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this … [truncated]
+         this.deps = SS, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this … [truncated]
```

#### 23. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L189` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L189) · [Before (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L189)

```diff
-         return null !== this.lastView && this.lastView.state !== lk.kd.None
+         return null !== this.lastView && this.lastView.state !== NS.qd.None
```

#### 24. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L219` → after: `L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L219) · [Before (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L219)

```diff
-           tk = await qk.open(kk, (() => (0, Tk.c)(kk, Fk)))
+           fS = await uS.open(SS, (() => (0, bS.b)(SS, HS)))
```

#### 25. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L231` → after: `L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L231) · [Before (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L231)

```diff
-               case lk.ad.ModuleTrap:
+               case NS.ld.ModuleTrap:
```

#### 26. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L233` → after: `L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L233) · [Before (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L233)

```diff
-               case lk.ad.ModuleLoad:
+               case NS.ld.ModuleLoad:
```

#### 27. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L235` → after: `L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L235) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L235)

```diff
-               case lk.ad.TooLarge:
+               case NS.ld.TooLarge:
```

#### 28. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L242` → after: `L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L242) · [Before (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L242)

```diff
-         return this.rejectSave(new Error(Xk.b.saveClosed.text)), this.fileName = null !== (Ik = null !== (ik = Fk.fileName) && void 0 !== ik ? ik : null === (yk = Fk.fileHandle) || void 0 === yk ? void 0 : yk.name) && void 0 !== Ik ? Ik : null, this.fileHandle = null !== (ak = Fk … [truncated]
+         return this.rejectSave(new Error(tS.b.saveClosed.text)), this.fileName = null !== (gS = null !== (XS = HS.fileName) && void 0 !== XS ? XS : null === (xS = HS.fileHandle) || void 0 === xS ? void 0 : xS.name) && void 0 !== gS ? gS : null, this.fileHandle = null !== (qS = HS … [truncated]
```

#### 29. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L250` → after: `L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L250) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L250)

```diff
-         this.holds.has("ke") || this.deps.client.play()
+         this.holds.has("bK") || this.deps.client.play()
```

#### 30. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L256` → after: `L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L256) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L256)

```diff
-         this.isOpen && this.pause(), this.hold("ke")
+         this.isOpen && this.pause(), this.hold("bK")
```

#### 31. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L261` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L261) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L261)

```diff
-         null !== Ik && (Fk || kk < Ik.Dt) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(kk, Fk)
+         null !== gS && (HS || SS < gS.mf) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(SS, HS)
```

#### 32. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L271` → after: `L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L271) · [Before (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L271)

```diff
-         null !== kk && kk.state !== lk.kd.None && this.setCameraMode(ak.d[(ak.d.indexOf(kk.cameraMode) + 1) % ak.d.length])
+         null !== SS && SS.state !== NS.qd.None && this.setCameraMode(qS.c[(qS.c.indexOf(SS.cameraMode) + 1) % qS.c.length])
```

#### 33. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L297` → after: `L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L297) · [Before (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L297)

```diff
-           this.pendingSave = Ik, this.editsAtSave = this.edits, this.deps.client.save((0, ak.h)()).then((kk => {
+           this.pendingSave = gS, this.editsAtSave = this.edits, this.deps.client.save((0, qS.f)()).then((SS => {
```

#### 34. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L300` → after: `L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L300) · [Before (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L300)

```diff
-             this.pendingSave === Ik && this.rejectSave(kk instanceof Error ? kk : new Error(String(kk)))
+             this.pendingSave === gS && this.rejectSave(SS instanceof Error ? SS : new Error(String(SS)))
```

#### 35. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L318` → after: `L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L318) · [Before (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L318)

```diff
-         this.fileHandle = kk, this.fileName = null !== (Ik = null !== (Xk = null === kk || void 0 === kk ? void 0 : kk.name) && void 0 !== Xk ? Xk : Fk) && void 0 !== Ik ? Ik : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this … [truncated]
+         this.fileHandle = SS, this.fileName = null !== (gS = null !== (tS = null === SS || void 0 === SS ? void 0 : SS.name) && void 0 !== tS ? tS : HS) && void 0 !== gS ? gS : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this … [truncated]
```

#### 36. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L327-L328` → after: `L327-L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L327-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L327-L328) · [Before (L327-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L327-L328)

```diff
-         this.lastView = Xk, this.opening && null !== Xk && Xk.state !== lk.kd.None && Xk.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, yk.f)()), this.cropAsked ? (this.cropAsked = !1, null !== Xk && Xk.state === lk.kd.Cropping ? this.crop … [truncated]
-         const ik = 0 === this.settleFrames && 0 === (null !== (kk = null === (Fk = (Ik = this.deps).meshPending) || void 0 === Fk ? void 0 : Fk.call(Ik)) && void 0 !== kk ? kk : 0);
+         this.lastView = tS, this.opening && null !== tS && tS.state !== NS.qd.None && tS.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, xS.g)()), this.cropAsked ? (this.cropAsked = !1, null !== tS && tS.state === NS.qd.Cropping ? this.crop … [truncated]
+         const XS = 0 === this.settleFrames && 0 === (null !== (SS = null === (HS = (gS = this.deps).meshPending) || void 0 === HS ? void 0 : HS.call(gS)) && void 0 !== SS ? SS : 0);
```

#### 37. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L335` → after: `L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L335) · [Before (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L335)

```diff
-         (0, yk.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
+         (0, xS.g)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
```

#### 38. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L339` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L339) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L339)

```diff
-           case lk.ad.TooLarge:
+           case NS.ld.TooLarge:
```

#### 39. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L341-L342` → after: `L341-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L341-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L341-L342) · [Before (L341-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L341-L342)

```diff
-           case lk.ad.Open:
-           case lk.ad.NothingStaged: {
+           case NS.ld.Open:
+           case NS.ld.NothingStaged: {
```

#### 40. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L344` → after: `L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L344) · [Before (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L344)

```diff
-             const Fk = (0, ik.f)(kk.version) ? Xk.b.replayTooOld : Xk.b.cantOpen;
+             const HS = (0, XS.e)(SS.version) ? tS.b.replayTooOld : tS.b.cantOpen;
```

#### 41. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L348-L349` → after: `L348-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L348-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L348-L349) · [Before (L348-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L348-L349)

```diff
-           case lk.ad.Crop:
-             if (kk.code === lk._c.Busy) {
+           case NS.ld.Crop:
+             if (SS.code === NS.jd.Busy) {
```

#### 42. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L359-L362` → after: `L359-L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L359-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L359-L362) · [Before (L359-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L359-L362)

```diff
-           case lk.ad.ModuleTrap:
-           case lk.ad.ModuleLoad:
-           case lk.ad.Port:
-             this.moduleEnded(kk.reason === lk.ad.ModuleTrap ? Xk.b.coreStopped : Xk.b.cantOpen);
+           case NS.ld.ModuleTrap:
+           case NS.ld.ModuleLoad:
+           case NS.ld.Port:
+             this.moduleEnded(SS.reason === NS.ld.ModuleTrap ? tS.b.coreStopped : tS.b.cantOpen);
```

#### 43. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L364` → after: `L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L364) · [Before (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L364)

```diff
-           case lk.ad.NotLive:
+           case NS.ld.NotLive:
```

#### 44. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L368` → after: `L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L368) · [Before (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L368)

```diff
-             console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${kk.reason})`), this.seekAsked = !1, this.release("seek")
+             console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${SS.reason})`), this.seekAsked = !1, this.release("seek")
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (31kiid.1299b0d6 → fqwnlq.985c8f39)

- **File**: `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (117 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989)

#### 1. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L4)

```diff
-   60620: (kk, Fk, Ik) => {
+   60692: (SS, HS, gS) => {
```

#### 2. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L13-L16` → after: `L13-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L13-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L13-L16) · [Before (L13-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L13-L16)

```diff
-     var Xk = Ik(41060),
-       Tk = Ik(1886),
-       ik = Ik(2059),
-       yk = Ik(3110);
+     var tS = gS(41064),
+       bS = gS(2073),
+       XS = gS(2242),
+       xS = gS(3338);
```

#### 3. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L19)

```diff
-       (0, ik.t)((() => {
+       (0, XS.q)((() => {
```

#### 4. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L25` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L25) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L25)

```diff
-       const Ik = (0, ik.s)();
+       const gS = (0, XS.p)();
```

#### 5. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L35)

```diff
-       return `${Ik.p}${kk}${encodeURIComponent(Fk)}.png`
+       return `${gS.p}${SS}${encodeURIComponent(HS)}.png`
```

#### 6. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L41-L43` → after: `L41-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L41-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L41-L43) · [Before (L41-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L41-L43)

```diff
-       return (0, Xk.e)(kk) ? null !== (Fk = function(kk) {
-         return ak(kk, yk.c.ITEM)
-       }(kk)) && void 0 !== Fk ? Fk : qk(Ik, kk) : null
+       return (0, tS.c)(SS) ? null !== (HS = function(SS) {
+         return qS(SS, xS.e.ITEM)
+       }(SS)) && void 0 !== HS ? HS : uS(gS, SS) : null
```

#### 7. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L48` → after: `L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L48) · [Before (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L48)

```diff
-         return Ik(60627)(`./${kk}.png`)
+         return gS(60700)(`./${SS}.png`)
```

#### 8. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L55` → after: `L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L55) · [Before (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L55)

```diff
-       return Ik(61194)
+       return gS(61236)
```

#### 9. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L62-L63` → after: `L62-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L62-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L62-L63) · [Before (L62-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L62-L63)

```diff
-         return ak(kk, yk.c.BLOCK)
-       }(kk)) && void 0 !== Fk ? Fk : qk(Ik, kk)
+         return qS(SS, xS.e.BLOCK)
+       }(SS)) && void 0 !== HS ? HS : uS(gS, SS)
```

#### 10. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L68` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L68) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L68)

```diff
-         return Ik(61199)(`./${kk}.png`)
+         return gS(61243)(`./${SS}.png`)
```

#### 11. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L74` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L74) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L74)

```diff
-   60627: (kk, Fk, Ik) => {
+   60700: (SS, HS, gS) => {
```

#### 12. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L76-L171` → after: `L76-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L76-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L76-L171) · [Before (L76-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L76-L171)

```diff
-       "./Air Walk.png": 60633,
-       "./Antlers Bonus.png": 60637,
-       "./Arrow Damage Enchantment.png": 60643,
-       "./Arrow Speed Enchantment.png": 60647,
-       "./Attack Speed Enchantment.png": 60656,
-       "./Blindness.png": 60665,
-       "./Boating.png": 60674,
-       "./Bounciness.png": 60683,
-       "./Brain Rot.png": 60691,
-       "./Break Speed Enchantment.png": 60696,
-       "./Bunny Hop.png": 60701,
-       "./Critical Damage Enchantment.png": 60704,
-       "./Cross.png": 60712,
-       "./Damage Enchantment.png": 60717,
-       "./Damage Reduction.png": 60722,
-       "./Damage.png": 60727,
- ... (80 more removed lines; see GitHub link above)
+       "./Air Walk.png": 60707,
+       "./Antlers Bonus.png": 60711,
+       "./Arrow Damage Enchantment.png": 60713,
+       "./Arrow Speed Enchantment.png": 60717,
+       "./Attack Speed Enchantment.png": 60720,
+       "./Blindness.png": 60722,
+       "./Boating.png": 60730,
+       "./Bounciness.png": 60736,
+       "./Brain Rot.png": 60745,
+       "./Break Speed Enchantment.png": 60748,
+       "./Bunny Hop.png": 60750,
+       "./Critical Damage Enchantment.png": 60758,
+       "./Cross.png": 60767,
+       "./Damage Enchantment.png": 60776,
+       "./Damage Reduction.png": 60782,
+       "./Damage.png": 60790,
+ ... (80 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L188-L190` → after: `L188-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L188-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L188-L190) · [Before (L188-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L188-L190)

```diff
-     }, Tk.resolve = ik, kk.exports = Tk, Tk.id = 60627
-   },
-   61199: (kk, Fk, Ik) => {
+     }, bS.resolve = XS, SS.exports = bS, bS.id = 60700
+   },
+   61243: (SS, HS, gS) => {
```

#### 14. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L192-L204` → after: `L192-L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L192-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L192-L204) · [Before (L192-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L192-L204)

```diff
-       "./arrow.png": 61202,
-       "./bubble.png": 61207,
-       "./critical_hit.png": 61213,
-       "./drift.png": 61218,
-       "./effect_5.png": 61220,
-       "./fishingFishSilhouette.png": 61226,
-       "./generic_2.png": 61229,
-       "./glint.png": 61236,
-       "./heart.png": 61243,
-       "./scary_face.png": 61248,
-       "./soul_0.png": 61250,
-       "./square_particle.png": 61253,
-       "./z-particle.png": 61259
+       "./arrow.png": 61250,
+       "./bubble.png": 61252,
+       "./critical_hit.png": 61261,
+       "./drift.png": 61264,
+       "./effect_5.png": 61266,
+       "./fishingFishSilhouette.png": 61272,
+       "./generic_2.png": 61276,
+       "./glint.png": 61278,
+       "./heart.png": 61280,
+       "./scary_face.png": 61282,
+       "./soul_0.png": 61287,
+       "./square_particle.png": 61291,
+       "./z-particle.png": 61300
```

#### 15. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L221-L223` → after: `L221-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L221-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L221-L223) · [Before (L221-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L221-L223)

```diff
-     }, Tk.resolve = ik, kk.exports = Tk, Tk.id = 61199
-   },
-   60633: (kk, Fk, Ik) => {
+     }, bS.resolve = XS, SS.exports = bS, bS.id = 61243
+   },
+   60707: (SS, HS, gS) => {
```

#### 16. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L226` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L226) · [Before (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L226)

```diff
-   60637: (kk, Fk, Ik) => {
+   60711: (SS, HS, gS) => {
```

#### 17. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L229` → after: `L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L229) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L229)

```diff
-   60643: (kk, Fk, Ik) => {
+   60713: (SS, HS, gS) => {
```

#### 18. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L232` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L232) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L232)

```diff
-   60647: (kk, Fk, Ik) => {
+   60717: (SS, HS, gS) => {
```

#### 19. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L235` → after: `L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L235) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L235)

```diff
-   60656: (kk, Fk, Ik) => {
+   60720: (SS, HS, gS) => {
```

#### 20. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L238` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L238) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L238)

```diff
-   60665: (kk, Fk, Ik) => {
+   60722: (SS, HS, gS) => {
```

#### 21. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L241` → after: `L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L241) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L241)

```diff
-   60674: (kk, Fk, Ik) => {
+   60730: (SS, HS, gS) => {
```

#### 22. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L244` → after: `L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L244) · [Before (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L244)

```diff
-   60683: (kk, Fk, Ik) => {
+   60736: (SS, HS, gS) => {
```

#### 23. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L247` → after: `L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L247) · [Before (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L247)

```diff
-   60691: (kk, Fk, Ik) => {
+   60745: (SS, HS, gS) => {
```

#### 24. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L250` → after: `L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L250) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L250)

```diff
-   60696: (kk, Fk, Ik) => {
+   60748: (SS, HS, gS) => {
```

#### 25. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L253` → after: `L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L253) · [Before (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L253)

```diff
-   60701: (kk, Fk, Ik) => {
+   60750: (SS, HS, gS) => {
```

#### 26. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L256` → after: `L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L256) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L256)

```diff
-   60704: (kk, Fk, Ik) => {
+   60758: (SS, HS, gS) => {
```

#### 27. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L259` → after: `L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L259) · [Before (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L259)

```diff
-   60712: (kk, Fk, Ik) => {
+   60767: (SS, HS, gS) => {
```

#### 28. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L262` → after: `L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L262) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L262)

```diff
-   60717: (kk, Fk, Ik) => {
+   60776: (SS, HS, gS) => {
```

#### 29. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L265` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L265) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L265)

```diff
-   60722: (kk, Fk, Ik) => {
+   60782: (SS, HS, gS) => {
```

#### 30. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L268` → after: `L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L268) · [Before (L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L268)

```diff
-   60727: (kk, Fk, Ik) => {
+   60790: (SS, HS, gS) => {
```

#### 31. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L271` → after: `L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L271) · [Before (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L271)

```diff
-   60730: (kk, Fk, Ik) => {
+   60798: (SS, HS, gS) => {
```

#### 32. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L274` → after: `L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L274) · [Before (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L274)

```diff
-   60733: (kk, Fk, Ik) => {
+   60800: (SS, HS, gS) => {
```

#### 33. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L277` → after: `L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L277) · [Before (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L277)

```diff
-   60742: (kk, Fk, Ik) => {
+   60806: (SS, HS, gS) => {
```

#### 34. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L280` → after: `L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L280) · [Before (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L280)

```diff
-   60745: (kk, Fk, Ik) => {
+   60811: (SS, HS, gS) => {
```

#### 35. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L283` → after: `L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L283) · [Before (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L283)

```diff
-   60752: (kk, Fk, Ik) => {
+   60817: (SS, HS, gS) => {
```

#### 36. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L286` → after: `L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L286) · [Before (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L286)

```diff
-   60755: (kk, Fk, Ik) => {
+   60819: (SS, HS, gS) => {
```

#### 37. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L289` → after: `L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L289) · [Before (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L289)

```diff
-   60760: (kk, Fk, Ik) => {
+   60823: (SS, HS, gS) => {
```

#### 38. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L292` → after: `L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L292) · [Before (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L292)

```diff
-   60765: (kk, Fk, Ik) => {
+   60826: (SS, HS, gS) => {
```

#### 39. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L295` → after: `L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L295) · [Before (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L295)

```diff
-   60771: (kk, Fk, Ik) => {
+   60835: (SS, HS, gS) => {
```

#### 40. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L298` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L298) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L298)

```diff
-   60779: (kk, Fk, Ik) => {
+   60843: (SS, HS, gS) => {
```

#### 41. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L301` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L301) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L301)

```diff
-   60786: (kk, Fk, Ik) => {
+   60850: (SS, HS, gS) => {
```

#### 42. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L304` → after: `L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L304) · [Before (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L304)

```diff
-   60790: (kk, Fk, Ik) => {
+   60856: (SS, HS, gS) => {
```

#### 43. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L307` → after: `L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L307) · [Before (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L307)

```diff
-   60795: (kk, Fk, Ik) => {
+   60864: (SS, HS, gS) => {
```

#### 44. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L310` → after: `L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L310) · [Before (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L310)

```diff
-   60798: (kk, Fk, Ik) => {
+   60872: (SS, HS, gS) => {
```

#### 45. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L313` → after: `L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L313) · [Before (L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L313)

```diff
-   60807: (kk, Fk, Ik) => {
+   60874: (SS, HS, gS) => {
```

#### 46. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L316` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L316) · [Before (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L316)

```diff
-   60813: (kk, Fk, Ik) => {
+   60882: (SS, HS, gS) => {
```

#### 47. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L319` → after: `L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L319) · [Before (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L319)

```diff
-   60815: (kk, Fk, Ik) => {
+   60890: (SS, HS, gS) => {
```

#### 48. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L322` → after: `L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L322) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L322)

```diff
-   60821: (kk, Fk, Ik) => {
+   60894: (SS, HS, gS) => {
```

#### 49. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L325` → after: `L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L325) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L325)

```diff
-   60830: (kk, Fk, Ik) => {
+   60903: (SS, HS, gS) => {
```

#### 50. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L328` → after: `L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L328) · [Before (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L328)

```diff
-   60834: (kk, Fk, Ik) => {
+   60906: (SS, HS, gS) => {
```

#### 51. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L331` → after: `L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L331) · [Before (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L331)

```diff
-   60841: (kk, Fk, Ik) => {
+   60909: (SS, HS, gS) => {
```

#### 52. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L334` → after: `L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L334) · [Before (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L334)

```diff
-   60850: (kk, Fk, Ik) => {
+   60916: (SS, HS, gS) => {
```

#### 53. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L337` → after: `L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L337) · [Before (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L337)

```diff
-   60852: (kk, Fk, Ik) => {
+   60921: (SS, HS, gS) => {
```

#### 54. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L340` → after: `L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L340) · [Before (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L340)

```diff
-   60854: (kk, Fk, Ik) => {
+   60923: (SS, HS, gS) => {
```

#### 55. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L343` → after: `L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L343) · [Before (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L343)

```diff
-   60859: (kk, Fk, Ik) => {
+   60930: (SS, HS, gS) => {
```

#### 56. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L346` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L346) · [Before (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L346)

```diff
-   60868: (kk, Fk, Ik) => {
+   60932: (SS, HS, gS) => {
```

#### 57. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L349` → after: `L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L349) · [Before (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L349)

```diff
-   60876: (kk, Fk, Ik) => {
+   60941: (SS, HS, gS) => {
```

#### 58. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L352` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L352) · [Before (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L352)

```diff
-   60883: (kk, Fk, Ik) => {
+   60946: (SS, HS, gS) => {
```

#### 59. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L355` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L355) · [Before (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L355)

```diff
-   60891: (kk, Fk, Ik) => {
+   60949: (SS, HS, gS) => {
```

#### 60. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L358` → after: `L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L358) · [Before (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L358)

```diff
-   60895: (kk, Fk, Ik) => {
+   60951: (SS, HS, gS) => {
```

#### 61. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L361` → after: `L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L361) · [Before (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L361)

```diff
-   60900: (kk, Fk, Ik) => {
+   60954: (SS, HS, gS) => {
```

#### 62. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L364` → after: `L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L364) · [Before (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L364)

```diff
-   60904: (kk, Fk, Ik) => {
+   60956: (SS, HS, gS) => {
```

#### 63. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L367` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L367) · [Before (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L367)

```diff
-   60907: (kk, Fk, Ik) => {
+   60965: (SS, HS, gS) => {
```

#### 64. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L370` → after: `L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L370) · [Before (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L370)

```diff
-   60912: (kk, Fk, Ik) => {
+   60971: (SS, HS, gS) => {
```

#### 65. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L373` → after: `L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L373) · [Before (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L373)

```diff
-   60919: (kk, Fk, Ik) => {
+   60980: (SS, HS, gS) => {
```

#### 66. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L376` → after: `L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L376) · [Before (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L376)

```diff
-   60926: (kk, Fk, Ik) => {
+   60985: (SS, HS, gS) => {
```

#### 67. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L379` → after: `L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L379) · [Before (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L379)

```diff
-   60931: (kk, Fk, Ik) => {
+   60992: (SS, HS, gS) => {
```

#### 68. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L382` → after: `L382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L382) · [Before (L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L382)

```diff
-   60939: (kk, Fk, Ik) => {
+   60996: (SS, HS, gS) => {
```

#### 69. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L385` → after: `L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L385) · [Before (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L385)

```diff
-   60946: (kk, Fk, Ik) => {
+   61002: (SS, HS, gS) => {
```

#### 70. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L388` → after: `L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L388) · [Before (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L388)

```diff
-   60950: (kk, Fk, Ik) => {
+   61005: (SS, HS, gS) => {
```

#### 71. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L391` → after: `L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L391) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L391)

```diff
-   60954: (kk, Fk, Ik) => {
+   61013: (SS, HS, gS) => {
```

#### 72. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L394` → after: `L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L394) · [Before (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L394)

```diff
-   60962: (kk, Fk, Ik) => {
+   61021: (SS, HS, gS) => {
```

#### 73. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L397` → after: `L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L397) · [Before (L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L397)

```diff
-   60970: (kk, Fk, Ik) => {
+   61029: (SS, HS, gS) => {
```

#### 74. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L400` → after: `L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L400) · [Before (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L400)

```diff
-   60979: (kk, Fk, Ik) => {
+   61033: (SS, HS, gS) => {
```

#### 75. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L403` → after: `L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L403) · [Before (L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L403)

```diff
-   60986: (kk, Fk, Ik) => {
+   61042: (SS, HS, gS) => {
```

#### 76. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L406` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L406) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L406)

```diff
-   60992: (kk, Fk, Ik) => {
+   61045: (SS, HS, gS) => {
```

#### 77. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L409` → after: `L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L409) · [Before (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L409)

```diff
-   60998: (kk, Fk, Ik) => {
+   61050: (SS, HS, gS) => {
```

#### 78. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L412` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L412) · [Before (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L412)

```diff
-   61007: (kk, Fk, Ik) => {
+   61053: (SS, HS, gS) => {
```

#### 79. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L415` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L415) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L415)

```diff
-   61013: (kk, Fk, Ik) => {
+   61062: (SS, HS, gS) => {
```

#### 80. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L418` → after: `L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L418) · [Before (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L418)

```diff
-   61022: (kk, Fk, Ik) => {
+   61065: (SS, HS, gS) => {
```

#### 81. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L421` → after: `L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L421) · [Before (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L421)

```diff
-   61030: (kk, Fk, Ik) => {
+   61072: (SS, HS, gS) => {
```

#### 82. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L424` → after: `L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L424) · [Before (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L424)

```diff
-   61037: (kk, Fk, Ik) => {
+   61078: (SS, HS, gS) => {
```

#### 83. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L427` → after: `L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L427) · [Before (L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L427)

```diff
-   61040: (kk, Fk, Ik) => {
+   61082: (SS, HS, gS) => {
```

#### 84. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L430` → after: `L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L430) · [Before (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L430)

```diff
-   61044: (kk, Fk, Ik) => {
+   61091: (SS, HS, gS) => {
```

#### 85. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L433` → after: `L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L433) · [Before (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L433)

```diff
-   61051: (kk, Fk, Ik) => {
+   61095: (SS, HS, gS) => {
```

#### 86. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L436` → after: `L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L436) · [Before (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L436)

```diff
-   61059: (kk, Fk, Ik) => {
+   61102: (SS, HS, gS) => {
```

#### 87. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L439` → after: `L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L439) · [Before (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L439)

```diff
-   61066: (kk, Fk, Ik) => {
+   61106: (SS, HS, gS) => {
```

#### 88. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L442` → after: `L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L442) · [Before (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L442)

```diff
-   61074: (kk, Fk, Ik) => {
+   61113: (SS, HS, gS) => {
```

#### 89. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L445` → after: `L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L445) · [Before (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L445)

```diff
-   61079: (kk, Fk, Ik) => {
+   61116: (SS, HS, gS) => {
```

#### 90. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L448` → after: `L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L448) · [Before (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L448)

```diff
-   61084: (kk, Fk, Ik) => {
+   61125: (SS, HS, gS) => {
```

#### 91. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L451` → after: `L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L451) · [Before (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L451)

```diff
-   61090: (kk, Fk, Ik) => {
+   61129: (SS, HS, gS) => {
```

#### 92. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L454` → after: `L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L454) · [Before (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L454)

```diff
-   61092: (kk, Fk, Ik) => {
+   61134: (SS, HS, gS) => {
```

#### 93. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L457` → after: `L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L457) · [Before (L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L457)

```diff
-   61099: (kk, Fk, Ik) => {
+   61141: (SS, HS, gS) => {
```

#### 94. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L460` → after: `L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L460) · [Before (L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L460)

```diff
-   61103: (kk, Fk, Ik) => {
+   61146: (SS, HS, gS) => {
```

#### 95. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L463` → after: `L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L463) · [Before (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L463)

```diff
-   61106: (kk, Fk, Ik) => {
+   61148: (SS, HS, gS) => {
```

#### 96. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L466` → after: `L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L466) · [Before (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L466)

```diff
-   61108: (kk, Fk, Ik) => {
+   61154: (SS, HS, gS) => {
```

#### 97. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L469` → after: `L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L469) · [Before (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L469)

```diff
-   61114: (kk, Fk, Ik) => {
+   61159: (SS, HS, gS) => {
```

#### 98. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L472` → after: `L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L472) · [Before (L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L472)

```diff
-   61123: (kk, Fk, Ik) => {
+   61165: (SS, HS, gS) => {
```

#### 99. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L475` → after: `L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L475) · [Before (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L475)

```diff
-   61131: (kk, Fk, Ik) => {
+   61170: (SS, HS, gS) => {
```

#### 100. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L478` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L478) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L478)

```diff
-   61133: (kk, Fk, Ik) => {
+   61174: (SS, HS, gS) => {
```

#### 101. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L481` → after: `L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L481) · [Before (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L481)

```diff
-   61138: (kk, Fk, Ik) => {
+   61180: (SS, HS, gS) => {
```

#### 102. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L484` → after: `L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L484) · [Before (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L484)

```diff
-   61147: (kk, Fk, Ik) => {
+   61188: (SS, HS, gS) => {
```

#### 103. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L487` → after: `L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L487) · [Before (L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L487)

```diff
-   61151: (kk, Fk, Ik) => {
+   61194: (SS, HS, gS) => {
```

#### 104. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L490` → after: `L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L490) · [Before (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L490)

```diff
-   61157: (kk, Fk, Ik) => {
+   61199: (SS, HS, gS) => {
```

#### 105. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L493` → after: `L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L493) · [Before (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L493)

```diff
-   61166: (kk, Fk, Ik) => {
+   61205: (SS, HS, gS) => {
```

#### 106. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L496` → after: `L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L496) · [Before (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L496)

```diff
-   61173: (kk, Fk, Ik) => {
+   61211: (SS, HS, gS) => {
```

#### 107. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L499` → after: `L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L499) · [Before (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L499)

```diff
-   61176: (kk, Fk, Ik) => {
+   61219: (SS, HS, gS) => {
```

#### 108. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L502` → after: `L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L502) · [Before (L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L502)

```diff
-   61179: (kk, Fk, Ik) => {
+   61222: (SS, HS, gS) => {
```
