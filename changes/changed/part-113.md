# Changed — Bundle Modifications Report (Part 113 / 126)

- **Updated at**: `2026-11-28T08:15 JST`
- **Part**: `113 / 126` (**413** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 112](part-112.md) · [Part 114 →](part-114.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (4udp6d.2845de07 → fl4vv.bd3c59ce · continued)

- **File**: `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (152 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af)

#### 147. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2712` → after: `L2712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2712) · [Before (L2712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2712)

```diff
-       if (GR < ZR || GR > uR || JR.getUint32(0, !0) !== tR) throw new Error(`Not a version ${ZR}-${uR} replay telemetry chunk`);
+       if (Qr < jr || Qr > ar || Sr.getUint32(0, !0) !== Wr) throw new Error(`Not a version ${jr}-${ar} replay telemetry chunk`);
```

#### 148. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2742` → after: `L2742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2742) · [Before (L2742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2742)

```diff
-             renderer: null !== (vR = MR[JR.getUint8(bR + 15)]) && void 0 !== vR ? vR : "unknown",
+             renderer: null !== (Xr = Br[Sr.getUint8(lr + 15)]) && void 0 !== Xr ? Xr : "unknown",
```

#### 149. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2751` → after: `L2751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2751) · [Before (L2751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2751)

```diff
-             event: null !== (OR = BR[JR.getUint8(bR + 5)]) && void 0 !== OR ? OR : "none"
+             event: null !== (Pr = Tr[Sr.getUint8(lr + 5)]) && void 0 !== Pr ? Pr : "none"
```

#### 150. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2758` → after: `L2758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2758) · [Before (L2758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2758)

```diff
-           if (RR !== wR || !pR.inputRecorded) throw new Error(`Unknown replay telemetry record type ${RR} at byte ${bR}`);
+           if (rr !== mr || !Or.inputRecorded) throw new Error(`Unknown replay telemetry record type ${rr} at byte ${lr}`);
```

#### 151. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2764` → after: `L2764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2764) · [Before (L2764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2764)

```diff
-               code: null !== (xR = yR.d[JR.getUint8(bR + 5)]) && void 0 !== xR ? xR : yR.d[0],
+               code: null !== (Hr = Zr.b[Sr.getUint8(lr + 5)]) && void 0 !== Hr ? Hr : Zr.b[0],
```

#### 152. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2775` → after: `L2775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2775) · [Before (L2775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2775)

```diff
-   37156: RR => {
+   37500: rr => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (34 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a)

#### 1. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L4)

```diff
-   41102: (RR, JR, GR) => {
+   41466: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L8-L13` → after: `L8-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L8-L13) · [Before (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L8-L13)

```diff
-     var yR = GR(41034),
-       tR = GR(46),
-       uR = GR(41028),
-       ZR = GR(41001),
-       qR = GR(41031),
-       iR = GR(1295);
+     var Zr = Qr(41385),
+       Wr = Qr(43),
+       ar = Qr(41371),
+       jr = Qr(41355),
+       Ir = Qr(41379),
+       fr = Qr(1267);
```

#### 3. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L20-L21` → after: `L20-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L20-L21) · [Before (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L20-L21)

```diff
-         tR = (0, iR.t)(fR),
-         uR = void 0 === GR ? tR : (0, iR.l)([GR, tR]);
+         Wr = (0, fr.o)(Er),
+         ar = void 0 === Qr ? Wr : (0, fr.i)([Qr, Wr]);
```

#### 4. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L38` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L38) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L38)

```diff
-         if (!JR.ok) throw new Error(`HTTP ${JR.status}`);
+         if (!Sr.ok) throw new Error(`HTTP ${Sr.status}`);
```

#### 5. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L43-L49` → after: `L43-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L43-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L43-L49) · [Before (L43-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L43-L49)

```diff
-         return console.warn(`Session replay couldn't ask the part joiner about video segment ${JR}; uploading it from the journal.`, qR), null
-       }
-     }
-     var KR = GR(41051),
-       wR = GR(41072),
-       rR = GR(5506),
-       eR = GR(41053);
+         return console.warn(`Session replay couldn't ask the part joiner about video segment ${Sr}; uploading it from the journal.`, Ir), null
+       }
+     }
+     var xr = Qr(41405),
+       mr = Qr(41438),
+       Nr = Qr(5459),
+       Ur = Qr(41413);
```

#### 6. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L61` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L61) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L61)

```diff
-         return console.warn(`Session replay couldn't mux late ${yR} segment ${tR}; skipping it.`, qR), "refused"
+         return console.warn(`Session replay couldn't mux late ${Zr} segment ${Wr}; skipping it.`, Ir), "refused"
```

#### 7. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L73` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L73) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L73)

```diff
-         return "rejected" in qR ? (console.warn(`Session replay late ${yR} segment ${tR} refused: ${qR.reason}`), qR.retryable ? "retryLater" : "refused") : (await GR.put(qR.uploadUrl, ZR, uR, qR.ifNoneMatch), "uploaded")
+         return "rejected" in Ir ? (console.warn(`Session replay late ${Zr} segment ${Wr} refused: ${Ir.reason}`), Ir.retryable ? "retryLater" : "refused") : (await Qr.put(Ir.uploadUrl, jr, ar, Ir.ifNoneMatch), "uploaded")
```

#### 8. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L75` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L75) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L75)

```diff
-         return console.warn(`Session replay late ${yR} segment ${tR} upload failed; trying again later.`, qR), "retryLater"
+         return console.warn(`Session replay late ${Zr} segment ${Wr} upload failed; trying again later.`, Ir), "retryLater"
```

#### 9. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L81` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L81) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L81)

```diff
-         uR = (null !== (yR = GR.domSegments) && void 0 !== yR ? yR : []).filter((RR => RR.endMs <= tR));
+         ar = (null !== (Zr = Qr.domSegments) && void 0 !== Zr ? Zr : []).filter((rr => rr.endMs <= Wr));
```

#### 10. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L83` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L83) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L83)

```diff
-       for (const ZR of (0, eR.e)({
+       for (const jr of (0, Ur.c)({
```

#### 11. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L94-L98` → after: `L94-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L94-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L94-L98) · [Before (L94-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L94-L98)

```diff
-     var nR = GR(41108),
-       UR = GR(41123),
-       WR = GR(41170),
-       AR = GR(41192),
-       CR = GR(41179);
+     var zr = Qr(41470),
+       Yr = Qr(41486),
+       nr = Qr(41539),
+       er = Qr(41566),
+       Kr = Qr(41552);
```

#### 12. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L105-L106` → after: `L105-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L105-L106) · [Before (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L105-L106)

```diff
-         this.output = new nR.b({
-           format: new UR.l({
+         this.output = new zr.e({
+           format: new Yr.i({
```

#### 13. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L116-L117` → after: `L116-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L116-L117) · [Before (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L116-L117)

```diff
-           target: new WR.f
-         }), this.source = new AR.f(RR), this.output.addVideoTrack(this.source), this.pending = this.output.start()
+           target: new nr.g
+         }), this.source = new er.i(rr), this.output.addVideoTrack(this.source), this.pending = this.output.start()
```

#### 14. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L127` → after: `L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L127) · [Before (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L127)

```diff
-         const tR = new CR.c(RR, JR, (GR - this.firstTimestampUs) / 1e6, this.frameDurationS),
+         const Wr = new Kr.b(rr, Sr, (Qr - this.firstTimestampUs) / 1e6, this.frameDurationS),
```

#### 15. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L141)

```diff
-           endUs: null !== (RR = this.addingTimestampUs) && void 0 !== RR ? RR : this.lastTimestampUs + 1e6 * this.frameDurationS
+           endUs: null !== (rr = this.addingTimestampUs) && void 0 !== rr ? rr : this.lastTimestampUs + 1e6 * this.frameDurationS
```

#### 16. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L152` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L152) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L152)

```diff
-     GR(41049);
+     Qr(41403);
```

#### 17. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L193` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L193) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L193)

```diff
-       return void 0 !== tR && (null === GR || tR.partsLanded > GR.partsLanded) ? tR : GR
+       return void 0 !== Wr && (null === Qr || Wr.partsLanded > Qr.partsLanded) ? Wr : Qr
```

#### 18. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L233` → after: `L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L233) · [Before (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L233)

```diff
-                 console.warn(`Session replay's part joiner didn't answer about video segment ${fR} in time; uploading it from the journal.`, qR), JR = null
+                 console.warn(`Session replay's part joiner didn't answer about video segment ${Er} in time; uploading it from the journal.`, Ir), Sr = null
```

#### 19. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L242` → after: `L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L242) · [Before (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L242)

```diff
-         return console.warn(`Session replay couldn't read what an earlier page load left of ${JR.recordingId}; trying again later.`, nR), {
+         return console.warn(`Session replay couldn't read what an earlier page load left of ${Sr.recordingId}; trying again later.`, zr), {
```

#### 20. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L262` → after: `L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L262) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L262)

```diff
-             return null === GR ? RR : Math.max(RR, GR + 1)
+             return null === Qr ? rr : Math.max(rr, Qr + 1)
```

#### 21. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L285` → after: `L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L285) · [Before (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L285)

```diff
-                 eR = null !== (uR = null !== (ZR = null === wR || void 0 === wR ? void 0 : wR.completeUntilUs) && void 0 !== ZR ? ZR : null === KR || void 0 === KR ? void 0 : KR.completeUntilUs) && void 0 !== uR ? uR : null,
+                 Ur = null !== (ar = null !== (jr = null === mr || void 0 === mr ? void 0 : mr.completeUntilUs) && void 0 !== jr ? jr : null === xr || void 0 === xr ? void 0 : xr.completeUntilUs) && void 0 !== ar ? ar : null,
```

#### 22. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L294` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L294) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L294)

```diff
-                 }(null === eR ? VR : VR.filter((RR => RR.timestampUs >= eR))),
+                 }(null === Ur ? pr : pr.filter((rr => rr.timestampUs >= Ur))),
```

#### 23. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L319` → after: `L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L319) · [Before (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L319)

```diff
-           }), null !== (GR = JR.nextDomSequence) && void 0 !== GR ? GR : 0);
+           }), null !== (Qr = Sr.nextDomSequence) && void 0 !== Qr ? Qr : 0);
```

#### 24. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L355` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L355) · [Before (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L355)

```diff
-               yR = null !== (uR = null === GR || void 0 === GR ? void 0 : GR.sequence) && void 0 !== uR ? uR : fR.nextSequence;
+               Zr = null !== (ar = null === Qr || void 0 === Qr ? void 0 : Qr.sequence) && void 0 !== ar ? ar : Er.nextSequence;
```

#### 25. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L362` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L362) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L362)

```diff
-             console.warn(`Session replay couldn't drop what it sent of ${JR.recordingId} from its journal.`, nR)
+             console.warn(`Session replay couldn't drop what it sent of ${Sr.recordingId} from its journal.`, zr)
```

#### 26. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L475-L476` → after: `L475-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L475-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L475-L476) · [Before (L475-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L475-L476)

```diff
-     var NR = GR(41041),
-       DR = GR(41060);
+     var qr = Qr(41392),
+       Rr = Qr(41420);
```

#### 27. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L505` → after: `L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L505) · [Before (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L505)

```diff
-                     console.warn(`Session replay couldn't recover what an earlier page load left of ${yR.recordingId}; forgetting it.`, GR), tR = {
+                     console.warn(`Session replay couldn't recover what an earlier page load left of ${Zr.recordingId}; forgetting it.`, Qr), Wr = {
```

#### 28. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L517` → after: `L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L517) · [Before (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L517)

```diff
-               console.warn(`Session replay couldn't forget ${yR.recordingId}'s journal.`, GR)
+               console.warn(`Session replay couldn't forget ${Zr.recordingId}'s journal.`, Qr)
```

#### 29. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L526` → after: `L526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L526) · [Before (L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L526)

```diff
-             return new DR.c((null !== (JR = RR.endpoints) && void 0 !== JR ? JR : (0, qR.c)()).segmentUploadUrl, {
+             return new Rr.d((null !== (Sr = rr.endpoints) && void 0 !== Sr ? Sr : (0, Ir.b)()).segmentUploadUrl, {
```

#### 30. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L532` → after: `L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L532) · [Before (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L532)

```diff
-             return (0, KR.b)((null !== (GR = RR.endpoints) && void 0 !== GR ? GR : (0, qR.c)()).manifestUrl, JR)
+             return (0, xr.e)((null !== (Qr = rr.endpoints) && void 0 !== Qr ? Qr : (0, Ir.b)()).manifestUrl, Sr)
```

#### 31. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L542` → after: `L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L542) · [Before (L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L542)

```diff
-           packDom: RR => iR.pack(RR).catch((() => (0, ZR.d)(RR))),
+           packDom: rr => fr.pack(rr).catch((() => (0, jr.b)(rr))),
```

#### 32. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L547` → after: `L547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L547) · [Before (L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L547)

```diff
-             return null !== (JR = RR.lateUploadUntilMs) && void 0 !== JR ? JR : RR.expiresAtMs + yR.d
+             return null !== (Sr = rr.lateUploadUntilMs) && void 0 !== Sr ? Sr : rr.expiresAtMs + Zr.c
```

#### 33. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L553-L554` → after: `L553-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L553-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L553-L554) · [Before (L553-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L553-L554)

```diff
-       for (const yR of fR) "live" !== yR.outcome && console.info(`Session replay: ${yR.outcome} what an earlier page load left of ${yR.recordingId} (${yR.videoSegments} video, ${yR.telemetrySegments} telemetry, ${yR.domSegments} page recording).`);
-       0 === (await JR.listRecordings()).length && tR.i.removeItem(rR.m)
+       for (const Zr of Er) "live" !== Zr.outcome && console.info(`Session replay: ${Zr.outcome} what an earlier page load left of ${Zr.recordingId} (${Zr.videoSegments} video, ${Zr.telemetrySegments} telemetry, ${Zr.domSegments} page recording).`);
+       0 === (await Sr.listRecordings()).length && Wr.j.removeItem(Nr.n)
```

#### 34. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L557` → after: `L557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L557) · [Before (L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L557)

```diff
-   41175: () => {}
+   41545: () => {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/textureNameTable.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/textureNameTable.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d38a57138b5a2a0d33a7525a47df22137ae3ffec9b04af4648a7cd7a7c0c9310)

#### 1. `bundles/bloxd.io/chunks/js/textureNameTable.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d38a57138b5a2a0d33a7525a47df22137ae3ffec9b04af4648a7cd7a7c0c9310R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d38a57138b5a2a0d33a7525a47df22137ae3ffec9b04af4648a7cd7a7c0c9310) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/textureNameTable.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/textureNameTable.js#L4)

```diff
-   54714: (RR, JR, GR) => {
+   55207: (rr, Sr, Qr) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/texturePackFeed.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/texturePackFeed.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879)

#### 1. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/texturePackFeed.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/texturePackFeed.js#L4)

```diff
-   54687: (RR, JR, GR) => {
+   55183: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/texturePackFeed.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/texturePackFeed.js#L8-L10)

```diff
-     var yR = GR(1282),
-       tR = GR(46),
-       uR = GR(54680);
+     var Zr = Qr(1262),
+       Wr = Qr(43),
+       ar = Qr(55176);
```

#### 3. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L13-L14` → after: `L13-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/texturePackFeed.js#L13-L14) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/texturePackFeed.js#L13-L14)

```diff
-       const GR = new uR.c({
-         store: tR.g,
+       const Qr = new ar.e({
+         store: Wr.h,
```

#### 4. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L18` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/texturePackFeed.js#L18) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/texturePackFeed.js#L18)

```diff
-           const JR = await fetch(`${yR.clientSideServerUrls.texturePackUrl}/${RR}.json`, {
+           const Sr = await fetch(`${Zr.clientSideServerUrls.texturePackUrl}/${rr}.json`, {
```

#### 5. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/texturePackFeed.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/texturePackFeed.js#L21)

```diff
-           if (!JR.ok) throw new Error(`fetching texture pack ${RR} answered HTTP ${JR.status}`);
+           if (!Sr.ok) throw new Error(`fetching texture pack ${rr} answered HTTP ${Sr.status}`);
```

#### 6. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L25` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/texturePackFeed.js#L25) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/texturePackFeed.js#L25)

```diff
-       return (0, uR.d)(GR), GR
+       return (0, ar.g)(Qr), Qr
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/texturePackStorage.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/texturePackStorage.js` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383)

#### 1. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/texturePackStorage.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/texturePackStorage.js#L4)

```diff
-   35224: (RR, JR, GR) => {
+   35543: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/texturePackStorage.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/texturePackStorage.js#L6-L7)

```diff
-       announceStoredTexturePack: () => tR.d,
-       takeOneShotTexturePack: () => yR.k
+       announceStoredTexturePack: () => Wr.b,
+       takeOneShotTexturePack: () => Zr.h
```

#### 3. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L9-L10` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/texturePackStorage.js#L9-L10) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/texturePackStorage.js#L9-L10)

```diff
-     var yR = GR(35230),
-       tR = GR(35236)
+     var Zr = Qr(35551),
+       Wr = Qr(35559)
```

#### 4. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/texturePackStorage.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/texturePackStorage.js#L12)

```diff
-   35236: (RR, JR, GR) => {
+   35559: (rr, Sr, Qr) => {
```

#### 5. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L14-L15` → after: `L14-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/texturePackStorage.js#L14-L15) · [Before (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/texturePackStorage.js#L14-L15)

```diff
-       d: () => tR,
-       g: () => uR
+       b: () => Wr,
+       c: () => ar
```

#### 6. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/texturePackStorage.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/texturePackStorage.js#L17)

```diff
-     var yR = GR(4521);
+     var Zr = Qr(4454);
```

#### 7. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/texturePackStorage.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/texturePackStorage.js#L35)

```diff
-       return "string" === typeof JR ? JR : null
+       return "string" === typeof Sr ? Sr : null
```

#### 8. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L38` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/texturePackStorage.js#L38) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/texturePackStorage.js#L38)

```diff
-   35230: (RR, JR, GR) => {
+   35551: (rr, Sr, Qr) => {
```

#### 9. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L41-L42` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/texturePackStorage.js#L42) · [Before (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/texturePackStorage.js#L41-L42)

```diff
-       h: () => tR,
-       k: () => uR
+       h: () => ar
```

#### 10. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/texturePackStorage.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/texturePackStorage.js#L44)

```diff
-     var yR = GR(4521);
+     var Zr = Qr(4454);
```

#### 11. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/texturePackStorage.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/texturePackStorage.js#L47)

```diff
-       const uR = ZR(await RR.getItem(yR.g, JR));
+       const ar = jr(await rr.getItem(Zr.e, Sr));
```

#### 12. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/texturePackStorage.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/texturePackStorage.js#L49)

```diff
-       const qR = await RR.getItem(yR.i, JR);
+       const Ir = await rr.getItem(Zr.f, Sr);
```

#### 13. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L51` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/texturePackStorage.js#L51) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/texturePackStorage.js#L51)

```diff
-         await Promise.all([RR.removeItem(yR.g), RR.removeItem(yR.i)])
+         await Promise.all([rr.removeItem(Zr.e), rr.removeItem(Zr.f)])
```

#### 14. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L54` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/texturePackStorage.js#L54) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/texturePackStorage.js#L54)

```diff
-         source: "string" === typeof qR ? qR : null
+         source: "string" === typeof Ir ? Ir : null
```

#### 15. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/texturePackStorage.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/texturePackStorage.js#L59)

```diff
-       return (0, yR.s)() ? Promise.resolve(null) : tR(RR, !1, (RR => {
+       return (0, Zr.p)() ? Promise.resolve(null) : Wr(rr, !1, (rr => {
```

#### 16. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L61` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/texturePackStorage.js#L61) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/texturePackStorage.js#L61)

```diff
-       }), yR.s)
+       }), Zr.p)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmClientGame.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/wasmClientGame.js` (942 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b)

#### 1. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4)

```diff
-   40276: (RR, JR, GR) => {
+   40593: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6-L7)

```diff
-       c: () => uR,
-       g: () => tR
+       b: () => ar,
+       e: () => Wr
```

#### 3. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L9` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L9)

```diff
-     var yR = GR(32);
+     var Zr = Qr(34);
```

#### 4. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L16` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L16) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L16)

```diff
-       "refetchCode" !== RR ? "Plugin|MobAiPlugin|ShowPetUi" !== RR ? Promise.all([GR.e(128), GR.e(129), GR.e(118), GR.e(120), GR.e(247)]).then((() => GR(53753))).then((GR => {
+       "refetchCode" !== rr ? "Plugin|MobAiPlugin|ShowPetUi" !== rr ? Promise.all([Qr.e(128), Qr.e(129), Qr.e(118), Qr.e(120), Qr.e(248)]).then((() => Qr(54268))).then((Qr => {
```

#### 5. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L22-L23` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L22-L23) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L22-L23)

```diff
-         console.error(`Game message ${RR} failed`, JR)
-       })) : yR.n.JK("showPetUi", JR) : yR.n.JK("refetchCode")
+         console.error(`Game message ${rr} failed`, Sr)
+       })) : Zr.i.Jp("showPetUi", Sr) : Zr.i.Jp("refetchCode")
```

#### 6. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L26)

```diff
-   10234: (RR, JR, GR) => {
+   9996: (rr, Sr, Qr) => {
```

#### 7. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L28` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L28)

```diff
-       d: () => tR,
+       c: () => Wr,
```

#### 8. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L30-L31)

```diff
-       j: () => qR,
-       l: () => iR
+       i: () => Ir,
+       j: () => fr
```

#### 9. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L33` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L33) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L33)

```diff
-     var yR = GR(32);
+     var Zr = Qr(34);
```

#### 10. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L42` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L42) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L42)

```diff
-       RR !== uR && (uR = RR, yR.n.JK(tR, RR))
+       rr !== ar && (ar = rr, Zr.i.Jp(Wr, rr))
```

#### 11. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L49)

```diff
-   54582: (RR, JR, GR) => {
+   55093: (rr, Sr, Qr) => {
```

#### 12. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L51-L52` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L51-L52) · [Before (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L51-L52)

```diff
-       d: () => yR,
-       g: () => tR
+       c: () => Zr,
+       d: () => Wr
```

#### 13. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L61` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L61) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L61)

```diff
-   35067: (RR, JR, GR) => {
+   35381: (rr, Sr, Qr) => {
```

#### 14. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L63-L64` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L63-L64) · [Before (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L63-L64)

```diff
-       d: () => qR,
-       h: () => iR
+       e: () => Ir,
+       g: () => fr
```

#### 15. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L66` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L66) · [Before (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L66)

```diff
-     var yR = GR(25);
+     var Zr = Qr(26);
```

#### 16. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L73` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L73) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L73)

```diff
-       return null === (RR = yR.d.get("showDistantNametags")) || void 0 === RR || RR
+       return null === (rr = Zr.c.get("showDistantNametags")) || void 0 === rr || rr
```

#### 17. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L82)

```diff
-       }()) && void 0 !== RR ? RR : qR() ? 0 : tR
+       }()) && void 0 !== rr ? rr : Ir() ? 0 : Wr
```

#### 18. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L85` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L85) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L85)

```diff
-   54578: (RR, JR, GR) => {
+   55089: (rr, Sr, Qr) => {
```

#### 19. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L87` → after: `L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L87) · [Before (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L87)

```diff
-       blockIdOf: () => Vf.c,
+       blockIdOf: () => fE.d,
```

#### 20. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L91` → after: `L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L91) · [Before (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L91)

```diff
-       drainTextRerasters: () => Ri.e,
+       drainTextRerasters: () => uI.b,
```

#### 21. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L98-L99` → after: `L98-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L98-L99) · [Before (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L98-L99)

```diff
-       loadTextIcons: () => Ri.f,
-       rasterText: () => hq.f,
+       loadTextIcons: () => uI.e,
+       rasterText: () => sI.i,
```

#### 22. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L101-L103` → after: `L101-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L101-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L101-L103) · [Before (L101-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L101-L103)

```diff
-       readDrawCensus: () => ef.d,
-       setTextHost: () => Ri.l,
-       setTextLocalPlayer: () => Ri.m,
+       readDrawCensus: () => mE.f,
+       setTextHost: () => uI.k,
+       setTextLocalPlayer: () => uI.l,
```

#### 23. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L108-L109` → after: `L108-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L108-L109) · [Before (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L108-L109)

```diff
-       textChanged: () => Ri.q,
-       warmText: () => hq.i,
+       textChanged: () => uI.t,
+       warmText: () => sI.k,
```

#### 24. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L112-L129` → after: `L112-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L112-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L112-L129) · [Before (L112-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L112-L129)

```diff
-     GR(37667);
-     var yR = GR(25),
-       tR = GR(37927),
-       uR = GR(40448),
-       ZR = GR(32),
-       qR = GR(4708),
-       iR = GR(37923),
-       fR = GR(1383),
-       VR = GR(664),
-       KR = GR(39383),
-       wR = GR(5676),
-       rR = GR(42170),
-       eR = GR(42106);
-     const aR = eR.Eb / 4,
-       LR = eR.o.PlaySound,
-       nR = eR.o.SoundReset,
- ... (2 more removed lines; see GitHub link above)
+     Qr(38045);
+     var Zr = Qr(26),
+       Wr = Qr(38287),
+       ar = Qr(40739),
+       jr = Qr(34),
+       Ir = Qr(4637),
+       fr = Qr(38280),
+       Er = Qr(1353),
+       pr = Qr(679),
+       xr = Qr(39720),
+       mr = Qr(5610),
+       Nr = Qr(42500),
+       Ur = Qr(42438);
+     const tr = Ur.vb / 4,
+       hr = Ur.m.PlaySound,
+       zr = Ur.m.SoundReset,
+ ... (2 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L133` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L133) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L133)

```diff
-         this.core = RR, this.memory = JR, this.audio = GR, this.serverIds = new Int32Array(256).fill(eR.Uc), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.vie … [truncated]
+         this.core = rr, this.memory = Sr, this.audio = Qr, this.serverIds = new Int32Array(256).fill(Ur.Nc), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.vie … [truncated]
```

#### 26. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L138` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L138) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L138)

```diff
-         return this.scratchPtr < 0 && (this.scratchPtr = this.core.suR(), this.ensureViews()), this.scratchPtr
+         return this.scratchPtr < 0 && (this.scratchPtr = this.core.Zjr(), this.ensureViews()), this.scratchPtr
```

#### 27. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L151` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L151) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L151)

```diff
-         return eR.s.localId(this.apiView, 0)
+         return Ur.p.localId(this.apiView, 0)
```

#### 28. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L154` → after: `L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L154) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L154)

```diff
-         return eR.s.localDeaths(this.apiView, 0)
+         return Ur.p.localDeaths(this.apiView, 0)
```

#### 29. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L158-L162` → after: `L158-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L158-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L158-L162) · [Before (L158-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L158-L162)

```diff
-           JR = eR.s.entRenderPtr(RR, 0),
-           GR = eR.s.entVisPtr(RR, 0),
-           yR = eR.s.entCapacity(RR, 0);
-         if (JR !== this.renderPtr || GR !== this.visPtr || yR !== this.hK || this.renderBuffer !== this.buffer) {
-           this.renderPtr = JR, this.visPtr = GR, this.hK = yR, this.renderBuffer = this.buffer;
+           Sr = Ur.p.entRenderPtr(rr, 0),
+           Qr = Ur.p.entVisPtr(rr, 0),
+           Zr = Ur.p.entCapacity(rr, 0);
+         if (Sr !== this.renderPtr || Qr !== this.visPtr || Zr !== this.sx || this.renderBuffer !== this.buffer) {
+           this.renderPtr = Sr, this.visPtr = Qr, this.sx = Zr, this.renderBuffer = this.buffer;
```

#### 30. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L165` → after: `L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L165) · [Before (L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L165)

```diff
-           this.renderCapacity = RR && tR ? yR : 0, this.render = RR && tR ? RR : new Float32Array(0), this.vis = RR && tR ? tR : new Uint8Array(0)
+           this.renderCapacity = rr && Wr ? Zr : 0, this.render = rr && Wr ? rr : new Float32Array(0), this.vis = rr && Wr ? Wr : new Uint8Array(0)
```

#### 31. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L170` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L170) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L170)

```diff
-           return (0, rR.l)(RR, this.memory().buffer, JR, GR, yR)
+           return (0, Nr.n)(rr, this.memory().buffer, Sr, Qr, Zr)
```

#### 32. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L177` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L177) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L177)

```diff
-           return (0, rR.f)(this.memory().buffer, RR, JR, GR, yR)
+           return (0, Nr.e)(this.memory().buffer, rr, Sr, Qr, Zr)
```

#### 33. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L185` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L185) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L185)

```diff
-         return (null === yR || void 0 === yR ? void 0 : yR.buffer) === this.memory().buffer && yR.byteOffset === GR && yR.byteLength >= RR ? yR : (this.scratchView = this.memoryData(GR, RR, 8, JR), this.scratchView)
+         return (null === Zr || void 0 === Zr ? void 0 : Zr.buffer) === this.memory().buffer && Zr.byteOffset === Qr && Zr.byteLength >= rr ? Zr : (this.scratchView = this.memoryData(Qr, rr, 8, Sr), this.scratchView)
```

#### 34. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L188` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L188) · [Before (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L188)

```diff
-         this.keepCorruption(new rR.c(RR))
+         this.keepCorruption(new Nr.d(rr))
```

#### 35. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L191` → after: `L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L191) · [Before (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L191)

```diff
-         if (!(RR instanceof rR.c)) throw RR;
+         if (!(rr instanceof Nr.d)) throw rr;
```

#### 36. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L209-L210` → after: `L209-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L209-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L209-L210) · [Before (L209-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L209-L210)

```diff
-             tR = fR + wR.T;
-           if (GR === eR.o.EntitySpawned) {
+             Wr = Er + mr.Y;
+           if (Qr === Ur.m.EntitySpawned) {
```

#### 37. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L212-L216` → after: `L212-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L212-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L212-L216) · [Before (L212-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L212-L216)

```diff
-             if (yR !== eR.Hb.BYTES) throw lR(GR, fR, yR);
-             const RR = eR.Hb.serverId(uR, tR);
-             this.spawned(RR, eR.Hb.index(uR, tR), eR.Hb.kind(uR, tR)), null === (ZR = JR.entityAdded) || void 0 === ZR || ZR.call(JR, RR)
-           } else if ((GR === eR.o.ChunkSlot || GR === eR.o.EntityInfoChanged) && !(0, eR.be)(GR, uR, tR, yR, JR)) throw lR(GR, fR, yR);
-           fR = tR + (0, wR.ve)(yR)
+             if (Zr !== Ur.Ab.BYTES) throw vr(Qr, Er, Zr);
+             const rr = Ur.Ab.serverId(ar, Wr);
+             this.spawned(rr, Ur.Ab.index(ar, Wr), Ur.Ab.kind(ar, Wr)), null === (jr = Sr.entityAdded) || void 0 === jr || jr.call(Sr, rr)
+           } else if ((Qr === Ur.m.ChunkSlot || Qr === Ur.m.EntityInfoChanged) && !(0, Ur.de)(Qr, ar, Wr, Zr, Sr)) throw vr(Qr, Er, Zr);
+           Er = Wr + (0, mr.Ke)(Zr)
```

#### 38. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L222` → after: `L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L222) · [Before (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L222)

```diff
-           throw iR instanceof rR.c && (this.corruption ??= iR), iR
+           throw fr instanceof Nr.d && (this.corruption ??= fr), fr
```

#### 39. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L231-L233` → after: `L231-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L231-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L231-L233) · [Before (L231-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L231-L233)

```diff
-             uR = tR + wR.T;
-           if ((65535 & RR) === eR.o.EntityDespawned && RR >>> 16 === eR.Hb.BYTES) {
-             const RR = eR.Hb.serverId(GR, uR);
+             ar = Wr + mr.Y;
+           if ((65535 & rr) === Ur.m.EntityDespawned && rr >>> 16 === Ur.Ab.BYTES) {
+             const rr = Ur.Ab.serverId(Qr, ar);
```

#### 40. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L235` → after: `L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L235) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L235)

```diff
-             if (this.despawned(RR, eR.Hb.index(GR, uR))) null === (yR = JR.entityRemoved) || void 0 === yR || yR.call(JR, RR)
+             if (this.despawned(rr, Ur.Ab.index(Qr, ar))) null === (Zr = Sr.entityRemoved) || void 0 === Zr || Zr.call(Sr, rr)
```

#### 41. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L237` → after: `L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L237) · [Before (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L237)

```diff
-           tR = uR + (0, wR.ve)(RR >>> 16)
+           Wr = ar + (0, mr.Ke)(rr >>> 16)
```

#### 42. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L253` → after: `L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L253) · [Before (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L253)

```diff
-             gR = MR + wR.T;
+             Lr = Br + mr.Y;
```

#### 43. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L256` → after: `L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L256) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L256)

```diff
-           else if (yR === wR.X.LocalPlayerBound) {
+           else if (Zr === mr.$.LocalPlayerBound) {
```

#### 44. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L258` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L258) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L258)

```diff
-             if (pR !== wR.Gb) throw lR(yR, MR, pR);
+             if (Or !== mr.Kb) throw vr(Zr, Br, Or);
```

#### 45. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L260` → after: `L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L260) · [Before (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L260)

```diff
-           } else if (yR === wR.X.LocalHurt) {
+           } else if (Zr === mr.$.LocalHurt) {
```

#### 46. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L262` → after: `L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L262) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L262)

```diff
-             if (pR !== wR.Fb) throw lR(yR, MR, pR);
+             if (Or !== mr.Gb) throw vr(Zr, Br, Or);
```

#### 47. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L264` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L264) · [Before (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L264)

```diff
-           } else if (yR === wR.X.AttackHit) {
+           } else if (Zr === mr.$.AttackHit) {
```

#### 48. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L271-L272` → after: `L271-L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L271-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L271-L272) · [Before (L271-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L271-L272)

```diff
-             null === (VR = JR.attackHit) || void 0 === VR || VR.call(JR, RR, GR, tR, 0 !== (uR & wR.o.Crit), 0 !== (uR & wR.o.HitSelf))
-           } else if (yR === wR.X.PhysicsType) {
+             null === (pr = Sr.attackHit) || void 0 === pr || pr.call(Sr, rr, Qr, Wr, 0 !== (ar & mr.m.Crit), 0 !== (ar & mr.m.HitSelf))
+           } else if (Zr === mr.$.PhysicsType) {
```

#### 49. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L274` → after: `L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L274) · [Before (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L274)

```diff
-             if (pR !== wR.bc) throw lR(yR, MR, pR);
+             if (Or !== mr.lc) throw vr(Zr, Br, Or);
```

#### 50. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L276` → after: `L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L276) · [Before (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L276)

```diff
-           } else if (yR === wR.X.VehicleEffect) {
+           } else if (Zr === mr.$.VehicleEffect) {
```

#### 51. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L281` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L281) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L281)

```diff
-           } else if (yR === wR.X.ZoomChanged) {
+           } else if (Zr === mr.$.ZoomChanged) {
```

#### 52. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L283` → after: `L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L283) · [Before (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L283)

```diff
-             if (pR !== wR.de) throw lR(yR, MR, pR);
+             if (Or !== mr.se) throw vr(Zr, Br, Or);
```

#### 53. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L285` → after: `L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L285) · [Before (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L285)

```diff
-           } else if (yR === wR.X.ZoomDisabled) {
+           } else if (Zr === mr.$.ZoomDisabled) {
```

#### 54. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L289` → after: `L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L289) · [Before (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L289)

```diff
-           } else if (yR === wR.X.BhopDisabled) {
+           } else if (Zr === mr.$.BhopDisabled) {
```

#### 55. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L293` → after: `L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L293) · [Before (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L293)

```diff
-           } else if (yR === wR.X.GameCamera) {
+           } else if (Zr === mr.$.GameCamera) {
```

#### 56. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L296` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L296) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L296)

```diff
-           } else if (yR === eR.o.ChunkSlot || yR === eR.o.EntityInfoChanged);
+           } else if (Zr === Ur.m.ChunkSlot || Zr === Ur.m.EntityInfoChanged);
```

#### 57. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L304-L305` → after: `L304-L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L304-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L304-L305) · [Before (L304-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L304-L305)

```diff
-           } else if (yR >= eR.fd && yR <= eR.gd && yR !== wR.X.EnvLighting) {
-             if (!(0, eR.be)(yR, ZR, gR, pR, JR)) throw lR(yR, MR, pR);
+           } else if (Zr >= Ur.Yc && Zr <= Ur.Zc && Zr !== mr.$.EnvLighting) {
+             if (!(0, Ur.de)(Zr, jr, Lr, Or, Sr)) throw vr(Zr, Br, Or);
```

#### 58. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L312` → after: `L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L312) · [Before (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L312)

```diff
-           MR = gR + (0, wR.ve)(pR)
+           Br = Lr + (0, mr.Ke)(Or)
```

#### 59. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L319` → after: `L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L319) · [Before (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L319)

```diff
-         const JR = eR.s.audioViewPtr(this.apiView, 0),
+         const Sr = Ur.p.audioViewPtr(this.apiView, 0),
```

#### 60. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L322` → after: `L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L322) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L322)

```diff
-         (null === (RR = yR) || void 0 === RR ? void 0 : RR.buffer) === GR && yR.byteOffset === JR || (yR = (0, rR.f)(GR, JR, eR.u.BYTES, 8, "the audio view"), this.audioView = yR), yR && this.audio.applyListener(yR)
+         (null === (rr = Zr) || void 0 === rr ? void 0 : rr.buffer) === Qr && Zr.byteOffset === Sr || (Zr = (0, Nr.e)(Qr, Sr, Ur.t.BYTES, 8, "the audio view"), this.audioView = Zr), Zr && this.audio.applyListener(Zr)
```

#### 61. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L325` → after: `L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L325) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L325)

```diff
-         return this.indexById.get("number" === typeof RR ? RR : +RR)
+         return this.indexById.get("number" === typeof rr ? rr : +rr)
```

#### 62. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L328` → after: `L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L328) · [Before (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L328)

```diff
-         return RR !== eR.Uc && RR === eR.s.localId(this.apiView, 0)
+         return rr !== Ur.Nc && rr === Ur.p.localId(this.apiView, 0)
```

#### 63. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L332` → after: `L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L332) · [Before (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L332)

```diff
-         return this.readPosition("number" === typeof RR ? RR : +RR, JR) ? JR : null
+         return this.readPosition("number" === typeof rr ? rr : +rr, Sr) ? Sr : null
```

#### 64. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L337` → after: `L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L337) · [Before (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L337)

```diff
-           for (let RR = 0; RR < 3; RR++) JR[RR] = eR.s.localPos(GR, 0, RR);
+           for (let rr = 0; rr < 3; rr++) Sr[rr] = Ur.p.localPos(Qr, 0, rr);
```

#### 65. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L347` → after: `L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L347) · [Before (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L347)

```diff
-         for (let uR = 0; uR < 3; uR++) JR[uR] = this.render[tR + uR] + eR.s.origin(GR, 0, uR);
+         for (let ar = 0; ar < 3; ar++) Sr[ar] = this.render[Wr + ar] + Ur.p.origin(Qr, 0, ar);
```

#### 66. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L362` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L362) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L362)

```diff
-         return void 0 === JR ? this.isLocal("number" === typeof RR ? RR : +RR) ? "Player" : null : XR(this.kinds[JR])
+         return void 0 === Sr ? this.isLocal("number" === typeof rr ? rr : +rr) ? "Player" : null : yr(this.kinds[Sr])
```

#### 67. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L365` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L365) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L365)

```diff
-         if (JR >= 1048576) throw new rR.c(`entity ${RR} spawned at index ${JR}`);
+         if (Sr >= 1048576) throw new Nr.d(`entity ${rr} spawned at index ${Sr}`);
```

#### 68. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L370` → after: `L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L370) · [Before (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L370)

```diff
-         return this.indexById.get(RR) === JR && (this.indexById.delete(RR), GR = !0), JR < this.serverIds.length && this.serverIds[JR] === RR && (this.serverIds[JR] = eR.Uc, this.kinds[JR] = 0, this.idStr[JR] = null), GR
+         return this.indexById.get(rr) === Sr && (this.indexById.delete(rr), Qr = !0), Sr < this.serverIds.length && this.serverIds[Sr] === rr && (this.serverIds[Sr] = Ur.Nc, this.kinds[Sr] = 0, this.idStr[Sr] = null), Qr
```

#### 69. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L377` → after: `L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L377) · [Before (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L377)

```diff
-         const yR = new Int32Array(GR).fill(eR.Uc);
+         const Zr = new Int32Array(Qr).fill(Ur.Nc);
```

#### 70. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L389` → after: `L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L389) · [Before (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L389)

```diff
-         this.buffer = RR, this.viewPtr < 0 && (this.viewPtr = this.core.huR()), this.view = new DataView(RR, this.viewPtr, eR.s.BYTES), this.rereadDirectory()
+         this.buffer = rr, this.viewPtr < 0 && (this.viewPtr = this.core.Wjr()), this.view = new DataView(rr, this.viewPtr, Ur.p.BYTES), this.rereadDirectory()
```

#### 71. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L394` → after: `L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L394) · [Before (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L394)

```diff
-       return RR >>> eR.d === eR.q.Item
+       return rr >>> Ur.c === Ur.n.Item
```

#### 72. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L399-L405` → after: `L399-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L399-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L399-L405) · [Before (L399-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L399-L405)

```diff
-       const yR = RR & eR.e;
-       switch (RR >>> eR.d) {
-         case eR.q.Lifeform:
-           return null !== (JR = VR.k[yR]) && void 0 !== JR ? JR : null;
-         case eR.q.Throwable:
-           return null !== (GR = KR.k[yR]) && void 0 !== GR ? GR : null;
-         case eR.q.Mesh:
+       const Zr = rr & Ur.d;
+       switch (rr >>> Ur.c) {
+         case Ur.n.Lifeform:
+           return null !== (Sr = pr.n[Zr]) && void 0 !== Sr ? Sr : null;
+         case Ur.n.Throwable:
+           return null !== (Qr = xr.o[Zr]) && void 0 !== Qr ? Qr : null;
+         case Ur.n.Mesh:
```

#### 73. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L407` → after: `L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L407) · [Before (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L407)

```diff
-         case eR.q.Audio:
+         case Ur.n.Audio:
```

#### 74. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L409` → after: `L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L409) · [Before (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L409)

```diff
-         case eR.q.Item:
+         case Ur.n.Item:
```

#### 75. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L418` → after: `L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L418) · [Before (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L418)

```diff
-       if (GR < wR.Hd.HEAD_BYTES) return null;
+       if (Qr < mr.Sd.HEAD_BYTES) return null;
```

#### 76. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L422-L423` → after: `L422-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L422-L423) · [Before (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L422-L423)

```diff
-         ZR = wR.Hd.HEAD_BYTES + (0, wR.ve)(tR);
-       if (yR !== wR.Hd.UPDATE && yR !== wR.Hd.REMOVE || tR > GR || ZR + uR > GR) return null;
+         jr = mr.Sd.HEAD_BYTES + (0, mr.Ke)(Wr);
+       if (Zr !== mr.Sd.UPDATE && Zr !== mr.Sd.REMOVE || Wr > Qr || jr + ar > Qr) return null;
```

#### 77. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L430` → after: `L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L430) · [Before (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L430)

```diff
-         name: qR(wR.Hd.HEAD_BYTES, tR),
+         name: Ir(mr.Sd.HEAD_BYTES, Wr),
```

#### 78. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L436-L452` → after: `L436-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L436-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L436-L452) · [Before (L436-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L436-L452)

```diff
-       return new rR.c(`event ${RR} at ${JR} of ${GR} bytes`)
-     }
-     var pR = GR(7588),
-       gR = GR(377),
-       bR = GR(1317),
-       vR = GR(40441),
-       OR = GR(40276),
-       xR = GR(2152),
-       NR = GR(42552),
-       DR = GR(2102),
-       HR = GR(37845),
-       oR = GR(40482),
-       cR = GR(40466),
-       PR = GR(40462),
-       IR = GR(42154),
-       mR = GR(3437),
- ... (1 more removed lines; see GitHub link above)
+       return new Nr.d(`event ${rr} at ${Sr} of ${Qr} bytes`)
+     }
+     var Or = Qr(7424),
+       Lr = Qr(379),
+       lr = Qr(1279),
+       Xr = Qr(40736),
+       Pr = Qr(40593),
+       Hr = Qr(2103),
+       qr = Qr(42880),
+       Rr = Qr(2049),
+       gr = Qr(38207),
+       Cr = Qr(40781),
+       Mr = Qr(40761),
+       Gr = Qr(40748),
+       kr = Qr(42485),
+       Ar = Qr(3378),
+ ... (1 more added lines; see GitHub link above)
```

#### 79. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L455` → after: `L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L455) · [Before (L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L455)

```diff
-       if (!(0, zR.f)(RR)) return null;
+       if (!(0, Vr.e)(rr)) return null;
```

#### 80. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L457` → after: `L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L457) · [Before (L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L457)

```diff
-       return (0 | JR) === JR ? JR : null
+       return (0 | Sr) === Sr ? Sr : null
```

#### 81. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L461` → after: `L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L461) · [Before (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L461)

```diff
-         this.api = RR, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, PR.j)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.fG = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], thi … [truncated]
+         this.api = rr, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, Gr.k)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.hQ = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], thi … [truncated]
```

#### 82. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L464-L466` → after: `L464-L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L464-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L464-L466) · [Before (L464-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L464-L466)

```diff
-         this.defaultPoseRead = !1, this.fG = null;
-         const RR = this.api.queries.directorView() >= eR.tb.BYTES ? this.api.scratchData(eR.tb.BYTES, "the director's view") : null;
-         null !== RR && (this.defaultFov = (0, DR.y)(eR.tb.fov(RR, 0)), this.baseFov = (0, DR.y)(eR.tb.baseFov(RR, 0)), this.aspect = eR.tb.aspect(RR, 0), this.bodyHeading = eR.tb.bodyHeading(RR, 0))
+         this.defaultPoseRead = !1, this.hQ = null;
+         const rr = this.api.queries.directorView() >= Ur.jb.BYTES ? this.api.scratchData(Ur.jb.BYTES, "the director's view") : null;
+         null !== rr && (this.defaultFov = (0, Rr.B)(Ur.jb.fov(rr, 0)), this.baseFov = (0, Rr.B)(Ur.jb.baseFov(rr, 0)), this.aspect = Ur.jb.aspect(rr, 0), this.bodyHeading = Ur.jb.bodyHeading(rr, 0))
```

#### 83. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L475` → after: `L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L475) · [Before (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L475)

```diff
-         const RR = eR.s.localId(this.api.apiView, 0);
+         const rr = Ur.p.localId(this.api.apiView, 0);
```

#### 84. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L487-L488` → after: `L487-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L487-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L487-L488) · [Before (L487-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L487-L488)

```diff
-         const GR = eR.s.localId(this.api.apiView, 0);
-         return JR === GR && GR !== eR.Uc ? this.viewHeading : this.readEntity(RR) ? this.entityHeading : null
+         const Qr = Ur.p.localId(this.api.apiView, 0);
+         return Sr === Qr && Qr !== Ur.Nc ? this.viewHeading : this.readEntity(rr) ? this.entityHeading : null
```

#### 85. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L498` → after: `L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L498) · [Before (L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L498)

```diff
-         return yR < GR - 1e-6 ? yR : null
+         return Zr < Qr - 1e-6 ? Zr : null
```

#### 86. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L505` → after: `L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L505) · [Before (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L505)

```diff
-         const JR = this.api.queries.directorDefaultPose() >= eR.ob.BYTES ? this.api.scratchData(eR.ob.BYTES, "the director's default pose") : null;
+         const Sr = this.api.queries.directorDefaultPose() >= Ur.fb.BYTES ? this.api.scratchData(Ur.fb.BYTES, "the director's default pose") : null;
```

#### 87. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L507-L508` → after: `L507-L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L507-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L507-L508) · [Before (L507-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L507-L508)

```diff
-         for (let GR = 0; GR < 3; GR++) RR.position[GR] = eR.ob.eye(JR, 0, GR);
-         return RR.heading = eR.ob.heading(JR, 0), RR.pitch = eR.ob.pitch(JR, 0), RR
+         for (let Qr = 0; Qr < 3; Qr++) rr.position[Qr] = Ur.fb.eye(Sr, 0, Qr);
+         return rr.heading = Ur.fb.heading(Sr, 0), rr.pitch = Ur.fb.pitch(Sr, 0), rr
```

#### 88. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L522-L524` → after: `L522-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L522-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L522-L524) · [Before (L522-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L522-L524)

```diff
-         if (JR === this.fG) return this.entityLive;
-         this.fG = JR;
-         const GR = this.api.queries.directorEntity(JR) >= eR.pb.BYTES ? this.api.scratchData(eR.pb.BYTES, "the director's entity") : null;
+         if (Sr === this.hQ) return this.entityLive;
+         this.hQ = Sr;
+         const Qr = this.api.queries.directorEntity(Sr) >= Ur.gb.BYTES ? this.api.scratchData(Ur.gb.BYTES, "the director's entity") : null;
```

#### 89. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L526-L528` → after: `L526-L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L526-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L526-L528) · [Before (L526-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L526-L528)

```diff
-         for (let uR = 0; uR < 3; uR++) this.entityFeet[uR] = eR.pb.feet(GR, 0, uR), this.entityAim[uR] = this.entityFeet[uR];
-         this.entityAim[1] += eR.pb.eyeHeight(GR, 0), this.entityHeading = eR.pb.heading(GR, 0);
-         const yR = eR.pb.pitch(GR, 0);
+         for (let ar = 0; ar < 3; ar++) this.entityFeet[ar] = Ur.gb.feet(Qr, 0, ar), this.entityAim[ar] = this.entityFeet[ar];
+         this.entityAim[1] += Ur.gb.eyeHeight(Qr, 0), this.entityHeading = Ur.gb.heading(Qr, 0);
+         const Zr = Ur.gb.pitch(Qr, 0);
```

#### 90. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L530` → after: `L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L530) · [Before (L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L530)

```diff
-         const tR = eR.pb.lookHeading(GR, 0);
+         const Wr = Ur.gb.lookHeading(Qr, 0);
```

#### 91. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L547-L549` → after: `L547-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L547-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L547-L549) · [Before (L547-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L547-L549)

```diff
-         this.options = RR, this.NK = void 0, this.director = void 0, this.latest = dR, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
-           bD: 0,
-           PD: 0
+         this.options = rr, this.qx = void 0, this.director = void 0, this.latest = cr, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
+           xR: 0,
+           yR: 0
```

#### 92. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L558` → after: `L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L558) · [Before (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L558)

```diff
-         }, this.lastAnswer = eR.lb.None, this.threw = !1, this.lastCallMs = 0, this.answeredPose = !1, this.pa = new Int32Array(3 * eR.Id), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * eR.Id), this.NK = new jR(RR.api), this.director = new cR.d(this … [truncated]
+         }, this.lastAnswer = Ur.eb.None, this.threw = !1, this.lastCallMs = 0, this.answeredPose = !1, this.Uh = new Int32Array(3 * Ur.Fd), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * Ur.Fd), this.qx = new wr(rr.api), this.director = new Mr.b(this … [truncated]
```

#### 93. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L563` → after: `L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L563) · [Before (L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L563)

```diff
-           JR = (0, IR.e)(RR)
+           Sr = (0, kr.d)(rr)
```

#### 94. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L570` → after: `L570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L570) · [Before (L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L570)

```diff
-         const iR = this.answeredPose && 0 === (yR & eR.sb.Held);
+         const fr = this.answeredPose && 0 === (Zr & Ur.hb.Held);
```

#### 95. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L576` → after: `L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L576) · [Before (L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L576)

```diff
-           fR = !this.threw && this.answeredPose && !iR ? this.sendLastPose() : eR.lb.None, this.threw = !0
+           Er = !this.threw && this.answeredPose && !fr ? this.sendLastPose() : Ur.eb.None, this.threw = !0
```

#### 96. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L578` → after: `L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L578) · [Before (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L578)

```diff
-         return this.answeredPose = fR !== eR.lb.None, this.holding = this.answeredPose && !iR, null === (ZR = (qR = this.options).showFacing) || void 0 === ZR || ZR.call(qR, this.holding ? this.facing : null), fR
+         return this.answeredPose = Er !== Ur.eb.None, this.holding = this.answeredPose && !fr, null === (jr = (Ir = this.options).showFacing) || void 0 === jr || jr.call(Ir, this.holding ? this.facing : null), Er
```

#### 97. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L586` → after: `L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L586) · [Before (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L586)

```diff
-           NK: ZR
+           qx: jr
```

#### 98. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L589` → after: `L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L589) · [Before (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L589)

```diff
-         if (0 !== (yR & eR.sb.Held) || ZR.setViewHeading((0, HR.v)(ZR.bodyHeading)), void 0 !== this.pending) {
+         if (0 !== (Zr & Ur.hb.Held) || jr.setViewHeading((0, gr.q)(jr.bodyHeading)), void 0 !== this.pending) {
```

#### 99. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L593` → after: `L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L593) · [Before (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L593)

```diff
-         this.readLook((0, mR.g)(JR), (0, mR.g)(GR), yR, (0, mR.g)(tR), (0, mR.g)(uR));
+         this.readLook((0, Ar.f)(Sr), (0, Ar.f)(Qr), Zr, (0, Ar.f)(Wr), (0, Ar.f)(ar));
```

#### 100. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L595` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L595) · [Before (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L595)

```diff
-         if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !qR) return eR.lb.None;
+         if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !Ir) return Ur.eb.None;
```

#### 101. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L597` → after: `L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L597) · [Before (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L597)

```diff
-         return (0, PR.i)(qR.position, iR.position), iR.heading = (0, HR.v)(qR.heading), iR.pitch = (0, HR.h)(qR.pitch), iR.fovRadians = (0, DR.g)(qR.fov), this.lastAnswer = this.facingAnswer(), this.sendLastPose()
+         return (0, Gr.i)(Ir.position, fr.position), fr.heading = (0, gr.q)(Ir.heading), fr.pitch = (0, gr.i)(Ir.pitch), fr.fovRadians = (0, Rr.k)(Ir.fov), this.lastAnswer = this.facingAnswer(), this.sendLastPose()
```

#### 102. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L600` → after: `L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L600) · [Before (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L600)

```diff
-         if ("default" === this.director.getSettings().mode) return eR.lb.Pose;
+         if ("default" === this.director.getSettings().mode) return Ur.eb.Pose;
```

#### 103. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L603` → after: `L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L603) · [Before (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L603)

```diff
-             return eR.lb.FaceCamera;
+             return Ur.eb.FaceCamera;
```

#### 104. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L605` → after: `L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L605) · [Before (L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L605)

```diff
-             return eR.lb.FaceCursor;
+             return Ur.eb.FaceCursor;
```

#### 105. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L607` → after: `L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L607) · [Before (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L607)

```diff
-             return eR.lb.FaceMovement
+             return Ur.eb.FaceMovement
```

#### 106. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L617` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L617) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L617)

```diff
-         return 0 === this.options.api.queries.directorPose(RR[0], RR[1], RR[2], JR, GR, yR) ? eR.lb.None : this.lastAnswer
+         return 0 === this.options.api.queries.directorPose(rr[0], rr[1], rr[2], Sr, Qr, Zr) ? Ur.eb.None : this.lastAnswer
```

#### 107. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L631` → after: `L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L631) · [Before (L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L631)

```diff
-         this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new cR.d(this.NK), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, this.threw = !1, null === (RR … [truncated]
+         this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new Mr.b(this.qx), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, this.threw = !1, null === (rr … [truncated]
```

#### 108. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L637` → after: `L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L637) · [Before (L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L637)

```diff
-         const JR = (0, oR.d)(RR);
+         const Sr = (0, Cr.c)(rr);
```

#### 109. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L642-L643` → after: `L642-L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L642-L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L642-L643) · [Before (L642-L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L642-L643)

```diff
-           ZR = 0 !== (GR & eR.sb.LookPointed);
-         if (null === this.mouseTurns && !ZR) return uR.bD = 0, uR.PD = 0, void(uR.pointedAt = void 0);
+           jr = 0 !== (Qr & Ur.hb.LookPointed);
+         if (null === this.mouseTurns && !jr) return ar.xR = 0, ar.yR = 0, void(ar.pointedAt = void 0);
```

#### 110. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L647` → after: `L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L647) · [Before (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L647)

```diff
-           NK: iR
+           qx: fr
```

#### 111. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L649` → after: `L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L649) · [Before (L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L649)

```diff
-         iR.setViewHeading((0, oR.c)(iR.getViewHeading(), RR, JR, qR, "look" === this.mouseTurns, uR))
+         fr.setViewHeading((0, Cr.b)(fr.getViewHeading(), rr, Sr, Ir, "look" === this.mouseTurns, ar))
```

#### 112. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L653` → after: `L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L653) · [Before (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L653)

```diff
-           GR = Math.min(RR.length, eR.Id);
+           Qr = Math.min(rr.length, Ur.Fd);
```

#### 113. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L655` → after: `L655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L655) · [Before (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L655)

```diff
-           for (let GR = 0; GR < 3; GR++) JR[3 * yR + GR] = Math.floor(RR[yR][GR] / eR.C);
+           for (let Qr = 0; Qr < 3; Qr++) Sr[3 * Zr + Qr] = Math.floor(rr[Zr][Qr] / Ur.x);
```

#### 114. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L660` → after: `L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L660) · [Before (L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L660)

```diff
-           pa: JR,
+           Uh: Sr,
```

#### 115. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L669` → after: `L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L669) · [Before (L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L669)

```diff
-         null !== RR && (0, eR.yf)(RR, 0, this.pa, this.centresLen) && (this.centresUnsent = !1)
+         null !== rr && (0, Ur.Ef)(rr, 0, this.Uh, this.centresLen) && (this.centresUnsent = !1)
```

#### 116. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L673` → after: `L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L673) · [Before (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L673)

```diff
-         return null !== (RR = null === (JR = (GR = this.options).screen) || void 0 === JR ? void 0 : JR.call(GR)) && void 0 !== RR ? RR : ER
+         return null !== (rr = null === (Sr = (Qr = this.options).screen) || void 0 === Sr ? void 0 : Sr.call(Qr)) && void 0 !== rr ? rr : Fr
```

#### 117. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L677` → after: `L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L677) · [Before (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L677)

```diff
-         return (null !== (RR = this.options.isPageHidden) && void 0 !== RR ? RR : YR)()
+         return (null !== (rr = this.options.isPageHidden) && void 0 !== rr ? rr : or)()
```

#### 118. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L681` → after: `L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L681) · [Before (L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L681)

```diff
-         return null !== (RR = null === (JR = (GR = this.options).now) || void 0 === JR ? void 0 : JR.call(GR)) && void 0 !== RR ? RR : performance.now()
+         return null !== (rr = null === (Sr = (Qr = this.options).now) || void 0 === Sr ? void 0 : Sr.call(Qr)) && void 0 !== rr ? rr : performance.now()
```

#### 119. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L684-L688` → after: `L684-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L684-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L684-L688) · [Before (L684-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L684-L688)

```diff
-     var QR = GR(40377),
-       FR = GR(42274);
-     const TR = eR.C * eR.C * eR.C,
-       sR = Math.log2(eR.C),
-       hR = eR.C - 1,
+     var Jr = Qr(40686),
+       Dr = Qr(42593);
+     const dr = Ur.x * Ur.x * Ur.x,
+       sr = Math.log2(Ur.x),
+       ur = Ur.x - 1,
```

#### 120. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L690` → after: `L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L690) · [Before (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L690)

```diff
-       JJ = eR.P.BYTES / 4,
+       SS = Ur.M.BYTES / 4,
```

#### 121. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L694` → after: `L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L694) · [Before (L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L694)

```diff
-       return RR * eR.C * eR.C + JR * eR.C + GR
+       return rr * Ur.x * Ur.x + Sr * Ur.x + Qr
```

#### 122. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L714` → after: `L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L714) · [Before (L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L714)

```diff
-         this.table = RR, this.slot = JR, this.generation = GR, this.epoch = yR, this.Rr = new tJ(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = GJ, this.dataPtr = 0, this.dataBuffer = null, this.dataS … [truncated]
+         this.table = rr, this.slot = Sr, this.generation = Qr, this.epoch = Zr, this.ZN = new WS(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = QS, this.dataPtr = 0, this.dataBuffer = null, this.dataS … [truncated]
```

#### 123. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L721` → after: `L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L721) · [Before (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L721)

```diff
-           JR = this.layers ??= new Uint16Array(eR.C);
+           Sr = this.layers ??= new Uint16Array(Ur.x);
```

#### 124. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L778-L779` → after: `L778-L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L778-L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L778-L779) · [Before (L778-L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L778-L779)

```diff
-       const GR = RR[JR * eR.C];
-       for (let yR = 0; yR < eR.C; yR++) {
+       const Qr = rr[Sr * Ur.x];
+       for (let Zr = 0; Zr < Ur.x; Zr++) {
```

#### 125. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L781` → after: `L781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L781) · [Before (L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L781)

```diff
-         for (let JR = 0; JR < eR.C; JR++)
+         for (let Sr = 0; Sr < Ur.x; Sr++)
```

#### 126. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L796-L798` → after: `L796-L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L796-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L796-L798) · [Before (L796-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L796-L798)

```diff
-         if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, uR === eR.S.ResetAll) return this.chunks.clear(), void this.epoch++;
-         if (uR !== eR.S.Stored && uR !== eR.S.Unloaded) throw new rR.c(`ChunkSlot flags ${uR}`);
-         const ZR = (0, FR.b)(RR, JR, GR);
+         if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, ar === Ur.Q.ResetAll) return this.chunks.clear(), void this.epoch++;
+         if (ar !== Ur.Q.Stored && ar !== Ur.Q.Unloaded) throw new Nr.d(`ChunkSlot flags ${ar}`);
+         const jr = (0, Dr.d)(rr, Sr, Qr);
```

#### 127. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L800` → after: `L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L800) · [Before (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L800)

```diff
-         if (uR === eR.S.Unloaded) return void this.chunks.delete(ZR);
+         if (ar === Ur.Q.Unloaded) return void this.chunks.delete(jr);
```

#### 128. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L810-L811` → after: `L810-L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L810-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L810-L811) · [Before (L810-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L810-L811)

```diff
-           JR = eR.s.chunkSlotsPtr(RR, 0),
-           GR = eR.s.chunkSlotsLen(RR, 0);
+           Sr = Ur.p.chunkSlotsPtr(rr, 0),
+           Qr = Ur.p.chunkSlotsLen(rr, 0);
```

#### 129. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L816-L817` → after: `L816-L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L816-L817) · [Before (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L816-L817)

```diff
-           JR = eR.s.walkThroughPtr(RR, 0),
-           GR = eR.s.walkThroughLen(RR, 0);
+           Sr = Ur.p.walkThroughPtr(rr, 0),
+           Qr = Ur.p.walkThroughLen(rr, 0);
```

#### 130. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L830` → after: `L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L830) · [Before (L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L830)

```diff
-         RR !== this.slotsBuffer && (this.slotsBuffer = RR, this.slots = null !== (JR = (0, rR.l)(Uint32Array, RR, this.slotsPtr, this.slotsLen * JJ, "the chunk directory")) && void 0 !== JR ? JR : iJ);
+         rr !== this.slotsBuffer && (this.slotsBuffer = rr, this.slots = null !== (Sr = (0, Nr.n)(Uint32Array, rr, this.slotsPtr, this.slotsLen * SS, "the chunk directory")) && void 0 !== Sr ? Sr : fS);
```

#### 131. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L836` → after: `L836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L836) · [Before (L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L836)

```diff
-           return null !== (GR = (0, rR.l)(Uint16Array, RR, JR, TR, "a chunk's voxels")) && void 0 !== GR ? GR : GJ
+           return null !== (Qr = (0, Nr.n)(Uint16Array, rr, Sr, dr, "a chunk's voxels")) && void 0 !== Qr ? Qr : QS
```

#### 132. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L838` → after: `L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L838) · [Before (L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L838)

```diff
-           if (!(yR instanceof rR.c)) throw yR;
+           if (!(Zr instanceof Nr.d)) throw Zr;
```

#### 133. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L844` → after: `L844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L844) · [Before (L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L844)

```diff
-         return null !== (yR = this.chunks.get((0, FR.b)(RR, JR, GR))) && void 0 !== yR ? yR : null
+         return null !== (Zr = this.chunks.get((0, Dr.d)(rr, Sr, Qr))) && void 0 !== Zr ? Zr : null
```

#### 134. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L857` → after: `L857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L857) · [Before (L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L857)

```diff
-         return null !== (yR = qR.written(iR)) && void 0 !== yR ? yR : qR.voxelData()[iR]
+         return null !== (Zr = Ir.written(fr)) && void 0 !== Zr ? Zr : Ir.voxelData()[fr]
```

#### 135. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L866` → after: `L866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L866) · [Before (L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L866)

```diff
-         return null !== (yR = null === (tR = this.chunks.get((0, FR.b)(RR, JR, GR))) || void 0 === tR ? void 0 : tR.Ka) && void 0 !== yR ? yR : null
+         return null !== (Zr = null === (Wr = this.chunks.get((0, Dr.d)(rr, Sr, Qr))) || void 0 === Wr ? void 0 : Wr.rt) && void 0 !== Zr ? Zr : null
```

#### 136. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L869` → after: `L869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L869) · [Before (L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L869)

```diff
-         const iR = eR.C;
+         const fr = Ur.x;
```

#### 137. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L878` → after: `L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L878) · [Before (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L878)

```diff
-               const aR = this.chunks.get((0, FR.b)(tR, VR, yR));
+               const tr = this.chunks.get((0, Dr.d)(Wr, pr, Zr));
```

#### 138. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L883` → after: `L883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L883) · [Before (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L883)

```diff
-                 WR = aR.hr,
+                 nr = tr.DN,
```

#### 139. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L904` → after: `L904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L904) · [Before (L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L904)

```diff
-         (0, QR.c)(((RR, JR, GR) => {
+         (0, Jr.d)(((rr, Sr, Qr) => {
```

#### 140. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L906` → after: `L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L906) · [Before (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L906)

```diff
-           return null !== (yR = this.chunks.get((0, FR.b)(RR, JR, GR))) && void 0 !== yR ? yR : null
+           return null !== (Zr = this.chunks.get((0, Dr.d)(rr, Sr, Qr))) && void 0 !== Zr ? Zr : null
```

#### 141. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L925` → after: `L925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L925) · [Before (L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L925)

```diff
-         RR !== this.walkBuffer && (this.walkBuffer = RR, this.walk = null !== (JR = (0, rR.l)(Uint32Array, RR, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== JR ? JR : iJ);
+         rr !== this.walkBuffer && (this.walkBuffer = rr, this.walk = null !== (Sr = (0, Nr.n)(Uint32Array, rr, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== Sr ? Sr : fS);
```

#### 142. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L930` → after: `L930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L930) · [Before (L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L930)

```diff
-         const yR = (0, FR.b)(RR >> sR, JR >> sR, GR >> sR);
+         const Zr = (0, Dr.d)(rr >> sr, Sr >> sr, Qr >> sr);
```

#### 143. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L934-L941` → after: `L934-L941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L934-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L934-L941) · [Before (L934-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L934-L941)

```diff
-     var KJ = GR(39689),
-       wJ = GR(38977),
-       rJ = GR(39368),
-       eJ = GR(37534),
-       aJ = GR(37820),
-       LJ = GR(35099),
-       nJ = GR(40382),
-       UJ = GR(203);
+     var xS = Qr(40031),
+       mS = Qr(39311),
+       NS = Qr(39711),
+       US = Qr(37924),
+       tS = Qr(38191),
+       hS = Qr(35416),
+       zS = Qr(40694),
+       YS = Qr(208);
```

#### 144. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1447-L1451` → after: `L1447-L1451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1447-L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1447-L1451) · [Before (L1447-L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1447-L1451)

```diff
-     var pJ = GR(37479),
-       gJ = GR(37507),
-       bJ = GR(37528),
-       vJ = GR(37498),
-       OJ = GR(271);
+     var OS = Qr(37853),
+       LS = Qr(37884),
+       lS = Qr(37915),
+       XS = Qr(37875),
+       PS = Qr(272);
```

#### 145. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1454` → after: `L1454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1454) · [Before (L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1454)

```diff
-         let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : OJ.e;
+         let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : PS.c;
```

#### 146. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1497` → after: `L1497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1497) · [Before (L1497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1497)

```diff
-     var NJ = GR(42435);
+     var qS = Qr(42756);
```

#### 147. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1519` → after: `L1519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1519) · [Before (L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1519)

```diff
-       return 1 === GR ? JR : JR + Math.floor(yR() * GR)
+       return 1 === Qr ? Sr : Sr + Math.floor(Zr() * Qr)
```

#### 148. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1542` → after: `L1542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1542) · [Before (L1542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1542)

```diff
-       IJ = UJ.g.Kn * UJ.g.playerEyeToHeightRatio,
+       kS = YS.i.Uz * YS.i.playerEyeToHeightRatio,
```

#### 149. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1571` → after: `L1571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1571) · [Before (L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1571)

```diff
-         this.createHowl = RR, this.listener = JR, this.now = GR, this.errors = 0, this.howls = new Map, this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader =  … [truncated]
+         this.createHowl = rr, this.listener = Sr, this.now = Qr, this.errors = 0, this.howls = new Map, this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader =  … [truncated]
```

#### 150. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1581-L1582` → after: `L1581-L1582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1581-L1582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1581-L1582) · [Before (L1581-L1582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1581-L1582)

```diff
-             const fR = 0 !== (tR & eR.Sd.Loop);
-             tR & eR.Sd.TwoD ? this.start(yR, !1, ZR, uR, qR, fR, oJ(yR)) : this.startSpatial(yR, ZR, uR, qR, fR, RR, JR, GR, iR, this.earDistSq(RR, JR, GR), oJ(yR))
+             const Er = 0 !== (Wr & Ur.Td.Loop);
+             Wr & Ur.Td.TwoD ? this.start(Zr, !1, jr, ar, Ir, Er, CS(Zr)) : this.startSpatial(Zr, jr, ar, Ir, Er, rr, Sr, Qr, fr, this.earDistSq(rr, Sr, Qr), CS(Zr))
```

#### 151. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1620` → after: `L1620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1620) · [Before (L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1620)

```diff
-           if (gJ.e.has(WJ[XJ[RR]])) continue;
+           if (LS.b.has(nS[yS[rr]])) continue;
```

#### 152. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1640` → after: `L1640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1640) · [Before (L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1640)

```diff
-               of JR) this.howls.delete(RR), "loaded" === GR.state() ? (0, pJ.e)(GR) : GR.unload()
+               of Sr) this.howls.delete(rr), "loaded" === Qr.state() ? (0, OS.g)(Qr) : Qr.unload()
```

#### 153. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1644` → after: `L1644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1644) · [Before (L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1644)

```diff
-         if (RR < eR.o.PlaySound || RR > eR.o.SoundReset) return !1;
+         if (rr < Ur.m.PlaySound || rr > Ur.m.SoundReset) return !1;
```

#### 154. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1646` → after: `L1646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1646) · [Before (L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1646)

```diff
-           return (0, eR.be)(RR, JR, GR, yR, this.handlers)
+           return (0, Ur.de)(rr, Sr, Qr, Zr, this.handlers)
```

#### 155. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1653` → after: `L1653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1653) · [Before (L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1653)

```diff
-         for (let yR = 0; yR < 3; yR++) JR[2 - yR] = eR.u.listener(RR, 0, yR), JR[5 - yR] = eR.u.forward(RR, 0, yR), JR[8 - yR] = eR.u.up(RR, 0, yR);
+         for (let Zr = 0; Zr < 3; Zr++) Sr[2 - Zr] = Ur.t.listener(rr, 0, Zr), Sr[5 - Zr] = Ur.t.forward(rr, 0, Zr), Sr[8 - Zr] = Ur.t.up(rr, 0, Zr);
```

#### 156. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1667` → after: `L1667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1667) · [Before (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1667)

```diff
-         if (null === qR) return NJ.b;
+         if (null === Ir) return qS.e;
```

#### 157. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1669` → after: `L1669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1669) · [Before (L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1669)

```diff
-           fR = qR[1] > 1 ? qR : null;
+           Er = Ir[1] > 1 ? Ir : null;
```

#### 158. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1680` → after: `L1680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1680) · [Before (L1680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1680)

```diff
-         if (!Number.isFinite(VR) || !Number.isFinite(KR) || !Number.isFinite(wR)) return NJ.b;
+         if (!Number.isFinite(pr) || !Number.isFinite(xr) || !Number.isFinite(mr)) return qS.e;
```

#### 159. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1686` → after: `L1686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1686) · [Before (L1686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1686)

```diff
-           if (rR = RR * RR + JR * JR + GR * GR, rR > tR * tR) return NJ.b
+           if (Nr = rr * rr + Sr * Sr + Qr * Qr, Nr > Wr * Wr) return qS.e
```

#### 160. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1689` → after: `L1689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1689) · [Before (L1689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1689)

```diff
-         return eR ? this.gameSound(eR.howl, eR.id, !0) : NJ.b
+         return Ur ? this.gameSound(Ur.howl, Ur.id, !0) : qS.e
```

#### 161. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1716` → after: `L1716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1716) · [Before (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1716)

```diff
-             const qR = this.level > 0 ? GR / this.level : GR > 0 && null !== (uR = null === (ZR = this.live.get(JR)) || void 0 === ZR ? void 0 : ZR.rel) && void 0 !== uR ? uR : 0;
+             const Ir = this.level > 0 ? Qr / this.level : Qr > 0 && null !== (ar = null === (jr = this.live.get(Sr)) || void 0 === jr ? void 0 : jr.rel) && void 0 !== ar ? ar : 0;
```

#### 162. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1722` → after: `L1722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1722) · [Before (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1722)

```diff
-               return RR > 0 && RR < 1 / 0 ? RR : 1
+               return rr > 0 && rr < 1 / 0 ? rr : 1
```

#### 163. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1727` → after: `L1727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1727) · [Before (L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1727)

```diff
-             return (null !== (RR = null === (GR = this.live.get(JR)) || void 0 === GR ? void 0 : GR.rel) && void 0 !== RR ? RR : 0) * this.level
+             return (null !== (rr = null === (Qr = this.live.get(Sr)) || void 0 === Qr ? void 0 : Qr.rel) && void 0 !== rr ? rr : 0) * this.level
```

#### 164. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1731` → after: `L1731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1731) · [Before (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1731)

```diff
-             return null !== (RR = null === (GR = this.live.get(JR)) || void 0 === GR ? void 0 : GR.rel) && void 0 !== RR ? RR : 0
+             return null !== (rr = null === (Qr = this.live.get(Sr)) || void 0 === Qr ? void 0 : Qr.rel) && void 0 !== rr ? rr : 0
```

#### 165. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1738` → after: `L1738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1738) · [Before (L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1738)

```diff
-                 refDistance: eJ.f
+                 refDistance: US.h
```

#### 166. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1756-L1757` → after: `L1756-L1757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1756-L1757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1756-L1757) · [Before (L1756-L1757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1756-L1757)

```diff
-           const GR = XJ[RR] === zJ ? null : (0, vJ.f)(CJ[RR]),
-             yR = (0, vJ.e)(SJ(JR), Math.sqrt(fR), iR);
+           const Qr = yS[rr] === VS ? null : (0, XS.l)(KS[rr]),
+             Zr = (0, XS.h)(iS(Sr), Math.sqrt(Er), fr);
```

#### 167. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1766` → after: `L1766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1766) · [Before (L1766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1766)

```diff
-         }, rR.id), KR.pos(qR, ZR, uR, rR.id), !tR && this.posed && (0, bJ.k)() && (0, bJ.h)(WJ[XJ[RR]], CJ[RR], uR - this.pose[2], qR - this.pose[0]), rR
+         }, Nr.id), xr.pos(Ir, jr, ar, Nr.id), !Wr && this.posed && (0, lS.l)() && (0, lS.i)(nS[yS[rr]], KS[rr], ar - this.pose[2], Ir - this.pose[0]), Nr
```

#### 168. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1786` → after: `L1786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1786) · [Before (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1786)

```diff
-         const fR = iR.play(pJ.d),
+         const Er = fr.play(OS.e),
```

#### 169. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1872-L1873` → after: `L1872-L1873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1872-L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1872-L1873) · [Before (L1872-L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1872-L1873)

```diff
-     var kJ = GR(42132),
-       QJ = GR(40388);
+     var bS = Qr(42472),
+       JS = Qr(40696);
```

#### 170. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1876` → after: `L1876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1876) · [Before (L1876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1876)

```diff
-         this.key = RR, this.model = JR, this.host = yR, this.hK = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.uZR = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, … [truncated]
+         this.key = rr, this.model = Sr, this.host = Zr, this.sx = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.pjr = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, … [truncated]
```

#### 171. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1882` → after: `L1882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1882) · [Before (L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1882)

```diff
-         !this.He && RR >= 0 && RR < this.hK && RR < eR.nc.Max && this.Ja(RR, RR + 1)
+         !this.vU && rr >= 0 && rr < this.sx && rr < Ur.cc.Max && this.cU(rr, rr + 1)
```

#### 172. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1885-L1886` → after: `L1885-L1886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1885-L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1885-L1886) · [Before (L1885-L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1885-L1886)

```diff
-         if (this.He) return;
-         (RR = Math.min(Math.max(Math.floor(RR), 0), this.hK, eR.nc.Max)) > this.count && this.Ja(this.count, RR), this.count = RR;
+         if (this.vU) return;
+         (rr = Math.min(Math.max(Math.floor(rr), 0), this.sx, Ur.cc.Max)) > this.count && this.cU(this.count, rr), this.count = rr;
```

#### 173. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1891` → after: `L1891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1891) · [Before (L1891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1891)

```diff
-         } = this, tR = this.uZR !== RR, uR = GR[0] !== JR[0] || GR[1] !== JR[1] || GR[2] !== JR[2];
+         } = this, Wr = this.pjr !== rr, ar = Qr[0] !== Sr[0] || Qr[1] !== Sr[1] || Qr[2] !== Sr[2];
```

#### 174. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1902-L1904` → after: `L1902-L1904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1902-L1904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1902-L1904) · [Before (L1902-L1904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1902-L1904)

```diff
-             JR = RR * KJ.c,
-             GR = VR * eR.nc.Bytes,
-             tR = 0 !== iR[JR + KJ.f] ? eR.nc.Hidden : 0;
+             Sr = rr * xS.b,
+             Qr = pr * Ur.cc.Bytes,
+             Wr = 0 !== fr[Sr + xS.c] ? Ur.cc.Hidden : 0;
```

#### 175. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1907` → after: `L1907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1907) · [Before (L1907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1907)

```diff
-         if ((0, eR.ze)(ZR, 0, this.key, RR, JR, qR, this.tailOf(qR))) {
+         if ((0, Ur.Je)(jr, 0, this.key, rr, Sr, Ir, this.tailOf(Ir))) {
```

#### 176. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1909` → after: `L1909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1909) · [Before (L1909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1909)

```diff
-           yR.length = 0, this.uZR = RR, GR[0] = JR[0], GR[1] = JR[1], GR[2] = JR[2]
+           Zr.length = 0, this.pjr = rr, Qr[0] = Sr[0], Qr[1] = Sr[1], Qr[2] = Sr[2]
```

#### 177. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1913` → after: `L1913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1913) · [Before (L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1913)

```diff
-         (RR = Math.ceil(RR)) <= this.hK || this.He || (this.records = (0, QJ.e)(this.records, new Float32Array(RR * KJ.c)), this.isDirty = (0, QJ.e)(this.isDirty, new Uint8Array(RR)), this.tail = new Uint8Array(RR * eR.nc.Bytes), this.tailView = new DataView(this.tail.buffer), th … [truncated]
+         (rr = Math.ceil(rr)) <= this.sx || this.vU || (this.records = (0, JS.c)(this.records, new Float32Array(rr * xS.b)), this.isDirty = (0, JS.c)(this.isDirty, new Uint8Array(rr)), this.tail = new Uint8Array(rr * Ur.cc.Bytes), this.tailView = new DataView(this.tail.buffer), th … [truncated]
```

#### 178. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1916` → after: `L1916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1916) · [Before (L1916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1916)

```diff
-         this.He || (this.He = !0, this.host.He(this, this.made ? this.key : null))
+         this.vU || (this.vU = !0, this.host.vU(this, this.made ? this.key : null))
```

#### 179. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1925` → after: `L1925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1925) · [Before (L1925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1925)

```diff
-           this.made = (0, eR.Fe)(RR, 0, this.key, JR, GR, yR)
+           this.made = (0, Ur.Oe)(rr, 0, this.key, Sr, Qr, Zr)
```

#### 180. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1930` → after: `L1930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1930) · [Before (L1930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1930)

```diff
-         const JR = RR * eR.nc.Bytes;
+         const Sr = rr * Ur.cc.Bytes;
```

#### 181. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1941-L1942` → after: `L1941-L1942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1941-L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1941-L1942) · [Before (L1941-L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1941-L1942)

```diff
-     var TJ = GR(671),
-       sJ = GR(45021);
+     var dS = Qr(683),
+       sS = Qr(45329);
```

#### 182. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1960-L1961` → after: `L1960-L1961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1960-L1961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1960-L1961) · [Before (L1960-L1961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1960-L1961)

```diff
-         return GR = RR, TJ.l.includes(GR) ? this.add({
-           lifeform: VR.k.indexOf(RR)
+         return Qr = rr, dS.n.includes(Qr) ? this.add({
+           lifeform: pr.n.indexOf(rr)
```

#### 183. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1987` → after: `L1987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1987) · [Before (L1987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1987)

```diff
-         this.key = RR, this.source = JR, this.scale = GR, this.host = yR, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.clip = null, this.clipBytes = RG, this.perch = null, this.owed = 1, this.He = !1, this.sync()
+         this.key = rr, this.source = Sr, this.scale = Qr, this.host = Zr, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.clip = null, this.clipBytes = rQ, this.perch = null, this.owed = 1, this.vU = !1, this.sync()
```

#### 184. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1990` → after: `L1990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1990) · [Before (L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1990)

```diff
-         this.He || (this.feet[0] = RR[0], this.feet[1] = RR[1], this.feet[2] = RR[2], this.yaw = JR, this.owed |= 2, this.sync())
+         this.vU || (this.feet[0] = rr[0], this.feet[1] = rr[1], this.feet[2] = rr[2], this.yaw = Sr, this.owed |= 2, this.sync())
```

#### 185. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1993` → after: `L1993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1993) · [Before (L1993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1993)

```diff
-         this.He || RR === this.visible || (this.visible = RR, this.owed |= 4, this.sync())
+         this.vU || rr === this.visible || (this.visible = rr, this.owed |= 4, this.sync())
```

#### 186. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1996` → after: `L1996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1996) · [Before (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1996)

```diff
-         this.He || RR === this.clip || (this.clip = RR, this.clipBytes = null === RR ? RG : hJ.encode(RR), this.owed |= 16, this.sync())
+         this.vU || rr === this.clip || (this.clip = rr, this.clipBytes = null === rr ? rQ : uS.encode(rr), this.owed |= 16, this.sync())
```

#### 187. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1999` → after: `L1999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1999) · [Before (L1999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1999)

```diff
-         this.He || (this.perch = RR, this.owed |= 32, this.sync())
+         this.vU || (this.perch = rr, this.owed |= 32, this.sync())
```

#### 188. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2002` → after: `L2002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2002) · [Before (L2002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2002)

```diff
-         this.He || (this.He = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
+         this.vU || (this.vU = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
```

#### 189. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2006` → after: `L2006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2006) · [Before (L2006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2006)

```diff
-         return this.write(RR) ? (this.host.settled(this, this.He), !0) : (this.host.owes(this), !1)
+         return this.write(rr) ? (this.host.settled(this, this.vU), !0) : (this.host.owes(this), !1)
```

#### 190. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2011` → after: `L2011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2011) · [Before (L2011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2011)

```diff
-           if (!("lifeform" in this.source ? (0, eR.Le)(RR, 0, this.key, this.source.lifeform, this.scale) : (0, eR.je)(RR, 0, this.key, this.source.attachment, this.scale))) return !1;
+           if (!("lifeform" in this.source ? (0, Ur.We)(rr, 0, this.key, this.source.lifeform, this.scale) : (0, Ur.ne)(rr, 0, this.key, this.source.attachment, this.scale))) return !1;
```

#### 191. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2017` → after: `L2017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2017) · [Before (L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2017)

```diff
-         } = this, yR = (2 & JR ? eR.Lc.Pose : 0) | (4 & JR ? eR.Lc.Visible : 0) | (16 & JR ? eR.Lc.Clip : 0) | (32 & JR ? eR.Lc.Perch : 0);
+         } = this, Zr = (2 & Sr ? Ur.Ec.Pose : 0) | (4 & Sr ? Ur.Ec.Visible : 0) | (16 & Sr ? Ur.Ec.Clip : 0) | (32 & Sr ? Ur.Ec.Perch : 0);
```

#### 192. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2020` → after: `L2020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2020) · [Before (L2020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2020)

```diff
-           if (!(0, eR.Ie)(RR, 0, this.key, yR, this.visible ? 1 : 0, GR ? 1 : 0, this.feet, this.yaw, GR ? this.host.serverId(GR.fG) : 0, null !== (tR = null === GR || void 0 === GR ? void 0 : GR.offset) && void 0 !== tR ? tR : JG, null !== (uR = null === GR || void 0 === GR ? vo … [truncated]
+           if (!(0, Ur.Ue)(rr, 0, this.key, Zr, this.visible ? 1 : 0, Qr ? 1 : 0, this.feet, this.yaw, Qr ? this.host.serverId(Qr.hQ) : 0, null !== (Wr = null === Qr || void 0 === Qr ? void 0 : Qr.offset) && void 0 !== Wr ? Wr : SQ, null !== (ar = null === Qr || void 0 === Qr ? vo … [truncated]
```

#### 193. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2024` → after: `L2024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2024) · [Before (L2024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2024)

```diff
-           if (!(0, eR.He)(RR, 0, this.key)) return !1;
+           if (!(0, Ur.Qe)(rr, 0, this.key)) return !1;
```

#### 194. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2030` → after: `L2030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2030) · [Before (L2030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2030)

```diff
-     var tG = GR(42534);
+     var WQ = Qr(42862);
```

#### 195. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2033` → after: `L2033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2033) · [Before (L2033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2033)

```diff
-       return (0, tG.b)(), (0, eR.zf)(RR, JR, GR, yR)
+       return (0, WQ.b)(), (0, Ur.Gf)(rr, Sr, Qr, Zr)
```

#### 196. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2035-L2037` → after: `L2035-L2037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2035-L2037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2035-L2037) · [Before (L2035-L2037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2035-L2037)

```diff
-     var ZG = GR(40409),
-       qG = GR(42126),
-       iG = GR(42543);
+     var jQ = Qr(40710),
+       IQ = Qr(42456),
+       fQ = Qr(42876);
```

#### 197. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2050` → after: `L2050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2050) · [Before (L2050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2050)

```diff
-     const UG = wJ.f;
+     const YQ = mS.g;
```

#### 198. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2053-L2054` → after: `L2053-L2054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2053-L2054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2053-L2054) · [Before (L2053-L2054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2053-L2054)

```diff
-       const JR = wJ.c[RR],
-         GR = JR && wJ.f[JR.mainMultiblock];
+       const Sr = mS.d[rr],
+         Qr = Sr && mS.g[Sr.mainMultiblock];
```

#### 199. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2064` → after: `L2064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2064) · [Before (L2064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2064)

```diff
-       if (null === RR || void 0 === RR) return eR.Uc;
+       if (null === rr || void 0 === rr) return Ur.Nc;
```

#### 200. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2066` → after: `L2066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2066) · [Before (L2066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2066)

```diff
-       return Number.isInteger(JR) && JR >= -2147483648 && JR <= 2147483647 && String(JR) === String(RR) ? JR : eR.Uc
+       return Number.isInteger(Sr) && Sr >= -2147483648 && Sr <= 2147483647 && String(Sr) === String(rr) ? Sr : Ur.Nc
```

#### 201. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2070` → after: `L2070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2070) · [Before (L2070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2070)

```diff
-       return (0, eR.Ef)(RR, 0, JR, null !== GR && void 0 !== GR ? GR : Number.NaN)
+       return (0, Ur.Kf)(rr, 0, Sr, null !== Qr && void 0 !== Qr ? Qr : Number.NaN)
```

#### 202. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2074` → after: `L2074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2074) · [Before (L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2074)

```diff
-         this.deps = RR, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new ZG.d((() => this.tables.getClientOption … [truncated]
+         this.deps = rr, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new jQ.b((() => this.tables.getClientOption … [truncated]
```

#### 203. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2081` → after: `L2081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2081) · [Before (L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2081)

```diff
-           He: (RR, JR) => {
+           vU: (rr, Sr) => {
```

#### 204. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2090` → after: `L2090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2090) · [Before (L2090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2090)

```diff
-         if (!this.isLocal(RR)) throw new Error(`Attempted to ${JR} for a player that is not the local player`)
+         if (!this.isLocal(rr)) throw new Error(`Attempted to ${Sr} for a player that is not the local player`)
```

#### 205. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2093-L2094` → after: `L2093-L2094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2093-L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2093-L2094) · [Before (L2093-L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2093-L2094)

```diff
-         const JR = this.api.vW(RR);
-         if (!JR) throw new Error(`Entity ${RR} has no replicated position`);
+         const Sr = this.api.JY(rr);
+         if (!Sr) throw new Error(`Entity ${rr} has no replicated position`);
```

#### 206. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2112` → after: `L2112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2112) · [Before (L2112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2112)

```diff
-         this.assertLocal(RR, "open shop"), ZR.n.JK("showShopFromServer", {
+         this.assertLocal(rr, "open shop"), jr.i.Jp("showShopFromServer", {
```

#### 207. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2114` → after: `L2114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2114) · [Before (L2114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2114)

```diff
-           OJ: GR
+           MS: Qr
```

#### 208. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2123` → after: `L2123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2123) · [Before (L2123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2123)

```diff
-         ZR.n.JK("chat", {
+         jr.i.Jp("chat", {
```

#### 209. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2132` → after: `L2132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2132) · [Before (L2132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2132)

```diff
-         return JR === eR.Uc ? void 0 : (0, kJ.l)(this.api, JR)
+         return Sr === Ur.Nc ? void 0 : (0, bS.j)(this.api, Sr)
```

#### 210. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2136` → after: `L2136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2136) · [Before (L2136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2136)

```diff
-         return GR !== eR.Uc && (0, kJ.h)(this.api, GR, JR)
+         return Qr !== Ur.Nc && (0, bS.g)(this.api, Qr, Sr)
```

#### 211. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2145` → after: `L2145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2145) · [Before (L2145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2145)

```diff
-         if (!this.chunks.dataCleared(RR, JR, GR)) return (0, kJ.e)(this.api, RR, JR, GR)
+         if (!this.chunks.dataCleared(rr, Sr, Qr)) return (0, bS.c)(this.api, rr, Sr, Qr)
```

#### 212. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2152-L2153` → after: `L2152-L2153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2152-L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2152-L2153) · [Before (L2152-L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2152-L2153)

```diff
-         if (!Object.hasOwn(eR.dd, GR)) throw new Error(`Unknown other-entity setting ${GR}`);
-         const tR = eR.dd[GR],
+         if (!Object.hasOwn(Ur.Xc, Qr)) throw new Error(`Unknown other-entity setting ${Qr}`);
+         const Wr = Ur.Xc[Qr],
```

#### 213. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2155-L2157` → after: `L2155-L2157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2155-L2157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2155-L2157) · [Before (L2155-L2157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2155-L2157)

```diff
-         if (uR === eR.Uc || !this.deps.beforeWrite()) return;
-         const ZR = (0, IR.i)(yR);
-         if (ZR.length > 16384) throw new Error(`The other-entity setting ${GR}'s value is over 16384 bytes`);
+         if (ar === Ur.Nc || !this.deps.beforeWrite()) return;
+         const jr = (0, kr.e)(Zr);
+         if (jr.length > 16384) throw new Error(`The other-entity setting ${Qr}'s value is over 16384 bytes`);
```

#### 214. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2170` → after: `L2170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2170) · [Before (L2170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2170)

```diff
-         if (1 === eR.pb.headingIsDrawn(JR, 0)) return eR.pb.heading(JR, 0);
+         if (1 === Ur.gb.headingIsDrawn(Sr, 0)) return Ur.gb.heading(Sr, 0);
```

#### 215. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2172` → after: `L2172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2172) · [Before (L2172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2172)

```diff
-         return this.isLocal(RR) && 0 === (eR.s.playerFlags(GR, 0) & eR.xd.FreeCam) ? eR.s.heading(GR, 0) : null
+         return this.isLocal(rr) && 0 === (Ur.p.playerFlags(Qr, 0) & Ur.ud.FreeCam) ? Ur.p.heading(Qr, 0) : null
```

#### 216. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2176-L2177` → after: `L2176-L2177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2176-L2177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2176-L2177) · [Before (L2176-L2177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2176-L2177)

```diff
-           GR = JR ? eR.pb.eyeHeight(JR, 0) : 0;
-         return GR > 0 ? GR : null
+           Qr = Sr ? Ur.gb.eyeHeight(Sr, 0) : 0;
+         return Qr > 0 ? Qr : null
```

#### 217. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2181` → after: `L2181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2181) · [Before (L2181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2181)

```diff
-         return JR === eR.Uc || this.api.queries.directorEntity(JR) < eR.pb.BYTES ? null : this.api.scratchData(eR.pb.BYTES, "the drawn DirectorEntity")
+         return Sr === Ur.Nc || this.api.queries.directorEntity(Sr) < Ur.gb.BYTES ? null : this.api.scratchData(Ur.gb.BYTES, "the drawn DirectorEntity")
```

#### 218. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2185` → after: `L2185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2185) · [Before (L2185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2185)

```diff
-         return JR !== eR.Uc && 1 === this.api.queries.entityDrawn(JR)
+         return Sr !== Ur.Nc && 1 === this.api.queries.entityDrawn(Sr)
```

#### 219. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2188` → after: `L2188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2188) · [Before (L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2188)

```diff
-         return iG.f.ids()
+         return fQ.g.ids()
```

#### 220. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2192` → after: `L2192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2192) · [Before (L2192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2192)

```diff
-         return null !== (JR = (0, iG.i)(RR)) && void 0 !== JR ? JR : null
+         return null !== (Sr = (0, fQ.j)(rr)) && void 0 !== Sr ? Sr : null
```

#### 221. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2195-L2198` → after: `L2195-L2198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2195-L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2195-L2198) · [Before (L2195-L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2195-L2198)

```diff
-         const RR = eR.s.playerFlags(this.api.apiView, 0);
-         return 0 === (RR & eR.xd.Replay) && this.api.readDrawnPosition(this.api.localId, KG) ? {
-           onGround: 0 !== (RR & eR.xd.OnGround),
-           jumpHeld: 0 !== (RR & eR.xd.JumpHeld)
+         const rr = Ur.p.playerFlags(this.api.apiView, 0);
+         return 0 === (rr & Ur.ud.Replay) && this.api.readDrawnPosition(this.api.localId, xQ) ? {
+           onGround: 0 !== (rr & Ur.ud.OnGround),
+           jumpHeld: 0 !== (rr & Ur.ud.JumpHeld)
```

#### 222. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2202` → after: `L2202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2202) · [Before (L2202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2202)

```diff
-         return (0, rJ.v)(this.deps.localPhysicsType())
+         return (0, NS.z)(this.deps.localPhysicsType())
```

#### 223. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2204-L2205` → after: `L2204-L2205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2204-L2205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2204-L2205) · [Before (L2204-L2205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2204-L2205)

```diff
-       uyR(RR) {
-         return this.isLocal(RR) ? this.items.Qq() : null
+       XQr(rr) {
+         return this.isLocal(rr) ? this.items.wI() : null
```

#### 224. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2215` → after: `L2215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2215) · [Before (L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2215)

```diff
-         return !1 === this.api.isAlive(this.api.localId) ? null : this.items.Qq()
+         return !1 === this.api.isAlive(this.api.localId) ? null : this.items.wI()
```

#### 225. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2219` → after: `L2219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2219) · [Before (L2219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2219)

```diff
-         const GR = (0, aJ.e)(yR.d.get("crosshairGameView"), yR.d.get("crosshairShownOverride"));
+         const Qr = (0, tS.c)(Zr.c.get("crosshairGameView"), Zr.c.get("crosshairShownOverride"));
```

#### 226. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2224-L2226` → after: `L2224-L2226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2224-L2226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2224-L2226) · [Before (L2224-L2226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2224-L2226)

```diff
-           qR = 0 === (eR.s.playerFlags(this.api.apiView, 0) & eR.xd.ZoomFirstPerson),
-           iR = null !== (JR = this.tables.getClientOption("gunshotOrigin")) && void 0 !== JR ? JR : null;
-         return (0, aJ.h)({
+           Ir = 0 === (Ur.p.playerFlags(this.api.apiView, 0) & Ur.ud.ZoomFirstPerson),
+           fr = null !== (Sr = this.tables.getClientOption("gunshotOrigin")) && void 0 !== Sr ? Sr : null;
+         return (0, tS.g)({
```

#### 227. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2229` → after: `L2229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2229) · [Before (L2229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2229)

```diff
-         }, qR, (0, LJ.e)(), iR)
+         }, Ir, (0, hS.b)(), fr)
```

#### 228. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2232` → after: `L2232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2232) · [Before (L2232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2232)

```diff
-         yR.d.set({
+         Zr.c.set({
```

#### 229. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2249` → after: `L2249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2249) · [Before (L2249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2249)

```diff
-         if (this.isLocal(RR)) return 0 !== (eR.s.playerFlags(this.api.apiView, 0) & eR.xd.Crouching);
+         if (this.isLocal(rr)) return 0 !== (Ur.p.playerFlags(this.api.apiView, 0) & Ur.ud.Crouching);
```

#### 230. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2251` → after: `L2251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2251) · [Before (L2251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2251)

```diff
-         return JR !== eR.Uc && 1 === this.api.queries.entityCrouching(JR)
+         return Sr !== Ur.Nc && 1 === this.api.queries.entityCrouching(Sr)
```

#### 231. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2257` → after: `L2257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2257) · [Before (L2257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2257)

```diff
-         return 0 !== (eR.s.playerFlags(this.api.apiView, 0) & eR.xd.AttemptingBreak)
+         return 0 !== (Ur.p.playerFlags(this.api.apiView, 0) & Ur.ud.AttemptingBreak)
```

#### 232. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2260` → after: `L2260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2260) · [Before (L2260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2260)

```diff
-         return this.live.IJR()
+         return this.live.xSr()
```

#### 233. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2264` → after: `L2264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2264) · [Before (L2264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2264)

```diff
-         for (let JR = 0; JR < 3; JR++) rG.origin[JR] = eR.s.GGR(RR, 0, JR), rG.direction[JR] = eR.s.actionDir(RR, 0, JR);
+         for (let Sr = 0; Sr < 3; Sr++) NQ.origin[Sr] = Ur.p.OSr(rr, 0, Sr), NQ.direction[Sr] = Ur.p.actionDir(rr, 0, Sr);
```

#### 234. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2280-L2281` → after: `L2280-L2281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2280-L2281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2280-L2281) · [Before (L2280-L2281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2280-L2281)

```diff
-       pGR(RR, JR, GR, yR, tR) {
-         return 1 === this.api.queries.terrainBlocked(yR, RR, JR, GR, AG(null !== tR && void 0 !== tR ? tR : null))
+       dSr(rr, Sr, Qr, Zr, Wr) {
+         return 1 === this.api.queries.terrainBlocked(Zr, rr, Sr, Qr, eQ(null !== Wr && void 0 !== Wr ? Wr : null))
```

#### 235. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2296` → after: `L2296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2296) · [Before (L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2296)

```diff
-         return this.chunks.Vq(RR, JR, GR)
+         return this.chunks.aI(rr, Sr, Qr)
```

#### 236. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2302` → after: `L2302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2302) · [Before (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2302)

```diff
-         return 1 === yR ? ZR : ZR.rate(yR)
+         return 1 === Zr ? jr : jr.rate(Zr)
```

#### 237. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2311-L2314` → after: `L2311-L2314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2311-L2314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2311-L2314) · [Before (L2311-L2314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2311-L2314)

```diff
-         if (!ZR) return NJ.b;
-         const qR = null === GR || void 0 === GR ? void 0 : GR.TG,
-           iR = null !== (tR = null === GR || void 0 === GR ? void 0 : GR.maxHearDist) && void 0 !== tR ? tR : eJ.d,
-           fR = null !== (uR = null === GR || void 0 === GR ? void 0 : GR.refDistance) && void 0 !== uR ? uR : eJ.f;
+         if (!jr) return qS.e;
+         const Ir = null === Qr || void 0 === Qr ? void 0 : Qr.aZ,
+           fr = null !== (Wr = null === Qr || void 0 === Qr ? void 0 : Qr.maxHearDist) && void 0 !== Wr ? Wr : US.e,
+           Er = null !== (ar = null === Qr || void 0 === Qr ? void 0 : Qr.refDistance) && void 0 !== ar ? ar : US.h;
```

#### 238. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2320` → after: `L2320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2320) · [Before (L2320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2320)

```diff
-             if (!this.api.readPosition(RR, fG)) return NJ.b;
+             if (!this.api.readPosition(rr, EQ)) return qS.e;
```

#### 239. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2330-L2331` → after: `L2330-L2331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2330-L2331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2330-L2331) · [Before (L2330-L2331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2330-L2331)

```diff
-           if (0 === eR.s.viewProj(RR, 0, 3) && 0 === eR.s.viewProj(RR, 0, 7) && 0 === eR.s.viewProj(RR, 0, 11)) return null;
-           for (let JR = 0; JR < 3; JR++) VG[JR] = eR.s.eye(RR, 0, JR)
+           if (0 === Ur.p.viewProj(rr, 0, 3) && 0 === Ur.p.viewProj(rr, 0, 7) && 0 === Ur.p.viewProj(rr, 0, 11)) return null;
+           for (let Sr = 0; Sr < 3; Sr++) pQ[Sr] = Ur.p.eye(rr, 0, Sr)
```

#### 240. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2333` → after: `L2333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2333) · [Before (L2333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2333)

```diff
-         return Number.isFinite(VG[0] + VG[1] + VG[2]) ? VG : null
+         return Number.isFinite(pQ[0] + pQ[1] + pQ[2]) ? pQ : null
```

#### 241. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2336` → after: `L2336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2336) · [Before (L2336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2336)

```diff
-         if (!Number.isInteger(yR) || yR < 0 || yR > 65535) throw new Error(`Invalid block id ${yR}`);
+         if (!Number.isInteger(Zr) || Zr < 0 || Zr > 65535) throw new Error(`Invalid block id ${Zr}`);
```

#### 242. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2342` → after: `L2342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2342) · [Before (L2342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2342)

```diff
-         if (1 === this.api.queries.lD(tR, uR, ZR, yR)) {
+         if (1 === this.api.queries.fR(Wr, ar, jr, Zr)) {
```

#### 243. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2371` → after: `L2371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2371) · [Before (L2371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2371)

```diff
-                 look: eR.Yb.FlatOnTop,
+                 look: Ur.Ob.FlatOnTop,
```

#### 244. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2374` → after: `L2374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2374) · [Before (L2374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2374)

```diff
-                 look: eR.Yb.FlatOpaque,
+                 look: Ur.Ob.FlatOpaque,
```

#### 245. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2377` → after: `L2377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2377) · [Before (L2377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2377)

```diff
-                 look: eR.Yb.Flat,
+                 look: Ur.Ob.Flat,
```

#### 246. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2382` → after: `L2382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2382) · [Before (L2382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2382)

```diff
-                 look: eR.Yb.Chevrons, colour: [...(0, nJ.c)(RR.colour), RR.alpha]
+                 look: Ur.Ob.Chevrons, colour: [...(0, zS.d)(rr.colour), rr.alpha]
```

#### 247. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2386` → after: `L2386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2386) · [Before (L2386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2386)

```diff
-                 look: eR.Yb.FurnaceFire, colour: [1, 1, 1, 1]
+                 look: Ur.Ob.FurnaceFire, colour: [1, 1, 1, 1]
```

#### 248. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2398` → after: `L2398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2398) · [Before (L2398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2398)

```diff
-             const JR = null !== (qR = RR.uvs) && void 0 !== qR ? qR : [];
+             const Sr = null !== (Ir = rr.uvs) && void 0 !== Ir ? Ir : [];
```

#### 249. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2401` → after: `L2401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2401) · [Before (L2401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2401)

```diff
-               ZR.setFloat32(4 * (3 * GR + RR), null !== (iR = JR[RR]) && void 0 !== iR ? iR : 0, !0)
+               jr.setFloat32(4 * (3 * Qr + rr), null !== (fr = Sr[rr]) && void 0 !== fr ? fr : 0, !0)
```

#### 250. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2406-L2407` → after: `L2406-L2407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2406-L2407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2406-L2407) · [Before (L2406-L2407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2406-L2407)

```diff
-         }(RR, (0, KJ.h)(JR));
-         return (0, eR.se)(tR, 0, yR, uR, ZR, GR, qR, RR.indices.length, iR) && this.liveMeshes.add(yR), yR
+         }(rr, (0, xS.f)(Sr));
+         return (0, Ur.Be)(Wr, 0, Zr, ar, jr, Qr, Ir, rr.indices.length, fr) && this.liveMeshes.add(Zr), Zr
```

#### 251. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2414-L2416` → after: `L2414-L2416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2414-L2416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2414-L2416) · [Before (L2414-L2416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2414-L2416)

```diff
-         JR.anchor && (tR |= eR._b.Anchor, eG[0] = JR.anchor[0], eG[1] = JR.anchor[1], eG[2] = JR.anchor[2]), void 0 !== JR.visible && (tR |= eR._b.Visible), JR.uvOffset && (tR |= eR._b.UvOffset, aG[0] = JR.uvOffset[0], aG[1] = JR.uvOffset[1]);
-         const uR = null !== (GR = JR.visibility) && void 0 !== GR ? GR : 1;
-         void 0 !== JR.visibility && (tR |= eR._b.Visibility), JR.scale && (tR |= eR._b.Scale, LG[0] = JR.scale[0], LG[1] = JR.scale[1], LG[2] = JR.scale[2]), 0 !== tR && (0, eR.xe)(yR, 0, RR, tR, JR.visible ? 1 : 0, eG, aG, uR, LG)
+         Sr.anchor && (Wr |= Ur.Pb.Anchor, UQ[0] = Sr.anchor[0], UQ[1] = Sr.anchor[1], UQ[2] = Sr.anchor[2]), void 0 !== Sr.visible && (Wr |= Ur.Pb.Visible), Sr.uvOffset && (Wr |= Ur.Pb.UvOffset, tQ[0] = Sr.uvOffset[0], tQ[1] = Sr.uvOffset[1]);
+         const ar = null !== (Qr = Sr.visibility) && void 0 !== Qr ? Qr : 1;
+         void 0 !== Sr.visibility && (Wr |= Ur.Pb.Visibility), Sr.scale && (Wr |= Ur.Pb.Scale, hQ[0] = Sr.scale[0], hQ[1] = Sr.scale[1], hQ[2] = Sr.scale[2]), 0 !== Wr && (0, Ur.Fe)(Zr, 0, rr, Wr, Sr.visible ? 1 : 0, UQ, tQ, ar, hQ)
```

#### 252. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2420` → after: `L2420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2420) · [Before (L2420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2420)

```diff
-         JR && !(0, eR.te)(JR, 0, RR) || this.liveMeshes.delete(RR)
+         Sr && !(0, Ur.Ee)(Sr, 0, rr) || this.liveMeshes.delete(rr)
```

#### 253. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2472` → after: `L2472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2472) · [Before (L2472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2472)

```diff
-         const JR = `${RR.colour} ${RR.alpha}`;
+         const Sr = `${rr.colour} ${rr.alpha}`;
```

#### 254. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2514` → after: `L2514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2514) · [Before (L2514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2514)

```diff
-         for (; GR < RR.length && (0, eR.De)(JR, 0, RR[GR]);) GR++;
+         for (; Qr < rr.length && (0, Ur.Le)(Sr, 0, rr[Qr]);) Qr++;
```

#### 255. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2518` → after: `L2518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2518) · [Before (L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2518)

```diff
-           (yR ? (0, eR.If)(JR, 0, yR.width, yR.alpha, 1, yR.endAtSolidFace ? 1 : 0) : (0, eR.If)(JR, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
+           (Zr ? (0, Ur.Nf)(Sr, 0, Zr.width, Zr.alpha, 1, Zr.endAtSolidFace ? 1 : 0) : (0, Ur.Nf)(Sr, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
```

#### 256. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2521` → after: `L2521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2521) · [Before (L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2521)

```diff
-         void 0 !== tR && (0, eR.Cf)(JR, 0, null !== tR && void 0 !== tR ? tR : 0, null === tR ? 1 : 0) && (this.pendingFar = void 0)
+         void 0 !== Wr && (0, Ur.If)(Sr, 0, null !== Wr && void 0 !== Wr ? Wr : 0, null === Wr ? 1 : 0) && (this.pendingFar = void 0)
```

#### 257. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2526` → after: `L2526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2526) · [Before (L2526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2526)

```diff
-         GR && yR !== eR.Uc && (0, eR.Qf)(GR, 0, yR, JR)
+         Qr && Zr !== Ur.Nc && (0, Ur.Xf)(Qr, 0, Zr, Sr)
```

#### 258. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2531` → after: `L2531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2531) · [Before (L2531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2531)

```diff
-         GR && yR !== eR.Uc && CG(GR, yR, JR)
+         Qr && Zr !== Ur.Nc && KQ(Qr, Zr, Sr)
```

#### 259. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2547` → after: `L2547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2547) · [Before (L2547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2547)

```diff
-         return JR !== eR.Uc && 1 === this.api.queries.entityInteractable(JR)
+         return Sr !== Ur.Nc && 1 === this.api.queries.entityInteractable(Sr)
```

#### 260. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2560` → after: `L2560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2560) · [Before (L2560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2560)

```diff
-           return null !== RR && void 0 !== RR ? RR : null
+           return null !== rr && void 0 !== rr ? rr : null
```

#### 261. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2567` → after: `L2567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2567) · [Before (L2567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2567)

```diff
-         return wG[0] = eR.s.eye(RR, 0, 0), wG[1] = eR.s.eye(RR, 0, 1), wG[2] = eR.s.eye(RR, 0, 2), wG
+         return mQ[0] = Ur.p.eye(rr, 0, 0), mQ[1] = Ur.p.eye(rr, 0, 1), mQ[2] = Ur.p.eye(rr, 0, 2), mQ
```

#### 262. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2570` → after: `L2570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2570) · [Before (L2570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2570)

```diff
-         return eR.s.cameraFar(this.api.apiView, 0)
+         return Ur.p.cameraFar(this.api.apiView, 0)
```

#### 263. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2581` → after: `L2581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2581) · [Before (L2581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2581)

```diff
-         JR && GR !== eR.Uc && (0, eR.ge)(JR, 0, GR)
+         Sr && Qr !== Ur.Nc && (0, Ur.ie)(Sr, 0, Qr)
```

#### 264. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2586-L2588` → after: `L2586-L2588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2586-L2588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2586-L2588) · [Before (L2586-L2588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2586-L2588)

```diff
-         return null !== GR && uG(GR, 0, qG.d.Chat, (0, IR.i)((0, qG.m)({
-           LZ: RR,
-           nZ: JR
+         return null !== Qr && aQ(Qr, 0, IQ.b.Chat, (0, kr.e)((0, IQ.h)({
+           xj: rr,
+           mj: Sr
```

#### 265. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2592` → after: `L2592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2592) · [Before (L2592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2592)

```diff
-         RR.length <= 119 && this.sendChat(`/${RR}`)
+         rr.length <= 119 && this.sendChat(`/${rr}`)
```

#### 266. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2600` → after: `L2600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2600) · [Before (L2600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2600)

```diff
-           qR = tR.Vq(RR, JR, GR),
+           Ir = Wr.aI(rr, Sr, Qr),
```

#### 267. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2603-L2604` → after: `L2603-L2604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2603-L2604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2603-L2604) · [Before (L2603-L2604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2603-L2604)

```diff
-           const [yR, uR, fR] = [RR - iR.x, JR - iR.y, GR - iR.z], VR = UG[tR.Vq(yR, uR, fR)], KR = null === VR || void 0 === VR ? void 0 : VR.positions.some((RR => RR.id === qR && RR.x === iR.x && RR.y === iR.y && RR.z === iR.z));
-           for (const RR of (KR && VR ? VR : iR.main).positions) tR.Vq(yR + RR.x, uR + RR.y, fR + RR.z) === RR.id && ZR(yR + RR.x, uR + RR.y, fR + RR.z, 0, RR.id)
+           const [Zr, ar, Er] = [rr - fr.x, Sr - fr.y, Qr - fr.z], pr = YQ[Wr.aI(Zr, ar, Er)], xr = null === pr || void 0 === pr ? void 0 : pr.positions.some((rr => rr.id === Ir && rr.x === fr.x && rr.y === fr.y && rr.z === fr.z));
+           for (const rr of (xr && pr ? pr : fr.main).positions) Wr.aI(Zr + rr.x, ar + rr.y, Er + rr.z) === rr.id && jr(Zr + rr.x, ar + rr.y, Er + rr.z, 0, rr.id)
```

#### 268. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2610` → after: `L2610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2610) · [Before (L2610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2610)

```diff
-             ZR(yR, uR, qR, KR.id, tR.Vq(yR, uR, qR))
+             jr(Zr, ar, Ir, xr.id, Wr.aI(Zr, ar, Ir))
```

#### 269. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2614` → after: `L2614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2614) · [Before (L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2614)

```diff
-           let iR = tR.Vq(RR, JR + 1, GR);
+           let fr = Wr.aI(rr, Sr + 1, Qr);
```

#### 270. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2626` → after: `L2626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2626) · [Before (L2626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2626)

```diff
-         return 0 !== tR && 0 !== uR && yR.blockRootId(RR) === yR.blockRootId(JR) ? ZR && GR !== uR ? uR : void 0 : 0 === uR || !ZR && 0 !== GR ? ZR ? 0 : void 0 : uR
+         return 0 !== Wr && 0 !== ar && Zr.blockRootId(rr) === Zr.blockRootId(Sr) ? jr && Qr !== ar ? ar : void 0 : 0 === ar || !jr && 0 !== Qr ? jr ? 0 : void 0 : ar
```

#### 271. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2629` → after: `L2629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2629) · [Before (L2629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2629)

```diff
-     const MG = eR.gc + eR.jc * eR.rc.BYTES,
+     const BQ = Ur.Xb + Ur._b * Ur.gc.BYTES,
```

#### 272. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2634-L2635` → after: `L2634-L2635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2634-L2635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2634-L2635) · [Before (L2634-L2635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2634-L2635)

```diff
-         Uq: 0,
-         RK: null,
+         NI: 0,
+         bp: null,
```

#### 273. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2639` → after: `L2639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2639) · [Before (L2639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2639)

```diff
-         get: () => () => eR.cd
+         get: () => () => Ur.Wc
```

#### 274. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2651` → after: `L2651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2651) · [Before (L2651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2651)

```diff
-         this.deps = RR, this.Ft = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(eR.jc), this.ids = new Uint16Array(eR.jc), this.amounts = new Uint16Array(eR.jc), this.attrRead = new Float64Array(eR.jc).fill(-1 … [truncated]
+         this.deps = rr, this.cW = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(Ur._b), this.ids = new Uint16Array(Ur._b), this.amounts = new Uint16Array(Ur._b), this.attrRead = new Float64Array(Ur._b).fill(-1 … [truncated]
```

#### 275. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2667` → after: `L2667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2667) · [Before (L2667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2667)

```diff
-         return Number.isInteger(RR) && RR >= 0 && RR < this.len && 0 !== this.ids[RR] && null !== (JR = this.facades[RR]) && void 0 !== JR ? JR : null
+         return Number.isInteger(rr) && rr >= 0 && rr < this.len && 0 !== this.ids[rr] && null !== (Sr = this.facades[rr]) && void 0 !== Sr ? Sr : null
```

#### 276. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2674` → after: `L2674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2674) · [Before (L2674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2674)

```diff
-         for (let JR = 0; JR < Math.min(eR.jd, this.len); JR++) RR.push(this.slot(JR));
+         for (let Sr = 0; Sr < Math.min(Ur.bd, this.len); Sr++) rr.push(this.slot(Sr));
```

#### 277. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2679` → after: `L2679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2679) · [Before (L2679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2679)

```diff
-         for (let JR = 0; JR < Math.min(eR.jd - eR.h, this.len); JR++) 0 === this.ids[JR] && RR++;
+         for (let Sr = 0; Sr < Math.min(Ur.bd - Ur.f, this.len); Sr++) 0 === this.ids[Sr] && rr++;
```

#### 278. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2684` → after: `L2684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2684) · [Before (L2684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2684)

```diff
-         for (let yR = 0; yR < Math.min(eR.jd, this.len); yR++) {
+         for (let Zr = 0; Zr < Math.min(Ur.bd, this.len); Zr++) {
```

#### 279. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2687` → after: `L2687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2687) · [Before (L2687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2687)

```diff
-           if ((null === tR || void 0 === tR ? void 0 : tR.name) === RR) JR += null !== (GR = tR.amount) && void 0 !== GR ? GR : 1
+           if ((null === Wr || void 0 === Wr ? void 0 : Wr.name) === rr) Sr += null !== (Qr = Wr.amount) && void 0 !== Qr ? Qr : 1
```

#### 280. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2693` → after: `L2693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2693) · [Before (L2693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2693)

```diff
-         return null !== (JR = this.instances[RR]) && void 0 !== JR ? JR : 0
+         return null !== (Sr = this.instances[rr]) && void 0 !== Sr ? Sr : 0
```

#### 281. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2714` → after: `L2714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2714) · [Before (L2714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2714)

```diff
-         this.Ft[0] = RR, this.Ft[1] = JR, this.Ft[2] = GR, this.version++
+         this.cW[0] = rr, this.cW[1] = Sr, this.cW[2] = Qr, this.version++
```

#### 282. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2718-L2720` → after: `L2718-L2720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2718-L2720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2718-L2720) · [Before (L2718-L2720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2718-L2720)

```diff
-           JR = eR.s.inventoryViewPtr(RR, 0),
-           GR = eR.s.inventoryVersion(RR, 0),
-           yR = eR.s.selectedSlot(RR, 0);
+           Sr = Ur.p.inventoryViewPtr(rr, 0),
+           Qr = Ur.p.inventoryVersion(rr, 0),
+           Zr = Ur.p.selectedSlot(rr, 0);
```

#### 283. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2722` → after: `L2722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2722) · [Before (L2722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2722)

```diff
-         const tR = eR.s.slotIcon(RR, 0);
+         const Wr = Ur.p.slotIcon(rr, 0);
```

#### 284. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2726` → after: `L2726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2726) · [Before (L2726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2726)

```diff
-           ZR = uR ? Math.min(uR.getUint32(0, !0), eR.jc) : 0;
+           jr = ar ? Math.min(ar.getUint32(0, !0), Ur._b) : 0;
```

#### 285. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2729-L2731` → after: `L2729-L2731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2729-L2731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2729-L2731) · [Before (L2729-L2731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2729-L2731)

```diff
-         for (let iR = 0; iR < eR.jc; iR++) {
-           const RR = eR.gc + iR * eR.rc.BYTES,
-             JR = null !== uR && iR < ZR ? eR.rc.item(uR, RR) : 0;
+         for (let fr = 0; fr < Ur._b; fr++) {
+           const rr = Ur.Xb + fr * Ur.gc.BYTES,
+             Sr = null !== ar && fr < jr ? Ur.gc.item(ar, rr) : 0;
```

#### 286. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2736-L2737` → after: `L2736-L2737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2736-L2737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2736-L2737) · [Before (L2736-L2737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2736-L2737)

```diff
-           const GR = eR.rc.amount(uR, RR),
-             yR = eR.rc.attrVersion(uR, RR);
+           const Qr = Ur.gc.amount(ar, rr),
+             Zr = Ur.gc.attrVersion(ar, rr);
```

#### 287. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2773` → after: `L2773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2773) · [Before (L2773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2773)

```diff
-           iR += 8 + (0, wR.ve)(JR);
+           fr += 8 + (0, mr.Ke)(Sr);
```

#### 288. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2799-L2800` → after: `L2799-L2800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2799-L2800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2799-L2800) · [Before (L2799-L2800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2799-L2800)

```diff
-           qR = ZR === eR.cd ? eR.Gb : null !== (tR = null === (uR = this.extras()) || void 0 === uR ? void 0 : uR[1]) && void 0 !== tR ? tR : eR.Gb;
-         return this.settle(ZR), qR === eR.Gb ? null : qR
+           Ir = jr === Ur.Wc ? Ur.zb : null !== (Wr = null === (ar = this.extras()) || void 0 === ar ? void 0 : ar[1]) && void 0 !== Wr ? Wr : Ur.zb;
+         return this.settle(jr), Ir === Ur.zb ? null : Ir
```

#### 289. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2827` → after: `L2827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2827) · [Before (L2827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2827)

```diff
-         const qR = uR === eR.cd ? null : this.extras();
+         const Ir = ar === Ur.Wc ? null : this.extras();
```

#### 290. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2831-L2832` → after: `L2831-L2832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2831-L2832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2831-L2832) · [Before (L2831-L2832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2831-L2832)

```diff
-             Uq: RR,
-             RK: JR === eR.Gb ? null : JR,
+             NI: rr,
+             bp: Sr === Ur.zb ? null : Sr,
```

#### 291. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2855` → after: `L2855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2855) · [Before (L2855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2855)

```diff
-           if (ZR.length > 1024) return uR(new Error(`The crafting station ${RR}'s name is over 1024 bytes`)), null;
+           if (jr.length > 1024) return ar(new Error(`The crafting station ${rr}'s name is over 1024 bytes`)), null;
```

#### 292. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2861-L2862` → after: `L2861-L2862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2861-L2862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2861-L2862) · [Before (L2861-L2862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2861-L2862)

```diff
-           iR = tR.queries.craftingView(null !== (yR = null === ZR || void 0 === ZR ? void 0 : ZR.length) && void 0 !== yR ? yR : 0, qR ? JR : 0, qR ? GR : 0);
-         return iR < eR.kb.BYTES ? (tR.reportCorruption(`crafting_view's answer of ${iR} bytes`), null) : tR.memoryData(tR.scratch(), iR, 1, "crafting_view's answer")
+           fr = Wr.queries.craftingView(null !== (Zr = null === jr || void 0 === jr ? void 0 : jr.length) && void 0 !== Zr ? Zr : 0, Ir ? Sr : 0, Ir ? Qr : 0);
+         return fr < Ur.db.BYTES ? (Wr.reportCorruption(`crafting_view's answer of ${fr} bytes`), null) : Wr.memoryData(Wr.scratch(), fr, 1, "crafting_view's answer")
```

#### 293. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2875-L2876` → after: `L2875-L2876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2875-L2876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2875-L2876) · [Before (L2875-L2876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2875-L2876)

```diff
-         if (RR === eR.bd)(0, tG.b)();
-         else if (RR !== eR.cd) {
+         if (rr === Ur.Tc)(0, WQ.b)();
+         else if (rr !== Ur.Wc) {
```

#### 294. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2879-L2880` → after: `L2879-L2880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2879-L2880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2879-L2880) · [Before (L2879-L2880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2879-L2880)

```diff
-             return (0, tG.b)(), (0, eR.ag)(RR, JR, GR)
-           }(JR, 0, RR) || this.deps.onError(new Error(`Sync op ${RR}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
+             return (0, WQ.b)(), (0, Ur.dg)(rr, Sr, Qr)
+           }(Sr, 0, rr) || this.deps.onError(new Error(`Sync op ${rr}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
```

#### 295. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2882` → after: `L2882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2882) · [Before (L2882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2882)

```diff
-         return this.stopped || this.refresh(), RR !== eR.cd
+         return this.stopped || this.refresh(), rr !== Ur.Wc
```

#### 296. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2889` → after: `L2889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2889) · [Before (L2889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2889)

```diff
-       cG = 1.2 * UJ.g.Vn,
+       MQ = 1.2 * YS.i.Nz,
```

#### 297. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2897` → after: `L2897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2897) · [Before (L2897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2897)

```diff
-       return JR || (zG.size >= 64 && zG.clear(), JR = PG.encode(`{"emitRate":${RR}}`), zG.set(RR, JR)), JR
+       return Sr || (VQ.size >= 64 && VQ.clear(), Sr = GQ.encode(`{"emitRate":${rr}}`), VQ.set(rr, Sr)), Sr
```

#### 298. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2901` → after: `L2901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2901) · [Before (L2901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2901)

```diff
-       return Number.isFinite(RR) && RR > 0 ? RR : 0
+       return Number.isFinite(rr) && rr > 0 ? rr : 0
```

#### 299. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2917` → after: `L2917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2917) · [Before (L2917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2917)

```diff
-       return RR.length > eR.td.MaxOpts ? (GR(new Error(`${JR}'s particle opts are over ${eR.td.MaxOpts} bytes of JSON`)), null) : RR
+       return rr.length > Ur.qd.MaxOpts ? (Qr(new Error(`${Sr}'s particle opts are over ${Ur.qd.MaxOpts} bytes of JSON`)), null) : rr
```

#### 300. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2941-L2942` → after: `L2941-L2942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2941-L2942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2941-L2942) · [Before (L2941-L2942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2941-L2942)

```diff
-           tR = null !== (GR = JR.half) && void 0 !== GR ? GR : HG;
-         if (!yR || this.live >= eR.td.MaxLiveKeys || this.nextKey > eR.td.MaxKey || !dG(JR.pos, tR)) return kG;
+           Wr = null !== (Qr = Sr.half) && void 0 !== Qr ? Qr : gQ;
+         if (!Zr || this.live >= Ur.qd.MaxLiveKeys || this.nextKey > Ur.qd.MaxKey || !cQ(Sr.pos, Wr)) return bQ;
```

#### 301. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2948` → after: `L2948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2948) · [Before (L2948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2948)

```diff
-               hK: RR.hK,
+               sx: rr.sx,
```

#### 302. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2956-L2958` → after: `L2956-L2958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2956-L2958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2956-L2958) · [Before (L2956-L2958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2956-L2958)

```diff
-               gravity: null !== (JR = RR.gravity) && void 0 !== JR ? JR : HG,
-               dir1: null !== (GR = RR.dir1) && void 0 !== GR ? GR : DG,
-               dir2: null !== (yR = RR.dir2) && void 0 !== yR ? yR : DG,
+               gravity: null !== (Sr = rr.gravity) && void 0 !== Sr ? Sr : gQ,
+               dir1: null !== (Qr = rr.dir1) && void 0 !== Qr ? Qr : RQ,
+               dir2: null !== (Zr = rr.dir2) && void 0 !== Zr ? Zr : RQ,
```

#### 303. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2964` → after: `L2964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2964) · [Before (L2964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2964)

```diff
-         return ZR && (0, eR.Re)(yR, 0, uR, 0, eR.td.PresetNone, 0, IG, mG, ZR) ? (this.nextKey++, this.live++, this.started = !0, new FG(this, this.session, uR, RR, tR)) : kG
+         return jr && (0, Ur.ef)(Zr, 0, ar, 0, Ur.qd.PresetNone, 0, kQ, AQ, jr) ? (this.nextKey++, this.live++, this.started = !0, new DQ(this, this.session, ar, rr, Wr)) : bQ
```

#### 304. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2976` → after: `L2976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2976) · [Before (L2976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2976)

```diff
-         tR && (0, eR.Pe)(JR, 0, 0, eR.td.PresetNone, eR.td.HasBox, 0, IG, mG, tR)
+         Wr && (0, Ur._e)(Sr, 0, 0, Ur.qd.PresetNone, Ur.qd.HasBox, 0, kQ, AQ, Wr)
```

#### 305. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2980-L2981` → after: `L2980-L2981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2980-L2981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2980-L2981) · [Before (L2980-L2981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2980-L2981)

```diff
-           tR = Math.min(Math.floor(GR), eR.td.MaxBurst);
-         if (!yR || !Object.hasOwn(eR.$b, RR) || !(tR > 0)) return;
+           Wr = Math.min(Math.floor(Qr), Ur.qd.MaxBurst);
+         if (!Zr || !Object.hasOwn(Ur.Qb, rr) || !(Wr > 0)) return;
```

#### 306. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2984` → after: `L2984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2984) · [Before (L2984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2984)

```diff
-         Number.isFinite(IG[0] + IG[1] + IG[2]) && (0, eR.Pe)(yR, 0, 0, eR.$b[RR], eR.td.HasBox, tR, IG, mG, oG)
+         Number.isFinite(kQ[0] + kQ[1] + kQ[2]) && (0, Ur._e)(Zr, 0, 0, Ur.Qb[rr], Ur.qd.HasBox, Wr, kQ, AQ, CQ)
```

#### 307. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2989` → after: `L2989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2989) · [Before (L2989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2989)

```diff
-         return this.started = !1, this.nextKey = 1, this.live = 0, !RR || (0, eR.Ve)(RR, 0)
+         return this.started = !1, this.nextKey = 1, this.live = 0, !rr || (0, Ur.gf)(rr, 0)
```

#### 308. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2996` → after: `L2996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2996) · [Before (L2996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2996)

```diff
-         GR && (0, eR.Ye)(GR, 0, JR) && this.live--
+         Qr && (0, Ur.jf)(Qr, 0, Sr) && this.live--
```

#### 309. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3013` → after: `L3013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3013) · [Before (L3013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3013)

```diff
-           dG(RR, this.half) && (0, eR.af)(GR, 0, this.key, eR.td.HasBox, IG, mG, oG)
+           cQ(rr, this.half) && (0, Ur.nf)(Qr, 0, this.key, Ur.qd.HasBox, kQ, AQ, CQ)
```

#### 310. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3019` → after: `L3019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3019) · [Before (L3019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3019)

```diff
-         JR && GR !== this.rate && (0, eR.af)(JR, 0, this.key, 0, HG, HG, SG(GR)) && (this.rate = GR, this.emitted ||= GR > 0)
+         Sr && Qr !== this.rate && (0, Ur.nf)(Sr, 0, this.key, 0, gQ, gQ, iQ(Qr)) && (this.rate = Qr, this.emitted ||= Qr > 0)
```

#### 311. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3023-L3024` → after: `L3023-L3024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3023-L3024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3023-L3024) · [Before (L3023-L3024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3023-L3024)

```diff
-           GR = Math.min(Math.floor(RR), eR.td.MaxBurst);
-         JR && GR > 0 && (0, eR.Pe)(JR, 0, this.key, eR.td.PresetNone, 0, GR, HG, HG, oG) && (this.emitted = !0)
+           Qr = Math.min(Math.floor(rr), Ur.qd.MaxBurst);
+         Sr && Qr > 0 && (0, Ur._e)(Sr, 0, this.key, Ur.qd.PresetNone, 0, Qr, gQ, gQ, CQ) && (this.emitted = !0)
```

#### 312. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3028` → after: `L3028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3028) · [Before (L3028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3028)

```diff
-           tR = Math.min(Math.floor(GR), eR.td.MaxPoints, Math.floor(JR.length / 4));
+           Wr = Math.min(Math.floor(Qr), Ur.qd.MaxPoints, Math.floor(Sr.length / 4));
```

#### 313. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3030-L3031` → after: `L3030-L3031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3030-L3031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3030-L3031) · [Before (L3030-L3031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3030-L3031)

```diff
-         const uR = new Uint8Array(JR.buffer, JR.byteOffset, tR * eR.td.PointBytes);
-         (0, eR.Qe)(yR, 0, this.key, tR, RR, uR) && (this.emitted = !0)
+         const ar = new Uint8Array(Sr.buffer, Sr.byteOffset, Wr * Ur.qd.PointBytes);
+         (0, Ur.af)(Zr, 0, this.key, Wr, rr, ar) && (this.emitted = !0)
```

#### 314. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3040` → after: `L3040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3040) · [Before (L3040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3040)

```diff
-         (0, eR.af)(GR, 0, this.key, 0, HG, HG, yR)
+         (0, Ur.nf)(Qr, 0, this.key, 0, gQ, gQ, Zr)
```

#### 315. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3044` → after: `L3044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3044) · [Before (L3044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3044)

```diff
-         this.stopped = !0, RR && (this.emitted ? (this.rate > 0 && (0, eR.af)(RR, 0, this.key, 0, HG, HG, SG(0)), setTimeout((() => {
+         this.stopped = !0, rr && (this.emitted ? (this.rate > 0 && (0, Ur.nf)(rr, 0, this.key, 0, gQ, gQ, iQ(0)), setTimeout((() => {
```

#### 316. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3055` → after: `L3055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3055) · [Before (L3055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3055)

```diff
-     const TG = TJ.p,
+     const dQ = dS.o,
```

#### 317. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3066` → after: `L3066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3066) · [Before (L3066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3066)

```diff
-         if (RR !== eR.Uc && !CR(yR[uR])) {
+         if (rr !== Ur.Nc && !Kr(Zr[ar])) {
```

#### 318. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3081` → after: `L3081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3081) · [Before (L3081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3081)

```diff
-       return RR.length >= JR ? RR : new Int32Array(Math.max(JR, 2 * RR.length))
+       return rr.length >= Sr ? rr : new Int32Array(Math.max(Sr, 2 * rr.length))
```

#### 319. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3093-L3095` → after: `L3093-L3095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3093-L3095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3093-L3095) · [Before (L3093-L3095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3093-L3095)

```diff
-         for (let RR = 0; RR + eR.Nb.BYTES <= qR;) {
-           const JR = eR.Nb.len(iR, RR);
-           yR(eR.Nb.serverId(iR, RR), Gy(iR, RR, JR)), RR += eR.Nb.BYTES + (0, wR.ve)(JR)
+         for (let rr = 0; rr + Ur.Gb.BYTES <= Ir;) {
+           const Sr = Ur.Gb.len(fr, rr);
+           Zr(Ur.Gb.serverId(fr, rr), QZ(fr, rr, Sr)), rr += Ur.Gb.BYTES + (0, mr.Ke)(Sr)
```

#### 320. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3103` → after: `L3103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3103) · [Before (L3103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3103)

```diff
-       const ZR = eR.Nb.kind(RR, JR),
+       const jr = Ur.Gb.kind(rr, Sr),
```

#### 321. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3106-L3110` → after: `L3106-L3110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3106-L3110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3106-L3110) · [Before (L3106-L3110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3106-L3110)

```diff
-       const iR = eR.Nb.variation(RR, JR),
-         fR = eR.Nb.pose(RR, JR),
-         VR = eR.Nb.meta(RR, JR),
-         KR = eR.Nb.mesh(RR, JR),
-         wR = 0 !== (eR.Nb.flags(RR, JR) & eR.Kb.HasOpts),
+       const fr = Ur.Gb.variation(rr, Sr),
+         Er = Ur.Gb.pose(rr, Sr),
+         pr = Ur.Gb.meta(rr, Sr),
+         xr = Ur.Gb.mesh(rr, Sr),
+         mr = 0 !== (Ur.Gb.flags(rr, Sr) & Ur.Db.HasOpts),
```

#### 322. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3114-L3118` → after: `L3114-L3118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3114-L3118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3114-L3118) · [Before (L3114-L3118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3114-L3118)

```diff
-         variation: iR === eR._c ? void 0 : null !== (yR = null !== (tR = null === rR || void 0 === rR ? void 0 : rR[iR]) && void 0 !== tR ? tR : null === rR || void 0 === rR ? void 0 : rR[0]) && void 0 !== yR ? yR : "default",
-         pose: fR === eR.dc ? void 0 : null !== (uR = eR.Cb[fR]) && void 0 !== uR ? uR : eR.Cb[0],
-         metaInfo: VR === eR.dc ? void 0 : eR.Hc[VR],
-         meshKind: KR === eR.dc ? void 0 : eR.Fc[KR],
-         meshOpts: wR ? sG.decode(new Uint8Array(RR.buffer, RR.byteOffset + JR + eR.Nb.BYTES, GR)) : void 0
+         variation: fr === Ur.Sc ? void 0 : null !== (Zr = null !== (Wr = null === Nr || void 0 === Nr ? void 0 : Nr[fr]) && void 0 !== Wr ? Wr : null === Nr || void 0 === Nr ? void 0 : Nr[0]) && void 0 !== Zr ? Zr : "default",
+         pose: Er === Ur.Vb ? void 0 : null !== (ar = Ur.rb[Er]) && void 0 !== ar ? ar : Ur.rb[0],
+         metaInfo: pr === Ur.Vb ? void 0 : Ur.Ac[pr],
+         meshKind: xr === Ur.Vb ? void 0 : Ur.xc[xr],
+         meshOpts: mr ? sQ.decode(new Uint8Array(rr.buffer, rr.byteOffset + Sr + Ur.Gb.BYTES, Qr)) : void 0
```

#### 323. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3125` → after: `L3125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3125) · [Before (L3125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3125)

```diff
-         this.deps = RR, this.wanted = 0, this.Qq = !1, this.refused = !1
+         this.deps = rr, this.wanted = 0, this.wI = !1, this.refused = !1
```

#### 324. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3128` → after: `L3128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3128) · [Before (L3128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3128)

```diff
-         return this.Qq
+         return this.wI
```

#### 325. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3131` → after: `L3131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3131) · [Before (L3131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3131)

```diff
-         this.wanted = JR ? this.wanted | RR : this.wanted & ~RR;
+         this.wanted = Sr ? this.wanted | rr : this.wanted & ~rr;
```

#### 326. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3133` → after: `L3133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3133) · [Before (L3133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3133)

```diff
-         if (GR === this.Qq) return;
+         if (Qr === this.wI) return;
```

#### 327. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3135` → after: `L3135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3135) · [Before (L3135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3135)

```diff
-         null !== yR ? (0, eR.fg)(yR, 0, GR ? 1 : 0) ? (this.Qq = GR, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.Qq = !1
+         null !== Zr ? (0, Ur.kg)(Zr, 0, Qr ? 1 : 0) ? (this.wI = Qr, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.wI = !1
```

#### 328. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3144` → after: `L3144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3144) · [Before (L3144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3144)

```diff
-         return this.complete || this.fill(), null !== (JR = this.entries.get("string" === typeof RR ? RR : String(RR))) && void 0 !== JR ? JR : null
+         return this.complete || this.fill(), null !== (Sr = this.entries.get("string" === typeof rr ? rr : String(rr))) && void 0 !== Sr ? Sr : null
```

#### 329. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3203` → after: `L3203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3203) · [Before (L3203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3203)

```diff
-     var qy = GR(5685);
+     var IZ = Qr(5617);
```

#### 330. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3206-L3207` → after: `L3206-L3207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3206-L3207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3206-L3207) · [Before (L3206-L3207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3206-L3207)

```diff
-       if ("message" !== RR.type || RR.LZ !== qy.sc.NewClientOptions || RR.payloadKind !== wR.gc.Msgpack) return null;
-       const JR = (0, IR.e)(RR.payload);
+       if ("message" !== rr.type || rr.xj !== IZ.pc.NewClientOptions || rr.payloadKind !== mr.nc.Msgpack) return null;
+       const Sr = (0, kr.d)(rr.payload);
```

#### 331. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3211-L3212` → after: `L3211-L3212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3211-L3212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3211-L3212) · [Before (L3211-L3212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3211-L3212)

```diff
-     var fy = GR(1336),
-       Vy = GR(37829);
+     var EZ = Qr(1287),
+       pZ = Qr(38193);
```

#### 332. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3217-L3219` → after: `L3217-L3219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3217-L3219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3217-L3219) · [Before (L3217-L3219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3217-L3219)

```diff
-         case eR.Wd.ToggleMenu: {
-           const RR = eR.I[JR];
-           ZR.n.JK("toggleMenu", void 0 === RR ? "inventory" : `inventory|${RR}`);
+         case Ur.Vd.ToggleMenu: {
+           const rr = Ur.C[Sr];
+           jr.i.Jp("toggleMenu", void 0 === rr ? "inventory" : `inventory|${rr}`);
```

#### 333. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3222-L3223` → after: `L3222-L3223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3222-L3223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3222-L3223) · [Before (L3222-L3223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3222-L3223)

```diff
-         case eR.Wd.EditBoard:
-           ZR.n.JK("EditBoard", {
+         case Ur.Vd.EditBoard:
+           jr.i.Jp("EditBoard", {
```

#### 334. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3227-L3229` → after: `L3227-L3229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3227-L3229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3227-L3229) · [Before (L3227-L3229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3227-L3229)

```diff
-         case eR.Wd.EditCodeBlock:
-         case eR.Wd.ViewCodeBlock:
-           ZR.n.JK("EditCodeBlock", {
+         case Ur.Vd.EditCodeBlock:
+         case Ur.Vd.ViewCodeBlock:
+           jr.i.Jp("EditCodeBlock", {
```

#### 335. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3231` → after: `L3231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3231) · [Before (L3231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3231)

```diff
-             canChangePos: RR === eR.Wd.EditCodeBlock
+             canChangePos: rr === Ur.Vd.EditCodeBlock
```

#### 336. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3234-L3235` → after: `L3234-L3235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3234-L3235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3234-L3235) · [Before (L3234-L3235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3234-L3235)

```diff
-         case eR.Wd.EditCustomLobbyBlock:
-           ZR.n.JK("EditCustomLobbyBlock", {
+         case Ur.Vd.EditCustomLobbyBlock:
+           jr.i.Jp("EditCustomLobbyBlock", {
```

#### 337. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3239-L3240` → after: `L3239-L3240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3239-L3240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3239-L3240) · [Before (L3239-L3240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3239-L3240)

```diff
-         case eR.Wd.OpenIronChest:
-           ZR.n.JK("OpenIronChest", {
+         case Ur.Vd.OpenIronChest:
+           jr.i.Jp("OpenIronChest", {
```

#### 338. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3244-L3245` → after: `L3244-L3245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3244-L3245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3244-L3245) · [Before (L3244-L3245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3244-L3245)

```diff
-         case eR.Wd.EditNameTag:
-           ZR.n.JK("EditNameTag", null !== (iR = null === (fR = tR.Qq()) || void 0 === fR || null === (VR = fR.attributes.customAttributes) || void 0 === VR ? void 0 : VR.text) && void 0 !== iR ? iR : "");
+         case Ur.Vd.EditNameTag:
+           jr.i.Jp("EditNameTag", null !== (fr = null === (Er = Wr.wI()) || void 0 === Er || null === (pr = Er.attributes.customAttributes) || void 0 === pr ? void 0 : pr.text) && void 0 !== fr ? fr : "");
```

#### 339. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3247-L3252` → after: `L3247-L3252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3247-L3252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3247-L3252) · [Before (L3247-L3252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3247-L3252)

```diff
-         case eR.Wd.EditBook: {
-           var KR, wR, aR;
-           const RR = null === (KR = tR.Qq()) || void 0 === KR ? void 0 : KR.attributes;
-           ZR.n.JK("EditBook", {
-             pages: (0, fy.S)(null === RR || void 0 === RR || null === (wR = RR.customAttributes) || void 0 === wR ? void 0 : wR.pages),
-             title: null !== (aR = null === RR || void 0 === RR ? void 0 : RR.customDisplayName) && void 0 !== aR ? aR : "Title",
+         case Ur.Vd.EditBook: {
+           var xr, mr, tr;
+           const rr = null === (xr = Wr.wI()) || void 0 === xr ? void 0 : xr.attributes;
+           jr.i.Jp("EditBook", {
+             pages: (0, EZ.Y)(null === rr || void 0 === rr || null === (mr = rr.customAttributes) || void 0 === mr ? void 0 : mr.pages),
+             title: null !== (tr = null === rr || void 0 === rr ? void 0 : rr.customDisplayName) && void 0 !== tr ? tr : "Title",
```

#### 340. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3257` → after: `L3257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3257) · [Before (L3257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3257)

```diff
-         case eR.Wd.CantChangeBlock:
+         case Ur.Vd.CantChangeBlock:
```

#### 341. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3261-L3262` → after: `L3261-L3262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3261-L3262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3261-L3262) · [Before (L3261-L3262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3261-L3262)

```diff
-               tR = RR ? GR : yR;
-             (JR.getClientOption("canChange") || tR || "You cannot modify this block" !== GR) && ZR.n.JK("showBottomMessage", {
+               Wr = rr ? Qr : Zr;
+             (Sr.getClientOption("canChange") || Wr || "You cannot modify this block" !== Qr) && jr.i.Jp("showBottomMessage", {
```

#### 342. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3268-L3269` → after: `L3268-L3269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3268-L3269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3268-L3269) · [Before (L3268-L3269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3268-L3269)

```diff
-         case eR.Wd.MiddleBarStart:
-           ZR.n.JK("middleScreenBarInitiate", {
+         case Ur.Vd.MiddleBarStart:
+           jr.i.Jp("middleScreenBarInitiate", {
```

#### 343. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3271` → after: `L3271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3271) · [Before (L3271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3271)

```diff
-             Au: 1 === GR[0],
+             ha: 1 === Qr[0],
```

#### 344. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3275-L3276` → after: `L3275-L3276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3275-L3276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3275-L3276) · [Before (L3275-L3276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3275-L3276)

```diff
-         case eR.Wd.MiddleBarStop:
-           ZR.n.JK("middleScreenBarRemove");
+         case Ur.Vd.MiddleBarStop:
+           jr.i.Jp("middleScreenBarRemove");
```

#### 345. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3278-L3280` → after: `L3278-L3280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3278-L3280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3278-L3280) · [Before (L3278-L3280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3278-L3280)

```diff
-         case eR.Wd.Hitmarker:
-           ZR.n.JK("localGunHitmarker", {
-             xJ: 1 === JR
+         case Ur.Vd.Hitmarker:
+           jr.i.Jp("localGunHitmarker", {
+             GS: 1 === Sr
```

#### 346. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3283-L3284` → after: `L3283-L3284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3283-L3284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3283-L3284) · [Before (L3283-L3284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3283-L3284)

```diff
-         case eR.Wd.ShotsLeft:
-           ZR.n.JK("localPlayerNewShotsLeft", yR);
+         case Ur.Vd.ShotsLeft:
+           jr.i.Jp("localPlayerNewShotsLeft", Zr);
```

#### 347. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3286-L3287` → after: `L3286-L3287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3286-L3287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3286-L3287) · [Before (L3286-L3287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3286-L3287)

```diff
-         case eR.Wd.AimingOverlay:
-           ZR.n.JK("aimingOverlay", 3 === (3 & JR) ? "sniper" : "none");
+         case Ur.Vd.AimingOverlay:
+           jr.i.Jp("aimingOverlay", 3 === (3 & Sr) ? "sniper" : "none");
```

#### 348. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3289-L3290` → after: `L3289-L3290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3289-L3290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3289-L3290) · [Before (L3289-L3290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3289-L3290)

```diff
-         case eR.Wd.BottomMessage:
-           ZR.n.JK("showBottomMessage", JSON.parse(qR()));
+         case Ur.Vd.BottomMessage:
+           jr.i.Jp("showBottomMessage", JSON.parse(Ir()));
```

#### 349. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3292-L3293` → after: `L3292-L3293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3292-L3293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3292-L3293) · [Before (L3292-L3293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3292-L3293)

```diff
-         case eR.Wd.Crosshair:
-           tR.inaccuracy = (0, mR.g)(yR), (0, Vy.b)().crosshairAccuracy(tR.inaccuracy);
+         case Ur.Vd.Crosshair:
+           Wr.inaccuracy = (0, Ar.f)(Zr), (0, pZ.b)().crosshairAccuracy(Wr.inaccuracy);
```

#### 350. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3295` → after: `L3295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3295) · [Before (L3295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3295)

```diff
-         case eR.Wd.ChargeStage:
+         case Ur.Vd.ChargeStage:
```
