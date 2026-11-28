# Changed — Bundle Modifications Report (Part 140 / 154)

- **Updated at**: `2026-11-28T13:51 JST`
- **Part**: `140 / 154` (**411** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 139](part-139.md) · [Part 141 →](part-141.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (fl4vv.bd3c59ce → yteou.5361c997 · continued)

- **File**: `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (159 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af)

#### 44. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L668` → after: `L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L668) · [Before (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L668)

```diff
-         rr > (null !== (Qr = null === (Zr = this.manifest.still) || void 0 === Zr ? void 0 : Zr.atMs) && void 0 !== Qr ? Qr : -1 / 0) && (this.manifest.still = {
+         dd > (null !== (md = null === (Wd = this.manifest.still) || void 0 === Wd ? void 0 : Wd.atMs) && void 0 !== md ? md : -1 / 0) && (this.manifest.still = {
```

#### 45. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L689` → after: `L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L689) · [Before (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L689)

```diff
-           joinedAtMs: Math.round((0, Jr.e)()),
+           joinedAtMs: Math.round((0, kd.b)()),
```

#### 46. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L707-L709` → after: `L707-L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L707-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L707-L709) · [Before (L707-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L707-L709)

```diff
-         const ar = (0, br.j)(Wr.furthestStep, rr.furthestStep),
-           jr = Math.max(null !== (Sr = Wr.unboundKeyPresses) && void 0 !== Sr ? Sr : 0, null !== (Qr = rr.unboundKeyPresses) && void 0 !== Qr ? Qr : 0);
-         return (ar !== Wr.furthestStep || jr !== (null !== (Zr = Wr.unboundKeyPresses) && void 0 !== Zr ? Zr : 0)) && (void 0 !== ar && (Wr.furthestStep = ar), jr > 0 && (Wr.unboundKeyPresses = jr), !0)
+         const Rd = (0, Zd.k)(Fd.furthestStep, dd.furthestStep),
+           Xd = Math.max(null !== (Od = Fd.unboundKeyPresses) && void 0 !== Od ? Od : 0, null !== (md = dd.unboundKeyPresses) && void 0 !== md ? md : 0);
+         return (Rd !== Fd.furthestStep || Xd !== (null !== (Wd = Fd.unboundKeyPresses) && void 0 !== Wd ? Wd : 0)) && (void 0 !== Rd && (Fd.furthestStep = Rd), Xd > 0 && (Fd.unboundKeyPresses = Xd), !0)
```

#### 47. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L713` → after: `L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L713) · [Before (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L713)

```diff
-         rr && null === rr.leftAtMs && (rr.leftAtMs = Math.round((0, Jr.e)()))
+         dd && null === dd.leftAtMs && (dd.leftAtMs = Math.round((0, kd.b)()))
```

#### 48. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L724` → after: `L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L724) · [Before (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L724)

```diff
-         if (this.sending) return void(this.queuedSend = SS(null !== (Sr = this.queuedSend) && void 0 !== Sr ? Sr : [], rr));
+         if (this.sending) return void(this.queuedSend = WO(null !== (Od = this.queuedSend) && void 0 !== Od ? Od : [], dd));
```

#### 49. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L737` → after: `L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L737) · [Before (L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L737)

```diff
-           of null !== (Sr = this.prepareSend(rr)) && void 0 !== Sr ? Sr : []) {
+           of null !== (Od = this.prepareSend(dd)) && void 0 !== Od ? Od : []) {
```

#### 50. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L739` → after: `L739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L739) · [Before (L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L739)

```diff
-           Vr.g.sendBeacon(sr(), JSON.stringify(Qr)) || (0, Dr.e)(sr(), Qr)
+           jd.c.sendBeacon(dO(), JSON.stringify(md)) || (0, fd.d)(dO(), md)
```

#### 51. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L748` → after: `L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L748) · [Before (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L748)

```diff
-           const rr = await (0, Dr.e)(sr(), Sr);
+           const dd = await (0, fd.d)(dO(), Od);
```

#### 52. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L769` → after: `L769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L769) · [Before (L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L769)

```diff
-         this.manifest.endedAtMs = Math.round((0, Jr.e)());
+         this.manifest.endedAtMs = Math.round((0, kd.b)());
```

#### 53. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L870-L871` → after: `L870-L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L870-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L870-L871) · [Before (L870-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L870-L871)

```diff
-     var QS = Qr(41385),
-       ZS = Qr(5459);
+     var FO = md(41381),
+       RO = md(5375);
```

#### 54. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L893` → after: `L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L893) · [Before (L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L893)

```diff
-           lateUploadUntilMs: Sr.expiresAtMs + QS.c,
+           lateUploadUntilMs: Od.expiresAtMs + FO.e,
```

#### 55. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L897` → after: `L897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L897) · [Before (L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L897)

```diff
-         }, null === (Wr = navigator.locks) || void 0 === Wr || Wr.request((0, ZS.w)(Sr.recordingId), (() => new Promise((() => {})))), this.putRecording()
+         }, null === (Fd = navigator.locks) || void 0 === Fd || Fd.request((0, RO.s)(Od.recordingId), (() => new Promise((() => {})))), this.putRecording()
```

#### 56. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L951` → after: `L951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L951) · [Before (L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L951)

```diff
-         this.record.nextDomSequence = Math.max(null !== (Wr = this.record.nextDomSequence) && void 0 !== Wr ? Wr : 0, rr + 1), this.setMarker(), this.journal.queueDom(this.snapshot(), {
+         this.record.nextDomSequence = Math.max(null !== (Fd = this.record.nextDomSequence) && void 0 !== Fd ? Fd : 0, dd + 1), this.setMarker(), this.journal.queueDom(this.snapshot(), {
```

#### 57. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L979` → after: `L979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L979) · [Before (L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L979)

```diff
-         Hr.j.setItem(ZS.n, !0)
+         Vd.k.setItem(RO.l, !0)
```

#### 58. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1043` → after: `L1043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1043) · [Before (L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1043)

```diff
-     var IS = Qr(37500),
+     var vO = md(37635),
```

#### 59. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1047` → after: `L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1047) · [Before (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1047)

```diff
-       return fS()('/*! For license information please see sessionReplayVideo.worker.32b3983d.worker.js.LICENSE.txt */\n(()=>{var rr={15:()=>{}},Sr={};function Qr(Zr){var Wr=Sr[Zr];if(void 0!==Wr)return Wr.exports;var ar=Sr[Zr]={exports:{}};return rr[Zr](ar,ar.exports,Qr),ar.expor … [truncated]
+       return QO()('/*! For license information please see sessionReplayVideo.worker.a5cacc48.worker.js.LICENSE.txt */\n(()=>{var dd={13:()=>{}},Od={};function md(Wd){var Fd=Od[Wd];if(void 0!==Fd)return Fd.exports;var Rd=Od[Wd]={exports:{}};return dd[Wd](Rd,Rd.exports,md),Rd.expor … [truncated]
```

#### 60. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1102` → after: `L1102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1102) · [Before (L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1102)

```diff
-         this.requester = "requestFrame" in Zr ? Zr : this.stream, this.video.muted = !0, this.video.playsInline = !0, this.video.srcObject = this.stream, this.video.play().catch(Qr), this.video.requestVideoFrameCallback(this.onVideoFrame)
+         this.requester = "requestFrame" in Wd ? Wd : this.stream, this.video.muted = !0, this.video.playsInline = !0, this.video.srcObject = this.stream, this.video.play().catch(md), this.video.requestVideoFrameCallback(this.onVideoFrame)
```

#### 61. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1130` → after: `L1130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1130) · [Before (L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1130)

```diff
-             this.stream === Sr && (this.stop(), this.onUnavailable(`the canvas capture stream didn't play: ${rr instanceof Error?rr.message:String(rr)}`))
+             this.stream === Od && (this.stop(), this.onUnavailable(`the canvas capture stream didn't play: ${dd instanceof Error?dd.message:String(dd)}`))
```

#### 62. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1155` → after: `L1155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1155) · [Before (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1155)

```diff
-           IS: {
+           NO: {
```

#### 63. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1187` → after: `L1187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1187) · [Before (L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1187)

```diff
-             const Zr = Sr.width * Sr.height < rr.width * rr.height ? Sr : rr;
+             const Wd = Od.width * Od.height < dd.width * dd.height ? Od : dd;
```

#### 64. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1205` → after: `L1205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1205) · [Before (L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1205)

```diff
-           }(0 === Qr.width ? Sr.IS : Qr, Sr.IS, this.grab.maxMacroblocks);
+           }(0 === md.width ? Od.NO : md, Od.NO, this.grab.maxMacroblocks);
```

#### 65. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1240` → after: `L1240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1240) · [Before (L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1240)

```diff
-           IS: Sr.IS,
+           NO: Od.NO,
```

#### 66. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1255` → after: `L1255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1255) · [Before (L1255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1255)

```diff
-         !(rr instanceof DOMException && "InvalidStateError" === rr.name) && ++this.unrecoverableGrabFailures >= 30 && (this.stop(), this.onUnavailable(`canvas grabs keep failing: ${rr instanceof Error?rr.message:String(rr)}`))
+         !(dd instanceof DOMException && "InvalidStateError" === dd.name) && ++this.unrecoverableGrabFailures >= 30 && (this.stop(), this.onUnavailable(`canvas grabs keep failing: ${dd instanceof Error?dd.message:String(dd)}`))
```

#### 67. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1268` → after: `L1268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1268) · [Before (L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1268)

```diff
-     var hS = Qr(1364);
+     var TO = md(1361);
```

#### 68. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1280` → after: `L1280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1280) · [Before (L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1280)

```diff
-         const rr = (0, hS.U)().gameRender();
+         const dd = (0, TO.V)().gameRender();
```

#### 69. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1394` → after: `L1394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1394) · [Before (L1394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1394)

```diff
-             console.warn(`Session replay part joiner failed on video segment ${Sr.sequence}; uploading it straight to storage.`, rr), rr instanceof eS || (this.downUntilMs = this.options.nowMs() + nS), this.handBack(Sr, rr instanceof eS ? rr.reason : "unreachable")
+             console.warn(`Session replay part joiner failed on video segment ${Od.sequence}; uploading it straight to storage.`, dd), dd instanceof wO || (this.downUntilMs = this.options.nowMs() + gO), this.handBack(Od, dd instanceof wO ? dd.reason : "unreachable")
```

#### 70. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1419` → after: `L1419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1419) · [Before (L1419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1419)

```diff
-             if (void 0 === Qr) throw new eS("missing", `the joiner asked for part ${Sr} of ${rr.parts.length}`);
+             if (void 0 === md) throw new wO("missing", `the joiner asked for part ${Od} of ${dd.parts.length}`);
```

#### 71. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1445` → after: `L1445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1445) · [Before (L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1445)

```diff
-           return new eS("refused", `refused: ${rr.reason}`)
+           return new wO("refused", `refused: ${dd.reason}`)
```

#### 72. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1448` → after: `L1448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1448) · [Before (L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1448)

```diff
-         return new eS(Sr, `answered ${rr.outcome}`)
+         return new wO(Od, `answered ${dd.outcome}`)
```

#### 73. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1464` → after: `L1464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1464) · [Before (L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1464)

```diff
-     const yS = Vr.d;
+     const EO = jd.b;
```

#### 74. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1503` → after: `L1503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1503) · [Before (L1503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1503)

```diff
-         if ((null === Sr || void 0 === Sr ? void 0 : Sr.sequence) === rr) return this.telemetry = null, TS(Sr.wI, this.nowMs()) ? Sr.wI.target : void 0
+         if ((null === Od || void 0 === Od ? void 0 : Od.sequence) === dd) return this.telemetry = null, UO(Od.jK, this.nowMs()) ? Od.jK.target : void 0
```

#### 75. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1511` → after: `L1511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1511) · [Before (L1511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1511)

```diff
-           Wr = null === Zr || void 0 === Zr ? void 0 : Zr.wI.get(Qr);
+           Fd = null === Wd || void 0 === Wd ? void 0 : Wd.jK.get(md);
```

#### 76. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1513` → after: `L1513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1513) · [Before (L1513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1513)

```diff
-           for (const [ar, jr] of Zr.wI) jr.expiresAtMs <= Wr.expiresAtMs && Zr.wI.delete(ar)
+           for (const [Rd, Xd] of Wd.jK) Xd.expiresAtMs <= Fd.expiresAtMs && Wd.jK.delete(Rd)
```

#### 77. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1529` → after: `L1529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1529) · [Before (L1529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1529)

```diff
-           wI: new Map,
+           jK: new Map,
```

#### 78. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1535` → after: `L1535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1535) · [Before (L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1535)

```diff
-         const Qr = rr.wI.get(Sr);
+         const md = dd.jK.get(Od);
```

#### 79. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1541` → after: `L1541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1541) · [Before (L1541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1541)

```diff
-         return this.telemetryAsked === rr || null !== Sr && Sr.sequence === rr && TS(Sr.wI, this.nowMs()) ? null : rr
+         return this.telemetryAsked === dd || null !== Od && Od.sequence === dd && UO(Od.jK, this.nowMs()) ? null : dd
```

#### 80. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1600` → after: `L1600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1600) · [Before (L1600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1600)

```diff
-               rr.wI.set(Sr + Zr, {
+               dd.jK.set(Od + Wd, {
```

#### 81. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1605` → after: `L1605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1605) · [Before (L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1605)

```diff
-             return null !== Wr && Wr >= this.nextTelemetrySequence() && (null !== (ar = null === (jr = this.telemetry) || void 0 === jr ? void 0 : jr.sequence) && void 0 !== ar ? ar : -1) <= Wr && void 0 !== Qr.telemetryTarget && (this.telemetry = {
+             return null !== Fd && Fd >= this.nextTelemetrySequence() && (null !== (Rd = null === (Xd = this.telemetry) || void 0 === Xd ? void 0 : Xd.sequence) && void 0 !== Rd ? Rd : -1) <= Fd && void 0 !== md.telemetryTarget && (this.telemetry = {
```

#### 82. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1607` → after: `L1607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1607) · [Before (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1607)

```diff
-               wI: {
+               jK: {
```

#### 83. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1631` → after: `L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1631) · [Before (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1631)

```diff
-       return `${rr}:${Sr}`
+       return `${dd}:${Od}`
```

#### 84. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1662` → after: `L1662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1662) · [Before (L1662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1662)

```diff
-           return null !== (rr = this.nextSequence.get("telemetry")) && void 0 !== rr ? rr : 0
+           return null !== (dd = this.nextSequence.get("telemetry")) && void 0 !== dd ? dd : 0
```

#### 85. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1706` → after: `L1706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1706) · [Before (L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1706)

```diff
-         const Zr = null !== (Sr = null === (Qr = rr.part) || void 0 === Qr ? void 0 : Qr.sequence) && void 0 !== Sr ? Sr : null;
+         const Wd = null !== (Od = null === (md = dd.part) || void 0 === md ? void 0 : md.sequence) && void 0 !== Od ? Od : null;
```

#### 86. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1712` → after: `L1712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1712) · [Before (L1712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1712)

```diff
-             sequence: null !== Zr && void 0 !== Zr ? Zr : this.takeSequence(rr.kind)
+             sequence: null !== Wd && void 0 !== Wd ? Wd : this.takeSequence(dd.kind)
```

#### 87. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1723` → after: `L1723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1723) · [Before (L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1723)

```diff
-         const Qr = null !== (Sr = this.nextSequence.get(rr)) && void 0 !== Sr ? Sr : 0;
+         const md = null !== (Od = this.nextSequence.get(dd)) && void 0 !== Od ? Od : 0;
```

#### 88. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1761` → after: `L1761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1761) · [Before (L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1761)

```diff
-             this.uploadInFlight = !1, this.queue.shift(), this.queuedBytes -= rr.bytes.byteLength, "uploaded" !== Sr.type ? (this.callbacks.onDropped(rr, Sr.reason, rr.sequence), this.segmentBroken(rr), "refused" !== Sr.type || this.stopped || "telemetry" !== rr.kind || (console. … [truncated]
+             this.uploadInFlight = !1, this.queue.shift(), this.queuedBytes -= dd.bytes.byteLength, "uploaded" !== Od.type ? (this.callbacks.onDropped(dd, Od.reason, dd.sequence), this.segmentBroken(dd), "refused" !== Od.type || this.stopped || "telemetry" !== dd.kind || (console. … [truncated]
```

#### 89. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1778` → after: `L1778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1778) · [Before (L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1778)

```diff
-                 throw new Error(`rejected for now: ${Qr.reason}`)
+                 throw new Error(`rejected for now: ${md.reason}`)
```

#### 90. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1785` → after: `L1785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1785) · [Before (L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1785)

```diff
-               if (Zr instanceof wr.d && null !== Zr.status && Zr.status < 500 && !qS.has(Zr.status) && (null === Zr.storageCode || !RS.has(Zr.storageCode))) return console.warn(`Session replay ${rr.kind} segment ${rr.sequence} refused by storage:`, Zr), {
+               if (Wd instanceof ed.b && null !== Wd.status && Wd.status < 500 && !AO.has(Wd.status) && (null === Wd.storageCode || !rO.has(Wd.storageCode))) return console.warn(`Session replay ${dd.kind} segment ${dd.sequence} refused by storage:`, Wd), {
```

#### 91. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1796-L1797` → after: `L1796-L1797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1796-L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1796-L1797) · [Before (L1796-L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1796-L1797)

```diff
-               ar = void 0 === rr.part ? "" : ` part ${rr.part.index}`;
-             if (console.warn(`Session replay ${rr.kind} segment ${rr.sequence}${ar} upload failed:`, Zr), Zr instanceof wr.d && (403 === Zr.status && (Sr = null, void 0 !== rr.part && this.targets.expire(rr.kind, rr.sequence, rr.part.index)), ++Qr >= this.options.maxAttempts)) re … [truncated]
+               Rd = void 0 === dd.part ? "" : ` part ${dd.part.index}`;
+             if (console.warn(`Session replay ${dd.kind} segment ${dd.sequence}${Rd} upload failed:`, Wd), Wd instanceof ed.b && (403 === Wd.status && (Od = null, void 0 !== dd.part && this.targets.expire(dd.kind, dd.sequence, dd.part.index)), ++md >= this.options.maxAttempts)) re … [truncated]
```

#### 92. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1815` → after: `L1815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1815) · [Before (L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1815)

```diff
-           return "rejected" in Qr ? Qr : {
+           return "rejected" in md ? md : {
```

#### 93. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1838` → after: `L1838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1838) · [Before (L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1838)

```diff
-         return "rejected" in Wr ? Wr : {
+         return "rejected" in Fd ? Fd : {
```

#### 94. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1952` → after: `L1952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1952) · [Before (L1952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1952)

```diff
-           }, null !== (Zr = rr.completeUntilIndex) && void 0 !== Zr ? Zr : 0)
+           }, null !== (Wd = dd.completeUntilIndex) && void 0 !== Wd ? Wd : 0)
```

#### 95. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1980-L1981` → after: `L1980-L1981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1980-L1981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1980-L1981) · [Before (L1980-L1981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1980-L1981)

```diff
-     var MS = Qr(4088),
-       GS = Qr(5446);
+     var LO = md(4081),
+       PO = md(5350);
```

#### 96. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2011` → after: `L2011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2011) · [Before (L2011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2011)

```diff
-           console.warn("Session replay couldn't start its video; recording DOM and events without it.", Sr), this.videoUnavailable(`video couldn't start: ${Sr instanceof Error?Sr.message:String(Sr)}`)
+           console.warn("Session replay couldn't start its video; recording DOM and events without it.", Od), this.videoUnavailable(`video couldn't start: ${Od instanceof Error?Od.message:String(Od)}`)
```

#### 97. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2017` → after: `L2017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2017) · [Before (L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2017)

```diff
-           jr = (0, QS.j)(Sr),
+           Xd = (0, FO.o)(Od),
```

#### 98. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2028-L2029` → after: `L2028-L2029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2028-L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2028-L2029) · [Before (L2028-L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2028-L2029)

```diff
-           console.error("Session replay video worker error.", rr.message), this.worker === ar && (this.endVideo(), this.videoStopped("stopped_error", `video worker failed: ${rr.message||"it didn't load"}`))
-         }, this.worker = ar, this.uploads = Er, this.joiner = fr, this.deps.debug.joiner = null !== (Qr = null === fr || void 0 === fr ? void 0 : fr.stats) && void 0 !== Qr ? Qr : null, this.videoStarted = !0, this.deps.stills.start();
+           console.error("Session replay video worker error.", dd.message), this.worker === Rd && (this.endVideo(), this.videoStopped("stopped_error", `video worker failed: ${dd.message||"it didn't load"}`))
+         }, this.worker = Rd, this.uploads = vd, this.joiner = hd, this.deps.debug.joiner = null !== (md = null === hd || void 0 === hd ? void 0 : hd.stats) && void 0 !== md ? md : null, this.videoStarted = !0, this.deps.stills.start();
```

#### 99. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2045` → after: `L2045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2045) · [Before (L2045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2045)

```diff
-           journalRecordingId: null !== (Zr = null === (Wr = this.deps.journal) || void 0 === Wr ? void 0 : Wr.recordingId) && void 0 !== Zr ? Zr : null
+           journalRecordingId: null !== (Wd = null === (Fd = this.deps.journal) || void 0 === Fd ? void 0 : Fd.recordingId) && void 0 !== Wd ? Wd : null
```

#### 100. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2096` → after: `L2096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2096) · [Before (L2096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2096)

```diff
-               atMs: (0, Jr.e)(),
+               atMs: (0, kd.b)(),
```

#### 101. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2100` → after: `L2100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2100) · [Before (L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2100)

```diff
-             }), this.deps.experiment.logStats && console.warn(`Session replay stats: quality level ${rr.level} (${rr.reason})`), this.deps.telemetry.writeEvent("qualityChanged");
+             }), this.deps.experiment.logStats && console.warn(`Session replay stats: quality level ${dd.level} (${dd.reason})`), this.deps.telemetry.writeEvent("qualityChanged");
```

#### 102. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2119` → after: `L2119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2119) · [Before (L2119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2119)

```diff
-         console.warn(`Session replay stats: ${Sr} fps encoded, ${rr.encodeWidth}x${rr.encodeHeight} ${rr.hardwareAcceleration}`)
+         console.warn(`Session replay stats: ${Od} fps encoded, ${dd.encodeWidth}x${dd.encodeHeight} ${dd.hardwareAcceleration}`)
```

#### 103. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2139` → after: `L2139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2139) · [Before (L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2139)

```diff
-     const AS = 3 * Vr.d / 4,
+     const cO = 3 * jd.b / 4,
```

#### 104. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2145` → after: `L2145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2145) · [Before (L2145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2145)

```diff
-     var iS = Qr(41420);
+     var DO = md(41419);
```

#### 105. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2148` → after: `L2148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2148) · [Before (L2148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2148)

```diff
-         maxBytes: QS.h
+         maxBytes: FO.j
```

#### 106. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2153` → after: `L2153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2153) · [Before (L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2153)

```diff
-         let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Vr.g;
+         let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : jd.c;
```

#### 107. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2167` → after: `L2167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2167) · [Before (L2167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2167)

```diff
-         const ar = Qr.byteLength <= wS.maxBytes ? Qr : Zr;
+         const Rd = md.byteLength <= eO.maxBytes ? md : Wd;
```

#### 108. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2177` → after: `L2177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2177) · [Before (L2177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2177)

```diff
-         if (this.stopped || null === Qr || Qr.atMs <= (null !== (rr = null === (Sr = this.queued) || void 0 === Sr ? void 0 : Sr.atMs) && void 0 !== rr ? rr : -1 / 0)) return;
+         if (this.stopped || null === md || md.atMs <= (null !== (dd = null === (Od = this.queued) || void 0 === Od ? void 0 : Od.atMs) && void 0 !== dd ? dd : -1 / 0)) return;
```

#### 109. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2207` → after: `L2207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2207) · [Before (L2207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2207)

```diff
-         if (this.stopped || null === Wr || Wr.atMs <= (null !== (rr = null === (Sr = this.manifest.contents.still) || void 0 === Sr ? void 0 : Sr.atMs) && void 0 !== rr ? rr : -1 / 0)) return;
+         if (this.stopped || null === Fd || Fd.atMs <= (null !== (dd = null === (Od = this.manifest.contents.still) || void 0 === Od ? void 0 : Od.atMs) && void 0 !== dd ? dd : -1 / 0)) return;
```

#### 110. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2210` → after: `L2210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2210) · [Before (L2210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2210)

```diff
-         const jr = null !== (Zr = null === ar || void 0 === ar ? void 0 : ar.sequence) && void 0 !== Zr ? Zr : this.nextSequence,
+         const Xd = null !== (Wd = null === Rd || void 0 === Rd ? void 0 : Rd.sequence) && void 0 !== Wd ? Wd : this.nextSequence,
```

#### 111. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2222` → after: `L2222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2222) · [Before (L2222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2222)

```diff
-         }, Sr, cS, this.keepalive)) && void 0 !== Qr ? Qr : null;
+         }, Od, IO, this.keepalive)) && void 0 !== md ? md : null;
```

#### 112. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2227` → after: `L2227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2227) · [Before (L2227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2227)

```diff
-         } = (0, iS.g)(rr, Sr, cS);
+         } = (0, DO.f)(dd, Od, IO);
```

#### 113. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2241-L2246` → after: `L2241-L2246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2241-L2246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2241-L2246) · [Before (L2241-L2246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2241-L2246)

```diff
-     var oS = Qr(5452),
-       bS = Qr(41427),
-       JS = Qr(41430),
-       DS = Qr(41438),
-       dS = Qr(7467),
-       sS = Qr(7469);
+     var CO = md(5367),
+       ZO = md(41428),
+       kO = md(41432),
+       fO = md(41441),
+       MO = md(7460),
+       dm = md(7465);
```

#### 114. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2253` → after: `L2253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2253) · [Before (L2253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2253)

```diff
-         this.writer = new dS.c((0, Jr.e)()), this.framesSinceFpsSample = 0, this.lastFpsSampleMs = performance.now(), this.unsubscribers = [], this.actionBits = 0, this.carriedBytes = 0
+         this.writer = new MO.d((0, kd.b)()), this.framesSinceFpsSample = 0, this.lastFpsSampleMs = performance.now(), this.unsubscribers = [], this.actionBits = 0, this.carriedBytes = 0
```

#### 115. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2256-L2258` → after: `L2256-L2258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2256-L2258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2256-L2258) · [Before (L2256-L2258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2256-L2258)

```diff
-         null !== rr && (this.setActionBits(rr.getActionBits(), (0, Jr.e)()), this.unsubscribers.push(rr.onKey(((rr, Sr, Qr, Zr, Wr, ar) => {
-           const jr = (0, sS.c)(rr);
-           Wr ? this.writer.writeKey(uS(ar), jr, Sr, Qr, Zr) : 0 !== jr && null === (0, sS.f)(rr) && this.writer.writeKey(uS(ar), 0, Sr, Qr, Zr)
+         null !== dd && (this.setActionBits(dd.getActionBits(), (0, kd.b)()), this.unsubscribers.push(dd.onKey(((dd, Od, md, Wd, Fd, Rd) => {
+           const Xd = (0, dm.g)(dd);
+           Fd ? this.writer.writeKey(Om(Rd), Xd, Od, md, Wd) : 0 !== Xd && null === (0, dm.i)(dd) && this.writer.writeKey(Om(Rd), 0, Od, md, Wd)
```

#### 116. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2263-L2265` → after: `L2263-L2265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2263-L2265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2263-L2265) · [Before (L2263-L2265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2263-L2265)

```diff
-         })))), this.unsubscribers.push((0, hS.I)((() => {
-           const rr = (0, hS.l)();
-           this.writer.writeFrame((0, Jr.e)() - rr, rr), this.framesSinceFpsSample++, Sr()
+         })))), this.unsubscribers.push((0, TO.H)((() => {
+           const dd = (0, TO.k)();
+           this.writer.writeFrame((0, kd.b)() - dd, dd), this.framesSinceFpsSample++, Od()
```

#### 117. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2269` → after: `L2269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2269) · [Before (L2269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2269)

```diff
-         this.writer.writeState((0, Jr.e)(), {
+         this.writer.writeState((0, kd.b)(), {
```

#### 118. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2282` → after: `L2282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2282) · [Before (L2282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2282)

```diff
-         this.writer.writeEvent((0, Jr.e)(), rr)
+         this.writer.writeEvent((0, kd.b)(), dd)
```

#### 119. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2298` → after: `L2298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2298) · [Before (L2298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2298)

```diff
-           Sr = (0, Jr.e)(),
+           Od = (0, kd.b)(),
```

#### 120. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2314-L2315` → after: `L2314-L2315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2314-L2315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2314-L2315) · [Before (L2314-L2315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2314-L2315)

```diff
-     var SQ = Qr(5461),
-       QQ = Qr(41444);
+     var Wm = md(5380),
+       Fm = md(41450);
```

#### 121. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2320-L2322` → after: `L2320-L2322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2320-L2322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2320-L2322) · [Before (L2320-L2322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2320-L2322)

```diff
-         const Zr = Sr.dryRun ? null : null !== (Qr = rr.partJoiner) && void 0 !== Qr ? Qr : null,
-           Wr = null === Zr ? null : (0, ir.f)(or(Zr)),
-           jr = Sr.dryRun ? new iS.c : new iS.d((0, Lr.b)().segmentUploadUrl, {
+         const Wd = Od.dryRun ? null : null !== (md = dd.partJoiner) && void 0 !== md ? md : null,
+           Fd = null === Wd ? null : (0, Dd.g)(Cd(Wd)),
+           Xd = Od.dryRun ? new DO.c : new DO.e((0, Bd.c)().segmentUploadUrl, {
```

#### 122. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2329-L2330` → after: `L2329-L2330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2329-L2330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2329-L2330) · [Before (L2329-L2330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2329-L2330)

```diff
-             Ir = Hr.j.getItem("replaySkipLowMemory"),
-             fr = "boolean" === typeof Ir ? Ir : null;
+             Kd = Vd.k.getItem("replaySkipLowMemory"),
+             hd = "boolean" === typeof Kd ? Kd : null;
```

#### 123. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2333-L2336` → after: `L2333-L2336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2333-L2336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2333-L2336) · [Before (L2333-L2336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2333-L2336)

```diff
-             maxFps: null !== (Sr = gr("replayMaxFps")) && void 0 !== Sr ? Sr : jr.maxFps,
-             maxMacroblocks: null !== (Qr = gr("replayMaxMacroblocks")) && void 0 !== Qr ? Qr : jr.maxMacroblocks,
-             captureBudgetMsPerSecond: null !== (Zr = gr("replayCaptureBudgetMs")) && void 0 !== Zr ? Zr : jr.captureBudgetMsPerSecond,
-             captureFrameCostFloorMs: null !== (Wr = gr("replayCaptureCostFloorMs")) && void 0 !== Wr ? Wr : jr.captureFrameCostFloorMs,
+             maxFps: null !== (Od = Gd("replayMaxFps")) && void 0 !== Od ? Od : Xd.maxFps,
+             maxMacroblocks: null !== (md = Gd("replayMaxMacroblocks")) && void 0 !== md ? md : Xd.maxMacroblocks,
+             captureBudgetMsPerSecond: null !== (Wd = Gd("replayCaptureBudgetMs")) && void 0 !== Wd ? Wd : Xd.captureBudgetMsPerSecond,
+             captureFrameCostFloorMs: null !== (Fd = Gd("replayCaptureCostFloorMs")) && void 0 !== Fd ? Fd : Xd.captureFrameCostFloorMs,
```

#### 124. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2340` → after: `L2340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2340) · [Before (L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2340)

```diff
-             skipLowMemoryDevices: null !== fr && void 0 !== fr ? fr : jr.skipLowMemoryDevices
+             skipLowMemoryDevices: null !== hd && void 0 !== hd ? hd : Xd.skipLowMemoryDevices
```

#### 125. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2346` → after: `L2346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2346) · [Before (L2346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2346)

```diff
-         const pr = (0, SQ.e)(this.videoConfig);
+         const Qd = (0, Wm.c)(this.videoConfig);
```

#### 126. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2360` → after: `L2360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2360) · [Before (L2360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2360)

```diff
-             if ("videoSegments" === Sr) null === (Zr = this.video.uploads) || void 0 === Zr || Zr.listed(Qr.sequence, null !== (Wr = Qr.parts) && void 0 !== Wr ? Wr : null);
+             if ("videoSegments" === Od) null === (Wd = this.video.uploads) || void 0 === Wd || Wd.listed(md.sequence, null !== (Fd = md.parts) && void 0 !== Fd ? Fd : null);
```

#### 127. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2369` → after: `L2369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2369) · [Before (L2369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2369)

```diff
-         }), !Sr.dryRun && DS.e.supported && (this.journal = new aS(new DS.e, rr, this.manifest.contents, (0, Lr.b)())), this.debug = function() {
+         }), !Od.dryRun && fO.b.supported && (this.journal = new KO(new fO.b, dd, this.manifest.contents, (0, Bd.c)())), this.debug = function() {
```

#### 128. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2389` → after: `L2389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2389) · [Before (L2389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2389)

```diff
-             this.debug.uploadedBytesByKind[rr.kind] = (null !== (Qr = this.debug.uploadedBytesByKind[rr.kind]) && void 0 !== Qr ? Qr : 0) + rr.bytes.byteLength, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, this.onSegmentUploaded(rr.meta, Sr, rr.bytes), this.pageExi … [truncated]
+             this.debug.uploadedBytesByKind[dd.kind] = (null !== (md = this.debug.uploadedBytesByKind[dd.kind]) && void 0 !== md ? md : 0) + dd.bytes.byteLength, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, this.onSegmentUploaded(dd.meta, Od, dd.bytes), this.pageExi … [truncated]
```

#### 129. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2393` → after: `L2393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2393) · [Before (L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2393)

```diff
-             if (console.warn(`Session replay dropped a ${rr.kind} segment: ${Sr}`), this.debug.droppedSegments++, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, "video" === rr.meta.type) this.telemetry.writeEvent("videoSegmentDropped"), null === (Zr = this.video.uplo … [truncated]
+             if (console.warn(`Session replay dropped a ${dd.kind} segment: ${Od}`), this.debug.droppedSegments++, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, "video" === dd.meta.type) this.telemetry.writeEvent("videoSegmentDropped"), null === (Wd = this.video.uplo … [truncated]
```

#### 130. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2404` → after: `L2404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2404) · [Before (L2404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2404)

```diff
-             this.stop(`uploads refused: ${rr}`)
+             this.stop(`uploads refused: ${dd}`)
```

#### 131. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2440` → after: `L2440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2440) · [Before (L2440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2440)

```diff
-             logStats: !0 === Hr.j.getItem("replayLogStats")
+             logStats: !0 === Vd.k.getItem("replayLogStats")
```

#### 132. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2448` → after: `L2448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2448) · [Before (L2448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2448)

```diff
-           const Sr = null !== (rr = (0, qr.g)() ? Pr.currentUrl.getSearchParam("replayPostHogHost") : null) && void 0 !== rr ? rr : Hr.j.getItem("replayPostHogHost");
+           const Od = null !== (dd = (0, Ad.e)() ? ud.currentUrl.getSearchParam("replayPostHogHost") : null) && void 0 !== dd ? dd : Vd.k.getItem("replayPostHogHost");
```

#### 133. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2454` → after: `L2454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2454) · [Before (L2454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2454)

```diff
-         if (this.ownFpsMonitor = null === xr ? new QQ.b({
+         if (this.ownFpsMonitor = null === td ? new Fm.d({
```

#### 134. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2461` → after: `L2461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2461) · [Before (L2461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2461)

```diff
-           }) : null, Ir.i.subscribe("sessionReplayLowFps", (rr => {
+           }) : null, Kd.j.subscribe("sessionReplayLowFps", (dd => {
```

#### 135. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2466` → after: `L2466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2466) · [Before (L2466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2466)

```diff
-           })), Ir.i.subscribe("sessionReplayStayProgress", (rr => {
+           })), Kd.j.subscribe("sessionReplayStayProgress", (dd => {
```

#### 136. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2468` → after: `L2468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2468) · [Before (L2468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2468)

```diff
-           })), Ir.i.subscribe("sessionReplayGameQuit", (rr => {
+           })), Kd.j.subscribe("sessionReplayGameQuit", (dd => {
```

#### 137. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2474` → after: `L2474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2474) · [Before (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2474)

```diff
-           })), null !== Sr.currentGame && (this.listStay(Sr.currentGame), Ir.i.Jp("sessionReplayStayOpened", Sr.currentGame.gameNameWithVariation)), this.start(rr.expiresAtMs), this.dom = null, null !== xr) {
+           })), null !== Od.currentGame && (this.listStay(Od.currentGame), Kd.j.lQ("sessionReplayStayOpened", Od.currentGame.gameNameWithVariation)), this.start(dd.expiresAtMs), this.dom = null, null !== td) {
```

#### 138. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2478-L2479` → after: `L2478-L2479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2478-L2479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2478-L2479) · [Before (L2478-L2479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2478-L2479)

```diff
-           }, this.journal, new Or.c);
-           this.dom = Qr, (0, GS.d)({
+           }, this.journal, new xd.d);
+           this.dom = md, (0, PO.e)({
```

#### 139. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2492` → after: `L2492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2492) · [Before (L2492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2492)

```diff
-         return null !== (rr = null === (Sr = this.videoConfig) || void 0 === Sr ? void 0 : Sr.manifestIntervalMs) && void 0 !== rr ? rr : 3e4
+         return null !== (dd = null === (Od = this.videoConfig) || void 0 === Od ? void 0 : Od.manifestIntervalMs) && void 0 !== dd ? dd : 3e4
```

#### 140. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2502` → after: `L2502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2502) · [Before (L2502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2502)

```diff
-         this.manifest.gameJoined("anonymous" === this.recording.tags.place_mode || null === Sr ? Qr : {
+         this.manifest.gameJoined("anonymous" === this.recording.tags.place_mode || null === Od ? md : {
```

#### 141. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2510` → after: `L2510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2510) · [Before (L2510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2510)

```diff
-         }), this.flushTelemetry(), this.listStay(rr), Ir.i.Jp("sessionReplayStayOpened", rr.gameNameWithVariation), this.lowFpsOpen && this.manifest.flagCurrentGame("lowFps"), this.manifest.send())
+         }), this.flushTelemetry(), this.listStay(dd), Kd.j.lQ("sessionReplayStayOpened", dd.gameNameWithVariation), this.lowFpsOpen && this.manifest.flagCurrentGame("lowFps"), this.manifest.send())
```

#### 142. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2532` → after: `L2532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2532) · [Before (L2532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2532)

```diff
-         }), Math.max(0, rr - Date.now() - 6e4))), this.pageExit.listen(Sr), this.telemetry.attach((0, JS.e)(), (() => {
+         }), Math.max(0, dd - Date.now() - 6e4))), this.pageExit.listen(Od), this.telemetry.attach((0, kO.b)(), (() => {
```

#### 143. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2537` → after: `L2537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2537) · [Before (L2537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2537)

```diff
-           (0, bS.d)(rr) && this.manifest.flagCurrentGame("hadError")
+           (0, ZO.e)(dd) && this.manifest.flagCurrentGame("hadError")
```

#### 144. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2541` → after: `L2541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2541) · [Before (L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2541)

```diff
-         (0, SQ.f)((() => {
+         (0, Wm.d)((() => {
```

#### 145. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2543` → after: `L2543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2543) · [Before (L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2543)

```diff
-         }), Sr), null !== this.journal && (0, oS.c)(Sr)
+         }), Od), null !== this.journal && (0, CO.b)(Od)
```

#### 146. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2548` → after: `L2548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2548) · [Before (L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2548)

```diff
-           console.warn(`Session replay stopped recording: ${rr}`), this.debug.stoppedReason = rr, this.lifetime.abort();
+           console.warn(`Session replay stopped recording: ${dd}`), this.debug.stoppedReason = dd, this.lifetime.abort();
```

#### 147. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2550` → after: `L2550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2550) · [Before (L2550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2550)

```diff
-           this.stills.stop(), this.video.canvasWatch.stop(), null !== this.dom && (0, GS.k)(), this.telemetry.stop(), this.flushTelemetry(), null === (Sr = this.dom) || void 0 === Sr || Sr.cut(), null === (Qr = this.dom) || void 0 === Qr || Qr.close(), this.video.endVideo(), this … [truncated]
+           this.stills.stop(), this.video.canvasWatch.stop(), null !== this.dom && (0, PO.i)(), this.telemetry.stop(), this.flushTelemetry(), null === (Od = this.dom) || void 0 === Od || Od.cut(), null === (md = this.dom) || void 0 === md || md.close(), this.video.endVideo(), this … [truncated]
```

#### 148. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2559` → after: `L2559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2559) · [Before (L2559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2559)

```diff
-         } = this.video.canvasWatch, Zr = jr.e.getLastColyseusPingMs();
+         } = this.video.canvasWatch, Wd = Xd.c.getLastColyseusPingMs();
```

#### 149. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2624` → after: `L2624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2624) · [Before (L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2624)

```diff
-   7467: (rr, Sr, Qr) => {
+   7460: (dd, Od, md) => {
```

#### 150. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2626` → after: `L2626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2626) · [Before (L2626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2626)

```diff
-       c: () => Or,
+       d: () => xd,
```

#### 151. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2629` → after: `L2629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2629) · [Before (L2629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2629)

```diff
-     var Zr = Qr(7469);
+     var Wd = md(7465);
```

#### 152. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2675` → after: `L2675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2675) · [Before (L2675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2675)

```diff
-         Qr.setUint8(Zr, Er), Qr.setUint32(Zr + 1, this.timeUnits(rr), !0), Qr.setUint16(Zr + 5, vr(Sr.backingWidth), !0), Qr.setUint16(Zr + 7, vr(Sr.backingHeight), !0), Qr.setUint16(Zr + 9, vr(Sr.cssWidth), !0), Qr.setUint16(Zr + 11, vr(Sr.cssHeight), !0), Qr.setUint16(Zr + 13,  … [truncated]
+         md.setUint8(Wd, vd), md.setUint32(Wd + 1, this.timeUnits(dd), !0), md.setUint16(Wd + 5, Ud(Od.backingWidth), !0), md.setUint16(Wd + 7, Ud(Od.backingHeight), !0), md.setUint16(Wd + 9, Ud(Od.cssWidth), !0), md.setUint16(Wd + 11, Ud(Od.cssHeight), !0), md.setUint16(Wd + 13,  … [truncated]
```

#### 153. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2690` → after: `L2690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2690) · [Before (L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2690)

```diff
-         this.view.setUint8(ar, mr), this.view.setUint32(ar + 1, this.timeUnits(rr), !0), this.view.setUint8(ar + 5, Sr), this.view.setUint8(ar + 6, (Qr ? Yr : 0) | (Zr ? nr : 0) | (Wr ? er : 0)), this.length += zr
+         this.view.setUint8(Rd, od), this.view.setUint32(Rd + 1, this.timeUnits(dd), !0), this.view.setUint8(Rd + 5, Od), this.view.setUint8(Rd + 6, (md ? Td : 0) | (Wd ? pd : 0) | (Fd ? Yd : 0)), this.length += bd
```

#### 154. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2712` → after: `L2712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2712) · [Before (L2712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2712)

```diff
-       if (Qr < jr || Qr > ar || Sr.getUint32(0, !0) !== Wr) throw new Error(`Not a version ${jr}-${ar} replay telemetry chunk`);
+       if (md < Xd || md > Rd || Od.getUint32(0, !0) !== Fd) throw new Error(`Not a version ${Xd}-${Rd} replay telemetry chunk`);
```

#### 155. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2742` → after: `L2742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2742) · [Before (L2742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2742)

```diff
-             renderer: null !== (Xr = Br[Sr.getUint8(lr + 15)]) && void 0 !== Xr ? Xr : "unknown",
+             renderer: null !== (sd = Ed[Od.getUint8(Sd + 15)]) && void 0 !== sd ? sd : "unknown",
```

#### 156. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2751` → after: `L2751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2751) · [Before (L2751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2751)

```diff
-             event: null !== (Pr = Tr[Sr.getUint8(lr + 5)]) && void 0 !== Pr ? Pr : "none"
+             event: null !== (ud = Jd[Od.getUint8(Sd + 5)]) && void 0 !== ud ? ud : "none"
```

#### 157. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2758` → after: `L2758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2758) · [Before (L2758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2758)

```diff
-           if (rr !== mr || !Or.inputRecorded) throw new Error(`Unknown replay telemetry record type ${rr} at byte ${lr}`);
+           if (dd !== od || !xd.inputRecorded) throw new Error(`Unknown replay telemetry record type ${dd} at byte ${Sd}`);
```

#### 158. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2764` → after: `L2764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2764) · [Before (L2764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2764)

```diff
-               code: null !== (Hr = Zr.b[Sr.getUint8(lr + 5)]) && void 0 !== Hr ? Hr : Zr.b[0],
+               code: null !== (Vd = Wd.d[Od.getUint8(Sd + 5)]) && void 0 !== Vd ? Vd : Wd.d[0],
```

#### 159. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2775` → after: `L2775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2775) · [Before (L2775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2775)

```diff
-   37500: rr => {
+   37635: dd => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (fl4vv.bd3c59ce → yteou.5361c997)

- **File**: `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a)

#### 1. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L4)

```diff
-   41466: (rr, Sr, Qr) => {
+   41474: (dd, Od, md) => {
```

#### 2. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L8-L13` → after: `L8-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L8-L13) · [Before (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L8-L13)

```diff
-     var Zr = Qr(41385),
-       Wr = Qr(43),
-       ar = Qr(41371),
-       jr = Qr(41355),
-       Ir = Qr(41379),
-       fr = Qr(1267);
+     var Wd = md(41381),
+       Fd = md(46),
+       Rd = md(41370),
+       Xd = md(41354),
+       Kd = md(41372),
+       hd = md(1268);
```

#### 3. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L20-L21` → after: `L20-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L20-L21) · [Before (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L20-L21)

```diff
-         Wr = (0, fr.o)(Er),
-         ar = void 0 === Qr ? Wr : (0, fr.i)([Qr, Wr]);
+         Fd = (0, hd.s)(vd),
+         Rd = void 0 === md ? Fd : (0, hd.j)([md, Fd]);
```

#### 4. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L38` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L38) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L38)

```diff
-         if (!Sr.ok) throw new Error(`HTTP ${Sr.status}`);
+         if (!Od.ok) throw new Error(`HTTP ${Od.status}`);
```

#### 5. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L43-L49` → after: `L43-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L43-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L43-L49) · [Before (L43-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L43-L49)

```diff
-         return console.warn(`Session replay couldn't ask the part joiner about video segment ${Sr}; uploading it from the journal.`, Ir), null
-       }
-     }
-     var xr = Qr(41405),
-       mr = Qr(41438),
-       Nr = Qr(5459),
-       Ur = Qr(41413);
+         return console.warn(`Session replay couldn't ask the part joiner about video segment ${Od}; uploading it from the journal.`, Kd), null
+       }
+     }
+     var td = md(41407),
+       od = md(41441),
+       Nd = md(5375),
+       qd = md(41416);
```

#### 6. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L61` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L61) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L61)

```diff
-         return console.warn(`Session replay couldn't mux late ${Zr} segment ${Wr}; skipping it.`, Ir), "refused"
+         return console.warn(`Session replay couldn't mux late ${Wd} segment ${Fd}; skipping it.`, Kd), "refused"
```

#### 7. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L73` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L73) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L73)

```diff
-         return "rejected" in Ir ? (console.warn(`Session replay late ${Zr} segment ${Wr} refused: ${Ir.reason}`), Ir.retryable ? "retryLater" : "refused") : (await Qr.put(Ir.uploadUrl, jr, ar, Ir.ifNoneMatch), "uploaded")
+         return "rejected" in Kd ? (console.warn(`Session replay late ${Wd} segment ${Fd} refused: ${Kd.reason}`), Kd.retryable ? "retryLater" : "refused") : (await md.put(Kd.uploadUrl, Xd, Rd, Kd.ifNoneMatch), "uploaded")
```

#### 8. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L75` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L75) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L75)

```diff
-         return console.warn(`Session replay late ${Zr} segment ${Wr} upload failed; trying again later.`, Ir), "retryLater"
+         return console.warn(`Session replay late ${Wd} segment ${Fd} upload failed; trying again later.`, Kd), "retryLater"
```

#### 9. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L81` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L81) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L81)

```diff
-         ar = (null !== (Zr = Qr.domSegments) && void 0 !== Zr ? Zr : []).filter((rr => rr.endMs <= Wr));
+         Rd = (null !== (Wd = md.domSegments) && void 0 !== Wd ? Wd : []).filter((dd => dd.endMs <= Fd));
```

#### 10. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L83` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L83) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L83)

```diff
-       for (const jr of (0, Ur.c)({
+       for (const Xd of (0, qd.e)({
```

#### 11. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L94-L98` → after: `L94-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L94-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L94-L98) · [Before (L94-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L94-L98)

```diff
-     var zr = Qr(41470),
-       Yr = Qr(41486),
-       nr = Qr(41539),
-       er = Qr(41566),
-       Kr = Qr(41552);
+     var bd = md(41483),
+       Td = md(41498),
+       pd = md(41544),
+       Yd = md(41569),
+       gd = md(41555);
```

#### 12. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L105-L106` → after: `L105-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L105-L106) · [Before (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L105-L106)

```diff
-         this.output = new zr.e({
-           format: new Yr.i({
+         this.output = new bd.c({
+           format: new Td.h({
```

#### 13. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L116-L117` → after: `L116-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L116-L117) · [Before (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L116-L117)

```diff
-           target: new nr.g
-         }), this.source = new er.i(rr), this.output.addVideoTrack(this.source), this.pending = this.output.start()
+           target: new pd.d
+         }), this.source = new Yd.k(dd), this.output.addVideoTrack(this.source), this.pending = this.output.start()
```

#### 14. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L127` → after: `L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L127) · [Before (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L127)

```diff
-         const Wr = new Kr.b(rr, Sr, (Qr - this.firstTimestampUs) / 1e6, this.frameDurationS),
+         const Fd = new gd.e(dd, Od, (md - this.firstTimestampUs) / 1e6, this.frameDurationS),
```

#### 15. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L141)

```diff
-           endUs: null !== (rr = this.addingTimestampUs) && void 0 !== rr ? rr : this.lastTimestampUs + 1e6 * this.frameDurationS
+           endUs: null !== (dd = this.addingTimestampUs) && void 0 !== dd ? dd : this.lastTimestampUs + 1e6 * this.frameDurationS
```

#### 16. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L152` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L152) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L152)

```diff
-     Qr(41403);
+     md(41405);
```

#### 17. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L193` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L193) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L193)

```diff
-       return void 0 !== Wr && (null === Qr || Wr.partsLanded > Qr.partsLanded) ? Wr : Qr
+       return void 0 !== Fd && (null === md || Fd.partsLanded > md.partsLanded) ? Fd : md
```

#### 18. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L233` → after: `L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L233) · [Before (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L233)

```diff
-                 console.warn(`Session replay's part joiner didn't answer about video segment ${Er} in time; uploading it from the journal.`, Ir), Sr = null
+                 console.warn(`Session replay's part joiner didn't answer about video segment ${vd} in time; uploading it from the journal.`, Kd), Od = null
```

#### 19. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L242` → after: `L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L242) · [Before (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L242)

```diff
-         return console.warn(`Session replay couldn't read what an earlier page load left of ${Sr.recordingId}; trying again later.`, zr), {
+         return console.warn(`Session replay couldn't read what an earlier page load left of ${Od.recordingId}; trying again later.`, bd), {
```

#### 20. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L262` → after: `L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L262) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L262)

```diff
-             return null === Qr ? rr : Math.max(rr, Qr + 1)
+             return null === md ? dd : Math.max(dd, md + 1)
```

#### 21. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L285` → after: `L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L285) · [Before (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L285)

```diff
-                 Ur = null !== (ar = null !== (jr = null === mr || void 0 === mr ? void 0 : mr.completeUntilUs) && void 0 !== jr ? jr : null === xr || void 0 === xr ? void 0 : xr.completeUntilUs) && void 0 !== ar ? ar : null,
+                 qd = null !== (Rd = null !== (Xd = null === od || void 0 === od ? void 0 : od.completeUntilUs) && void 0 !== Xd ? Xd : null === td || void 0 === td ? void 0 : td.completeUntilUs) && void 0 !== Rd ? Rd : null,
```

#### 22. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L294` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L294) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L294)

```diff
-                 }(null === Ur ? pr : pr.filter((rr => rr.timestampUs >= Ur))),
+                 }(null === qd ? Qd : Qd.filter((dd => dd.timestampUs >= qd))),
```

#### 23. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L319` → after: `L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L319) · [Before (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L319)

```diff
-           }), null !== (Qr = Sr.nextDomSequence) && void 0 !== Qr ? Qr : 0);
+           }), null !== (md = Od.nextDomSequence) && void 0 !== md ? md : 0);
```

#### 24. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L355` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L355) · [Before (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L355)

```diff
-               Zr = null !== (ar = null === Qr || void 0 === Qr ? void 0 : Qr.sequence) && void 0 !== ar ? ar : Er.nextSequence;
+               Wd = null !== (Rd = null === md || void 0 === md ? void 0 : md.sequence) && void 0 !== Rd ? Rd : vd.nextSequence;
```

#### 25. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L362` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L362) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L362)

```diff
-             console.warn(`Session replay couldn't drop what it sent of ${Sr.recordingId} from its journal.`, zr)
+             console.warn(`Session replay couldn't drop what it sent of ${Od.recordingId} from its journal.`, bd)
```

#### 26. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L475-L476` → after: `L475-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L475-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L475-L476) · [Before (L475-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L475-L476)

```diff
-     var qr = Qr(41392),
-       Rr = Qr(41420);
+     var Ad = md(41390),
+       rd = md(41419);
```

#### 27. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L479-L480` → after: `L479-L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L479-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L479-L481) · [Before (L479-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L479-L480)

```diff
-       if (!mr.e.supported || void 0 === rr) return;
-       const Sr = new mr.e,
+       if (!od.b.supported || void 0 === dd) return;
+       const Od = new od.b,
+         md = new Ad.e,
```

#### 28. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L505` → after: `L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L505) · [Before (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L505)

```diff
-                     console.warn(`Session replay couldn't recover what an earlier page load left of ${Zr.recordingId}; forgetting it.`, Qr), Wr = {
+                     console.warn(`Session replay couldn't recover what an earlier page load left of ${Wd.recordingId}; forgetting it.`, md), Fd = {
```

#### 29. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L517` → after: `L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L517) · [Before (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L517)

```diff
-               console.warn(`Session replay couldn't forget ${Zr.recordingId}'s journal.`, Qr)
+               console.warn(`Session replay couldn't forget ${Wd.recordingId}'s journal.`, md)
```

#### 30. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L526` → after: `L526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L526) · [Before (L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L526)

```diff
-             return new Rr.d((null !== (Sr = rr.endpoints) && void 0 !== Sr ? Sr : (0, Ir.b)()).segmentUploadUrl, {
+             return new rd.e((null !== (Od = dd.endpoints) && void 0 !== Od ? Od : (0, Kd.c)()).segmentUploadUrl, {
```

#### 31. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L532` → after: `L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L532) · [Before (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L532)

```diff
-             return (0, xr.e)((null !== (Qr = rr.endpoints) && void 0 !== Qr ? Qr : (0, Ir.b)()).manifestUrl, Sr)
+             return (0, td.d)((null !== (md = dd.endpoints) && void 0 !== md ? md : (0, Kd.c)()).manifestUrl, Od)
```

#### 32. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L535` → after: `L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L535) · [Before (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L535)

```diff
-             await rr.request((0, Nr.w)(Sr), {
+             await dd.request((0, Nd.s)(Od), {
```

#### 33. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L542` → after: `L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L542) · [Before (L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L542)

```diff
-           packDom: rr => fr.pack(rr).catch((() => (0, jr.b)(rr))),
+           packDom: dd => hd.pack(dd).catch((() => (0, Xd.c)(dd))),
```

#### 34. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L547` → after: `L547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L547) · [Before (L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L547)

```diff
-             return null !== (Sr = rr.lateUploadUntilMs) && void 0 !== Sr ? Sr : rr.expiresAtMs + Zr.c
+             return null !== (Od = dd.lateUploadUntilMs) && void 0 !== Od ? Od : dd.expiresAtMs + Wd.e
```

#### 35. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L553-L554` → after: `L553-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L553-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L553-L554) · [Before (L553-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L553-L554)

```diff
-       for (const Zr of Er) "live" !== Zr.outcome && console.info(`Session replay: ${Zr.outcome} what an earlier page load left of ${Zr.recordingId} (${Zr.videoSegments} video, ${Zr.telemetrySegments} telemetry, ${Zr.domSegments} page recording).`);
-       0 === (await Sr.listRecordings()).length && Wr.j.removeItem(Nr.n)
+       for (const Wd of vd) "live" !== Wd.outcome && console.info(`Session replay: ${Wd.outcome} what an earlier page load left of ${Wd.recordingId} (${Wd.videoSegments} video, ${Wd.telemetrySegments} telemetry, ${Wd.domSegments} page recording).`);
+       0 === (await Od.listRecordings()).length && Fd.k.removeItem(Nd.l)
```

#### 36. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L557` → after: `L557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L557) · [Before (L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L557)

```diff
-   41545: () => {}
+   41551: () => {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/textureNameTable.js` (fl4vv.bd3c59ce → yteou.5361c997)

- **File**: `bundles/bloxd.io/chunks/js/textureNameTable.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d38a57138b5a2a0d33a7525a47df22137ae3ffec9b04af4648a7cd7a7c0c9310)

#### 1. `bundles/bloxd.io/chunks/js/textureNameTable.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d38a57138b5a2a0d33a7525a47df22137ae3ffec9b04af4648a7cd7a7c0c9310R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d38a57138b5a2a0d33a7525a47df22137ae3ffec9b04af4648a7cd7a7c0c9310) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/textureNameTable.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/textureNameTable.js#L4)

```diff
-   55207: (rr, Sr, Qr) => {
+   55138: (dd, Od, md) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/texturePackFeed.js` (fl4vv.bd3c59ce → yteou.5361c997)

- **File**: `bundles/bloxd.io/chunks/js/texturePackFeed.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879)

#### 1. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/texturePackFeed.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/texturePackFeed.js#L4)

```diff
-   55183: (rr, Sr, Qr) => {
+   55115: (dd, Od, md) => {
```

#### 2. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/texturePackFeed.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/texturePackFeed.js#L8-L10)

```diff
-     var Zr = Qr(1262),
-       Wr = Qr(43),
-       ar = Qr(55176);
+     var Wd = md(1253),
+       Fd = md(46),
+       Rd = md(55102);
```

#### 3. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L13` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/texturePackFeed.js#L13) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/texturePackFeed.js#L13)

```diff
-       const Qr = new ar.e({
+       const md = new Rd.d({
```

#### 4. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L18` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/texturePackFeed.js#L18) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/texturePackFeed.js#L18)

```diff
-           const Sr = await fetch(`${Zr.clientSideServerUrls.texturePackUrl}/${rr}.json`, {
+           const Od = await fetch(`${Wd.clientSideServerUrls.texturePackUrl}/${dd}.json`, {
```

#### 5. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/texturePackFeed.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/texturePackFeed.js#L21)

```diff
-           if (!Sr.ok) throw new Error(`fetching texture pack ${rr} answered HTTP ${Sr.status}`);
+           if (!Od.ok) throw new Error(`fetching texture pack ${dd} answered HTTP ${Od.status}`);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/texturePackStorage.js` (fl4vv.bd3c59ce → yteou.5361c997)

- **File**: `bundles/bloxd.io/chunks/js/texturePackStorage.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383)

#### 1. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/texturePackStorage.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/texturePackStorage.js#L4)

```diff
-   35543: (rr, Sr, Qr) => {
+   35623: (dd, Od, md) => {
```

#### 2. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/texturePackStorage.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/texturePackStorage.js#L7)

```diff
-       takeOneShotTexturePack: () => Zr.h
+       takeOneShotTexturePack: () => Wd.f
```

#### 3. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L9-L10` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/texturePackStorage.js#L9-L10) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/texturePackStorage.js#L9-L10)

```diff
-     var Zr = Qr(35551),
-       Wr = Qr(35559)
+     var Wd = md(35632),
+       Fd = md(35639)
```

#### 4. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/texturePackStorage.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/texturePackStorage.js#L12)

```diff
-   35559: (rr, Sr, Qr) => {
+   35639: (dd, Od, md) => {
```

#### 5. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/texturePackStorage.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/texturePackStorage.js#L17)

```diff
-     var Zr = Qr(4454);
+     var Wd = md(4470);
```

#### 6. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/texturePackStorage.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/texturePackStorage.js#L23)

```diff
-         const Sr = new BroadcastChannel(Zr.j);
+         const Od = new BroadcastChannel(Wd.k);
```

#### 7. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/texturePackStorage.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/texturePackStorage.js#L35)

```diff
-       return "string" === typeof Sr ? Sr : null
+       return "string" === typeof Od ? Od : null
```

#### 8. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L38` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/texturePackStorage.js#L38) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/texturePackStorage.js#L38)

```diff
-   35551: (rr, Sr, Qr) => {
+   35632: (dd, Od, md) => {
```

#### 9. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L42` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/texturePackStorage.js#L42) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/texturePackStorage.js#L42)

```diff
-       h: () => ar
+       f: () => Rd
```

#### 10. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/texturePackStorage.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/texturePackStorage.js#L44)

```diff
-     var Zr = Qr(4454);
+     var Wd = md(4470);
```

#### 11. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/texturePackStorage.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/texturePackStorage.js#L47)

```diff
-       const ar = jr(await rr.getItem(Zr.e, Sr));
+       const Rd = Xd(await dd.getItem(Wd.h, Od));
```

#### 12. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/texturePackStorage.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/texturePackStorage.js#L49)

```diff
-       const Ir = await rr.getItem(Zr.f, Sr);
+       const Kd = await dd.getItem(Wd.j, Od);
```

#### 13. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L51` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/texturePackStorage.js#L51) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/texturePackStorage.js#L51)

```diff
-         await Promise.all([rr.removeItem(Zr.e), rr.removeItem(Zr.f)])
+         await Promise.all([dd.removeItem(Wd.h), dd.removeItem(Wd.j)])
```

#### 14. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L54` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/texturePackStorage.js#L54) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/texturePackStorage.js#L54)

```diff
-         source: "string" === typeof Ir ? Ir : null
+         source: "string" === typeof Kd ? Kd : null
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmClientGame.js` (fl4vv.bd3c59ce → yteou.5361c997)

- **File**: `bundles/bloxd.io/chunks/js/wasmClientGame.js` (1013 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b)

#### 1. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4)

```diff
-   40593: (rr, Sr, Qr) => {
+   40592: (dd, Od, md) => {
```

#### 2. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6-L7)

```diff
-       b: () => ar,
-       e: () => Wr
+       d: () => Rd,
+       f: () => Fd
```

#### 3. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L9` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L9)

```diff
-     var Zr = Qr(34);
+     var Wd = md(32);
```

#### 4. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L16` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L16) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L16)

```diff
-       "refetchCode" !== rr ? "Plugin|MobAiPlugin|ShowPetUi" !== rr ? Promise.all([Qr.e(128), Qr.e(129), Qr.e(118), Qr.e(120), Qr.e(248)]).then((() => Qr(54268))).then((Qr => {
+       "refetchCode" !== dd ? "Plugin|MobAiPlugin|ShowPetUi" !== dd ? Promise.all([md.e(128), md.e(129), md.e(118), md.e(120), md.e(248)]).then((() => md(54153))).then((md => {
```

#### 5. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L22-L23` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L22-L23) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L22-L23)

```diff
-         console.error(`Game message ${rr} failed`, Sr)
-       })) : Zr.i.Jp("showPetUi", Sr) : Zr.i.Jp("refetchCode")
+         console.error(`Game message ${dd} failed`, Od)
+       })) : Wd.j.lQ("showPetUi", Od) : Wd.j.lQ("refetchCode")
```

#### 6. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L26)

```diff
-   9996: (rr, Sr, Qr) => {
+   10017: (dd, Od, md) => {
```

#### 7. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L28-L31` → after: `L28-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L28-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L28-L31) · [Before (L28-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L28-L31)

```diff
-       c: () => Wr,
-       g: () => jr,
-       i: () => Ir,
-       j: () => fr
+       b: () => Fd,
+       e: () => Xd,
+       f: () => Kd,
+       i: () => hd
```

#### 8. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L33` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L33) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L33)

```diff
-     var Zr = Qr(34);
+     var Wd = md(32);
```

#### 9. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L42` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L42) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L42)

```diff
-       rr !== ar && (ar = rr, Zr.i.Jp(Wr, rr))
+       dd !== Rd && (Rd = dd, Wd.j.lQ(Fd, dd))
```

#### 10. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L49)

```diff
-   55093: (rr, Sr, Qr) => {
+   55017: (dd, Od, md) => {
```

#### 11. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L51-L52` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L51-L52) · [Before (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L51-L52)

```diff
-       c: () => Zr,
-       d: () => Wr
+       d: () => Wd,
+       f: () => Fd
```

#### 12. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L61` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L61) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L61)

```diff
-   35381: (rr, Sr, Qr) => {
+   35467: (dd, Od, md) => {
```

#### 13. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L63-L64` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L63-L64) · [Before (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L63-L64)

```diff
-       e: () => Ir,
-       g: () => fr
+       b: () => Kd,
+       d: () => hd
```

#### 14. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L66` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L66) · [Before (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L66)

```diff
-     var Zr = Qr(26);
+     var Wd = md(29);
```

#### 15. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L73` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L73) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L73)

```diff
-       return null === (rr = Zr.c.get("showDistantNametags")) || void 0 === rr || rr
+       return null === (dd = Wd.e.get("showDistantNametags")) || void 0 === dd || dd
```

#### 16. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L82)

```diff
-       }()) && void 0 !== rr ? rr : Ir() ? 0 : Wr
+       }()) && void 0 !== dd ? dd : Kd() ? 0 : Fd
```

#### 17. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L85` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L85) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L85)

```diff
-   55089: (rr, Sr, Qr) => {
+   55013: (dd, Od, md) => {
```

#### 18. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L87` → after: `L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L87) · [Before (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L87)

```diff
-       blockIdOf: () => fE.d,
+       blockIdOf: () => vv.b,
```

#### 19. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L91` → after: `L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L91) · [Before (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L91)

```diff
-       drainTextRerasters: () => uI.b,
+       drainTextRerasters: () => mh.d,
```

#### 20. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L98-L99` → after: `L98-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L98-L99) · [Before (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L98-L99)

```diff
-       loadTextIcons: () => uI.e,
-       rasterText: () => sI.i,
+       loadTextIcons: () => mh.h,
+       rasterText: () => Oh.g,
```

#### 21. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L102-L103` → after: `L102-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L102-L103) · [Before (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L102-L103)

```diff
-       setTextHost: () => uI.k,
-       setTextLocalPlayer: () => uI.l,
+       setTextHost: () => mh.l,
+       setTextLocalPlayer: () => mh.n,
```

#### 22. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L108` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L108) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L108)

```diff
-       textChanged: () => uI.t,
+       textChanged: () => mh.r,
```

#### 23. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L112-L129` → after: `L112-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L112-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L112-L129) · [Before (L112-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L112-L129)

```diff
-     Qr(38045);
-     var Zr = Qr(26),
-       Wr = Qr(38287),
-       ar = Qr(40739),
-       jr = Qr(34),
-       Ir = Qr(4637),
-       fr = Qr(38280),
-       Er = Qr(1353),
-       pr = Qr(679),
-       xr = Qr(39720),
-       mr = Qr(5610),
-       Nr = Qr(42500),
-       Ur = Qr(42438);
-     const tr = Ur.vb / 4,
-       hr = Ur.m.PlaySound,
-       zr = Ur.m.SoundReset,
- ... (2 more removed lines; see GitHub link above)
+     md(38137);
+     var Wd = md(29),
+       Fd = md(38370),
+       Rd = md(40765),
+       Xd = md(32),
+       Kd = md(4624),
+       hd = md(38367),
+       vd = md(1349),
+       Qd = md(693),
+       td = md(39760),
+       od = md(5568),
+       Nd = md(42609),
+       qd = md(42540);
+     const Hd = qd.Ob / 4,
+       yd = qd.n.PlaySound,
+       bd = qd.n.SoundReset,
+ ... (2 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L133` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L133) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L133)

```diff
-         this.core = rr, this.memory = Sr, this.audio = Qr, this.serverIds = new Int32Array(256).fill(Ur.Nc), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.vie … [truncated]
+         this.core = dd, this.memory = Od, this.audio = md, this.serverIds = new Int32Array(256).fill(qd.$c), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.vie … [truncated]
```

#### 25. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L138` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L138) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L138)

```diff
-         return this.scratchPtr < 0 && (this.scratchPtr = this.core.Zjr(), this.ensureViews()), this.scratchPtr
+         return this.scratchPtr < 0 && (this.scratchPtr = this.core.hXd(), this.ensureViews()), this.scratchPtr
```

#### 26. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L151` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L151) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L151)

```diff
-         return Ur.p.localId(this.apiView, 0)
+         return qd.q.localId(this.apiView, 0)
```

#### 27. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L154` → after: `L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L154) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L154)

```diff
-         return Ur.p.localDeaths(this.apiView, 0)
+         return qd.q.localDeaths(this.apiView, 0)
```

#### 28. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L158-L162` → after: `L158-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L158-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L158-L162) · [Before (L158-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L158-L162)

```diff
-           Sr = Ur.p.entRenderPtr(rr, 0),
-           Qr = Ur.p.entVisPtr(rr, 0),
-           Zr = Ur.p.entCapacity(rr, 0);
-         if (Sr !== this.renderPtr || Qr !== this.visPtr || Zr !== this.sx || this.renderBuffer !== this.buffer) {
-           this.renderPtr = Sr, this.visPtr = Qr, this.sx = Zr, this.renderBuffer = this.buffer;
+           Od = qd.q.entRenderPtr(dd, 0),
+           md = qd.q.entVisPtr(dd, 0),
+           Wd = qd.q.entCapacity(dd, 0);
+         if (Od !== this.renderPtr || md !== this.visPtr || Wd !== this.Mt || this.renderBuffer !== this.buffer) {
+           this.renderPtr = Od, this.visPtr = md, this.Mt = Wd, this.renderBuffer = this.buffer;
```

#### 29. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L165` → after: `L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L165) · [Before (L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L165)

```diff
-           this.renderCapacity = rr && Wr ? Zr : 0, this.render = rr && Wr ? rr : new Float32Array(0), this.vis = rr && Wr ? Wr : new Uint8Array(0)
+           this.renderCapacity = dd && Fd ? Wd : 0, this.render = dd && Fd ? dd : new Float32Array(0), this.vis = dd && Fd ? Fd : new Uint8Array(0)
```

#### 30. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L170` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L170) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L170)

```diff
-           return (0, Nr.n)(rr, this.memory().buffer, Sr, Qr, Zr)
+           return (0, Nd.t)(dd, this.memory().buffer, Od, md, Wd)
```

#### 31. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L177` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L177) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L177)

```diff
-           return (0, Nr.e)(this.memory().buffer, rr, Sr, Qr, Zr)
+           return (0, Nd.f)(this.memory().buffer, dd, Od, md, Wd)
```

#### 32. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L185` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L185) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L185)

```diff
-         return (null === Zr || void 0 === Zr ? void 0 : Zr.buffer) === this.memory().buffer && Zr.byteOffset === Qr && Zr.byteLength >= rr ? Zr : (this.scratchView = this.memoryData(Qr, rr, 8, Sr), this.scratchView)
+         return (null === Wd || void 0 === Wd ? void 0 : Wd.buffer) === this.memory().buffer && Wd.byteOffset === md && Wd.byteLength >= dd ? Wd : (this.scratchView = this.memoryData(md, dd, 8, Od), this.scratchView)
```

#### 33. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L209-L210` → after: `L209-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L209-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L209-L210) · [Before (L209-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L209-L210)

```diff
-             Wr = Er + mr.Y;
-           if (Qr === Ur.m.EntitySpawned) {
+             Fd = vd + od.W;
+           if (md === qd.n.EntitySpawned) {
```

#### 34. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L212-L216` → after: `L212-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L212-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L212-L216) · [Before (L212-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L212-L216)

```diff
-             if (Zr !== Ur.Ab.BYTES) throw vr(Qr, Er, Zr);
-             const rr = Ur.Ab.serverId(ar, Wr);
-             this.spawned(rr, Ur.Ab.index(ar, Wr), Ur.Ab.kind(ar, Wr)), null === (jr = Sr.entityAdded) || void 0 === jr || jr.call(Sr, rr)
-           } else if ((Qr === Ur.m.ChunkSlot || Qr === Ur.m.EntityInfoChanged) && !(0, Ur.de)(Qr, ar, Wr, Zr, Sr)) throw vr(Qr, Er, Zr);
-           Er = Wr + (0, mr.Ke)(Zr)
+             if (Wd !== qd.Wb.BYTES) throw Ud(md, vd, Wd);
+             const dd = qd.Wb.serverId(Rd, Fd);
+             this.spawned(dd, qd.Wb.index(Rd, Fd), qd.Wb.kind(Rd, Fd)), null === (Xd = Od.entityAdded) || void 0 === Xd || Xd.call(Od, dd)
+           } else if ((md === qd.n.ChunkSlot || md === qd.n.EntityInfoChanged) && !(0, qd.we)(md, Rd, Fd, Wd, Od)) throw Ud(md, vd, Wd);
+           vd = Fd + (0, od.ve)(Wd)
```

#### 35. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L231-L233` → after: `L231-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L231-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L231-L233) · [Before (L231-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L231-L233)

```diff
-             ar = Wr + mr.Y;
-           if ((65535 & rr) === Ur.m.EntityDespawned && rr >>> 16 === Ur.Ab.BYTES) {
-             const rr = Ur.Ab.serverId(Qr, ar);
+             Rd = Fd + od.W;
+           if ((65535 & dd) === qd.n.EntityDespawned && dd >>> 16 === qd.Wb.BYTES) {
+             const dd = qd.Wb.serverId(md, Rd);
```

#### 36. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L235` → after: `L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L235) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L235)

```diff
-             if (this.despawned(rr, Ur.Ab.index(Qr, ar))) null === (Zr = Sr.entityRemoved) || void 0 === Zr || Zr.call(Sr, rr)
+             if (this.despawned(dd, qd.Wb.index(md, Rd))) null === (Wd = Od.entityRemoved) || void 0 === Wd || Wd.call(Od, dd)
```

#### 37. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L237` → after: `L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L237) · [Before (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L237)

```diff
-           Wr = ar + (0, mr.Ke)(rr >>> 16)
+           Fd = Rd + (0, od.ve)(dd >>> 16)
```

#### 38. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L253` → after: `L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L253) · [Before (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L253)

```diff
-             Lr = Br + mr.Y;
+             Bd = Ed + od.W;
```

#### 39. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L256` → after: `L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L256) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L256)

```diff
-           else if (Zr === mr.$.LocalPlayerBound) {
+           else if (Wd === od.Z.LocalPlayerBound) {
```

#### 40. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L258` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L258) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L258)

```diff
-             if (Or !== mr.Kb) throw vr(Zr, Br, Or);
+             if (xd !== od.Jb) throw Ud(Wd, Ed, xd);
```

#### 41. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L260` → after: `L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L260) · [Before (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L260)

```diff
-           } else if (Zr === mr.$.LocalHurt) {
+           } else if (Wd === od.Z.LocalHurt) {
```

#### 42. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L262` → after: `L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L262) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L262)

```diff
-             if (Or !== mr.Gb) throw vr(Zr, Br, Or);
+             if (xd !== od.Ib) throw Ud(Wd, Ed, xd);
```

#### 43. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L264` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L264) · [Before (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L264)

```diff
-           } else if (Zr === mr.$.AttackHit) {
+           } else if (Wd === od.Z.AttackHit) {
```

#### 44. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L266` → after: `L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L266) · [Before (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L266)

```diff
-             if (Or !== mr.e) throw vr(Zr, Br, Or);
+             if (xd !== od.c) throw Ud(Wd, Ed, xd);
```

#### 45. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L271-L272` → after: `L271-L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L271-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L271-L272) · [Before (L271-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L271-L272)

```diff
-             null === (pr = Sr.attackHit) || void 0 === pr || pr.call(Sr, rr, Qr, Wr, 0 !== (ar & mr.m.Crit), 0 !== (ar & mr.m.HitSelf))
-           } else if (Zr === mr.$.PhysicsType) {
+             null === (Qd = Od.attackHit) || void 0 === Qd || Qd.call(Od, dd, md, Fd, 0 !== (Rd & od.h.Crit), 0 !== (Rd & od.h.HitSelf))
+           } else if (Wd === od.Z.PhysicsType) {
```

#### 46. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L274` → after: `L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L274) · [Before (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L274)

```diff
-             if (Or !== mr.lc) throw vr(Zr, Br, Or);
+             if (xd !== od.ic) throw Ud(Wd, Ed, xd);
```

#### 47. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L276` → after: `L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L276) · [Before (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L276)

```diff
-           } else if (Zr === mr.$.VehicleEffect) {
+           } else if (Wd === od.Z.VehicleEffect) {
```

#### 48. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L281` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L281) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L281)

```diff
-           } else if (Zr === mr.$.ZoomChanged) {
+           } else if (Wd === od.Z.ZoomChanged) {
```

#### 49. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L283` → after: `L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L283) · [Before (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L283)

```diff
-             if (Or !== mr.se) throw vr(Zr, Br, Or);
+             if (xd !== od.Yd) throw Ud(Wd, Ed, xd);
```

#### 50. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L285` → after: `L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L285) · [Before (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L285)

```diff
-           } else if (Zr === mr.$.ZoomDisabled) {
+           } else if (Wd === od.Z.ZoomDisabled) {
```

#### 51. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L289` → after: `L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L289) · [Before (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L289)

```diff
-           } else if (Zr === mr.$.BhopDisabled) {
+           } else if (Wd === od.Z.BhopDisabled) {
```

#### 52. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L293` → after: `L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L293) · [Before (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L293)

```diff
-           } else if (Zr === mr.$.GameCamera) {
+           } else if (Wd === od.Z.GameCamera) {
```

#### 53. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L296` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L296) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L296)

```diff
-           } else if (Zr === Ur.m.ChunkSlot || Zr === Ur.m.EntityInfoChanged);
+           } else if (Wd === qd.n.ChunkSlot || Wd === qd.n.EntityInfoChanged);
```

#### 54. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L304-L305` → after: `L304-L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L304-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L304-L305) · [Before (L304-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L304-L305)

```diff
-           } else if (Zr >= Ur.Yc && Zr <= Ur.Zc && Zr !== mr.$.EnvLighting) {
-             if (!(0, Ur.de)(Zr, jr, Lr, Or, Sr)) throw vr(Zr, Br, Or);
+           } else if (Wd >= qd.pd && Wd <= qd.td && Wd !== od.Z.EnvLighting) {
+             if (!(0, qd.we)(Wd, Xd, Bd, xd, Od)) throw Ud(Wd, Ed, xd);
```

#### 55. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L312` → after: `L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L312) · [Before (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L312)

```diff
-           Br = Lr + (0, mr.Ke)(Or)
+           Ed = Bd + (0, od.ve)(xd)
```

#### 56. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L319` → after: `L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L319) · [Before (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L319)

```diff
-         const Sr = Ur.p.audioViewPtr(this.apiView, 0),
+         const Od = qd.q.audioViewPtr(this.apiView, 0),
```

#### 57. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L322` → after: `L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L322) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L322)

```diff
-         (null === (rr = Zr) || void 0 === rr ? void 0 : rr.buffer) === Qr && Zr.byteOffset === Sr || (Zr = (0, Nr.e)(Qr, Sr, Ur.t.BYTES, 8, "the audio view"), this.audioView = Zr), Zr && this.audio.applyListener(Zr)
+         (null === (dd = Wd) || void 0 === dd ? void 0 : dd.buffer) === md && Wd.byteOffset === Od || (Wd = (0, Nd.f)(md, Od, qd.u.BYTES, 8, "the audio view"), this.audioView = Wd), Wd && this.audio.applyListener(Wd)
```

#### 58. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L325` → after: `L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L325) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L325)

```diff
-         return this.indexById.get("number" === typeof rr ? rr : +rr)
+         return this.indexById.get("number" === typeof dd ? dd : +dd)
```

#### 59. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L328` → after: `L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L328) · [Before (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L328)

```diff
-         return rr !== Ur.Nc && rr === Ur.p.localId(this.apiView, 0)
+         return dd !== qd.$c && dd === qd.q.localId(this.apiView, 0)
```

#### 60. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L332` → after: `L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L332) · [Before (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L332)

```diff
-         return this.readPosition("number" === typeof rr ? rr : +rr, Sr) ? Sr : null
+         return this.readPosition("number" === typeof dd ? dd : +dd, Od) ? Od : null
```

#### 61. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L337` → after: `L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L337) · [Before (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L337)

```diff
-           for (let rr = 0; rr < 3; rr++) Sr[rr] = Ur.p.localPos(Qr, 0, rr);
+           for (let dd = 0; dd < 3; dd++) Od[dd] = qd.q.localPos(md, 0, dd);
```

#### 62. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L347` → after: `L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L347) · [Before (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L347)

```diff
-         for (let ar = 0; ar < 3; ar++) Sr[ar] = this.render[Wr + ar] + Ur.p.origin(Qr, 0, ar);
+         for (let Rd = 0; Rd < 3; Rd++) Od[Rd] = this.render[Fd + Rd] + qd.q.origin(md, 0, Rd);
```

#### 63. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L358` → after: `L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L358) · [Before (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L358)

```diff
-         return 0 === Qr ? null : 0 !== (Qr & Ur.$d.Alive)
+         return 0 === md ? null : 0 !== (md & qd.ue.Alive)
```

#### 64. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L362` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L362) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L362)

```diff
-         return void 0 === Sr ? this.isLocal("number" === typeof rr ? rr : +rr) ? "Player" : null : yr(this.kinds[Sr])
+         return void 0 === Od ? this.isLocal("number" === typeof dd ? dd : +dd) ? "Player" : null : wd(this.kinds[Od])
```

#### 65. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L365` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L365) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L365)

```diff
-         if (Sr >= 1048576) throw new Nr.d(`entity ${rr} spawned at index ${Sr}`);
+         if (Od >= 1048576) throw new Nd.d(`entity ${dd} spawned at index ${Od}`);
```

#### 66. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L370` → after: `L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L370) · [Before (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L370)

```diff
-         return this.indexById.get(rr) === Sr && (this.indexById.delete(rr), Qr = !0), Sr < this.serverIds.length && this.serverIds[Sr] === rr && (this.serverIds[Sr] = Ur.Nc, this.kinds[Sr] = 0, this.idStr[Sr] = null), Qr
+         return this.indexById.get(dd) === Od && (this.indexById.delete(dd), md = !0), Od < this.serverIds.length && this.serverIds[Od] === dd && (this.serverIds[Od] = qd.$c, this.kinds[Od] = 0, this.idStr[Od] = null), md
```

#### 67. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L377` → after: `L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L377) · [Before (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L377)

```diff
-         const Zr = new Int32Array(Qr).fill(Ur.Nc);
+         const Wd = new Int32Array(md).fill(qd.$c);
```

#### 68. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L389` → after: `L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L389) · [Before (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L389)

```diff
-         this.buffer = rr, this.viewPtr < 0 && (this.viewPtr = this.core.Wjr()), this.view = new DataView(rr, this.viewPtr, Ur.p.BYTES), this.rereadDirectory()
+         this.buffer = dd, this.viewPtr < 0 && (this.viewPtr = this.core.vXd()), this.view = new DataView(dd, this.viewPtr, qd.q.BYTES), this.rereadDirectory()
```

#### 69. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L394` → after: `L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L394) · [Before (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L394)

```diff
-       return rr >>> Ur.c === Ur.n.Item
+       return dd >>> qd.c === qd.o.Item
```

#### 70. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L399` → after: `L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L399) · [Before (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L399)

```diff
-       const Zr = rr & Ur.d;
+       const Wd = dd & qd.f;
```

#### 71. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L401-L405` → after: `L401-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L401-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L401-L405) · [Before (L401-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L401-L405)

```diff
-         case Ur.n.Lifeform:
-           return null !== (Sr = pr.n[Zr]) && void 0 !== Sr ? Sr : null;
-         case Ur.n.Throwable:
-           return null !== (Qr = xr.o[Zr]) && void 0 !== Qr ? Qr : null;
-         case Ur.n.Mesh:
+         case qd.o.Lifeform:
+           return null !== (Od = Qd.h[Wd]) && void 0 !== Od ? Od : null;
+         case qd.o.Throwable:
+           return null !== (md = td.i[Wd]) && void 0 !== md ? md : null;
+         case qd.o.Mesh:
```

#### 72. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L407` → after: `L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L407) · [Before (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L407)

```diff
-         case Ur.n.Audio:
+         case qd.o.Audio:
```

#### 73. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L409` → after: `L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L409) · [Before (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L409)

```diff
-         case Ur.n.Item:
+         case qd.o.Item:
```

#### 74. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L418` → after: `L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L418) · [Before (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L418)

```diff
-       if (Qr < mr.Sd.HEAD_BYTES) return null;
+       if (md < od.Fd.HEAD_BYTES) return null;
```

#### 75. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L422-L423` → after: `L422-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L422-L423) · [Before (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L422-L423)

```diff
-         jr = mr.Sd.HEAD_BYTES + (0, mr.Ke)(Wr);
-       if (Zr !== mr.Sd.UPDATE && Zr !== mr.Sd.REMOVE || Wr > Qr || jr + ar > Qr) return null;
+         Xd = od.Fd.HEAD_BYTES + (0, od.ve)(Fd);
+       if (Wd !== od.Fd.UPDATE && Wd !== od.Fd.REMOVE || Fd > md || Xd + Rd > md) return null;
```

#### 76. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L430` → after: `L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L430) · [Before (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L430)

```diff
-         name: Ir(mr.Sd.HEAD_BYTES, Wr),
+         name: Kd(od.Fd.HEAD_BYTES, Fd),
```

#### 77. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L436-L450` → after: `L436-L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L436-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L436-L450) · [Before (L436-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L436-L450)

```diff
-       return new Nr.d(`event ${rr} at ${Sr} of ${Qr} bytes`)
-     }
-     var Or = Qr(7424),
-       Lr = Qr(379),
-       lr = Qr(1279),
-       Xr = Qr(40736),
-       Pr = Qr(40593),
-       Hr = Qr(2103),
-       qr = Qr(42880),
-       Rr = Qr(2049),
-       gr = Qr(38207),
-       Cr = Qr(40781),
-       Mr = Qr(40761),
-       Gr = Qr(40748),
-       kr = Qr(42485),
+       return new Nd.d(`event ${dd} at ${Od} of ${md} bytes`)
+     }
+     var xd = md(7410),
+       Bd = md(405),
+       Sd = md(1286),
+       sd = md(40763),
+       ud = md(40592),
+       Vd = md(2106),
+       Ad = md(42977),
+       rd = md(2057),
+       Gd = md(38295),
+       nd = md(40808),
+       Ld = md(40789),
+       Pd = md(40780),
+       zd = md(42587),
```

#### 78. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L452` → after: `L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L452) · [Before (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L452)

```diff
-       Vr = Qr(40775);
+       jd = md(40802);
```

#### 79. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L455` → after: `L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L455) · [Before (L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L455)

```diff
-       if (!(0, Vr.e)(rr)) return null;
+       if (!(0, jd.d)(dd)) return null;
```

#### 80. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L457` → after: `L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L457) · [Before (L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L457)

```diff
-       return (0 | Sr) === Sr ? Sr : null
+       return (0 | Od) === Od ? Od : null
```

#### 81. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L461` → after: `L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L461) · [Before (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L461)

```diff
-         this.api = rr, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, Gr.k)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.hQ = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], thi … [truncated]
+         this.api = dd, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, Pd.j)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.qm = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], thi … [truncated]
```

#### 82. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L464-L466` → after: `L464-L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L464-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L464-L466) · [Before (L464-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L464-L466)

```diff
-         this.defaultPoseRead = !1, this.hQ = null;
-         const rr = this.api.queries.directorView() >= Ur.jb.BYTES ? this.api.scratchData(Ur.jb.BYTES, "the director's view") : null;
-         null !== rr && (this.defaultFov = (0, Rr.B)(Ur.jb.fov(rr, 0)), this.baseFov = (0, Rr.B)(Ur.jb.baseFov(rr, 0)), this.aspect = Ur.jb.aspect(rr, 0), this.bodyHeading = Ur.jb.bodyHeading(rr, 0))
+         this.defaultPoseRead = !1, this.qm = null;
+         const dd = this.api.queries.directorView() >= qd.Ab.BYTES ? this.api.scratchData(qd.Ab.BYTES, "the director's view") : null;
+         null !== dd && (this.defaultFov = (0, rd.B)(qd.Ab.fov(dd, 0)), this.baseFov = (0, rd.B)(qd.Ab.baseFov(dd, 0)), this.aspect = qd.Ab.aspect(dd, 0), this.bodyHeading = qd.Ab.bodyHeading(dd, 0))
```

#### 83. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L475` → after: `L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L475) · [Before (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L475)

```diff
-         const rr = Ur.p.localId(this.api.apiView, 0);
+         const dd = qd.q.localId(this.api.apiView, 0);
```

#### 84. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L487-L488` → after: `L487-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L487-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L487-L488) · [Before (L487-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L487-L488)

```diff
-         const Qr = Ur.p.localId(this.api.apiView, 0);
-         return Sr === Qr && Qr !== Ur.Nc ? this.viewHeading : this.readEntity(rr) ? this.entityHeading : null
+         const md = qd.q.localId(this.api.apiView, 0);
+         return Od === md && md !== qd.$c ? this.viewHeading : this.readEntity(dd) ? this.entityHeading : null
```

#### 85. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L498` → after: `L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L498) · [Before (L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L498)

```diff
-         return Zr < Qr - 1e-6 ? Zr : null
+         return Wd < md - 1e-6 ? Wd : null
```

#### 86. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L505` → after: `L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L505) · [Before (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L505)

```diff
-         const Sr = this.api.queries.directorDefaultPose() >= Ur.fb.BYTES ? this.api.scratchData(Ur.fb.BYTES, "the director's default pose") : null;
+         const Od = this.api.queries.directorDefaultPose() >= qd.sb.BYTES ? this.api.scratchData(qd.sb.BYTES, "the director's default pose") : null;
```

#### 87. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L507-L508` → after: `L507-L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L507-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L507-L508) · [Before (L507-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L507-L508)

```diff
-         for (let Qr = 0; Qr < 3; Qr++) rr.position[Qr] = Ur.fb.eye(Sr, 0, Qr);
-         return rr.heading = Ur.fb.heading(Sr, 0), rr.pitch = Ur.fb.pitch(Sr, 0), rr
+         for (let md = 0; md < 3; md++) dd.position[md] = qd.sb.eye(Od, 0, md);
+         return dd.heading = qd.sb.heading(Od, 0), dd.pitch = qd.sb.pitch(Od, 0), dd
```

#### 88. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L522-L524` → after: `L522-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L522-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L522-L524) · [Before (L522-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L522-L524)

```diff
-         if (Sr === this.hQ) return this.entityLive;
-         this.hQ = Sr;
-         const Qr = this.api.queries.directorEntity(Sr) >= Ur.gb.BYTES ? this.api.scratchData(Ur.gb.BYTES, "the director's entity") : null;
+         if (Od === this.qm) return this.entityLive;
+         this.qm = Od;
+         const md = this.api.queries.directorEntity(Od) >= qd.vb.BYTES ? this.api.scratchData(qd.vb.BYTES, "the director's entity") : null;
```

#### 89. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L526-L528` → after: `L526-L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L526-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L526-L528) · [Before (L526-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L526-L528)

```diff
-         for (let ar = 0; ar < 3; ar++) this.entityFeet[ar] = Ur.gb.feet(Qr, 0, ar), this.entityAim[ar] = this.entityFeet[ar];
-         this.entityAim[1] += Ur.gb.eyeHeight(Qr, 0), this.entityHeading = Ur.gb.heading(Qr, 0);
-         const Zr = Ur.gb.pitch(Qr, 0);
+         for (let Rd = 0; Rd < 3; Rd++) this.entityFeet[Rd] = qd.vb.feet(md, 0, Rd), this.entityAim[Rd] = this.entityFeet[Rd];
+         this.entityAim[1] += qd.vb.eyeHeight(md, 0), this.entityHeading = qd.vb.heading(md, 0);
+         const Wd = qd.vb.pitch(md, 0);
```

#### 90. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L530` → after: `L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L530) · [Before (L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L530)

```diff
-         const Wr = Ur.gb.lookHeading(Qr, 0);
+         const Fd = qd.vb.lookHeading(md, 0);
```

#### 91. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L547-L549` → after: `L547-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L547-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L547-L549) · [Before (L547-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L547-L549)

```diff
-         this.options = rr, this.qx = void 0, this.director = void 0, this.latest = cr, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
-           xR: 0,
-           yR: 0
+         this.options = dd, this.Bt = void 0, this.director = void 0, this.latest = Id, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
+           mV: 0,
+           RV: 0
```

#### 92. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L558` → after: `L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L558) · [Before (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L558)

```diff
-         }, this.lastAnswer = Ur.eb.None, this.threw = !1, this.lastCallMs = 0, this.answeredPose = !1, this.Uh = new Int32Array(3 * Ur.Fd), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * Ur.Fd), this.qx = new wr(rr.api), this.director = new Mr.b(this … [truncated]
+         }, this.lastAnswer = qd.ob.None, this.threw = !1, this.lastCallMs = 0, this.answeredPose = !1, this.Ty = new Int32Array(3 * qd.Vd), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * qd.Vd), this.Bt = new ed(dd.api), this.director = new Ld.c(this … [truncated]
```

#### 93. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L563` → after: `L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L563) · [Before (L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L563)

```diff
-           Sr = (0, kr.d)(rr)
+           Od = (0, zd.b)(dd)
```

#### 94. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L570` → after: `L570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L570) · [Before (L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L570)

```diff
-         const fr = this.answeredPose && 0 === (Zr & Ur.hb.Held);
+         const hd = this.answeredPose && 0 === (Wd & qd.xb.Held);
```

#### 95. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L576` → after: `L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L576) · [Before (L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L576)

```diff
-           Er = !this.threw && this.answeredPose && !fr ? this.sendLastPose() : Ur.eb.None, this.threw = !0
+           vd = !this.threw && this.answeredPose && !hd ? this.sendLastPose() : qd.ob.None, this.threw = !0
```

#### 96. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L578` → after: `L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L578) · [Before (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L578)

```diff
-         return this.answeredPose = Er !== Ur.eb.None, this.holding = this.answeredPose && !fr, null === (jr = (Ir = this.options).showFacing) || void 0 === jr || jr.call(Ir, this.holding ? this.facing : null), Er
+         return this.answeredPose = vd !== qd.ob.None, this.holding = this.answeredPose && !hd, null === (Xd = (Kd = this.options).showFacing) || void 0 === Xd || Xd.call(Kd, this.holding ? this.facing : null), vd
```

#### 97. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L586` → after: `L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L586) · [Before (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L586)

```diff
-           qx: jr
+           Bt: Xd
```

#### 98. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L589` → after: `L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L589) · [Before (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L589)

```diff
-         if (0 !== (Zr & Ur.hb.Held) || jr.setViewHeading((0, gr.q)(jr.bodyHeading)), void 0 !== this.pending) {
+         if (0 !== (Wd & qd.xb.Held) || Xd.setViewHeading((0, Gd.w)(Xd.bodyHeading)), void 0 !== this.pending) {
```

#### 99. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L593` → after: `L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L593) · [Before (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L593)

```diff
-         this.readLook((0, Ar.f)(Sr), (0, Ar.f)(Qr), Zr, (0, Ar.f)(Wr), (0, Ar.f)(ar));
+         this.readLook((0, cd.c)(Od), (0, cd.c)(md), Wd, (0, cd.c)(Fd), (0, cd.c)(Rd));
```

#### 100. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L595` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L595) · [Before (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L595)

```diff
-         if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !Ir) return Ur.eb.None;
+         if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !Kd) return qd.ob.None;
```

#### 101. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L597` → after: `L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L597) · [Before (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L597)

```diff
-         return (0, Gr.i)(Ir.position, fr.position), fr.heading = (0, gr.q)(Ir.heading), fr.pitch = (0, gr.i)(Ir.pitch), fr.fovRadians = (0, Rr.k)(Ir.fov), this.lastAnswer = this.facingAnswer(), this.sendLastPose()
+         return (0, Pd.i)(Kd.position, hd.position), hd.heading = (0, Gd.w)(Kd.heading), hd.pitch = (0, Gd.h)(Kd.pitch), hd.fovRadians = (0, rd.n)(Kd.fov), this.lastAnswer = this.facingAnswer(), this.sendLastPose()
```

#### 102. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L600` → after: `L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L600) · [Before (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L600)

```diff
-         if ("default" === this.director.getSettings().mode) return Ur.eb.Pose;
+         if ("default" === this.director.getSettings().mode) return qd.ob.Pose;
```

#### 103. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L603` → after: `L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L603) · [Before (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L603)

```diff
-             return Ur.eb.FaceCamera;
+             return qd.ob.FaceCamera;
```

#### 104. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L605` → after: `L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L605) · [Before (L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L605)

```diff
-             return Ur.eb.FaceCursor;
+             return qd.ob.FaceCursor;
```

#### 105. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L607` → after: `L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L607) · [Before (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L607)

```diff
-             return Ur.eb.FaceMovement
+             return qd.ob.FaceMovement
```

#### 106. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L617` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L617) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L617)

```diff
-         return 0 === this.options.api.queries.directorPose(rr[0], rr[1], rr[2], Sr, Qr, Zr) ? Ur.eb.None : this.lastAnswer
+         return 0 === this.options.api.queries.directorPose(dd[0], dd[1], dd[2], Od, md, Wd) ? qd.ob.None : this.lastAnswer
```

#### 107. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L631` → after: `L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L631) · [Before (L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L631)

```diff
-         this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new Mr.b(this.qx), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, this.threw = !1, null === (rr … [truncated]
+         this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new Ld.c(this.Bt), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, this.threw = !1, null === (dd … [truncated]
```

#### 108. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L642-L643` → after: `L642-L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L642-L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L642-L643) · [Before (L642-L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L642-L643)

```diff
-           jr = 0 !== (Qr & Ur.hb.LookPointed);
-         if (null === this.mouseTurns && !jr) return ar.xR = 0, ar.yR = 0, void(ar.pointedAt = void 0);
+           Xd = 0 !== (md & qd.xb.LookPointed);
+         if (null === this.mouseTurns && !Xd) return Rd.mV = 0, Rd.RV = 0, void(Rd.pointedAt = void 0);
```

#### 109. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L647` → after: `L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L647) · [Before (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L647)

```diff
-           qx: fr
+           Bt: hd
```

#### 110. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L653` → after: `L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L653) · [Before (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L653)

```diff
-           Qr = Math.min(rr.length, Ur.Fd);
+           md = Math.min(dd.length, qd.Vd);
```

#### 111. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L655` → after: `L655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L655) · [Before (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L655)

```diff
-           for (let Qr = 0; Qr < 3; Qr++) Sr[3 * Zr + Qr] = Math.floor(rr[Zr][Qr] / Ur.x);
+           for (let md = 0; md < 3; md++) Od[3 * Wd + md] = Math.floor(dd[Wd][md] / qd.G);
```

#### 112. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L660` → after: `L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L660) · [Before (L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L660)

```diff
-           Uh: Sr,
+           Ty: Od,
```

#### 113. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L669` → after: `L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L669) · [Before (L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L669)

```diff
-         null !== rr && (0, Ur.Ef)(rr, 0, this.Uh, this.centresLen) && (this.centresUnsent = !1)
+         null !== dd && (0, qd._f)(dd, 0, this.Ty, this.centresLen) && (this.centresUnsent = !1)
```

#### 114. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L673` → after: `L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L673) · [Before (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L673)

```diff
-         return null !== (rr = null === (Sr = (Qr = this.options).screen) || void 0 === Sr ? void 0 : Sr.call(Qr)) && void 0 !== rr ? rr : Fr
+         return null !== (dd = null === (Od = (md = this.options).screen) || void 0 === Od ? void 0 : Od.call(md)) && void 0 !== dd ? dd : ld
```

#### 115. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L677` → after: `L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L677) · [Before (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L677)

```diff
-         return (null !== (rr = this.options.isPageHidden) && void 0 !== rr ? rr : or)()
+         return (null !== (dd = this.options.isPageHidden) && void 0 !== dd ? dd : Cd)()
```

#### 116. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L681` → after: `L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L681) · [Before (L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L681)

```diff
-         return null !== (rr = null === (Sr = (Qr = this.options).now) || void 0 === Sr ? void 0 : Sr.call(Qr)) && void 0 !== rr ? rr : performance.now()
+         return null !== (dd = null === (Od = (md = this.options).now) || void 0 === Od ? void 0 : Od.call(md)) && void 0 !== dd ? dd : performance.now()
```

#### 117. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L684-L688` → after: `L684-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L684-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L684-L688) · [Before (L684-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L684-L688)

```diff
-     var Jr = Qr(40686),
-       Dr = Qr(42593);
-     const dr = Ur.x * Ur.x * Ur.x,
-       sr = Math.log2(Ur.x),
-       ur = Ur.x - 1,
+     var kd = md(40697),
+       fd = md(42689);
+     const Md = qd.G * qd.G * qd.G,
+       dO = Math.log2(qd.G),
+       OO = qd.G - 1,
```

#### 118. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L690` → after: `L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L690) · [Before (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L690)

```diff
-       SS = Ur.M.BYTES / 4,
+       WO = qd.T.BYTES / 4,
```

#### 119. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L694` → after: `L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L694) · [Before (L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L694)

```diff
-       return rr * Ur.x * Ur.x + Sr * Ur.x + Qr
+       return dd * qd.G * qd.G + Od * qd.G + md
```

#### 120. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L714` → after: `L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L714) · [Before (L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L714)

```diff
-         this.table = rr, this.slot = Sr, this.generation = Qr, this.epoch = Zr, this.ZN = new WS(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = QS, this.dataPtr = 0, this.dataBuffer = null, this.dataS … [truncated]
+         this.table = dd, this.slot = Od, this.generation = md, this.epoch = Wd, this.QN = new XO(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = FO, this.dataPtr = 0, this.dataBuffer = null, this.dataS … [truncated]
```

#### 121. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L721` → after: `L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L721) · [Before (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L721)

```diff
-           Sr = this.layers ??= new Uint16Array(Ur.x);
+           Od = this.layers ??= new Uint16Array(qd.G);
```

#### 122. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L778-L779` → after: `L778-L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L778-L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L778-L779) · [Before (L778-L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L778-L779)

```diff
-       const Qr = rr[Sr * Ur.x];
-       for (let Zr = 0; Zr < Ur.x; Zr++) {
+       const md = dd[Od * qd.G];
+       for (let Wd = 0; Wd < qd.G; Wd++) {
```

#### 123. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L781` → after: `L781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L781) · [Before (L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L781)

```diff
-         for (let Sr = 0; Sr < Ur.x; Sr++)
+         for (let Od = 0; Od < qd.G; Od++)
```

#### 124. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L796-L798` → after: `L796-L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L796-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L796-L798) · [Before (L796-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L796-L798)

```diff
-         if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, ar === Ur.Q.ResetAll) return this.chunks.clear(), void this.epoch++;
-         if (ar !== Ur.Q.Stored && ar !== Ur.Q.Unloaded) throw new Nr.d(`ChunkSlot flags ${ar}`);
-         const jr = (0, Dr.d)(rr, Sr, Qr);
+         if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, Rd === qd.V.ResetAll) return this.chunks.clear(), void this.epoch++;
+         if (Rd !== qd.V.Stored && Rd !== qd.V.Unloaded) throw new Nd.d(`ChunkSlot flags ${Rd}`);
+         const Xd = (0, fd.b)(dd, Od, md);
```

#### 125. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L800` → after: `L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L800) · [Before (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L800)

```diff
-         if (ar === Ur.Q.Unloaded) return void this.chunks.delete(jr);
+         if (Rd === qd.V.Unloaded) return void this.chunks.delete(Xd);
```

#### 126. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L810-L811` → after: `L810-L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L810-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L810-L811) · [Before (L810-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L810-L811)

```diff
-           Sr = Ur.p.chunkSlotsPtr(rr, 0),
-           Qr = Ur.p.chunkSlotsLen(rr, 0);
+           Od = qd.q.chunkSlotsPtr(dd, 0),
+           md = qd.q.chunkSlotsLen(dd, 0);
```

#### 127. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L816-L817` → after: `L816-L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L816-L817) · [Before (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L816-L817)

```diff
-           Sr = Ur.p.walkThroughPtr(rr, 0),
-           Qr = Ur.p.walkThroughLen(rr, 0);
+           Od = qd.q.walkThroughPtr(dd, 0),
+           md = qd.q.walkThroughLen(dd, 0);
```

#### 128. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L830` → after: `L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L830) · [Before (L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L830)

```diff
-         rr !== this.slotsBuffer && (this.slotsBuffer = rr, this.slots = null !== (Sr = (0, Nr.n)(Uint32Array, rr, this.slotsPtr, this.slotsLen * SS, "the chunk directory")) && void 0 !== Sr ? Sr : fS);
+         dd !== this.slotsBuffer && (this.slotsBuffer = dd, this.slots = null !== (Od = (0, Nd.t)(Uint32Array, dd, this.slotsPtr, this.slotsLen * WO, "the chunk directory")) && void 0 !== Od ? Od : QO);
```

#### 129. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L836` → after: `L836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L836) · [Before (L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L836)

```diff
-           return null !== (Qr = (0, Nr.n)(Uint16Array, rr, Sr, dr, "a chunk's voxels")) && void 0 !== Qr ? Qr : QS
+           return null !== (md = (0, Nd.t)(Uint16Array, dd, Od, Md, "a chunk's voxels")) && void 0 !== md ? md : FO
```

#### 130. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L844` → after: `L844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L844) · [Before (L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L844)

```diff
-         return null !== (Zr = this.chunks.get((0, Dr.d)(rr, Sr, Qr))) && void 0 !== Zr ? Zr : null
+         return null !== (Wd = this.chunks.get((0, fd.b)(dd, Od, md))) && void 0 !== Wd ? Wd : null
```

#### 131. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L857` → after: `L857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L857) · [Before (L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L857)

```diff
-         return null !== (Zr = Ir.written(fr)) && void 0 !== Zr ? Zr : Ir.voxelData()[fr]
+         return null !== (Wd = Kd.written(hd)) && void 0 !== Wd ? Wd : Kd.voxelData()[hd]
```

#### 132. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L866` → after: `L866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L866) · [Before (L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L866)

```diff
-         return null !== (Zr = null === (Wr = this.chunks.get((0, Dr.d)(rr, Sr, Qr))) || void 0 === Wr ? void 0 : Wr.rt) && void 0 !== Zr ? Zr : null
+         return null !== (Wd = null === (Fd = this.chunks.get((0, fd.b)(dd, Od, md))) || void 0 === Fd ? void 0 : Fd.vH) && void 0 !== Wd ? Wd : null
```

#### 133. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L869` → after: `L869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L869) · [Before (L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L869)

```diff
-         const fr = Ur.x;
+         const hd = qd.G;
```

#### 134. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L878` → after: `L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L878) · [Before (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L878)

```diff
-               const tr = this.chunks.get((0, Dr.d)(Wr, pr, Zr));
+               const Hd = this.chunks.get((0, fd.b)(Fd, Qd, Wd));
```

#### 135. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L883` → after: `L883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L883) · [Before (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L883)

```diff
-                 nr = tr.DN,
+                 pd = Hd.Wq,
```

#### 136. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L904` → after: `L904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L904) · [Before (L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L904)

```diff
-         (0, Jr.d)(((rr, Sr, Qr) => {
+         (0, kd.b)(((dd, Od, md) => {
```

#### 137. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L906` → after: `L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L906) · [Before (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L906)

```diff
-           return null !== (Zr = this.chunks.get((0, Dr.d)(rr, Sr, Qr))) && void 0 !== Zr ? Zr : null
+           return null !== (Wd = this.chunks.get((0, fd.b)(dd, Od, md))) && void 0 !== Wd ? Wd : null
```

#### 138. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L925` → after: `L925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L925) · [Before (L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L925)

```diff
-         rr !== this.walkBuffer && (this.walkBuffer = rr, this.walk = null !== (Sr = (0, Nr.n)(Uint32Array, rr, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== Sr ? Sr : fS);
+         dd !== this.walkBuffer && (this.walkBuffer = dd, this.walk = null !== (Od = (0, Nd.t)(Uint32Array, dd, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== Od ? Od : QO);
```

#### 139. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L930` → after: `L930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L930) · [Before (L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L930)

```diff
-         const Zr = (0, Dr.d)(rr >> sr, Sr >> sr, Qr >> sr);
+         const Wd = (0, fd.b)(dd >> dO, Od >> dO, md >> dO);
```

#### 140. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L934-L941` → after: `L934-L941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L934-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L934-L941) · [Before (L934-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L934-L941)

```diff
-     var xS = Qr(40031),
-       mS = Qr(39311),
-       NS = Qr(39711),
-       US = Qr(37924),
-       tS = Qr(38191),
-       hS = Qr(35416),
-       zS = Qr(40694),
-       YS = Qr(208);
+     var NO = md(40048),
+       qO = md(39354),
+       HO = md(39744),
+       yO = md(38003),
+       bO = md(38273),
+       TO = md(35499),
+       pO = md(40706),
+       YO = md(218);
```

#### 141. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1447-L1451` → after: `L1447-L1451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1447-L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1447-L1451) · [Before (L1447-L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1447-L1451)

```diff
-     var OS = Qr(37853),
-       LS = Qr(37884),
-       lS = Qr(37915),
-       XS = Qr(37875),
-       PS = Qr(272);
+     var BO = md(37948),
+       SO = md(37974),
+       sO = md(37996),
+       uO = md(37965),
+       VO = md(285);
```

#### 142. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1454` → after: `L1454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1454) · [Before (L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1454)

```diff
-         let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : PS.c;
+         let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : VO.e;
```

#### 143. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1497` → after: `L1497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1497) · [Before (L1497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1497)

```diff
-     var qS = Qr(42756);
+     var AO = md(42867);
```

#### 144. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1519` → after: `L1519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1519) · [Before (L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1519)

```diff
-       return 1 === Qr ? Sr : Sr + Math.floor(Zr() * Qr)
+       return 1 === md ? Od : Od + Math.floor(Wd() * md)
```

#### 145. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1542` → after: `L1542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1542) · [Before (L1542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1542)

```diff
-       kS = YS.i.Uz * YS.i.playerEyeToHeightRatio,
+       zO = YO.i.yb * YO.i.playerEyeToHeightRatio,
```

#### 146. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1581-L1582` → after: `L1581-L1582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1581-L1582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1581-L1582) · [Before (L1581-L1582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1581-L1582)

```diff
-             const Er = 0 !== (Wr & Ur.Td.Loop);
-             Wr & Ur.Td.TwoD ? this.start(Zr, !1, jr, ar, Ir, Er, CS(Zr)) : this.startSpatial(Zr, jr, ar, Ir, Er, rr, Sr, Qr, fr, this.earDistSq(rr, Sr, Qr), CS(Zr))
+             const vd = 0 !== (Fd & qd.me.Loop);
+             Fd & qd.me.TwoD ? this.start(Wd, !1, Xd, Rd, Kd, vd, nO(Wd)) : this.startSpatial(Wd, Xd, Rd, Kd, vd, dd, Od, md, hd, this.earDistSq(dd, Od, md), nO(Wd))
```

#### 147. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1598` → after: `L1598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1598) · [Before (L1598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1598)

```diff
-             void 0 !== Wr && this.fade(Wr, Sr, Qr, 0 !== (Zr & Ur.Qd.StopAfter))
+             void 0 !== Fd && this.fade(Fd, Od, md, 0 !== (Wd & qd.ie.StopAfter))
```

#### 148. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1640` → after: `L1640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1640) · [Before (L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1640)

```diff
-               of Sr) this.howls.delete(rr), "loaded" === Qr.state() ? (0, OS.g)(Qr) : Qr.unload()
+               of Od) this.howls.delete(dd), "loaded" === md.state() ? (0, BO.e)(md) : md.unload()
```

#### 149. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1644` → after: `L1644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1644) · [Before (L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1644)

```diff
-         if (rr < Ur.m.PlaySound || rr > Ur.m.SoundReset) return !1;
+         if (dd < qd.n.PlaySound || dd > qd.n.SoundReset) return !1;
```

#### 150. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1646` → after: `L1646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1646) · [Before (L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1646)

```diff
-           return (0, Ur.de)(rr, Sr, Qr, Zr, this.handlers)
+           return (0, qd.we)(dd, Od, md, Wd, this.handlers)
```

#### 151. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1653` → after: `L1653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1653) · [Before (L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1653)

```diff
-         for (let Zr = 0; Zr < 3; Zr++) Sr[2 - Zr] = Ur.t.listener(rr, 0, Zr), Sr[5 - Zr] = Ur.t.forward(rr, 0, Zr), Sr[8 - Zr] = Ur.t.up(rr, 0, Zr);
+         for (let Wd = 0; Wd < 3; Wd++) Od[2 - Wd] = qd.u.listener(dd, 0, Wd), Od[5 - Wd] = qd.u.forward(dd, 0, Wd), Od[8 - Wd] = qd.u.up(dd, 0, Wd);
```

#### 152. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1667` → after: `L1667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1667) · [Before (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1667)

```diff
-         if (null === Ir) return qS.e;
+         if (null === Kd) return AO.d;
```

#### 153. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1669` → after: `L1669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1669) · [Before (L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1669)

```diff
-           Er = Ir[1] > 1 ? Ir : null;
+           vd = Kd[1] > 1 ? Kd : null;
```

#### 154. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1680` → after: `L1680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1680) · [Before (L1680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1680)

```diff
-         if (!Number.isFinite(pr) || !Number.isFinite(xr) || !Number.isFinite(mr)) return qS.e;
+         if (!Number.isFinite(Qd) || !Number.isFinite(td) || !Number.isFinite(od)) return AO.d;
```

#### 155. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1686` → after: `L1686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1686) · [Before (L1686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1686)

```diff
-           if (Nr = rr * rr + Sr * Sr + Qr * Qr, Nr > Wr * Wr) return qS.e
+           if (Nd = dd * dd + Od * Od + md * md, Nd > Fd * Fd) return AO.d
```

#### 156. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1689` → after: `L1689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1689) · [Before (L1689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1689)

```diff
-         return Ur ? this.gameSound(Ur.howl, Ur.id, !0) : qS.e
+         return qd ? this.gameSound(qd.howl, qd.id, !0) : AO.d
```

#### 157. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1716` → after: `L1716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1716) · [Before (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1716)

```diff
-             const Ir = this.level > 0 ? Qr / this.level : Qr > 0 && null !== (ar = null === (jr = this.live.get(Sr)) || void 0 === jr ? void 0 : jr.rel) && void 0 !== ar ? ar : 0;
+             const Kd = this.level > 0 ? md / this.level : md > 0 && null !== (Rd = null === (Xd = this.live.get(Od)) || void 0 === Xd ? void 0 : Xd.rel) && void 0 !== Rd ? Rd : 0;
```

#### 158. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1722` → after: `L1722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1722) · [Before (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1722)

```diff
-               return rr > 0 && rr < 1 / 0 ? rr : 1
+               return dd > 0 && dd < 1 / 0 ? dd : 1
```

#### 159. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1727` → after: `L1727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1727) · [Before (L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1727)

```diff
-             return (null !== (rr = null === (Qr = this.live.get(Sr)) || void 0 === Qr ? void 0 : Qr.rel) && void 0 !== rr ? rr : 0) * this.level
+             return (null !== (dd = null === (md = this.live.get(Od)) || void 0 === md ? void 0 : md.rel) && void 0 !== dd ? dd : 0) * this.level
```

#### 160. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1731` → after: `L1731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1731) · [Before (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1731)

```diff
-             return null !== (rr = null === (Qr = this.live.get(Sr)) || void 0 === Qr ? void 0 : Qr.rel) && void 0 !== rr ? rr : 0
+             return null !== (dd = null === (md = this.live.get(Od)) || void 0 === md ? void 0 : md.rel) && void 0 !== dd ? dd : 0
```

#### 161. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1738` → after: `L1738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1738) · [Before (L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1738)

```diff
-                 refDistance: US.h
+                 refDistance: yO.i
```

#### 162. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1756-L1757` → after: `L1756-L1757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1756-L1757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1756-L1757) · [Before (L1756-L1757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1756-L1757)

```diff
-           const Qr = yS[rr] === VS ? null : (0, XS.l)(KS[rr]),
-             Zr = (0, XS.h)(iS(Sr), Math.sqrt(Er), fr);
+           const md = EO[dd] === jO ? null : (0, uO.i)(aO[dd]),
+             Wd = (0, uO.e)(DO(Od), Math.sqrt(vd), hd);
```

#### 163. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1766` → after: `L1766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1766) · [Before (L1766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1766)

```diff
-         }, Nr.id), xr.pos(Ir, jr, ar, Nr.id), !Wr && this.posed && (0, lS.l)() && (0, lS.i)(nS[yS[rr]], KS[rr], ar - this.pose[2], Ir - this.pose[0]), Nr
+         }, Nd.id), td.pos(Kd, Xd, Rd, Nd.id), !Fd && this.posed && (0, sO.g)() && (0, sO.d)(gO[EO[dd]], aO[dd], Rd - this.pose[2], Kd - this.pose[0]), Nd
```

#### 164. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1786` → after: `L1786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1786) · [Before (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1786)

```diff
-         const Er = fr.play(OS.e),
+         const vd = hd.play(BO.b),
```

#### 165. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1872-L1873` → after: `L1872-L1873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1872-L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1872-L1873) · [Before (L1872-L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1872-L1873)

```diff
-     var bS = Qr(42472),
-       JS = Qr(40696);
+     var ZO = md(42567),
+       kO = md(40714);
```

#### 166. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1876` → after: `L1876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1876) · [Before (L1876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1876)

```diff
-         this.key = rr, this.model = Sr, this.host = Zr, this.sx = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.pjr = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, … [truncated]
+         this.key = dd, this.model = Od, this.host = Wd, this.Mt = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.HXd = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, … [truncated]
```

#### 167. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1882` → after: `L1882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1882) · [Before (L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1882)

```diff
-         !this.vU && rr >= 0 && rr < this.sx && rr < Ur.cc.Max && this.cU(rr, rr + 1)
+         !this.Aq && dd >= 0 && dd < this.Mt && dd < qd.wc.Max && this.dH(dd, dd + 1)
```

#### 168. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1885-L1886` → after: `L1885-L1886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1885-L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1885-L1886) · [Before (L1885-L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1885-L1886)

```diff
-         if (this.vU) return;
-         (rr = Math.min(Math.max(Math.floor(rr), 0), this.sx, Ur.cc.Max)) > this.count && this.cU(this.count, rr), this.count = rr;
+         if (this.Aq) return;
+         (dd = Math.min(Math.max(Math.floor(dd), 0), this.Mt, qd.wc.Max)) > this.count && this.dH(this.count, dd), this.count = dd;
```

#### 169. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1891` → after: `L1891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1891) · [Before (L1891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1891)

```diff
-         } = this, Wr = this.pjr !== rr, ar = Qr[0] !== Sr[0] || Qr[1] !== Sr[1] || Qr[2] !== Sr[2];
+         } = this, Fd = this.HXd !== dd, Rd = md[0] !== Od[0] || md[1] !== Od[1] || md[2] !== Od[2];
```

#### 170. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1903-L1904` → after: `L1903-L1904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1903-L1904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1903-L1904) · [Before (L1903-L1904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1903-L1904)

```diff
-             Qr = pr * Ur.cc.Bytes,
-             Wr = 0 !== fr[Sr + xS.c] ? Ur.cc.Hidden : 0;
+             md = Qd * qd.wc.Bytes,
+             Fd = 0 !== hd[Od + NO.f] ? qd.wc.Hidden : 0;
```

#### 171. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1907` → after: `L1907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1907) · [Before (L1907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1907)

```diff
-         if ((0, Ur.Je)(jr, 0, this.key, rr, Sr, Ir, this.tailOf(Ir))) {
+         if ((0, qd.$e)(Xd, 0, this.key, dd, Od, Kd, this.tailOf(Kd))) {
```

#### 172. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1909` → after: `L1909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1909) · [Before (L1909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1909)

```diff
-           Zr.length = 0, this.pjr = rr, Qr[0] = Sr[0], Qr[1] = Sr[1], Qr[2] = Sr[2]
+           Wd.length = 0, this.HXd = dd, md[0] = Od[0], md[1] = Od[1], md[2] = Od[2]
```

#### 173. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1913` → after: `L1913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1913) · [Before (L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1913)

```diff
-         (rr = Math.ceil(rr)) <= this.sx || this.vU || (this.records = (0, JS.c)(this.records, new Float32Array(rr * xS.b)), this.isDirty = (0, JS.c)(this.isDirty, new Uint8Array(rr)), this.tail = new Uint8Array(rr * Ur.cc.Bytes), this.tailView = new DataView(this.tail.buffer), th … [truncated]
+         (dd = Math.ceil(dd)) <= this.Mt || this.Aq || (this.records = (0, kO.c)(this.records, new Float32Array(dd * NO.b)), this.isDirty = (0, kO.c)(this.isDirty, new Uint8Array(dd)), this.tail = new Uint8Array(dd * qd.wc.Bytes), this.tailView = new DataView(this.tail.buffer), th … [truncated]
```

#### 174. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1916` → after: `L1916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1916) · [Before (L1916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1916)

```diff
-         this.vU || (this.vU = !0, this.host.vU(this, this.made ? this.key : null))
+         this.Aq || (this.Aq = !0, this.host.Aq(this, this.made ? this.key : null))
```

#### 175. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1925` → after: `L1925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1925) · [Before (L1925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1925)

```diff
-           this.made = (0, Ur.Oe)(rr, 0, this.key, Sr, Qr, Zr)
+           this.made = (0, qd.bf)(dd, 0, this.key, Od, md, Wd)
```

#### 176. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1930` → after: `L1930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1930) · [Before (L1930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1930)

```diff
-         const Sr = rr * Ur.cc.Bytes;
+         const Od = dd * qd.wc.Bytes;
```

#### 177. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1941-L1942` → after: `L1941-L1942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1941-L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1941-L1942) · [Before (L1941-L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1941-L1942)

```diff
-     var dS = Qr(683),
-       sS = Qr(45329);
+     var MO = md(699),
+       dm = md(45365);
```

#### 178. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1960-L1961` → after: `L1960-L1961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1960-L1961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1960-L1961) · [Before (L1960-L1961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1960-L1961)

```diff
-         return Qr = rr, dS.n.includes(Qr) ? this.add({
-           lifeform: pr.n.indexOf(rr)
+         return md = dd, MO.q.includes(md) ? this.add({
+           lifeform: Qd.h.indexOf(dd)
```

#### 179. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1987` → after: `L1987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1987) · [Before (L1987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1987)

```diff
-         this.key = rr, this.source = Sr, this.scale = Qr, this.host = Zr, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.clip = null, this.clipBytes = rQ, this.perch = null, this.owed = 1, this.vU = !1, this.sync()
+         this.key = dd, this.source = Od, this.scale = md, this.host = Wd, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.clip = null, this.clipBytes = mm, this.perch = null, this.owed = 1, this.Aq = !1, this.sync()
```

#### 180. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1990` → after: `L1990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1990) · [Before (L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1990)

```diff
-         this.vU || (this.feet[0] = rr[0], this.feet[1] = rr[1], this.feet[2] = rr[2], this.yaw = Sr, this.owed |= 2, this.sync())
+         this.Aq || (this.feet[0] = dd[0], this.feet[1] = dd[1], this.feet[2] = dd[2], this.yaw = Od, this.owed |= 2, this.sync())
```

#### 181. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1993` → after: `L1993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1993) · [Before (L1993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1993)

```diff
-         this.vU || rr === this.visible || (this.visible = rr, this.owed |= 4, this.sync())
+         this.Aq || dd === this.visible || (this.visible = dd, this.owed |= 4, this.sync())
```

#### 182. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1996` → after: `L1996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1996) · [Before (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1996)

```diff
-         this.vU || rr === this.clip || (this.clip = rr, this.clipBytes = null === rr ? rQ : uS.encode(rr), this.owed |= 16, this.sync())
+         this.Aq || dd === this.clip || (this.clip = dd, this.clipBytes = null === dd ? mm : Om.encode(dd), this.owed |= 16, this.sync())
```

#### 183. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1999` → after: `L1999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1999) · [Before (L1999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1999)

```diff
-         this.vU || (this.perch = rr, this.owed |= 32, this.sync())
+         this.Aq || (this.perch = dd, this.owed |= 32, this.sync())
```

#### 184. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2002` → after: `L2002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2002) · [Before (L2002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2002)

```diff
-         this.vU || (this.vU = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
+         this.Aq || (this.Aq = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
```

#### 185. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2006` → after: `L2006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2006) · [Before (L2006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2006)

```diff
-         return this.write(rr) ? (this.host.settled(this, this.vU), !0) : (this.host.owes(this), !1)
+         return this.write(dd) ? (this.host.settled(this, this.Aq), !0) : (this.host.owes(this), !1)
```

#### 186. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2011` → after: `L2011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2011) · [Before (L2011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2011)

```diff
-           if (!("lifeform" in this.source ? (0, Ur.We)(rr, 0, this.key, this.source.lifeform, this.scale) : (0, Ur.ne)(rr, 0, this.key, this.source.attachment, this.scale))) return !1;
+           if (!("lifeform" in this.source ? (0, qd.lf)(dd, 0, this.key, this.source.lifeform, this.scale) : (0, qd.Ie)(dd, 0, this.key, this.source.attachment, this.scale))) return !1;
```

#### 187. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2017` → after: `L2017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2017) · [Before (L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2017)

```diff
-         } = this, Zr = (2 & Sr ? Ur.Ec.Pose : 0) | (4 & Sr ? Ur.Ec.Visible : 0) | (16 & Sr ? Ur.Ec.Clip : 0) | (32 & Sr ? Ur.Ec.Perch : 0);
+         } = this, Wd = (2 & Od ? qd.Tc.Pose : 0) | (4 & Od ? qd.Tc.Visible : 0) | (16 & Od ? qd.Tc.Clip : 0) | (32 & Od ? qd.Tc.Perch : 0);
```

#### 188. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2020` → after: `L2020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2020) · [Before (L2020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2020)

```diff
-           if (!(0, Ur.Ue)(rr, 0, this.key, Zr, this.visible ? 1 : 0, Qr ? 1 : 0, this.feet, this.yaw, Qr ? this.host.serverId(Qr.hQ) : 0, null !== (Wr = null === Qr || void 0 === Qr ? void 0 : Qr.offset) && void 0 !== Wr ? Wr : SQ, null !== (ar = null === Qr || void 0 === Qr ? vo … [truncated]
+           if (!(0, qd.jf)(dd, 0, this.key, Wd, this.visible ? 1 : 0, md ? 1 : 0, this.feet, this.yaw, md ? this.host.serverId(md.qm) : 0, null !== (Fd = null === md || void 0 === md ? void 0 : md.offset) && void 0 !== Fd ? Fd : Wm, null !== (Rd = null === md || void 0 === md ? vo … [truncated]
```

#### 189. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2024` → after: `L2024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2024) · [Before (L2024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2024)

```diff
-           if (!(0, Ur.Qe)(rr, 0, this.key)) return !1;
+           if (!(0, qd.ff)(dd, 0, this.key)) return !1;
```

#### 190. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2030` → after: `L2030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2030) · [Before (L2030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2030)

```diff
-     var WQ = Qr(42862);
+     var Xm = md(42965);
```

#### 191. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2033` → after: `L2033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2033) · [Before (L2033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2033)

```diff
-       return (0, WQ.b)(), (0, Ur.Gf)(rr, Sr, Qr, Zr)
+       return (0, Xm.d)(), (0, qd.bg)(dd, Od, md, Wd)
```

#### 192. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2035-L2037` → after: `L2035-L2037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2035-L2037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2035-L2037) · [Before (L2035-L2037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2035-L2037)

```diff
-     var jQ = Qr(40710),
-       IQ = Qr(42456),
-       fQ = Qr(42876);
+     var hm = md(40732),
+       Qm = md(42555),
+       tm = md(42972);
```

#### 193. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2064` → after: `L2064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2064) · [Before (L2064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2064)

```diff
-       if (null === rr || void 0 === rr) return Ur.Nc;
+       if (null === dd || void 0 === dd) return qd.$c;
```

#### 194. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2066` → after: `L2066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2066) · [Before (L2066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2066)

```diff
-       return Number.isInteger(Sr) && Sr >= -2147483648 && Sr <= 2147483647 && String(Sr) === String(rr) ? Sr : Ur.Nc
+       return Number.isInteger(Od) && Od >= -2147483648 && Od <= 2147483647 && String(Od) === String(dd) ? Od : qd.$c
```

#### 195. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2070` → after: `L2070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2070) · [Before (L2070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2070)

```diff
-       return (0, Ur.Kf)(rr, 0, Sr, null !== Qr && void 0 !== Qr ? Qr : Number.NaN)
+       return (0, qd.ng)(dd, 0, Od, null !== md && void 0 !== md ? md : Number.NaN)
```

#### 196. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2074` → after: `L2074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2074) · [Before (L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2074)

```diff
-         this.deps = rr, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new jQ.b((() => this.tables.getClientOption … [truncated]
+         this.deps = dd, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new hm.e((() => this.tables.getClientOption … [truncated]
```

#### 197. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2081` → after: `L2081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2081) · [Before (L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2081)

```diff
-           vU: (rr, Sr) => {
+           Aq: (dd, Od) => {
```

#### 198. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2090` → after: `L2090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2090) · [Before (L2090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2090)

```diff
-         if (!this.isLocal(rr)) throw new Error(`Attempted to ${Sr} for a player that is not the local player`)
+         if (!this.isLocal(dd)) throw new Error(`Attempted to ${Od} for a player that is not the local player`)
```

#### 199. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2093-L2094` → after: `L2093-L2094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2093-L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2093-L2094) · [Before (L2093-L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2093-L2094)

```diff
-         const Sr = this.api.JY(rr);
-         if (!Sr) throw new Error(`Entity ${rr} has no replicated position`);
+         const Od = this.api.hY(dd);
+         if (!Od) throw new Error(`Entity ${dd} has no replicated position`);
```

#### 200. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2112` → after: `L2112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2112) · [Before (L2112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2112)

```diff
-         this.assertLocal(rr, "open shop"), jr.i.Jp("showShopFromServer", {
+         this.assertLocal(dd, "open shop"), Xd.j.lQ("showShopFromServer", {
```

#### 201. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2114` → after: `L2114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2114) · [Before (L2114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2114)

```diff
-           MS: Qr
+           AO: md
```

#### 202. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2123` → after: `L2123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2123) · [Before (L2123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2123)

```diff
-         jr.i.Jp("chat", {
+         Xd.j.lQ("chat", {
```

#### 203. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2132` → after: `L2132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2132) · [Before (L2132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2132)

```diff
-         return Sr === Ur.Nc ? void 0 : (0, bS.j)(this.api, Sr)
+         return Od === qd.$c ? void 0 : (0, ZO.f)(this.api, Od)
```

#### 204. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2136` → after: `L2136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2136) · [Before (L2136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2136)

```diff
-         return Qr !== Ur.Nc && (0, bS.g)(this.api, Qr, Sr)
+         return md !== qd.$c && (0, ZO.d)(this.api, md, Od)
```

#### 205. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2152-L2153` → after: `L2152-L2153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2152-L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2152-L2153) · [Before (L2152-L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2152-L2153)

```diff
-         if (!Object.hasOwn(Ur.Xc, Qr)) throw new Error(`Unknown other-entity setting ${Qr}`);
-         const Wr = Ur.Xc[Qr],
+         if (!Object.hasOwn(qd.od, md)) throw new Error(`Unknown other-entity setting ${md}`);
+         const Fd = qd.od[md],
```

#### 206. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2155` → after: `L2155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2155) · [Before (L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2155)

```diff
-         if (ar === Ur.Nc || !this.deps.beforeWrite()) return;
+         if (Rd === qd.$c || !this.deps.beforeWrite()) return;
```

#### 207. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2157` → after: `L2157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2157) · [Before (L2157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2157)

```diff
-         if (jr.length > 16384) throw new Error(`The other-entity setting ${Qr}'s value is over 16384 bytes`);
+         if (Xd.length > 16384) throw new Error(`The other-entity setting ${md}'s value is over 16384 bytes`);
```

#### 208. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2170` → after: `L2170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2170) · [Before (L2170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2170)

```diff
-         if (1 === Ur.gb.headingIsDrawn(Sr, 0)) return Ur.gb.heading(Sr, 0);
+         if (1 === qd.vb.headingIsDrawn(Od, 0)) return qd.vb.heading(Od, 0);
```

#### 209. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2172` → after: `L2172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2172) · [Before (L2172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2172)

```diff
-         return this.isLocal(rr) && 0 === (Ur.p.playerFlags(Qr, 0) & Ur.ud.FreeCam) ? Ur.p.heading(Qr, 0) : null
+         return this.isLocal(dd) && 0 === (qd.q.playerFlags(md, 0) & qd.Md.FreeCam) ? qd.q.heading(md, 0) : null
```

#### 210. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2176-L2177` → after: `L2176-L2177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2176-L2177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2176-L2177) · [Before (L2176-L2177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2176-L2177)

```diff
-           Qr = Sr ? Ur.gb.eyeHeight(Sr, 0) : 0;
-         return Qr > 0 ? Qr : null
+           md = Od ? qd.vb.eyeHeight(Od, 0) : 0;
+         return md > 0 ? md : null
```

#### 211. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2181` → after: `L2181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2181) · [Before (L2181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2181)

```diff
-         return Sr === Ur.Nc || this.api.queries.directorEntity(Sr) < Ur.gb.BYTES ? null : this.api.scratchData(Ur.gb.BYTES, "the drawn DirectorEntity")
+         return Od === qd.$c || this.api.queries.directorEntity(Od) < qd.vb.BYTES ? null : this.api.scratchData(qd.vb.BYTES, "the drawn DirectorEntity")
```

#### 212. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2185` → after: `L2185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2185) · [Before (L2185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2185)

```diff
-         return Sr !== Ur.Nc && 1 === this.api.queries.entityDrawn(Sr)
+         return Od !== qd.$c && 1 === this.api.queries.entityDrawn(Od)
```

#### 213. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2188` → after: `L2188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2188) · [Before (L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2188)

```diff
-         return fQ.g.ids()
+         return tm.f.ids()
```

#### 214. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2192` → after: `L2192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2192) · [Before (L2192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2192)

```diff
-         return null !== (Sr = (0, fQ.j)(rr)) && void 0 !== Sr ? Sr : null
+         return null !== (Od = (0, tm.i)(dd)) && void 0 !== Od ? Od : null
```

#### 215. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2195-L2198` → after: `L2195-L2198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2195-L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2195-L2198) · [Before (L2195-L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2195-L2198)

```diff
-         const rr = Ur.p.playerFlags(this.api.apiView, 0);
-         return 0 === (rr & Ur.ud.Replay) && this.api.readDrawnPosition(this.api.localId, xQ) ? {
-           onGround: 0 !== (rr & Ur.ud.OnGround),
-           jumpHeld: 0 !== (rr & Ur.ud.JumpHeld)
+         const dd = qd.q.playerFlags(this.api.apiView, 0);
+         return 0 === (dd & qd.Md.Replay) && this.api.readDrawnPosition(this.api.localId, qm) ? {
+           onGround: 0 !== (dd & qd.Md.OnGround),
+           jumpHeld: 0 !== (dd & qd.Md.JumpHeld)
```

#### 216. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2202` → after: `L2202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2202) · [Before (L2202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2202)

```diff
-         return (0, NS.z)(this.deps.localPhysicsType())
+         return (0, HO.v)(this.deps.localPhysicsType())
```

#### 217. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2204-L2205` → after: `L2204-L2205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2204-L2205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2204-L2205) · [Before (L2204-L2205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2204-L2205)

```diff
-       XQr(rr) {
-         return this.isLocal(rr) ? this.items.wI() : null
+       NWd(dd) {
+         return this.isLocal(dd) ? this.items.jK() : null
```

#### 218. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2215` → after: `L2215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2215) · [Before (L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2215)

```diff
-         return !1 === this.api.isAlive(this.api.localId) ? null : this.items.wI()
+         return !1 === this.api.isAlive(this.api.localId) ? null : this.items.jK()
```

#### 219. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2219` → after: `L2219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2219) · [Before (L2219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2219)

```diff
-         const Qr = (0, tS.c)(Zr.c.get("crosshairGameView"), Zr.c.get("crosshairShownOverride"));
+         const md = (0, bO.c)(Wd.e.get("crosshairGameView"), Wd.e.get("crosshairShownOverride"));
```

#### 220. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2224-L2226` → after: `L2224-L2226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2224-L2226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2224-L2226) · [Before (L2224-L2226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2224-L2226)

```diff
-           Ir = 0 === (Ur.p.playerFlags(this.api.apiView, 0) & Ur.ud.ZoomFirstPerson),
-           fr = null !== (Sr = this.tables.getClientOption("gunshotOrigin")) && void 0 !== Sr ? Sr : null;
-         return (0, tS.g)({
+           Kd = 0 === (qd.q.playerFlags(this.api.apiView, 0) & qd.Md.ZoomFirstPerson),
+           hd = null !== (Od = this.tables.getClientOption("gunshotOrigin")) && void 0 !== Od ? Od : null;
+         return (0, bO.j)({
```

#### 221. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2232` → after: `L2232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2232) · [Before (L2232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2232)

```diff
-         Zr.c.set({
+         Wd.e.set({
```

#### 222. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2249` → after: `L2249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2249) · [Before (L2249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2249)

```diff
-         if (this.isLocal(rr)) return 0 !== (Ur.p.playerFlags(this.api.apiView, 0) & Ur.ud.Crouching);
+         if (this.isLocal(dd)) return 0 !== (qd.q.playerFlags(this.api.apiView, 0) & qd.Md.Crouching);
```

#### 223. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2251` → after: `L2251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2251) · [Before (L2251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2251)

```diff
-         return Sr !== Ur.Nc && 1 === this.api.queries.entityCrouching(Sr)
+         return Od !== qd.$c && 1 === this.api.queries.entityCrouching(Od)
```

#### 224. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2257` → after: `L2257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2257) · [Before (L2257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2257)

```diff
-         return 0 !== (Ur.p.playerFlags(this.api.apiView, 0) & Ur.ud.AttemptingBreak)
+         return 0 !== (qd.q.playerFlags(this.api.apiView, 0) & qd.Md.AttemptingBreak)
```

#### 225. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2260` → after: `L2260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2260) · [Before (L2260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2260)

```diff
-         return this.live.xSr()
+         return this.live.nOd()
```

#### 226. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2264` → after: `L2264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2264) · [Before (L2264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2264)

```diff
-         for (let Sr = 0; Sr < 3; Sr++) NQ.origin[Sr] = Ur.p.OSr(rr, 0, Sr), NQ.direction[Sr] = Ur.p.actionDir(rr, 0, Sr);
+         for (let Od = 0; Od < 3; Od++) ym.origin[Od] = qd.q.Omd(dd, 0, Od), ym.direction[Od] = qd.q.actionDir(dd, 0, Od);
```

#### 227. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2280-L2281` → after: `L2280-L2281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2280-L2281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2280-L2281) · [Before (L2280-L2281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2280-L2281)

```diff
-       dSr(rr, Sr, Qr, Zr, Wr) {
-         return 1 === this.api.queries.terrainBlocked(Zr, rr, Sr, Qr, eQ(null !== Wr && void 0 !== Wr ? Wr : null))
+       Bmd(dd, Od, md, Wd, Fd) {
+         return 1 === this.api.queries.terrainBlocked(Wd, dd, Od, md, am(null !== Fd && void 0 !== Fd ? Fd : null))
```

#### 228. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2296` → after: `L2296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2296) · [Before (L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2296)

```diff
-         return this.chunks.aI(rr, Sr, Qr)
+         return this.chunks.XK(dd, Od, md)
```

#### 229. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2302` → after: `L2302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2302) · [Before (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2302)

```diff
-         return 1 === Zr ? jr : jr.rate(Zr)
+         return 1 === Wd ? Xd : Xd.rate(Wd)
```

#### 230. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2311-L2314` → after: `L2311-L2314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2311-L2314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2311-L2314) · [Before (L2311-L2314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2311-L2314)

```diff
-         if (!jr) return qS.e;
-         const Ir = null === Qr || void 0 === Qr ? void 0 : Qr.aZ,
-           fr = null !== (Wr = null === Qr || void 0 === Qr ? void 0 : Qr.maxHearDist) && void 0 !== Wr ? Wr : US.e,
-           Er = null !== (ar = null === Qr || void 0 === Qr ? void 0 : Qr.refDistance) && void 0 !== ar ? ar : US.h;
+         if (!Xd) return AO.d;
+         const Kd = null === md || void 0 === md ? void 0 : md.mW,
+           hd = null !== (Fd = null === md || void 0 === md ? void 0 : md.maxHearDist) && void 0 !== Fd ? Fd : yO.f,
+           vd = null !== (Rd = null === md || void 0 === md ? void 0 : md.refDistance) && void 0 !== Rd ? Rd : yO.i;
```

#### 231. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2320` → after: `L2320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2320) · [Before (L2320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2320)

```diff
-             if (!this.api.readPosition(rr, EQ)) return qS.e;
+             if (!this.api.readPosition(dd, om)) return AO.d;
```

#### 232. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2330-L2331` → after: `L2330-L2331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2330-L2331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2330-L2331) · [Before (L2330-L2331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2330-L2331)

```diff
-           if (0 === Ur.p.viewProj(rr, 0, 3) && 0 === Ur.p.viewProj(rr, 0, 7) && 0 === Ur.p.viewProj(rr, 0, 11)) return null;
-           for (let Sr = 0; Sr < 3; Sr++) pQ[Sr] = Ur.p.eye(rr, 0, Sr)
+           if (0 === qd.q.viewProj(dd, 0, 3) && 0 === qd.q.viewProj(dd, 0, 7) && 0 === qd.q.viewProj(dd, 0, 11)) return null;
+           for (let Od = 0; Od < 3; Od++) Nm[Od] = qd.q.eye(dd, 0, Od)
```

#### 233. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2333` → after: `L2333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2333) · [Before (L2333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2333)

```diff
-         return Number.isFinite(pQ[0] + pQ[1] + pQ[2]) ? pQ : null
+         return Number.isFinite(Nm[0] + Nm[1] + Nm[2]) ? Nm : null
```

#### 234. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2336` → after: `L2336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2336) · [Before (L2336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2336)

```diff
-         if (!Number.isInteger(Zr) || Zr < 0 || Zr > 65535) throw new Error(`Invalid block id ${Zr}`);
+         if (!Number.isInteger(Wd) || Wd < 0 || Wd > 65535) throw new Error(`Invalid block id ${Wd}`);
```

#### 235. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2342` → after: `L2342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2342) · [Before (L2342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2342)

```diff
-         if (1 === this.api.queries.fR(Wr, ar, jr, Zr)) {
+         if (1 === this.api.queries.nS(Fd, Rd, Xd, Wd)) {
```

#### 236. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2371` → after: `L2371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2371) · [Before (L2371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2371)

```diff
-                 look: Ur.Ob.FlatOnTop,
+                 look: qd.ec.FlatOnTop,
```

#### 237. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2374` → after: `L2374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2374) · [Before (L2374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2374)

```diff
-                 look: Ur.Ob.FlatOpaque,
+                 look: qd.ec.FlatOpaque,
```

#### 238. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2377` → after: `L2377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2377) · [Before (L2377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2377)

```diff
-                 look: Ur.Ob.Flat,
+                 look: qd.ec.Flat,
```

#### 239. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2382` → after: `L2382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2382) · [Before (L2382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2382)

```diff
-                 look: Ur.Ob.Chevrons, colour: [...(0, zS.d)(rr.colour), rr.alpha]
+                 look: qd.ec.Chevrons, colour: [...(0, pO.b)(dd.colour), dd.alpha]
```
