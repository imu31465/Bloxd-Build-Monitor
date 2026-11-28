# Changed — Bundle Modifications Report (Part 012 / 154)

- **Updated at**: `2026-11-28T13:51 JST`
- **Part**: `12 / 154` (**411** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 011](part-011.md) · [Part 013 →](part-013.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/109.js` (fl4vv.bd3c59ce → yteou.5361c997 · continued)

- **File**: `bundles/bloxd.io/chunks/js/109.js` (3925 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df)

#### 1006. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L7947` → after: `L7947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L7947) · [Before (L7947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L7947)

```diff
-         (Wp.e.isCameraDetachedFromPlayer(this.gm) || Wp.e.detachCamera(this.gm)) && (this.tickHandler = rr => {
+         (RQ.c.isCameraDetachedFromPlayer(this.zo) || RQ.c.detachCamera(this.zo)) && (this.tickHandler = dd => {
```

#### 1007. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L7949` → after: `L7949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L7949) · [Before (L7949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L7949)

```diff
-         }, this.gm.on("renderTickBegin", this.tickHandler), this.enabled = !0, this.notifyStateChanged(!0))
+         }, this.zo.on("renderTickBegin", this.tickHandler), this.enabled = !0, this.notifyStateChanged(!0))
```

#### 1008. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L7953-L7955` → after: `L7953-L7955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7953-L7955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L7953-L7955) · [Before (L7953-L7955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L7953-L7955)

```diff
-         this.tickHandler && (this.gm.off("renderTickBegin", this.tickHandler), this.tickHandler = null), !Wp.e.isCameraDetachedFromPlayer(this.gm) || null !== (rr = this.gm.bloxd.client) && void 0 !== rr && rr.isReplayMode() || Wp.e.reattachCamera(this.gm), this.clearMovementInpu … [truncated]
-         const Qr = null !== (Sr = this.gm.bloxd.client) && void 0 !== Sr && Sr.isReplayMode() ? void 0 : this.gm.YB.gQr();
-         for (const Zr of ["forward", "backward", "left", "right"]) Qr && this.gm.inputs.state[Zr] && (Qr[Zr] = !0);
+         this.tickHandler && (this.zo.off("renderTickBegin", this.tickHandler), this.tickHandler = null), !RQ.c.isCameraDetachedFromPlayer(this.zo) || null !== (dd = this.zo.bloxd.client) && void 0 !== dd && dd.isReplayMode() || RQ.c.reattachCamera(this.zo), this.clearMovementInpu … [truncated]
+         const md = null !== (Od = this.zo.bloxd.client) && void 0 !== Od && Od.isReplayMode() ? void 0 : this.zo.qE.TWd();
+         for (const Wd of ["forward", "backward", "left", "right"]) md && this.zo.inputs.state[Wd] && (md[Wd] = !0);
```

#### 1009. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L7982` → after: `L7982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L7982) · [Before (L7982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L7982)

```diff
-         if ((null === (Sr = this.gm.bloxd.client) || void 0 === Sr || !Sr.isReplayMode()) && !this.gm.YB.LQr(this.gm.fC).isAlive) return void this.VK(!1);
+         if ((null === (Od = this.zo.bloxd.client) || void 0 === Od || !Od.isReplayMode()) && !this.zo.qE.tWd(this.zo.YV).isAlive) return void this.rY(!1);
```

#### 1010. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L7985-L7986` → after: `L7985-L7986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7985-L7986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L7985-L7986) · [Before (L7985-L7986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L7985-L7986)

```diff
-           Wr = Zr * this.gm.pC,
-           ar = this.gm.camera.heading,
+           Fd = Wd * this.zo.wV,
+           Rd = this.zo.camera.heading,
```

#### 1011. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8003` → after: `L8003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8003) · [Before (L8003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8003)

```diff
-         const hr = (0, Zp.g)(this.flyAccel, Nr, Ur, tr, Wr);
+         const yd = (0, FQ.h)(this.flyAccel, Nd, qd, Hd, Fd);
```

#### 1012. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8005` → after: `L8005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8005) · [Before (L8005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8005)

```diff
-         const zr = 12 * (1 + this.flyAccel.Jr);
+         const bd = 12 * (1 + this.flyAccel.Zd);
```

#### 1013. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8009` → after: `L8009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8009) · [Before (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8009)

```diff
-           const rr = (mr > 1 ? 1 / mr : 1) * zr * Zr;
+           const dd = (od > 1 ? 1 / od : 1) * bd * Wd;
```

#### 1014. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8014-L8015` → after: `L8014-L8015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8014-L8015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8014-L8015) · [Before (L8014-L8015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8014-L8015)

```diff
-         const Kr = this.gm.YB.JY(this.gm.camera.qJ);
-         this.gm.YB.setPosition(this.gm.camera.qJ, [Kr[0] + Yr, Kr[1] + er, Kr[2] + nr])
+         const gd = this.zo.qE.hY(this.zo.camera.pM);
+         this.zo.qE.setPosition(this.zo.camera.pM, [gd[0] + Td, gd[1] + Yd, gd[2] + pd])
```

#### 1015. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8019-L8030` → after: `L8019-L8030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8019-L8030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8019-L8030) · [Before (L8019-L8030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8019-L8030)

```diff
-         hr.i.Jp("freeCameraChanged"), (0, jp.b)(rr), null !== (Sr = this.gm.bloxd.client) && void 0 !== Sr && Sr.isReplayMode() && hr.i.Jp("replayViewer|uiRefresh")
-       }
-     }
-     var Ep = Qr(2049),
-       pp = Qr(40761),
-       xp = Qr(38207),
-       mp = Qr(40781),
-       Np = Qr(39111),
-       Up = Qr(39149),
-       tp = Qr(40775),
-       hp = Qr(40504),
-       zp = Qr(804);
+         yd.j.lQ("freeCameraChanged"), (0, KQ.d)(dd), null !== (Od = this.zo.bloxd.client) && void 0 !== Od && Od.isReplayMode() && yd.j.lQ("replayViewer|uiRefresh")
+       }
+     }
+     var QQ = md(2057),
+       tQ = md(40789),
+       oQ = md(38295),
+       NQ = md(40808),
+       qQ = md(39140),
+       HQ = md(39168),
+       yQ = md(40802),
+       bQ = md(40510),
+       TQ = md(819);
```

#### 1016. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8034-L8036` → after: `L8034-L8036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8034-L8036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8034-L8036) · [Before (L8034-L8036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8034-L8036)

```diff
-       Wr.heading = Sr + rr.eh[1] + (Zr ? rr.cameraRotationOffset[1] : 0);
-       const ar = Qr + rr.eh[0] + (Zr ? rr.cameraRotationOffset[0] : 0);
-       (0, xp.l)((0, xp.f)(Wr.heading, ar, Yp), Wr)
+       Fd.heading = Od + dd.Jy[1] + (Wd ? dd.cameraRotationOffset[1] : 0);
+       const Rd = md + dd.Jy[0] + (Wd ? dd.cameraRotationOffset[0] : 0);
+       (0, oQ.o)((0, oQ.g)(Fd.heading, Rd, pQ), Fd)
```

#### 1017. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8042` → after: `L8042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8042) · [Before (L8042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8042)

```diff
-       Yr().set(ep, Wr[0], Wr[1], 0), Yr().Nh(ep, ep, Yr().ZERO, rr.mx + rr.eh[2] + jr[2]), Yr().xh(ep, ep, Yr().ZERO, Qr + rr.eh[0] + jr[0]), Yr().mh(ep, ep, Yr().ZERO, Sr + rr.eh[1] + jr[1]), Yr().add(ar, ar, ep)
+       Td().set(gQ, Fd[0], Fd[1], 0), Td().yy(gQ, gQ, Td().ZERO, dd.Kt + dd.Jy[2] + Xd[2]), Td().Ny(gQ, gQ, Td().ZERO, md + dd.Jy[0] + Xd[0]), Td().Hy(gQ, gQ, Td().ZERO, Od + dd.Jy[1] + Xd[1]), Td().add(Rd, Rd, gQ)
```

#### 1018. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8048` → after: `L8048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8048) · [Before (L8048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8048)

```diff
-       return Wp.e.copyReattachedTargetPosition(rr, yp) ? rr.camera.o4(yp, Sr, Qr, Wp.e.getSavedZoomDistance(rr), Zr) : null
+       return RQ.c.copyReattachedTargetPosition(dd, aQ) ? dd.camera.L_(aQ, Od, md, RQ.c.getSavedZoomDistance(dd), Wd) : null
```

#### 1019. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8052` → after: `L8052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8052) · [Before (L8052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8052)

```diff
-       return (0, tp.e)(rr) ? (0, Gr.e)(rr) : null
+       return (0, yQ.d)(dd) ? (0, Pd.b)(dd) : null
```

#### 1020. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8056` → after: `L8056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8056) · [Before (L8056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8056)

```diff
-         this.gm = rr, this.view = Sr, this.pickEntity = Qr, this.defaultPose = (0, DE.k)(), this.feet = [0, 0, 0], this.aim = [0, 0, 0], this.localFrom = [0, 0, 0], this.pastBlocks = [0, 0, 0], this.cameraHiddenPlayer = null, this.pickTargetedBlock = (rr, Sr, Qr) => this.pickDist … [truncated]
+         this.zo = dd, this.view = Od, this.pickEntity = md, this.defaultPose = (0, kv.j)(), this.feet = [0, 0, 0], this.aim = [0, 0, 0], this.localFrom = [0, 0, 0], this.pastBlocks = [0, 0, 0], this.cameraHiddenPlayer = null, this.pickTargetedBlock = (dd, Od, md) => this.pickDist … [truncated]
```

#### 1021. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8059-L8060` → after: `L8059-L8060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8059-L8060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8059-L8060) · [Before (L8059-L8060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8059-L8060)

```diff
-             jr = this.gm.Ox.bC,
-             Ir = null === this.cameraHiddenPlayer ? null : null !== (Zr = null === (Wr = this.gm.YB.rQr(this.cameraHiddenPlayer)) || void 0 === Wr ? void 0 : Wr.JC) && void 0 !== Zr ? Zr : null,
+             Xd = this.zo.gt.HA,
+             Kd = null === this.cameraHiddenPlayer ? null : null !== (Wd = null === (Fd = this.zo.qE.Vmd(this.cameraHiddenPlayer)) || void 0 === Fd ? void 0 : Fd.JA) && void 0 !== Wd ? Wd : null,
```

#### 1022. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8065` → after: `L8065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8065) · [Before (L8065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8065)

```diff
-             return null !== (Er = this.pickEntity(rr, Sr, null !== ar && void 0 !== ar ? ar : Qr)) && void 0 !== Er ? Er : ar
+             return null !== (vd = this.pickEntity(dd, Od, null !== Rd && void 0 !== Rd ? Rd : md)) && void 0 !== vd ? vd : Rd
```

#### 1023. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8069` → after: `L8069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8069) · [Before (L8069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8069)

```diff
-         }, this.isUntargeted = rr => !this.gm.pSr(rr)
+         }, this.isUntargeted = dd => !this.zo.GOd(dd)
```

#### 1024. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8072` → after: `L8072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8072) · [Before (L8072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8072)

```diff
-         return this.gm.WC
+         return this.zo.bV
```

#### 1025. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8076` → after: `L8076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8076) · [Before (L8076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8076)

```diff
-         return null !== Sr && this.gm.YB.gJ(Sr) ? (0, bI.getDrawnPosition)(this.gm, Sr, this.feet) : null
+         return null !== Od && this.zo.qE.gM(Od) ? (0, kK.getDrawnPosition)(this.zo, Od, this.feet) : null
```

#### 1026. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8081-L8082` → after: `L8081-L8082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8081-L8082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8081-L8082) · [Before (L8081-L8082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8081-L8082)

```diff
-           return rr.YB.gJ(Sr) ? ((0, bI.getDrawnPosition)(rr, Sr, Qr), null !== rr.bloxd.getLifeformType(Sr) && (Qr[1] += rr.bloxd.getLifeformEyeHeight(Sr)), Qr) : null
-         }(this.gm, Sr, this.aim)
+           return dd.qE.gM(Od) ? ((0, kK.getDrawnPosition)(dd, Od, md), null !== dd.bloxd.getLifeformType(Od) && (md[1] += dd.bloxd.getLifeformEyeHeight(Od)), md) : null
+         }(this.zo, Od, this.aim)
```

#### 1027. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8087` → after: `L8087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8087) · [Before (L8087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8087)

```diff
-         return null === ar ? null : ar === this.gm.fC ? this.view.heading : null !== (Sr = null !== (Qr = null === (Zr = (0, iI.getCaughtUpMeshRotation)(this.gm, ar)) || void 0 === Zr ? void 0 : Zr.renderRotation[1]) && void 0 !== Qr ? Qr : null === (Wr = this.gm.YB.jQr(ar)) || v … [truncated]
+         return null === Rd ? null : Rd === this.zo.YV ? this.view.heading : null !== (Od = null !== (md = null === (Wd = (0, eK.getCaughtUpMeshRotation)(this.zo, Rd)) || void 0 === Wd ? void 0 : Wd.renderRotation[1]) && void 0 !== md ? md : null === (Fd = this.zo.qE.Pmd(Rd)) || v … [truncated]
```

#### 1028. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8092` → after: `L8092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8092) · [Before (L8092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8092)

```diff
-         return null === Zr || Zr === this.gm.fC || null === this.gm.bloxd.getLifeformType(Zr) ? null : null !== (Sr = null === (Qr = this.gm.YB.jQr(Zr)) || void 0 === Qr ? void 0 : Qr.cameraPitch) && void 0 !== Sr ? Sr : null
+         return null === Wd || Wd === this.zo.YV || null === this.zo.bloxd.getLifeformType(Wd) ? null : null !== (Od = null === (md = this.zo.qE.Pmd(Wd)) || void 0 === md ? void 0 : md.cameraPitch) && void 0 !== Od ? Od : null
```

#### 1029. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8097-L8099` → after: `L8097-L8099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8097-L8099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8097-L8099) · [Before (L8097-L8099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8097-L8099)

```diff
-         if (null === Zr || Zr === this.gm.fC || null === this.gm.bloxd.getLifeformType(Zr)) return null;
-         const Wr = (0, iI.getCaughtUpMeshRotation)(this.gm, Zr);
-         return Wr ? (0, iI.getRemoteTargetHeading)(this.gm, Wr) : null !== (Sr = null === (Qr = this.gm.YB.jQr(Zr)) || void 0 === Qr ? void 0 : Qr.heading) && void 0 !== Sr ? Sr : null
+         if (null === Wd || Wd === this.zo.YV || null === this.zo.bloxd.getLifeformType(Wd)) return null;
+         const Fd = (0, eK.getCaughtUpMeshRotation)(this.zo, Wd);
+         return Fd ? (0, eK.getRemoteTargetHeading)(this.zo, Fd) : null !== (Od = null === (md = this.zo.qE.Pmd(Wd)) || void 0 === md ? void 0 : md.heading) && void 0 !== Od ? Od : null
```

#### 1030. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8103` → after: `L8103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8103) · [Before (L8103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8103)

```diff
-         if (null === Qr || Qr === this.gm.fC || "Player" !== this.gm.bloxd.getLifeformType(Qr)) return null;
+         if (null === md || md === this.zo.YV || "Player" !== this.zo.bloxd.getLifeformType(md)) return null;
```

#### 1031. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8105` → after: `L8105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8105) · [Before (L8105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8105)

```diff
-           Wr = this.gm.YB.gJ(Qr);
+           Fd = this.zo.qE.gM(md);
```

#### 1032. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8108` → after: `L8108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8108) · [Before (L8108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8108)

```diff
-         return Math.abs(Sr[0] - Zr[0]) < ar && Math.abs(Sr[2] - Zr[2]) < ar && Sr[1] > Zr[1] && Sr[1] < Zr[1] + Wr.height ? Qr : null
+         return Math.abs(Od[0] - Wd[0]) < Rd && Math.abs(Od[2] - Wd[2]) < Rd && Od[1] > Wd[1] && Od[1] < Wd[1] + Fd.height ? md : null
```

#### 1033. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8112-L8114` → after: `L8112-L8114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8112-L8114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8112-L8114) · [Before (L8112-L8114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8112-L8114)

```diff
-           gm: Zr
-         } = this, Wr = Zr.camera.Z8(Zr.sSr(rr, null, this.localFrom), Sr, Qr);
-         return Wr < Qr - 1e-6 ? Wr : null
+           zo: Wd
+         } = this, Fd = Wd.camera.P_(Wd.Smd(dd, null, this.localFrom), Od, md);
+         return Fd < md - 1e-6 ? Fd : null
```

#### 1034. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8127` → after: `L8127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8127) · [Before (L8127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8127)

```diff
-         const Wr = this.gm.eN(rr, Sr, Qr, Zr);
+         const Fd = this.zo.xN(dd, Od, md, Wd);
```

#### 1035. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8131` → after: `L8131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8131) · [Before (L8131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8131)

```diff
-         return (0, Ep.B)(this.gm.Ox.r_().fov)
+         return (0, QQ.B)(this.zo.gt.l_().fov)
```

#### 1036. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8137` → after: `L8137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8137) · [Before (L8137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8137)

```diff
-         return (0, zp.o)(this.gm.Ox.engine)
+         return (0, TQ.l)(this.zo.gt.engine)
```

#### 1037. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8141` → after: `L8141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8141) · [Before (L8141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8141)

```diff
-           gm: rr
+           zo: dd
```

#### 1038. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8145-L8147` → after: `L8145-L8147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8145-L8147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8145-L8147) · [Before (L8145-L8147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8145-L8147)

```diff
-         if (Qr.fov = this.getDefaultFov(), Wp.e.isCameraDetachedFromPlayer(rr)) return function(rr, Sr) {
-           const Qr = Wp.e.getPlayerFacingHeading(rr),
-             Zr = Wp.e.getPlayerFacingPitch(rr),
+         if (md.fov = this.getDefaultFov(), RQ.c.isCameraDetachedFromPlayer(dd)) return function(dd, Od) {
+           const md = RQ.c.getPlayerFacingHeading(dd),
+             Wd = RQ.c.getPlayerFacingPitch(dd),
```

#### 1039. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8150` → after: `L8150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8150) · [Before (L8150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8150)

```diff
-           null !== Wr && (rr.dD(Bp, Sr.position), Kp(rr.camera, Qr, Zr, ar, Wp.e.getSavedRigShift(rr), Sr.position)), np(rr.camera, Qr, Zr, ar, Sr)
+           null !== Fd && (dd.E_(EQ, Od.position), wQ(dd.camera, md, Wd, Rd, RQ.c.getSavedRigShift(dd), Od.position)), YQ(dd.camera, md, Wd, Rd, Od)
```

#### 1040. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8152-L8153` → after: `L8152-L8153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8152-L8153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8152-L8153) · [Before (L8152-L8153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8152-L8153)

```diff
-         const Zr = 0 !== Sr.GJ;
-         return Yr().copy(Qr.position, Sr.JY()), Kp(Sr, Sr.heading, Sr.pitch, Zr, rr.Ox.r_().S_, Qr.position), np(Sr, Sr.heading, Sr.pitch, Zr, Qr), Qr
+         const Wd = 0 !== Od.R7;
+         return Td().copy(md.position, Od.hY()), wQ(Od, Od.heading, Od.pitch, Wd, dd.gt.l_().k_, md.position), YQ(Od, Od.heading, Od.pitch, Wd, md), md
```

#### 1041. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8156` → after: `L8156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8156) · [Before (L8156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8156)

```diff
-     var Lp = Qr(38133);
+     var BQ = md(38222);
```

#### 1042. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8159` → after: `L8159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8159) · [Before (L8159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8159)

```diff
-         this.gm = rr, this.qx = Sr, this.pointer = Qr, this.eye = [0, 0, 0], this.ray = [0, 0, 0], this.screenPoint = [0, 0], this.lastPick = {
+         this.zo = dd, this.Bt = Od, this.pointer = md, this.eye = [0, 0, 0], this.ray = [0, 0, 0], this.screenPoint = [0, 0], this.lastPick = {
```

#### 1043. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8173` → after: `L8173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8173) · [Before (L8173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8173)

```diff
-         const Zr = Rp(this.gm, this.eye);
+         const Wd = AQ(this.zo, this.eye);
```

#### 1044. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8177` → after: `L8177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8177) · [Before (L8177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8177)

```diff
-             Ir = null === jr || jr <= dE ? ar : jr;
+             Kd = null === Xd || Xd <= fv ? Rd : Xd;
```

#### 1045. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8179` → after: `L8179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8179) · [Before (L8179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8179)

```diff
-         }(Zr, Qr, this.copyRay(), this.qx.pickCursorTarget, this.tapPoint), this.hasTapPoint = !0, this.faceTap(Zr), !0
+         }(Wd, md, this.copyRay(), this.Bt.pickCursorTarget, this.tapPoint), this.hasTapPoint = !0, this.faceTap(Wd), !0
```

#### 1046. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8183` → after: `L8183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8183) · [Before (L8183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8183)

```diff
-           gm: Qr
+           zo: md
```

#### 1047. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8187` → after: `L8187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8187) · [Before (L8187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8187)

```diff
-         if (Sr && (0, Lp.g)(this.screenPoint[1])) return;
+         if (Od && (0, BQ.h)(this.screenPoint[1])) return;
```

#### 1048. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8202` → after: `L8202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8202) · [Before (L8202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8202)

```diff
-         }(Wr, rr, Zr, this.qx.pickCursorTarget, this.cursorAim), (0, DE.i)(Wr, ar.eye), (0, DE.i)(rr, ar.camera), (0, DE.i)(Zr, ar.ray), this.msSincePick = 0), qp(Qr, this.cursorAim, Wp.e.getPlayerFacingHeading(Qr), Wp.e.getPlayerFacingPitch(Qr))
+         }(Fd, dd, Wd, this.Bt.pickCursorTarget, this.cursorAim), (0, kv.i)(Fd, Rd.eye), (0, kv.i)(dd, Rd.camera), (0, kv.i)(Wd, Rd.ray), this.msSincePick = 0), iQ(md, this.cursorAim, RQ.c.getPlayerFacingHeading(md), RQ.c.getPlayerFacingPitch(md))
```

#### 1049. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8206` → after: `L8206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8206) · [Before (L8206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8206)

```diff
-           gm: Sr
+           zo: Od
```

#### 1050. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8214` → after: `L8214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8214) · [Before (L8214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8214)

```diff
-         })(rr, this.tapPoint, this.tapAim) && qp(Sr, this.tapAim, Wp.e.getPlayerFacingHeading(Sr), Wp.e.getPlayerFacingPitch(Sr))
+         })(dd, this.tapPoint, this.tapAim) && iQ(Od, this.tapAim, RQ.c.getPlayerFacingHeading(Od), RQ.c.getPlayerFacingPitch(Od))
```

#### 1051. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8218` → after: `L8218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8218) · [Before (L8218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8218)

```diff
-           gm: rr
+           zo: dd
```

#### 1052. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8239` → after: `L8239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8239) · [Before (L8239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8239)

```diff
-         }(Sr.heading + Sr.eh[1], Sr.pitch + Sr.eh[0], Sr.mx + Sr.eh[2], rr.Ox.r_().fov, this.qx.getAspectRatio(), Qr, Zr, this.ray)
+         }(Od.heading + Od.Jy[1], Od.pitch + Od.Jy[0], Od.Kt + Od.Jy[2], dd.gt.l_().fov, this.Bt.getAspectRatio(), md, Wd, this.ray)
```

#### 1053. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8253` → after: `L8253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8253) · [Before (L8253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8253)

```diff
-       Hp.heading = Qr, Hp.pitch = Zr, (0, xp.l)(Sr, Hp), Wp.e.setPlayerFacing(rr, Hp.heading, Hp.pitch)
+       VQ.heading = md, VQ.pitch = Wd, (0, oQ.o)(Od, VQ), RQ.c.setPlayerFacing(dd, VQ.heading, VQ.pitch)
```

#### 1054. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8257` → after: `L8257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8257) · [Before (L8257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8257)

```diff
-       return Yr().copy(Sr, rr.bloxd.getLifeformEyePos(rr.fC, !1))
+       return Td().copy(Od, dd.bloxd.getLifeformEyePos(dd.YV, !1))
```

#### 1055. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8259` → after: `L8259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8259) · [Before (L8259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8259)

```diff
-     var gp = Qr(40789);
+     var rQ = md(40812);
```

#### 1056. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8273-L8274` → after: `L8273-L8274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8273-L8274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8273-L8274) · [Before (L8273-L8274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8273-L8274)

```diff
-         if (!this.hasWritten) return Wr.xR = 0, Wr.yR = 0, Wr.pointedAt = void 0, Wr;
-         const ar = (0, xp.r)(this.writtenHeading, rr);
+         if (!this.hasWritten) return Fd.mV = 0, Fd.RV = 0, Fd.pointedAt = void 0, Fd;
+         const Rd = (0, oQ.x)(this.writtenHeading, dd);
```

#### 1057. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8298` → after: `L8298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8298) · [Before (L8298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8298)

```diff
-         pr = null !== Er && Er > dE ? Er : Math.max(dE, fr);
+         Qd = null !== vd && vd > fv ? vd : Math.max(fv, hd);
```

#### 1058. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8307-L8308` → after: `L8307-L8308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8307-L8308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8307-L8308) · [Before (L8307-L8308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8307-L8308)

```diff
-         Wr = Math.max(-Zr, Math.min(Zr, (0, xp.r)(rr, Sr)));
-       return (0, xp.q)(rr + Wr)
+         Fd = Math.max(-Wd, Math.min(Wd, (0, oQ.x)(dd, Od)));
+       return (0, oQ.w)(dd + Fd)
```

#### 1059. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8312-L8316` → after: `L8312-L8316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8312-L8316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8312-L8316) · [Before (L8312-L8316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8312-L8316)

```diff
-         this.gm = rr, this.cameraController = Sr, this.freeCameraController = Qr, this.cursor = Zr, this.qx = void 0, this.director = void 0, this.view = new Mp, this.look = {
-           xR: 0,
-           yR: 0
-         }, this.cursorAim = void 0, this.screen = void 0, this.facing = "movement", this.mouseTurns = "view", this.detached = !1, this.eye = [0, 0, 0], this.OSr = [0, 0, 0], this.LSr = [0, 0, 0], this.rayDirection = [0, 0, 0], this.hiddenWatched = null, this.cameraPosition = [0,  … [truncated]
-         const jr = af.d.subscribe("gameCamera", (rr => {
+         this.zo = dd, this.cameraController = Od, this.freeCameraController = md, this.cursor = Wd, this.Bt = void 0, this.director = void 0, this.view = new nQ, this.look = {
+           mV: 0,
+           RV: 0
+         }, this.cursorAim = void 0, this.screen = void 0, this.facing = "movement", this.mouseTurns = "view", this.detached = !1, this.eye = [0, 0, 0], this.Omd = [0, 0, 0], this.mmd = [0, 0, 0], this.rayDirection = [0, 0, 0], this.hiddenWatched = null, this.cameraPosition = [0,  … [truncated]
+         const Xd = hh.e.subscribe("gameCamera", (dd => {
```

#### 1060. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8332` → after: `L8332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8332) · [Before (L8332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8332)

```diff
-           "undefined" !== typeof document && "hidden" === document.visibilityState && performance.now() - this.lastFrameMs > 1e3 && rr.qx.GQr([])
+           "undefined" !== typeof document && "hidden" === document.visibilityState && performance.now() - this.lastFrameMs > 1e3 && dd.Bt.gWd([])
```

#### 1061. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8334-L8335` → after: `L8334-L8335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8334-L8335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8334-L8335) · [Before (L8334-L8335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8334-L8335)

```diff
-         rr.on("lx", pr), Zr.listenForTaps(((Sr, Qr) => {
-           this.aimAtClientPoint(Sr, Qr), rr.USr()
+         dd.on("Et", Qd), Wd.listenForTaps(((Od, md) => {
+           this.aimAtClientPoint(Od, md), dd.zOd()
```

#### 1062. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8337` → after: `L8337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8337) · [Before (L8337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8337)

```diff
-         const xr = hr.i.subscribe("localPlayerTeleported", (rr => {
+         const td = yd.j.subscribe("localPlayerTeleported", (dd => {
```

#### 1063. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8344` → after: `L8344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8344) · [Before (L8344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8344)

```diff
-           jr(), Zr.listenForTaps(null), hr.i.unsubscribe(xr), rr.off("beforeRender", Ir), rr.off("afterRender", fr), rr.off("beforePhysicsTick", Er), rr.off("lx", pr), this.release({
+           Xd(), Wd.listenForTaps(null), yd.j.unsubscribe(td), dd.off("beforeRender", Kd), dd.off("afterRender", hd), dd.off("beforePhysicsTick", vd), dd.off("Et", Qd), this.release({
```

#### 1064. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8346` → after: `L8346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8346) · [Before (L8346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8346)

```diff
-           }), this.screen.clear(), rr.qx.GQr([]), this.hideWatched(null)
+           }), this.screen.clear(), dd.Bt.gWd([]), this.hideWatched(null)
```

#### 1065. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8370` → after: `L8370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8370) · [Before (L8370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8370)

```diff
-         if (this.lastFrameMs = performance.now(), null !== (Sr = this.gm.bloxd.client) && void 0 !== Sr && Sr.isReplayMode()) return this.gm.qx.GQr([]), this.hideWatched(null), this.yieldToReplay(), void this.screen.clear();
+         if (this.lastFrameMs = performance.now(), null !== (Od = this.zo.bloxd.client) && void 0 !== Od && Od.isReplayMode()) return this.zo.Bt.gWd([]), this.hideWatched(null), this.yieldToReplay(), void this.screen.clear();
```

#### 1066. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8373-L8376` → after: `L8373-L8376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8373-L8376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8373-L8376) · [Before (L8373-L8376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8373-L8376)

```diff
-         } = this.gm;
-         this.detached || this.view.followBody(Wp.e.getPlayerFacingHeading(this.gm));
-         const Zr = Wp.e.takeLookPointed(this.gm);
-         null !== Qr.mD || null !== Qr.pD || null === this.mouseTurns && !Zr ? (this.look.xR = 0, this.look.yR = 0, this.look.pointedAt = void 0) : this.view.readLook(Qr.heading, Qr.pitch, "look" === this.mouseTurns, Zr, this.look);
+         } = this.zo;
+         this.detached || this.view.followBody(RQ.c.getPlayerFacingHeading(this.zo));
+         const Wd = RQ.c.takeLookPointed(this.zo);
+         null !== md.v_ || null !== md.h_ || null === this.mouseTurns && !Wd ? (this.look.mV = 0, this.look.RV = 0, this.look.pointedAt = void 0) : this.view.readLook(md.heading, md.pitch, "look" === this.mouseTurns, Wd, this.look);
```

#### 1067. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8378` → after: `L8378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8378) · [Before (L8378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8378)

```diff
-         if (this.gm.qx.GQr(this.director.getLoadingPositions()), this.syncShownSettings(), this.screen.show(this.director.getScreenFade(), this.director.getSettings()), !Wr) return this.hideWatched(null), void this.release();
+         if (this.zo.Bt.gWd(this.director.getLoadingPositions()), this.syncShownSettings(), this.screen.show(this.director.getScreenFade(), this.director.getSettings()), !Fd) return this.hideWatched(null), void this.release();
```

#### 1068. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8382` → after: `L8382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8382) · [Before (L8382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8382)

```diff
-         "movement" !== this.facing || ar || this.turnBodyTowardsMovement(rr), this.cursorAim.lx(rr), this.applyPose(Wr)
+         "movement" !== this.facing || Rd || this.turnBodyTowardsMovement(dd), this.cursorAim.Et(dd), this.applyPose(Fd)
```

#### 1069. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8388` → after: `L8388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8388) · [Before (L8388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8388)

```diff
-         return !Wp.e.isCameraDetachedFromPlayer(this.gm) && (this.setControlsLocked(!0), Wp.e.detachCamera(this.gm, {
+         return !RQ.c.isCameraDetachedFromPlayer(this.zo) && (this.setControlsLocked(!0), RQ.c.detachCamera(this.zo, {
```

#### 1070. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8390` → after: `L8390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8390) · [Before (L8390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8390)

```diff
-         }) ? (this.detached = !0, this.gm.hz = this.gm.bloxd.getBlockReach(this.gm.fC), this.publishView(), !0) : (this.setControlsLocked(!1), !1))
+         }) ? (this.detached = !0, this.zo.Tb = this.zo.bloxd.getBlockReach(this.zo.YV), this.publishView(), !0) : (this.setControlsLocked(!1), !1))
```

#### 1071. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8396` → after: `L8396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8396) · [Before (L8396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8396)

```diff
-           gm: Qr
+           zo: md
```

#### 1072. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8399-L8400` → after: `L8399-L8400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8399-L8400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8399-L8400) · [Before (L8399-L8400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8399-L8400)

```diff
-         } = Qr, Wr = Wp.e.getPlayerFacingHeading(Qr), ar = Wp.e.getPlayerFacingPitch(Qr), jr = null !== (Sr = Tp(Qr, Wr, ar, this.reattachedPosition)) && void 0 !== Sr ? Sr : Wp.e.getSavedZoomDistance(Qr);
-         this.giveUpView(), Wp.e.reattachCamera(Qr), Zr.GJ = jr, Zr.heading = Wr, Zr.pitch = ar, Zr.A4(), (0, mf.t)(Qr), this.setControlsLocked(!1, rr)
+         } = md, Fd = RQ.c.getPlayerFacingHeading(md), Rd = RQ.c.getPlayerFacingPitch(md), Xd = null !== (Od = JQ(md, Fd, Rd, this.reattachedPosition)) && void 0 !== Od ? Od : RQ.c.getSavedZoomDistance(md);
+         this.giveUpView(), RQ.c.reattachCamera(md), Wd.R7 = Xd, Wd.heading = Fd, Wd.pitch = Rd, Wd.n_(), (0, Hh.r)(md), this.setControlsLocked(!1, dd)
```

#### 1073. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8405` → after: `L8405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8405) · [Before (L8405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8405)

```diff
-           jr = "follow" === ar.mode && "eye" === ar.anchor && null !== (Sr = ar.target) && void 0 !== Sr ? Sr : null;
+           Xd = "follow" === Rd.mode && "eye" === Rd.anchor && null !== (Od = Rd.target) && void 0 !== Od ? Od : null;
```

#### 1074. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8408` → after: `L8408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8408) · [Before (L8408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8408)

```diff
-           for (const pr of [jr, null !== (fr = null === (Er = this.hiddenWatched) || void 0 === Er ? void 0 : Er.eId) && void 0 !== fr ? fr : null]) {
+           for (const Qd of [Xd, null !== (hd = null === (vd = this.hiddenWatched) || void 0 === vd ? void 0 : vd.eId) && void 0 !== hd ? hd : null]) {
```

#### 1075. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8410` → after: `L8410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8410) · [Before (L8410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8410)

```diff
-             const Sr = null === pr ? null : this.qx.getPlayerHolding(pr, rr);
+             const Od = null === Qd ? null : this.Bt.getPlayerHolding(Qd, dd);
```

#### 1076. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8419` → after: `L8419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8419) · [Before (L8419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8419)

```diff
-         null !== this.hiddenWatched && this.hiddenWatched.noaId !== (null === (Qr = Ir) || void 0 === Qr ? void 0 : Qr.noaId) && (0, Np.setCameraForceHidden)(this.gm, this.hiddenWatched.noaId, !1), this.hiddenWatched = Ir, this.qx.cameraHiddenPlayer = null !== (Zr = null === (Wr  … [truncated]
+         null !== this.hiddenWatched && this.hiddenWatched.noaId !== (null === (md = Kd) || void 0 === md ? void 0 : md.noaId) && (0, qQ.setCameraForceHidden)(this.zo, this.hiddenWatched.noaId, !1), this.hiddenWatched = Kd, this.Bt.cameraHiddenPlayer = null !== (Wd = null === (Fd  … [truncated]
```

#### 1077. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8422` → after: `L8422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8422) · [Before (L8422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8422)

```diff
-         this.detached && (this.giveUpView(), Wp.e.setFacingMode(this.gm, "frozen"), this.setControlsLocked(!1, {
+         this.detached && (this.giveUpView(), RQ.c.setFacingMode(this.zo, "frozen"), this.setControlsLocked(!1, {
```

#### 1078. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8427` → after: `L8427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8427) · [Before (L8427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8427)

```diff
-         this.detached = !1, this.gm.OSr = null, this.gm.LSr = null, this.publishView()
+         this.detached = !1, this.zo.Omd = null, this.zo.mmd = null, this.publishView()
```

#### 1079. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8431` → after: `L8431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8431) · [Before (L8431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8431)

```diff
-         this.cursor.setActive("cursor" === rr), "cursor" !== rr && this.cursorAim.forgetTap(), gj.c.get("scriptedCameraFacing") !== rr && gj.c.set({
+         this.cursor.setActive("cursor" === dd), "cursor" !== dd && this.cursorAim.forgetTap(), nX.e.get("scriptedCameraFacing") !== dd && nX.e.set({
```

#### 1080. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8438-L8441` → after: `L8438-L8441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8438-L8441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8438-L8441) · [Before (L8438-L8441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8438-L8441)

```diff
-           gm: Qr
-         } = this, Zr = Qr.YB.jQr(Qr.fC);
-         let Wr = Wp.e.getPlayerFacingHeading(Qr);
-         const ar = null !== (Sr = Zr.ridingVehicleEId) && void 0 !== Sr ? Sr : null;
+           zo: md
+         } = this, Wd = md.qE.Pmd(md.YV);
+         let Fd = RQ.c.getPlayerFacingHeading(md);
+         const Rd = null !== (Od = Wd.ridingVehicleEId) && void 0 !== Od ? Od : null;
```

#### 1081. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8444` → after: `L8444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8444) · [Before (L8444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8444)

```diff
-             const Qr = rr.bloxd.getResolvedPhysicsSettings(rr.fC, rr.YB.ASr(rr.fC).physicsState);
+             const md = dd.bloxd.getResolvedPhysicsSettings(dd.YV, dd.qE.Hmd(dd.YV).physicsState);
```

#### 1082. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8452` → after: `L8452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8452) · [Before (L8452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8452)

```diff
-         Wp.e.setPlayerFacing(Qr, Wr, (Ir = Wp.e.getPlayerFacingPitch(Qr), fr = rr, Ir * Math.max(0, 1 - fr / 1e3 * 8)))
+         RQ.c.setPlayerFacing(md, Fd, (Kd = RQ.c.getPlayerFacingPitch(md), hd = dd, Kd * Math.max(0, 1 - hd / 1e3 * 8)))
```

#### 1083. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8456` → after: `L8456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8456) · [Before (L8456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8456)

```diff
-           gm: Sr
+           zo: Od
```

#### 1084. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8460` → after: `L8460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8460) · [Before (L8460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8460)

```diff
-         Sr.YB.setPosition(Qr.qJ, rr.position), Qr.heading = (0, xp.q)(rr.heading), Qr.pitch = (0, xp.i)(rr.pitch), Qr.A4(), (0, mf.t)(Sr), Sr.Ox.r_().fov = (0, Ep.k)(rr.fov), this.view.noteWritten(Qr.heading, Qr.pitch), (0, DE.i)(rr.position, this.cameraPosition), "camera" === th … [truncated]
+         Od.qE.setPosition(md.pM, dd.position), md.heading = (0, oQ.w)(dd.heading), md.pitch = (0, oQ.h)(dd.pitch), md.n_(), (0, Hh.r)(Od), Od.gt.l_().fov = (0, QQ.n)(dd.fov), this.view.noteWritten(md.heading, md.pitch), (0, kv.i)(dd.position, this.cameraPosition), "camera" === th … [truncated]
```

#### 1085. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8464` → after: `L8464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8464) · [Before (L8464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8464)

```diff
-           gm: Sr
+           zo: Od
```

#### 1086. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8468` → after: `L8468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8468) · [Before (L8468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8468)

```diff
-         kp(Rp(Sr, this.eye), rr, (0, xp.f)(Qr.heading, Qr.pitch, this.rayDirection), Sr.hz, this.qx.pickTargetedBlock, this.aim), qp(Sr, this.aim, Qr.heading, Qr.pitch)
+         PQ(AQ(Od, this.eye), dd, (0, oQ.g)(md.heading, md.pitch, this.rayDirection), Od.Tb, this.Bt.pickTargetedBlock, this.aim), iQ(Od, this.aim, md.heading, md.pitch)
```

#### 1087. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8472` → after: `L8472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8472) · [Before (L8472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8472)

```diff
-           gm: rr
+           zo: dd
```

#### 1088. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8474` → after: `L8474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8474) · [Before (L8474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8474)

```diff
-         rr.OSr = rr.sSr(Rp(rr, this.eye), null, this.OSr), rr.LSr = Wp.e.copyPlayerFacingDirection(rr, this.LSr)
+         dd.Omd = dd.Smd(AQ(dd, this.eye), null, this.Omd), dd.mmd = RQ.c.copyPlayerFacingDirection(dd, this.mmd)
```

#### 1089. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8477` → after: `L8477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8477) · [Before (L8477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8477)

```diff
-     var ip = Qr(35261);
+     var jQ = md(35354);
```

#### 1090. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8484` → after: `L8484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8484) · [Before (L8484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8484)

```diff
-       return null !== (Qr = null !== (Zr = rr.inclination) && void 0 !== Zr ? Zr : null === Sr || void 0 === Sr ? void 0 : Sr.inclination) && void 0 !== Qr ? Qr : -.2
+       return null !== (md = null !== (Wd = dd.inclination) && void 0 !== Wd ? Wd : null === Od || void 0 === Od ? void 0 : Od.inclination) && void 0 !== md ? md : -.2
```

#### 1091. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8490` → after: `L8490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8490) · [Before (L8490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8490)

```diff
-         return null !== (Qr = null !== (Zr = rr.useSunPosition) && void 0 !== Zr ? Zr : null === Sr || void 0 === Sr ? void 0 : Sr.useSunPosition) && void 0 !== Qr ? Qr : cp
+         return null !== (md = null !== (Wd = dd.useSunPosition) && void 0 !== Wd ? Wd : null === Od || void 0 === Od ? void 0 : Od.useSunPosition) && void 0 !== md ? md : eQ
```

#### 1092. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8495-L8496` → after: `L8495-L8496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8495-L8496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8495-L8496) · [Before (L8495-L8496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8495-L8496)

```diff
-           return null !== (Qr = null !== (Zr = rr.sunPosition) && void 0 !== Zr ? Zr : null === Sr || void 0 === Sr ? void 0 : Sr.sunPosition) && void 0 !== Qr ? Qr : Fp
-         }(rr, Sr), jr = new Dr.kU(Zr, Wr, ar);
+           return null !== (md = null !== (Wd = dd.sunPosition) && void 0 !== Wd ? Wd : null === Od || void 0 === Od ? void 0 : Od.sunPosition) && void 0 !== md ? md : IQ
+         }(dd, Od), Xd = new fd.Cq(Wd, Fd, Rd);
```

#### 1093. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8509` → after: `L8509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8509) · [Before (L8509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8509)

```diff
-       const Wr = null !== Qr && void 0 !== Qr ? Qr : op(rr, Sr),
+       const Fd = null !== md && void 0 !== md ? md : lQ(dd, Od),
```

#### 1094. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8512` → after: `L8512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8512) · [Before (L8512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8512)

```diff
-           return null !== (Qr = null !== (Zr = rr.azimuth) && void 0 !== Zr ? Zr : null === Sr || void 0 === Sr ? void 0 : Sr.azimuth) && void 0 !== Qr ? Qr : .55
+           return null !== (md = null !== (Wd = dd.azimuth) && void 0 !== Wd ? Wd : null === Od || void 0 === Od ? void 0 : Od.azimuth) && void 0 !== md ? md : .55
```

#### 1095. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8516` → after: `L8516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8516) · [Before (L8516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8516)

```diff
-           return null !== (Qr = null !== (Zr = rr.up) && void 0 !== Zr ? Zr : null === Sr || void 0 === Sr ? void 0 : Sr.up) && void 0 !== Qr ? Qr : wp
+           return null !== (md = null !== (Wd = dd.up) && void 0 !== Wd ? Wd : null === Od || void 0 === Od ? void 0 : Od.up) && void 0 !== md ? md : DQ
```

#### 1096. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8520-L8521` → after: `L8520-L8521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8520-L8521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8520-L8521) · [Before (L8520-L8521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8520-L8521)

```diff
-         Er = new Dr.kU(Math.cos(fr) * Math.cos(Ir), Math.sin(-Ir), Math.sin(fr) * Math.cos(Ir)),
-         pr = new Dr.kU(jr[0], jr[1], jr[2]),
+         vd = new fd.Cq(Math.cos(hd) * Math.cos(Kd), Math.sin(-Kd), Math.sin(hd) * Math.cos(Kd)),
+         Qd = new fd.Cq(Xd[0], Xd[1], Xd[2]),
```

#### 1097. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8523-L8524` → after: `L8523-L8524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8523-L8524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8523-L8524) · [Before (L8523-L8524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8523-L8524)

```diff
-       Dr.Quaternion.FromUnitVectorsToRef(Dr.kU.UpReadOnly, pr, xr);
-       const mr = new Dr.kU;
+       fd.Quaternion.FromUnitVectorsToRef(fd.Cq.UpReadOnly, Qd, td);
+       const od = new fd.Cq;
```

#### 1098. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8550-L8553` → after: `L8550-L8553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8550-L8553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8550-L8553) · [Before (L8550-L8553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8550-L8553)

```diff
-         this.gm = rr, this.starsMesh = null, this.starsMat = null, this.sunMesh = null, this.sunMat = null, this.moonMesh = null, this.moonMat = null, this.sunOpacity = null, this.moonOpacity = null, this.earthSkyBox = null;
-         const Sr = this.gm.NK.skyBox;
-         "object" === typeof Sr && "earth" === Sr.type && (this.earthSkyBox = Sr), this.sunOpacity = this.gm.NK.dayNightSunOpacity, this.moonOpacity = this.gm.NK.dayNightMoonOpacity;
-         const Qr = af.d.subscribe("dayNightSunOpacity", (rr => {
+         this.zo = dd, this.starsMesh = null, this.starsMat = null, this.sunMesh = null, this.sunMat = null, this.moonMesh = null, this.moonMat = null, this.sunOpacity = null, this.moonOpacity = null, this.earthSkyBox = null;
+         const Od = this.zo.EY.skyBox;
+         "object" === typeof Od && "earth" === Od.type && (this.earthSkyBox = Od), this.sunOpacity = this.zo.EY.dayNightSunOpacity, this.moonOpacity = this.zo.EY.dayNightMoonOpacity;
+         const md = hh.e.subscribe("dayNightSunOpacity", (dd => {
```

#### 1099. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8556` → after: `L8556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8556) · [Before (L8556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8556)

```diff
-           Zr = af.d.subscribe("dayNightMoonOpacity", (rr => {
+           Wd = hh.e.subscribe("dayNightMoonOpacity", (dd => {
```

#### 1100. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8559` → after: `L8559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8559) · [Before (L8559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8559)

```diff
-           Wr = af.d.subscribe("dayNightStarOpacity", (rr => {
+           Fd = hh.e.subscribe("dayNightStarOpacity", (dd => {
```

#### 1101. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8562` → after: `L8562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8562) · [Before (L8562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8562)

```diff
-           ar = af.d.subscribe("skyBox", (rr => {
+           Rd = hh.e.subscribe("skyBox", (dd => {
```

#### 1102. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8567` → after: `L8567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8567) · [Before (L8567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8567)

```diff
-         })), this.syncSunAndMoon(), this.setStarOpacity(this.gm.NK.dayNightStarOpacity)
+         })), this.syncSunAndMoon(), this.setStarOpacity(this.zo.EY.dayNightStarOpacity)
```

#### 1103. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8569` → after: `L8569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8569) · [Before (L8569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8569)

```diff
-       CQr() {
+       pWd() {
```

#### 1104. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8579` → after: `L8579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8579) · [Before (L8579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8579)

```diff
-         "object" === typeof rr && "earth" === rr.type ? this.earthSkyBox = rr : this.earthSkyBox = null, this.syncSunAndMoon()
+         "object" === typeof dd && "earth" === dd.type ? this.earthSkyBox = dd : this.earthSkyBox = null, this.syncSunAndMoon()
```

#### 1105. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8594-L8596` → after: `L8594-L8596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8594-L8596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8594-L8596) · [Before (L8594-L8596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8594-L8596)

```diff
-         null === rr && (null === (Qr = this.sunMesh) || void 0 === Qr || Qr.VK(!1));
-         null === Sr && (null === (Zr = this.moonMesh) || void 0 === Zr || Zr.VK(!1));
-         null === rr && null === Sr || (this.ensureCreated(), this.applySizes(), this.positionSunAndMoon(), null !== rr && ((0, cr.e)(this.sunMat, {
+         null === dd && (null === (md = this.sunMesh) || void 0 === md || md.rY(!1));
+         null === Od && (null === (Wd = this.moonMesh) || void 0 === Wd || Wd.rY(!1));
+         null === dd && null === Od || (this.ensureCreated(), this.applySizes(), this.positionSunAndMoon(), null !== dd && ((0, Id.f)(this.sunMat, {
```

#### 1106. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8598` → after: `L8598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8598) · [Before (L8598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8598)

```diff
-         }), this.sunMesh.VK(!0)), null !== Sr && ((0, cr.e)(this.moonMat, {
+         }), this.sunMesh.rY(!0)), null !== Od && ((0, Id.f)(this.moonMat, {
```

#### 1107. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8600` → after: `L8600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8600) · [Before (L8600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8600)

```diff
-         }), this.moonMesh.VK(!0)))
+         }), this.moonMesh.rY(!0)))
```

#### 1108. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8604` → after: `L8604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8604) · [Before (L8604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8604)

```diff
-         Dp(rr) ? (this.ensureCreated(), (0, cr.e)(this.starsMat, {
+         kQ(dd) ? (this.ensureCreated(), (0, Id.f)(this.starsMat, {
```

#### 1109. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8606` → after: `L8606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8606) · [Before (L8606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8606)

```diff
-         }), this.starsMesh.VK(!0)) : null === (Sr = this.starsMesh) || void 0 === Sr || Sr.VK(!1)
+         }), this.starsMesh.rY(!0)) : null === (Od = this.starsMesh) || void 0 === Od || Od.rY(!1)
```

#### 1110. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8611-L8613` → after: `L8611-L8613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8611-L8613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8611-L8613) · [Before (L8611-L8613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8611-L8613)

```diff
-           Ox: rr
-         } = this.gm, {
-           Dt: Sr
+           gt: dd
+         } = this.zo, {
+           MH: Od
```

#### 1111. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8616` → after: `L8616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8616) · [Before (L8616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8616)

```diff
-         const Qr = ip.g.map((rr => ip.h + rr)),
+         const md = jQ.d.map((dd => jQ.h + dd)),
```

#### 1112. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8624` → after: `L8624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8624) · [Before (L8624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8624)

```diff
-           Wr = (0, er.n)(Sr, Zr),
+           Fd = (0, Yd.l)(Od, Wd),
```

#### 1113. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8628-L8629` → after: `L8628-L8629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8628-L8629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8628-L8629) · [Before (L8628-L8629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8628-L8629)

```diff
-             alphaMode: Or.e.add,
-             transparencyMode: Or.s.alphaBlend
+             alphaMode: xd.d.add,
+             transparencyMode: xd.r.alphaBlend
```

#### 1114. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8631` → after: `L8631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8631) · [Before (L8631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8631)

```diff
-         this.starsMat = (0, cr.b)({
+         this.starsMat = (0, Id.d)({
```

#### 1115. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8633` → after: `L8633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8633) · [Before (L8633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8633)

```diff
-           Dt: Sr,
+           MH: Od,
```

#### 1116. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8636-L8637` → after: `L8636-L8637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8636-L8637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8636-L8637) · [Before (L8636-L8637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8636-L8637)

```diff
-         const jr = Tr.d.BILLBOARDMODE_ALL | Tr.d.BILLBOARDMODE_USE_POSITION;
-         this.sunMesh = (0, nr.p)(rr, "dayNightSun", (0, Kr.h)({
+         const Xd = Jd.c.BILLBOARDMODE_ALL | Jd.c.BILLBOARDMODE_USE_POSITION;
+         this.sunMesh = (0, pd.p)(dd, "dayNightSun", (0, gd.j)({
```

#### 1117. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8640` → after: `L8640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8640) · [Before (L8640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8640)

```diff
-         })), this.sunMat = sp(Sr, "dayNightSun", ip.l), this.sunMesh.material = this.sunMat, this.sunMesh.billboardMode = jr, this.setupSkyMesh(this.sunMesh), this.moonMesh = (0, nr.p)(rr, "dayNightMoon", (0, Kr.h)({
+         })), this.sunMat = MQ(Od, "dayNightSun", jQ.i), this.sunMesh.material = this.sunMat, this.sunMesh.billboardMode = Xd, this.setupSkyMesh(this.sunMesh), this.moonMesh = (0, pd.p)(dd, "dayNightMoon", (0, gd.j)({
```

#### 1118. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8643` → after: `L8643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8643) · [Before (L8643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8643)

```diff
-         })), this.moonMat = sp(Sr, "dayNightMoon", ip.e), this.moonMesh.material = this.moonMat, this.moonMesh.billboardMode = jr, this.setupSkyMesh(this.moonMesh), this.applySizes(), this.starsMesh.VK(!1), this.sunMesh.VK(!1), this.moonMesh.VK(!1)
+         })), this.moonMat = MQ(Od, "dayNightMoon", jQ.c), this.moonMesh.material = this.moonMat, this.moonMesh.billboardMode = Xd, this.setupSkyMesh(this.moonMesh), this.applySizes(), this.starsMesh.rY(!1), this.sunMesh.rY(!1), this.moonMesh.rY(!1)
```

#### 1119. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8646` → after: `L8646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8646) · [Before (L8646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8646)

```diff
-         rr.infiniteDistance = !0, rr.renderingGroupId = -1, rr.ut = !1, rr.GU = !0, rr.VU = !0, rr.applyFog = !1, this.gm.Ox.Sh(rr, !1, this.gm.um, !1)
+         dd.infiniteDistance = !0, dd.renderingGroupId = -1, dd.my = !1, dd.lq = !0, dd.kq = !0, dd.applyFog = !1, this.zo.gt.Fy(dd, !1, this.zo.XN, !1)
```

#### 1120. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8652-L8655` → after: `L8652-L8655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8652-L8655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8652-L8655) · [Before (L8652-L8655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8652-L8655)

```diff
-           Ox: rr
-         } = this.gm, Sr = .8 * rr.r_().far, Qr = function() {
-           const rr = tr.d.getSkyBox("default");
-           return "earth" === (null === rr || void 0 === rr ? void 0 : rr.type) ? rr : void 0
+           gt: dd
+         } = this.zo, Od = .8 * dd.l_().far, md = function() {
+           const dd = Hd.c.getSkyBox("default");
+           return "earth" === (null === dd || void 0 === dd ? void 0 : dd.type) ? dd : void 0
```

#### 1121. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8657` → after: `L8657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8657) · [Before (L8657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8657)

```diff
-         (0, Xr.p)(this.sunMesh, Zr.x * Sr, Zr.y * Sr, Zr.z * Sr);
+         (0, sd.q)(this.sunMesh, Wd.x * Od, Wd.y * Od, Wd.z * Od);
```

#### 1122. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8660` → after: `L8660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8660) · [Before (L8660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8660)

```diff
-         (0, Xr.p)(this.moonMesh, ar.x * Sr, ar.y * Sr, ar.z * Sr)
+         (0, sd.q)(this.moonMesh, Rd.x * Od, Rd.y * Od, Rd.z * Od)
```

#### 1123. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8665-L8666` → after: `L8665-L8666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8665-L8666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8665-L8666) · [Before (L8665-L8666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8665-L8666)

```diff
-           Ox: rr
-         } = this.gm, {
+           gt: dd
+         } = this.zo, {
```

#### 1124. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8668-L8669` → after: `L8668-L8669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8668-L8669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8668-L8669) · [Before (L8668-L8669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8668-L8669)

```diff
-         } = rr.r_(), Qr = .95 * Sr;
-         this.starsMesh.Tx.set(Qr, Qr, Qr);
+         } = dd.l_(), md = .95 * Od;
+         this.starsMesh.Tt.set(md, md, md);
```

#### 1125. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8672` → after: `L8672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8672) · [Before (L8672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8672)

```diff
-         this.sunMesh.Tx.set(Wr, Wr, Wr);
+         this.sunMesh.Tt.set(Fd, Fd, Fd);
```

#### 1126. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8674` → after: `L8674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8674) · [Before (L8674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8674)

```diff
-         this.moonMesh.Tx.set(ar, ar, ar)
+         this.moonMesh.Tt.set(Rd, Rd, Rd)
```

#### 1127. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8692` → after: `L8692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8692) · [Before (L8692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8692)

```diff
-       return (0, cr.b)({
+       return (0, Id.d)({
```

#### 1128. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8694` → after: `L8694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8694) · [Before (L8694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8694)

```diff
-         Dt: rr,
+         MH: dd,
```

#### 1129. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8703-L8714` → after: `L8703-L8714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8703-L8714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8703-L8714) · [Before (L8703-L8714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8703-L8714)

```diff
-     var rx = Qr(2984),
-       Sx = Qr(39405),
-       Qx = Qr(38770),
-       Zx = Qr(39021),
-       Wx = Qr(38831),
-       ax = Qr(868),
-       jx = Qr(3884),
-       Ix = Qr(4983),
-       fx = Qr(127),
-       Ex = Qr(335),
-       px = Qr(345),
-       xx = Qr(40792);
+     var dt = md(2991),
+       Ot = md(39461),
+       mt = md(38815),
+       Wt = md(39065),
+       Ft = md(38877),
+       Rt = md(870),
+       Xt = md(3868),
+       Kt = md(4940),
+       ht = md(132),
+       vt = md(364),
+       Qt = md(373),
+       tt = md(40819);
```

#### 1130. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8718` → after: `L8718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8718) · [Before (L8718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8718)

```diff
-       return (0, px.l)() ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu"
+       return (0, Qt.f)() ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu"
```

#### 1131. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8722` → after: `L8722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8722) · [Before (L8722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8722)

```diff
-       return `${rr.getMode()}|${rr.ct()}`
+       return `${dd.getMode()}|${dd.lH()}`
```

#### 1132. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8726` → after: `L8726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8726) · [Before (L8726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8726)

```diff
-       console.error(`Shader pack failed to compile for "${rr.failure.material}":`, rr.failure.message)
+       console.error(`Shader pack failed to compile for "${dd.failure.material}":`, dd.failure.message)
```

#### 1133. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8730` → after: `L8730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8730) · [Before (L8730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8730)

```diff
-         this.page = rr, this.lastPassedCheck = null, this.checkGeneration = 0, this.checksRunning = 0, this.heldFailures = [], this.inGame = !1, this.game = 0, this.notifiedModelFallback = !1, this.failedModelCode = new Set, hr.i.subscribe(mx, (rr => {
+         this.page = dd, this.lastPassedCheck = null, this.checkGeneration = 0, this.checksRunning = 0, this.heldFailures = [], this.inGame = !1, this.game = 0, this.notifiedModelFallback = !1, this.failedModelCode = new Set, yd.j.subscribe(ot, (dd => {
```

#### 1134. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8736` → after: `L8736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8736) · [Before (L8736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8736)

```diff
-           Sr === this.game && this.inGame && hr.i.Jp("chat", (0, Ix.j)(Qr, Zr))
+           Od === this.game && this.inGame && yd.j.lQ("chat", (0, Kt.i)(md, Wd))
```

#### 1135. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8744` → after: `L8744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8744) · [Before (L8744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8744)

```diff
-         if ((0, WI.p)("webgpuloss")) {
+         if ((0, KK.o)("webgpuloss")) {
```

#### 1136. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8746` → after: `L8746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8746) · [Before (L8746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8746)

```diff
-             status: "Rr"
+             status: "Ad"
```

#### 1137. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8748` → after: `L8748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8748) · [Before (L8748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8748)

```diff
-           (0, aI.c)((Zr => Zr.noteJsJoin(Sr, rr, Qr)))
+           (0, hK.e)((Wd => Wd.noteJsJoin(Od, dd, md)))
```

#### 1138. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8751-L8753` → after: `L8751-L8753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8751-L8753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8751-L8753) · [Before (L8751-L8753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8751-L8753)

```diff
-           status: "Rr"
-         } : (hr.i.Jp("matchmakeAndPlayStepCompleted", {
-           step: nS.i.SHADER_PACK,
+           status: "Ad"
+         } : (yd.j.lQ("matchmakeAndPlayStepCompleted", {
+           step: gO.l.SHADER_PACK,
```

#### 1139. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8755` → after: `L8755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8755) · [Before (L8755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8755)

```diff
-         }), "ok" === ar.status && (this.inGame = !0, void 0 !== ar.couldntRun && this.notify(Ix.b, ar.couldntRun), rr && !rr.isRunning() && this.notify("shaderPack:offInThisGame"), rr && this.failedModelCode.has(rr.defineFor("model")) && this.notifyModelFallback(), this.recheck(r … [truncated]
+         }), "ok" === Rd.status && (this.inGame = !0, void 0 !== Rd.couldntRun && this.notify(Kt.d, Rd.couldntRun), dd && !dd.isRunning() && this.notify("shaderPack:offInThisGame"), dd && this.failedModelCode.has(dd.defineFor("model")) && this.notifyModelFallback(), this.recheck(d … [truncated]
```

#### 1140. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8780-L8781` → after: `L8780-L8781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8780-L8781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8780-L8781) · [Before (L8780-L8781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8780-L8781)

```diff
-           const fr = null !== (jr = null !== ar && void 0 !== ar ? ar : null === Wr || void 0 === Wr ? void 0 : Wr.message) && void 0 !== jr ? jr : Wr,
-             Er = () => Ir.packVariant === rr.defineFor(Ir.program) && ("model" === Ir.program || Ir.lighting === rr.ct());
+           const hd = null !== (Xd = null !== Rd && void 0 !== Rd ? Rd : null === Fd || void 0 === Fd ? void 0 : Fd.message) && void 0 !== Xd ? Xd : Fd,
+             vd = () => Kd.packVariant === dd.defineFor(Kd.program) && ("model" === Kd.program || Kd.lighting === dd.lH());
```

#### 1141. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8783` → after: `L8783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8783) · [Before (L8783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8783)

```diff
-             Qr || (this.failedModelCode.add(Ir.packVariant), this.inGame && Er() && (console.error(`Shader pack program ${Zr} failed in game, so its models are drawn without the pack:`, fr), this.notifyModelFallback()))
+             md || (this.failedModelCode.add(Kd.packVariant), this.inGame && vd() && (console.error(`Shader pack program ${Wd} failed in game, so its models are drawn without the pack:`, hd), this.notifyModelFallback()))
```

#### 1142. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8789` → after: `L8789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8789) · [Before (L8789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8789)

```diff
-               console.error(`Shader pack program ${Zr} failed in game:`, fr)
+               console.error(`Shader pack program ${Wd} failed in game:`, hd)
```

#### 1143. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8815` → after: `L8815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8815) · [Before (L8815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8815)

```diff
-         const ar = null !== (Zr = (0, xx.harnessShaderPackMode)()) && void 0 !== Zr ? Zr : (0, ax.j)(Sr);
+         const Rd = null !== (Wd = (0, tt.harnessShaderPackMode)()) && void 0 !== Wd ? Wd : (0, Rt.f)(Od);
```

#### 1144. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8817` → after: `L8817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8817) · [Before (L8817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8817)

```diff
-           if ((0, Fa.g)(Wr.variants, ar)) {
+           if ((0, CR.k)(Fd.variants, Rd)) {
```

#### 1145. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8829` → after: `L8829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8829) · [Before (L8829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8829)

```diff
-           if (!(0, Fa.g)(Wr.pack.variants, ar)) return {
+           if (!(0, CR.k)(Fd.pack.variants, Rd)) return {
```

#### 1146. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8837` → after: `L8837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8837) · [Before (L8837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8837)

```diff
-               if ("default" === (null === rr || void 0 === rr ? void 0 : rr.source)) return (0, px.l)() && !(0, Ex.i)() ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu";
+               if ("default" === (null === dd || void 0 === dd ? void 0 : dd.source)) return (0, Qt.f)() && !(0, vt.h)() ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu";
```

#### 1147. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8840` → after: `L8840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8840) · [Before (L8840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8840)

```diff
-             }()) && void 0 !== jr ? jr : function() {
+             }()) && void 0 !== Xd ? Xd : function() {
```

#### 1148. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8855-L8856` → after: `L8855-L8856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8855-L8856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8855-L8856) · [Before (L8855-L8856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8855-L8856)

```diff
-         return "Rr" === fr.status ? {
-           status: "Rr"
+         return "Ad" === hd.status ? {
+           status: "Ad"
```

#### 1149. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8888` → after: `L8888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8888) · [Before (L8888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8888)

```diff
-               message: `The check failed: ${Zr instanceof Error?Zr.message:String(Zr)}`
+               message: `The check failed: ${Wd instanceof Error?Wd.message:String(Wd)}`
```

#### 1150. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8905` → after: `L8905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8905) · [Before (L8905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8905)

```diff
-         this.lastPassedCheck = null, this.endGame(), hr.i.Jp(Ix.f, "shaderPack:failedToCompile")
+         this.lastPassedCheck = null, this.endGame(), yd.j.lQ(Kt.h, "shaderPack:failedToCompile")
```

#### 1151. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8916` → after: `L8916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8916) · [Before (L8916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8916)

```diff
-         hr.i.Jp(mx, Qr, !0)
+         yd.j.lQ(ot, md, !0)
```

#### 1152. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8919-L8920` → after: `L8919-L8920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8919-L8920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8919-L8920) · [Before (L8919-L8920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8919-L8920)

```diff
-     var zx = Qr(40317),
-       Yx = Qr(40801);
+     var bt = md(40323),
+       Tt = md(40828);
```

#### 1153. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8923` → after: `L8923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8923) · [Before (L8923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8923)

```diff
-         this.gm = rr, this.skyBoxMesh = null, this.earthSkyKey = null, this.skyBoxRequestId = 0, this.dayAndNightSky = void 0, this.dayAndNightSky = new dp(rr), this.setupSkyBox(), this.setupFog(), this.setupLighting()
+         this.zo = dd, this.skyBoxMesh = null, this.earthSkyKey = null, this.skyBoxRequestId = 0, this.dayAndNightSky = void 0, this.dayAndNightSky = new fQ(dd), this.setupSkyBox(), this.setupFog(), this.setupLighting()
```

#### 1154. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8926` → after: `L8926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8926) · [Before (L8926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8926)

```diff
-         const rr = af.d.subscribe("skyBox", (rr => {
+         const dd = hh.e.subscribe("skyBox", (dd => {
```

#### 1155. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8929-L8930` → after: `L8929-L8930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8929-L8930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8929-L8930) · [Before (L8929-L8930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8929-L8930)

```diff
-         this.gm.Ox.CQr = () => {
-           this.updateSkyboxSize(), this.dayAndNightSky.CQr()
+         this.zo.gt.pWd = () => {
+           this.updateSkyboxSize(), this.dayAndNightSky.pWd()
```

#### 1156. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8933` → after: `L8933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8933) · [Before (L8933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8933)

```diff
-           rr(), this.gm.Ox.CQr = null, this.skyBoxRequestId++, null === (Sr = this.skyBoxMesh) || void 0 === Sr || Sr.dispose(!1, !0), this.skyBoxMesh = null, this.earthSkyKey = null, this.gm.Ox.crr = null, this.gm.Ox.model.earthSky = null
+           dd(), this.zo.gt.pWd = null, this.skyBoxRequestId++, null === (Od = this.skyBoxMesh) || void 0 === Od || Od.dispose(!1, !0), this.skyBoxMesh = null, this.earthSkyKey = null, this.zo.gt.TOd = null, this.zo.gt.model.earthSky = null
```

#### 1157. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8939-L8940` → after: `L8939-L8940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8939-L8940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8939-L8940) · [Before (L8939-L8940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8939-L8940)

```diff
-           Ox: rr
-         } = this.gm, {
+           gt: dd
+         } = this.zo, {
```

#### 1158. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8942-L8943` → after: `L8942-L8943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8942-L8943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8942-L8943) · [Before (L8942-L8943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8942-L8943)

```diff
-         } = rr.r_();
-         this.skyBoxMesh.Tx.set(Sr, Sr, Sr)
+         } = dd.l_();
+         this.skyBoxMesh.Tt.set(Od, Od, Od)
```

#### 1159. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8946` → after: `L8946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8946) · [Before (L8946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8946)

```diff
-         if (this.gm.zU)
+         if (this.zo.Jq)
```

#### 1160. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8948` → after: `L8948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8948) · [Before (L8948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8948)

```diff
-             const rr = "object" === typeof Sr ? Sr : {
+             const dd = "object" === typeof Od ? Od : {
```

#### 1161. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8955-L8957` → after: `L8955-L8957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8955-L8957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8955-L8957) · [Before (L8955-L8957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8955-L8957)

```diff
-               } = bp(rr, "earth" === (null === Qr || void 0 === Qr ? void 0 : Qr.type) ? Qr : void 0);
-             this.gm.Ox.crr = [Zr, Wr, ar]
-           } else this.gm.Ox.crr = null
+               } = CQ(dd, "earth" === (null === md || void 0 === md ? void 0 : md.type) ? md : void 0);
+             this.zo.gt.TOd = [Wd, Fd, Rd]
+           } else this.zo.gt.TOd = null
```

#### 1162. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8960-L8962` → after: `L8960-L8962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8960-L8962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8960-L8962) · [Before (L8960-L8962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8960-L8962)

```diff
-         const Sr = "string" === typeof rr ? rr : rr.type,
-           Qr = tr.d.getSkyBox(Sr);
-         if (void 0 === Qr && "earth" !== Sr) return void console.error(`Skybox "${Sr}" not found, ignoring update...`);
+         const Od = "string" === typeof dd ? dd : dd.type,
+           md = Hd.c.getSkyBox(Od);
+         if (void 0 === md && "earth" !== Od) return void console.error(`Skybox "${Od}" not found, ignoring update...`);
```

#### 1163. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8971-L8973` → after: `L8971-L8973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8971-L8973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8971-L8973) · [Before (L8971-L8973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8971-L8973)

```diff
-           Dt: ar,
-           Wt: jr
-         } = this.gm.Ox, Ir = "earth" === Sr || "earth" === Qr.type;
+           MH: Rd,
+           NH: Xd
+         } = this.zo.gt, Kd = "earth" === Od || "earth" === md.type;
```

#### 1164. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8979-L8980` → after: `L8979-L8980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8979-L8980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8979-L8980) · [Before (L8979-L8980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8979-L8980)

```diff
-         const fr = (0, nr.p)(this.gm.Ox, rx.d.SKYBOX, (0, Kr.l)()),
-           Er = Ir ? (0, zx.e)(ar) : null;
+         const hd = (0, pd.p)(this.zo.gt, dt.e.SKYBOX, (0, gd.l)()),
+           vd = Kd ? (0, bt.g)(Rd) : null;
```

#### 1165. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8984-L8985` → after: `L8984-L8985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8984-L8985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8984-L8985) · [Before (L8984-L8985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8984-L8985)

```diff
-             Sr = (0, Yx.e)(gj.c.get("clientEscMenuOptions").pixelScale),
-             Zr = (0, Yx.i)(rr, Sr, (0, hp.getSettingsFov)()),
+             Od = (0, Tt.c)(nX.e.get("clientEscMenuOptions").pixelScale),
+             Wd = (0, Tt.h)(dd, Od, (0, bQ.getSettingsFov)()),
```

#### 1166. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8989` → after: `L8989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8989) · [Before (L8989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8989)

```diff
-               reflectionTexture: (0, er.n)(ar, {
+               reflectionTexture: (0, Yd.l)(Rd, {
```

#### 1167. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8996` → after: `L8996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8996) · [Before (L8996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8996)

```diff
-           fr.material = (0, cr.b)({
+           hd.material = (0, Id.d)({
```

#### 1168. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8998` → after: `L8998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8998) · [Before (L8998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8998)

```diff
-             Dt: ar,
+             MH: Rd,
```

#### 1169. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9003` → after: `L9003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9003) · [Before (L9003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9003)

```diff
-         fr.ut = !1, fr.VU = !0, fr.GU = !0, fr.applyFog = this.shouldApplyFogToSkyBox(), fr.renderingGroupId = -1, fr.wU();
+         hd.my = !1, hd.kq = !0, hd.lq = !0, hd.applyFog = this.shouldApplyFogToSkyBox(), hd.renderingGroupId = -1, hd.Mq();
```

#### 1170. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9005` → after: `L9005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9005) · [Before (L9005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9005)

```diff
-         (0, cr.e)(pr, {
+         (0, Id.f)(Qd, {
```

#### 1171. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9010` → after: `L9010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9010) · [Before (L9010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9010)

```diff
-         }), (0, WS.g)(pr), (0, zx.b)(fr, (() => {
+         }), (0, XO.f)(Qd), (0, bt.c)(hd, (() => {
```

#### 1172. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9016` → after: `L9016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9016) · [Before (L9016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9016)

```diff
-         null === (Qr = this.skyBoxMesh) || void 0 === Qr || Qr.dispose(!1, !0), this.skyBoxMesh = rr, this.earthSkyKey = Sr, this.updateSkyboxSize(), rr && this.gm.Ox.Sh(rr, !1, this.gm.um, !1), this.gm.Ox.model.earthSky = null !== (Zr = Sr && (0, Qx.f)(Sr)) && void 0 !== Zr ? Zr … [truncated]
+         null === (md = this.skyBoxMesh) || void 0 === md || md.dispose(!1, !0), this.skyBoxMesh = dd, this.earthSkyKey = Od, this.updateSkyboxSize(), dd && this.zo.gt.Fy(dd, !1, this.zo.XN, !1), this.zo.gt.model.earthSky = null !== (Wd = Od && (0, mt.f)(Od)) && void 0 !== Wd ? Wd … [truncated]
```

#### 1173. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9020` → after: `L9020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9020) · [Before (L9020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9020)

```diff
-         const rr = hr.i.subscribe("fogChunkDistanceChanged", (() => {
+         const dd = yd.j.subscribe("fogChunkDistanceChanged", (() => {
```

#### 1174. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9023` → after: `L9023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9023) · [Before (L9023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9023)

```diff
-           Sr = af.d.subscribe("fogChunkDistanceOverride", (() => {
+           Od = hh.e.subscribe("fogChunkDistanceOverride", (() => {
```

#### 1175. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9026` → after: `L9026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9026) · [Before (L9026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9026)

```diff
-           Qr = af.d.subscribe("fogBlockDistanceOverride", (() => {
+           md = hh.e.subscribe("fogBlockDistanceOverride", (() => {
```

#### 1176. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9029` → after: `L9029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9029) · [Before (L9029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9029)

```diff
-           Zr = af.d.subscribe("fogColourOverride", (() => {
+           Wd = hh.e.subscribe("fogColourOverride", (() => {
```

#### 1177. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9032` → after: `L9032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9032) · [Before (L9032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9032)

```diff
-           Wr = af.d.subscribe("fogOnSkybox", (() => {
+           Fd = hh.e.subscribe("fogOnSkybox", (() => {
```

#### 1178. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9036` → after: `L9036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9036) · [Before (L9036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9036)

```diff
-           hr.i.unsubscribe(rr), Sr(), Qr(), Zr(), Wr()
+           yd.j.unsubscribe(dd), Od(), md(), Wd(), Fd()
```

#### 1179. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9040` → after: `L9040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9040) · [Before (L9040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9040)

```diff
-         return !0 === this.gm.NK.fogOnSkybox
+         return !0 === this.zo.EY.fogOnSkybox
```

#### 1180. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9044` → after: `L9044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9044) · [Before (L9044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9044)

```diff
-         const Qr = null !== (rr = this.gm.NK.fogChunkDistanceOverride) && void 0 !== rr ? rr : gj.c.get("clientEscMenuOptions").fogChunkDistance,
+         const md = null !== (dd = this.zo.EY.fogChunkDistanceOverride) && void 0 !== dd ? dd : nX.e.get("clientEscMenuOptions").fogChunkDistance,
```

#### 1181. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9050` → after: `L9050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9050) · [Before (L9050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9050)

```diff
-         ar && (null === (Sr = (0, Qx.f)(ar)) || void 0 === Sr ? void 0 : Sr.fog) !== Wr && (0, yr.Z)(ar, {
+         Rd && (null === (Od = (0, mt.f)(Rd)) || void 0 === Od ? void 0 : Od.fog) !== Fd && (0, wd._)(Rd, {
```

#### 1182. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9052` → after: `L9052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9052) · [Before (L9052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9052)

```diff
-         }), Zr && Zr.applyFog !== Wr && (Zr.applyFog = Wr, (0, zx.b)(Zr, (() => {
+         }), Wd && Wd.applyFog !== Fd && (Wd.applyFog = Fd, (0, bt.c)(Wd, (() => {
```

#### 1183. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9054-L9060` → after: `L9054-L9060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9054-L9060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9054-L9060) · [Before (L9054-L9060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9054-L9060)

```diff
-         }), this.gm.Ox.Wt));
-         const jr = this.gm.NK.fogColourOverride,
-           fr = jr ? (0, Ir.R)(jr) : ex;
-         let Er = 100 * Ur.i.hx,
-           pr = 101 * Ur.i.hx;
-         const xr = this.gm.NK.fogBlockDistanceOverride;
-         (0, Cr.L)(xr) ? !gj.c.get("clientEscMenuOptions").showFog && (0, Cr.L)(this.gm.NK.fogChunkDistanceOverride) || (Er = Ur.i.hx * Qr, pr = 0 === Qr ? 5 : Ur.i.hx * (Qr + 1)): (Er = 0, pr = xr), (0, Zx.q)(this.gm.Ox, Er, pr, fr)
+         }), this.zo.gt.NH));
+         const Xd = this.zo.EY.fogColourOverride,
+           hd = Xd ? (0, Kd.L)(Xd) : Yt;
+         let vd = 100 * qd.i.Qt,
+           Qd = 101 * qd.i.Qt;
+         const td = this.zo.EY.fogBlockDistanceOverride;
+         (0, nd.O)(td) ? !nX.e.get("clientEscMenuOptions").showFog && (0, nd.O)(this.zo.EY.fogChunkDistanceOverride) || (vd = qd.i.Qt * md, Qd = 0 === md ? 5 : qd.i.Qt * (md + 1)): (vd = 0, Qd = td), (0, Wt.k)(this.zo.gt, vd, Qd, hd)
```

#### 1184. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9064` → after: `L9064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9064) · [Before (L9064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9064)

```diff
-         const rr = af.d.subscribe("lightingOverride", (() => {
+         const dd = hh.e.subscribe("lightingOverride", (() => {
```

#### 1185. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9067` → after: `L9067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9067) · [Before (L9067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9067)

```diff
-           Sr = af.d.subscribe("skyLightColourOverride", (() => {
+           Od = hh.e.subscribe("skyLightColourOverride", (() => {
```

#### 1186. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9070` → after: `L9070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9070) · [Before (L9070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9070)

```diff
-           Qr = af.d.subscribe("ambientLightColourOverride", (() => {
+           md = hh.e.subscribe("ambientLightColourOverride", (() => {
```

#### 1187. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9073` → after: `L9073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9073) · [Before (L9073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9073)

```diff
-           Zr = af.d.subscribe("visionMinLightColour", (() => {
+           Wd = hh.e.subscribe("visionMinLightColour", (() => {
```

#### 1188. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9076` → after: `L9076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9076) · [Before (L9076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9076)

```diff
-           Wr = hr.i.subscribe("appManagerUpdated|clientEscMenuOptions", (() => {
+           Fd = yd.j.subscribe("appManagerUpdated|clientEscMenuOptions", (() => {
```

#### 1189. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9080` → after: `L9080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9080) · [Before (L9080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9080)

```diff
-           rr(), Sr(), Qr(), Zr(), hr.i.unsubscribe(Wr)
+           dd(), Od(), md(), Wd(), yd.j.unsubscribe(Fd)
```

#### 1190. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9086-L9087` → after: `L9086-L9087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9086-L9087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9086-L9087) · [Before (L9086-L9087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9086-L9087)

```diff
-         } = this.gm.NK, Sr = gj.c.get("clientEscMenuOptions").enableLighting, Qr = null !== rr && void 0 !== rr ? rr : Sr, Zr = this.gm.Ox.ct !== Qr;
-         this.gm.Ox.ct = Qr, Zr && ((0, Wx.f)(), Qr && this.gm.qB.requeueChunksForLighting(), hx.lightingChanged(this.gm.zU));
+         } = this.zo.EY, Od = nX.e.get("clientEscMenuOptions").enableLighting, md = null !== dd && void 0 !== dd ? dd : Od, Wd = this.zo.gt.lH !== md;
+         this.zo.gt.lH = md, Wd && ((0, Ft.f)(), md && this.zo.aE.requeueChunksForLighting(), yt.lightingChanged(this.zo.Jq));
```

#### 1191. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9092-L9093` → after: `L9092-L9093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9092-L9093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9092-L9093) · [Before (L9092-L9093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9092-L9093)

```diff
-         } = this.gm.NK;
-         this.gm.Ox.skyLightColourOverride = Wr ? (0, Ir.R)(Wr) : null, this.gm.Ox.ambientLightColourOverride = ar ? (0, Ir.R)(ar) : null, this.gm.Ox.visionMinLightColour = jr ? (0, Ir.R)(jr) : null
+         } = this.zo.EY;
+         this.zo.gt.skyLightColourOverride = Fd ? (0, Kd.L)(Fd) : null, this.zo.gt.ambientLightColourOverride = Rd ? (0, Kd.L)(Rd) : null, this.zo.gt.visionMinLightColour = Xd ? (0, Kd.L)(Xd) : null
```

#### 1192. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9101` → after: `L9101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9101) · [Before (L9101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9101)

```diff
-       const ir = null === (Wr = null !== (ar = Qr.infiniteDistance) && void 0 !== ar ? ar : null === Zr || void 0 === Zr ? void 0 : Zr.infiniteDistance) || void 0 === Wr || Wr;
+       const Dd = null === (Fd = null !== (Rd = md.infiniteDistance) && void 0 !== Rd ? Rd : null === Wd || void 0 === Wd ? void 0 : Wd.infiniteDistance) || void 0 === Fd || Fd;
```

#### 1193. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9103-L9105` → after: `L9103-L9105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9103-L9105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9103-L9105) · [Before (L9103-L9105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9103-L9105)

```diff
-       const wr = null !== (jr = Qr.sunPosition) && void 0 !== jr ? jr : null === Zr || void 0 === Zr ? void 0 : Zr.sunPosition,
-         cr = null !== (Ir = Qr.up) && void 0 !== Ir ? Ir : null === Zr || void 0 === Zr ? void 0 : Zr.up;
-       (0, yr.Z)(Sr, {
+       const ed = null !== (Xd = md.sunPosition) && void 0 !== Xd ? Xd : null === Wd || void 0 === Wd ? void 0 : Wd.sunPosition,
+         Id = null !== (Kd = md.up) && void 0 !== Kd ? Kd : null === Wd || void 0 === Wd ? void 0 : Wd.up;
+       (0, wd._)(Od, {
```

#### 1194. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9107-L9114` → after: `L9107-L9114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9107-L9114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9107-L9114) · [Before (L9107-L9114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9107-L9114)

```diff
-         inclination: null !== (fr = null !== (Er = Qr.inclination) && void 0 !== Er ? Er : null === Zr || void 0 === Zr ? void 0 : Zr.inclination) && void 0 !== fr ? fr : -.2,
-         turbidity: null !== (pr = null !== (xr = Qr.turbidity) && void 0 !== xr ? xr : null === Zr || void 0 === Zr ? void 0 : Zr.turbidity) && void 0 !== pr ? pr : 10,
-         luminance: null !== (mr = null !== (Nr = Qr.luminance) && void 0 !== Nr ? Nr : null === Zr || void 0 === Zr ? void 0 : Zr.luminance) && void 0 !== mr ? mr : .1,
-         rayleigh: null !== (Ur = null !== (tr = Qr.rayleigh) && void 0 !== tr ? tr : null === Zr || void 0 === Zr ? void 0 : Zr.rayleigh) && void 0 !== Ur ? Ur : 2,
-         mieCoefficient: null !== (hr = null !== (zr = Qr.mieCoefficient) && void 0 !== zr ? zr : null === Zr || void 0 === Zr ? void 0 : Zr.mieCoefficient) && void 0 !== hr ? hr : .005,
-         mieDirectionalG: null !== (Yr = null !== (nr = Qr.mieDirectionalG) && void 0 !== nr ? nr : null === Zr || void 0 === Zr ? void 0 : Zr.mieDirectionalG) && void 0 !== Yr ? Yr : .8,
-         distance: null !== (er = null !== (Kr = Qr.distance) && void 0 !== Kr ? Kr : null === Zr || void 0 === Zr ? void 0 : Zr.distance) && void 0 !== er ? er : 500,
-         useSunPosition: null !== (Br = null !== (Tr = Qr.useSunPosition) && void 0 !== Tr ? Tr : null === Zr || void 0 === Zr ? void 0 : Zr.useSunPosition) && void 0 !== Br ? Br : cp,
+         inclination: null !== (hd = null !== (vd = md.inclination) && void 0 !== vd ? vd : null === Wd || void 0 === Wd ? void 0 : Wd.inclination) && void 0 !== hd ? hd : -.2,
+         turbidity: null !== (Qd = null !== (td = md.turbidity) && void 0 !== td ? td : null === Wd || void 0 === Wd ? void 0 : Wd.turbidity) && void 0 !== Qd ? Qd : 10,
+         luminance: null !== (od = null !== (Nd = md.luminance) && void 0 !== Nd ? Nd : null === Wd || void 0 === Wd ? void 0 : Wd.luminance) && void 0 !== od ? od : .1,
+         rayleigh: null !== (qd = null !== (Hd = md.rayleigh) && void 0 !== Hd ? Hd : null === Wd || void 0 === Wd ? void 0 : Wd.rayleigh) && void 0 !== qd ? qd : 2,
+         mieCoefficient: null !== (yd = null !== (bd = md.mieCoefficient) && void 0 !== bd ? bd : null === Wd || void 0 === Wd ? void 0 : Wd.mieCoefficient) && void 0 !== yd ? yd : .005,
+         mieDirectionalG: null !== (Td = null !== (pd = md.mieDirectionalG) && void 0 !== pd ? pd : null === Wd || void 0 === Wd ? void 0 : Wd.mieDirectionalG) && void 0 !== Td ? Td : .8,
+         distance: null !== (Yd = null !== (gd = md.distance) && void 0 !== gd ? gd : null === Wd || void 0 === Wd ? void 0 : Wd.distance) && void 0 !== Yd ? Yd : 500,
+         useSunPosition: null !== (Ed = null !== (Jd = md.useSunPosition) && void 0 !== Jd ? Jd : null === Wd || void 0 === Wd ? void 0 : Wd.useSunPosition) && void 0 !== Ed ? Ed : eQ,
```

#### 1195. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9116-L9119` → after: `L9116-L9119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9116-L9119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9116-L9119) · [Before (L9116-L9119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9116-L9119)

```diff
-         cameraOffset: [null !== (vr = null !== (Or = Qr.xCameraOffset) && void 0 !== Or ? Or : null === Zr || void 0 === Zr ? void 0 : Zr.xCameraOffset) && void 0 !== vr ? vr : 0, null !== (Lr = null !== (lr = Qr.yCameraOffset) && void 0 !== lr ? lr : null === Zr || void 0 === Zr … [truncated]
-         azimuth: null !== (Hr = null !== (qr = Qr.azimuth) && void 0 !== qr ? qr : null === Zr || void 0 === Zr ? void 0 : Zr.azimuth) && void 0 !== Hr ? Hr : .55,
-         sunPosition: [null !== (Rr = null === wr || void 0 === wr ? void 0 : wr[0]) && void 0 !== Rr ? Rr : Fp[0], null !== (gr = null === wr || void 0 === wr ? void 0 : wr[1]) && void 0 !== gr ? gr : Fp[1], null !== (Cr = null === wr || void 0 === wr ? void 0 : wr[2]) && void 0  … [truncated]
-         up: [null !== (Mr = null === cr || void 0 === cr ? void 0 : cr[0]) && void 0 !== Mr ? Mr : wp[0], null !== (Gr = null === cr || void 0 === cr ? void 0 : cr[1]) && void 0 !== Gr ? Gr : wp[1], null !== (kr = null === cr || void 0 === cr ? void 0 : cr[2]) && void 0 !== kr ?  … [truncated]
+         cameraOffset: [null !== (Ud = null !== (xd = md.xCameraOffset) && void 0 !== xd ? xd : null === Wd || void 0 === Wd ? void 0 : Wd.xCameraOffset) && void 0 !== Ud ? Ud : 0, null !== (Bd = null !== (Sd = md.yCameraOffset) && void 0 !== Sd ? Sd : null === Wd || void 0 === Wd … [truncated]
+         azimuth: null !== (Vd = null !== (Ad = md.azimuth) && void 0 !== Ad ? Ad : null === Wd || void 0 === Wd ? void 0 : Wd.azimuth) && void 0 !== Vd ? Vd : .55,
+         sunPosition: [null !== (rd = null === ed || void 0 === ed ? void 0 : ed[0]) && void 0 !== rd ? rd : IQ[0], null !== (Gd = null === ed || void 0 === ed ? void 0 : ed[1]) && void 0 !== Gd ? Gd : IQ[1], null !== (nd = null === ed || void 0 === ed ? void 0 : ed[2]) && void 0  … [truncated]
+         up: [null !== (Ld = null === Id || void 0 === Id ? void 0 : Id[0]) && void 0 !== Ld ? Ld : DQ[0], null !== (Pd = null === Id || void 0 === Id ? void 0 : Id[1]) && void 0 !== Pd ? Pd : DQ[1], null !== (zd = null === Id || void 0 === Id ? void 0 : Id[2]) && void 0 !== zd ?  … [truncated]
```

#### 1196. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9129` → after: `L9129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9129) · [Before (L9129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9129)

```diff
-           }(0, yr.Z)(Sr, {
+           }(0, wd._)(Od, {
```

#### 1197. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9133` → after: `L9133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9133) · [Before (L9133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9133)

```diff
-       }(rr, Sr, null !== (Ar = null !== (Vr = Qr.vertexTint) && void 0 !== Vr ? Vr : null === Zr || void 0 === Zr ? void 0 : Zr.vertexTint) && void 0 !== Ar ? Ar : [255, 255, 255])
+       }(dd, Od, null !== (cd = null !== (jd = md.vertexTint) && void 0 !== jd ? jd : null === Wd || void 0 === Wd ? void 0 : Wd.vertexTint) && void 0 !== cd ? cd : [255, 255, 255])
```

#### 1198. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9138` → after: `L9138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9138) · [Before (L9138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9138)

```diff
-       return null !== (Qr = null !== (Zr = rr.dithering) && void 0 !== Zr ? Zr : null === Sr || void 0 === Sr ? void 0 : Sr.dithering) && void 0 !== Qr && Qr
+       return null !== (md = null !== (Wd = dd.dithering) && void 0 !== Wd ? Wd : null === Od || void 0 === Od ? void 0 : Od.dithering) && void 0 !== md && md
```

#### 1199. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9140-L9141` → after: `L9140-L9141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9140-L9141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9140-L9141) · [Before (L9140-L9141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9140-L9141)

```diff
-     var Tx = Qr(38671);
-     const vx = Cr.y / 8,
+     var Jt = md(38723);
+     const Ut = nd.E / 8,
```

#### 1200. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9145` → after: `L9145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9145) · [Before (L9145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9145)

```diff
-         for (let Sr = 0; Sr <= Cr.y; Sr += vx) rr.push({
+         for (let Od = 0; Od <= nd.E; Od += Ut) dd.push({
```

#### 1201. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9147` → after: `L9147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9147) · [Before (L9147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9147)

```diff
-           isChunkBound: Sr % Cr.y === 0
+           isChunkBound: Od % nd.E === 0
```

#### 1202. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9154` → after: `L9154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9154) · [Before (L9154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9154)

```diff
-         this.gm = rr, this.rendererId = Sr, this.config = Qr, this.tornDown = !1, this.borderMesh = null, this.subdivMesh = null, this.borderMaterial = null, this.subdivMaterial = null, this.lastChunkI = NaN, this.lastChunkJ = NaN, this.lastChunkK = NaN, this.planeThickness = voi … [truncated]
+         this.zo = dd, this.rendererId = Od, this.config = md, this.tornDown = !1, this.borderMesh = null, this.subdivMesh = null, this.borderMaterial = null, this.subdivMaterial = null, this.lastChunkI = NaN, this.lastChunkJ = NaN, this.lastChunkK = NaN, this.planeThickness = voi … [truncated]
```

#### 1203. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9156` → after: `L9156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9156) · [Before (L9156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9156)

```diff
-         })), lx.registerRenderer(this.gm, this)
+         })), St.registerRenderer(this.zo, this)
```

#### 1204. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9159` → after: `L9159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9159) · [Before (L9159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9159)

```diff
-         this.tornDown || (this.tornDown = !0, this.disposeMeshes(), lx.unregisterRenderer(this.gm, this))
+         this.tornDown || (this.tornDown = !0, this.disposeMeshes(), St.unregisterRenderer(this.zo, this))
```

#### 1205. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9167` → after: `L9167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9167) · [Before (L9167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9167)

```diff
-         }, rr.on("lx", lx.tickHandler))
+         }, dd.on("Et", St.tickHandler))
```

#### 1206. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9170` → after: `L9170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9170) · [Before (L9170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9170)

```diff
-         delete lx.allRenderers[Sr.rendererId], lx.tickHandler && 0 === Object.keys(lx.allRenderers).length && (rr.off("lx", lx.tickHandler), lx.tickHandler = null)
+         delete St.allRenderers[Od.rendererId], St.tickHandler && 0 === Object.keys(St.allRenderers).length && (dd.off("Et", St.tickHandler), St.tickHandler = null)
```

#### 1207. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9181` → after: `L9181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9181) · [Before (L9181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9181)

```diff
-         const Zr = [(0, Cr.x)(rr), (0, Cr.x)(Sr), (0, Cr.x)(Qr)],
+         const Wd = [(0, nd.B)(dd), (0, nd.B)(Od), (0, nd.B)(md)],
```

#### 1208. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9189` → after: `L9189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9189) · [Before (L9189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9189)

```diff
-                     (Wr.isChunkBound && ar.isChunkBound ? Sr : Qr).push(...Zr(rr, qx(Wr.offset), qx(ar.offset)))
+                     (Fd.isChunkBound && Rd.isChunkBound ? Od : md).push(...Wd(dd, it(Fd.offset), it(Rd.offset)))
```

#### 1209. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9192` → after: `L9192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9192) · [Before (L9192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9192)

```diff
-         this.borderMaterial = this.createPlaneMaterial(`chunkBorderMat-${rr}-${Sr}-${Qr}`, this.config.borderColor), this.borderMesh = this.addPlanes("chunkBorders", Wr, this.borderMaterial, Zr), this.subdivMaterial = this.createPlaneMaterial(`chunkSubdivMat-${rr}-${Sr}-${Qr}`, t … [truncated]
+         this.borderMaterial = this.createPlaneMaterial(`chunkBorderMat-${dd}-${Od}-${md}`, this.config.borderColor), this.borderMesh = this.addPlanes("chunkBorders", Fd, this.borderMaterial, Wd), this.subdivMaterial = this.createPlaneMaterial(`chunkSubdivMat-${dd}-${Od}-${md}`, t … [truncated]
```

#### 1210. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9195-L9196` → after: `L9195-L9196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9195-L9196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9195-L9196) · [Before (L9195-L9196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9195-L9196)

```diff
-         const Wr = (0, nr.p)(this.gm.Ox, rr, function(rr) {
-           return (0, Tx.g)(rr.map((rr => {
+         const Fd = (0, pd.p)(this.zo.gt, dd, function(dd) {
+           return (0, Jt.f)(dd.map((dd => {
```

#### 1211. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9198` → after: `L9198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9198) · [Before (L9198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9198)

```diff
-             return [(0, Kr.h)({
+             return [(0, gd.j)({
```

#### 1212. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9204` → after: `L9204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9204) · [Before (L9204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9204)

```diff
-         return Wr.material = Qr, Wr.ut = !1, this.gm.Ox.Sh(Wr, !0, Zr), Wr
+         return Fd.material = md, Fd.my = !1, this.zo.gt.Fy(Fd, !0, Wd), Fd
```

#### 1213. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9208` → after: `L9208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9208) · [Before (L9208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9208)

```diff
-         return (0, cr.b)({
+         return (0, Id.d)({
```

#### 1214. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9210` → after: `L9210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9210) · [Before (L9210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9210)

```diff
-           Dt: this.gm.Ox.Dt,
+           MH: this.zo.gt.MH,
```

#### 1215. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9217` → after: `L9217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9217) · [Before (L9217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9217)

```diff
-             transparencyMode: Or.s.alphaBlend
+             transparencyMode: xd.r.alphaBlend
```

#### 1216. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9227` → after: `L9227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9227) · [Before (L9227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9227)

```diff
-     const Xx = Cr.y / 2,
+     const st = nd.E / 2,
```

#### 1217. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9230-L9231` → after: `L9230-L9231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9230-L9231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9230-L9231) · [Before (L9230-L9231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9230-L9231)

```diff
-         [rr, Cr.y, Sr, Xx, Qr, 0, 0],
-         [rr, Cr.y, Sr, Xx, Qr, Px, 0]
+         [dd, nd.E, Od, st, md, 0, 0],
+         [dd, nd.E, Od, st, md, ut, 0]
```

#### 1218. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9233-L9234` → after: `L9233-L9234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9233-L9234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9233-L9234) · [Before (L9233-L9234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9233-L9234)

```diff
-         [Cr.y, rr, Xx, Sr, Qr, 0, 0],
-         [Cr.y, rr, Xx, Sr, Qr, 0, Px]
+         [nd.E, dd, st, Od, md, 0, 0],
+         [nd.E, dd, st, Od, md, 0, ut]
```

#### 1219. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9236-L9237` → after: `L9236-L9237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9236-L9237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9236-L9237) · [Before (L9236-L9237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9236-L9237)

```diff
-         [rr, Cr.y, Qr, Sr, Xx, 0, Px],
-         [Cr.y, rr, Qr, Sr, Xx, Px, 0]
+         [dd, nd.E, md, Od, st, 0, ut],
+         [nd.E, dd, md, Od, st, ut, 0]
```

#### 1220. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9241` → after: `L9241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9241) · [Before (L9241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9241)

```diff
-       return 0 === rr ? -.01 : rr === Cr.y ? Cr.y + Ox : rr + Ox
+       return 0 === dd ? -.01 : dd === nd.E ? nd.E + xt : dd + xt
```

#### 1221. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9247` → after: `L9247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9247) · [Before (L9247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9247)

```diff
-         this.gm = rr, this.config = null, this.renderCallback = null, this.sampleX = new Float64Array(Rx), this.sampleZ = new Float64Array(Rx), this.sampleY = new Float64Array(Rx), this.sampleAirborne = new Uint8Array(Rx), this.worldOffset = [0, 0, 0], this.playerPos = [0, 0, 0], … [truncated]
+         this.zo = dd, this.config = null, this.renderCallback = null, this.sampleX = new Float64Array(At), this.sampleZ = new Float64Array(At), this.sampleY = new Float64Array(At), this.sampleAirborne = new Uint8Array(At), this.worldOffset = [0, 0, 0], this.playerPos = [0, 0, 0], … [truncated]
```

#### 1222. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9256` → after: `L9256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9256) · [Before (L9256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9256)

```diff
-         const Sr = af.d.subscribe("groundArrowPath", (rr => {
+         const Od = hh.e.subscribe("groundArrowPath", (dd => {
```

#### 1223. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9265` → after: `L9265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9265) · [Before (L9265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9265)

```diff
-         this.config = rr, this.renderer.setColour(rr.colour), this.renderCallback || (this.renderCallback = rr => this.onBeforeRender(rr), this.gm.on("beforeRender", this.renderCallback))
+         this.config = dd, this.renderer.setColour(dd.colour), this.renderCallback || (this.renderCallback = dd => this.onBeforeRender(dd), this.zo.on("beforeRender", this.renderCallback))
```

#### 1224. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9273` → after: `L9273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9273) · [Before (L9273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9273)

```diff
-         const rr = this.gm.YB.gJ(this.gm.fC);
+         const dd = this.zo.qE.gM(this.zo.YV);
```

#### 1225. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9275` → after: `L9275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9275) · [Before (L9275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9275)

```diff
-         Yr().copy(this.worldOffset, this.gm.um), Yr().add(this.playerPos, rr.lD, this.worldOffset);
+         Td().copy(this.worldOffset, this.zo.XN), Td().add(this.playerPos, dd.y_, this.worldOffset);
```

#### 1226. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9284` → after: `L9284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9284) · [Before (L9284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9284)

```diff
-         if (qf.endAtSolidFace && this.gm.qx.uF(Math.floor(Sr[0]), Math.floor(Sr[1]), Math.floor(Sr[2]))) {
+         if (rh.endAtSolidFace && this.zo.Bt.Wk(Math.floor(Od[0]), Math.floor(Od[1]), Math.floor(Od[2]))) {
```

#### 1227. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9331` → after: `L9331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9331) · [Before (L9331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9331)

```diff
-         return this.gm.qx.uF(rr, Sr, Qr) && !this.gm.qx.uF(rr, Sr + 1, Qr)
+         return this.zo.Bt.Wk(dd, Od, md) && !this.zo.Bt.Wk(dd, Od + 1, md)
```

#### 1228. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9334` → after: `L9334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9334) · [Before (L9334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9334)

```diff
-         this.renderCallback && (this.gm.off("beforeRender", this.renderCallback), this.renderCallback = null), this.renderer.dispose()
+         this.renderCallback && (this.zo.off("beforeRender", this.renderCallback), this.renderCallback = null), this.renderer.dispose()
```

#### 1229. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9337-L9338` → after: `L9337-L9338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9337-L9338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9337-L9338) · [Before (L9337-L9338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9337-L9338)

```diff
-     var Mx = Qr(38287),
-       Gx = Qr(39311);
+     var nt = md(38370),
+       Lt = md(39354);
```

#### 1230. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9341` → after: `L9341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9341) · [Before (L9341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9341)

```diff
-         this.gm = void 0, this.bloxd = void 0, this.bloxdSetBlockNoMulti = (rr, Sr, Qr, Zr, Wr) => {
+         this.zo = void 0, this.bloxd = void 0, this.bloxdSetBlockNoMulti = (dd, Od, md, Wd, Fd) => {
```

#### 1231. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9343` → after: `L9343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9343) · [Before (L9343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9343)

```diff
-         }, this.gm = rr, this.bloxd = Sr
+         }, this.zo = dd, this.bloxd = Od
```

#### 1232. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9346` → after: `L9346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9346) · [Before (L9346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9346)

```diff
-         if (!(Wr in Gx.g)) return console.error(`Called for non multiblock ${Wr}`), !1;
+         if (!(Fd in Lt.g)) return console.error(`Called for non multiblock ${Fd}`), !1;
```

#### 1233. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9354-L9355` → after: `L9354-L9355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9354-L9355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9354-L9355) · [Before (L9354-L9355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9354-L9355)

```diff
-           const Wr = this.bloxd.VY(Sr + jr, Qr + Ir, Zr + fr);
-           if (this.gm.pSr(Wr) || !this.bloxd.playerCanChangePos(rr, Sr + jr, Qr + Ir, Zr + fr, pr.j[ar].id)) return !1
+           const Fd = this.bloxd.mY(Od + Xd, md + Kd, Wd + hd);
+           if (this.zo.GOd(Fd) || !this.bloxd.playerCanChangePos(dd, Od + Xd, md + Kd, Wd + hd, Qd.i[Rd].id)) return !1
```

#### 1234. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9392` → after: `L9392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9392) · [Before (L9392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9392)

```diff
-               Nr = this.bloxd.VY(Wr, xr, mr);
+               Nd = this.bloxd.mY(Fd, td, od);
```

#### 1235. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9419` → after: `L9419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9419) · [Before (L9419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9419)

```diff
-         } = Gx.d[rr], fr = Sr - ar, Er = Qr - jr, pr = Zr - Ir, xr = this.bloxd.VY(fr, Er, pr);
+         } = Lt.d[dd], hd = Od - Rd, vd = md - Xd, Qd = Wd - Kd, td = this.bloxd.mY(hd, vd, Qd);
```

#### 1236. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9445-L9446` → after: `L9445-L9446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9445-L9446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9445-L9446) · [Before (L9445-L9446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9445-L9446)

```diff
-         const Ir = this.bloxd.VY(rr, Sr, Qr),
-           fr = null !== (Wr = this.getRestoredTop(rr, Sr, Qr, Ir, Zr, jr)) && void 0 !== Wr ? Wr : Zr;
+         const Kd = this.bloxd.mY(dd, Od, md),
+           hd = null !== (Fd = this.getRestoredTop(dd, Od, md, Kd, Wd, Xd)) && void 0 !== Fd ? Fd : Wd;
```

#### 1237. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9464` → after: `L9464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9464) · [Before (L9464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9464)

```diff
-             this.bloxd.VY(Zr, Er, pr) === rr && ar(Zr, Er, pr, 0, !0)
+             this.bloxd.mY(Wd, vd, Qd) === dd && Rd(Wd, vd, Qd, 0, !0)
```

#### 1238. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9484-L9487` → after: `L9484-L9487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9484-L9487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9484-L9487) · [Before (L9484-L9487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9484-L9487)

```diff
-             if (!this.bloxd.aJ(Zr, Nr, Ur)) continue;
-             const tr = this.bloxd.VY(Zr, Nr, Ur),
-               hr = !this.gm.Ex.uF(tr);
-             ar(Zr, Nr, Ur, pr.j[fr].id, hr)
+             if (!this.bloxd.Rk(Wd, Nd, qd)) continue;
+             const Hd = this.bloxd.mY(Wd, Nd, qd),
+               yd = !this.zo.Rt.Wk(Hd);
+             Rd(Wd, Nd, qd, Qd.i[hd].id, yd)
```

#### 1239. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9494-L9495` → after: `L9494-L9495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9494-L9495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9494-L9495) · [Before (L9494-L9495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9494-L9495)

```diff
-         const jr = null === (Wr = pr.j[Zr]) || void 0 === Wr ? void 0 : Wr.attachedTop;
-         return !!jr && (null === (ar = pr.j[this.bloxd.VY(rr, Sr, Qr)]) || void 0 === ar ? void 0 : ar.meta.rootId) === pr.j[jr].meta.rootId
+         const Xd = null === (Fd = Qd.i[Wd]) || void 0 === Fd ? void 0 : Fd.attachedTop;
+         return !!Xd && (null === (Rd = Qd.i[this.bloxd.mY(dd, Od, md)]) || void 0 === Rd ? void 0 : Rd.meta.rootId) === Qd.i[Xd].meta.rootId
```

#### 1240. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9499-L9504` → after: `L9499-L9504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9499-L9504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9499-L9504) · [Before (L9499-L9504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9499-L9504)

```diff
-         const Ir = pr.j[Wr],
-           fr = (null === Ir || void 0 === Ir ? void 0 : Ir.attachedTop) && pr.j[Ir.attachedTop],
-           Er = null === (jr = pr.j[Zr]) || void 0 === jr ? void 0 : jr.meta.rootId;
-         if (null === ar || !fr || Er === Ir.meta.rootId || Er === fr.meta.rootId || !this.bloxd.aJ(rr, Sr - 1, Qr)) return null;
-         const xr = pr.j[this.bloxd.VY(rr, Sr - 1, Qr)];
-         return (null === xr || void 0 === xr ? void 0 : xr.meta.rootId) === Ir.meta.rootId ? pr.j[xr.attachedTop].id : null
+         const Kd = Qd.i[Fd],
+           hd = (null === Kd || void 0 === Kd ? void 0 : Kd.attachedTop) && Qd.i[Kd.attachedTop],
+           vd = null === (Xd = Qd.i[Wd]) || void 0 === Xd ? void 0 : Xd.meta.rootId;
+         if (null === Rd || !hd || vd === Kd.meta.rootId || vd === hd.meta.rootId || !this.bloxd.Rk(dd, Od - 1, md)) return null;
+         const td = Qd.i[this.bloxd.mY(dd, Od - 1, md)];
+         return (null === td || void 0 === td ? void 0 : td.meta.rootId) === Kd.meta.rootId ? Qd.i[td.attachedTop].id : null
```

#### 1241. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9508-L9514` → after: `L9508-L9514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9508-L9514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9508-L9514) · [Before (L9508-L9514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9508-L9514)

```diff
-         const xr = null === (Ir = pr.j[Zr]) || void 0 === Ir ? void 0 : Ir.attachedTop,
-           mr = null === (fr = pr.j[Wr]) || void 0 === fr ? void 0 : fr.attachedTop;
-         if (!xr && !mr || !this.bloxd.aJ(rr, Sr + 1, Qr)) return;
-         const Nr = this.bloxd.VY(rr, Sr + 1, Qr),
-           Ur = !!xr && (null === (Er = pr.j[Nr]) || void 0 === Er ? void 0 : Er.meta.rootId) === pr.j[xr].meta.rootId,
-           tr = mr ? pr.j[mr].id : 0;
-         xr && mr && pr.j[Zr].meta.rootId === pr.j[Wr].meta.rootId ? Ur && Nr !== tr && ar(rr, Sr + 1, Qr, tr, !0) : !mr || !Ur && 0 !== Nr || null !== jr && !this.placerCanAddTop(jr, rr, Sr + 1, Qr, tr) ? Ur && ar(rr, Sr + 1, Qr, 0, !0) : ar(rr, Sr + 1, Qr, tr, !0)
+         const td = null === (Kd = Qd.i[Wd]) || void 0 === Kd ? void 0 : Kd.attachedTop,
+           od = null === (hd = Qd.i[Fd]) || void 0 === hd ? void 0 : hd.attachedTop;
+         if (!td && !od || !this.bloxd.Rk(dd, Od + 1, md)) return;
+         const Nd = this.bloxd.mY(dd, Od + 1, md),
+           qd = !!td && (null === (vd = Qd.i[Nd]) || void 0 === vd ? void 0 : vd.meta.rootId) === Qd.i[td].meta.rootId,
+           Hd = od ? Qd.i[od].id : 0;
+         td && od && Qd.i[Wd].meta.rootId === Qd.i[Fd].meta.rootId ? qd && Nd !== Hd && Rd(dd, Od + 1, md, Hd, !0) : !od || !qd && 0 !== Nd || null !== Xd && !this.placerCanAddTop(Xd, dd, Od + 1, md, Hd) ? qd && Rd(dd, Od + 1, md, 0, !0) : Rd(dd, Od + 1, md, Hd, !0)
```

#### 1242. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9520` → after: `L9520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9520) · [Before (L9520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9520)

```diff
-     var Ax = Qr(5838);
+     var zt = md(5778);
```

#### 1243. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9524` → after: `L9524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9524) · [Before (L9524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9524)

```diff
-       (null === rr || void 0 === rr ? void 0 : rr.chestStr) !== Cr.e || Object.isFrozen(rr) || (rr.chestStr = (0, Cr.J)(rr.chestStr))
+       (null === dd || void 0 === dd ? void 0 : dd.chestStr) !== nd.h || Object.isFrozen(dd) || (dd.chestStr = (0, nd.L)(dd.chestStr))
```

#### 1244. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9531` → after: `L9531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9531) · [Before (L9531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9531)

```diff
-         if (this.storage.get(rr, Sr, Qr) && console.error(new Error(`adding chunk x y z ${rr} ${Sr} ${Qr} to dataowner that already exists`).stack), 0 === Zr.length) return void this.storage.set(rr, Sr, Qr, Vx);
+         if (this.storage.get(dd, Od, md) && console.error(new Error(`adding chunk x y z ${dd} ${Od} ${md} to dataowner that already exists`).stack), 0 === Wd.length) return void this.storage.set(dd, Od, md, ct);
```

#### 1245. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9541-L9542` → after: `L9541-L9542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9541-L9542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9541-L9542) · [Before (L9541-L9542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9541-L9542)

```diff
-           const rr = (0, Cr.S)(ar),
-             Sr = null !== jr && void 0 !== jr ? jr : {
+           const dd = (0, nd.Q)(Rd),
+             Od = null !== Xd && void 0 !== Xd ? Xd : {
```

#### 1246. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9546` → after: `L9546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9546) · [Before (L9546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9546)

```diff
-           ix(Sr.persisted), Wr[`${rr[0]}|${rr[1]}|${rr[2]}`] = Sr
+           jt(Od.persisted), Fd[`${dd[0]}|${dd[1]}|${dd[2]}`] = Od
```

#### 1247. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9575` → after: `L9575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9575) · [Before (L9575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9575)

```diff
-           if ((0, Cr.L)(rr)) console.error("ChunkInfo block at local pos", jr, "was nullish:", rr);
+           if ((0, nd.O)(dd)) console.error("ChunkInfo block at local pos", Xd, "was nullish:", dd);
```

#### 1248. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9588` → after: `L9588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9588) · [Before (L9588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9588)

```diff
-           ar = [rr * Ur.i.hx, Sr * Ur.i.hx, Qr * Ur.i.hx];
+           Rd = [dd * qd.i.Qt, Od * qd.i.Qt, md * qd.i.Qt];
```

#### 1249. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9593` → after: `L9593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9593) · [Before (L9593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9593)

```diff
-             Wr = this.bloxd.VY(Qr[0], Qr[1], Qr[2]);
+             Fd = this.bloxd.mY(md[0], md[1], md[2]);
```

#### 1250. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9599-L9601` → after: `L9599-L9601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9599-L9601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9599-L9601) · [Before (L9599-L9601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9599-L9601)

```diff
-         const Zr = (0, Cr.U)(rr),
-           Wr = (0, Cr.U)(Sr),
-           ar = (0, Cr.U)(Qr),
+         const Wd = (0, nd.T)(dd),
+           Fd = (0, nd.T)(Od),
+           Rd = (0, nd.T)(md),
```

#### 1251. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9604` → after: `L9604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9604) · [Before (L9604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9604)

```diff
-         delete jr[`${(0,Cr.Y)(rr)}|${(0,Cr.Y)(Sr)}|${(0,Cr.Y)(Qr)}`]
+         delete Xd[`${(0,nd.W)(dd)}|${(0,nd.W)(Od)}|${(0,nd.W)(md)}`]
```

#### 1252. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9609` → after: `L9609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9609) · [Before (L9609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9609)

```diff
-         const ar = Ur.i.hx;
+         const Rd = qd.i.Qt;
```

#### 1253. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9624` → after: `L9624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9624) · [Before (L9624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9624)

```diff
-         return this.storage.get((0, Cr.U)(rr), (0, Cr.U)(Sr), (0, Cr.U)(Qr))[`${(0,Cr.Y)(rr)}|${(0,Cr.Y)(Sr)}|${(0,Cr.Y)(Qr)}`]
+         return this.storage.get((0, nd.T)(dd), (0, nd.T)(Od), (0, nd.T)(md))[`${(0,nd.W)(dd)}|${(0,nd.W)(Od)}|${(0,nd.W)(md)}`]
```

#### 1254. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9639-L9641` → after: `L9639-L9641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9639-L9641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9639-L9641) · [Before (L9639-L9641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9639-L9641)

```diff
-         const ar = (0, Cr.U)(rr),
-           jr = (0, Cr.U)(Sr),
-           Ir = (0, Cr.U)(Qr);
+         const Rd = (0, nd.T)(dd),
+           Xd = (0, nd.T)(Od),
+           Kd = (0, nd.T)(md);
```

#### 1255. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9644` → after: `L9644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9644) · [Before (L9644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9644)

```diff
-         const Er = `${(0,Cr.Y)(rr)}|${(0,Cr.Y)(Sr)}|${(0,Cr.Y)(Qr)}`,
+         const vd = `${(0,nd.W)(dd)}|${(0,nd.W)(Od)}|${(0,nd.W)(md)}`,
```

#### 1256. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9650` → after: `L9650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9650) · [Before (L9650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9650)

```diff
-         const ar = arguments.length >= 4 ? Zr : this.getBlockData(rr, Sr, Qr),
+         const Rd = arguments.length >= 4 ? Wd : this.getBlockData(dd, Od, md),
```

#### 1257. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9676-L9679` → after: `L9676-L9679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9676-L9679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9676-L9679) · [Before (L9676-L9679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9676-L9679)

```diff
-     var cx = Qr(38509),
-       Fx = Qr(40811),
-       ox = Qr(40815),
-       bx = Qr(39546),
+     var et = md(38573),
+       It = md(40839),
+       lt = md(40842),
+       Ct = md(39606),
```

#### 1258. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9686` → after: `L9686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9686) · [Before (L9686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9686)

```diff
-         this.bloxd = void 0, this.books = new Map, this.bloxd = rr, this.bloxd.isClient && this.onPlayerJoin(this.bloxd.gm.fC)
+         this.bloxd = void 0, this.books = new Map, this.bloxd = dd, this.bloxd.isClient && this.onPlayerJoin(this.bloxd.zo.YV)
```

#### 1259. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9693` → after: `L9693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9693) · [Before (L9693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9693)

```diff
-           base: Fx.d,
+           base: It.b,
```

#### 1260. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9702` → after: `L9702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9702) · [Before (L9702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9702)

```diff
-           Wr = (0, ox.c)(null !== Qr && void 0 !== Qr ? Qr : sx);
+           Fd = (0, lt.c)(null !== md && void 0 !== md ? md : Mt);
```

#### 1261. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9717` → after: `L9717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9717) · [Before (L9717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9717)

```diff
-         return void 0 !== Wr ? Wr : Object.hasOwn(Zr.base, Sr) ? Zr.base[Sr] : void 0
+         return void 0 !== Fd ? Fd : Object.hasOwn(Wd.base, Od) ? Wd.base[Od] : void 0
```

#### 1262. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9728` → after: `L9728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9728) · [Before (L9728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9728)

```diff
-           Sr(jr, null !== (ar = null === Wr || void 0 === Wr ? void 0 : Wr.get(jr)) && void 0 !== ar ? ar : Zr[jr])
+           Od(Xd, null !== (Rd = null === Fd || void 0 === Fd ? void 0 : Fd.get(Xd)) && void 0 !== Rd ? Rd : Wd[Xd])
```

#### 1263. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9736` → after: `L9736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9736) · [Before (L9736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9736)

```diff
-         return void 0 !== Zr && (Zr.base !== Fx.d || (null !== (Sr = null === (Qr = Zr.overrides) || void 0 === Qr ? void 0 : Qr.size) && void 0 !== Sr ? Sr : 0) > 0)
+         return void 0 !== Wd && (Wd.base !== It.b || (null !== (Od = null === (md = Wd.overrides) || void 0 === md ? void 0 : md.size) && void 0 !== Od ? Od : 0) > 0)
```

#### 1264. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9744` → after: `L9744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9744) · [Before (L9744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9744)

```diff
-           mI: Wr,
+           NK: Fd,
```

#### 1265. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9756` → after: `L9756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9756) · [Before (L9756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9756)

```diff
-               mI: Ir,
+               NK: Kd,
```

#### 1266. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9760` → after: `L9760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9760) · [Before (L9760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9760)

```diff
-               mI: Ir,
+               NK: Kd,
```

#### 1267. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9769` → after: `L9769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9769) · [Before (L9769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9769)

```diff
-         Array.isArray(Wr) ? ar = Wr : (ar = Dx, Dx[0] = Wr, Dx.length = 1);
+         Array.isArray(Fd) ? Rd = Fd : (Rd = kt, kt[0] = Fd, kt.length = 1);
```

#### 1268. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9827` → after: `L9827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9827) · [Before (L9827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9827)

```diff
-         if (!1 !== this.bloxd.Ex.metadatas[Qr].stackable) {
+         if (!1 !== this.bloxd.Rt.metadatas[md].stackable) {
```

#### 1269. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9837-L9838` → after: `L9837-L9838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9837-L9838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9837-L9838) · [Before (L9837-L9838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9837-L9838)

```diff
-             NI: 0,
-             bp: null,
+             qK: 0,
+             IQ: null,
```

#### 1270. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9851` → after: `L9851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9851) · [Before (L9851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9851)

```diff
-             bp: Nr,
+             IQ: Nd,
```

#### 1271. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9855-L9856` → after: `L9855-L9856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9855-L9856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9855-L9856) · [Before (L9855-L9856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9855-L9856)

```diff
-           NI: mr / Er,
-           bp: Nr,
+           qK: od / vd,
+           IQ: Nd,
```

#### 1272. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9886` → after: `L9886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9886) · [Before (L9886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9886)

```diff
-         if (!1 !== this.bloxd.Ex.metadatas[Sr].stackable) {
+         if (!1 !== this.bloxd.Rt.metadatas[Od].stackable) {
```

#### 1273. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9906` → after: `L9906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9906) · [Before (L9906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9906)

```diff
-           bp: ar,
+           IQ: Rd,
```

#### 1274. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9954-L9955` → after: `L9954-L9955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9954-L9955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9954-L9955) · [Before (L9954-L9955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9954-L9955)

```diff
-       const Qr = Fx.h[rr];
-       return Qr ? void 0 === Sr ? Qr : (Sr <= 0 && (Sr = 1), Qr.map((rr => {
+       const md = It.e[dd];
+       return md ? void 0 === Od ? md : (Od <= 0 && (Od = 1), md.map((dd => {
```

#### 1275. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9966-L9969` → after: `L9966-L9969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9966-L9969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9966-L9969) · [Before (L9966-L9969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9966-L9969)

```diff
-     var Sm = Qr(39975),
-       Qm = Qr(39980),
-       Zm = Qr(1287),
-       Wm = Qr(7424);
+     var Wo = md(40009),
+       Fo = md(40012),
+       Ro = md(1300),
+       Xo = md(7410);
```

#### 1276. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9973` → after: `L9973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9973) · [Before (L9973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9973)

```diff
-           ...cx.n
+           ...et.q
```

#### 1277. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9977-L9979` → after: `L9977-L9979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9977-L9979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9977-L9979) · [Before (L9977-L9979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9977-L9979)

```diff
-     var jm = Qr(39969),
-       Im = Qr(39135),
-       fm = Qr(35459);
+     var ho = md(40001),
+       vo = md(39160),
+       Qo = md(35541);
```

#### 1278. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9983` → after: `L9983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9983) · [Before (L9983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9983)

```diff
-         this.bloxd = rr, this.enchanter = void 0, Em ??= new Im.d(cx.n), this.enchanter = Em
+         this.bloxd = dd, this.enchanter = void 0, to ??= new vo.c(et.q), this.enchanter = to
```

#### 1279. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9986` → after: `L9986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9986) · [Before (L9986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9986)

```diff
-         return this.bloxd.isClient && console.assert(rr === this.bloxd.gm.fC || rr === this.bloxd.gm.WC, "eId in client getPossibleEnchantments must be local player"), this.enchanter.getPossibleEnchantmentsForItem(Sr)
+         return this.bloxd.isClient && console.assert(dd === this.bloxd.zo.YV || dd === this.bloxd.zo.bV, "eId in client getPossibleEnchantments must be local player"), this.enchanter.getPossibleEnchantmentsForItem(Od)
```

#### 1280. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9989-L9991` → after: `L9989-L9991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9989-L9991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9989-L9991) · [Before (L9989-L9991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9989-L9991)

```diff
-         if (this.bloxd.isClient && console.assert(rr === this.bloxd.gm.fC || rr === this.bloxd.gm.WC, "eId in client canUseEnchantingTable must be local player"), !this.bloxd.getClientPredictedOption(rr, "canCraft")) return !1;
-         if (!(0, fm.p)(Qr)) return !1;
-         const Zr = this.bloxd.YB.fQr(rr).getItemAtIdx(Sr);
+         if (this.bloxd.isClient && console.assert(dd === this.bloxd.zo.YV || dd === this.bloxd.zo.bV, "eId in client canUseEnchantingTable must be local player"), !this.bloxd.getClientPredictedOption(dd, "canCraft")) return !1;
+         if (!(0, Qo.m)(md)) return !1;
+         const Wd = this.bloxd.qE.Dmd(dd).getItemAtIdx(Od);
```

#### 1281. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9995` → after: `L9995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9995) · [Before (L9995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9995)

```diff
-         return (0, fm.p)(rr)
+         return (0, Qo.m)(dd)
```

#### 1282. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9998` → after: `L9998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L9998) · [Before (L9998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L9998)

```diff
-         return (0, fm.c)(rr, Sr)
+         return (0, Qo.b)(dd, Od)
```

#### 1283. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10001` → after: `L10001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10001) · [Before (L10001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10001)

```diff
-         return (0, fm.g)(rr)
+         return (0, Qo.e)(dd)
```

#### 1284. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10004-L10012` → after: `L10004-L10012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10004-L10012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10004-L10012) · [Before (L10004-L10012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10004-L10012)

```diff
-         return (0, fm.f)(rr, Sr)
-       }
-     }(0, pr.k)("Coal Ore"), (0, pr.k)("Iron Ore"), (0, pr.k)("Gold Ore"), (0, pr.k)("Diamond Ore"), (0, pr.k)("Moonstone Ore"), (0, pr.k)("Pure Coal Ore"), (0, pr.k)("Pure Iron Ore"), (0, pr.k)("Pure Gold Ore"), (0, pr.k)("Pure Diamond Ore"), (0, pr.k)("Pure Moonstone Ore"), (0,  … [truncated]
-     var xm = Qr(39157),
-       mm = Qr(38528),
-       Nm = Qr(39160);
-     new Set(Object.keys(Nm.d).map((rr => rr.toLowerCase())));
-     const Um = new Set(mm.g.map((function(rr) {
-       return `${rr}ByBlock`
+         return (0, Qo.c)(dd, Od)
+       }
+     }(0, Qd.j)("Coal Ore"), (0, Qd.j)("Iron Ore"), (0, Qd.j)("Gold Ore"), (0, Qd.j)("Diamond Ore"), (0, Qd.j)("Moonstone Ore"), (0, Qd.j)("Pure Coal Ore"), (0, Qd.j)("Pure Iron Ore"), (0, Qd.j)("Pure Gold Ore"), (0, Qd.j)("Pure Diamond Ore"), (0, Qd.j)("Pure Moonstone Ore"), (0,  … [truncated]
+     var No = md(39175),
+       qo = md(38594),
+       Ho = md(39180);
+     new Set(Object.keys(Ho.i).map((dd => dd.toLowerCase())));
+     const yo = new Set(qo.f.map((function(dd) {
+       return `${dd}ByBlock`
```

#### 1285. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10016` → after: `L10016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10016) · [Before (L10016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10016)

```diff
-       return void 0 === Sr ? rr : {
+       return void 0 === Od ? dd : {
```

#### 1286. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10037` → after: `L10037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10037) · [Before (L10037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10037)

```diff
-         const Zr = null !== (Qr = this.resolved) && void 0 !== Qr ? Qr : this.buildResolvedSettings(rr, Sr);
+         const Wd = null !== (md = this.resolved) && void 0 !== md ? md : this.buildResolvedSettings(dd, Od);
```

#### 1287. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10043` → after: `L10043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10043) · [Before (L10043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10043)

```diff
-         const Zr = null !== (Qr = this.blockLookups) && void 0 !== Qr ? Qr : this.buildBlockLookups(rr, Sr);
+         const Wd = null !== (md = this.blockLookups) && void 0 !== md ? md : this.buildBlockLookups(dd, Od);
```

#### 1288. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10050` → after: `L10050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10050) · [Before (L10050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10050)

```diff
-         const Qr = (0, xm.l)(rr, Sr),
+         const md = (0, No.i)(dd, Od),
```

#### 1289. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10072` → after: `L10072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10072) · [Before (L10072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10072)

```diff
-         const ar = (0, xm.l)(rr, Sr);
+         const Rd = (0, No.i)(dd, Od);
```

#### 1290. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10075` → after: `L10075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10075) · [Before (L10075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10075)

```diff
-           canAutoStep: void 0 === Zr ? Qr.canAutoStep : (0, xm.d)(tm(ar.canAutoStepByBlock, Zr))
+           canAutoStep: void 0 === Wd ? md.canAutoStep : (0, No.e)(bo(Rd.canAutoStepByBlock, Wd))
```

#### 1291. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10079` → after: `L10079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10079) · [Before (L10079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10079)

```diff
-     var zm = Qr(39683);
+     var po = md(39720);
```

#### 1292. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10083` → after: `L10083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10083) · [Before (L10083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10083)

```diff
-         this.wI = new WeakMap
+         this.jK = new WeakMap
```

#### 1293. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10086` → after: `L10086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10086) · [Before (L10086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10086)

```diff
-         return ar && (Zr > Sr || Wr > Qr) ? (this.wI.set(rr, {
+         return Rd && (Wd > Od || Fd > md) ? (this.jK.set(dd, {
```

#### 1294. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10092` → after: `L10092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10092) · [Before (L10092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10092)

```diff
-         }) : (this.wI.delete(rr), {
+         }) : (this.jK.delete(dd), {
```

#### 1295. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10098` → after: `L10098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10098) · [Before (L10098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10098)

```diff
-         return this.wI.get(rr)
+         return this.jK.get(dd)
```

#### 1296. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10101` → after: `L10101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10101) · [Before (L10101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10101)

```diff
-         this.wI.delete(rr)
+         this.jK.delete(dd)
```

#### 1297. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10104-L10105` → after: `L10104-L10105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10104-L10105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10104-L10105) · [Before (L10104-L10105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10104-L10105)

```diff
-     var em = Qr(5878),
-       Km = Qr(40818);
+     var wo = md(5819),
+       ao = md(40849);
```

#### 1298. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10108` → after: `L10108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10108) · [Before (L10108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10108)

```diff
-         this.isClient = Sr, this.callbacks = Qr, this.gm = void 0, this.YB = void 0, this.multiblockManager = void 0, this.blockDataOwner = void 0, this.craftingManager = void 0, this.enchantingManager = void 0, this.entityNames = {}, this.meshParticleSystems = {}, this.Ex = new  … [truncated]
+         this.isClient = Od, this.callbacks = md, this.zo = void 0, this.qE = void 0, this.multiblockManager = void 0, this.blockDataOwner = void 0, this.craftingManager = void 0, this.enchantingManager = void 0, this.entityNames = {}, this.meshParticleSystems = {}, this.Rt = new  … [truncated]
```

#### 1299. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10131` → after: `L10131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10131) · [Before (L10131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10131)

```diff
-         this.multiblockManager.fR(rr, Sr, Qr, Zr, Wr, ar)
+         this.multiblockManager.nS(dd, Od, md, Wd, Fd, Rd)
```

#### 1300. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10134` → after: `L10134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10134) · [Before (L10134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10134)

```diff
-         const ar = this.VY(rr, Sr, Qr);
+         const Rd = this.mY(dd, Od, md);
```

#### 1301. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10144` → after: `L10144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10144) · [Before (L10144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10144)

```diff
-         return this.isClient ? this.aJ(Sr, Qr, Zr) && this.posSatisfiesModifyConstraints(rr, Sr, Qr, Zr) && (!this.gm.Ex.uF(Wr) || this.gm.qx.GV.has(Wr) || !this.gm.YB.dSr(Sr, Qr, Zr, this.gm.Ex.RV(Wr), ar ? rr : null)) : this.aJ(Sr, Qr, Zr) && this.posSatisfiesModifyConstraints( … [truncated]
+         return this.isClient ? this.Rk(Od, md, Wd) && this.posSatisfiesModifyConstraints(dd, Od, md, Wd) && (!this.zo.Rt.Wk(Fd) || this.zo.Bt.WC.has(Fd) || !this.zo.qE.Bmd(Od, md, Wd, this.zo.Rt.mC(Fd), Rd ? dd : null)) : this.Rk(Od, md, Wd) && this.posSatisfiesModifyConstraints( … [truncated]
```

#### 1302. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10153` → after: `L10153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10153) · [Before (L10153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10153)

```diff
-         return 1 === Sr ? `Partially Full ${rr}` : 2 === Sr ? `Half Full ${rr}` : 3 === Sr ? `Nearly Full ${rr}` : 4 === Sr ? rr : "Bowl"
+         return 1 === Od ? `Partially Full ${dd}` : 2 === Od ? `Half Full ${dd}` : 3 === Od ? `Nearly Full ${dd}` : 4 === Od ? dd : "Bowl"
```

#### 1303. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10160-L10161` → after: `L10160-L10161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10160-L10161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10160-L10161) · [Before (L10160-L10161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10160-L10161)

```diff
-           if (this.Ex.metadatas[rr]) return this.Ex.metadatas[rr].id;
-           throw new Error(`Invalid block name. You sent ${rr}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files or those registered with the api`)
+           if (this.Rt.metadatas[dd]) return this.Rt.metadatas[dd].id;
+           throw new Error(`Invalid block name. You sent ${dd}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files or those registered with the api`)
```

#### 1304. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10166` → after: `L10166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10166) · [Before (L10166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10166)

```diff
-         return rr && rr !== em.e ? this.Ex.metadatas[rr].name : em.e
+         return dd && dd !== wo.e ? this.Rt.metadatas[dd].name : wo.e
```

#### 1305. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10169` → after: `L10169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10169) · [Before (L10169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10169)

```diff
-         const Sr = this.Ex.metadatas;
+         const Od = this.Rt.metadatas;
```

#### 1306. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10176-L10177` → after: `L10176-L10177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10176-L10177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10176-L10177) · [Before (L10176-L10177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10176-L10177)

```diff
-         if (!rr || rr === em.e) return em.h;
-         const Sr = this.Ex.metadatas[rr];
+         if (!dd || dd === wo.e) return wo.f;
+         const Od = this.Rt.metadatas[dd];
```

#### 1307. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10179-L10180` → after: `L10179-L10180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10179-L10180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10179-L10180) · [Before (L10179-L10180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10179-L10180)

```diff
-           if (this.isExecutingUserCode()) return void console.error(`No metadata for item: ${rr}`);
-           throw new Error(`Item ${rr} not found in registry`)
+           if (this.isExecutingUserCode()) return void console.error(`No metadata for item: ${dd}`);
+           throw new Error(`Item ${dd} not found in registry`)
```

#### 1308. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10185` → after: `L10185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10185) · [Before (L10185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10185)

```diff
-         if (Km.e.has(Qr) && (this.isClient || "Player" === this.getEntityType(rr))) {
+         if (ao.b.has(md) && (this.isClient || "Player" === this.getEntityType(dd))) {
```

#### 1309. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10187-L10188` → after: `L10187-L10188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10187-L10188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10187-L10188) · [Before (L10187-L10188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10187-L10188)

```diff
-             Wr = this.getClientPredictedOption(rr, (0, Km.f)(Zr, Qr));
-           if (!(0, Cr.L)(Wr)) return Wr
+             Fd = this.getClientPredictedOption(dd, (0, ao.d)(Wd, md));
+           if (!(0, nd.O)(Fd)) return Fd
```

#### 1310. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10194-L10195` → after: `L10194-L10195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10194-L10195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10194-L10195) · [Before (L10194-L10195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10194-L10195)

```diff
-         const Zr = null === (Qr = this.Ex.metadatas[rr]) || void 0 === Qr ? void 0 : Qr[Sr];
-         return (0, Cr.L)(Zr) && "displayName" === Sr ? this.getItemName(rr) : Zr
+         const Wd = null === (md = this.Rt.metadatas[dd]) || void 0 === md ? void 0 : md[Od];
+         return (0, nd.O)(Wd) && "displayName" === Od ? this.getItemName(dd) : Wd
```

#### 1311. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10205` → after: `L10205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10205) · [Before (L10205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10205)

```diff
-         return Er ? Math.max(0, null !== (ar = this.getItemStat(rr, Er, "attackRange")) && void 0 !== ar ? ar : jr) : jr
+         return vd ? Math.max(0, null !== (Rd = this.getItemStat(dd, vd, "attackRange")) && void 0 !== Rd ? Rd : Xd) : Xd
```

#### 1312. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10209` → after: `L10209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10209) · [Before (L10209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10209)

```diff
-         return null !== (Sr = this.getClientPredictedOption(rr, "blockReach")) && void 0 !== Sr ? Sr : Ur.i.hz
+         return null !== (Od = this.getClientPredictedOption(dd, "blockReach")) && void 0 !== Od ? Od : qd.i.Tb
```

#### 1313. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10215-L10220` → after: `L10215-L10220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10215-L10220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10215-L10220) · [Before (L10215-L10220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10215-L10220)

```diff
-           const jr = null === (Zr = cx.n[null === Qr || void 0 === Qr ? void 0 : Qr.name]) || void 0 === Zr ? void 0 : Zr.harvests,
-             fr = null === (Wr = cx.n[null === Qr || void 0 === Qr ? void 0 : Qr.name]) || void 0 === Wr ? void 0 : Wr.level;
-           return !(0, Ir.wc)({
-             blockHarvestType: this.Ex.metadatas[Sr].harvestType,
-             blockHarvestLevel: this.Ex.metadatas[Sr].harvestLevel,
-             harvestLevel: null !== (ar = this.getItemStat(rr, Sr, "harvestLevel")) && void 0 !== ar ? ar : 0,
+           const Xd = null === (Wd = et.q[null === md || void 0 === md ? void 0 : md.name]) || void 0 === Wd ? void 0 : Wd.harvests,
+             hd = null === (Fd = et.q[null === md || void 0 === md ? void 0 : md.name]) || void 0 === Fd ? void 0 : Fd.level;
+           return !(0, Kd.uc)({
+             blockHarvestType: this.Rt.metadatas[Od].harvestType,
+             blockHarvestLevel: this.Rt.metadatas[Od].harvestLevel,
+             harvestLevel: null !== (Rd = this.getItemStat(dd, Od, "harvestLevel")) && void 0 !== Rd ? Rd : 0,
```

#### 1314. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10228` → after: `L10228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10228) · [Before (L10228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10228)

```diff
-         return (0, Ir.Rd)(this.getItemStat(rr, Sr, "drops"), this.getItemStat(rr, Sr, "specialToolDrop"), (() => this.getMetaInfo(Sr).rootName), Qr)
+         return (0, Kd._d)(this.getItemStat(dd, Od, "drops"), this.getItemStat(dd, Od, "specialToolDrop"), (() => this.getMetaInfo(Od).rootName), md)
```

#### 1315. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10232` → after: `L10232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10232) · [Before (L10232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10232)

```diff
-         return Sr && null !== (Qr = null === (Zr = pr.j[rr]) || void 0 === Zr ? void 0 : Zr.Op) && void 0 !== Qr ? Qr : 1
+         return Od && null !== (md = null === (Wd = Qd.i[dd]) || void 0 === Wd ? void 0 : Wd.UQ) && void 0 !== md ? md : 1
```

#### 1316. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10243` → after: `L10243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10243) · [Before (L10243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10243)

```diff
-         return this.gm.YB.TSr(rr, "inventory") ? this.gm.YB.fQr(rr).getItemAtSelectedSlot() : null
+         return this.zo.qE.MOd(dd, "inventory") ? this.zo.qE.Dmd(dd).getItemAtSelectedSlot() : null
```

#### 1317. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10246` → after: `L10246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10246) · [Before (L10246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10246)

```diff
-         return (0, KS.e)(this.gm, rr, !1).length >= 1
+         return (0, aO.g)(this.zo, dd, !1).length >= 1
```

#### 1318. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10250` → after: `L10250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10250) · [Before (L10250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10250)

```diff
-         const Zr = this.Ex.metadatas;
+         const Wd = this.Rt.metadatas;
```

#### 1319. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10256` → after: `L10256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10256) · [Before (L10256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10256)

```diff
-             !(0, Cr.L)(Sr) && (void 0 === Wr || Sr > Wr) && (Wr = Sr);
+             !(0, nd.O)(Od) && (void 0 === Fd || Od > Fd) && (Fd = Od);
```

#### 1320. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10262` → after: `L10262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10262) · [Before (L10262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10262)

```diff
-             void 0 === Qr && (Qr = (0, Km.f)(this.getItemName(Ir), "stoodOnSpeedMultiplier"), this.stoodOnOptions[Ir] = Qr), void 0 === jr && (jr = this.getPlayerReader(rr));
+             void 0 === md && (md = (0, ao.d)(this.getItemName(Kd), "stoodOnSpeedMultiplier"), this.stoodOnOptions[Kd] = md), void 0 === Xd && (Xd = this.getPlayerReader(dd));
```

#### 1321. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10265` → after: `L10265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10265) · [Before (L10265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10265)

```diff
-           }(0, Cr.L)(Sr) && (this.stoodOnKnown[Ir] || (this.stoodOnDefaults[Ir] = this.getDefaultItemStat(Ir, "stoodOnSpeedMultiplier"), this.stoodOnKnown[Ir] = !0), Sr = this.stoodOnDefaults[Ir]), !(0, Cr.L)(Sr) && (void 0 === Wr || Sr > Wr) && (Wr = Sr)
+           }(0, nd.O)(Od) && (this.stoodOnKnown[Kd] || (this.stoodOnDefaults[Kd] = this.getDefaultItemStat(Kd, "stoodOnSpeedMultiplier"), this.stoodOnKnown[Kd] = !0), Od = this.stoodOnDefaults[Kd]), !(0, nd.O)(Od) && (void 0 === Fd || Od > Fd) && (Fd = Od)
```

#### 1322. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10267` → after: `L10267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10267) · [Before (L10267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10267)

```diff
-         return null !== (Qr = Wr) && void 0 !== Qr ? Qr : 1
+         return null !== (md = Fd) && void 0 !== md ? md : 1
```

#### 1323. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10270` → after: `L10270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10270) · [Before (L10270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10270)

```diff
-         const Sr = this.Ex.metadatas,
+         const Od = this.Rt.metadatas,
```

#### 1324. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10276` → after: `L10276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10276) · [Before (L10276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10276)

```diff
-           (0, Cr.L)(rr) || (Qr.push(Wr), Zr.push(Number(rr)))
+           (0, nd.O)(dd) || (md.push(Fd), Wd.push(Number(dd)))
```

#### 1325. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10284` → after: `L10284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10284) · [Before (L10284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10284)

```diff
-         const Zr = this.Ex.metadatas;
+         const Wd = this.Rt.metadatas;
```

#### 1326. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10289` → after: `L10289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10289) · [Before (L10289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10289)

```diff
-             const Sr = (0, Km.f)(this.getItemName(rr), "stoodOnSpeedMultiplier");
+             const Od = (0, ao.d)(this.getItemName(dd), "stoodOnSpeedMultiplier");
```

#### 1327. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10300` → after: `L10300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10300) · [Before (L10300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10300)

```diff
-           if (!(0, Cr.L)(Qr))
+           if (!(0, nd.O)(md))
```

#### 1328. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10311` → after: `L10311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10311) · [Before (L10311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10311)

```diff
-         return 1 === Sr ? Zr = .5 * Qr : 2 === Sr ? Zr = .75 * Qr : Sr >= this.maxBunnyHops && (Zr = Qr), 1 + Zr
+         return 1 === Od ? Wd = .5 * md : 2 === Od ? Wd = .75 * md : Od >= this.maxBunnyHops && (Wd = md), 1 + Wd
```

#### 1329. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10328` → after: `L10328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10328) · [Before (L10328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10328)

```diff
-         return this.gm.pickBlock(Sr, Qr, this.getBlockReach(rr))
+         return this.zo.pickBlock(Od, md, this.getBlockReach(dd))
```

#### 1330. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10347-L10349` → after: `L10347-L10349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10347-L10349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10347-L10349) · [Before (L10347-L10349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10347-L10349)

```diff
-         } = null !== (Zr = null === (Wr = rr.attributes.customAttributes) || void 0 === Wr ? void 0 : Wr._k) && void 0 !== Zr ? Zr : {};
-         rr.attributes.customAttributes = Object.assign(null !== (ar = rr.attributes.customAttributes) && void 0 !== ar ? ar : {}, {
-           author: this.getEntityName(this.isClient ? this.gm.fC : Qr),
+         } = null !== (Wd = null === (Fd = dd.attributes.customAttributes) || void 0 === Fd ? void 0 : Fd._k) && void 0 !== Wd ? Wd : {};
+         dd.attributes.customAttributes = Object.assign(null !== (Rd = dd.attributes.customAttributes) && void 0 !== Rd ? Rd : {}, {
+           author: this.getEntityName(this.isClient ? this.zo.YV : md),
```

#### 1331. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10351` → after: `L10351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10351) · [Before (L10351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10351)

```diff
-           _k: void 0 === (null === Ir || void 0 === Ir ? void 0 : Ir.text) ? Er : {
+           _k: void 0 === (null === Kd || void 0 === Kd ? void 0 : Kd.text) ? vd : {
```

#### 1332. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10358` → after: `L10358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10358) · [Before (L10358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10358)

```diff
-         const ar = pr.j[Zr].name,
+         const Rd = Qd.i[Wd].name,
```

#### 1333. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10360` → after: `L10360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10360) · [Before (L10360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10360)

```diff
-         ar !== jr && this.fR(rr, Sr, Qr, (0, pr.k)(jr))
+         Rd !== Xd && this.nS(dd, Od, md, (0, Qd.j)(Xd))
```

#### 1334. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10364-L10365` → after: `L10364-L10365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10364-L10365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10364-L10365) · [Before (L10364-L10365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10364-L10365)

```diff
-         const Zr = pr.j[rr].name.split("|");
-         return `${Zr[0]}|meta|${null!==(Qr=Zr[2])&&void 0!==Qr?Qr:"rot1"}|${Sr>0?"full":"empty"}`
+         const Wd = Qd.i[dd].name.split("|");
+         return `${Wd[0]}|meta|${null!==(md=Wd[2])&&void 0!==md?md:"rot1"}|${Od>0?"full":"empty"}`
```

#### 1335. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10368` → after: `L10368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10368) · [Before (L10368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10368)

```diff
-         const Qr = pr.j[rr].name,
+         const md = Qd.i[dd].name,
```

#### 1336. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10372` → after: `L10372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10372) · [Before (L10372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10372)

```diff
-           return `${0===Sr?"Empty Bookshelf":"Bookshelf"}|meta|${null!==(Wr=Zr[2])&&void 0!==Wr?Wr:"rot1"}|books${Sr}`
+           return `${0===Od?"Empty Bookshelf":"Bookshelf"}|meta|${null!==(Fd=Wd[2])&&void 0!==Fd?Fd:"rot1"}|books${Od}`
```

#### 1337. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10379` → after: `L10379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10379) · [Before (L10379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10379)

```diff
-         const Wr = this.YB.fQr(rr).getItems();
+         const Fd = this.qE.Dmd(dd).getItems();
```

#### 1338. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10382` → after: `L10382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10382) · [Before (L10382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10382)

```diff
-           if (Ir.r.includes(null === rr || void 0 === rr ? void 0 : rr.name)) {
+           if (Kd.k.includes(null === dd || void 0 === dd ? void 0 : dd.name)) {
```

#### 1339. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10400` → after: `L10400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10400) · [Before (L10400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10400)

```diff
-         if (this.YB.TSr(rr, "itemState")) return "Item";
+         if (this.qE.MOd(dd, "itemState")) return "Item";
```

#### 1340. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10404` → after: `L10404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10404) · [Before (L10404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10404)

```diff
-           return -1 === rr ? Sr : Sr.slice(0, rr)
+           return -1 === dd ? Od : Od.slice(0, dd)
```

#### 1341. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10406` → after: `L10406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10406) · [Before (L10406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10406)

```diff
-         return console.error(new Error(`Tried to get entity type for entity ${rr} but it doesn't exist in networked state`).stack), null
+         return console.error(new Error(`Tried to get entity type for entity ${dd} but it doesn't exist in networked state`).stack), null
```

#### 1342. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10412` → after: `L10412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10412) · [Before (L10412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10412)

```diff
-           jr = Yr().copy(this.tempVec2, Ur.n[ar.pose]);
+           Xd = Td().copy(this.tempVec2, qd.q[Rd.pose]);
```

#### 1343. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10416-L10417` → after: `L10416-L10417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10416-L10417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10416-L10417) · [Before (L10416-L10417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10416-L10417)

```diff
-         if (Sr.type === Wm.n.DEFAULT) {
-           const Sr = (0, Sm.d)(this.qD(rr), this.getLifeformType(rr));
+         if (Od.type === Xo.q.DEFAULT) {
+           const Od = (0, Wo.h)(this.T_(dd), this.getLifeformType(dd));
```

#### 1344. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10422` → after: `L10422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10422) · [Before (L10422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10422)

```diff
-         Zr && (Er += Math.max(Math.abs(Zr[0]), Math.abs(Zr[2])), pr += Zr[1]), (Er > Qm.g || pr > Qm.d) && ((Sr.type !== Wm.n.DEFAULT || Zr) && this.onCollisionBoxCapped(), Er = Math.min(Er, Qm.g), pr = Math.min(pr, Qm.d)), this.updatePositionAndPhysicsImpl(rr, Sr, Qr, null !== Z … [truncated]
+         Wd && (vd += Math.max(Math.abs(Wd[0]), Math.abs(Wd[2])), Qd += Wd[1]), (vd > Fo.h || Qd > Fo.d) && ((Od.type !== Xo.q.DEFAULT || Wd) && this.onCollisionBoxCapped(), vd = Math.min(vd, Fo.h), Qd = Math.min(Qd, Fo.d)), this.updatePositionAndPhysicsImpl(dd, Od, md, null !== W … [truncated]
```

#### 1345. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10425-L10426` → after: `L10425-L10426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10425-L10426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10425-L10426) · [Before (L10425-L10426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10425-L10426)

```diff
-         const ar = this.gm.YB.gJ(rr),
-           jr = null === Qr && !(0, dr.z)(Sr.type),
+         const Rd = this.zo.qE.gM(dd),
+           Xd = null === md && !(0, Md.v)(Od.type),
```

#### 1346. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10428` → after: `L10428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10428) · [Before (L10428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10428)

```diff
-         this.gm.YB.AQr(rr, Ir.width, Ir.height, Ir.width)
+         this.zo.qE.aWd(dd, Kd.width, Kd.height, Kd.width)
```

#### 1347. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10431` → after: `L10431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10431) · [Before (L10431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10431)

```diff
-         const Sr = this.gm.YB.gJ(rr),
+         const Od = this.zo.qE.gM(dd),
```

#### 1348. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10437-L10438` → after: `L10437-L10438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10437-L10438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10437-L10438) · [Before (L10437-L10438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10437-L10438)

```diff
-         const Zr = this.gm.YB.gJ(rr),
-           Wr = null !== (Qr = Zr.um) && void 0 !== Qr ? Qr : this.gm.um;
+         const Wd = this.zo.qE.gM(dd),
+           Fd = null !== (md = Wd.XN) && void 0 !== md ? md : this.zo.XN;
```

#### 1349. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10454` → after: `L10454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10454) · [Before (L10454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10454)

```diff
-                 const ar = !0 === Zr ? Ym : Zr;
+                 const Rd = !0 === Wd ? Yo : Wd;
```

#### 1350. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10459` → after: `L10459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10459) · [Before (L10459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10459)

```diff
-         }(Zr.GSr, Wr, Sr.width, Sr.height, ((Sr, Qr, Zr) => this.aJ(Sr, Qr, Zr) ? this.getBlockCollisionForPlayer(rr, Sr, Qr, Zr, this.getClientPredictedBlock(rr, Sr, Qr, Zr)) : null))
+         }(Wd.Nmd, Fd, Od.width, Od.height, ((Od, md, Wd) => this.Rk(Od, md, Wd) ? this.getBlockCollisionForPlayer(dd, Od, md, Wd, this.getClientPredictedBlock(dd, Od, md, Wd)) : null))
```

#### 1351. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10462` → after: `L10462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10462) · [Before (L10462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10462)

```diff
-         const Sr = this.gm.YB.gJ(rr),
+         const Od = this.zo.qE.gM(dd),
```

#### 1352. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10464` → after: `L10464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10464) · [Before (L10464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10464)

```diff
-         void 0 !== Qr && (this.playerBodyGrowth.clear(Sr), this.gm.YB.AQr(rr, Qr.width, Qr.height, Qr.width))
+         void 0 !== md && (this.playerBodyGrowth.clear(Od), this.zo.qE.aWd(dd, md.width, md.height, md.width))
```

#### 1353. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10468` → after: `L10468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10468) · [Before (L10468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10468)

```diff
-         return null !== (Sr = null === (Qr = this.vehicleSettingOverridesByEId.get(rr)) || void 0 === Qr ? void 0 : Qr.getOverrides()) && void 0 !== Sr ? Sr : null
+         return null !== (Od = null === (md = this.vehicleSettingOverridesByEId.get(dd)) || void 0 === md ? void 0 : md.getOverrides()) && void 0 !== Od ? Od : null
```

#### 1354. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10489` → after: `L10489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10489) · [Before (L10489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10489)

```diff
-         return this.YB.ASr(rr).physicsState
+         return this.qE.Hmd(dd).physicsState
```

#### 1355. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10495` → after: `L10495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10495) · [Before (L10495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10495)

```diff
-           this.updatePositionAndPhysics(Sr, Qr, !1, null !== rr && void 0 !== rr ? rr : void 0, !0)
+           this.updatePositionAndPhysics(Od, md, !1, null !== dd && void 0 !== dd ? dd : void 0, !0)
```

#### 1356. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10501` → after: `L10501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10501) · [Before (L10501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10501)

```diff
-         return void 0 === Zr ? (0, xm.l)(Sr.type, Sr.tier) : Zr.getResolvedSettings(Sr.type, Sr.tier)
+         return void 0 === Wd ? (0, No.i)(Od.type, Od.tier) : Wd.getResolvedSettings(Od.type, Od.tier)
```

#### 1357. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10511-L10512` → after: `L10511-L10512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10511-L10512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10511-L10512) · [Before (L10511-L10512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10511-L10512)

```diff
-           YB: Qr
-         } = this.gm, Zr = Qr.getState(rr, Qr.names.Px);
+           qE: md
+         } = this.zo, Wd = md.getState(dd, md.names.Ut);
```

#### 1358. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10516-L10518` → after: `L10516-L10518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10516-L10518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10516-L10518) · [Before (L10516-L10518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10516-L10518)

```diff
-         const Qr = (0, dr.b)(rr);
-         if (null === Qr) return void console.error(`useConsumableVehicle called with non-consumable-vehicle item "${rr}"`);
-         const Zr = this.gm.YB.cV(null !== Sr && void 0 !== Sr ? Sr : this.gm.fC),
+         const md = (0, Md.e)(dd);
+         if (null === md) return void console.error(`useConsumableVehicle called with non-consumable-vehicle item "${dd}"`);
+         const Wd = this.zo.qE.pC(null !== Od && void 0 !== Od ? Od : this.zo.YV),
```

#### 1359. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10522-L10523` → after: `L10522-L10523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10522-L10523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10522-L10523) · [Before (L10522-L10523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10522-L10523)

```diff
-           } = (0, xm.l)(Wr.type, Wr.tier);
-         Zr.Lh[1] = 0, Zr.applyImpulse([0, ar, 0]), this.useConsumableVehicleImpl(Sr, rr, Qr)
+           } = (0, No.i)(Fd.type, Fd.tier);
+         Wd.Gy[1] = 0, Wd.applyImpulse([0, Rd, 0]), this.useConsumableVehicleImpl(Od, dd, md)
```

#### 1360. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10526` → after: `L10526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10526) · [Before (L10526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10526)

```diff
-         const Zr = this.gm.YB.cV(rr),
+         const Wd = this.zo.qE.pC(dd),
```

#### 1361. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10536` → after: `L10536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10536) · [Before (L10536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10536)

```diff
-           ar = this.isClient ? Wr : Math.max(0, Wr - Ur.i.gliderFuelServerLeewayMs);
+           Rd = this.isClient ? Fd : Math.max(0, Fd - qd.i.gliderFuelServerLeewayMs);
```

#### 1362. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10540` → after: `L10540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10540) · [Before (L10540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10540)

```diff
-         (0, zm.e)(this.gm, rr, Sr, Qr)
+         (0, po.i)(this.zo, dd, Od, md)
```

#### 1363. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10544` → after: `L10544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10544) · [Before (L10544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10544)

```diff
-         for (const Qr of this.gm.YB.YM(this.gm.YB.names.pB)) Qr.nU === rr && Sr.push(Qr.XM);
+         for (const md of this.zo.qE.vG(this.zo.qE.names.XE)) md.xq === dd && Od.push(md.QG);
```

#### 1364. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10551` → after: `L10551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10551) · [Before (L10551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10551)

```diff
-           const [Wr, ar, jr] = Ir.pos, fr = Zr.get(Wr, ar, jr), [Er, pr, xr] = [rr * Ur.i.hx, Sr * Ur.i.hx, Qr * Ur.i.hx];
+           const [Fd, Rd, Xd] = Kd.pos, hd = Wd.get(Fd, Rd, Xd), [vd, Qd, td] = [dd * qd.i.Qt, Od * qd.i.Qt, md * qd.i.Qt];
```

#### 1365. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10566` → after: `L10566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10566) · [Before (L10566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10566)

```diff
-         null === Qr && (console.error(new Error(`No lifeform type found for lifeformId: ${rr}, defaulting to player eye height`).stack), Qr = "Player");
+         null === md && (console.error(new Error(`No lifeform type found for lifeformId: ${dd}, defaulting to player eye height`).stack), md = "Player");
```

#### 1366. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10568-L10569` → after: `L10568-L10569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10568-L10569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10568-L10569) · [Before (L10568-L10569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10568-L10569)

```diff
-           Wr = null !== (Sr = null === Zr || void 0 === Zr ? void 0 : Zr[1]) && void 0 !== Sr ? Sr : 0,
-           ar = this.gm.YB.jQr(rr);
+           Fd = null !== (Od = null === Wd || void 0 === Wd ? void 0 : Wd[1]) && void 0 !== Od ? Od : 0,
+           Rd = this.zo.qE.Pmd(dd);
```

#### 1367. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10574` → after: `L10574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10574) · [Before (L10574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10574)

```diff
-         } = (0, jm.c)(Qr), fr = Wr + Ir * this.qD(rr) * jr;
+         } = (0, ho.e)(md), hd = Fd + Kd * this.T_(dd) * Xd;
```

#### 1368. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10578-L10579` → after: `L10578-L10579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10578-L10579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10578-L10579) · [Before (L10578-L10579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10578-L10579)

```diff
-         const Sr = this.gm.YB.gJ(rr);
-         if (this.gm.YB.ASr(rr).movementType !== Wm.k.GLIDING) {
+         const Od = this.zo.qE.gM(dd);
+         if (this.zo.qE.Hmd(dd).movementType !== Xo.n.GLIDING) {
```

#### 1369. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10603-L10604` → after: `L10603-L10604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10603-L10604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10603-L10604) · [Before (L10603-L10604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10603-L10604)

```diff
-       sSr(rr, Sr) {
-         return Yr().subtract(null !== Sr && void 0 !== Sr ? Sr : Yr().create(), rr, this.gm.um)
+       Smd(dd, Od) {
+         return Td().subtract(null !== Od && void 0 !== Od ? Od : Td().create(), dd, this.zo.XN)
```

#### 1370. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10607` → after: `L10607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10607) · [Before (L10607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10607)

```diff
-         return Yr().add(null !== Sr && void 0 !== Sr ? Sr : Yr().create(), rr, this.gm.um)
+         return Td().add(null !== Od && void 0 !== Od ? Od : Td().create(), dd, this.zo.XN)
```

#### 1371. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10617` → after: `L10617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10617) · [Before (L10617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10617)

```diff
-         this.aJ(rr, Sr, Qr) && (null === (Wr = (ar = this.callbacks).justBeforeBlockAdded) || void 0 === Wr || Wr.call(ar, rr, Sr, Qr, Zr), "Bookshelf" === this.getMetaInfo(Zr).rootName && void 0 === (null === (jr = this.blockDataOwner.getBlockData(rr, Sr, Qr)) || void 0 === jr | … [truncated]
+         this.Rk(dd, Od, md) && (null === (Fd = (Rd = this.callbacks).justBeforeBlockAdded) || void 0 === Fd || Fd.call(Rd, dd, Od, md, Wd), "Bookshelf" === this.getMetaInfo(Wd).rootName && void 0 === (null === (Xd = this.blockDataOwner.getBlockData(dd, Od, md)) || void 0 === Xd | … [truncated]
```

#### 1372. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10628` → after: `L10628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10628) · [Before (L10628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10628)

```diff
-         const Zr = this.gm.YB.ASr(rr);
+         const Wd = this.zo.qE.Hmd(dd);
```

#### 1373. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10630-L10631` → after: `L10630-L10631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10630-L10631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10630-L10631) · [Before (L10630-L10631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10630-L10631)

```diff
-         const Wr = this.gm.YB.cV(rr);
-         Wr.Lh[0] = 0, Wr.Lh[2] = 0, Qr && (Wr.Lh[1] > 0 && (Wr.Lh[1] = 0), Wr.KV[1] > 0 && (Wr.KV[1] = 0), this.gm.YB.jQr(rr).hitInPrevTick = !0);
+         const Fd = this.zo.qE.pC(dd);
+         Fd.Gy[0] = 0, Fd.Gy[2] = 0, md && (Fd.Gy[1] > 0 && (Fd.Gy[1] = 0), Fd.mI[1] > 0 && (Fd.mI[1] = 0), this.zo.qE.Pmd(dd).hitInPrevTick = !0);
```

#### 1374. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10637` → after: `L10637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10637) · [Before (L10637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10637)

```diff
-       fQr(rr) {
+       Dmd(dd) {
```

#### 1375. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10639` → after: `L10639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10639) · [Before (L10639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10639)

```diff
-         return null === (Sr = this.gm.YB.IQr(rr)) || void 0 === Sr ? void 0 : Sr.inventory
+         return null === (Od = this.zo.qE.zmd(dd)) || void 0 === Od ? void 0 : Od.inventory
```

#### 1376. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10653-L10654` → after: `L10653-L10654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10653-L10654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10653-L10654) · [Before (L10653-L10654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10653-L10654)

```diff
-               const Er = this.VY(Ir[0], Ir[1], Ir[2]);
-               this.gm.Ex.uF(Er) && (Zr = fr, Wr = Er)
+               const vd = this.mY(Kd[0], Kd[1], Kd[2]);
+               this.zo.Rt.Wk(vd) && (Wd = hd, Fd = vd)
```

#### 1377. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10659` → after: `L10659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10659) · [Before (L10659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10659)

```diff
-         return (0, Ir.Jd)(this.getPlayerRanks(rr), Sr)
+         return (0, Kd.Qd)(this.getPlayerRanks(dd), Od)
```

#### 1378. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10662` → after: `L10662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10662) · [Before (L10662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10662)

```diff
-         return (0, Ir.Ld)(this.getPlayerRanks(rr), Sr)
+         return (0, Kd.Rd)(this.getPlayerRanks(dd), Od)
```

#### 1379. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10665-L10667` → after: `L10665-L10667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10665-L10667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10665-L10667) · [Before (L10665-L10667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10665-L10667)

```diff
-         const Ir = null !== Zr && void 0 !== Zr ? Zr : this.VY(rr, Sr, Qr),
-           fr = this.gm.Ex.XN(Ir);
-         return (0, OZ.f)(rr, Sr, Qr, Ir, fr, Wr, ar, jr)
+         const Kd = null !== Wd && void 0 !== Wd ? Wd : this.mY(dd, Od, md),
+           hd = this.zo.Rt.GN(Kd);
+         return (0, SW.i)(dd, Od, md, Kd, hd, Fd, Rd, Xd)
```

#### 1380. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10670-L10671` → after: `L10670-L10671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10670-L10671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10670-L10671) · [Before (L10670-L10671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10670-L10671)

```diff
-         switch ((0, BS.hb)(Sr, Zr), (0, BS.hb)(Sr, Wr), Qr) {
-           case Zm.t.CAN_WALK_THROUGH:
+         switch ((0, JO.db)(Od, Wd), (0, JO.db)(Od, Fd), md) {
+           case Ro.l.CAN_WALK_THROUGH:
```

#### 1381. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10674` → after: `L10674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10674) · [Before (L10674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10674)

```diff
-           case Zm.t.CANT_WALK_THROUGH:
+           case Ro.l.CANT_WALK_THROUGH:
```

#### 1382. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10677` → after: `L10677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10677) · [Before (L10677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10677)

```diff
-           case Zm.t.DEFAULT_WALK_THROUGH:
+           case Ro.l.DEFAULT_WALK_THROUGH:
```

#### 1383. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10685-L10687` → after: `L10685-L10687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10685-L10687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10685-L10687) · [Before (L10685-L10687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10685-L10687)

```diff
-           jr = pr.j[Wr];
-         const Ir = pr.j[this.VY(Sr, Qr - 1, Zr)];
-         !(0, Ax.y)(jr) && (0, Ax.y)(Ir) && (ar = [Sr, Qr - 1, Zr], jr = Ir);
+           Xd = Qd.i[Fd];
+         const Kd = Qd.i[this.mY(Od, md - 1, Wd)];
+         !(0, zt.s)(Xd) && (0, zt.s)(Kd) && (Rd = [Od, md - 1, Wd], Xd = Kd);
```

#### 1384. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10692` → after: `L10692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10692) · [Before (L10692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10692)

```diff
-         } = jr.meta, [mr, , Nr] = this.getEntityPos(rr), Ur = xr ? Er : (0, Ax.p)(Er, mr - (ar[0] + .5), Nr - (ar[2] + .5));
+         } = Xd.meta, [od, , Nd] = this.getEntityPos(dd), qd = td ? vd : (0, zt.o)(vd, od - (Rd[0] + .5), Nd - (Rd[2] + .5));
```

#### 1385. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10695` → after: `L10695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10695) · [Before (L10695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10695)

```diff
-           toRootId: (0, pr.k)((0, Ax.k)(fr, Ur, !xr)),
+           toRootId: (0, Qd.j)((0, zt.i)(hd, qd, !td)),
```

#### 1386. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10700-L10701` → after: `L10700-L10701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10700-L10701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10700-L10701) · [Before (L10700-L10701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10700-L10701)

```diff
-         if ((0, Ax.z)(pr.j[Wr])) return this.parseSwapFenceGateArgs(rr, Sr, Qr, Zr, Wr);
-         const ar = pr.j[Wr].name.split("|"),
+         if ((0, zt.w)(Qd.i[Fd])) return this.parseSwapFenceGateArgs(dd, Od, md, Wd, Fd);
+         const Rd = Qd.i[Fd].name.split("|"),
```

#### 1387. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10721` → after: `L10721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10721) · [Before (L10721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10721)

```diff
-           toRootId: (0, pr.k)(mr),
+           toRootId: (0, Qd.j)(od),
```

#### 1388. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10726` → after: `L10726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10726) · [Before (L10726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10726)

```diff
-     var Bm = Qr(39715);
+     var Jo = md(39750);
```

#### 1389. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10740` → after: `L10740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10740) · [Before (L10740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10740)

```diff
-         this.changedCells.set(`${rr},${Sr},${Qr}`, [rr, Sr, Qr]), this.redrawQueued || (this.redrawQueued = !0, queueMicrotask((() => {
+         this.changedCells.set(`${dd},${Od},${md}`, [dd, Od, md]), this.redrawQueued || (this.redrawQueued = !0, queueMicrotask((() => {
```

#### 1390. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10745` → after: `L10745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10745) · [Before (L10745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10745)

```diff
-         const Zr = `${rr},${Sr},${Qr}`,
+         const Wd = `${dd},${Od},${md}`,
```

#### 1391. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10754` → after: `L10754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10754) · [Before (L10754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10754)

```diff
-           }] of this.drawnText)(0, Cr.ab)(jr).join() === Zr && (this.drawnText.delete(ar), this.changed(...Ir))
+           }] of this.drawnText)(0, nd.Y)(Xd).join() === Wd && (this.drawnText.delete(Rd), this.changed(...Kd))
```

#### 1392. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10774` → after: `L10774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10774) · [Before (L10774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10774)

```diff
-           const Qr = (0, Bm.b)(rr, Sr, jr[0], jr[1], jr[2]);
+           const md = (0, Jo.e)(dd, Od, Xd[0], Xd[1], Xd[2]);
```

#### 1393. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10777` → after: `L10777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10777) · [Before (L10777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10777)

```diff
-           if ((0, Bm.f)(Zr)) {
+           if ((0, Jo.g)(Wd)) {
```

#### 1394. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10782` → after: `L10782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10782) · [Before (L10782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10782)

```diff
-             this.bloxd.client.meshCreator.addNoticeboardText(Qr.rect, rr.text, null !== (ar = rr.textSize) && void 0 !== ar ? ar : 0), this.drawnText.set(Qr.rect.anchor.join(), {
+             this.bloxd.client.meshCreator.addNoticeboardText(md.rect, dd.text, null !== (Rd = dd.textSize) && void 0 !== Rd ? Rd : 0), this.drawnText.set(md.rect.anchor.join(), {
```

#### 1395. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10790-L10791` → after: `L10790-L10791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10790-L10791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10790-L10791) · [Before (L10790-L10791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10790-L10791)

```diff
-         const Zr = this.bloxd.VY(...rr);
-         if (!(0, Bm.g)(Zr) || Sr.has(rr.join())) return;
+         const Wd = this.bloxd.mY(...dd);
+         if (!(0, Jo.k)(Wd) || Od.has(dd.join())) return;
```

#### 1396. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10795` → after: `L10795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10795) · [Before (L10795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10795)

```diff
-         } = pr.j[Zr].meta, Ir = ar.A[jr], fr = [rr];
+         } = Qd.i[Wd].meta, Kd = Rd.A[Xd], hd = [dd];
```

#### 1397. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10798` → after: `L10798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10798) · [Before (L10798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10798)

```diff
-         for (; fr.length > 0 && Qr.length - Er < Bm.h;) {
+         for (; hd.length > 0 && md.length - vd < Jo.n;) {
```

#### 1398. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10806` → after: `L10806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10806) · [Before (L10806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10806)

```diff
-             if (!this.bloxd.aJ(...Ir)) {
+             if (!this.bloxd.Rk(...Kd)) {
```

#### 1399. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10810` → after: `L10810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10810) · [Before (L10810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10810)

```diff
-             const mr = null === (xr = pr.j[this.bloxd.VY(...Ir)]) || void 0 === xr ? void 0 : xr.meta;
+             const od = null === (td = Qd.i[this.bloxd.mY(...Kd)]) || void 0 === td ? void 0 : td.meta;
```

#### 1400. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10817-L10818` → after: `L10817-L10818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10817-L10818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10817-L10818) · [Before (L10817-L10818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10817-L10818)

```diff
-         const Zr = (0, Cr.ab)(rr).join(),
-           Wr = null !== (Qr = this.waitingOnChunk.get(Zr)) && void 0 !== Qr ? Qr : new Map;
+         const Wd = (0, nd.Y)(dd).join(),
+           Fd = null !== (md = this.waitingOnChunk.get(Wd)) && void 0 !== md ? md : new Map;
```

#### 1401. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10822-L10828` → after: `L10822-L10828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10822-L10828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10822-L10828) · [Before (L10822-L10828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10822-L10828)

```diff
-     var Lm = Qr(40585),
-       lm = Qr(37851),
-       Xm = Qr(40494),
-       Pm = Qr(1321),
-       Hm = Qr(2093),
-       qm = Qr(38280),
-       Rm = Qr(40808);
+     var Bo = md(40577),
+       So = md(37942),
+       so = md(40498),
+       uo = md(1322),
+       Vo = md(2094),
+       io = md(38367),
+       Ao = md(40831);
```

#### 1402. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10838` → after: `L10838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10838) · [Before (L10838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10838)

```diff
-             (0, Xm.hidingMeshesChunkAdded)(this.gm, rr, Sr, Qr), this.client.gameRecorder.onChunkAdded(rr, Sr, Qr, Zr), this.noticeboardTextRenderer.chunkAdded(rr, Sr, Qr)
+             (0, so.hidingMeshesChunkAdded)(this.zo, dd, Od, md), this.client.gameRecorder.onChunkAdded(dd, Od, md, Wd), this.noticeboardTextRenderer.chunkAdded(dd, Od, md)
```

#### 1403. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10841` → after: `L10841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10841) · [Before (L10841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10841)

```diff
-             "Board" === this.getMetaInfo(Zr).rootName ? this.client.meshCreator.addBoard(rr, Sr, Qr, Zr) : (0, Bm.g)(Zr) && this.noticeboardTextRenderer.changed(rr, Sr, Qr), 0 === Zr ? hS.c.removeIfUnconfirmed(rr, Sr, Qr) : hS.c.removeOnceBlockLanded(rr, Sr, Qr)
+             "Board" === this.getMetaInfo(Wd).rootName ? this.client.meshCreator.addBoard(dd, Od, md, Wd) : (0, Jo.k)(Wd) && this.noticeboardTextRenderer.changed(dd, Od, md), 0 === Wd ? TO.c.removeIfUnconfirmed(dd, Od, md) : TO.c.removeOnceBlockLanded(dd, Od, md)
```

#### 1404. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10844-L10845` → after: `L10844-L10845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10844-L10845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10844-L10845) · [Before (L10844-L10845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10844-L10845)

```diff
-             hr.i.Jp("EffectUpdate", {
-               ua: rr,
+             yd.j.lQ("EffectUpdate", {
+               MR: dd,
```

#### 1405. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10854` → after: `L10854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10854) · [Before (L10854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10854)

```diff
-             gm || (gm = !0, hr.i.Jp("showBottomMessage", Rm.c))
+             ro || (ro = !0, yd.j.lQ("showBottomMessage", Ao.e))
```

#### 1406. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10856` → after: `L10856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10856) · [Before (L10856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10856)

```diff
-         }), this.gm = rr, this.client = Sr, this.hideNameSeedSub = null, this.noticeboardTextRenderer = new Om(this), this.recentChunkEdits = new Lm.h, this.applyingServerBlocks = !1, this.riddenVehicleEId = null, this.appliedPositionOffset = null, this.hideNameSeedSub = hr.i.sub … [truncated]
+         }), this.zo = dd, this.client = Od, this.hideNameSeedSub = null, this.noticeboardTextRenderer = new xo(this), this.recentChunkEdits = new Bo.h, this.applyingServerBlocks = !1, this.riddenVehicleEId = null, this.appliedPositionOffset = null, this.hideNameSeedSub = yd.j.sub … [truncated]
```

#### 1407. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10863-L10864` → after: `L10863-L10864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10863-L10864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10863-L10864) · [Before (L10863-L10864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10863-L10864)

```diff
-           this.hideNameSeedSub && (hr.i.unsubscribe(this.hideNameSeedSub), this.hideNameSeedSub = null), Hm.b.clear()
-         })), (0, qm.e)(rm), (0, tr.g)((rr => {
+           this.hideNameSeedSub && (yd.j.unsubscribe(this.hideNameSeedSub), this.hideNameSeedSub = null), Vo.c.clear()
+         })), (0, io.e)(mo), (0, Hd.h)((dd => {
```

#### 1408. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10866-L10867` → after: `L10866-L10867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10866-L10867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10866-L10867) · [Before (L10866-L10867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10866-L10867)

```diff
-           const Qr = cx.n[rr];
-           return null !== (Sr = null === Qr || void 0 === Qr ? void 0 : Qr.itemTexture) && void 0 !== Sr ? Sr : null === Qr || void 0 === Qr ? void 0 : Qr.textureInfo
+           const md = et.q[dd];
+           return null !== (Od = null === md || void 0 === md ? void 0 : md.itemTexture) && void 0 !== Od ? Od : null === md || void 0 === md ? void 0 : md.textureInfo
```

#### 1409. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10871` → after: `L10871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10871) · [Before (L10871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10871)

```diff
-         if ((0, Bm.g)(rr)) return !0;
+         if ((0, Jo.k)(dd)) return !0;
```

#### 1410. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10879-L10880` → after: `L10879-L10880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10879-L10880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10879-L10880) · [Before (L10879-L10880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10879-L10880)

```diff
-         const ar = this.VY(rr, Sr, Qr);
-         super.setBlockNoMulti(rr, Sr, Qr, Zr, Wr), ((0, Bm.g)(ar) || (0, Bm.g)(Zr)) && this.noticeboardTextRenderer.changed(rr, Sr, Qr)
+         const Rd = this.mY(dd, Od, md);
+         super.setBlockNoMulti(dd, Od, md, Wd, Fd), ((0, Jo.k)(Rd) || (0, Jo.k)(Wd)) && this.noticeboardTextRenderer.changed(dd, Od, md)
```

#### 1411. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10883` → after: `L10883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10883) · [Before (L10883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10883)

```diff
-         this.aJ(rr, Sr, Qr) && (this.gm.fR(Wr, rr, Sr, Qr), this.client.gameRecorder.onBlockPlaced(rr, Sr, Qr, Zr, Wr), this.applyingServerBlocks || this.recentChunkEdits.noteEdit(rr, Sr, Qr))
+         this.Rk(dd, Od, md) && (this.zo.nS(Fd, dd, Od, md), this.client.gameRecorder.onBlockPlaced(dd, Od, md, Wd, Fd), this.applyingServerBlocks || this.recentChunkEdits.noteEdit(dd, Od, md))
```

#### 1412. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10897` → after: `L10897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10897) · [Before (L10897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10897)

```diff
-         return br.h.itemsClient[rr]
+         return Zd.g.itemsClient[dd]
```

#### 1413. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10905-L10908` → after: `L10905-L10908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10905-L10908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10905-L10908) · [Before (L10905-L10908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10905-L10908)

```diff
-         const pr = this.gm.YB.cV(rr);
-         if (pr.sj = ar.sj, pr.fluidDrag = ar.fluidDrag, pr.fluidDragHoriz = ar.fluidDragHorizontal, pr.fluidDragVert = ar.fluidDragVertical, pr.gravityMultiplier = ar.gravityMultiplier, pr.mV = ar.canAutoStep, Wr && this.gm.YB.jQr(rr).setPose(ar.pose, jr), null === (Er = this.gm. … [truncated]
-           const rr = this.gm.YB.ASr(this.gm.fC);
-           rr ? rr.physicsState = Sr : console.error("No movement component found for player entity")
+         const Qd = this.zo.qE.pC(dd);
+         if (Qd.fX = Rd.fX, Qd.fluidDrag = Rd.fluidDrag, Qd.fluidDragHoriz = Rd.fluidDragHorizontal, Qd.fluidDragVert = Rd.fluidDragVertical, Qd.gravityMultiplier = Rd.gravityMultiplier, Qd.zD = Rd.canAutoStep, Fd && this.zo.qE.Pmd(dd).setPose(Rd.pose, Xd), null === (vd = this.zo. … [truncated]
+           const dd = this.zo.qE.Hmd(this.zo.YV);
+           dd ? dd.physicsState = Od : console.error("No movement component found for player entity")
```

#### 1414. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10913` → after: `L10913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10913) · [Before (L10913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10913)

```diff
-           duration: null !== (xr = ar.effect.duration) && void 0 !== xr ? xr : null,
+           duration: null !== (td = Rd.effect.duration) && void 0 !== td ? td : null,
```

#### 1415. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10917` → after: `L10917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10917) · [Before (L10917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10917)

```diff
-         for (const Nr of (0, xm.p)()) {
+         for (const Nd of (0, No.j)()) {
```

#### 1416. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10919` → after: `L10919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L10919) · [Before (L10919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L10919)

```diff
-           const Sr = (0, xm.l)(Nr, null).effect;
+           const Od = (0, No.i)(Nd, null).effect;
```
