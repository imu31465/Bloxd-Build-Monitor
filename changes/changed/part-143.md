# Changed — Bundle Modifications Report (Part 143 / 154)

- **Updated at**: `2026-11-28T07:18 JST`
- **Part**: `143 / 154` (**415** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 142](part-142.md) · [Part 144 →](part-144.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmClientGame.js` (1yqdn.8419f1e1 → 4udp6d.2845de07 · continued)

- **File**: `bundles/bloxd.io/chunks/js/wasmClientGame.js` (997 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b)

#### 496. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4580` → after: `L4541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4541) · [Before (L4580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4580)

```diff
-         (0 !== OW || this.hooksSet) && ((0, AW.Ff)(iW, 0, OW) ? this.hooksSet = 0 !== OW : this.onError(new Error("SetHooks didn't fit the command ring")))
+         (0 !== GR || this.hooksSet) && ((0, eR.Lf)(JR, 0, GR) ? this.hooksSet = 0 !== GR : this.onError(new Error("SetHooks didn't fit the command ring")))
```

#### 497. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4589` → after: `L4550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4550) · [Before (L4589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4589)

```diff
-         iW !== this.promptWatchSent && WW && !this.stopped() && (0, AW.Zf)(WW, 0, WE[iW]) && (this.promptWatchSent = iW)
+         JR !== this.promptWatchSent && RR && !this.stopped() && (0, eR.gg)(RR, 0, Ty[JR]) && (this.promptWatchSent = JR)
```

#### 498. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4593` → after: `L4554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4554) · [Before (L4593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4593)

```diff
-         iW && WW !== this.writtenPublicLobby && ((0, AW.Of)(iW, 0, WW ? 1 : 0) ? this.writtenPublicLobby = WW : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
+         JR && RR !== this.writtenPublicLobby && ((0, eR.Vf)(JR, 0, RR ? 1 : 0) ? this.writtenPublicLobby = RR : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
```

#### 499. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4597` → after: `L4558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4558) · [Before (L4597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4597)

```diff
-         iW && ((0, AW.If)(iW, 0, null === WW ? 0 : 1, null === WW ? Fm : zm.encode(WW)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
+         JR && ((0, eR.Mf)(JR, 0, null === RR ? 0 : 1, null === RR ? Qy : ky.encode(RR)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
```

#### 500. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4607` → after: `L4568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4568) · [Before (L4607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4607)

```diff
-             this.wZ(OW)
+             this.fK(GR)
```

#### 501. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4613` → after: `L4574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4574) · [Before (L4613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4613)

```diff
-           PW.l.iZ(WW, iW)
+           ZR.n.JK(RR, JR)
```

#### 502. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4620` → after: `L4581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4581) · [Before (L4620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4620)

```diff
-           this.wZ(WW)
+           this.fK(RR)
```

#### 503. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4627` → after: `L4588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4588) · [Before (L4627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4627)

```diff
-           this.wZ(WW)
+           this.fK(RR)
```

#### 504. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4632` → after: `L4593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4593) · [Before (L4632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4632)

```diff
-         this.sessionLive = !1, this.localPhysicsType = JW.p.DEFAULT, this.thirdPersonWanted = !1, this.thirdPersonHeld = !1;
+         this.sessionLive = !1, this.localPhysicsType = pR.k.DEFAULT, this.thirdPersonWanted = !1, this.thirdPersonHeld = !1;
```

#### 505. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4662` → after: `L4623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4623) · [Before (L4662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4662)

```diff
-         void 0 !== iW && this.wZ(iW)
+         void 0 !== JR && this.fK(JR)
```

#### 506. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4672` → after: `L4633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4633) · [Before (L4672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4672)

```diff
-             OW ? this.onError(EW) : this.wZ(EW)
+             GR ? this.onError(tR) : this.fK(tR)
```

#### 507. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4680` → after: `L4641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4641) · [Before (L4680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4680)

```diff
-           this.wZ(iW)
+           this.fK(JR)
```

#### 508. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4686` → after: `L4647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4647) · [Before (L4686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4686)

```diff
-       return WW === AW.jd ? null : String(WW)
+       return RR === eR.Rc ? null : String(RR)
```

#### 509. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4690` → after: `L4651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4651) · [Before (L4690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4690)

```diff
-       WW.hZ(xW.Id)
+       RR.gK(wR.zd)
```

#### 510. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4714-L4717` → after: `L4675-L4678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4675-L4678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4675-L4678) · [Before (L4714-L4717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4714-L4717)

```diff
-     var PE = OW(37569),
-       LE = OW(5615),
-       cE = OW(37559),
-       wE = OW(37597);
+     var yt = GR(37485),
+       tt = GR(5742),
+       ut = GR(37470),
+       Zt = GR(37518);
```

#### 511. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4721` → after: `L4682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4682) · [Before (L4721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4721)

```diff
-           src: [...(0, cE.u)(WW).src],
+           src: [...(0, ut.v)(RR).src],
```

#### 512. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4754-L4755` → after: `L4715-L4716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4715-L4716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4715-L4716) · [Before (L4754-L4755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4754-L4755)

```diff
-     var AE = OW(37838),
-       bE = OW(40442);
+     var Kt = GR(37766),
+       wt = GR(40491);
```

#### 513. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4764` → after: `L4725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4725) · [Before (L4764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4764)

```diff
-       return UE ??= new bE.c(new AE.e(kE)), UE
+       return et ??= new wt.d(new Kt.g(Lt)), et
```

#### 514. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4777-L4782` → after: `L4738-L4743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4738-L4743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4738-L4743) · [Before (L4777-L4782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4777-L4782)

```diff
-     var SE = OW(5807),
-       YE = OW(5766),
-       yE = OW(40469),
-       TE = OW(42533),
-       JE = OW(4454);
-     const hE = Object.entries(AW.sc).reduce(((WW, iW) => {
+     var At = GR(5953),
+       Ct = GR(5898),
+       Xt = GR(40522),
+       Mt = GR(42577),
+       Bt = GR(4555);
+     const lt = Object.entries(eR.ac).reduce(((RR, JR) => {
```

#### 515. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4789` → after: `L4750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4750) · [Before (L4789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4789)

```diff
-       return 0 !== ((null !== (OW = WW.itemFlags[iW]) && void 0 !== OW ? OW : 0) & AW.Qc.Stackable)
+       return 0 !== ((null !== (GR = RR.itemFlags[JR]) && void 0 !== GR ? GR : 0) & eR.tc.Stackable)
```

#### 516. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4803` → after: `L4764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4764) · [Before (L4803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4803)

```diff
-           return OW === AW.Uc ? void 0 : OW
+           return GR === eR.vc ? void 0 : GR
```

#### 517. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4807` → after: `L4768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4768) · [Before (L4807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4807)

```diff
-           const mW = null !== (OW = WW.itemHarvests[iW]) && void 0 !== OW ? OW : 0;
+           const yR = null !== (GR = RR.itemHarvests[JR]) && void 0 !== GR ? GR : 0;
```

#### 518. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4812-L4813` → after: `L4773-L4774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4773-L4774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4773-L4774) · [Before (L4812-L4813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4812-L4813)

```diff
-           const EW = null !== (OW = WW.itemLevels[iW]) && void 0 !== OW ? OW : AW.Uc;
-           return EW !== AW.Uc ? EW : null !== (mW = (0, km.harvestsNullLevelOf)(iW)) && void 0 !== mW ? mW : void 0
+           const tR = null !== (GR = RR.itemLevels[JR]) && void 0 !== GR ? GR : eR.vc;
+           return tR !== eR.vc ? tR : null !== (yR = (0, Ly.harvestsNullLevelOf)(JR)) && void 0 !== yR ? yR : void 0
```

#### 519. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4834` → after: `L4795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4795) · [Before (L4834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4834)

```diff
-           if (void 0 === iW) throw new Error(`No item is named ${WW}, an item's root`);
+           if (void 0 === JR) throw new Error(`No item is named ${RR}, an item's root`);
```

#### 520. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4845-L4852` → after: `L4806-L4813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4806-L4813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4806-L4813) · [Before (L4845-L4852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4845-L4852)

```diff
-           blockFlags: oE(EW, AW.J.BYTES, AW.J.flags),
-           blockHarvestTypes: oE(EW, AW.J.BYTES, AW.J.harvestType),
-           blockHarvestLevels: oE(EW, AW.J.BYTES, AW.J.harvestLevel),
-           blockAttachedTops: dE(EW, AW.J.BYTES, AW.J.attachedTop),
-           itemFlags: oE(NW, AW.Tc.BYTES, AW.Tc.flags),
-           itemHarvests: oE(NW, AW.Tc.BYTES, AW.Tc.harvests),
-           itemLevels: oE(NW, AW.Tc.BYTES, AW.Tc.level)
-         }, (0, JE.h)(Object.freeze(mW)), (0, TE.h)()
+           blockFlags: vt(tR, eR.z.BYTES, eR.z.flags),
+           blockHarvestTypes: vt(tR, eR.z.BYTES, eR.z.harvestType),
+           blockHarvestLevels: vt(tR, eR.z.BYTES, eR.z.harvestLevel),
+           blockAttachedTops: Ot(tR, eR.z.BYTES, eR.z.attachedTop),
+           itemFlags: vt(uR, eR.uc.BYTES, eR.uc.flags),
+           itemHarvests: vt(uR, eR.uc.BYTES, eR.uc.harvests),
+           itemLevels: vt(uR, eR.uc.BYTES, eR.uc.level)
+         }, (0, Bt.i)(Object.freeze(yR)), (0, Mt.g)()
```

#### 521. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4855` → after: `L4816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4816) · [Before (L4855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4855)

```diff
-         if ("number" === typeof WW) return void 0 === (0, JE.d)(WW) ? void 0 : WW;
+         if ("number" === typeof RR) return void 0 === (0, Bt.c)(RR) ? void 0 : RR;
```

#### 522. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4857` → after: `L4818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4818) · [Before (L4857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4857)

```diff
-         return void 0 === iW && nE.test(WW) ? void 0 === (0, JE.d)(+WW) ? void 0 : +WW : iW
+         return void 0 === JR && gt.test(RR) ? void 0 === (0, Bt.c)(+RR) ? void 0 : +RR : JR
```

#### 523. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4860` → after: `L4821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4821) · [Before (L4860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4860)

```diff
-         if (!WW || WW === SE.b) return SE.f;
+         if (!RR || RR === At.b) return At.d;
```

#### 524. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4862` → after: `L4823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4823) · [Before (L4862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4862)

```diff
-         if (void 0 === iW) throw new Error(`Item ${WW} not found in registry`);
+         if (void 0 === JR) throw new Error(`Item ${RR} not found in registry`);
```

#### 525. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4866` → after: `L4827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4827) · [Before (L4866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4866)

```diff
-         return 0 !== WW && void 0 !== (0, JE.d)(WW) ? this.metaOf(WW).rootId : WW
+         return 0 !== RR && void 0 !== (0, Bt.c)(RR) ? this.metaOf(RR).rootId : RR
```

#### 526. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4869` → after: `L4830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4830) · [Before (L4869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4869)

```diff
-         return this.metas[WW] ??= (0, YE.l)((0, JE.d)(WW), WW, this.rootIdOf, (0, km.rootMetaDescOf)(WW))
+         return this.metas[RR] ??= (0, Ct.l)((0, Bt.c)(RR), RR, this.rootIdOf, (0, Ly.rootMetaDescOf)(RR))
```

#### 527. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4874` → after: `L4835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4835) · [Before (L4874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4874)

```diff
-         if (void 0 === iW) throw new Error(`Invalid block name. You sent ${WW}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
+         if (void 0 === JR) throw new Error(`Invalid block name. You sent ${RR}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
```

#### 528. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4880-L4881` → after: `L4841-L4842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4841-L4842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4841-L4842) · [Before (L4880-L4881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4880-L4881)

```diff
-         if (void 0 === iW) throw new Error(`Item ${WW} not found in registry`);
-         return (0, JE.d)(iW)
+         if (void 0 === JR) throw new Error(`Item ${RR} not found in registry`);
+         return (0, Bt.c)(JR)
```

#### 529. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4890` → after: `L4851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4851) · [Before (L4890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4890)

```diff
-           OW = void 0 !== mW && this.isBlockId(mW) && (0, km.rootMetaDescOf)(mW) === WW ? mW : void 0
+           GR = void 0 !== yR && this.isBlockId(yR) && (0, Ly.rootMetaDescOf)(yR) === RR ? yR : void 0
```

#### 530. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4893` → after: `L4854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4854) · [Before (L4893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4893)

```diff
-         if (!iW) throw new Error(`Invalid block name. You sent ${WW}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
+         if (!JR) throw new Error(`Invalid block name. You sent ${RR}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
```

#### 531. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4900` → after: `L4861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4861) · [Before (L4900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4900)

```diff
-         return 0 !== WW && (0, JE.d)(WW) || SE.b
+         return 0 !== RR && (0, Bt.c)(RR) || At.b
```

#### 532. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4908` → after: `L4869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4869) · [Before (L4908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4908)

```diff
-           name: (0, JE.d)(iW),
+           name: (0, Bt.c)(JR),
```

#### 533. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4918` → after: `L4879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4879) · [Before (L4918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4918)

```diff
-         if (yE.d.has(iW)) {
+         if (Xt.b.has(JR)) {
```

#### 534. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4920` → after: `L4881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4881) · [Before (L4920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4920)

```diff
-             mW = this.options.get((0, yE.h)(OW, iW));
+             yR = this.options.get((0, Xt.d)(GR, JR));
```

#### 535. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4934-L4935` → after: `L4895-L4896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4895-L4896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4895-L4896) · [Before (L4934-L4935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4934-L4935)

```diff
-           throw new Error(`ClientApi.${WW} is not available yet in the wasm client (${iW})`)
-         }(`getItemStat("${WW}")`, `a table of the stat: the wasm client answers ${Object.keys(uE).join(", ")}`), iW
+           throw new Error(`ClientApi.${RR} is not available yet in the wasm client (${JR})`)
+         }(`getItemStat("${RR}")`, `a table of the stat: the wasm client answers ${Object.keys(bt).join(", ")}`), JR
```

#### 536. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4940` → after: `L4901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4901) · [Before (L4940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4940)

```diff
-         return null !== EW && void 0 !== EW || "displayName" !== iW ? EW : this.getItemName(WW)
+         return null !== tR && void 0 !== tR || "displayName" !== JR ? tR : this.getItemName(RR)
```

#### 537. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4946` → after: `L4907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4907) · [Before (L4946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4946)

```diff
-         return this.getClientOption(`${WW}GunStats`)
+         return this.getClientOption(`${RR}GunStats`)
```

#### 538. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4953` → after: `L4914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4914) · [Before (L4953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4953)

```diff
-         return 0 !== ((null !== (iW = this.props.blockFlags[WW]) && void 0 !== iW ? iW : 0) & AW.H.Solid)
+         return 0 !== ((null !== (JR = this.props.blockFlags[RR]) && void 0 !== JR ? JR : 0) & eR.x.Solid)
```

#### 539. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4960` → after: `L4921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4921) · [Before (L4960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4960)

```diff
-         return 0 !== ((null !== (iW = this.props.blockFlags[WW]) && void 0 !== iW ? iW : 0) & AW.H.Fluid)
+         return 0 !== ((null !== (JR = this.props.blockFlags[RR]) && void 0 !== JR ? JR : 0) & eR.x.Fluid)
```

#### 540. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4964` → after: `L4925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4925) · [Before (L4964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4964)

```diff
-         return 0 !== ((null !== (iW = this.props.blockFlags[WW]) && void 0 !== iW ? iW : 0) & AW.H.PlaceOver)
+         return 0 !== ((null !== (JR = this.props.blockFlags[RR]) && void 0 !== JR ? JR : 0) & eR.x.PlaceOver)
```

#### 541. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4968` → after: `L4929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4929) · [Before (L4968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4968)

```diff
-         return null !== (iW = this.props.blockAttachedTops[WW]) && void 0 !== iW ? iW : 0
+         return null !== (JR = this.props.blockAttachedTops[RR]) && void 0 !== JR ? JR : 0
```

#### 542. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4985-L4987` → after: `L4946-L4948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4946-L4948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4946-L4948) · [Before (L4985-L4987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4985-L4987)

```diff
-               for (let WW = 0; WW + AW.ce.BYTES <= NW; WW += AW.ce.BYTES) LW.push(Object.freeze({
-                 item: iW.nameOfId(AW.ce.item(PW, WW)),
-                 amt: AW.ce.amount(PW, WW)
+               for (let RR = 0; RR + eR.Kd.BYTES <= uR; RR += eR.Kd.BYTES) qR.push(Object.freeze({
+                 item: JR.nameOfId(eR.Kd.item(ZR, RR)),
+                 amt: eR.Kd.amount(ZR, RR)
```

#### 543. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5007-L5013` → after: `L4968-L4974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4968-L4974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4968-L4974) · [Before (L5007-L5013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5007-L5013)

```diff
-     var DE = OW(42281),
-       VE = OW(38111),
-       pE = OW(38101),
-       fE = OW(38105),
-       CE = OW(37735),
-       XE = OW(42373),
-       BE = OW(54737);
+     var Ht = GR(42310),
+       ot = GR(38064),
+       ct = GR(38047),
+       Pt = GR(38053),
+       It = GR(37651),
+       mt = GR(42394),
+       zt = GR(54582);
```

#### 544. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5021` → after: `L4982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4982) · [Before (L5021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5021)

```diff
-       return iW.byteLength < xW.Lc ? iW : iW.subarray(0, xW.Lc - 1)
+       return JR.byteLength < wR.Kc ? JR : JR.subarray(0, wR.Kc - 1)
```

#### 545. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5029` → after: `L4990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4990) · [Before (L5029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5029)

```diff
-         this.keyframesVersion = qE, this.reloadFrom = null !== (WW = null === (iW = this.view()) || void 0 === iW ? void 0 : iW.version) && void 0 !== WW ? WW : qE
+         this.keyframesVersion = St, this.reloadFrom = null !== (RR = null === (JR = this.view()) || void 0 === JR ? void 0 : JR.version) && void 0 !== RR ? RR : St
```

#### 546. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5032` → after: `L4993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4993) · [Before (L5032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5032)

```diff
-         const iW = 1 === this.deps.core.hNW(WW);
+         const JR = 1 === this.deps.core.rZR(RR);
```

#### 547. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5053` → after: `L5014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5014) · [Before (L5053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5053)

```diff
-         this.deps.replay.setCameraMode(BE.b.indexOf(WW))
+         this.deps.replay.setCameraMode(zt.d.indexOf(RR))
```

#### 548. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5057` → after: `L5018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5018) · [Before (L5057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5057)

```diff
-         const iW = AW.z.replayViewPtr(this.deps.apiView(), 0);
+         const JR = eR.s.replayViewPtr(this.deps.apiView(), 0);
```

#### 549. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5059-L5060` → after: `L5020-L5021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5020-L5021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5020-L5021) · [Before (L5059-L5060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5059-L5060)

```diff
-         const OW = new DataView(this.deps.buffer(), iW, AW.$d.BYTES),
-           mW = AW.$d.version(OW, 0),
+         const GR = new DataView(this.deps.buffer(), JR, eR.Gd.BYTES),
+           yR = eR.Gd.version(GR, 0),
```

#### 550. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5063` → after: `L5024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5024) · [Before (L5063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5063)

```diff
-         const NW = AW.$d.markIn(OW, 0),
+         const uR = eR.Gd.markIn(GR, 0),
```

#### 551. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5066-L5071` → after: `L5027-L5032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5027-L5032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5027-L5032) · [Before (L5066-L5071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5066-L5071)

```diff
-             state: AW.$d.state(OW, 0),
-             cameraMode: null !== (WW = BE.b[AW.$d.cameraMode(OW, 0)]) && void 0 !== WW ? WW : "recording",
-             hZ: AW.$d.hZ(OW, 0),
-             totalTicks: AW.$d.totalTicks(OW, 0),
-             speed: AW.$d.speed(OW, 0),
-             mark: NW === AW.Zd ? null : {
+             state: eR.Gd.state(GR, 0),
+             cameraMode: null !== (RR = zt.d[eR.Gd.cameraMode(GR, 0)]) && void 0 !== RR ? RR : "recording",
+             gK: eR.Gd.gK(GR, 0),
+             totalTicks: eR.Gd.totalTicks(GR, 0),
+             speed: eR.Gd.speed(GR, 0),
+             mark: uR === eR.Cd ? null : {
```

#### 552. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5073` → after: `L5034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5034) · [Before (L5073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5073)

```diff
-               outTick: AW.$d.markOut(OW, 0)
+               outTick: eR.Gd.markOut(GR, 0)
```

#### 553. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5075` → after: `L5036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5036) · [Before (L5075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5075)

```diff
-             editVersion: AW.$d.editVersion(OW, 0)
+             editVersion: eR.Gd.editVersion(GR, 0)
```

#### 554. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5083` → after: `L5044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5044) · [Before (L5083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5083)

```diff
-         const iW = this.reloadFrom === qE && WW.state !== xW.td.Cropping && WW.state !== xW.td.None,
+         const JR = this.reloadFrom === St && RR.state !== wR.ld.Cropping && RR.state !== wR.ld.None,
```

#### 555. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5088` → after: `L5049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5049) · [Before (L5088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5088)

```diff
-         } = this.deps, EW = mW.HNW(), NW = mW.EU(), PW = [];
+         } = this.deps, tR = yR.eZR(), uR = yR.yn(), ZR = [];
```

#### 556. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5090` → after: `L5051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5051) · [Before (L5090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5090)

```diff
-           const WW = new DataView(this.deps.buffer(), NW, EW * xW.wc);
+           const RR = new DataView(this.deps.buffer(), uR, tR * wR.sc);
```

#### 557. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5092` → after: `L5053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5053) · [Before (L5092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5092)

```diff
-             const OW = iW * xW.wc,
+             const GR = JR * wR.sc,
```

#### 558. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5095-L5098` → after: `L5056-L5059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5056-L5059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5056-L5059) · [Before (L5095-L5098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5095-L5098)

```diff
-               hZ: WW.getUint32(OW + xW.Ic, !0),
-               position: [mW(xW.Hc), mW(xW.Hc + 8), mW(xW.Hc + 16)],
-               direction: [mW(xW.Ac), mW(xW.Ac + 8), mW(xW.Ac + 16)],
-               easing: [mW(xW.Dc), mW(xW.Dc + 8), mW(xW.Dc + 16), mW(xW.Dc + 24)]
+               gK: RR.getUint32(GR + wR.Hc, !0),
+               position: [yR(wR.Dc), yR(wR.Dc + 8), yR(wR.Dc + 16)],
+               direction: [yR(wR.vc), yR(wR.vc + 8), yR(wR.vc + 16)],
+               easing: [yR(wR.zc), yR(wR.zc + 8), yR(wR.zc + 16), yR(wR.zc + 24)]
```

#### 559. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5106` → after: `L5067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5067) · [Before (L5106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5106)

```diff
-           iW = [AW.z.eye(WW, 0, 0), AW.z.eye(WW, 0, 1), AW.z.eye(WW, 0, 2)];
+           JR = [eR.s.eye(RR, 0, 0), eR.s.eye(RR, 0, 1), eR.s.eye(RR, 0, 2)];
```

#### 560. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5110` → after: `L5071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5071) · [Before (L5110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5110)

```diff
-         }(AW.z.heading(WW, 0), AW.z.pitch(WW, 0)))
+         }(eR.s.heading(RR, 0), eR.s.pitch(RR, 0)))
```

#### 561. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5113` → after: `L5074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5074) · [Before (L5113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5113)

```diff
-         return this.deps.replay.setKeyframe(WW.hZ, Float64Array.from([...WW.position, ...WW.direction, ...WW.easing]))
+         return this.deps.replay.setKeyframe(RR.gK, Float64Array.from([...RR.position, ...RR.direction, ...RR.easing]))
```

#### 562. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5123` → after: `L5084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5084) · [Before (L5123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5123)

```diff
-         return this.deps.replay.setMark(null !== (iW = null === WW || void 0 === WW ? void 0 : WW.inTick) && void 0 !== iW ? iW : -1, null !== (OW = null === WW || void 0 === WW ? void 0 : WW.outTick) && void 0 !== OW ? OW : -1)
+         return this.deps.replay.setMark(null !== (JR = null === RR || void 0 === RR ? void 0 : RR.inTick) && void 0 !== JR ? JR : -1, null !== (GR = null === RR || void 0 === RR ? void 0 : RR.outTick) && void 0 !== GR ? GR : -1)
```

#### 563. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5140` → after: `L5101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5101) · [Before (L5140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5140)

```diff
-         return null !== OW && (0, AW.of)(OW, 0, WW, null === iW ? RE : GE.encode(iW))
+         return null !== GR && (0, eR.nf)(GR, 0, RR, null === JR ? jt : dt.encode(JR))
```

#### 564. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5145` → after: `L5106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5106) · [Before (L5145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5145)

```diff
-         return null !== EW && (0, AW.if)(EW, 0, iW, OW, NW, GE.encode(WW))
+         return null !== tR && (0, eR.gf)(tR, 0, JR, GR, uR, dt.encode(RR))
```

#### 565. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5149` → after: `L5110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5110) · [Before (L5149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5149)

```diff
-         return null !== EW && (0, AW.rf)(EW, 0, WW, iW, Math.max(0, OW), GE.encode(mW))
+         return null !== tR && (0, eR.qf)(tR, 0, RR, JR, Math.max(0, GR), dt.encode(yR))
```

#### 566. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5157` → after: `L5118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5118) · [Before (L5157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5157)

```diff
-                 return WW + wm.Eb + (null !== (OW = null === iW || void 0 === iW ? void 0 : iW.byteLength) && void 0 !== OW ? OW : 0)
+                 return RR + qy.Eb + (null !== (GR = null === JR || void 0 === JR ? void 0 : JR.byteLength) && void 0 !== GR ? GR : 0)
```

#### 567. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5164` → after: `L5125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5125) · [Before (L5164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5164)

```diff
-               mW.setUint16(EW, null !== (NW = null === PW || void 0 === PW ? void 0 : PW.byteLength) && void 0 !== NW ? NW : xW.Lc, !0), EW += wm.Eb, null !== PW && (OW.set(PW, EW), EW += PW.byteLength)
+               yR.setUint16(tR, null !== (uR = null === ZR || void 0 === ZR ? void 0 : ZR.byteLength) && void 0 !== uR ? uR : wR.Kc, !0), tR += qy.Eb, null !== ZR && (GR.set(ZR, tR), tR += ZR.byteLength)
```

#### 568. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5168` → after: `L5129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5129) · [Before (L5168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5168)

```diff
-         return null !== NW && (0, AW.mf)(NW, 0, null !== (mW = WW.id) && void 0 !== mW ? mW : AW.kd, null !== (EW = iW.id) && void 0 !== EW ? EW : AW.kd, PW)
+         return null !== uR && (0, eR.kf)(uR, 0, null !== (yR = RR.id) && void 0 !== yR ? yR : eR.Uc, null !== (tR = JR.id) && void 0 !== tR ? tR : eR.Uc, ZR)
```

#### 569. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5179` → after: `L5140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5140) · [Before (L5179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5179)

```diff
-         this.deps.core.nNW()
+         this.deps.core.aZR()
```

#### 570. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5192` → after: `L5153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5153) · [Before (L5192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5192)

```diff
-         this.deps = WW, this.state = Um.b, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.heldOptions = new Map, this.now = null !== (iW = WW.now) && void 0 !== iW ? iW : () => performance.now()
+         this.deps = RR, this.state = ay.b, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.heldOptions = new Map, this.now = null !== (JR = RR.now) && void 0 !== JR ? JR : () => performance.now()
```

#### 571. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5203` → after: `L5164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5164) · [Before (L5203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5203)

```diff
-         this.live && (this.viewerShown(!0 === (null === (iW = (OW = this.deps).viewerOpen) || void 0 === iW ? void 0 : iW.call(OW))), this.deps.client.recorderSession(WW, (0, BE.e)()))
+         this.live && (this.viewerShown(!0 === (null === (JR = (GR = this.deps).viewerOpen) || void 0 === JR ? void 0 : JR.call(GR))), this.deps.client.recorderSession(RR, (0, zt.g)()))
```

#### 572. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5210` → after: `L5171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5171) · [Before (L5210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5210)

```diff
-         this.live && (this.state.recording || !0 !== (null === (WW = (iW = this.deps).viewerOpen) || void 0 === WW ? void 0 : WW.call(iW))) ? (this.releaseOptions(), this.deps.client.recorderControl(xW.ad.ToggleRecording)) : this.deps.notify(fE.e.closeViewerFirst)
+         this.live && (this.state.recording || !0 !== (null === (RR = (JR = this.deps).viewerOpen) || void 0 === RR ? void 0 : RR.call(JR))) ? (this.releaseOptions(), this.deps.client.recorderControl(wR.Wc.ToggleRecording)) : this.deps.notify(Pt.d.closeViewerFirst)
```

#### 573. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5213` → after: `L5174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5174) · [Before (L5213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5213)

```diff
-         this.live ? this.deps.client.recorderControl(xW.ad.SaveClip) : this.deps.notify(fE.e.clippingNotOn)
+         this.live ? this.deps.client.recorderControl(wR.Wc.SaveClip) : this.deps.notify(Pt.d.clippingNotOn)
```

#### 574. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5216` → after: `L5177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5177) · [Before (L5216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5216)

```diff
-         this.live && this.deps.client.recorderControl(WW ? xW.ad.ViewerOpened : xW.ad.ViewerClosed)
+         this.live && this.deps.client.recorderControl(RR ? wR.Wc.ViewerOpened : wR.Wc.ViewerClosed)
```

#### 575. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5239` → after: `L5200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5200) · [Before (L5239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5239)

```diff
-         this.deps.client.recorderOption(WW, void 0 === iW || null === iW ? null : null !== (OW = JSON.stringify(iW)) && void 0 !== OW ? OW : null)
+         this.deps.client.recorderOption(RR, void 0 === JR || null === JR ? null : null !== (GR = JSON.stringify(JR)) && void 0 !== GR ? GR : null)
```

#### 576. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5268` → after: `L5229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5229) · [Before (L5268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5268)

```diff
-         } = this.deps, EW = fE.e;
+         } = this.deps, tR = Pt.d;
```

#### 577. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5270` → after: `L5231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5231) · [Before (L5270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5270)

```diff
-           case xW.Yc.RecordingStarted:
+           case wR.Vc.RecordingStarted:
```

#### 578. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5277-L5278` → after: `L5238-L5239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5238-L5239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5238-L5239) · [Before (L5277-L5278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5277-L5278)

```diff
-           case xW.Yc.RecordingStopped:
-             this.stopRecording(), mW(EW.recordingStopped), this.saveState(xW.kd.Recording, "saving");
+           case wR.Vc.RecordingStopped:
+             this.stopRecording(), yR(tR.recordingStopped), this.saveState(wR.dd.Recording, "saving");
```

#### 579. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5280` → after: `L5241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5241) · [Before (L5280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5280)

```diff
-           case xW.Yc.RecordingDiscarded:
+           case wR.Vc.RecordingDiscarded:
```

#### 580. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5283` → after: `L5244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5244) · [Before (L5283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5283)

```diff
-           case xW.Yc.RecordingTurnedOff:
+           case wR.Vc.RecordingTurnedOff:
```

#### 581. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5286` → after: `L5247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5247) · [Before (L5286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5286)

```diff
-           case xW.Yc.LimitReached:
+           case wR.Vc.LimitReached:
```

#### 582. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5289-L5290` → after: `L5250-L5251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5250-L5251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5250-L5251) · [Before (L5289-L5290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5289-L5290)

```diff
-           case xW.Yc.ClipSaved:
-             this.saveState(xW.kd.Clip, "saving");
+           case wR.Vc.ClipSaved:
+             this.saveState(wR.dd.Clip, "saving");
```

#### 583. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5292` → after: `L5253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5253) · [Before (L5292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5292)

```diff
-           case xW.Yc.ClipEmpty:
+           case wR.Vc.ClipEmpty:
```

#### 584. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5295` → after: `L5256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5256) · [Before (L5295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5295)

```diff
-           case xW.Yc.ClippingNotOn:
+           case wR.Vc.ClippingNotOn:
```

#### 585. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5298` → after: `L5259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5259) · [Before (L5298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5298)

```diff
-           case xW.Yc.Disallowed:
+           case wR.Vc.Disallowed:
```

#### 586. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5301` → after: `L5262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5262) · [Before (L5301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5301)

```diff
-           case xW.Yc.ClippingOn:
+           case wR.Vc.ClippingOn:
```

#### 587. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5308` → after: `L5269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5269) · [Before (L5308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5308)

```diff
-           case xW.Yc.ClippingOff:
+           case wR.Vc.ClippingOff:
```

#### 588. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5315` → after: `L5276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5276) · [Before (L5315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5315)

```diff
-           case xW.Yc.ClipSettingsChanged:
+           case wR.Vc.ClipSettingsChanged:
```

#### 589. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5321` → after: `L5282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5282) · [Before (L5321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5321)

```diff
-           case xW.Yc.SaveBusy:
+           case wR.Vc.SaveBusy:
```

#### 590. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5324` → after: `L5285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5285) · [Before (L5324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5324)

```diff
-           case xW.Yc.CloseViewerFirst:
+           case wR.Vc.CloseViewerFirst:
```

#### 591. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5329` → after: `L5290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5290) · [Before (L5329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5329)

```diff
-         this.deps.download(iW), this.saveState(WW, "done"), this.deps.notify(WW === xW.kd.Clip ? fE.e.clipSaved : fE.e.recordingSaved)
+         this.deps.download(JR), this.saveState(RR, "done"), this.deps.notify(RR === wR.dd.Clip ? Pt.d.clipSaved : Pt.d.recordingSaved)
```

#### 592. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5332` → after: `L5293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5293) · [Before (L5332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5332)

```diff
-         this.saveState(WW, "failed"), this.deps.notify(WW === xW.kd.Clip ? fE.e.clipFailed : fE.e.recordingFailed)
+         this.saveState(RR, "failed"), this.deps.notify(RR === wR.dd.Clip ? Pt.d.clipFailed : Pt.d.recordingFailed)
```

#### 593. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5359` → after: `L5320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5320) · [Before (L5359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5359)

```diff
-         if (iW += wm.Eb, mW !== xW.Lc) {
+         if (JR += qy.Eb, yR !== wR.Kc) {
```

#### 594. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5364` → after: `L5325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5325) · [Before (L5364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5364)

```diff
-       return iW === OW ? EW : null
+       return JR === GR ? tR : null
```

#### 595. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5381` → after: `L5342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5342) · [Before (L5381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5381)

```diff
-               case xW.ld.Cleared:
+               case wR.gd.Cleared:
```

#### 596. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5383` → after: `L5344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5344) · [Before (L5383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5383)

```diff
-               case xW.ld.Text:
+               case wR.gd.Text:
```

#### 597. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5385` → after: `L5346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5346) · [Before (L5385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5385)

```diff
-               case xW.ld.Int:
+               case wR.gd.Int:
```

#### 598. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5387` → after: `L5348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5348) · [Before (L5387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5387)

```diff
-               case xW.ld.Double:
+               case wR.gd.Double:
```

#### 599. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5402` → after: `L5363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5363) · [Before (L5402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5402)

```diff
-               case xW.pd.FlyingText: {
+               case wR.jd.FlyingText: {
```

#### 600. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5406-L5407` → after: `L5367-L5368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5367-L5368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5367-L5368) · [Before (L5406-L5407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5406-L5407)

```diff
-                   GN: OW,
-                   RN: mW,
+                   RZ: GR,
+                   hu: yR,
```

#### 601. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5412` → after: `L5373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5373) · [Before (L5412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5412)

```diff
-               case xW.pd.PlayerKilled: {
+               case wR.jd.PlayerKilled: {
```

#### 602. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5422` → after: `L5383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5383) · [Before (L5422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5422)

```diff
-               case xW.pd.Killfeed: {
+               case wR.jd.Killfeed: {
```

#### 603. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5464` → after: `L5425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5425) · [Before (L5464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5464)

```diff
-       return (WW, iW, NW, PW) => !(WW < xW.Q.ReplayFailed || WW > xW.Q.RecorderEvent) && (OW = iW, mW = !0, (0, AW.oe)(WW, iW, NW, PW, EW) && mW)
+       return (RR, JR, uR, ZR) => !(RR < wR.X.ReplayFailed || RR > wR.X.RecorderEvent) && (GR = JR, yR = !0, (0, eR.be)(RR, JR, uR, ZR, tR) && yR)
```

#### 604. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5480` → after: `L5441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5441) · [Before (L5480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5480)

```diff
-               if (EW + xW.N > OW.byteLength) throw new Error(`the recorder module's events end mid-head at ${EW}`);
+               if (tR + wR.T > GR.byteLength) throw new Error(`the recorder module's events end mid-head at ${tR}`);
```

#### 605. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5484-L5486` → after: `L5445-L5447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5445-L5447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5445-L5447) · [Before (L5484-L5486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5484-L5486)

```diff
-                 LW = EW + xW.N;
-               if (LW + PW > OW.byteLength || !iW(NW, mW, LW, PW)) throw new Error(`the recorder module wrote a malformed event ${NW} (${PW} bytes) at ${EW}`);
-               EW = LW + (0, xW.xe)(PW)
+                 qR = tR + wR.T;
+               if (qR + ZR > GR.byteLength || !JR(uR, yR, qR, ZR)) throw new Error(`the recorder module wrote a malformed event ${uR} (${ZR} bytes) at ${tR}`);
+               tR = qR + (0, wR.ve)(ZR)
```

#### 606. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5504` → after: `L5465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5465) · [Before (L5504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5504)

```diff
-         const OW = null !== (iW = this.parts.get(WW.save)) && void 0 !== iW ? iW : [];
+         const GR = null !== (JR = this.parts.get(RR.save)) && void 0 !== JR ? JR : [];
```

#### 607. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5528` → after: `L5489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5489) · [Before (L5528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5528)

```diff
-       return OW.e(73).then((() => OW(64370)))
+       return GR.e(73).then((() => GR(64119)))
```

#### 608. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5553` → after: `L5514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5514) · [Before (L5553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5553)

```diff
-             iW === xW.kd.Edited ? null === (mW = this.viewer) || void 0 === mW || mW.saveDone(OW) : this.recorder.fileReady(iW, OW)
+             JR === wR.dd.Edited ? null === (yR = this.viewer) || void 0 === yR || yR.saveDone(GR) : this.recorder.fileReady(JR, GR)
```

#### 609. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5585` → after: `L5546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5546) · [Before (L5585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5585)

```diff
-               case xW.Yc.FileDiscarded:
+               case wR.Vc.FileDiscarded:
```

#### 610. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5588` → after: `L5549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5549) · [Before (L5588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5588)

```diff
-               case xW.Yc.SaveFailed:
+               case wR.Vc.SaveFailed:
```

#### 611. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5591` → after: `L5552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5552) · [Before (L5591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5591)

```diff
-               case xW.Yc.SaveBusy:
+               case wR.Vc.SaveBusy:
```

#### 612. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5614` → after: `L5575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5575) · [Before (L5614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5614)

```diff
-         return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (WW = this.deps.loadViewer) && void 0 !== WW ? WW : mN)().catch((WW => {
+         return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (RR = this.deps.loadViewer) && void 0 !== RR ? RR : Ju)().catch((RR => {
```

#### 613. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5632` → after: `L5593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5593) · [Before (L5632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5632)

```diff
-           WW > 0 && this.recorder.hZ()
+           RR > 0 && this.recorder.gK()
```

#### 614. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5644` → after: `L5605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5605) · [Before (L5644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5644)

```diff
-         WW === xW.kd.Edited ? null === (iW = this.viewer) || void 0 === iW || iW.saveFailed(!1) : this.recorder.failed(WW)
+         RR === wR.dd.Edited ? null === (JR = this.viewer) || void 0 === JR || JR.saveFailed(!1) : this.recorder.failed(RR)
```

#### 615. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5647-L5650` → after: `L5608-L5611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5608-L5611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5608-L5611) · [Before (L5647-L5650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5647-L5650)

```diff
-     var NN = OW(42134),
-       PN = OW(42149),
-       LN = OW(5560),
-       cN = OW(42429);
+     var yu = GR(42145),
+       tu = GR(42164),
+       uu = GR(5692),
+       Zu = GR(42457);
```

#### 616. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5657` → after: `L5618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5618) · [Before (L5657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5657)

```diff
-         const OW = (0, fW.q)(0, performance.now()),
+         const GR = (0, mR.s)(0, performance.now()),
```

#### 617. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5659-L5660` → after: `L5620-L5621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5620-L5621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5620-L5621) · [Before (L5659-L5660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5659-L5660)

```diff
-         (0, cN.i)((() => {
-           (0, fW.v)(xW.hb.MouseDown, 0, 0, 0, OW), (0, fW.v)(xW.hb.MouseMove, 0, WW * mW, iW * mW, 0), (0, fW.v)(xW.hb.MouseUp, 0, 0, 0, OW)
+         (0, Zu.f)((() => {
+           (0, mR.z)(wR.wb.MouseDown, 0, 0, 0, GR), (0, mR.z)(wR.wb.MouseMove, 0, RR * yR, JR * yR, 0), (0, mR.z)(wR.wb.MouseUp, 0, 0, 0, GR)
```

#### 618. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5665` → after: `L5626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5626) · [Before (L5665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5665)

```diff
-         this.analogue[0] = null !== (iW = null === WW || void 0 === WW ? void 0 : WW.x) && void 0 !== iW ? iW : 0, this.analogue[1] = null !== (OW = null === WW || void 0 === WW ? void 0 : WW.y) && void 0 !== OW ? OW : 0, this.send()
+         this.analogue[0] = null !== (JR = null === RR || void 0 === RR ? void 0 : RR.x) && void 0 !== JR ? JR : 0, this.analogue[1] = null !== (GR = null === RR || void 0 === RR ? void 0 : RR.y) && void 0 !== GR ? GR : 0, this.send()
```

#### 619. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5668-L5669` → after: `L5629-L5630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5629-L5630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5629-L5630) · [Before (L5668-L5669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5668-L5669)

```diff
-         const OW = "freeCamUp" === WW ? AW.hc.Up : AW.hc.Down;
-         this.keys = iW ? this.keys | OW : this.keys & ~OW, this.send()
+         const GR = "freeCamUp" === RR ? eR.Ub.Up : eR.Ub.Down;
+         this.keys = JR ? this.keys | GR : this.keys & ~GR, this.send()
```

#### 620. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5676` → after: `L5637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5637) · [Before (L5676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5676)

```diff
-         this.unsent = null !== WW && !(0, AW.Be)(WW, 0, this.analogue, this.keys)
+         this.unsent = null !== RR && !(0, eR.re)(RR, 0, this.analogue, this.keys)
```

#### 621. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5679-L5685` → after: `L5640-L5646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5640-L5646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5640-L5646) · [Before (L5679-L5685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5679-L5685)

```diff
-     var tN = OW(4802),
-       ZN = OW(745),
-       xN = OW(259),
-       lN = OW(100),
-       AN = OW(35157),
-       bN = OW(730),
-       jN = OW(10106);
+     var iu = GR(4913),
+       fu = GR(798),
+       Vu = GR(289),
+       Ku = GR(103),
+       wu = GR(35067),
+       ru = GR(781),
+       eu = GR(10234);
```

#### 622. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5689` → after: `L5650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5650) · [Before (L5689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5689)

```diff
-         iW = (0, ZN.s)(WW);
+         JR = (0, fu.x)(RR);
```

#### 623. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5691` → after: `L5652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5652) · [Before (L5691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5691)

```diff
-         mouse: (0, lN.isMobile)() ? iW : WW.mouseSensitivity,
+         mouse: (0, Ku.isMobile)() ? JR : RR.mouseSensitivity,
```

#### 624. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5699` → after: `L5660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5660) · [Before (L5699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5699)

```diff
-         iW = mW.d.get("isTouchScreen") ? (0, ZN.s)(WW) : WW.mouseSensitivity,
+         JR = yR.d.get("isTouchScreen") ? (0, fu.x)(RR) : RR.mouseSensitivity,
```

#### 625. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5701` → after: `L5662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5662) · [Before (L5701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5701)

```diff
-       return OW > 0 ? iW / OW : 1
+       return GR > 0 ? JR / GR : 1
```

#### 626. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5720` → after: `L5681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5681) · [Before (L5720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5720)

```diff
-           cellLight: (0, tN.i)("cellLight") ? (0, tN.i)("cellLightUnlit") ? "all" : "lit" : "off"
+           cellLight: (0, iu.k)("cellLight") ? (0, iu.k)("cellLightUnlit") ? "all" : "lit" : "off"
```

#### 627. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5722` → after: `L5683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5683) · [Before (L5722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5722)

```diff
-         OW && (0, xW.ge)(OW) === (0, xW.ge)(LW) && OW.fogChunks === NW || (OW = LW, WW.setEnvPrefs(OW))
+         GR && (0, wR.ie)(GR) === (0, wR.ie)(qR) && GR.fogChunks === uR || (GR = qR, RR.setEnvPrefs(GR))
```

#### 628. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5736` → after: `L5697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5697) · [Before (L5736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5736)

```diff
-             touchWalk: !(0, jN.e)(),
+             touchWalk: !(0, eu.g)(),
```

#### 629. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5738-L5739` → after: `L5699-L5700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5699-L5700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5699-L5700) · [Before (L5738-L5739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5738-L5739)

```diff
-             edgeGuardLong: (0, bN.e)(),
-             nametagCutDistance: (0, AN.e)()
+             edgeGuardLong: (0, ru.b)(),
+             nametagCutDistance: (0, wu.h)()
```

#### 630. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5742` → after: `L5703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5703) · [Before (L5742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5742)

```diff
-         (0, hW.ae)(NW, iW) || (NW = iW, WW.setUiPrefs(iW))
+         (0, gR.fe)(uR, JR) || (uR = JR, RR.setUiPrefs(JR))
```

#### 631. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5747` → after: `L5708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5708) · [Before (L5747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5747)

```diff
-         (0, hW.ae)(cW, iW) || (cW = iW, WW.setLookPrefs(iW))
+         (0, gR.fe)(iR, JR) || (iR = JR, RR.setLookPrefs(JR))
```

#### 632. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5750` → after: `L5711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5711) · [Before (L5750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5750)

```diff
-       const tW = [(0, PW.n)("appManagerUpdated|soundVolume", iW), (0, PW.n)("appManagerUpdated|soundOnFromAd", iW), (0, PW.n)("appManagerUpdated|clientEscMenuOptions", (() => {
+       const VR = [(0, ZR.q)("appManagerUpdated|soundVolume", JR), (0, ZR.q)("appManagerUpdated|soundOnFromAd", JR), (0, ZR.q)("appManagerUpdated|clientEscMenuOptions", (() => {
```

#### 633. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5752` → after: `L5713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5713) · [Before (L5752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5752)

```diff
-       })), (0, PW.n)(jN.b, LW), (0, PW.n)("appManagerUpdated|enabledDebugFeatures", EW), (0, PW.n)("appManagerUpdated|areNametagsHidden", LW), (0, PW.n)("appManagerUpdated|showDistantNametags", LW)];
+       })), (0, ZR.q)(eu.d, qR), (0, ZR.q)("appManagerUpdated|enabledDebugFeatures", tR), (0, ZR.q)("appManagerUpdated|areNametagsHidden", qR), (0, ZR.q)("appManagerUpdated|showDistantNametags", qR)];
```

#### 634. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5757-L5762` → after: `L5718-L5723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5718-L5723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5718-L5723) · [Before (L5757-L5762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5757-L5762)

```diff
-     var MN = OW(42416),
-       KN = OW(42419);
-     var SN = (0, KN.b)("lend"),
-       YN = (0, KN.b)("starting"),
-       yN = (0, KN.b)("generation"),
-       TN = (0, KN.b)("end");
+     var Uu = GR(42444),
+       Wu = GR(42449);
+     var Au = (0, Wu.c)("lend"),
+       Cu = (0, Wu.c)("starting"),
+       Xu = (0, Wu.c)("generation"),
+       Mu = (0, Wu.c)("end");
```

#### 635. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5779` → after: `L5740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5740) · [Before (L5779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5779)

```diff
-         return null !== (0, MN.d)(this, SN)[SN] || (0, MN.d)(this, YN)[YN]
+         return null !== (0, Uu.e)(this, Au)[Au] || (0, Uu.e)(this, Cu)[Cu]
```

#### 636. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5783-L5784` → after: `L5744-L5745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5744-L5745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5744-L5745) · [Before (L5783-L5784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5783-L5784)

```diff
-         const iW = (0, MN.d)(this, yN)[yN];
-         (0, MN.d)(this, YN)[YN] = !0;
+         const JR = (0, Uu.e)(this, Xu)[Xu];
+         (0, Uu.e)(this, Cu)[Cu] = !0;
```

#### 637. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5788` → after: `L5749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5749) · [Before (L5788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5788)

```diff
-           (0, MN.d)(this, YN)[YN] = !1
+           (0, Uu.e)(this, Cu)[Cu] = !1
```

#### 638. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5790` → after: `L5751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5751) · [Before (L5790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5790)

```diff
-         if (iW !== (0, MN.d)(this, yN)[yN]) return "refused";
+         if (JR !== (0, Uu.e)(this, Xu)[Xu]) return "refused";
```

#### 639. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5799-L5800` → after: `L5760-L5761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5760-L5761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5760-L5761) · [Before (L5799-L5800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5799-L5800)

```diff
-           0 !== LW ? (new Uint8Array(iW.buffer, LW, PW.length).set(PW), WW.uNW(OW.headLen, mW, EW) && (NW = "sealing")) : NW = "tooLarge"
-         }), !0), "sealing" !== NW ? (OW.end(), NW) : ((0, MN.d)(this, SN)[SN] = OW, "sealing")
+           0 !== qR ? (new Uint8Array(JR.buffer, qR, ZR.length).set(ZR), RR.LZR(GR.headLen, yR, tR) && (uR = "sealing")) : uR = "tooLarge"
+         }), !0), "sealing" !== uR ? (GR.end(), uR) : ((0, Uu.e)(this, Au)[Au] = GR, "sealing")
```

#### 640. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5803` → after: `L5764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5764) · [Before (L5803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5803)

```diff
-         const WW = (0, MN.d)(this, SN)[SN];
+         const RR = (0, Uu.e)(this, Au)[Au];
```

#### 641. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5808-L5810` → after: `L5769-L5771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5769-L5771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5769-L5771) · [Before (L5808-L5810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5808-L5810)

```diff
-             iW = WW.oNW(), iW > 0 && (OW = WW.dNW())
-           }))) return (0, MN.d)(this, TN)[TN](WW, "stopped");
-         if (iW < 0) return (0, MN.d)(this, TN)[TN](WW, "read");
+             JR = RR.nZR(), JR > 0 && (GR = RR.UZR())
+           }))) return (0, Uu.e)(this, Mu)[Mu](RR, "stopped");
+         if (JR < 0) return (0, Uu.e)(this, Mu)[Mu](RR, "read");
```

#### 642. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5820` → after: `L5781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5781) · [Before (L5820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5820)

```diff
-           WW.eNW()
+           RR.WZR()
```

#### 643. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5822` → after: `L5783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5783) · [Before (L5822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5822)

```diff
-         const PW = (0, MN.d)(this, TN)[TN](WW, NW ? "givenUp" : "stopped");
+         const ZR = (0, Uu.e)(this, Mu)[Mu](RR, uR ? "givenUp" : "stopped");
```

#### 644. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5826-L5827` → after: `L5787-L5788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5787-L5788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5787-L5788) · [Before (L5826-L5827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5826-L5827)

```diff
-         (0, MN.d)(this, yN)[yN]++;
-         const WW = (0, MN.d)(this, SN)[SN];
+         (0, Uu.e)(this, Xu)[Xu]++;
+         const RR = (0, Uu.e)(this, Au)[Au];
```

#### 645. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5829-L5830` → after: `L5790-L5791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5790-L5791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5790-L5791) · [Before (L5829-L5830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5829-L5830)

```diff
-           WW.eNW()
-         })), (0, MN.d)(this, TN)[TN](WW, "stopped"))
+           RR.WZR()
+         })), (0, Uu.e)(this, Mu)[Mu](RR, "stopped"))
```

#### 646. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5835` → after: `L5796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5796) · [Before (L5835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5835)

```diff
-       return (0, MN.d)(this, SN)[SN] = null, WW.end(), iW
+       return (0, Uu.e)(this, Au)[Au] = null, RR.end(), JR
```

#### 647. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5856` → after: `L5817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5817) · [Before (L5856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5856)

```diff
-         if (WW.busy() || !nN(WW.memoryBytes(), WW.clipSeconds())) return "EZ";
+         if (RR.busy() || !gu(RR.memoryBytes(), RR.clipSeconds())) return "tK";
```

#### 648. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5864` → after: `L5825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5825) · [Before (L5864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5864)

```diff
-         if (!OW) return WW.trapped() ? "trapped" : WW.JA() ? "JA" : "failed";
+         if (!GR) return RR.trapped() ? "trapped" : RR.He() ? "He" : "failed";
```

#### 649. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5872-L5912` → after: `L5833-L5873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5833-L5873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5833-L5873) · [Before (L5872-L5912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5872-L5912)

```diff
-       vN = new Set([xW.ad.ToggleRecording, xW.ad.SaveClip]);
-     var gN = (0, KN.b)("bindings"),
-       DN = (0, KN.b)("module"),
-       VN = (0, KN.b)("memory"),
-       pN = (0, KN.b)("trapped"),
-       fN = (0, KN.b)("JA"),
-       CN = (0, KN.b)("recycleDue"),
-       XN = (0, KN.b)("loading"),
-       BN = (0, KN.b)("generation"),
-       qN = (0, KN.b)("viewDrawn"),
-       RN = (0, KN.b)("clip"),
-       GN = (0, KN.b)("session"),
-       IN = (0, KN.b)("control"),
-       aN = (0, KN.b)("deferred"),
-       rN = (0, KN.b)("coreU8"),
-       zN = (0, KN.b)("coreU32"),
- ... (25 more removed lines; see GitHub link above)
+       Nu = new Set([wR.Wc.ToggleRecording, wR.Wc.SaveClip]);
+     var Du = (0, Wu.c)("bindings"),
+       Hu = (0, Wu.c)("module"),
+       ou = (0, Wu.c)("memory"),
+       cu = (0, Wu.c)("trapped"),
+       Pu = (0, Wu.c)("He"),
+       Iu = (0, Wu.c)("recycleDue"),
+       mu = (0, Wu.c)("loading"),
+       zu = (0, Wu.c)("generation"),
+       Su = (0, Wu.c)("viewDrawn"),
+       ju = (0, Wu.c)("clip"),
+       du = (0, Wu.c)("session"),
+       Eu = (0, Wu.c)("control"),
+       Yu = (0, Wu.c)("deferred"),
+       ku = (0, Wu.c)("coreU8"),
+       Qu = (0, Wu.c)("coreU32"),
+ ... (25 more added lines; see GitHub link above)
```

#### 650. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6012-L6013` → after: `L5973-L5974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5973-L5974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5973-L5974) · [Before (L6012-L6013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6012-L6013)

```diff
-         }), (0, MN.d)(this, QN)[QN] = new JN({
-           ensureLoaded: () => (0, MN.d)(this, NP)[NP](),
+         }), (0, Uu.e)(this, Tu)[Tu] = new Bu({
+           ensureLoaded: () => (0, Uu.e)(this, yZ)[yZ](),
```

#### 651. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6015-L6016` → after: `L5976-L5977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5976-L5977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5976-L5977) · [Before (L6015-L6016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6015-L6016)

```diff
-             iW && (0, MN.d)(this, iP)[iP]("an edited save's stage");
-             const OW = (0, MN.d)(this, MP)[MP](((iW, OW) => (WW(iW, OW), !0)));
+             JR && (0, Uu.e)(this, hu)[hu]("an edited save's stage");
+             const GR = (0, Uu.e)(this, UZ)[UZ](((JR, GR) => (RR(JR, GR), !0)));
```

#### 652. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6024` → after: `L5985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5985) · [Before (L6024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6024)

```diff
-         return null !== (0, MN.d)(this, DN)[DN]
+         return null !== (0, Uu.e)(this, Hu)[Hu]
```

#### 653. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6027` → after: `L5988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5988) · [Before (L6027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6027)

```diff
-         return (0, MN.d)(this, pN)[pN]
+         return (0, Uu.e)(this, cu)[cu]
```

#### 654. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6030` → after: `L5991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5991) · [Before (L6030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6030)

```diff
-         return null !== (0, MN.d)(this, XN)[XN]
+         return null !== (0, Uu.e)(this, mu)[mu]
```

#### 655. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6033` → after: `L5994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5994) · [Before (L6033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6033)

```diff
-         (0, MN.d)(this, fN)[fN] || (0, MN.d)(this, pN)[pN] || (0, MN.d)(this, DN)[DN] || (0, MN.d)(this, XN)[XN] || this.deps.prefetch()
+         (0, Uu.e)(this, Pu)[Pu] || (0, Uu.e)(this, cu)[cu] || (0, Uu.e)(this, Hu)[Hu] || (0, Uu.e)(this, mu)[mu] || this.deps.prefetch()
```

#### 656. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6036` → after: `L5997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5997) · [Before (L6036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6036)

```diff
-         (0, MN.d)(this, qN)[qN] = !0, (0, MN.d)(this, OP)[OP]() && (0, MN.d)(this, EP)[EP]()
+         (0, Uu.e)(this, Su)[Su] = !0, (0, Uu.e)(this, RZ)[RZ]() && (0, Uu.e)(this, GZ)[GZ]()
```

#### 657. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6039` → after: `L6000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6000) · [Before (L6039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6039)

```diff
-         (0, MN.d)(this, RN)[RN] = {
+         (0, Uu.e)(this, ju)[ju] = {
```

#### 658. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6042` → after: `L6003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6003) · [Before (L6042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6042)

```diff
-         }, (0, MN.d)(this, lP)[lP](xW.Uc.Prefs, HN(WW, iW)), WW && (0, MN.d)(this, qN)[qN] && (0, MN.d)(this, EP)[EP]()
+         }, (0, Uu.e)(this, KZ)[KZ](wR.Uc.Prefs, pu(RR, JR)), RR && (0, Uu.e)(this, Su)[Su] && (0, Uu.e)(this, GZ)[GZ]()
```

#### 659. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6049` → after: `L6010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6010) · [Before (L6049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6049)

```diff
-           if (!(0, MN.d)(this, pN)[pN]) return (0, MN.d)(this, DN)[DN] ? void(0, MN.d)(this, lP)[lP](xW.Uc.Control, iW) : ((0, MN.d)(this, IN)[IN] = iW, void(0, MN.d)(this, EP)[EP]());
+           if (!(0, Uu.e)(this, cu)[cu]) return (0, Uu.e)(this, Hu)[Hu] ? void(0, Uu.e)(this, KZ)[KZ](wR.Uc.Control, JR) : ((0, Uu.e)(this, Eu)[Eu] = JR, void(0, Uu.e)(this, GZ)[GZ]());
```

#### 660. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6051` → after: `L6012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6012) · [Before (L6051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6051)

```diff
-         } else(0, MN.d)(this, fN)[fN] || this.deps.coreCommand(xW.Uc.Control, iW)
+         } else(0, Uu.e)(this, Pu)[Pu] || this.deps.coreCommand(wR.Uc.Control, JR)
```

#### 661. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6054` → after: `L6015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6015) · [Before (L6054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6054)

```diff
-         (0, MN.d)(this, GN)[GN] = WW, (0, MN.d)(this, WP)[WP](WW)
+         (0, Uu.e)(this, du)[du] = RR, (0, Uu.e)(this, su)[su](RR)
```

#### 662. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6057` → after: `L6018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6018) · [Before (L6057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6057)

```diff
-         (0, MN.d)(this, lP)[lP](xW.Uc.FilePartDone, function(WW, iW) {
+         (0, Uu.e)(this, KZ)[KZ](wR.Uc.FilePartDone, function(RR, JR) {
```

#### 663. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6064` → after: `L6025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6025) · [Before (L6064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6064)

```diff
-         return (0, MN.d)(this, lP)[lP](xW.Uc.FileDone, function(WW) {
+         return (0, Uu.e)(this, KZ)[KZ](wR.Uc.FileDone, function(RR) {
```

#### 664. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6067` → after: `L6028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6028) · [Before (L6067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6067)

```diff
-         }(WW)), (0, MN.d)(this, LP)[LP]()
+         }(RR)), (0, Uu.e)(this, uZ)[uZ]()
```

#### 665. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6070` → after: `L6031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6031) · [Before (L6070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6070)

```diff
-         return (0, MN.d)(this, iP)[iP]("saveEdited"), (0, MN.d)(this, QN)[QN].start(WW)
+         return (0, Uu.e)(this, hu)[hu]("saveEdited"), (0, Uu.e)(this, Tu)[Tu].start(RR)
```

#### 666. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6073-L6079` → after: `L6034-L6040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6034-L6040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6034-L6040) · [Before (L6073-L6079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6073-L6079)

```diff
-         if (!(0, MN.d)(this, DN)[DN]) return;
-         "read" === (0, MN.d)(this, QN)[QN].beforeRecorderStep() && (0, MN.d)(this, LP)[LP]();
-         const WW = (0, MN.d)(this, CN)[CN];
-         (0, MN.d)(this, CN)[CN] = null;
-         const iW = (0, MN.d)(this, DN)[DN],
-           OW = (0, MN.d)(this, VN)[VN];
-         if (!iW || !OW) return void(null === WW || void 0 === WW || WW.resolve((0, MN.d)(this, pN)[pN] ? "trapped" : "EZ"));
+         if (!(0, Uu.e)(this, Hu)[Hu]) return;
+         "read" === (0, Uu.e)(this, Tu)[Tu].beforeRecorderStep() && (0, Uu.e)(this, uZ)[uZ]();
+         const RR = (0, Uu.e)(this, Iu)[Iu];
+         (0, Uu.e)(this, Iu)[Iu] = null;
+         const JR = (0, Uu.e)(this, Hu)[Hu],
+           GR = (0, Uu.e)(this, ou)[ou];
+         if (!JR || !GR) return void(null === RR || void 0 === RR || RR.resolve((0, Uu.e)(this, cu)[cu] ? "trapped" : "tK"));
```

#### 667. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6082` → after: `L6043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6043) · [Before (L6082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6082)

```diff
-         } = this.deps, EW = mW.DNW(2);
+         } = this.deps, tR = yR.XZR(2);
```

#### 668. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6087-L6088` → after: `L6048-L6049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6048-L6049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6048-L6049) · [Before (L6087-L6088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6087-L6088)

```diff
-           const WW = (0, MN.d)(this, UP)[UP]();
-           wW = null !== (ZW = WW[EW >>> 2]) && void 0 !== ZW ? ZW : 0, tW = null !== (xW = WW[1 + (EW >>> 2)]) && void 0 !== xW ? xW : 0
+           const RR = (0, Uu.e)(this, aZ)[aZ]();
+           fR = null !== (KR = RR[tR >>> 2]) && void 0 !== KR ? KR : 0, VR = null !== (wR = RR[1 + (tR >>> 2)]) && void 0 !== wR ? wR : 0
```

#### 669. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6093` → after: `L6054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6054) · [Before (L6093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6093)

```diff
-             0 !== WW && (0, MN.d)(this, kP)[kP](OW).set((0, MN.d)(this, jP)[jP]().subarray(wW, wW + tW), WW)
+             0 !== RR && (0, Uu.e)(this, LZ)[LZ](GR).set((0, Uu.e)(this, eZ)[eZ]().subarray(fR, fR + VR), RR)
```

#### 670. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6095` → after: `L6056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6056) · [Before (L6095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6095)

```diff
-           NW = iW.step(), PW = iW.VNW(), LW = iW.pNW(), cW = iW.fNW()
+           uR = JR.step(), ZR = JR.MZR(), qR = JR.BZR(), iR = JR.lZR()
```

#### 671. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6097` → after: `L6058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6058) · [Before (L6097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6097)

```diff
-           if (!(0, MN.d)(this, SP)[SP](lW)) throw null === WW || void 0 === WW || WW.resolve("EZ"), lW;
+           if (!(0, Uu.e)(this, AZ)[AZ](rR)) throw null === RR || void 0 === RR || RR.resolve("tK"), rR;
```

#### 672. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6101-L6102` → after: `L6062-L6063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6062-L6063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6062-L6063) · [Before (L6101-L6102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6101-L6102)

```diff
-           const WW = mW.CNW(2, NW);
-           0 !== WW && (0, MN.d)(this, jP)[jP]().set((0, MN.d)(this, kP)[kP](OW).subarray(PW, PW + NW), WW)
+           const RR = yR.pZR(2, uR);
+           0 !== RR && (0, Uu.e)(this, eZ)[eZ]().set((0, Uu.e)(this, LZ)[LZ](GR).subarray(ZR, ZR + uR), RR)
```

#### 673. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6105` → after: `L6066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6066) · [Before (L6105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6105)

```diff
-           (0, MN.d)(this, aN)[aN] = [];
+           (0, Uu.e)(this, Yu)[Yu] = [];
```

#### 674. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6109` → after: `L6070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6070) · [Before (L6109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6109)

```diff
-             throw null === WW || void 0 === WW || WW.resolve("EZ"), lW
+             throw null === RR || void 0 === RR || RR.resolve("tK"), rR
```

#### 675. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6111-L6113` → after: `L6072-L6074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6072-L6074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6072-L6074) · [Before (L6111-L6113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6111-L6113)

```diff
-             const WW = (0, MN.d)(this, aN)[aN];
-             (0, MN.d)(this, aN)[aN] = null;
-             for (const [iW, OW] of WW)(0, MN.d)(this, lP)[lP](iW, OW)
+             const RR = (0, Uu.e)(this, Yu)[Yu];
+             (0, Uu.e)(this, Yu)[Yu] = null;
+             for (const [JR, GR] of RR)(0, Uu.e)(this, KZ)[KZ](JR, GR)
```

#### 676. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6116-L6117` → after: `L6077-L6078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6077-L6078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6077-L6078) · [Before (L6116-L6117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6116-L6117)

```diff
-         if (!(0, MN.d)(this, OP)[OP]() && !(0, MN.d)(this, mP)[mP]()) return (0, MN.d)(this, AP)[AP](), void(null === WW || void 0 === WW || WW.resolve("EZ"));
-         null === WW || void 0 === WW || WW.resolve((0, MN.d)(this, xP)[xP]())
+         if (!(0, Uu.e)(this, RZ)[RZ]() && !(0, Uu.e)(this, JZ)[JZ]()) return (0, Uu.e)(this, wZ)[wZ](), void(null === RR || void 0 === RR || RR.resolve("tK"));
+         null === RR || void 0 === RR || RR.resolve((0, Uu.e)(this, VZ)[VZ]())
```

#### 677. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6120` → after: `L6081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6081) · [Before (L6120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6120)

```diff
-         (0, MN.d)(this, fN)[fN] = !0, (0, MN.d)(this, AP)[AP]()
+         (0, Uu.e)(this, Pu)[Pu] = !0, (0, Uu.e)(this, wZ)[wZ]()
```

#### 678. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6125` → after: `L6086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6086) · [Before (L6125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6125)

```diff
-       (0, MN.d)(this, lP)[lP](xW.Uc.Session, function(WW) {
+       (0, Uu.e)(this, KZ)[KZ](wR.Uc.Session, function(RR) {
```

#### 679. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6147` → after: `L6108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6108) · [Before (L6147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6147)

```diff
-       return null !== (WW = null === (iW = (0, MN.d)(this, RN)[RN]) || void 0 === iW ? void 0 : iW.on) && void 0 !== WW && WW
+       return null !== (RR = null === (JR = (0, Uu.e)(this, ju)[ju]) || void 0 === JR ? void 0 : JR.on) && void 0 !== RR && RR
```

#### 680. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6151` → after: `L6112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6112) · [Before (L6151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6151)

```diff
-       const WW = (0, MN.d)(this, DN)[DN];
+       const RR = (0, Uu.e)(this, Hu)[Hu];
```

#### 681. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6156` → after: `L6117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6117) · [Before (L6156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6156)

```diff
-         if (!(0, MN.d)(this, SP)[SP](OW)) throw OW
+         if (!(0, Uu.e)(this, AZ)[AZ](GR)) throw GR
```

#### 682. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6158` → after: `L6119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6119) · [Before (L6158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6158)

```diff
-       return iW || (0, MN.d)(this, QN)[QN].active
+       return JR || (0, Uu.e)(this, Tu)[Tu].active
```

#### 683. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6161` → after: `L6122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6122) · [Before (L6161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6161)

```diff
-       !(0, MN.d)(this, fN)[fN] && this.deps.allowed() ? await (0, MN.d)(this, NP)[NP]() : (0, MN.d)(this, IN)[IN] = null
+       !(0, Uu.e)(this, Pu)[Pu] && this.deps.allowed() ? await (0, Uu.e)(this, yZ)[yZ]() : (0, Uu.e)(this, Eu)[Eu] = null
```

#### 684. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6165` → after: `L6126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6126) · [Before (L6165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6165)

```diff
-       return (0, MN.d)(this, pN)[pN] || (0, MN.d)(this, fN)[fN] ? Promise.resolve(!1) : (0, MN.d)(this, DN)[DN] ? Promise.resolve(!0) : ((0, MN.d)(this, XN)[XN] ??= (0, MN.d)(this, PP)[PP](), (0, MN.d)(this, XN)[XN])
+       return (0, Uu.e)(this, cu)[cu] || (0, Uu.e)(this, Pu)[Pu] ? Promise.resolve(!1) : (0, Uu.e)(this, Hu)[Hu] ? Promise.resolve(!0) : ((0, Uu.e)(this, mu)[mu] ??= (0, Uu.e)(this, tZ)[tZ](), (0, Uu.e)(this, mu)[mu])
```

#### 685. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6170` → after: `L6131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6131) · [Before (L6170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6170)

```diff
-         return WW = await (0, MN.d)(this, wP)[wP](), WW
+         return RR = await (0, Uu.e)(this, qZ)[qZ](), RR
```

#### 686. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6172` → after: `L6133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6133) · [Before (L6172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6172)

```diff
-         WW || ((0, MN.d)(this, IN)[IN] = null), (0, MN.d)(this, XN)[XN] = null
+         RR || ((0, Uu.e)(this, Eu)[Eu] = null), (0, Uu.e)(this, mu)[mu] = null
```

#### 687. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6177-L6178` → after: `L6138-L6139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6138-L6139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6138-L6139) · [Before (L6177-L6178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6177-L6178)

```diff
-       if (!(0, MN.d)(this, DN)[DN]) return Promise.resolve((0, MN.d)(this, pN)[pN] ? "trapped" : "EZ");
-       if (!(0, MN.d)(this, CN)[CN]) {
+       if (!(0, Uu.e)(this, Hu)[Hu]) return Promise.resolve((0, Uu.e)(this, cu)[cu] ? "trapped" : "tK");
+       if (!(0, Uu.e)(this, Iu)[Iu]) {
```

#### 688. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6183` → after: `L6144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6144) · [Before (L6183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6183)

```diff
-         (0, MN.d)(this, CN)[CN] = {
+         (0, Uu.e)(this, Iu)[Iu] = {
```

#### 689. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6188` → after: `L6149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6149) · [Before (L6188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6188)

```diff
-       return (0, MN.d)(this, CN)[CN].promise
+       return (0, Uu.e)(this, Iu)[Iu].promise
```

#### 690. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6192-L6193` → after: `L6153-L6154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6153-L6154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6153-L6154) · [Before (L6192-L6193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6192-L6193)

```diff
-       const iW = (0, MN.d)(this, CN)[CN];
-       (0, MN.d)(this, CN)[CN] = null, null === iW || void 0 === iW || iW.resolve(WW)
+       const JR = (0, Uu.e)(this, Iu)[Iu];
+       (0, Uu.e)(this, Iu)[Iu] = null, null === JR || void 0 === JR || JR.resolve(RR)
```

#### 691. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6196` → after: `L6157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6157) · [Before (L6196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6196)

```diff
-       let WW = (0, MN.d)(this, gN)[gN];
+       let RR = (0, Uu.e)(this, Du)[Du];
```

#### 692. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6198` → after: `L6159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6159) · [Before (L6198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6198)

```diff
-         const iW = (0, MN.d)(this, BN)[BN];
+         const JR = (0, Uu.e)(this, zu)[zu];
```

#### 693. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6202` → after: `L6163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6163) · [Before (L6202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6202)

```diff
-           return iW === (0, MN.d)(this, BN)[BN] && await (0, MN.d)(this, sP)[sP](OW), !1
+           return JR === (0, Uu.e)(this, zu)[zu] && await (0, Uu.e)(this, nZ)[nZ](GR), !1
```

#### 694. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6204` → after: `L6165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6165) · [Before (L6204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6204)

```diff
-         if (iW !== (0, MN.d)(this, BN)[BN]) return this.deps.unload(), !1;
+         if (JR !== (0, Uu.e)(this, zu)[zu]) return this.deps.unload(), !1;
```

#### 695. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6206` → after: `L6167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6167) · [Before (L6206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6206)

```diff
-           EW = (0, MN.d)(this, KP)[KP]((() => mW.XNW()));
+           tR = (0, Uu.e)(this, WZ)[WZ]((() => yR.gZR()));
```

#### 696. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6208-L6210` → after: `L6169-L6171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6169-L6171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6169-L6171) · [Before (L6208-L6210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6208-L6210)

```diff
-         const NW = this.deps.core.BNW();
-         if (EW !== NW) return await (0, MN.d)(this, sP)[sP](new Error(`recorder port version ${EW}, the core's ${NW}`)), !1;
-         (0, MN.d)(this, gN)[gN] = WW
+         const uR = this.deps.core.bZR();
+         if (tR !== uR) return await (0, Uu.e)(this, nZ)[nZ](new Error(`recorder port version ${tR}, the core's ${uR}`)), !1;
+         (0, Uu.e)(this, Du)[Du] = RR
```

#### 697. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6214-L6217` → after: `L6175-L6178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6175-L6178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6175-L6178) · [Before (L6214-L6217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6214-L6217)

```diff
-         if (!(0, MN.d)(this, KP)[KP]((() => ((0, MN.d)(this, DN)[DN] = new iW.qNW, (0, MN.d)(this, VN)[VN] = iW.vNW(), !0)))) return !1;
-         (0, MN.d)(this, ZP)[ZP]();
-         const WW = (0, MN.d)(this, IN)[IN];
-         return (0, MN.d)(this, IN)[IN] = null, WW && (0, MN.d)(this, lP)[lP](xW.Uc.Control, WW), (0, MN.d)(this, tP)[tP]()
+         if (!(0, Uu.e)(this, WZ)[WZ]((() => ((0, Uu.e)(this, Hu)[Hu] = new JR.vZR, (0, Uu.e)(this, ou)[ou] = JR.AZR(), !0)))) return !1;
+         (0, Uu.e)(this, fZ)[fZ]();
+         const RR = (0, Uu.e)(this, Eu)[Eu];
+         return (0, Uu.e)(this, Eu)[Eu] = null, RR && (0, Uu.e)(this, KZ)[KZ](wR.Uc.Control, RR), (0, Uu.e)(this, iZ)[iZ]()
```

#### 698. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6219` → after: `L6180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6180) · [Before (L6219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6219)

```diff
-         return (0, MN.d)(this, AP)[AP](), await (0, MN.d)(this, sP)[sP](OW), !1
+         return (0, Uu.e)(this, wZ)[wZ](), await (0, Uu.e)(this, nZ)[nZ](GR), !1
```

#### 699. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6224` → after: `L6185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6185) · [Before (L6224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6224)

```diff
-       return this.deps.core.RNW(0), 1 === this.deps.core.RNW(1) || ((0, MN.d)(this, AP)[AP](), this.deps.failed(dN), !1)
+       return this.deps.core.OZR(0), 1 === this.deps.core.OZR(1) || ((0, Uu.e)(this, wZ)[wZ](), this.deps.failed(Ou), !1)
```

#### 700. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6228` → after: `L6189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6189) · [Before (L6228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6228)

```diff
-       (0, MN.d)(this, RN)[RN] && (0, MN.d)(this, lP)[lP](xW.Uc.Prefs, HN((0, MN.d)(this, RN)[RN].on, (0, MN.d)(this, RN)[RN].seconds)), (0, MN.d)(this, GN)[GN] && (0, MN.d)(this, WP)[WP]((0, MN.d)(this, GN)[GN])
+       (0, Uu.e)(this, ju)[ju] && (0, Uu.e)(this, KZ)[KZ](wR.Uc.Prefs, pu((0, Uu.e)(this, ju)[ju].on, (0, Uu.e)(this, ju)[ju].seconds)), (0, Uu.e)(this, du)[du] && (0, Uu.e)(this, su)[su]((0, Uu.e)(this, du)[du])
```

#### 701. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6236` → after: `L6197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6197) · [Before (L6236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6236)

```diff
-           return null !== (WW = null === (iW = (0, MN.d)(this, RN)[RN]) || void 0 === iW ? void 0 : iW.seconds) && void 0 !== WW ? WW : 0
+           return null !== (RR = null === (JR = (0, Uu.e)(this, ju)[ju]) || void 0 === JR ? void 0 : JR.seconds) && void 0 !== RR ? RR : 0
```

#### 702. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6238-L6241` → after: `L6199-L6202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6199-L6202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6199-L6202) · [Before (L6238-L6241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6238-L6241)

```diff
-         trapped: () => (0, MN.d)(this, pN)[pN],
-         busy: () => (0, MN.d)(this, mP)[mP](),
-         loadInFlight: () => (0, MN.d)(this, XN)[XN],
-         JA: () => (0, MN.d)(this, fN)[fN],
+         trapped: () => (0, Uu.e)(this, cu)[cu],
+         busy: () => (0, Uu.e)(this, JZ)[JZ](),
+         loadInFlight: () => (0, Uu.e)(this, mu)[mu],
+         He: () => (0, Uu.e)(this, Pu)[Pu],
```

#### 703. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6243` → after: `L6204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6204) · [Before (L6243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6243)

```diff
-           (0, MN.d)(this, AP)[AP]()
+           (0, Uu.e)(this, wZ)[wZ]()
```

#### 704. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6245` → after: `L6206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6206) · [Before (L6245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6245)

```diff
-         load: () => (0, MN.d)(this, NP)[NP]()
+         load: () => (0, Uu.e)(this, yZ)[yZ]()
```

#### 705. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6250-L6251` → after: `L6211-L6212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6211-L6212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6211-L6212) · [Before (L6250-L6251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6250-L6251)

```diff
-       (0, MN.d)(this, aN)[aN] ? (0, MN.d)(this, aN)[aN].push([WW, iW]): (0, MN.d)(this, MP)[MP](((OW, mW) => {
-         const EW = OW.gNW(iW.length);
+       (0, Uu.e)(this, Yu)[Yu] ? (0, Uu.e)(this, Yu)[Yu].push([RR, JR]): (0, Uu.e)(this, UZ)[UZ](((GR, yR) => {
+         const tR = GR.CZR(JR.length);
```

#### 706. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6257` → after: `L6218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6218) · [Before (L6257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6257)

```diff
-       (0, MN.d)(this, BN)[BN]++, (0, MN.d)(this, cP)[cP]("EZ"), (0, MN.d)(this, QN)[QN].stop(), this.deps.core.RNW(0), (0, MN.d)(this, bP)[bP](), (0, MN.d)(this, pN)[pN] || ((0, MN.d)(this, gN)[gN] = null, this.deps.unload())
+       (0, Uu.e)(this, zu)[zu]++, (0, Uu.e)(this, ZZ)[ZZ]("tK"), (0, Uu.e)(this, Tu)[Tu].stop(), this.deps.core.OZR(0), (0, Uu.e)(this, rZ)[rZ](), (0, Uu.e)(this, cu)[cu] || ((0, Uu.e)(this, Du)[Du] = null, this.deps.unload())
```

#### 707. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6261` → after: `L6222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6222) · [Before (L6261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6261)

```diff
-       (0, MN.d)(this, MP)[MP]((WW => {
+       (0, Uu.e)(this, UZ)[UZ]((RR => {
```

#### 708. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6263` → after: `L6224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6224) · [Before (L6263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6263)

```diff
-       })), (0, MN.d)(this, DN)[DN] = null, (0, MN.d)(this, VN)[VN] = null, (0, MN.d)(this, FN)[FN] = null
+       })), (0, Uu.e)(this, Hu)[Hu] = null, (0, Uu.e)(this, ou)[ou] = null, (0, Uu.e)(this, Fu)[Fu] = null
```

#### 709. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6269` → after: `L6230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6230) · [Before (L6269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6269)

```diff
-       return (null === (WW = (0, MN.d)(this, rN)[rN]) || void 0 === WW ? void 0 : WW.buffer) !== iW && ((0, MN.d)(this, rN)[rN] = new Uint8Array(iW)), (0, MN.d)(this, rN)[rN]
+       return (null === (RR = (0, Uu.e)(this, ku)[ku]) || void 0 === RR ? void 0 : RR.buffer) !== JR && ((0, Uu.e)(this, ku)[ku] = new Uint8Array(JR)), (0, Uu.e)(this, ku)[ku]
```

#### 710. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6275` → after: `L6236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6236) · [Before (L6275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6275)

```diff
-       return (null === (WW = (0, MN.d)(this, zN)[zN]) || void 0 === WW ? void 0 : WW.buffer) !== iW && ((0, MN.d)(this, zN)[zN] = new Uint32Array(iW, 0, iW.byteLength >>> 2)), (0, MN.d)(this, zN)[zN]
+       return (null === (RR = (0, Uu.e)(this, Qu)[Qu]) || void 0 === RR ? void 0 : RR.buffer) !== JR && ((0, Uu.e)(this, Qu)[Qu] = new Uint32Array(JR, 0, JR.byteLength >>> 2)), (0, Uu.e)(this, Qu)[Qu]
```

#### 711. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6281` → after: `L6242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6242) · [Before (L6281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6281)

```diff
-       return (null === (iW = (0, MN.d)(this, FN)[FN]) || void 0 === iW ? void 0 : iW.buffer) !== OW && ((0, MN.d)(this, FN)[FN] = new Uint8Array(OW)), (0, MN.d)(this, FN)[FN]
+       return (null === (JR = (0, Uu.e)(this, Fu)[Fu]) || void 0 === JR ? void 0 : JR.buffer) !== GR && ((0, Uu.e)(this, Fu)[Fu] = new Uint8Array(GR)), (0, Uu.e)(this, Fu)[Fu]
```

#### 712. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6290-L6292` → after: `L6251-L6253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6251-L6253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6251-L6253) · [Before (L6290-L6292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6290-L6292)

```diff
-       const iW = (0, MN.d)(this, DN)[DN],
-         OW = (0, MN.d)(this, VN)[VN];
-       if (iW && OW) return (0, MN.d)(this, KP)[KP]((() => WW(iW, OW)))
+       const JR = (0, Uu.e)(this, Hu)[Hu],
+         GR = (0, Uu.e)(this, ou)[ou];
+       if (JR && GR) return (0, Uu.e)(this, WZ)[WZ]((() => RR(JR, GR)))
```

#### 713. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6296` → after: `L6257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6257) · [Before (L6296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6296)

```diff
-       if (!(0, MN.d)(this, pN)[pN]) try {
+       if (!(0, Uu.e)(this, cu)[cu]) try {
```

#### 714. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6299` → after: `L6260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6260) · [Before (L6299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6299)

```diff
-         if (!(0, MN.d)(this, SP)[SP](iW)) throw iW;
+         if (!(0, Uu.e)(this, AZ)[AZ](JR)) throw JR;
```

#### 715. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6305` → after: `L6266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6266) · [Before (L6305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6305)

```diff
-       return WW instanceof WebAssembly.RuntimeError && ((0, MN.d)(this, pN)[pN] = !0, (0, MN.d)(this, DN)[DN] = null, (0, MN.d)(this, VN)[VN] = null, (0, MN.d)(this, FN)[FN] = null, (0, MN.d)(this, gN)[gN] = null, (0, MN.d)(this, IN)[IN] = null, (0, MN.d)(this, cP)[cP]("trapped") … [truncated]
+       return RR instanceof WebAssembly.RuntimeError && ((0, Uu.e)(this, cu)[cu] = !0, (0, Uu.e)(this, Hu)[Hu] = null, (0, Uu.e)(this, ou)[ou] = null, (0, Uu.e)(this, Fu)[Fu] = null, (0, Uu.e)(this, Du)[Du] = null, (0, Uu.e)(this, Eu)[Eu] = null, (0, Uu.e)(this, ZZ)[ZZ]("trapped") … [truncated]
```

#### 716. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6307` → after: `L6268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6268) · [Before (L6307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6307)

```diff
-     var aP = OW(39897);
+     var YZ = GR(39889);
```

#### 717. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6309` → after: `L6270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6270) · [Before (L6309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6309)

```diff
-       ["skyblock", () => OW.e(60).then((() => OW(39894)))]
+       ["skyblock", () => GR.e(60).then((() => GR(39880)))]
```

#### 718. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6315-L6316` → after: `L6276-L6277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6276-L6277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6276-L6277) · [Before (L6315-L6316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6315-L6316)

```diff
-         const iW = (0, aP.c)(WW);
-         if (!iW) throw new Error(`${WW}'s replay hook module registered no hook`);
+         const JR = (0, YZ.d)(RR);
+         if (!JR) throw new Error(`${RR}'s replay hook module registered no hook`);
```

#### 719. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6396-L6414` → after: `L6357-L6375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6357-L6375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6357-L6375) · [Before (L6396-L6414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6396-L6414)

```diff
-     var QP = (0, KN.b)("bindings"),
-       WL = (0, KN.b)("module"),
-       iL = (0, KN.b)("memory"),
-       OL = (0, KN.b)("trapped"),
-       mL = (0, KN.b)("generation"),
-       EL = (0, KN.b)("loading"),
-       NL = (0, KN.b)("lend"),
-       PL = (0, KN.b)("givenUp"),
-       LL = (0, KN.b)("afterSave"),
-       cL = (0, KN.b)("opens"),
-       wL = (0, KN.b)("saveAskedAt"),
-       tL = (0, KN.b)("unload"),
-       ZL = (0, KN.b)("dropModule"),
-       xL = (0, KN.b)("loadFailed"),
-       lL = (0, KN.b)("saveReadsBody"),
-       AL = (0, KN.b)("command"),
- ... (3 more removed lines; see GitHub link above)
+     var TZ = (0, Wu.c)("bindings"),
+       sZ = (0, Wu.c)("module"),
+       hZ = (0, Wu.c)("memory"),
+       Rq = (0, Wu.c)("trapped"),
+       Jq = (0, Wu.c)("generation"),
+       Gq = (0, Wu.c)("loading"),
+       yq = (0, Wu.c)("lend"),
+       tq = (0, Wu.c)("givenUp"),
+       uq = (0, Wu.c)("afterSave"),
+       Zq = (0, Wu.c)("opens"),
+       qq = (0, Wu.c)("saveAskedAt"),
+       iq = (0, Wu.c)("unload"),
+       fq = (0, Wu.c)("dropModule"),
+       Vq = (0, Wu.c)("loadFailed"),
+       Kq = (0, Wu.c)("saveReadsBody"),
+       wq = (0, Wu.c)("command"),
+ ... (3 more added lines; see GitHub link above)
```

#### 720. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6470` → after: `L6431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6431) · [Before (L6470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6470)

```diff
-         return null !== (0, MN.d)(this, WL)[WL] && null === (0, MN.d)(this, LL)[LL]
+         return null !== (0, Uu.e)(this, sZ)[sZ] && null === (0, Uu.e)(this, uq)[uq]
```

#### 721. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6473-L6474` → after: `L6434-L6435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6434-L6435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6434-L6435) · [Before (L6473-L6474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6473-L6474)

```diff
-         if ((0, MN.d)(this, OL)[OL]) return xW.gd.ModuleTrap;
-         let OW = (0, MN.d)(this, QP)[QP];
+         if ((0, Uu.e)(this, Rq)[Rq]) return wR.cd.ModuleTrap;
+         let GR = (0, Uu.e)(this, TZ)[TZ];
```

#### 722. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6476-L6477` → after: `L6437-L6438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6437-L6438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6437-L6438) · [Before (L6476-L6477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6476-L6477)

```diff
-           const WW = (0, MN.d)(this, mL)[mL];
-           (0, MN.d)(this, EL)[EL]++;
+           const RR = (0, Uu.e)(this, Jq)[Jq];
+           (0, Uu.e)(this, Gq)[Gq]++;
```

#### 723. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6481` → after: `L6442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6442) · [Before (L6481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6481)

```diff
-             return (0, MN.d)(this, EL)[EL]--, WW !== (0, MN.d)(this, mL)[mL] ? "stopped" : (0, MN.d)(this, xL)[xL](EW, iW)
+             return (0, Uu.e)(this, Gq)[Gq]--, RR !== (0, Uu.e)(this, Jq)[Jq] ? "stopped" : (0, Uu.e)(this, Vq)[Vq](tR, JR)
```

#### 724. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6483-L6490` → after: `L6444-L6451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6444-L6451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6444-L6451) · [Before (L6483-L6490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6483-L6490)

```diff
-           if ((0, MN.d)(this, EL)[EL]--, WW !== (0, MN.d)(this, mL)[mL]) return (0, MN.d)(this, QP)[QP] || 0 !== (0, MN.d)(this, EL)[EL] || (0, MN.d)(this, OL)[OL] || this.deps.unload(), "stopped";
-           if ((0, MN.d)(this, OL)[OL]) return xW.gd.ModuleTrap;
-           const mW = OW.XNW(),
-             NW = this.deps.core.BNW();
-           if (mW !== NW) return (0, MN.d)(this, xL)[xL](new Error(`replay port version ${mW}, the core's ${NW}`), iW);
-           (0, MN.d)(this, QP)[QP] = OW
-         }
-         if (!(0, MN.d)(this, WL)[WL]) {
+           if ((0, Uu.e)(this, Gq)[Gq]--, RR !== (0, Uu.e)(this, Jq)[Jq]) return (0, Uu.e)(this, TZ)[TZ] || 0 !== (0, Uu.e)(this, Gq)[Gq] || (0, Uu.e)(this, Rq)[Rq] || this.deps.unload(), "stopped";
+           if ((0, Uu.e)(this, Rq)[Rq]) return wR.cd.ModuleTrap;
+           const yR = GR.gZR(),
+             uR = this.deps.core.bZR();
+           if (yR !== uR) return (0, Uu.e)(this, Vq)[Vq](new Error(`replay port version ${yR}, the core's ${uR}`), JR);
+           (0, Uu.e)(this, TZ)[TZ] = GR
+         }
+         if (!(0, Uu.e)(this, sZ)[sZ]) {
```

#### 725. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6492-L6494` → after: `L6453-L6455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6453-L6455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6453-L6455) · [Before (L6492-L6494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6492-L6494)

```diff
-           if (!(0, MN.d)(this, jL)[jL]((() => {
-               (0, MN.d)(this, WL)[WL] = new WW.GNW, (0, MN.d)(this, iL)[iL] = WW.INW()
-             }))) return xW.gd.ModuleTrap
+           if (!(0, Uu.e)(this, eq)[eq]((() => {
+               (0, Uu.e)(this, sZ)[sZ] = new RR.xZR, (0, Uu.e)(this, hZ)[hZ] = RR.NZR()
+             }))) return wR.cd.ModuleTrap
```

#### 726. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6497-L6498` → after: `L6458-L6459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6458-L6459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6458-L6459) · [Before (L6497-L6498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6497-L6498)

```diff
-         return (0, MN.d)(this, bL)[bL](((iW, OW) => {
-           null !== (0, MN.d)(this, LL)[LL] && iW.step(0, 0);
+         return (0, Uu.e)(this, rq)[rq](((JR, GR) => {
+           null !== (0, Uu.e)(this, uq)[uq] && JR.step(0, 0);
```

#### 727. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6500-L6501` → after: `L6461-L6462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6461-L6462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6461-L6462) · [Before (L6500-L6501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6500-L6501)

```diff
-           0 !== EW && (new Uint8Array(OW.buffer, EW, WW.length).set(WW), iW.open(), (0, MN.d)(this, PL)[PL] = (0, MN.d)(this, NL)[NL], (0, MN.d)(this, LL)[LL] = null, (0, MN.d)(this, cL)[cL]++, mW = !0)
-         })) ? mW ? "opening" : xW.gd.TooLarge : xW.gd.ModuleTrap
+           0 !== tR && (new Uint8Array(GR.buffer, tR, RR.length).set(RR), JR.open(), (0, Uu.e)(this, tq)[tq] = (0, Uu.e)(this, yq)[yq], (0, Uu.e)(this, uq)[uq] = null, (0, Uu.e)(this, Zq)[Zq]++, yR = !0)
+         })) ? yR ? "opening" : wR.cd.TooLarge : wR.cd.ModuleTrap
```

#### 728. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6504-L6506` → after: `L6465-L6467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6465-L6467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6465-L6467) · [Before (L6504-L6506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6504-L6506)

```diff
-         const iW = (0, MN.d)(this, WL)[WL],
-           OW = (0, MN.d)(this, iL)[iL];
-         if (!iW || !OW || null !== (0, MN.d)(this, LL)[LL]) return;
+         const JR = (0, Uu.e)(this, sZ)[sZ],
+           GR = (0, Uu.e)(this, hZ)[hZ];
+         if (!JR || !GR || null !== (0, Uu.e)(this, uq)[uq]) return;
```

#### 729. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6509` → after: `L6470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6470) · [Before (L6509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6509)

```diff
-         } = this.deps, EW = mW.aNW(WW);
+         } = this.deps, tR = yR.DZR(RR);
```

#### 730. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6514` → after: `L6475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6475) · [Before (L6514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6514)

```diff
-           PW = iW.step(NW, EW - NW), LW = iW.VNW()
+           ZR = JR.step(uR, tR - uR), qR = JR.MZR()
```

#### 731. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6516` → after: `L6477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6477) · [Before (L6516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6516)

```diff
-           return void(0, MN.d)(this, UL)[UL](wW)
+           return void(0, Uu.e)(this, aq)[aq](fR)
```

#### 732. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6518` → after: `L6479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6479) · [Before (L6518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6518)

```diff
-         const cW = mW.CNW(1, PW);
+         const iR = yR.pZR(1, ZR);
```

#### 733. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6520` → after: `L6481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6481) · [Before (L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6520)

```diff
-           const WW = (0, MN.d)(this, bL)[bL]((WW => {
+           const RR = (0, Uu.e)(this, rq)[rq]((RR => {
```

#### 734. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6524` → after: `L6485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6485) · [Before (L6524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6524)

```diff
-           return (0, MN.d)(this, lL)[lL] ? (0, MN.d)(this, LL)[LL] = "drop" : (0, MN.d)(this, ZL)[ZL](), void mW.zNW(xW.gd.Port)
+           return (0, Uu.e)(this, Kq)[Kq] ? (0, Uu.e)(this, uq)[uq] = "drop" : (0, Uu.e)(this, fq)[fq](), void yR.oZR(wR.cd.Port)
```

#### 735. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6529` → after: `L6490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6490) · [Before (L6529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6529)

```diff
-         (0, MN.d)(this, AL)[AL]((WW => {
+         (0, Uu.e)(this, wq)[wq]((RR => {
```

#### 736. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6534` → after: `L6495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6495) · [Before (L6534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6534)

```diff
-         (0, MN.d)(this, AL)[AL]((WW => {
+         (0, Uu.e)(this, wq)[wq]((RR => {
```

#### 737. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6540` → after: `L6501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6501) · [Before (L6540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6540)

```diff
-         (0, MN.d)(this, AL)[AL]((OW => {
+         (0, Uu.e)(this, wq)[wq]((GR => {
```

#### 738. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6545-L6546` → after: `L6506-L6507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6506-L6507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6506-L6507) · [Before (L6545-L6546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6545-L6546)

```diff
-         return (0, MN.d)(this, AL)[AL]((OW => {
-           OW.FNW(WW, iW)
+         return (0, Uu.e)(this, wq)[wq]((GR => {
+           GR.cZR(RR, JR)
```

#### 739. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6550-L6551` → after: `L6511-L6512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6511-L6512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6511-L6512) · [Before (L6550-L6551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6550-L6551)

```diff
-         return (0, MN.d)(this, AL)[AL]((OW => {
-           OW.QNW(WW[0], WW[1], WW[2], iW[0], iW[1], iW[2])
+         return (0, Uu.e)(this, wq)[wq]((GR => {
+           GR.PZR(RR[0], RR[1], RR[2], JR[0], JR[1], JR[2])
```

#### 740. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6555-L6556` → after: `L6516-L6517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6516-L6517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6516-L6517) · [Before (L6555-L6556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6555-L6556)

```diff
-         return (0, MN.d)(this, AL)[AL]((OW => {
-           OW.WPW(WW, iW)
+         return (0, Uu.e)(this, wq)[wq]((GR => {
+           GR.IZR(RR, JR)
```

#### 741. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6560-L6561` → after: `L6521-L6522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6521-L6522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6521-L6522) · [Before (L6560-L6561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6560-L6561)

```diff
-         return (0, MN.d)(this, AL)[AL]((OW => {
-           OW.iPW(WW, iW)
+         return (0, Uu.e)(this, wq)[wq]((GR => {
+           GR.mZR(RR, JR)
```

#### 742. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6565-L6566` → after: `L6526-L6527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6526-L6527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6526-L6527) · [Before (L6565-L6566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6565-L6566)

```diff
-         return (0, MN.d)(this, AL)[AL]((OW => {
-           OW.OPW(WW, iW)
+         return (0, Uu.e)(this, wq)[wq]((GR => {
+           GR.zZR(RR, JR)
```

#### 743. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6570` → after: `L6531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6531) · [Before (L6570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6570)

```diff
-         return null === (0, MN.d)(this, NL)[NL] && (0, MN.d)(this, AL)[AL]((OW => {
+         return null === (0, Uu.e)(this, yq)[yq] && (0, Uu.e)(this, wq)[wq]((GR => {
```

#### 744. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6575-L6576` → after: `L6536-L6537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6536-L6537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6536-L6537) · [Before (L6575-L6576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6575-L6576)

```diff
-         const WW = (0, MN.d)(this, wL)[wL];
-         if ((0, MN.d)(this, wL)[wL] = null, null !== WW && WW !== (0, MN.d)(this, cL)[cL]) return null;
+         const RR = (0, Uu.e)(this, qq)[qq];
+         if ((0, Uu.e)(this, qq)[qq] = null, null !== RR && RR !== (0, Uu.e)(this, Zq)[Zq]) return null;
```

#### 745. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6579-L6580` → after: `L6540-L6541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6540-L6541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6540-L6541) · [Before (L6579-L6580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6579-L6580)

```diff
-         if ((0, MN.d)(this, bL)[bL](((WW, mW) => {
-             iW = WW.save(), 0 !== iW && (OW = new Uint8Array(mW.buffer, WW.mPW(), WW.EPW()).slice())
+         if ((0, Uu.e)(this, rq)[rq](((RR, yR) => {
+             JR = RR.save(), 0 !== JR && (GR = new Uint8Array(yR.buffer, RR.SZR(), RR.jZR()).slice())
```

#### 746. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6585` → after: `L6546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6546) · [Before (L6585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6585)

```diff
-           givenUp: () => (0, MN.d)(this, PL)[PL] === mW,
+           givenUp: () => (0, Uu.e)(this, tq)[tq] === yR,
```

#### 747. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6587` → after: `L6548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6548) · [Before (L6587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6587)

```diff
-             if ((0, MN.d)(this, NL)[NL] !== mW || !(0, MN.d)(this, lL)[lL]) return null;
+             if ((0, Uu.e)(this, yq)[yq] !== yR || !(0, Uu.e)(this, Kq)[Kq]) return null;
```

#### 748. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6589-L6591` → after: `L6550-L6552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6550-L6552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6550-L6552) · [Before (L6589-L6591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6589-L6591)

```diff
-             return (0, MN.d)(this, bL)[bL](((mW, EW) => {
-               const NW = mW.NPW();
-               0 !== NW && WW >= 0 && iW >= 0 && WW + iW <= NW && (OW = new Uint8Array(EW.buffer, mW.PPW() + WW, iW))
+             return (0, Uu.e)(this, rq)[rq](((yR, tR) => {
+               const uR = yR.dZR();
+               0 !== uR && RR >= 0 && JR >= 0 && RR + JR <= uR && (GR = new Uint8Array(tR.buffer, yR.EZR() + RR, JR))
```

#### 749. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6595-L6597` → after: `L6556-L6558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6556-L6558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6556-L6558) · [Before (L6595-L6597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6595-L6597)

```diff
-             if ((0, MN.d)(this, NL)[NL] !== mW) return;
-             (0, MN.d)(this, NL)[NL] = null, (0, MN.d)(this, PL)[PL] = null, (0, MN.d)(this, bL)[bL]((WW => {
-               WW.LPW()
+             if ((0, Uu.e)(this, yq)[yq] !== yR) return;
+             (0, Uu.e)(this, yq)[yq] = null, (0, Uu.e)(this, tq)[tq] = null, (0, Uu.e)(this, rq)[rq]((RR => {
+               RR.YZR()
```

#### 750. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6599-L6600` → after: `L6560-L6561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6560-L6561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6560-L6561) · [Before (L6599-L6600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6599-L6600)

```diff
-             const WW = (0, MN.d)(this, LL)[LL];
-             (0, MN.d)(this, LL)[LL] = null, "unload" === WW ? (0, MN.d)(this, tL)[tL]() : "drop" === WW && (0, MN.d)(this, ZL)[ZL]()
+             const RR = (0, Uu.e)(this, uq)[uq];
+             (0, Uu.e)(this, uq)[uq] = null, "unload" === RR ? (0, Uu.e)(this, iq)[iq]() : "drop" === RR && (0, Uu.e)(this, fq)[fq]()
```

#### 751. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6603` → after: `L6564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6564) · [Before (L6603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6603)

```diff
-         return (0, MN.d)(this, NL)[NL] = mW, mW
+         return (0, Uu.e)(this, yq)[yq] = yR, yR
```

#### 752. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6606` → after: `L6567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6567) · [Before (L6606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6606)

```diff
-         (0, MN.d)(this, wL)[wL] = (0, MN.d)(this, cL)[cL]
+         (0, Uu.e)(this, qq)[qq] = (0, Uu.e)(this, Zq)[Zq]
```

#### 753. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6609-L6610` → after: `L6570-L6571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6570-L6571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6570-L6571) · [Before (L6609-L6610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6609-L6610)

```diff
-         (0, MN.d)(this, AL)[AL]((iW => {
-           iW.cPW(WW)
+         (0, Uu.e)(this, wq)[wq]((JR => {
+           JR.kZR(RR)
```

#### 754. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6614-L6615` → after: `L6575-L6576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6575-L6576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6575-L6576) · [Before (L6614-L6615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6614-L6615)

```diff
-         (0, MN.d)(this, AL)[AL]((iW => {
-           iW.wPW(WW)
+         (0, Uu.e)(this, wq)[wq]((JR => {
+           JR.QZR(RR)
```

#### 755. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6619` → after: `L6580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6580) · [Before (L6619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6619)

```diff
-         (0, MN.d)(this, AL)[AL]((WW => {
+         (0, Uu.e)(this, wq)[wq]((RR => {
```

#### 756. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6624` → after: `L6585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6585) · [Before (L6624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6624)

```diff
-         (0, MN.d)(this, mL)[mL]++, (0, MN.d)(this, lL)[lL] && ((0, MN.d)(this, bL)[bL]((WW => {
+         (0, Uu.e)(this, Jq)[Jq]++, (0, Uu.e)(this, Kq)[Kq] && ((0, Uu.e)(this, rq)[rq]((RR => {
```

#### 757. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6626` → after: `L6587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6587) · [Before (L6626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6626)

```diff
-         })), (0, MN.d)(this, WL)[WL]) ? (0, MN.d)(this, LL)[LL] = "unload" : (0, MN.d)(this, tL)[tL]()
+         })), (0, Uu.e)(this, sZ)[sZ]) ? (0, Uu.e)(this, uq)[uq] = "unload" : (0, Uu.e)(this, iq)[iq]()
```

#### 758. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6631` → after: `L6592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6592) · [Before (L6631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6631)

```diff
-       (0, MN.d)(this, ZL)[ZL](), (0, MN.d)(this, OL)[OL] || ((0, MN.d)(this, QP)[QP] = null, this.deps.unload())
+       (0, Uu.e)(this, fq)[fq](), (0, Uu.e)(this, Rq)[Rq] || ((0, Uu.e)(this, TZ)[TZ] = null, this.deps.unload())
```

#### 759. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6635` → after: `L6596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6596) · [Before (L6635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6635)

```diff
-       (0, MN.d)(this, bL)[bL]((WW => {
+       (0, Uu.e)(this, rq)[rq]((RR => {
```

#### 760. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6637` → after: `L6598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6598) · [Before (L6637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6637)

```diff
-       })), (0, MN.d)(this, WL)[WL] = null, (0, MN.d)(this, iL)[iL] = null
+       })), (0, Uu.e)(this, sZ)[sZ] = null, (0, Uu.e)(this, hZ)[hZ] = null
```

#### 761. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6642` → after: `L6603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6603) · [Before (L6642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6642)

```diff
-       }) ? "reloading" : xW.gd.ModuleLoad
+       }) ? "reloading" : wR.cd.ModuleLoad
```

#### 762. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6646` → after: `L6607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6607) · [Before (L6646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6646)

```diff
-       return null !== (0, MN.d)(this, NL)[NL] && (0, MN.d)(this, PL)[PL] !== (0, MN.d)(this, NL)[NL]
+       return null !== (0, Uu.e)(this, yq)[yq] && (0, Uu.e)(this, tq)[tq] !== (0, Uu.e)(this, yq)[yq]
```

#### 763. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6650` → after: `L6611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6611) · [Before (L6650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6650)

```diff
-       return null === (0, MN.d)(this, LL)[LL] && (0, MN.d)(this, bL)[bL](WW)
+       return null === (0, Uu.e)(this, uq)[uq] && (0, Uu.e)(this, rq)[rq](RR)
```

#### 764. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6654-L6656` → after: `L6615-L6617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6615-L6617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6615-L6617) · [Before (L6654-L6656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6654-L6656)

```diff
-       const iW = (0, MN.d)(this, WL)[WL],
-         OW = (0, MN.d)(this, iL)[iL];
-       return !(!iW || !OW) && (0, MN.d)(this, jL)[jL]((() => {
+       const JR = (0, Uu.e)(this, sZ)[sZ],
+         GR = (0, Uu.e)(this, hZ)[hZ];
+       return !(!JR || !GR) && (0, Uu.e)(this, eq)[eq]((() => {
```

#### 765. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6662` → after: `L6623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6623) · [Before (L6662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6662)

```diff
-       if ((0, MN.d)(this, OL)[OL]) return !1;
+       if ((0, Uu.e)(this, Rq)[Rq]) return !1;
```

#### 766. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6666` → after: `L6627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6627) · [Before (L6666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6666)

```diff
-         return (0, MN.d)(this, UL)[UL](iW), !1
+         return (0, Uu.e)(this, aq)[aq](JR), !1
```

#### 767. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6672` → after: `L6633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6633) · [Before (L6672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6672)

```diff
-       (0, MN.d)(this, OL)[OL] = !0, (0, MN.d)(this, WL)[WL] = null, (0, MN.d)(this, iL)[iL] = null, (0, MN.d)(this, QP)[QP] = null, this.deps.crash(this.deps.markTrapped(WW)), this.deps.core.zNW(xW.gd.ModuleTrap)
+       (0, Uu.e)(this, Rq)[Rq] = !0, (0, Uu.e)(this, sZ)[sZ] = null, (0, Uu.e)(this, hZ)[hZ] = null, (0, Uu.e)(this, TZ)[TZ] = null, this.deps.crash(this.deps.markTrapped(RR)), this.deps.core.oZR(wR.cd.ModuleTrap)
```

#### 768. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6674-L6675` → after: `L6635-L6636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6635-L6636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6635-L6636) · [Before (L6674-L6675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6674-L6675)

```diff
-     var hL = OW(7459),
-       HL = OW(42519);
+     var lq = GR(7596),
+       pq = GR(42563);
```

#### 769. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6686` → after: `L6647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6647) · [Before (L6686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6686)

```diff
-         case xW.pd.FlyingText: {
+         case wR.jd.FlyingText: {
```

#### 770. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6691` → after: `L6652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6652) · [Before (L6691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6691)

```diff
-             return void console.warn(`${nL} a replay's flying text isn't JSON`, wW)
+             return void console.warn(`${gq} a replay's flying text isn't JSON`, fR)
```

#### 771. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6693` → after: `L6654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6654) · [Before (L6693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6693)

```diff
-           PW.l.iZ("forceFlyingMiddleMessage", {
+           ZR.n.JK("forceFlyingMiddleMessage", {
```

#### 772. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6695` → after: `L6656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6656) · [Before (L6695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6695)

```diff
-             RN: WW.RN,
+             hu: RR.hu,
```

#### 773. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6697` → after: `L6658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6658) · [Before (L6697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6697)

```diff
-             GN: WW.GN
+             RZ: RR.RZ
```

#### 774. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6701-L6702` → after: `L6662-L6663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6662-L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6662-L6663) · [Before (L6701-L6702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6701-L6702)

```diff
-         case xW.pd.PlayerKilled:
-           (0, HL.g)({
+         case wR.jd.PlayerKilled:
+           (0, pq.f)({
```

#### 775. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6705` → after: `L6666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6666) · [Before (L6705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6705)

```diff
-               deadEId: null !== (iW = oL(WW.dead)) && void 0 !== iW ? iW : "",
+               deadEId: null !== (JR = vq(RR.dead)) && void 0 !== JR ? JR : "",
```

#### 776. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6707` → after: `L6668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6668) · [Before (L6707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6707)

```diff
-               withItem: null !== (OW = WW.withItem) && void 0 !== OW ? OW : "",
+               withItem: null !== (GR = RR.withItem) && void 0 !== GR ? GR : "",
```

#### 777. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6712-L6713` → after: `L6673-L6674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6673-L6674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6673-L6674) · [Before (L6712-L6713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6712-L6713)

```diff
-         case xW.pd.Killfeed:
-           (0, HL.g)({
+         case wR.jd.Killfeed:
+           (0, pq.f)({
```

#### 778. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6718-L6719` → after: `L6679-L6680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6679-L6680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6679-L6680) · [Before (L6718-L6719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6718-L6719)

```diff
-                 name: null !== (mW = WW.killerName) && void 0 !== mW ? mW : void 0,
-                 colour: null !== (EW = WW.killerColour) && void 0 !== EW ? EW : void 0
+                 name: null !== (yR = RR.killerName) && void 0 !== yR ? yR : void 0,
+                 colour: null !== (tR = RR.killerColour) && void 0 !== tR ? tR : void 0
```

#### 779. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6723-L6724` → after: `L6684-L6685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6684-L6685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6684-L6685) · [Before (L6723-L6724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6723-L6724)

```diff
-                 name: null !== (NW = WW.victimName) && void 0 !== NW ? NW : void 0,
-                 colour: null !== (LW = WW.victimColour) && void 0 !== LW ? LW : void 0
+                 name: null !== (uR = RR.victimName) && void 0 !== uR ? uR : void 0,
+                 colour: null !== (qR = RR.victimColour) && void 0 !== qR ? qR : void 0
```

#### 780. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6726` → after: `L6687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6687) · [Before (L6726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6726)

```diff
-               withItem: null !== (cW = WW.withItem) && void 0 !== cW ? cW : ""
+               withItem: null !== (iR = RR.withItem) && void 0 !== iR ? iR : ""
```

#### 781. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6736` → after: `L6697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6697) · [Before (L6736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6736)

```diff
-       return Number.isInteger(iW) && iW > rE && iW <= 2147483647 ? iW : null
+       return Number.isInteger(JR) && JR > kt && JR <= 2147483647 ? JR : null
```

#### 782. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6748` → after: `L6709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6709) · [Before (L6748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6748)

```diff
-       const iW = (0, PN.j)(wm.uc.PlayerKilled, (iW => {
+       const JR = (0, tu.l)(qy.sc.PlayerKilled, (JR => {
```

#### 783. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6750-L6751` → after: `L6711-L6712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6711-L6712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6711-L6712) · [Before (L6750-L6751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6750-L6751)

```diff
-           const EW = (0, NN.j)(iW);
-           if (!(0, NN.d)(EW)) return;
+           const tR = (0, yu.k)(JR);
+           if (!(0, yu.e)(tR)) return;
```

#### 784. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6758` → after: `L6719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6719) · [Before (L6758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6758)

```diff
-           WW.recordPlayerKilled(null !== (OW = vL(NW)) && void 0 !== OW ? OW : rE, null !== (mW = vL(PW)) && void 0 !== mW ? mW : rE, "number" === typeof cW ? cW : 0, "string" === typeof LW ? LW : "")
+           RR.recordPlayerKilled(null !== (GR = Nq(uR)) && void 0 !== GR ? GR : kt, null !== (yR = Nq(ZR)) && void 0 !== yR ? yR : kt, "number" === typeof iR ? iR : 0, "string" === typeof qR ? qR : "")
```

#### 785. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6760-L6762` → after: `L6721-L6723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6721-L6723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6721-L6723) · [Before (L6760-L6762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6760-L6762)

```diff
-         OW = (0, PN.j)(wm.uc.CustomKillfeed, (iW => {
-           const OW = (0, NN.j)(iW);
-           if (!(0, NN.d)(OW) || !(0, NN.d)(OW.killer) || !(0, NN.d)(OW.victim)) return;
+         GR = (0, tu.l)(qy.sc.CustomKillfeed, (JR => {
+           const GR = (0, yu.k)(JR);
+           if (!(0, yu.e)(GR) || !(0, yu.e)(GR.killer) || !(0, yu.e)(GR.victim)) return;
```

#### 786. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6768` → after: `L6729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6729) · [Before (L6768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6768)

```diff
-           WW.recordKillfeed(gL(mW), gL(EW), "string" === typeof NW ? NW : null)
+           RR.recordKillfeed(Dq(yR), Dq(tR), "string" === typeof uR ? uR : null)
```

#### 787. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6781` → after: `L6742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6742) · [Before (L6781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6781)

```diff
-         } = mW.d.get("clientEscMenuOptions"), NW = `${OW}:${EW}`;
+         } = yR.d.get("clientEscMenuOptions"), uR = `${GR}:${tR}`;
```

#### 788. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6784` → after: `L6745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6745) · [Before (L6784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6784)

```diff
-       return OW(), (0, PW.n)("appManagerUpdated|clientEscMenuOptions", OW)
+       return GR(), (0, ZR.q)("appManagerUpdated|clientEscMenuOptions", GR)
```

#### 789. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6791` → after: `L6752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6752) · [Before (L6791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6791)

```diff
-         return WW.isStopped ? OW : iW(...arguments)
+         return RR.isStopped ? GR : JR(...arguments)
```

#### 790. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6795` → after: `L6756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6756) · [Before (L6795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6795)

```diff
-       open: () => Promise.reject(new Error(fE.e.coreStopped.text)),
+       open: () => Promise.reject(new Error(Pt.d.coreStopped.text)),
```

#### 791. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6803` → after: `L6764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6764) · [Before (L6803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6803)

```diff
-       return OW.e(77).then((() => OW(64604)))
+       return GR.e(77).then((() => GR(64335)))
```

#### 792. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6807` → after: `L6768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6768) · [Before (L6807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6807)

```diff
-       (0, fE.i)({
+       (0, Pt.e)({
```

#### 793. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6819` → after: `L6780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6780) · [Before (L6819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6819)

```diff
-         } = WW, NW = () => WW.memory().buffer, PW = () => iW.isStopped ? null : iW.rings.cmd, LW = CL(iW, ((WW, iW) => EW.CNW(WW, iW)), 0), cW = () => EW.BNW();
+         } = RR, uR = () => RR.memory().buffer, ZR = () => JR.isStopped ? null : JR.rings.cmd, qR = Iq(JR, ((RR, JR) => tR.pZR(RR, JR)), 0), iR = () => tR.bZR();
```

#### 794. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6823-L6827` → after: `L6784-L6788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6784-L6788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6784-L6788) · [Before (L6823-L6827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6823-L6827)

```diff
-             aNW: CL(iW, (WW => EW.aNW(WW)), -1),
-             CNW: LW,
-             BNW: cW,
-             zNW: CL(iW, (WW => {
-               EW.zNW(WW)
+             DZR: Iq(JR, (RR => tR.DZR(RR)), -1),
+             pZR: qR,
+             bZR: iR,
+             oZR: Iq(JR, (RR => {
+               tR.oZR(RR)
```

#### 795. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6831` → after: `L6792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6792) · [Before (L6831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6831)

```diff
-           load: async () => (wW = await OW.e(78).then((() => OW(64611))), wW.loadReplayModule()),
+           load: async () => (fR = await GR.e(78).then((() => GR(64348))), fR.loadReplayModule()),
```

#### 796. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6845-L6848` → after: `L6806-L6809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6806-L6809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6806-L6809) · [Before (L6845-L6848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6845-L6848)

```diff
-             RNW: CL(iW, (WW => EW.RNW(WW)), 0),
-             DNW: CL(iW, (WW => EW.DNW(WW)), 0),
-             CNW: LW,
-             BNW: cW
+             OZR: Iq(JR, (RR => tR.OZR(RR)), 0),
+             XZR: Iq(JR, (RR => tR.XZR(RR)), 0),
+             pZR: qR,
+             bZR: iR
```

#### 797. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6858` → after: `L6819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6819) · [Before (L6858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6858)

```diff
-               console.warn(`${eL} the recorder module didn't prefetch, so a save loads it:`, WW)
+               console.warn(`${xq} the recorder module didn't prefetch, so a save loads it:`, RR)
```

#### 798. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6868` → after: `L6829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6829) · [Before (L6868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6868)

```diff
-             return null !== (WW = null === (iW = tW) || void 0 === iW ? void 0 : iW.recorderMemoryBytes()) && void 0 !== WW ? WW : 0
+             return null !== (RR = null === (JR = VR) || void 0 === JR ? void 0 : JR.recorderMemoryBytes()) && void 0 !== RR ? RR : 0
```

#### 799. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6887-L6889` → after: `L6848-L6850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6848-L6850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6848-L6850) · [Before (L6887-L6889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6887-L6889)

```diff
-             hNW: CL(iW, (WW => EW.hNW(WW)), 0),
-             nNW: CL(iW, (() => {
-               EW.nNW()
+             rZR: Iq(JR, (RR => tR.rZR(RR)), 0),
+             aZR: Iq(JR, (() => {
+               tR.aZR()
```

#### 800. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6891-L6892` → after: `L6852-L6853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6852-L6853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6852-L6853) · [Before (L6891-L6892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6891-L6892)

```diff
-             EU: CL(iW, (() => EW.EU()), 0),
-             HNW: CL(iW, (() => EW.HNW()), 0)
+             yn: Iq(JR, (() => tR.yn()), 0),
+             eZR: Iq(JR, (() => tR.eZR()), 0)
```

#### 801. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6905` → after: `L6866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6866) · [Before (L6905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6905)

```diff
-             console.warn(`${eL} the recorded game's replay hooks:`, WW)
+             console.warn(`${xq} the recorded game's replay hooks:`, RR)
```

#### 802. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6914` → after: `L6875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6875) · [Before (L6914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6914)

```diff
-           notify: fE.i,
+           notify: Pt.e,
```

#### 803. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6917` → after: `L6878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6878) · [Before (L6917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6917)

```diff
-             null === (WW = (0, XE.h)()) || void 0 === WW || WW.recorderChanged()
+             null === (RR = (0, mt.f)()) || void 0 === RR || RR.recorderChanged()
```

#### 804. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6921` → after: `L6882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6882) · [Before (L6921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6921)

```diff
-             null === (WW = (0, XE.h)()) || void 0 === WW || WW.viewerChanged()
+             null === (RR = (0, mt.f)()) || void 0 === RR || RR.viewerChanged()
```

#### 805. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6928-L6929` → after: `L6889-L6890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6889-L6890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6889-L6890) · [Before (L6928-L6929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6928-L6929)

```diff
-               let NW = null !== (OW = iW.value) && void 0 !== OW ? OW : JSON.parse(JSON.stringify(null !== (mW = hL.c[EW]) && void 0 !== mW ? mW : null));
-               if (null !== iW.value && iW.key < wm.$b.Environment && "string" === typeof NW) try {
+               let uR = null !== (GR = JR.value) && void 0 !== GR ? GR : JSON.parse(JSON.stringify(null !== (yR = lq.d[tR]) && void 0 !== yR ? yR : null));
+               if (null !== JR.value && JR.key < qy.ac.Environment && "string" === typeof uR) try {
```

#### 806. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6932` → after: `L6893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6893) · [Before (L6932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6932)

```diff
-                 return void console.warn(`${nL} a replay's ${EW} isn't JSON`, PW)
+                 return void console.warn(`${gq} a replay's ${tR} isn't JSON`, ZR)
```

#### 807. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6941` → after: `L6902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6902) · [Before (L6941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6941)

```diff
-             this.entityHooks.opened((0, hW.Tb)(iW)), WW.replayShaderPack(iW)
+             this.entityHooks.opened((0, gR.Sb)(JR)), RR.replayShaderPack(JR)
```

#### 808. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6945` → after: `L6906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6906) · [Before (L6945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6945)

```diff
-             return null !== (WW = null === (OW = iW.lastHeader) || void 0 === OW ? void 0 : OW.renderPending) && void 0 !== WW ? WW : 0
+             return null !== (RR = null === (GR = JR.lastHeader) || void 0 === GR ? void 0 : GR.renderPending) && void 0 !== RR ? RR : 0
```

#### 809. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6952` → after: `L6913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6913) · [Before (L6952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6952)

```diff
-         this.runtime = xW, mW.replay = xW.sink, (0, XE.x)(xW);
+         this.runtime = wR, yR.replay = wR.sink, (0, mt.r)(wR);
```

#### 810. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6961` → after: `L6922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6922) · [Before (L6961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6961)

```diff
-         this.freecam = lW, (0, XE.t)(lW), this.recordedOptions = function(WW, iW) {
+         this.freecam = rR, (0, mt.o)(rR), this.recordedOptions = function(RR, JR) {
```

#### 811. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6974` → after: `L6935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6935) · [Before (L6974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6974)

```diff
-         }(xW.recorder, WW.options), this.stops = [(0, sm.n)((WW => {
+         }(wR.recorder, RR.options), this.stops = [(0, ny.g)((RR => {
```

#### 812. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6981` → after: `L6942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6942) · [Before (L6981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6981)

```diff
-         })), (0, sm.B)(((WW, iW) => {
+         })), (0, ny.t)(((RR, JR) => {
```

#### 813. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6994` → after: `L6955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6955) · [Before (L6994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6994)

```diff
-         }, DL(xW.recorder), (0, LN.g)((WW => {
+         }, Hq(wR.recorder), (0, uu.f)((RR => {
```

#### 814. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7000` → after: `L6961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6961) · [Before (L7000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7000)

```diff
-           OW && (null === (mW = (0, XE.h)()) || void 0 === mW || mW.keyDown(iW))
+           GR && (null === (yR = (0, mt.f)()) || void 0 === yR || yR.keyDown(JR))
```

#### 815. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7004` → after: `L6965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6965) · [Before (L7004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7004)

```diff
-           return !0 === (null === WW || void 0 === WW ? void 0 : WW.isOpen) ? WW : null
+           return !0 === (null === RR || void 0 === RR ? void 0 : RR.isOpen) ? RR : null
```

#### 816. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7006` → after: `L6967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6967) · [Before (L7006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7006)

```diff
-         (0, pE.f)({
+         (0, ct.e)({
```

#### 817. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7010` → after: `L6971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6971) · [Before (L7010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7010)

```diff
-             return null !== (WW = null === (iW = AW()) || void 0 === iW ? void 0 : iW.id) && void 0 !== WW ? WW : null
+             return null !== (RR = null === (JR = eR()) || void 0 === JR ? void 0 : JR.id) && void 0 !== RR ? RR : null
```

#### 818. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7014` → after: `L6975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6975) · [Before (L7014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7014)

```diff
-             return null !== (WW = null === (iW = AW()) || void 0 === iW ? void 0 : iW.saveRefusal) && void 0 !== WW ? WW : null
+             return null !== (RR = null === (JR = eR()) || void 0 === JR ? void 0 : JR.saveRefusal) && void 0 !== RR ? RR : null
```

#### 819. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7018` → after: `L6979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6979) · [Before (L7018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7018)

```diff
-             return null !== (WW = null === (iW = AW()) || void 0 === iW ? void 0 : iW.save()) && void 0 !== WW ? WW : Promise.resolve(null)
+             return null !== (RR = null === (JR = eR()) || void 0 === JR ? void 0 : JR.save()) && void 0 !== RR ? RR : Promise.resolve(null)
```

#### 820. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7022` → after: `L6983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6983) · [Before (L7022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7022)

```diff
-             return null !== (WW = null === (iW = xW.currentViewer) || void 0 === iW ? void 0 : iW.fileHandle) && void 0 !== WW ? WW : null
+             return null !== (RR = null === (JR = wR.currentViewer) || void 0 === JR ? void 0 : JR.fileHandle) && void 0 !== RR ? RR : null
```

#### 821. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7032` → after: `L6993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6993) · [Before (L7032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7032)

```diff
-           if (WW.phase === xW.A.Activated) {
+           if (RR.phase === wR.H.Activated) {
```

#### 822. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7036` → after: `L6997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6997) · [Before (L7036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7036)

```diff
-               lobbyType: (0, HW.A)(iW.lobbyName),
+               lobbyType: (0, bR.q)(JR.lobbyName),
```

#### 823. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7040` → after: `L7001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7001) · [Before (L7040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7040)

```diff
-           } else WW.phase !== xW.A.Left && WW.phase !== xW.A.Closed || WW.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
+           } else RR.phase !== wR.H.Left && RR.phase !== wR.H.Closed || RR.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
```

#### 824. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7046` → after: `L7007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7007) · [Before (L7046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7046)

```diff
-           this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, XE.n)() === this.runtime && (0, XE.x)(null), (0, XE.j)() === this.freecam && (0, XE.t)(null), (0, pE.f)(XL), null !== this.bench && window.wasmReplayBench === this.bench && (w … [truncated]
+           this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, mt.l)() === this.runtime && (0, mt.r)(null), (0, mt.i)() === this.freecam && (0, mt.o)(null), (0, ct.e)(mq), null !== this.bench && window.wasmReplayBench === this.bench && (w … [truncated]
```

#### 825. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7053-L7054` → after: `L7014-L7015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7014-L7015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7014-L7015) · [Before (L7053-L7054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7053-L7054)

```diff
-         if (OW.isStopped) throw new Error(fE.e.coreStopped.text);
-         if (WW.byteLength > 67108864) throw new Error(fE.e.cantOpen.text);
+         if (GR.isStopped) throw new Error(Pt.d.coreStopped.text);
+         if (RR.byteLength > 67108864) throw new Error(Pt.d.cantOpen.text);
```

#### 826. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7059` → after: `L7020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7020) · [Before (L7059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7059)

```diff
-             return iW.inPlayback || (0, sm.K)().leaveGame(null), iW
+             return JR.inPlayback || (0, ny.E)().leaveGame(null), JR
```

#### 827. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7062` → after: `L7023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7023) · [Before (L7062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7062)

```diff
-           throw console.warn(`${eL} the replay viewer didn't load`, EW), new Error(fE.e.viewerLoadFailed.text)
+           throw console.warn(`${xq} the replay viewer didn't load`, tR), new Error(Pt.d.viewerLoadFailed.text)
```

#### 828. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7064` → after: `L7025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7025) · [Before (L7064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7064)

```diff
-         if (OW.isStopped) throw new Error(fE.e.coreStopped.text);
+         if (GR.isStopped) throw new Error(Pt.d.coreStopped.text);
```

#### 829. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7068` → after: `L7029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7029) · [Before (L7068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7068)

```diff
-     var GL = OW(2061);
+     var dq = GR(2163);
```

#### 830. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7076` → after: `L7037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7037) · [Before (L7076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7076)

```diff
-           aux: WW.reset ? xW.bc.ResetFirst : 0,
+           aux: RR.reset ? wR.$b.ResetFirst : 0,
```

#### 831. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7080` → after: `L7041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7041) · [Before (L7080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7080)

```diff
-       WW.queueOptions(OW, mW) && (iW.reset && GL.d.reset(), GL.d.apply(iW.changes))
+       RR.queueOptions(GR, yR) && (JR.reset && dq.c.reset(), dq.c.apply(JR.changes))
```

#### 832. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7153-L7157` → after: `L7114-L7118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7114-L7118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7114-L7118) · [Before (L7153-L7157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7153-L7157)

```diff
-     var ic = OW(37336),
-       Oc = OW(37432),
-       mc = OW(42455),
-       Ec = OW(42482),
-       Nc = OW(2388);
+     var hq = GR(37247),
+       Ri = GR(37341),
+       Ji = GR(42488),
+       Gi = GR(42526),
+       yi = GR(2457);
```

#### 833. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7161` → after: `L7122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7122) · [Before (L7161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7161)

```diff
-         this.host = WW, this.sets = new Map, this.table = [], this.generation = 0, this.JA = !1
+         this.host = RR, this.sets = new Map, this.table = [], this.generation = 0, this.He = !1
```

#### 834. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7165` → after: `L7126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7126) · [Before (L7165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7165)

```diff
-           if (WW.byteLength !== xW.Cd) return null;
+           if (RR.byteLength !== wR.sd) return null;
```

#### 835. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7172` → after: `L7133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7133) · [Before (L7172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7172)

```diff
-         iW && !this.JA && (iW.release !== xW.Ed && this.release(iW.release), iW.want !== xW.Ed && this.want(iW.want))
+         JR && !this.He && (JR.release !== wR.vd && this.release(JR.release), JR.want !== wR.vd && this.want(JR.want))
```

#### 836. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7175` → after: `L7136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7136) · [Before (L7175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7175)

```diff
-         if (!this.JA) {
+         if (!this.He) {
```

#### 837. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7181-L7182` → after: `L7142-L7143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7142-L7143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7142-L7143) · [Before (L7181-L7182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7181-L7182)

```diff
-         if (this.JA) return;
-         this.JA = !0, this.generation++, this.table = [];
+         if (this.He) return;
+         this.He = !0, this.generation++, this.table = [];
```

#### 838. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7188` → after: `L7149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7149) · [Before (L7188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7188)

```diff
-             this.host.mEW(WW)
+             this.host.jtR(RR)
```

#### 839. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7205` → after: `L7166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7166) · [Before (L7205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7205)

```diff
-         if (!OW || 1 !== OW.urls.length && OW.urls.length !== wm.nc.CubeFaces) return this.host.sendReady(tc(WW)), void this.host.onLoadFailed(WW, "", new Error(`no image set ${WW}`));
+         if (!GR || 1 !== GR.urls.length && GR.urls.length !== qy.nc.CubeFaces) return this.host.sendReady(ii(RR)), void this.host.onLoadFailed(RR, "", new Error(`no image set ${RR}`));
```

#### 840. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7223` → after: `L7184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7184) · [Before (L7223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7223)

```diff
-           if (!cW || !OW.wanted) return this.JA ? void this.releaseAfterDispose(LW.map(cc)) : (this.releaseAll(LW.map(cc)), void(cW && this.sets.delete(WW)));
+           if (!iR || !GR.wanted) return this.He ? void this.releaseAfterDispose(qR.map(Zi)) : (this.releaseAll(qR.map(Zi)), void(iR && this.sets.delete(RR)));
```

#### 841. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7233-L7234` → after: `L7194-L7195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7194-L7195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7194-L7195) · [Before (L7233-L7234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7233-L7234)

```diff
-           const OW = mW.map((WW => `${WW.width}x${WW.height}`));
-           return void this.host.onLoadFailed(WW, iW.urls[0], new Error(`set ${WW}'s images can't make its texture: ${OW.join(", ")}`))
+           const GR = yR.map((RR => `${RR.width}x${RR.height}`));
+           return void this.host.onLoadFailed(RR, JR.urls[0], new Error(`set ${RR}'s images can't make its texture: ${GR.join(", ")}`))
```

#### 842. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7250` → after: `L7211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7211) · [Before (L7250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7250)

```diff
-         for (const iW of WW) this.host.mEW(iW)
+         for (const JR of RR) this.host.jtR(JR)
```

#### 843. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7254` → after: `L7215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7215) · [Before (L7254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7254)

```diff
-           this.host.mEW(iW)
+           this.host.jtR(JR)
```

#### 844. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7280` → after: `L7241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7241) · [Before (L7280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7280)

```diff
-         OW = await (0, Nc.C)(WW)
+         GR = await (0, yi.B)(RR)
```

#### 845. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7282` → after: `L7243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7243) · [Before (L7282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7282)

```diff
-         throw new mc.c("fetch", WW, {
+         throw new Ji.d("fetch", RR, {
```

#### 846. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7315` → after: `L7276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7276) · [Before (L7315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7315)

```diff
-         throw new mc.c("decode", WW, {
+         throw new Ji.d("decode", RR, {
```

#### 847. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7325-L7329` → after: `L7286-L7290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7286-L7290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7286-L7290) · [Before (L7325-L7329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7325-L7329)

```diff
-     var lc = OW(2300),
-       Ac = OW(35056),
-       bc = OW(40452);
-     const jc = lc.f.length,
-       Uc = new Set([...lc.f, "earth"]);
+     var Ki = GR(2374),
+       wi = GR(34957),
+       ri = GR(40498);
+     const ei = Ki.i.length,
+       ai = new Set([...Ki.i, "earth"]);
```

#### 848. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7344` → after: `L7305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7305) · [Before (L7344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7344)

```diff
-               urls: (0, bc.e)(EW),
+               urls: (0, ri.g)(tR),
```

#### 849. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7354` → after: `L7315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7315) · [Before (L7354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7354)

```diff
-       lc.f.forEach(((iW, OW) => {
+       Ki.i.forEach(((JR, GR) => {
```

#### 850. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7356` → after: `L7317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7317) · [Before (L7356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7356)

```diff
-         mW(OW, null !== (EW = sc(WW[iW])) && void 0 !== EW ? EW : Ac.p[iW])
+         yR(GR, null !== (tR = ni(RR[JR])) && void 0 !== tR ? tR : wi.o[JR])
```

#### 851. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7367` → after: `L7328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7328) · [Before (L7367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7367)

```diff
-         iW.length > 255 ? LW.push(`Ignoring texture pack skybox ${lW}, whose name is over 255 bytes`) : PW.length === wm.nc.MaxAdded ? LW.push(`Ignoring texture pack skybox ${lW}, past the ${wm.nc.MaxAdded} skies a pack can add`) : (PW.push(iW), mW(wm.nc.AddedId, WW))
+         JR.length > 255 ? qR.push(`Ignoring texture pack skybox ${rR}, whose name is over 255 bytes`) : ZR.length === qy.nc.MaxAdded ? qR.push(`Ignoring texture pack skybox ${rR}, past the ${qy.nc.MaxAdded} skies a pack can add`) : (ZR.push(JR), yR(qy.nc.AddedId, RR))
```

#### 852. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7371` → after: `L7332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7332) · [Before (L7371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7371)

```diff
-         urls: Ac.e.map((WW => Ac.i + WW)),
+         urls: wi.f.map((RR => wi.h + RR)),
```

#### 853. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7374` → after: `L7335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7335) · [Before (L7374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7374)

```diff
-         urls: [Ac.l],
+         urls: [wi.k],
```

#### 854. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7377` → after: `L7338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7338) · [Before (L7377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7377)

```diff
-         urls: [Ac.c],
+         urls: [wi.b],
```

#### 855. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7404` → after: `L7365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7365) · [Before (L7404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7404)

```diff
-             "number" === typeof cW && Number.isFinite(cW) && (iW.setFloat32(OW + wm.x.CameraOffsetAt + 4 * NW, cW, !0), EW |= LW)
+             "number" === typeof iR && Number.isFinite(iR) && (JR.setFloat32(GR + qy.v.CameraOffsetAt + 4 * uR, iR, !0), tR |= qR)
```

#### 856. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7410` → after: `L7371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7371) · [Before (L7410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7410)

```diff
-           iW.setUint32(OW + wm.x.PresentAt, EW, !0), iW.setUint8(OW + wm.x.FlagsAt, NW)
+           JR.setUint32(GR + qy.v.PresentAt, tR, !0), JR.setUint8(GR + qy.v.FlagsAt, uR)
```

#### 857. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7429` → after: `L7390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7390) · [Before (L7429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7429)

```diff
-       })) ? WW : null
+       })) ? RR : null
```

#### 858. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7432-L7439` → after: `L7393-L7400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7393-L7400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7393-L7400) · [Before (L7432-L7439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7432-L7439)

```diff
-         ["inclination", wm.x.Inclination],
-         ["turbidity", wm.x.Turbidity],
-         ["luminance", wm.x.Luminance],
-         ["rayleigh", wm.x.Rayleigh],
-         ["mieCoefficient", wm.x.MieCoefficient],
-         ["mieDirectionalG", wm.x.MieDirectionalG],
-         ["distance", wm.x.Distance],
-         ["azimuth", wm.x.Azimuth]
+         ["inclination", qy.v.Inclination],
+         ["turbidity", qy.v.Turbidity],
+         ["luminance", qy.v.Luminance],
+         ["rayleigh", qy.v.Rayleigh],
+         ["mieCoefficient", qy.v.MieCoefficient],
+         ["mieDirectionalG", qy.v.MieDirectionalG],
+         ["distance", qy.v.Distance],
+         ["azimuth", qy.v.Azimuth]
```

#### 859. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7442-L7444` → after: `L7403-L7405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7403-L7405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7403-L7405) · [Before (L7442-L7444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7442-L7444)

```diff
-         ["sunPosition", wm.x.SunPosition, wm.x.SunPositionAt],
-         ["up", wm.x.Up, wm.x.UpAt],
-         ["vertexTint", wm.x.VertexTint, wm.x.VertexTintAt]
+         ["sunPosition", qy.v.SunPosition, qy.v.SunPositionAt],
+         ["up", qy.v.Up, qy.v.UpAt],
+         ["vertexTint", qy.v.VertexTint, qy.v.VertexTintAt]
```

#### 860. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7447-L7449` → after: `L7408-L7410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7408-L7410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7408-L7410) · [Before (L7447-L7449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7447-L7449)

```diff
-         ["xCameraOffset", wm.x.CameraOffsetX],
-         ["yCameraOffset", wm.x.CameraOffsetY],
-         ["zCameraOffset", wm.x.CameraOffsetZ]
+         ["xCameraOffset", qy.v.CameraOffsetX],
+         ["yCameraOffset", qy.v.CameraOffsetY],
+         ["zCameraOffset", qy.v.CameraOffsetZ]
```

#### 861. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7452-L7454` → after: `L7413-L7415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7413-L7415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7413-L7415) · [Before (L7452-L7454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7452-L7454)

```diff
-         ["useSunPosition", wm.x.UseSunPosition],
-         ["dithering", wm.x.Dithering],
-         ["infiniteDistance", wm.x.InfiniteDistance]
+         ["useSunPosition", qy.v.UseSunPosition],
+         ["dithering", qy.v.Dithering],
+         ["infiniteDistance", qy.v.InfiniteDistance]
```

#### 862. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7484` → after: `L7445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7445) · [Before (L7484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7484)

```diff
-                       return "string" !== typeof WW ? null : null !== (iW = null === (OW = hc.exec(WW)) || void 0 === OW || null === (mW = OW.groups) || void 0 === mW ? void 0 : mW.base64) && void 0 !== iW ? iW : null
+                       return "string" !== typeof RR ? null : null !== (JR = null === (GR = li.exec(RR)) || void 0 === GR || null === (yR = GR.groups) || void 0 === yR ? void 0 : yR.base64) && void 0 !== JR ? JR : null
```

#### 863. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7488` → after: `L7449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7449) · [Before (L7488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7488)

```diff
-                 }(mW) || (OW(`Ignoring texture pack skybox ${iW}, whose faces are not all data URLs`, null), !1)
+                 }(yR) || (GR(`Ignoring texture pack skybox ${JR}, whose faces are not all data URLs`, null), !1)
```

#### 864. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7501` → after: `L7462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7462) · [Before (L7501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7501)

```diff
-         this.host = WW, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.JA = !1, this.wait = null !== (iW = WW.wait) && void 0 !== iW ? iW : (WW, iW) => {
+         this.host = RR, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.He = !1, this.wait = null !== (JR = RR.wait) && void 0 !== JR ? JR : (RR, JR) => {
```

#### 865. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7504-L7505` → after: `L7465-L7466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7465-L7466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7465-L7466) · [Before (L7504-L7505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7504-L7505)

```diff
-           loadImage: null !== (OW = WW.loadImage) && void 0 !== OW ? OW : xc,
-           mEW: null !== (mW = WW.mEW) && void 0 !== mW ? mW : mc.o,
+           loadImage: null !== (GR = RR.loadImage) && void 0 !== GR ? GR : Vi,
+           jtR: null !== (yR = RR.jtR) && void 0 !== yR ? yR : Ji.m,
```

#### 866. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7513` → after: `L7474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7474) · [Before (L7513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7513)

```diff
-             WW.warn(`sky image set ${iW} (${OW}) didn't load: the last sky stays`, mW)
+             RR.warn(`sky image set ${JR} (${GR}) didn't load: the last sky stays`, yR)
```

#### 867. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7519` → after: `L7480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7480) · [Before (L7519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7519)

```diff
-         this.wait(Ec.c, (() => {
+         this.wait(Gi.b, (() => {
```

#### 868. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7522` → after: `L7483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7483) · [Before (L7522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7522)

```diff
-           this.write(null !== WW && void 0 !== WW ? WW : {})
+           this.write(null !== RR && void 0 !== RR ? RR : {})
```

#### 869. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7535` → after: `L7496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7496) · [Before (L7535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7535)

```diff
-         this.JA = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
+         this.He = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
```

#### 870. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7538` → after: `L7499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7499) · [Before (L7538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7538)

```diff
-         if (this.JA) return;
+         if (this.He) return;
```

#### 871. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7554-L7569` → after: `L7515-L7530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7515-L7530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7515-L7530) · [Before (L7554-L7569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7554-L7569)

```diff
-     var Hc = OW(2915),
-       nc = OW(2908),
-       uc = OW(269),
-       oc = OW(169),
-       dc = OW(3841),
-       ec = OW(3851),
-       vc = OW(243),
-       gc = OW(248),
-       Dc = OW(3934),
-       Vc = OW(3970),
-       pc = OW(3982),
-       fc = OW(117),
-       Cc = OW(4048),
-       Xc = OW(4045),
-       Bc = OW(315),
-       qc = OW(42358);
+     var gi = GR(2991),
+       bi = GR(2989),
+       vi = GR(299),
+       Oi = GR(182),
+       xi = GR(3943),
+       Ni = GR(3948),
+       Di = GR(277),
+       Hi = GR(279),
+       oi = GR(4035),
+       ci = GR(4064),
+       Pi = GR(4074),
+       Ii = GR(116),
+       mi = GR(4139),
+       zi = GR(4137),
+       Si = GR(342),
+       ji = GR(42374);
```

#### 872. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7572-L7573` → after: `L7533-L7534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7533-L7534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7533-L7534) · [Before (L7572-L7573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7572-L7573)

```diff
-         this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, PN.j)(gm.K, (WW => {
-           this.onReply((0, NN.g)(gm.K, WW), performance.now())
+         this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, tu.l)(Ny.M, (RR => {
+           this.onReply((0, yu.i)(Ny.M, RR), performance.now())
```

#### 873. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7577` → after: `L7538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7538) · [Before (L7577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7577)

```diff
-         null === this.id ? this.id = WW : WW !== this.id && (this.id = WW, this.sentMs = document.hidden ? null : iW)
+         null === this.id ? this.id = RR : RR !== this.id && (this.id = RR, this.sentMs = document.hidden ? null : JR)
```

#### 874. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7644-L7646` → after: `L7605-L7607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7605-L7607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7605-L7607) · [Before (L7644-L7646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7644-L7646)

```diff
-         const OW = WW.headerWord(wm.M.Pacing),
-           mW = WW.headerWord(wm.M.PacingLagUs),
-           EW = (OW >>> wm.cb.LagsShift) - (this.word >>> wm.cb.LagsShift) & wm.cb.CountMask,
+         const GR = RR.headerWord(qy.L.Pacing),
+           yR = RR.headerWord(qy.L.PacingLagUs),
+           tR = (GR >>> qy.hb.LagsShift) - (this.word >>> qy.hb.LagsShift) & qy.hb.CountMask,
```

#### 875. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7649` → after: `L7610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7610) · [Before (L7649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7649)

```diff
-         this.word = OW, this.lagUs = mW, this.primed = !0, PW && iW && EW > 0 && 0 !== (OW & wm.cb.Defaulted) && this.lags.add(NW, EW)
+         this.word = GR, this.lagUs = yR, this.primed = !0, ZR && JR && tR > 0 && 0 !== (GR & qy.hb.Defaulted) && this.lags.add(uR, tR)
```

#### 876. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7658-L7664` → after: `L7619-L7625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7619-L7625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7619-L7625) · [Before (L7658-L7664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7658-L7664)

```diff
-     var zc = OW(3927),
-       Fc = OW(35164),
-       Qc = OW(3941),
-       Ww = OW(42402),
-       iw = OW(35159),
-       Ow = OW(3859),
-       mw = OW(3947);
+     var Fi = GR(4019),
+       Ti = GR(35081),
+       si = GR(4044),
+       Rf = GR(42430),
+       Jf = GR(35072),
+       Gf = GR(3956),
+       yf = GR(4048);
```

#### 877. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7695` → after: `L7656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7656) · [Before (L7695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7695)

```diff
-         this.shell = WW, this.tracker = new ec.c, this.gpu = new Gc, this.pacing = new rc, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpan … [truncated]
+         this.shell = RR, this.tracker = new Ni.e, this.gpu = new Ei, this.pacing = new Qi, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpan … [truncated]
```

#### 878. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7697` → after: `L7658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7658) · [Before (L7697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7697)

```diff
-         }), (WW => this.shell.eJ(WW))), this.onVisibility = () => {
+         }), (RR => this.shell.mN(RR))), this.onVisibility = () => {
```

#### 879. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7701` → after: `L7662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7662) · [Before (L7701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7701)

```diff
-         }, (0, Fc.d)(WW.backend, WW.canvas, WW.adapterVendor), this.tracker.start((() => !WW.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, Ow.b)("wasm", (() => {
+         }, (0, Ti.c)(RR.backend, RR.canvas, RR.adapterVendor), this.tracker.start((() => !RR.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, Gf.c)("wasm", (() => {
```

#### 880. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7705-L7706` → after: `L7666-L7667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7666-L7667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7666-L7667) · [Before (L7705-L7706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7705-L7706)

```diff
-           } = (0, Ww.e)();
-           return `${WW.backend}, quality steps aim at up to ${mw.c.target.maxFps} fps, pixel n ${iW}, msaa ${OW}`
+           } = (0, Rf.g)();
+           return `${RR.backend}, quality steps aim at up to ${yf.d.target.maxFps} fps, pixel n ${JR}, msaa ${GR}`
```

#### 881. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7720` → after: `L7681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7681) · [Before (L7720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7720)

```diff
-         this.ping.onFrame(WW.headerWord(wm.M.PingSent), iW), this.sendsStartMs = iW, this.sendsEndMs = OW
+         this.ping.onFrame(RR.headerWord(qy.L.PingSent), JR), this.sendsStartMs = JR, this.sendsEndMs = GR
```

#### 882. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7724` → after: `L7685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7685) · [Before (L7724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7724)

```diff
-         this.ping.onFrame(WW.headerWord(wm.M.PingSent), OW);
+         this.ping.onFrame(RR.headerWord(qy.L.PingSent), GR);
```

#### 883. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7727` → after: `L7688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7688) · [Before (L7727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7727)

```diff
-         const PW = WW.headerWord(wm.M.TickUs) / 1e3 + (0, sm.N)();
+         const ZR = RR.headerWord(qy.L.TickUs) / 1e3 + (0, ny.H)();
```

#### 884. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7729` → after: `L7690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7690) · [Before (L7729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7729)

```diff
-         (NW.Hk(PW), null === (EW = this.frameDebug) || void 0 === EW || EW.wasmFrame(WW, iW, OW, mW, NW.isSampling(), PW), null !== this.game) && (null === (LW = this.frameDebug) || void 0 === LW || LW.inGame());
+         (uR.UW(ZR), null === (tR = this.frameDebug) || void 0 === tR || tR.wasmFrame(RR, JR, GR, yR, uR.isSampling(), ZR), null !== this.game) && (null === (qR = this.frameDebug) || void 0 === qR || qR.inGame());
```

#### 885. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7734` → after: `L7695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7695) · [Before (L7734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7734)

```diff
-         this.gpu.onFrame(WW.headerWord(wm.M.GpuSampled), WW.headerWord(wm.M.GpuTimed), WW.headerWord(wm.M.GpuFrameUs), NW.isSampling()) && NW.onGpuSampleStarted(), NW.onFrameCpu(wW + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(iW)
+         this.gpu.onFrame(RR.headerWord(qy.L.GpuSampled), RR.headerWord(qy.L.GpuTimed), RR.headerWord(qy.L.GpuFrameUs), uR.isSampling()) && uR.onGpuSampleStarted(), uR.onFrameCpu(fR + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(JR)
```

#### 886. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7760` → after: `L7721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7721) · [Before (L7760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7760)

```diff
-         if (!(iW < pc.d)) {
+         if (!(JR < Pi.b)) {
```

#### 887. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7779` → after: `L7740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7740) · [Before (L7779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7779)

```diff
-           wW = cW ? PW : (0, dc.g)(PW),
+           fR = iR ? ZR : (0, xi.e)(ZR),
```

#### 888. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7783` → after: `L7744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7744) · [Before (L7783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7783)

```diff
-           lW = (0, Vc.v)((0, Vc.u)(ZW), this.unsentPage),
+           rR = (0, ci.z)((0, ci.v)(KR), this.unsentPage),
```

#### 889. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7790` → after: `L7751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7751) · [Before (L7790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7790)

```diff
-               jW = (0, Dc.i)({
+               LR = (0, oi.k)({
```

#### 890. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7795` → after: `L7756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7756) · [Before (L7795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7795)

```diff
-             for (const UW of (0, nc.g)()) {
+             for (const nR of (0, bi.e)()) {
```

#### 891. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7798` → after: `L7759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7759) · [Before (L7798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7798)

```diff
-               if ((0, uc.M)(kW)) sW = (0, Vc.e)(kW);
+               if ((0, vi.K)(UR)) WR = (0, ci.e)(UR);
```

#### 892. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7800` → after: `L7761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7761) · [Before (L7800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7800)

```diff
-               else if ((0, Dc.j)(kW)) sW = jW[kW];
+               else if ((0, oi.l)(UR)) WR = LR[UR];
```

#### 893. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7805` → after: `L7766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7766) · [Before (L7805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7805)

```diff
-                 case "Ec":
+                 case "ii":
```

#### 894. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7808-L7809` → after: `L7769-L7770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7769-L7770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7769-L7770) · [Before (L7808-L7809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7808-L7809)

```diff
-                 case "tc":
-                   sW = (0, Qc.B)((0, Ww.e)().n);
+                 case "ei":
+                   WR = (0, si.z)((0, Rf.g)().n);
```

#### 895. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7811` → after: `L7772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7772) · [Before (L7811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7811)

```diff
-                 case "Zc":
+                 case "ai":
```

#### 896. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7814` → after: `L7775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7775) · [Before (L7814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7814)

```diff
-                 case "xc":
+                 case "Li":
```

#### 897. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7817` → after: `L7778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7778) · [Before (L7817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7817)

```diff
-                 case "lc":
+                 case "ni":
```

#### 898. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7820` → after: `L7781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7781) · [Before (L7820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7820)

```diff
-                 case "Ac":
+                 case "Ui":
```

#### 899. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7823` → after: `L7784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7784) · [Before (L7823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7823)

```diff
-                 case "bc":
+                 case "Wi":
```

#### 900. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7826` → after: `L7787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7787) · [Before (L7826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7826)

```diff
-                 case "jc":
+                 case "Ai":
```

#### 901. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7829` → after: `L7790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7790) · [Before (L7829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7829)

```diff
-                 case "Uc":
+                 case "Ci":
```

#### 902. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7832` → after: `L7793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7793) · [Before (L7832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7832)

```diff
-                 case "kc":
+                 case "Xi":
```

#### 903. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7835` → after: `L7796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7796) · [Before (L7835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7835)

```diff
-                 case "sc":
+                 case "Mi":
```

#### 904. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7838` → after: `L7799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7799) · [Before (L7838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7838)

```diff
-                 case "Mc":
+                 case "Bi":
```

#### 905. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7841` → after: `L7802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7802) · [Before (L7841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7841)

```diff
-                 case "Kc":
+                 case "li":
```

#### 906. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7844` → after: `L7805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7805) · [Before (L7844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7844)

```diff
-                 case "hc":
+                 case "Di":
```

#### 907. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7847` → after: `L7808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7808) · [Before (L7847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7847)

```diff
-                 case "Hc":
+                 case "Hi":
```

#### 908. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7850` → after: `L7811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7811) · [Before (L7850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7850)

```diff
-                 case "Sc":
+                 case "gi":
```

#### 909. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7853` → after: `L7814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7814) · [Before (L7853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7853)

```diff
-                 case "Yc":
+                 case "bi":
```

#### 910. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7856` → after: `L7817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7817) · [Before (L7856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7856)

```diff
-                 case "yc":
+                 case "Oi":
```
