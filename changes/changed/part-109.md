# Changed — Bundle Modifications Report (Part 109 / 126)

- **Updated at**: `2026-11-28T08:15 JST`
- **Part**: `109 / 126` (**431** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 108](part-108.md) · [Part 110 →](part-110.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/procGenWorker.js` (4udp6d.2845de07 → fl4vv.bd3c59ce · continued)

- **File**: `bundles/bloxd.io/chunks/js/procGenWorker.js` (1799 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2)

#### 697. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8293` → after: `L8293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L8293) · [Before (L8293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L8293)

```diff
-             if (this.gridSize < GR) throw new Error(`PointsGenerator "${this.name}" has gridSize=${this.gridSize} but needs >= ${GR} (chunkSize=${RR}, halfBox=${JR}). Points near chunk edges would be missed.`)
+             if (this.gridSize < Qr) throw new Error(`PointsGenerator "${this.name}" has gridSize=${this.gridSize} but needs >= ${Qr} (chunkSize=${rr}, halfBox=${Sr}). Points near chunk edges would be missed.`)
```

#### 698. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8300` → after: `L8300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L8300) · [Before (L8300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L8300)

```diff
-             return !!yR.has((0, qR.c)(RR, JR))
+             return !!Zr.has((0, Ir.f)(rr, Sr))
```

#### 699. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8309` → after: `L8309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L8309) · [Before (L8309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L8309)

```diff
-               const GR = (0, yR.K)(iR, RR, JR);
+               const Qr = (0, Zr.G)(fr, rr, Sr);
```

#### 700. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8338` → after: `L8338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L8338) · [Before (L8338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L8338)

```diff
-               const RR = (0, yR.K)(fR, JR, GR);
+               const rr = (0, Zr.G)(Er, Sr, Qr);
```

#### 701. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8350` → after: `L8350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L8350) · [Before (L8350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L8350)

```diff
-               const KR = (0, yR.K)(VR, JR, GR) - ZR;
+               const xr = (0, Zr.G)(pr, Sr, Qr) - jr;
```

#### 702. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8383` → after: `L8383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L8383) · [Before (L8383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L8383)

```diff
-               const uR = new ZR.i(`${RR}${JR}${this.seed}jitter`);
+               const ar = new jr.l(`${rr}${Sr}${this.seed}jitter`);
```

#### 703. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8394` → after: `L8394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L8394) · [Before (L8394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L8394)

```diff
-               const qR = new ZR.i(`${RR}${JR}${this.seed}pts`),
+               const Ir = new jr.l(`${rr}${Sr}${this.seed}pts`),
```

#### 704. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8422` → after: `L8422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L8422) · [Before (L8422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L8422)

```diff
-               for (const RR of tR) iR.add((0, qR.c)(RR[0], RR[1]))
+               for (const rr of Wr) fr.add((0, Ir.f)(rr[0], rr[1]))
```

#### 705. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8426` → after: `L8426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L8426) · [Before (L8426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L8426)

```diff
-               points: this.useKthClosestPoint ? tR : null
+               points: this.useKthClosestPoint ? Wr : null
```

#### 706. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8431` → after: `L8431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L8431) · [Before (L8431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L8431)

```diff
-       41323: (RR, JR, GR) => {
+       41698: (rr, Sr, Qr) => {
```

#### 707. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8435-L8444` → after: `L8435-L8444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8435-L8444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L8435-L8444) · [Before (L8435-L8444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L8435-L8444)

```diff
-         var yR = GR(41219),
-           tR = GR(41262),
-           uR = GR(41234),
-           ZR = GR(41226),
-           qR = GR(38891),
-           iR = GR(41321),
-           fR = GR(649),
-           VR = GR(679),
-           KR = GR(40416),
-           wR = GR(3031);
+         var Zr = Qr(41596),
+           Wr = Qr(41632),
+           ar = Qr(41603),
+           jr = Qr(41598),
+           Ir = Qr(39230),
+           fr = Qr(41695),
+           Er = Qr(665),
+           pr = Qr(688),
+           xr = Qr(40712),
+           mr = Qr(2999);
```

#### 708. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8455` → after: `L8455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L8455) · [Before (L8455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L8455)

```diff
-             return null !== (JR = eR[this.suffixMapping[RR]]) && void 0 !== JR ? JR : []
+             return null !== (Sr = Ur[this.suffixMapping[rr]]) && void 0 !== Sr ? Sr : []
```

#### 709. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8474` → after: `L8474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L8474) · [Before (L8474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L8474)

```diff
-               JR[GR] = (null !== (qR = JR[GR]) && void 0 !== qR ? qR : 0) + 1, JR[GR] >= LR && tR.splice(tR.indexOf(GR), 1)
+               Sr[Qr] = (null !== (Ir = Sr[Qr]) && void 0 !== Ir ? Ir : 0) + 1, Sr[Qr] >= hr && Wr.splice(Wr.indexOf(Qr), 1)
```

#### 710. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8541` → after: `L8541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L8541) · [Before (L8541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L8541)

```diff
-             return `r${RR}|m${Number(JR)}`
+             return `r${rr}|m${Number(Sr)}`
```

#### 711. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8575` → after: `L8575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L8575) · [Before (L8575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L8575)

```diff
-             const [, rR, eR] = null !== (tR = AR.exec(KR)) && void 0 !== tR ? tR : [];
+             const [, Nr, Ur] = null !== (Wr = er.exec(xr)) && void 0 !== Wr ? Wr : [];
```

#### 712. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8578` → after: `L8578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L8578) · [Before (L8578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L8578)

```diff
-               wR = null !== (aR = null === (LR = uR[`${VR}|meta|${[WR.split("").filter(((RR,JR)=>rR.split("").some((RR=>{const GR=WR.indexOf(RR);return((yR?3-GR:GR)+ZR)%4===JR})))).join(""),eR].filter(Boolean).join("|")}`]) || void 0 === LR ? void 0 : LR.id) && void 0 !== aR ? aR … [truncated]
+               mr = null !== (tr = null === (hr = ar[`${pr}|meta|${[nr.split("").filter(((rr,Sr)=>Nr.split("").some((rr=>{const Qr=nr.indexOf(rr);return((Zr?3-Qr:Qr)+jr)%4===Sr})))).join(""),Ur].filter(Boolean).join("|")}`]) || void 0 === hr ? void 0 : hr.id) && void 0 !== tr ? tr … [truncated]
```

#### 713. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8583` → after: `L8583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L8583) · [Before (L8583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L8583)

```diff
-               let JR = KR.replace(`rot${fR}`, `rot${RR}`);
+               let Sr = xr.replace(`rot${Er}`, `rot${rr}`);
```

#### 714. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8588` → after: `L8588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L8588) · [Before (L8588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L8588)

```diff
-                 JR = `${tR[1]}|${RR.join("")}`
+                 Sr = `${Wr[1]}|${rr.join("")}`
```

#### 715. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8590-L8591` → after: `L8590-L8591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8590-L8591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L8590-L8591) · [Before (L8590-L8591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L8590-L8591)

```diff
-               const ZR = `${VR}|${JR}`;
-               if (wR = null !== (nR = null === (CR = uR[ZR]) || void 0 === CR ? void 0 : CR.id) && void 0 !== nR ? nR : null, null === wR) {
+               const jr = `${pr}|${Sr}`;
+               if (mr = null !== (zr = null === (Kr = ar[jr]) || void 0 === Kr ? void 0 : Kr.id) && void 0 !== zr ? zr : null, null === mr) {
```

#### 716. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8599` → after: `L8599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L8599) · [Before (L8599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L8599)

```diff
-         var MR = GR(3991),
+         var Br = Qr(3938),
```

#### 717. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8615` → after: `L8615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L8615) · [Before (L8615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L8615)

```diff
-         var pR = GR(41240);
+         var Or = Qr(41605);
```

#### 718. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8620` → after: `L8620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L8620) · [Before (L8620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L8620)

```diff
-             const iR = GR.getOrGenerate(RR, JR, qR, uR.c.FloorY);
+             const fr = Qr.getOrGenerate(rr, Sr, Ir, ar.d.FloorY);
```

#### 719. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8622` → after: `L8622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L8622) · [Before (L8622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L8622)

```diff
-             vR(tR, iR, GR.getOrGenerate(RR, JR, qR, uR.c.CeilingY))
+             Xr(Wr, fr, Qr.getOrGenerate(rr, Sr, Ir, ar.d.CeilingY))
```

#### 720. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8643` → after: `L8643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L8643) · [Before (L8643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L8643)

```diff
-         const OR = new wR.f([{
+         const Pr = new mr.h([{
```

#### 721. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8656` → after: `L8656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L8656) · [Before (L8656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L8656)

```diff
-           xR = new wR.f([{
+           Hr = new mr.h([{
```

#### 722. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8666` → after: `L8666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L8666) · [Before (L8666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L8666)

```diff
-         const HR = new wR.f(["Powerful", "Legendary", "Majestic", "Fearless", "Celestial", "Mythic", "Epic", "Ethereal", "Omniscient", "Omnipotent", "Arcane", "Enigmatic", "Formidable", "Indomitable", "Luminous", "Ferocious", "Astral", "Unyielding", "Celestine", "Ascendant", "Oth … [truncated]
+         const gr = new mr.h(["Powerful", "Legendary", "Majestic", "Fearless", "Celestial", "Mythic", "Epic", "Ethereal", "Omniscient", "Omnipotent", "Arcane", "Enigmatic", "Formidable", "Indomitable", "Luminous", "Ferocious", "Astral", "Unyielding", "Celestine", "Ascendant", "Oth … [truncated]
```

#### 723. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8675` → after: `L8675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L8675) · [Before (L8675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L8675)

```diff
-             const JR = `${HR.sample(RR)} ${this.mobType}`;
+             const Sr = `${gr.sample(rr)} ${this.mobType}`;
```

#### 724. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8691` → after: `L8691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L8691) · [Before (L8691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L8691)

```diff
-               const RR = new wR.j(yR.minItems, yR.maxItems + 1),
+               const rr = new mr.m(Zr.minItems, Zr.maxItems + 1),
```

#### 725. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8695-L8696` → after: `L8695-L8696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8695-L8696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L8695-L8696) · [Before (L8695-L8696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L8695-L8696)

```diff
-                 const RR = JR.amount ? new wR.j(JR.amount.min, JR.amount.max + 1) : null,
-                   yR = null !== (GR = JR.itemAttributesDistribution) && void 0 !== GR ? GR : null;
+                 const rr = Sr.amount ? new mr.m(Sr.amount.min, Sr.amount.max + 1) : null,
+                   Zr = null !== (Qr = Sr.itemAttributesDistribution) && void 0 !== Qr ? Qr : null;
```

#### 726. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8706` → after: `L8706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L8706) · [Before (L8706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L8706)

```diff
-               const uR = new wR.f(tR);
+               const ar = new mr.h(Wr);
```

#### 727. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8712` → after: `L8712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L8712) · [Before (L8712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L8712)

```diff
-             this.itemCategoryDistributions = JR, this.shouldEnchantDistribution = new wR.c(RR.enchantmentProbability), this.enchantmentTier = RR.enchantmentTier
+             this.itemCategoryDistributions = Sr, this.shouldEnchantDistribution = new mr.e(rr.enchantmentProbability), this.enchantmentTier = rr.enchantmentTier
```

#### 728. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8715` → after: `L8715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L8715) · [Before (L8715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L8715)

```diff
-             const GR = Array(VR.k).fill(null);
+             const Qr = Array(pr.l).fill(null);
```

#### 729. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8723-L8725` → after: `L8723-L8725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8723-L8725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L8723-L8725) · [Before (L8723-L8725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L8723-L8725)

```diff
-                   rR = null !== (tR = null === (uR = KR.amountDistribution) || void 0 === uR ? void 0 : uR.sample(RR)) && void 0 !== tR ? tR : null,
-                   eR = null !== (ZR = null === (qR = KR.attributesDistribution) || void 0 === qR ? void 0 : qR.sample(RR)) && void 0 !== ZR ? ZR : {},
-                   aR = null !== (iR = this.getEnchantmentAttributesForItem(RR, JR, wR)) && void 0 !== iR ? iR : {};
+                   Nr = null !== (Wr = null === (ar = xr.amountDistribution) || void 0 === ar ? void 0 : ar.sample(rr)) && void 0 !== Wr ? Wr : null,
+                   Ur = null !== (jr = null === (Ir = xr.attributesDistribution) || void 0 === Ir ? void 0 : Ir.sample(rr)) && void 0 !== jr ? jr : {},
+                   tr = null !== (fr = this.getEnchantmentAttributesForItem(rr, Sr, mr)) && void 0 !== fr ? fr : {};
```

#### 730. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8732` → after: `L8732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L8732) · [Before (L8732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L8732)

```diff
-                       ...null !== (fR = eR.customAttributes) && void 0 !== fR ? fR : {},
+                       ...null !== (Er = Ur.customAttributes) && void 0 !== Er ? Er : {},
```

#### 731. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9026` → after: `L9026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9026) · [Before (L9026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9026)

```diff
-             name: `${RR} Pickaxe`,
+             name: `${rr} Pickaxe`,
```

#### 732. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9030` → after: `L9030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9030) · [Before (L9030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9030)

```diff
-             name: `${RR} Axe`,
+             name: `${rr} Axe`,
```

#### 733. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9034` → after: `L9034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9034) · [Before (L9034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9034)

```diff
-             name: `${RR} Spade`,
+             name: `${rr} Spade`,
```

#### 734. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9038` → after: `L9038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9038) · [Before (L9038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9038)

```diff
-             name: `${RR} Hoe`,
+             name: `${rr} Hoe`,
```

#### 735. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9045` → after: `L9045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9045) · [Before (L9045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9045)

```diff
-           if (JR < 0 || JR > 1) throw new Error(`Special arrow chance must be between 0 and 1, but is ${JR}`);
+           if (Sr < 0 || Sr > 1) throw new Error(`Special arrow chance must be between 0 and 1, but is ${Sr}`);
```

#### 736. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9069` → after: `L9069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9069) · [Before (L9069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9069)

```diff
-             name: `${RR} Sword`,
+             name: `${rr} Sword`,
```

#### 737. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9073` → after: `L9073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9073) · [Before (L9073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9073)

```diff
-             name: `${RR} Bow`,
+             name: `${rr} Bow`,
```

#### 738. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9077` → after: `L9077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9077) · [Before (L9077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9077)

```diff
-             name: `${RR} Crossbow`,
+             name: `${rr} Crossbow`,
```

#### 739. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9090` → after: `L9090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9090) · [Before (L9090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9090)

```diff
-           if (RR === IR.STONE) throw new Error(`${RR} armour is not supported`);
+           if (rr === kr.STONE) throw new Error(`${rr} armour is not supported`);
```

#### 740. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9092` → after: `L9092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9092) · [Before (L9092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9092)

```diff
-               name: `${RR} Helmet`,
+               name: `${rr} Helmet`,
```

#### 741. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9096` → after: `L9096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9096) · [Before (L9096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9096)

```diff
-               name: `${RR} Chestplate`,
+               name: `${rr} Chestplate`,
```

#### 742. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9100` → after: `L9100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9100) · [Before (L9100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9100)

```diff
-               name: `${RR} Gauntlets`,
+               name: `${rr} Gauntlets`,
```

#### 743. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9104` → after: `L9104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9104) · [Before (L9104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9104)

```diff
-               name: `${RR} Leggings`,
+               name: `${rr} Leggings`,
```

#### 744. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9108` → after: `L9108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9108) · [Before (L9108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9108)

```diff
-               name: `${RR} Boots`,
+               name: `${rr} Boots`,
```

#### 745. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9366` → after: `L9366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9366) · [Before (L9366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9366)

```diff
-               JR = new wR.i(`${RR}|lootChestIds`),
+               Sr = new mr.l(`${rr}|lootChestIds`),
```

#### 746. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9370` → after: `L9370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9370) · [Before (L9370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9370)

```diff
-               yR = this.lootChestInventoryDistribution.sample(new wR.i(`${RR}|lootChest`), GR);
+               Zr = this.lootChestInventoryDistribution.sample(new mr.l(`${rr}|lootChest`), Qr);
```

#### 747. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9374` → after: `L9374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9374) · [Before (L9374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9374)

```diff
-                   chestStr: (0, VR.E)(yR),
+                   chestStr: (0, pr.C)(Zr),
```

#### 748. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9384` → after: `L9384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9384) · [Before (L9384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9384)

```diff
-             this.seed = void 0, this.LK = void 0, this.invisibleSolidBlockId = void 0, this.emptySpawnerBlockId = void 0, this.chestToLootChestBlockId = void 0, this.defaultSpawnerBlockId = void 0, this.mobTypeToSpawnerBlockId = void 0, this.prefabRadius = void 0, this.prefabCent … [truncated]
+             this.seed = void 0, this.hx = void 0, this.invisibleSolidBlockId = void 0, this.emptySpawnerBlockId = void 0, this.chestToLootChestBlockId = void 0, this.defaultSpawnerBlockId = void 0, this.mobTypeToSpawnerBlockId = void 0, this.prefabRadius = void 0, this.prefabCent … [truncated]
```

#### 749. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9387` → after: `L9387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9387) · [Before (L9387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9387)

```diff
-               LK: GR,
+               hx: Qr,
```

#### 750. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9393` → after: `L9393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9393) · [Before (L9393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9393)

```diff
-             tJ.BLOCK_ID_MAPPINGS || (tJ.BLOCK_ID_MAPPINGS = new XR(yR)), NR || (NR = new rR(ZR)), this.seed = JR, this.LK = GR, this.invisibleSolidBlockId = yR["Invisible Solid"].id, this.emptySpawnerBlockId = yR["Empty Spawner Block"].id, this.chestToLootChestBlockId = new fR.b( … [truncated]
+             WS.BLOCK_ID_MAPPINGS || (WS.BLOCK_ID_MAPPINGS = new yr(Zr)), qr || (qr = new Nr(jr)), this.seed = Sr, this.hx = Qr, this.invisibleSolidBlockId = Zr["Invisible Solid"].id, this.emptySpawnerBlockId = Zr["Empty Spawner Block"].id, this.chestToLootChestBlockId = new Er.b( … [truncated]
```

#### 751. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9400` → after: `L9400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9400) · [Before (L9400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9400)

```diff
-             for (const tR of uR.s) VR[tR] = yR[`${tR} Spawner Block`].id;
+             for (const Wr of ar.q) pr[Wr] = Zr[`${Wr} Spawner Block`].id;
```

#### 752. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9415` → after: `L9415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9415) · [Before (L9415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9415)

```diff
-                   iR = new tR.d(`prefab|${RR}|${ZR}`, qR.minDistanceBetweenPrefabs, !1, !0, JR, yR, GR, null, !0)
+                   fr = new Wr.b(`prefab|${rr}|${jr}`, Ir.minDistanceBetweenPrefabs, !1, !0, Sr, Zr, Qr, null, !0)
```

#### 753. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9429` → after: `L9429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9429) · [Before (L9429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9429)

```diff
-             return new wR.i(`${RR}|${JR}|${this.seed}|prefabGenerator`)
+             return new mr.l(`${rr}|${Sr}|${this.seed}|prefabGenerator`)
```

#### 754. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9458` → after: `L9458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9458) · [Before (L9458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9458)

```diff
-               fR = this.LK >> 1,
+               Er = this.hx >> 1,
```

#### 755. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9460` → after: `L9460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9460) · [Before (L9460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9460)

```diff
-               wR = RR + this.LK + this.prefabRadius,
+               mr = rr + this.hx + this.prefabRadius,
```

#### 756. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9462` → after: `L9462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9462) · [Before (L9462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9462)

```diff
-               eR = JR + this.LK + this.prefabRadius;
+               Ur = Sr + this.hx + this.prefabRadius;
```

#### 757. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9470` → after: `L9470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9470) · [Before (L9470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9470)

```diff
-                 if (LR === uR.o.SURFACE && UR === uR.l.VERY_HIGH && !qR.regionMayHaveVeryHighSurfacePrefabs(VR, rR, wR, eR)) continue;
+                 if (hr === ar.n.SURFACE && Yr === ar.m.VERY_HIGH && !Ir.regionMayHaveVeryHighSurfacePrefabs(pr, Nr, mr, Ur)) continue;
```

#### 758. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9480` → after: `L9480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9480) · [Before (L9480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9480)

```diff
-                   if (LR === uR.o.SURFACE && !fR.canPlaceSurfacePrefab(JR, qR)) continue;
+                   if (hr === ar.n.SURFACE && !Er.canPlaceSurfacePrefab(Sr, Ir)) continue;
```

#### 759. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9499` → after: `L9499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9499) · [Before (L9499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9499)

```diff
-                       console.error(`Invalid prefab rotation: ${WR}`)
+                       console.error(`Invalid prefab rotation: ${nr}`)
```

#### 760. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9516` → after: `L9516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9516) · [Before (L9516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9516)

```diff
-                   if (LR === uR.o.SURFACE && null !== fR.maxSurfacePrefabRelief) {
+                   if (hr === ar.n.SURFACE && null !== Er.maxSurfacePrefabRelief) {
```

#### 761. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9523` → after: `L9523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9523) · [Before (L9523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9523)

```diff
-                   const bR = new KR.e;
+                   const lr = new xr.b;
```

#### 762. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9531` → after: `L9531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9531) · [Before (L9531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9531)

```diff
-                   const vR = new KR.e;
+                   const Xr = new xr.b;
```

#### 763. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9583-L9584` → after: `L9583-L9584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9583-L9584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9583-L9584) · [Before (L9583-L9584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9583-L9584)

```diff
-                 wy: RR,
-                 ey: GR
+                 nZ: rr,
+                 eZ: Qr
```

#### 764. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9597` → after: `L9597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9597) · [Before (L9597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9597)

```diff
-                   if (GR.getOrGenerate(fR, RR, uR.f.WaterHeight) !== ZR.o) return {
+                   if (Qr.getOrGenerate(Er, rr, ar.f.WaterHeight) !== jr.l) return {
```

#### 765. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9602` → after: `L9602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9602) · [Before (L9602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9602)

```diff
-                   if (iR.c.isInCave(fR, JR, RR, yR)) return {
+                   if (fr.d.isInCave(Er, Sr, rr, Zr)) return {
```

#### 766. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9606` → after: `L9606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9606) · [Before (L9606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9606)

```diff
-                   if (pR.d.isNearFixedPointPrefab(fR, RR, tR)) return {
+                   if (Or.e.isNearFixedPointPrefab(Er, rr, Wr)) return {
```

#### 767. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9653-L9654` → after: `L9653-L9654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9653-L9654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9653-L9654) · [Before (L9653-L9654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9653-L9654)

```diff
-             if (qR === this.emptySpawnerBlockId && (qR = null !== (iR = yR.spawnerBlockLocationToBlockId.get(RR, JR, GR)) && void 0 !== iR ? iR : this.defaultSpawnerBlockId), qR < 0) return qR;
-             if (qR = null !== (uR = null === (ZR = yR.blockIdMapping) || void 0 === ZR ? void 0 : ZR[qR]) && void 0 !== uR ? uR : qR, void 0 !== this.chestToLootChestBlockId.reverseGet(qR)) {
+             if (Ir === this.emptySpawnerBlockId && (Ir = null !== (fr = Zr.spawnerBlockLocationToBlockId.get(rr, Sr, Qr)) && void 0 !== fr ? fr : this.defaultSpawnerBlockId), Ir < 0) return Ir;
+             if (Ir = null !== (ar = null === (jr = Zr.blockIdMapping) || void 0 === jr ? void 0 : jr[Ir]) && void 0 !== ar ? ar : Ir, void 0 !== this.chestToLootChestBlockId.reverseGet(Ir)) {
```

#### 768. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9656` → after: `L9656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9656) · [Before (L9656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9656)

```diff
-               const uR = null !== (fR = yR.chestLocationToQuality.get(RR, JR, GR)) && void 0 !== fR ? fR : tJ.DEFAULT_CHEST_QUALITY,
+               const ar = null !== (Er = Zr.chestLocationToQuality.get(rr, Sr, Qr)) && void 0 !== Er ? Er : WS.DEFAULT_CHEST_QUALITY,
```

#### 769. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9683` → after: `L9683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9683) · [Before (L9683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9683)

```diff
-             } = RR, uR = BR()(new Int32Array(GR * yR * tR), [GR, yR, tR]), ZR = new KR.e;
+             } = rr, ar = Tr()(new Int32Array(Qr * Zr * Wr), [Qr, Zr, Wr]), jr = new xr.b;
```

#### 770. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9685` → after: `L9685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9685) · [Before (L9685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9685)

```diff
-             const iR = new KR.e;
+             const fr = new xr.b;
```

#### 771. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9687-L9691` → after: `L9687-L9691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9687-L9691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9687-L9691) · [Before (L9687-L9691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9687-L9691)

```diff
-             for (let fR = 0; fR < GR; fR += VR.A)
-               for (let JR = 0; JR < yR; JR += VR.A)
-                 for (let KR = 0; KR < tR; KR += VR.A) {
-                   const wR = BR()(new Uint16Array(VR.A * VR.A * VR.A), [VR.A, VR.A, VR.A]),
-                     rR = RR.schematic.getRLEChunk((0, VR.X)(fR), (0, VR.X)(JR), (0, VR.X)(KR));
+             for (let Er = 0; Er < Qr; Er += pr.y)
+               for (let Sr = 0; Sr < Zr; Sr += pr.y)
+                 for (let xr = 0; xr < Wr; xr += pr.y) {
+                   const mr = Tr()(new Uint16Array(pr.y * pr.y * pr.y), [pr.y, pr.y, pr.y]),
+                     Nr = rr.schematic.getRLEChunk((0, pr.U)(Er), (0, pr.U)(Sr), (0, pr.U)(xr));
```

#### 772. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9693-L9695` → after: `L9693-L9695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9693-L9695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9693-L9695) · [Before (L9693-L9695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9693-L9695)

```diff
-                   const eR = Math.min(VR.A, GR - fR),
-                     aR = Math.min(VR.A, yR - JR),
-                     LR = Math.min(VR.A, tR - KR);
+                   const Ur = Math.min(pr.y, Qr - Er),
+                     tr = Math.min(pr.y, Zr - Sr),
+                     hr = Math.min(pr.y, Wr - xr);
```

#### 773. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9704` → after: `L9704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9704) · [Before (L9704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9704)

```diff
-                         else if (this.emptySpawnerBlockId === qR) iR.get(VR, rR, eR) || console.error(`Empty spawner block found in prefab ${RR.schematic.name} at (${VR}, ${rR}, ${eR}) with no mob type specified. Defaulting to "${tJ.DEFAULT_MOB_TYPE}" mob type.`);
+                         else if (this.emptySpawnerBlockId === Ir) fr.get(pr, Nr, Ur) || console.error(`Empty spawner block found in prefab ${rr.schematic.name} at (${pr}, ${Nr}, ${Ur}) with no mob type specified. Defaulting to "${WS.DEFAULT_MOB_TYPE}" mob type.`);
```

#### 774. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9707` → after: `L9707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9707) · [Before (L9707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9707)

```diff
-                           void 0 !== JR && (ZR.get(VR, rR, eR) || console.error(`Chest found in prefab ${RR.schematic.name} at (${VR}, ${rR}, ${eR}) with no quality specified. Defaulting to "${tJ.DEFAULT_CHEST_QUALITY}" quality.`), qR = JR)
+                           void 0 !== Sr && (jr.get(pr, Nr, Ur) || console.error(`Chest found in prefab ${rr.schematic.name} at (${pr}, ${Nr}, ${Ur}) with no quality specified. Defaulting to "${WS.DEFAULT_CHEST_QUALITY}" quality.`), Ir = Sr)
```

#### 775. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9733-L9734` → after: `L9733-L9734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9733-L9734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9733-L9734) · [Before (L9733-L9734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9733-L9734)

```diff
-             wy: JR,
-             ey: JR + GR.dimensionY - 1,
+             nZ: Sr,
+             eZ: Sr + Qr.dimensionY - 1,
```

#### 776. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9744` → after: `L9744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9744) · [Before (L9744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9744)

```diff
-           }(RR, RR.shouldSwapXZ ? GR : JR)
+           }(rr, rr.shouldSwapXZ ? Qr : Sr)
```

#### 777. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9751` → after: `L9751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9751) · [Before (L9751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9751)

```diff
-           }(RR, RR.shouldSwapXZ ? JR : GR)
+           }(rr, rr.shouldSwapXZ ? Sr : Qr)
```

#### 778. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9774` → after: `L9774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9774) · [Before (L9774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9774)

```diff
-             const GR = new yR.d(2 * RR + 1, [-RR, -RR]);
+             const Qr = new Zr.f(2 * rr + 1, [-rr, -rr]);
```

#### 779. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9783` → after: `L9783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9783) · [Before (L9783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9783)

```diff
-             this.LK = GR, this.seed = yR, this.blockMetadata = uR, this.maxTreeRadius = void 0, this.treePointGen = void 0, this.minTreeHeight = 4, this.maxTreeHeight = 7, this.treeInfos = void 0, this.canopyInfos = void 0, this.deadWoodIds = void 0;
+             this.hx = Qr, this.seed = Zr, this.blockMetadata = ar, this.maxTreeRadius = void 0, this.treePointGen = void 0, this.minTreeHeight = 4, this.maxTreeHeight = 7, this.treeInfos = void 0, this.canopyInfos = void 0, this.deadWoodIds = void 0;
```

#### 780. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9786` → after: `L9786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9786) · [Before (L9786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9786)

```diff
-                 [VR.t.Maple]: {
+                 [pr.v.Maple]: {
```

#### 781. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9794` → after: `L9794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9794) · [Before (L9794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9794)

```diff
-                 [VR.t.Pine]: {
+                 [pr.v.Pine]: {
```

#### 782. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9804` → after: `L9804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9804) · [Before (L9804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9804)

```diff
-                 [VR.t.Plum]: {
+                 [pr.v.Plum]: {
```

#### 783. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9812` → after: `L9812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9812) · [Before (L9812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9812)

```diff
-                 [VR.t.Cedar]: {
+                 [pr.v.Cedar]: {
```

#### 784. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9820` → after: `L9820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9820) · [Before (L9820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9820)

```diff
-                 [VR.t.Aspen]: {
+                 [pr.v.Aspen]: {
```

#### 785. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9830` → after: `L9830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9830) · [Before (L9830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9830)

```diff
-                 [VR.t.Jungle]: {
+                 [pr.v.Jungle]: {
```

#### 786. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9840` → after: `L9840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9840) · [Before (L9840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9840)

```diff
-                 [VR.t.Palm]: {
+                 [pr.v.Palm]: {
```

#### 787. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9850` → after: `L9850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9850) · [Before (L9850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9850)

```diff
-                 [VR.t.AutumnMaple]: {
+                 [pr.v.AutumnMaple]: {
```

#### 788. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9858` → after: `L9858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9858) · [Before (L9858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9858)

```diff
-                 [VR.t.Pear]: {
+                 [pr.v.Pear]: {
```

#### 789. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9868` → after: `L9868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9868) · [Before (L9868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9868)

```diff
-                 [VR.t.Cherry]: {
+                 [pr.v.Cherry]: {
```

#### 790. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9878` → after: `L9878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9878) · [Before (L9878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9878)

```diff
-                 [VR.t.Spectral]: {
+                 [pr.v.Spectral]: {
```

#### 791. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9886` → after: `L9886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9886) · [Before (L9886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9886)

```diff
-                 [VR.t.Mango]: {
+                 [pr.v.Mango]: {
```

#### 792. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9896` → after: `L9896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9896) · [Before (L9896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9896)

```diff
-                 [VR.t.AutumnAspen]: {
+                 [pr.v.AutumnAspen]: {
```

#### 793. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9906` → after: `L9906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9906) · [Before (L9906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9906)

```diff
-                 [VR.t.Dead]: {
+                 [pr.v.Dead]: {
```

#### 794. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9916` → after: `L9916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9916) · [Before (L9916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9916)

```diff
-                 [VR.t.FallenLog]: {
+                 [pr.v.FallenLog]: {
```

#### 795. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9926-L9927` → after: `L9926-L9927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9926-L9927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L9926-L9927) · [Before (L9926-L9927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L9926-L9927)

```diff
-               }, this.deadWoodIds = ["Barkless Maple Log", "Barkless Maple Log", "Barkless Pine Log", "Barkless Cedar Log"].map((RR => uR[RR].id)), this.maxTreeRadius = RR.maxTreeRadius, this.LK <= 2 * this.maxTreeRadius + 1) throw new Error("Tree radius is too large for chunk si … [truncated]
-             if (this.LK <= this.maxTreeHeight) throw new Error("Max tree height is too large for chunk size");
+               }, this.deadWoodIds = ["Barkless Maple Log", "Barkless Maple Log", "Barkless Pine Log", "Barkless Cedar Log"].map((rr => ar[rr].id)), this.maxTreeRadius = rr.maxTreeRadius, this.hx <= 2 * this.maxTreeRadius + 1) throw new Error("Tree radius is too large for chunk si … [truncated]
+             if (this.hx <= this.maxTreeHeight) throw new Error("Max tree height is too large for chunk size");
```

#### 796. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10001` → after: `L10001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10001) · [Before (L10001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10001)

```diff
-               if (RR.radius > this.maxTreeRadius) throw new Error(`Canopy radius ${RR.radius} for canopy type "${tR}" is larger than tree radius ${this.maxTreeRadius}`)
+               if (rr.radius > this.maxTreeRadius) throw new Error(`Canopy radius ${rr.radius} for canopy type "${Wr}" is larger than tree radius ${this.maxTreeRadius}`)
```

#### 797. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10005-L10006` → after: `L10005-L10006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10005-L10006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10005-L10006) · [Before (L10005-L10006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10005-L10006)

```diff
-             for (const tR of RR.biomeSelector.oy) tR.biome.treeMinDist && (qR = Math.min(qR, tR.biome.treeMinDist), iR = Math.max(iR, tR.biome.treeMinDist));
-             this.treePointGen = new tR.d("tree", 6, !0, !1, yR, 300, GR, {
+             for (const Wr of rr.biomeSelector.AZ) Wr.biome.treeMinDist && (Ir = Math.min(Ir, Wr.biome.treeMinDist), fr = Math.max(fr, Wr.biome.treeMinDist));
+             this.treePointGen = new Wr.b("tree", 6, !0, !1, Zr, 300, Qr, {
```

#### 798. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10014-L10015` → after: `L10014-L10015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10014-L10015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10014-L10015) · [Before (L10014-L10015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10014-L10015)

```diff
-             for (let rR = RR - this.maxTreeRadius; rR < RR + this.LK + this.maxTreeRadius; rR++)
-               for (let RR = JR - this.maxTreeRadius; RR < JR + this.LK + this.maxTreeRadius; RR++) {
+             for (let Nr = rr - this.maxTreeRadius; Nr < rr + this.hx + this.maxTreeRadius; Nr++)
+               for (let rr = Sr - this.maxTreeRadius; rr < Sr + this.hx + this.maxTreeRadius; rr++) {
```

#### 799. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10019` → after: `L10019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10019) · [Before (L10019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10019)

```diff
-                   if (JR.getTotalTreeChance() <= 0 && console.error("Biome", JR, "has 0 total tree chance"), GR.getOrGenerate(rR, RR, uR.f.WaterHeight) !== ZR.o) continue;
+                   if (Sr.getTotalTreeChance() <= 0 && console.error("Biome", Sr, "has 0 total tree chance"), Qr.getOrGenerate(Nr, rr, ar.f.WaterHeight) !== jr.l) continue;
```

#### 800. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10021` → after: `L10021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10021) · [Before (L10021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10021)

```diff
-                   if (iR.c.isInCave(rR, yR, RR, tR)) continue;
+                   if (fr.d.isInCave(Nr, Zr, rr, Wr)) continue;
```

#### 801. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10023-L10024` → after: `L10023-L10024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10023-L10024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10023-L10024) · [Before (L10023-L10024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10023-L10024)

```diff
-                   if (pR.d.isNearFixedPointPrefab(rR, RR, fR)) continue;
-                   const eR = new wR.i(`${rR}${RR}${this.seed}treeHeight`),
+                   if (Or.e.isNearFixedPointPrefab(Nr, rr, Er)) continue;
+                   const Ur = new mr.l(`${Nr}${rr}${this.seed}treeHeight`),
```

#### 802. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10030` → after: `L10030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10030) · [Before (L10030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10030)

```diff
-                   if (aR === VR.t.FallenLog) {
+                   if (tr === pr.v.FallenLog) {
```

#### 803. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10033` → after: `L10033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10033) · [Before (L10033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10033)

```diff
-                       if (GR.getOrGenerate(0 === nR ? rR + JR : rR, 0 === nR ? RR : RR + JR, uR.f.GroundHeight) !== yR) {
+                       if (Qr.getOrGenerate(0 === zr ? Nr + Sr : Nr, 0 === zr ? rr : rr + Sr, ar.f.GroundHeight) !== Zr) {
```

#### 804. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10054-L10055` → after: `L10054-L10055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10054-L10055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10054-L10055) · [Before (L10054-L10055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10054-L10055)

```diff
-               uR = null !== (GR = tR.minHeight) && void 0 !== GR ? GR : this.minTreeHeight,
-               ZR = null !== (yR = tR.maxHeight) && void 0 !== yR ? yR : this.maxTreeHeight;
+               ar = null !== (Qr = Wr.minHeight) && void 0 !== Qr ? Qr : this.minTreeHeight,
+               jr = null !== (Zr = Wr.maxHeight) && void 0 !== Zr ? Zr : this.maxTreeHeight;
```

#### 805. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10070-L10071` → after: `L10070-L10071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10070-L10071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10070-L10071) · [Before (L10070-L10071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10070-L10071)

```diff
-               const tR = new wR.i(`${uR.treeX}|${uR.treeZ}|${uR.trunkBase}|tree`);
-               if (uR.treeType === VR.t.Dead || uR.treeType === VR.t.FallenLog) {
+               const Wr = new mr.l(`${ar.treeX}|${ar.treeZ}|${ar.trunkBase}|tree`);
+               if (ar.treeType === pr.v.Dead || ar.treeType === pr.v.FallenLog) {
```

#### 806. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10088` → after: `L10088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10088) · [Before (L10088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10088)

```diff
-                 tR >= JR && tR < JR + this.LK && uR >= GR && uR < GR + this.LK && qR >= yR && qR < yR + this.LK && RR.set(tR - JR, uR - GR, qR - yR, ZR)
+                 Wr >= Sr && Wr < Sr + this.hx && ar >= Qr && ar < Qr + this.hx && Ir >= Zr && Ir < Zr + this.hx && rr.set(Wr - Sr, ar - Qr, Ir - Zr, jr)
```

#### 807. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10090` → after: `L10090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10090) · [Before (L10090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10090)

```diff
-             if (tR.treeType === VR.t.FallenLog) {
+             if (Wr.treeType === pr.v.FallenLog) {
```

#### 808. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10092` → after: `L10092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10092) · [Before (L10092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10092)

```diff
-               for (let RR = -1; RR < KR - 1; RR++) wR(0 === tR.vineDir ? qR + RR : qR, fR, 0 === tR.vineDir ? iR : iR + RR);
+               for (let rr = -1; rr < xr - 1; rr++) mr(0 === Wr.vineDir ? Ir + rr : Ir, Er, 0 === Wr.vineDir ? fr : fr + rr);
```

#### 809. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10117` → after: `L10117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10117) · [Before (L10117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10117)

```diff
-               aR = Math.min(rR, GR + this.LK - 1);
+               tr = Math.min(Nr, Qr + this.hx - 1);
```

#### 810. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10120` → after: `L10120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10120) · [Before (L10120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10120)

```diff
-               nR = Math.min(ZR + KR.radius, JR + this.LK - 1);
+               zr = Math.min(jr + xr.radius, Sr + this.hx - 1);
```

#### 811. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10123` → after: `L10123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10123) · [Before (L10123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10123)

```diff
-               WR = Math.min(qR + KR.radius, yR + this.LK - 1);
+               nr = Math.min(Ir + xr.radius, Zr + this.hx - 1);
```

#### 812. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10198` → after: `L10198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10198) · [Before (L10198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10198)

```diff
-               if (aR !== rJ.SOMETIMES) return void console.error(`Invalid canopy-generation type: ${aR}`);
+               if (tr !== NS.SOMETIMES) return void console.error(`Invalid canopy-generation type: ${tr}`);
```

#### 813. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10205-L10207` → after: `L10205-L10207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10205-L10207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10205-L10207) · [Before (L10205-L10207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10205-L10207)

```diff
-             const ZR = JR + this.LK,
-               qR = GR + this.LK,
-               iR = yR + this.LK,
+             const jr = Sr + this.hx,
+               Ir = Qr + this.hx,
+               fr = Zr + this.hx,
```

#### 814. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10233` → after: `L10233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10233) · [Before (L10233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10233)

```diff
-             const JR = this.LK >> 1,
+             const Sr = this.hx >> 1,
```

#### 815. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10255` → after: `L10255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10255) · [Before (L10255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10255)

```diff
-         var LJ = GR(41301);
+         var hS = Qr(41678);
```

#### 816. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10259` → after: `L10259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10259) · [Before (L10259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10259)

```diff
-             this.biomeSelector = RR, this.noWaterHeightmapGenerator = JR, this.hydrology = GR, this.lakeRadiusNoiseModifier = uR, this.seed = ZR, this.needOutsideWaterDist = iR, this.distApart = 64, this.minRadius = 14, this.maxRadius = 30, this.minGapFromHydrologyWater = 12, thi … [truncated]
+             this.biomeSelector = rr, this.noWaterHeightmapGenerator = Sr, this.hydrology = Qr, this.lakeRadiusNoiseModifier = ar, this.seed = jr, this.needOutsideWaterDist = fr, this.distApart = 64, this.minRadius = 14, this.maxRadius = 30, this.minGapFromHydrologyWater = 12, thi … [truncated]
```

#### 817. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10269` → after: `L10269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10269) · [Before (L10269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10269)

```diff
-               if ((0, yR.L)(KR, RR, JR) > uR) continue;
+               if ((0, Zr.H)(xr, rr, Sr) > ar) continue;
```

#### 818. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10273` → after: `L10273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10273) · [Before (L10273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10273)

```diff
-               const tR = (0, yR.K)(GR.origin, RR, JR),
+               const Wr = (0, Zr.G)(Qr.origin, rr, Sr),
```

#### 819. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10290` → after: `L10290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10290) · [Before (L10290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10290)

```diff
-             if (!(0, VR.I)(JR)) return JR.lake;
+             if (!(0, pr.L)(Sr)) return Sr.lake;
```

#### 820. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10303` → after: `L10303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10303) · [Before (L10303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10303)

```diff
-             } = this, uR = new wR.i(`${RR[0]}|${RR[1]}${this.seed}oasisLake`), ZR = this.hydrology.getHydrologyWaterGenInfo(RR[0], RR[1]), qR = Math.floor(ZR.distFromWater - ZR.waterRadius - tR);
+             } = this, ar = new mr.l(`${rr[0]}|${rr[1]}${this.seed}oasisLake`), jr = this.hydrology.getHydrologyWaterGenInfo(rr[0], rr[1]), Ir = Math.floor(jr.distFromWater - jr.waterRadius - Wr);
```

#### 821. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10323` → after: `L10323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10323) · [Before (L10323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10323)

```diff
-             this.biomeSelector = RR, this.noWaterHeightmapGenerator = JR, this.needOutsideWaterBodyDist = ZR, this.ny = iR, this.gridSize = 224, this.cellCenterMaxOffset = void 0, this.maxRiverSettings = {
+             this.biomeSelector = rr, this.noWaterHeightmapGenerator = Sr, this.needOutsideWaterBodyDist = jr, this.yZ = fr, this.gridSize = 224, this.cellCenterMaxOffset = void 0, this.maxRiverSettings = {
```

#### 822. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10335` → after: `L10335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10335) · [Before (L10335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10335)

```diff
-             }, this.waterBodyInfos = void 0, this.scatteredLakes = void 0, AJ || (AJ = new LJ.b("water cells", qR ? 800 : 60, 6e4)), this.waterBodyInfos = AJ.partition();
+             }, this.waterBodyInfos = void 0, this.scatteredLakes = void 0, eS || (eS = new hS.c("water cells", Ir ? 800 : 60, 6e4)), this.waterBodyInfos = eS.partition();
```

#### 823. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10343` → after: `L10343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10343) · [Before (L10343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10343)

```diff
-             }], `${GR}GlobalHeightmapOffset`), this.lakeRadiusNoiseAmplitude = (0, yR.B)(this.lakeRadiusNoiseModifier), this.scatteredLakes = new UJ(RR, JR, this, this.lakeRadiusNoiseModifier, GR, tR, ZR, qR)
+             }], `${Qr}GlobalHeightmapOffset`), this.lakeRadiusNoiseAmplitude = (0, Zr.x)(this.lakeRadiusNoiseModifier), this.scatteredLakes = new YS(rr, Sr, this, this.lakeRadiusNoiseModifier, Qr, Wr, jr, Ir)
```

#### 824. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10347` → after: `L10347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10347) · [Before (L10347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10347)

```diff
-             if (!this.ny) return MJ(this.needOutsideWaterBodyDist);
+             if (!this.yZ) return BS(this.needOutsideWaterBodyDist);
```

#### 825. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10351` → after: `L10351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10351) · [Before (L10351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10351)

```diff
-             return null === tR || XJ(yR) <= XJ(tR) ? yR : tR
+             return null === Wr || yS(Zr) <= yS(Wr) ? Zr : Wr
```

#### 826. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10377` → after: `L10377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10377) · [Before (L10377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10377)

```diff
-                 xZ: RR,
+                 Oj: rr,
```

#### 827. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10380` → after: `L10380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10380) · [Before (L10380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10380)

```diff
-               } = (0, yR.z)(GR, tR.origin, tR.downhill.origin);
+               } = (0, Zr.v)(Qr, Wr.origin, Wr.downhill.origin);
```

#### 828. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10392` → after: `L10392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10392) · [Before (L10392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10392)

```diff
-                 xZ: RR,
+                 Oj: rr,
```

#### 829. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10395` → after: `L10395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10395) · [Before (L10395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10395)

```diff
-               } = (0, yR.z)(GR, wR.origin, tR.origin), eR = Math.floor(RR);
+               } = (0, Zr.v)(Qr, mr.origin, Wr.origin), Ur = Math.floor(rr);
```

#### 830. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10416` → after: `L10416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10416) · [Before (L10416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10416)

```diff
-                 ZR *= uR.lakeRadius / this.lakeSettings.maxRadius, wR = uR.lakeRadius - ZR, GR = (0, yR.K)(tR.origin, RR, JR) - wR
+                 jr *= ar.lakeRadius / this.lakeSettings.maxRadius, mr = ar.lakeRadius - jr, Qr = (0, Zr.G)(Wr.origin, rr, Sr) - mr
```

#### 831. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10430` → after: `L10430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10430) · [Before (L10430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10430)

```diff
-                 const GR = (0, yR.K)(tR.origin, RR, JR),
+                 const Qr = (0, Zr.G)(Wr.origin, rr, Sr),
```

#### 832. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10457` → after: `L10457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10457) · [Before (L10457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10457)

```diff
-             if (!(0, VR.I)(GR)) return this.lastReadInfo.cellX = RR, this.lastReadInfo.cellZ = JR, this.lastReadInfo.info = GR, GR;
+             if (!(0, pr.L)(Qr)) return this.lastReadInfo.cellX = rr, this.lastReadInfo.cellZ = Sr, this.lastReadInfo.info = Qr, Qr;
```

#### 833. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10521` → after: `L10521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10521) · [Before (L10521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10521)

```diff
-             return -1 !== tR ? yR : null
+             return -1 !== Wr ? Zr : null
```

#### 834. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10526` → after: `L10526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10526) · [Before (L10526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10526)

```diff
-               tR = new wR.i(`${RR}${JR}${this.seed}riverCell`);
+               Wr = new mr.l(`${rr}${Sr}${this.seed}riverCell`);
```

#### 835. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10566-L10569` → after: `L10566-L10569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10566-L10569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10566-L10569) · [Before (L10566-L10569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10566-L10569)

```diff
-           Yy: 40,
-           wy: -85,
-           ey: -85,
-           ky: .5
+           JZ: 40,
+           nZ: -85,
+           eZ: -85,
+           DZ: .5
```

#### 836. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10573-L10576` → after: `L10573-L10576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10573-L10576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10573-L10576) · [Before (L10573-L10576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10573-L10576)

```diff
-           Yy: 13,
-           wy: -100,
-           ey: -85,
-           ky: .28
+           JZ: 13,
+           nZ: -100,
+           eZ: -85,
+           DZ: .28
```

#### 837. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10580-L10583` → after: `L10580-L10583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10580-L10583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10580-L10583) · [Before (L10580-L10583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10580-L10583)

```diff
-           Yy: 10,
-           wy: -100,
-           ey: -75,
-           ky: .4
+           JZ: 10,
+           nZ: -100,
+           eZ: -75,
+           DZ: .4
```

#### 838. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10587-L10590` → after: `L10587-L10590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10587-L10590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10587-L10590) · [Before (L10587-L10590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10587-L10590)

```diff
-           Yy: 5,
-           wy: -80,
-           ey: 15,
-           ky: .5
+           JZ: 5,
+           nZ: -80,
+           eZ: 15,
+           DZ: .5
```

#### 839. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10594-L10597` → after: `L10594-L10597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10594-L10597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10594-L10597) · [Before (L10594-L10597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10594-L10597)

```diff
-           Yy: 4,
-           wy: -60,
-           ey: 40,
-           ky: .5
+           JZ: 4,
+           nZ: -60,
+           eZ: 40,
+           DZ: .5
```

#### 840. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10601-L10602` → after: `L10601-L10602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10601-L10602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10601-L10602) · [Before (L10601-L10602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10601-L10602)

```diff
-             this.seed = JR, this.LK = GR, this.jy = void 0, this.jy = yR.map((yR => {
-               const uR = new tR.d("ore", yR.Yy, !1, !0, `${JR}${yR.blockName}`, 20, GR, null, !0);
+             this.seed = Sr, this.hx = Qr, this.oZ = void 0, this.oZ = Zr.map((Zr => {
+               const ar = new Wr.b("ore", Zr.JZ, !1, !0, `${Sr}${Zr.blockName}`, 20, Qr, null, !0);
```

#### 841. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10604` → after: `L10604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10604) · [Before (L10604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10604)

```diff
-                 Vq: (0, VR.F)(yR.blockName, RR),
+                 aI: (0, pr.F)(Zr.blockName, rr),
```

#### 842. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10606-L10609` → after: `L10606-L10609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10606-L10609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10606-L10609) · [Before (L10606-L10609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10606-L10609)

```diff
-                 Yy: yR.Yy,
-                 wy: yR.wy,
-                 ey: yR.ey,
-                 ky: yR.ky,
+                 JZ: Zr.JZ,
+                 nZ: Zr.nZ,
+                 eZ: Zr.eZ,
+                 DZ: Zr.DZ,
```

#### 843. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10616-L10619` → after: `L10616-L10619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10616-L10619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10616-L10619) · [Before (L10616-L10619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10616-L10619)

```diff
-               tR = new wR.i(`${RR}${JR}${this.seed}oreExists`);
-             for (const uR of this.jy) {
-               const ZR = uR.pointGenerator.getPointsAroundPoint(RR + this.LK / 2, JR + this.LK / 2),
-                 qR = RR + this.LK + uR.radius,
+               Wr = new mr.l(`${rr}${Sr}${this.seed}oreExists`);
+             for (const ar of this.oZ) {
+               const jr = ar.pointGenerator.getPointsAroundPoint(rr + this.hx / 2, Sr + this.hx / 2),
+                 Ir = rr + this.hx + ar.radius,
```

#### 844. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10621` → after: `L10621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10621) · [Before (L10621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10621)

```diff
-                 fR = JR + this.LK + uR.radius,
+                 Er = Sr + this.hx + ar.radius,
```

#### 845. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10625-L10626` → after: `L10625-L10626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10625-L10626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10625-L10626) · [Before (L10625-L10626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10625-L10626)

```diff
-                 const ZR = new wR.i(`${KR[0]}${KR[1]}${this.seed}ore`),
-                   rR = Math.floor(ZR.next() * (uR.ey + 1 - uR.wy)) + uR.wy,
+                 const jr = new mr.l(`${xr[0]}${xr[1]}${this.seed}ore`),
+                   Nr = Math.floor(jr.next() * (ar.eZ + 1 - ar.nZ)) + ar.nZ,
```

#### 846. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10628` → after: `L10628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10628) · [Before (L10628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10628)

```diff
-                   aR = Math.min(RR + this.LK - 1, KR[0] + uR.radius),
+                   tr = Math.min(rr + this.hx - 1, xr[0] + ar.radius),
```

#### 847. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10630` → after: `L10630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10630) · [Before (L10630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10630)

```diff
-                   nR = Math.min(JR + this.LK - 1, KR[1] + uR.radius);
+                   zr = Math.min(Sr + this.hx - 1, xr[1] + ar.radius);
```

#### 848. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10633` → after: `L10633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10633) · [Before (L10633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10633)

```diff
-                     (0, yR.F)(KR, RR, JR) > uR.radius || (tR.next() >= uR.ky || GR.push(RR, rR, JR, uR.Vq))
+                     (0, Zr.B)(xr, rr, Sr) > ar.radius || (Wr.next() >= ar.DZ || Qr.push(rr, Nr, Sr, ar.aI))
```

#### 849. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10640` → after: `L10640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10640) · [Before (L10640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10640)

```diff
-             const iR = GR + this.LK,
+             const fr = Qr + this.hx,
```

#### 850. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10654` → after: `L10654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10654) · [Before (L10654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10654)

```diff
-         var pJ = GR(41309);
+         var OS = Qr(41684);
```

#### 851. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10664-L10665` → after: `L10664-L10665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10664-L10665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10664-L10665) · [Before (L10664-L10665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10664-L10665)

```diff
-             py: GR,
-             Ny: yR,
+             HZ: Qr,
+             MZ: Zr,
```

#### 852. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10675` → after: `L10675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10675) · [Before (L10675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10675)

```diff
-           return GR.My && yR.push({
+           return Qr.lZ && Zr.push({
```

#### 853. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10677-L10678` → after: `L10677-L10678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10677-L10678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10677-L10678) · [Before (L10677-L10678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10677-L10678)

```diff
-             Vq: RR[JR].id
-           }), GR.By && yR.push({
+             aI: rr[Sr].id
+           }), Qr.XZ && Zr.push({
```

#### 854. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10680` → after: `L10680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10680) · [Before (L10680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10680)

```diff
-             Vq: RR[`${JR}|meta|rot2|side`].id
+             aI: rr[`${Sr}|meta|rot2|side`].id
```

#### 855. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10683` → after: `L10683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10683) · [Before (L10683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10683)

```diff
-             Vq: RR[`${JR}|meta|rot4|side`].id
+             aI: rr[`${Sr}|meta|rot4|side`].id
```

#### 856. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10686` → after: `L10686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10686) · [Before (L10686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10686)

```diff
-             Vq: RR[`${JR}|meta|rot1|side`].id
+             aI: rr[`${Sr}|meta|rot1|side`].id
```

#### 857. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10689-L10690` → after: `L10689-L10690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10689-L10690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10689-L10690) · [Before (L10689-L10690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10689-L10690)

```diff
-             Vq: RR[`${JR}|meta|rot3|side`].id
-           }), GR.ly && yR.push({
+             aI: rr[`${Sr}|meta|rot3|side`].id
+           }), Qr.PZ && Zr.push({
```

#### 858. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10692` → after: `L10692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10692) · [Before (L10692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10692)

```diff
-             Vq: RR[`${JR}|meta|rot1|top`].id
+             aI: rr[`${Sr}|meta|rot1|top`].id
```

#### 859. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10701-L10703` → after: `L10701-L10703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10701-L10703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10701-L10703) · [Before (L10701-L10703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10701-L10703)

```diff
-                 My: !0,
-                 By: !0,
-                 ly: !0
+                 lZ: !0,
+                 XZ: !0,
+                 PZ: !0
```

#### 860. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10706-L10709` → after: `L10706-L10709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10706-L10709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10706-L10709) · [Before (L10706-L10709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10706-L10709)

```diff
-               gy: .8,
-               vy: 0,
-               py: .12,
-               Ny: .25,
+               qZ: .8,
+               RZ: 0,
+               HZ: .12,
+               MZ: .25,
```

#### 861. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10715-L10717` → after: `L10715-L10717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10715-L10717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10715-L10717) · [Before (L10715-L10717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10715-L10717)

```diff
-                 My: !0,
-                 By: !0,
-                 ly: !1
+                 lZ: !0,
+                 XZ: !0,
+                 PZ: !1
```

#### 862. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10720-L10722` → after: `L10720-L10722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10720-L10722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10720-L10722) · [Before (L10720-L10722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10720-L10722)

```diff
-               gy: .7,
-               vy: 2,
-               py: .58
+               qZ: .7,
+               RZ: 2,
+               HZ: .58
```

#### 863. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10725` → after: `L10725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10725) · [Before (L10725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10725)

```diff
-             const GR = JR.Oy;
+             const Qr = Sr.gZ;
```

#### 864. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10729-L10731` → after: `L10729-L10731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10729-L10731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10729-L10731) · [Before (L10729-L10731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10729-L10731)

```diff
-                 My: JR.My,
-                 By: JR.By,
-                 ly: JR.ly
+                 lZ: Sr.lZ,
+                 XZ: Sr.XZ,
+                 PZ: Sr.PZ
```

#### 865. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10734-L10739` → after: `L10734-L10739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10734-L10739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10734-L10739) · [Before (L10734-L10739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10734-L10739)

```diff
-               gy: JR.gy,
-               vy: JR.vy,
-               py: JR.py,
-               Ny: null === GR || void 0 === GR ? void 0 : GR.Ny,
-               shallowClusterY: null === GR || void 0 === GR ? void 0 : GR.Dy,
-               deepClusterY: null === GR || void 0 === GR ? void 0 : GR.Hy
+               qZ: Sr.qZ,
+               RZ: Sr.RZ,
+               HZ: Sr.HZ,
+               MZ: null === Qr || void 0 === Qr ? void 0 : Qr.MZ,
+               shallowClusterY: null === Qr || void 0 === Qr ? void 0 : Qr.GZ,
+               deepClusterY: null === Qr || void 0 === Qr ? void 0 : Qr.kZ
```

#### 866. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10765` → after: `L10765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10765) · [Before (L10765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10765)

```diff
-               RR - uR.floorY + 1 < tR || ZR.push(RR === uR.ceilingY ? uR : {
+               rr - ar.floorY + 1 < Wr || jr.push(rr === ar.ceilingY ? ar : {
```

#### 867. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10775` → after: `L10775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10775) · [Before (L10775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10775)

```diff
-             this.heightmapVals = RR, this.allCavesCache = void 0, this.decoratableCavesCache = void 0, this.allCavesCache = new yR.n(new cJ(JR)), this.decoratableCavesCache = new yR.n(new PJ(JR, RR, GR, tR))
+             this.heightmapVals = rr, this.allCavesCache = void 0, this.decoratableCavesCache = void 0, this.allCavesCache = new Zr.j(new MS(Sr)), this.decoratableCavesCache = new Zr.j(new GS(Sr, rr, Qr, Wr))
```

#### 868. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10800` → after: `L10800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10800) · [Before (L10800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10800)

```diff
-             mJ(RR + iR.offset[0], JR + iR.offset[1], GR + iR.offset[2], uR) && (iR.offset === gJ ? ZR = iR : qR.push(iR))
+             AS(rr + fr.offset[0], Sr + fr.offset[1], Qr + fr.offset[2], ar) && (fr.offset === LS ? jr = fr : Ir.push(fr))
```

#### 869. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10802` → after: `L10802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10802) · [Before (L10802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10802)

```diff
-           return null !== ZR ? ZR : 0 === qR.length ? null : qR[Math.floor(tR * qR.length)]
+           return null !== jr ? jr : 0 === Ir.length ? null : Ir[Math.floor(Wr * Ir.length)]
```

#### 870. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10807` → after: `L10807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10807) · [Before (L10807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10807)

```diff
-             this.LK = JR, this.seed = GR, this.pointsGen = void 0, this.configs = void 0, this.maxHalfBox = void 0;
+             this.hx = Sr, this.seed = Qr, this.pointsGen = void 0, this.configs = void 0, this.maxHalfBox = void 0;
```

#### 871. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10813` → after: `L10813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10813) · [Before (L10813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10813)

```diff
-               if (!Number.isInteger(tR.clusterBoxSize) || tR.clusterBoxSize < 2 || tR.clusterBoxSize % 2 !== 0) throw new Error(`Decoration kind "${tR.seedPrefix}" has invalid clusterBoxSize (${tR.clusterBoxSize}); must be an even integer >= 2 (the 2x2x2-cell scatter scheme needs … [truncated]
+               if (!Number.isInteger(Wr.clusterBoxSize) || Wr.clusterBoxSize < 2 || Wr.clusterBoxSize % 2 !== 0) throw new Error(`Decoration kind "${Wr.seedPrefix}" has invalid clusterBoxSize (${Wr.clusterBoxSize}); must be an even integer >= 2 (the 2x2x2-cell scatter scheme needs … [truncated]
```

#### 872. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10815` → after: `L10815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10815) · [Before (L10815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10815)

```diff
-               RR > ZR && (ZR = RR), qR += Math.max(tR.py, null !== (iR = tR.Ny) && void 0 !== iR ? iR : tR.py)
+               rr > jr && (jr = rr), Ir += Math.max(Wr.HZ, null !== (fr = Wr.MZ) && void 0 !== fr ? fr : Wr.HZ)
```

#### 873. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10817-L10818` → after: `L10817-L10818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10817-L10818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10817-L10818) · [Before (L10817-L10818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10817-L10818)

```diff
-             if (qR > 1) throw new Error(`Cave decoration cluster chances sum to ${qR} at peak depth; must not exceed 1 (later configs would be silently squeezed).`);
-             this.pointsGen = new tR.d("caveDeco", 10, !1, !0, GR, 4, JR, null, !0), this.pointsGen.assertReachableFromChunkCentre(JR, ZR), this.configs = uR, this.maxHalfBox = ZR
+             if (Ir > 1) throw new Error(`Cave decoration cluster chances sum to ${Ir} at peak depth; must not exceed 1 (later configs would be silently squeezed).`);
+             this.pointsGen = new Wr.b("caveDeco", 10, !1, !0, Qr, 4, Sr, null, !0), this.pointsGen.assertReachableFromChunkCentre(Sr, jr), this.configs = ar, this.maxHalfBox = jr
```

#### 874. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10822` → after: `L10822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10822) · [Before (L10822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10822)

```diff
-               uR = this.LK,
+               ar = this.hx,
```

#### 875. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10839` → after: `L10839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10839) · [Before (L10839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10839)

```diff
-             for (const qR of uR) qR.y >= GR && qR.y < ZR && RR.set(qR.x - JR, qR.y - GR, qR.z - yR, qR.Vq)
+             for (const Ir of ar) Ir.y >= Qr && Ir.y < jr && rr.set(Ir.x - Sr, Ir.y - Qr, Ir.z - Zr, Ir.aI)
```

#### 876. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10844` → after: `L10844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10844) · [Before (L10844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10844)

```diff
-             const fR = new wR.i(`${this.seed}|${RR}|${JR}|cluster`),
+             const Er = new mr.l(`${this.seed}|${rr}|${Sr}|cluster`),
```

#### 877. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10858` → after: `L10858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10858) · [Before (L10858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10858)

```diff
-             if (this.scatterClusterCells(RR, aR, JR, nR, ZR, fR, UR), !(UR.length < nR.vy))
+             if (this.scatterClusterCells(rr, tr, Sr, zr, jr, Er, Yr), !(Yr.length < zr.RZ))
```

#### 878. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10864` → after: `L10864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10864) · [Before (L10864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10864)

```diff
-               gy: iR,
+               qZ: fr,
```

#### 879. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10884` → after: `L10884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10884) · [Before (L10884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10884)

```diff
-                     Vq: UR.Vq
+                     aI: Yr.aI
```

#### 880. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10898` → after: `L10898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10898) · [Before (L10898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10898)

```diff
-             this.prefabGenerator = yR, this.seed = void 0, this.LK = void 0, this.biomeSelector = void 0, this.treeGenerator = void 0, this.blockMetadata = void 0, this.oreGenerator = void 0, this.riverbedFeatureGenerator = void 0, this.bedrockId = void 0, this.waterId = void 0,  … [truncated]
+             this.prefabGenerator = Zr, this.seed = void 0, this.hx = void 0, this.biomeSelector = void 0, this.treeGenerator = void 0, this.blockMetadata = void 0, this.oreGenerator = void 0, this.riverbedFeatureGenerator = void 0, this.bedrockId = void 0, this.waterId = void 0,  … [truncated]
```

#### 881. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10901` → after: `L10901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10901) · [Before (L10901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10901)

```diff
-             if (GR + this.LK <= ZR.q.bedrockLevel) return {
+             if (Qr + this.hx <= jr.n.bedrockLevel) return {
```

#### 882. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10904` → after: `L10904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10904) · [Before (L10904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10904)

```diff
-             const WR = new KR.e,
+             const nr = new xr.b,
```

#### 883. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10908-L10910` → after: `L10908-L10910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10908-L10910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10908-L10910) · [Before (L10908-L10910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10908-L10910)

```diff
-             if (CR >= GR && AR < GR + this.LK)
-               for (let yR = JR; yR < JR + this.LK; yR++)
-                 for (let iR = tR; iR < tR + this.LK; iR++) {
+             if (Kr >= Qr && er < Qr + this.hx)
+               for (let Zr = Sr; Zr < Sr + this.hx; Zr++)
+                 for (let fr = Wr; fr < Wr + this.hx; fr++) {
```

#### 884. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10914-L10915` → after: `L10914-L10915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10914-L10915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10914-L10915) · [Before (L10914-L10915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10914-L10915)

```diff
-                   if (KR >= GR && KR < GR + this.LK) {
-                     const fR = qR.get(yR, iR, uR.f.IsLake) === ZR.h ? VR.getDryBedBlock(yR, KR, iR) : VR.getTopsoilBlock(yR, KR, iR);
+                   if (xr >= Qr && xr < Qr + this.hx) {
+                     const Er = Ir.get(Zr, fr, ar.f.IsLake) === jr.g ? pr.getDryBedBlock(Zr, xr, fr) : pr.getTopsoilBlock(Zr, xr, fr);
```

#### 885. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10919-L10921` → after: `L10919-L10921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10919-L10921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10919-L10921) · [Before (L10919-L10921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10919-L10921)

```diff
-             if (CR + 1 >= GR && AR - 4 < GR + this.LK)
-               for (let yR = JR; yR < JR + this.LK; yR++)
-                 for (let ZR = tR; ZR < tR + this.LK; ZR++) {
+             if (Kr + 1 >= Qr && er - 4 < Qr + this.hx)
+               for (let Zr = Sr; Zr < Sr + this.hx; Zr++)
+                 for (let jr = Wr; jr < Wr + this.hx; jr++) {
```

#### 886. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10925` → after: `L10925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10925) · [Before (L10925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10925)

```diff
-                     KR = Math.min(VR, GR + this.LK);
+                     xr = Math.min(pr, Qr + this.hx);
```

#### 887. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10933-L10934` → after: `L10933-L10934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10933-L10934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10933-L10934) · [Before (L10933-L10934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10933-L10934)

```diff
-               for (let GR = Math.max(tR - 4, 0); GR < Math.min(tR, this.LK); GR++) RR.set(JR, GR, uR, this.dirtId);
-               tR >= 0 && tR < this.LK && RR.set(JR, tR, uR, this.grassBlockId)
+               for (let Qr = Math.max(Wr - 4, 0); Qr < Math.min(Wr, this.hx); Qr++) rr.set(Sr, Qr, ar, this.dirtId);
+               Wr >= 0 && Wr < this.hx && rr.set(Sr, Wr, ar, this.grassBlockId)
```

#### 888. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10938-L10939` → after: `L10938-L10939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10938-L10939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10938-L10939) · [Before (L10938-L10939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10938-L10939)

```diff
-               for (let ZR = JR; ZR < JR + this.LK; ZR++)
-                 for (let iR = tR; iR < tR + this.LK; iR++) {
+               for (let jr = Sr; jr < Sr + this.hx; jr++)
+                 for (let fr = Wr; fr < Wr + this.hx; fr++) {
```

#### 889. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10942` → after: `L10942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10942) · [Before (L10942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10942)

```diff
-                     KR = Math.min(VR - 4, GR + this.LK),
+                     xr = Math.min(pr - 4, Qr + this.hx),
```

#### 890. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10947` → after: `L10947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10947) · [Before (L10947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10947)

```diff
-                     RR.set(ZR - JR, yR - GR, iR - tR, 0 !== uR ? uR : fR)
+                     rr.set(jr - Sr, Zr - Qr, fr - Wr, 0 !== ar ? ar : Er)
```

#### 891. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10951-L10953` → after: `L10951-L10953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10951-L10953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10951-L10953) · [Before (L10951-L10953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10951-L10953)

```diff
-             if (CR - 4 >= GR && this.oreGenerator.addOresToChunk(RR, JR, GR, tR, 4, qR, eR), CR >= GR && (iR.c.addCavesToChunk(RR, JR, GR, tR, qR, rR), SJ.addCaveDecorationsToChunk(RR, JR, GR, tR, this.LK, nR)), ZR.q.bedrockLevel >= GR && ZR.q.bedrockLevel < GR + this.LK)
-               for (let yR = JR; yR < JR + this.LK; yR++)
-                 for (let uR = tR; uR < tR + this.LK; uR++) RR.set(yR - JR, ZR.q.bedrockLevel - GR, uR - tR, this.bedrockId);
+             if (Kr - 4 >= Qr && this.oreGenerator.addOresToChunk(rr, Sr, Qr, Wr, 4, Ir, Ur), Kr >= Qr && (fr.d.addCavesToChunk(rr, Sr, Qr, Wr, Ir, Nr), iS.addCaveDecorationsToChunk(rr, Sr, Qr, Wr, this.hx, zr)), jr.n.bedrockLevel >= Qr && jr.n.bedrockLevel < Qr + this.hx)
+               for (let Zr = Sr; Zr < Sr + this.hx; Zr++)
+                 for (let ar = Wr; ar < Wr + this.hx; ar++) rr.set(Zr - Sr, jr.n.bedrockLevel - Qr, ar - Wr, this.bedrockId);
```

#### 892. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10957-L10959` → after: `L10957-L10959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10957-L10959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10957-L10959) · [Before (L10957-L10959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10957-L10959)

```diff
-                 ZR = Math.min(JR + this.LK - 1, uR.maxX),
-                 qR = Math.min(GR + this.LK - 1, uR.ey),
-                 iR = Math.min(tR + this.LK - 1, uR.maxZ);
+                 jr = Math.min(Sr + this.hx - 1, ar.maxX),
+                 Ir = Math.min(Qr + this.hx - 1, ar.eZ),
+                 fr = Math.min(Wr + this.hx - 1, ar.maxZ);
```

#### 893. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10961` → after: `L10961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10961) · [Before (L10961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10961)

```diff
-                 for (let ZR = Math.max(GR, uR.wy); ZR <= qR; ZR++)
+                 for (let jr = Math.max(Qr, ar.nZ); jr <= Ir; jr++)
```

#### 894. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10974-L10975` → after: `L10974-L10975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10974-L10975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10974-L10975) · [Before (L10974-L10975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10974-L10975)

```diff
-               for (let GR = Math.max(uR, 0); GR < Math.min(ZR, this.LK); GR++) RR.set(JR, GR, tR, this.waterId);
-               ZR >= 0 && ZR < this.LK && RR.set(JR, ZR, tR, BR[yR + 4])
+               for (let Qr = Math.max(ar, 0); Qr < Math.min(jr, this.hx); Qr++) rr.set(Sr, Qr, Wr, this.waterId);
+               jr >= 0 && jr < this.hx && rr.set(Sr, jr, Wr, Tr[Zr + 4])
```

#### 895. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10978-L10980` → after: `L10978-L10980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10978-L10980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10978-L10980) · [Before (L10978-L10980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10978-L10980)

```diff
-             if (this.addSurfaceBlocks(RR, GR, UR.lilyPads), XR && CR >= GR && AR < GR + this.LK)
-               for (let iR = JR; iR < JR + this.LK; iR++)
-                 for (let fR = tR; fR < tR + this.LK; fR++) {
+             if (this.addSurfaceBlocks(rr, Qr, Yr.lilyPads), yr && Kr >= Qr && er < Qr + this.hx)
+               for (let fr = Sr; fr < Sr + this.hx; fr++)
+                 for (let Er = Wr; Er < Wr + this.hx; Er++) {
```

#### 896. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10983` → after: `L10983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10983) · [Before (L10983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10983)

```diff
-                   if (VR !== ZR.o && KR >= GR && KR < GR + this.LK)
+                   if (pr !== jr.l && xr >= Qr && xr < Qr + this.hx)
```

#### 897. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10987` → after: `L10987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10987) · [Before (L10987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10987)

```diff
-                       if ((0, yR.L)(uR, iR, fR) < 100) lR === uR[0] && gR === uR[1] || (lR = uR[0], gR = uR[1], bR = new wR.i(`${this.seed}${lR}${gR}`).next() < .3 ? this.chalkId : this.clayId), RR.set(iR - JR, KR - GR, fR - tR, bR), KR - 1 >= GR && RR.set(iR - JR, KR - 1 - GR, f … [truncated]
+                       if ((0, Zr.H)(ar, fr, Er) < 100) vr === ar[0] && Lr === ar[1] || (vr = ar[0], Lr = ar[1], lr = new mr.l(`${this.seed}${vr}${Lr}`).next() < .3 ? this.chalkId : this.clayId), rr.set(fr - Sr, xr - Qr, Er - Wr, lr), xr - 1 >= Qr && rr.set(fr - Sr, xr - 1 - Qr, E … [truncated]
```

#### 898. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10996-L10999` → after: `L10996-L10999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10996-L10999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L10996-L10999) · [Before (L10996-L10999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L10996-L10999)

```diff
-               for (let uR = JR; uR < JR + this.LK; uR++)
-                 for (let ZR = GR; ZR < GR + this.LK; ZR++)
-                   for (let qR = tR; qR < tR + this.LK; qR++) {
-                     const iR = pR.d.getBlockFromFixedPointPrefab(uR, ZR, qR, yR);
+               for (let ar = Sr; ar < Sr + this.hx; ar++)
+                 for (let jr = Qr; jr < Qr + this.hx; jr++)
+                   for (let Ir = Wr; Ir < Wr + this.hx; Ir++) {
+                     const fr = Or.e.getBlockFromFixedPointPrefab(ar, jr, Ir, Zr);
```

#### 899. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11020` → after: `L11020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11020) · [Before (L11020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11020)

```diff
-               tR >= 0 && tR < this.LK && RR.set(GR[yR], tR, GR[yR + 2], GR[yR + 3])
+               Wr >= 0 && Wr < this.hx && rr.set(Qr[Zr], Wr, Qr[Zr + 2], Qr[Zr + 3])
```

#### 900. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11034` → after: `L11034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11034) · [Before (L11034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11034)

```diff
-             this.LK = RR, this.biomeSelector = JR, this.seed = GR, this.random = new wR.i(""), this.lilyPadId = void 0, this.lilyPadId = yR["Lily Pad"].id
+             this.hx = rr, this.biomeSelector = Sr, this.seed = Qr, this.random = new mr.l(""), this.lilyPadId = void 0, this.lilyPadId = Zr["Lily Pad"].id
```

#### 901. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11044-L11045` → after: `L11044-L11045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11044-L11045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11044-L11045) · [Before (L11044-L11045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11044-L11045)

```diff
-             for (let LR = RR; LR < RR + this.LK; LR++)
-               for (let nR = JR; nR < JR + this.LK; nR++) {
+             for (let hr = rr; hr < rr + this.hx; hr++)
+               for (let zr = Sr; zr < Sr + this.hx; zr++) {
```

#### 902. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11052-L11053` → after: `L11052-L11053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11052-L11053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11052-L11053) · [Before (L11052-L11053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11052-L11053)

```diff
-                 if (AR !== ZR.o) {
-                   aR = !0, WR < AR && fR.push(CR, XR, WR + 1, AR, UR.topwaterBlockType), UR.hasScatteredLakes && 1 === GR.getOrGenerate(LR, nR, uR.f.IsLake) && (this.random.reseed(`${LR}|${nR}|${this.seed}lilyPad`), this.random.next() < .08 && this.isInsideWater(LR, nR, GR) && KR … [truncated]
+                 if (er !== jr.l) {
+                   tr = !0, nr < er && Er.push(Kr, yr, nr + 1, er, Yr.topwaterBlockType), Yr.hasScatteredLakes && 1 === Qr.getOrGenerate(hr, zr, ar.f.IsLake) && (this.random.reseed(`${hr}|${zr}|${this.seed}lilyPad`), this.random.next() < .08 && this.isInsideWater(hr, zr, Qr) && xr … [truncated]
```

#### 903. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11057-L11058` → after: `L11057-L11058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11057-L11058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11057-L11058) · [Before (L11057-L11058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11057-L11058)

```diff
-                 if (UR.hasScatteredLakes && this.isBesideLake(LR, nR, GR) && (this.random.reseed(`${LR}|${nR}|${this.seed}oasisShore`), this.random.next() < .85 && (VR.push(CR, WR, XR), MR = this.biomeSelector.baseBiome.floraGenerator)), !iR.c.isInCave(LR, WR, nR, yR) && !pR.d.is … [truncated]
-                   for (let GR = WR + 1; GR <= WR + UR.maxFloraHeight; GR += this.LK) wR.startY = GR, MR.addBiomeFloraToColumn(wR, RR, JR, LR, GR, nR, WR)
+                 if (Yr.hasScatteredLakes && this.isBesideLake(hr, zr, Qr) && (this.random.reseed(`${hr}|${zr}|${this.seed}oasisShore`), this.random.next() < .85 && (pr.push(Kr, nr, yr), Br = this.biomeSelector.baseBiome.floraGenerator)), !fr.d.isInCave(hr, nr, zr, Zr) && !Or.e.is … [truncated]
+                   for (let Qr = nr + 1; Qr <= nr + Yr.maxFloraHeight; Qr += this.hx) mr.startY = Qr, Br.addBiomeFloraToColumn(mr, rr, Sr, hr, Qr, zr, nr)
```

#### 904. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11071` → after: `L11071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11071) · [Before (L11071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11071)

```diff
-             return GR.getOrGenerate(RR + 1, JR, uR.f.WaterHeight) !== ZR.o && GR.getOrGenerate(RR - 1, JR, uR.f.WaterHeight) !== ZR.o && GR.getOrGenerate(RR, JR + 1, uR.f.WaterHeight) !== ZR.o && GR.getOrGenerate(RR, JR - 1, uR.f.WaterHeight) !== ZR.o
+             return Qr.getOrGenerate(rr + 1, Sr, ar.f.WaterHeight) !== jr.l && Qr.getOrGenerate(rr - 1, Sr, ar.f.WaterHeight) !== jr.l && Qr.getOrGenerate(rr, Sr + 1, ar.f.WaterHeight) !== jr.l && Qr.getOrGenerate(rr, Sr - 1, ar.f.WaterHeight) !== jr.l
```

#### 905. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11077` → after: `L11077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11077) · [Before (L11077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11077)

```diff
-             return GR.getOrGenerate(RR, JR, uR.f.WaterHeight) !== ZR.o && 1 === GR.getOrGenerate(RR, JR, uR.f.IsLake)
+             return Qr.getOrGenerate(rr, Sr, ar.f.WaterHeight) !== jr.l && 1 === Qr.getOrGenerate(rr, Sr, ar.f.IsLake)
```

#### 906. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11080` → after: `L11080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11080) · [Before (L11080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11080)

```diff
-         var kJ = GR(41210);
+         var bS = Qr(41592);
```

#### 907. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11085` → after: `L11085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11085) · [Before (L11085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11085)

```diff
-             if (this.LK = RR, this.hashChunkContents = KR, this.maxTreeRadius = 3, this.prefabSize = 40, this.maxPrefabGroundingRadius = 4, this.treeGenerator = void 0, this.prefabGenerator = void 0, this.caveGenerator = void 0, this.caveDecorationGenerator = void 0, this.biomeSe … [truncated]
+             if (this.hx = rr, this.hashChunkContents = xr, this.maxTreeRadius = 3, this.prefabSize = 40, this.maxPrefabGroundingRadius = 4, this.treeGenerator = void 0, this.prefabGenerator = void 0, this.caveGenerator = void 0, this.caveDecorationGenerator = void 0, this.biomeSe … [truncated]
```

#### 908. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11087` → after: `L11087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11087) · [Before (L11087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11087)

```diff
-               QJ = new LJ.b("chunk columns", RR, 4e4)
+               JS = new hS.c("chunk columns", rr, 4e4)
```

#### 909. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11089-L11090` → after: `L11089-L11090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11089-L11090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11089-L11090) · [Before (L11089-L11090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11089-L11090)

```diff
-             this.chunkColumnInfos = QJ.partition(), this.caveGenerator = new iR.c(tR, RR, JR, null !== (wR = null === fR || void 0 === fR ? void 0 : fR.Uy.Ay) && void 0 !== wR ? wR : "Lava");
-             const WR = new lJ(JR, tR, RR, null !== (rR = null === fR || void 0 === fR ? void 0 : fR.jy) && void 0 !== rR ? rR : [...BJ, ...null !== (eR = null === VR || void 0 === VR ? void 0 : VR.Rt) && void 0 !== eR ? eR : []]),
+             this.chunkColumnInfos = JS.partition(), this.caveGenerator = new fr.d(Wr, rr, Sr, null !== (mr = null === Er || void 0 === Er ? void 0 : Er.BZ.vZ) && void 0 !== mr ? mr : "Lava");
+             const nr = new vS(Sr, Wr, rr, null !== (Nr = null === Er || void 0 === Er ? void 0 : Er.oZ) && void 0 !== Nr ? Nr : [...TS, ...null !== (Ur = null === pr || void 0 === pr ? void 0 : pr.SW) && void 0 !== Ur ? Ur : []]),
```

#### 910. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11092` → after: `L11092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11092) · [Before (L11092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11092)

```diff
-                 LK: RR,
+                 hx: rr,
```

#### 911. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11100-L11103` → after: `L11100-L11103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11100-L11103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11100-L11103) · [Before (L11100-L11103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11100-L11103)

```diff
-               CR = null !== (aR = null === fR || void 0 === fR ? void 0 : fR.oy) && void 0 !== aR ? aR : null,
-               XR = null !== (LR = null === VR || void 0 === VR ? void 0 : VR.buildBiomes) && void 0 !== LR ? LR : null,
-               MR = null !== CR ? (0, pJ.f)(CR, AR) : null !== XR ? this.buildTerrainBiomes(XR, AR) : (0, pJ.h)(AR);
-             this.biomeSelector = new pJ.e(this, WR, tR, RR, JR, MR), this.treeGenerator = new eJ(this, this.biomeSelector, RR, tR, JR), this.fixedPointPrefabTracker = new pR.d(qR, RR), this.prefabGenerator = new tJ({
+               Kr = null !== (tr = null === Er || void 0 === Er ? void 0 : Er.AZ) && void 0 !== tr ? tr : null,
+               yr = null !== (hr = null === pr || void 0 === pr ? void 0 : pr.buildBiomes) && void 0 !== hr ? hr : null,
+               Br = null !== Kr ? (0, OS.d)(Kr, er) : null !== yr ? this.buildTerrainBiomes(yr, er) : (0, OS.h)(er);
+             this.biomeSelector = new OS.c(this, nr, Wr, rr, Sr, Br), this.treeGenerator = new US(this, this.biomeSelector, rr, Wr, Sr), this.fixedPointPrefabTracker = new Or.e(Ir, rr), this.prefabGenerator = new WS({
```

#### 912. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11105` → after: `L11105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11105) · [Before (L11105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11105)

```diff
-               LK: RR,
+               hx: rr,
```

#### 913. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11109` → after: `L11109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11109) · [Before (L11109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11109)

```diff
-                 [uR.o.SURFACE]: {
+                 [ar.n.SURFACE]: {
```

#### 914. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11111` → after: `L11111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11111) · [Before (L11111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11111)

```diff
-                     [uR.l.MEDIUM]: {
+                     [ar.m.MEDIUM]: {
```

#### 915. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11114` → after: `L11114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11114) · [Before (L11114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11114)

```diff
-                     [uR.l.HIGH]: {
+                     [ar.m.HIGH]: {
```

#### 916. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11117` → after: `L11117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11117) · [Before (L11117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11117)

```diff
-                     [uR.l.VERY_HIGH]: {
+                     [ar.m.VERY_HIGH]: {
```

#### 917. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11122` → after: `L11122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11122) · [Before (L11122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11122)

```diff
-                 [uR.o.UNDERGROUND]: {
+                 [ar.n.UNDERGROUND]: {
```

#### 918. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11124` → after: `L11124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11124) · [Before (L11124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11124)

```diff
-                     [uR.l.MEDIUM]: {
+                     [ar.m.MEDIUM]: {
```

#### 919. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11127-L11128` → after: `L11127-L11128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11127-L11128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11127-L11128) · [Before (L11127-L11128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11127-L11128)

```diff
-                     [uR.l.HIGH]: null,
-                     [uR.l.VERY_HIGH]: null
+                     [ar.m.HIGH]: null,
+                     [ar.m.VERY_HIGH]: null
```

#### 920. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11142` → after: `L11142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11142) · [Before (L11142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11142)

```diff
-             }], `${tR}HeightmapPerturb`);
+             }], `${Wr}HeightmapPerturb`);
```

#### 921. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11148` → after: `L11148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11148) · [Before (L11148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11148)

```diff
-             this.waterBodyGenerator = new CJ(this.biomeSelector, this.noWaterHeightmapGenerator, tR, RR, BR, this.needOutsideWaterDist, ZR, null === (nR = null === fR || void 0 === fR ? void 0 : fR.ny) || void 0 === nR || nR), this.caveDecorationGenerator = new SJ(JR, RR, tR, nul … [truncated]
+             this.waterBodyGenerator = new KS(this.biomeSelector, this.noWaterHeightmapGenerator, Wr, rr, Tr, this.needOutsideWaterDist, jr, null === (zr = null === Er || void 0 === Er ? void 0 : Er.yZ) || void 0 === zr || zr), this.caveDecorationGenerator = new iS(Sr, rr, Wr, nul … [truncated]
```

#### 922. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11167` → after: `L11167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11167) · [Before (L11167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11167)

```diff
-             const GR = this.LK,
+             const Qr = this.hx,
```

#### 923. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11185` → after: `L11185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11185) · [Before (L11185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11185)

```diff
-               if ((null !== (tR = yR.get(uR.key)) && void 0 !== tR ? tR : uR) !== uR) throw new Error(`A world-gen terrain built two biomes keyed "${uR.key}"`);
+               if ((null !== (Wr = Zr.get(ar.key)) && void 0 !== Wr ? Wr : ar) !== ar) throw new Error(`A world-gen terrain built two biomes keyed "${ar.key}"`);
```

#### 924. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11195-L11196` → after: `L11195-L11196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11195-L11196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11195-L11196) · [Before (L11195-L11196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11195-L11196)

```diff
-               const RR = `${Math.floor(iR.x/this.LK)}|${Math.floor(iR.z/this.LK)}`,
-                 JR = null !== (ZR = uR.get(RR)) && void 0 !== ZR ? ZR : [];
+               const rr = `${Math.floor(fr.x/this.hx)}|${Math.floor(fr.z/this.hx)}`,
+                 Sr = null !== (jr = ar.get(rr)) && void 0 !== jr ? jr : [];
```

#### 925. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11201-L11202` → after: `L11201-L11202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11201-L11202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11201-L11202) · [Before (L11201-L11202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11201-L11202)

```diff
-               const RR = Math.floor(iR[0].x / this.LK) * this.LK,
-                 JR = Math.floor(iR[0].z / this.LK) * this.LK,
+               const rr = Math.floor(fr[0].x / this.hx) * this.hx,
+                 Sr = Math.floor(fr[0].z / this.hx) * this.hx,
```

#### 926. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11223` → after: `L11223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11223) · [Before (L11223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11223)

```diff
-                   qy: fR.prefab.name
+                   tZ: Er.prefab.name
```

#### 927. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11256` → after: `L11256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11256) · [Before (L11256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11256)

```diff
-               VR = yR.getOrGenerate(RR + Math.floor(this.LK / 2), JR + Math.floor(this.LK / 2))[0].biome.oreGenerator.getOreBlocksForChunk(RR, JR),
+               pr = Zr.getOrGenerate(rr + Math.floor(this.hx / 2), Sr + Math.floor(this.hx / 2))[0].biome.oreGenerator.getOreBlocksForChunk(rr, Sr),
```

#### 928. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11274` → after: `L11274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11274) · [Before (L11274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11274)

```diff
-             return yR.t.create(this.LK, [RR, JR], this.biomeSelector)
+             return Zr.r.create(this.hx, [rr, Sr], this.biomeSelector)
```

#### 929. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11278` → after: `L11278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11278) · [Before (L11278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11278)

```diff
-             return yR.q.create(this.LK, [RR, JR], uR.f.NumFields, ZR)
+             return Zr.n.create(this.hx, [rr, Sr], ar.f.NumFields, jr)
```

#### 930. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11282` → after: `L11282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11282) · [Before (L11282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11282)

```diff
-       41219: (RR, JR, GR) => {
+       41596: (rr, Sr, Qr) => {
```

#### 931. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11284-L11285` → after: `L11284-L11285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11284-L11285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11284-L11285) · [Before (L11284-L11285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11284-L11285)

```diff
-           c: () => mR,
-           d: () => lR,
+           e: () => Ar,
+           f: () => vr,
```

#### 932. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11287` → after: `L11287-L11288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11287-L11288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11287-L11288) · [Before (L11287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11287)

```diff
-           k: () => BR,
+           h: () => Tr,
+           j: () => Pr,
```

#### 933. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11289-L11290` → after: `L11290-L11292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11290-L11292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11290-L11292) · [Before (L11289-L11290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11289-L11290)

```diff
-           q: () => oR,
-           t: () => vR,
+           r: () => Xr,
+           s: () => er,
+           v: () => nr,
```

#### 934. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11294-L11297` → after: `L11295-L11297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11295-L11297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11295-L11297) · [Before (L11294-L11297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11294-L11297)

```diff
-           F: () => aR,
-           J: () => CR,
-           K: () => UR,
-           L: () => nR
+           E: () => Kr,
+           G: () => Yr,
+           H: () => zr
```

#### 935. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11299` → after: `L11299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11299) · [Before (L11299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11299)

```diff
-         var yR = GR(3991),
+         var Zr = Qr(3938),
```

#### 936. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11312` → after: `L11312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11312) · [Before (L11312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11312)

```diff
-             const JR = "function" == typeof RR ? RR : function(RR) {
+             const Sr = "function" == typeof rr ? rr : function(rr) {
```

#### 937. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11521` → after: `L11521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11521) · [Before (L11521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11521)

```diff
-         var eR = GR(41226);
+         var Ur = Qr(41598);
```

#### 938. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11550` → after: `L11550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11550) · [Before (L11550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11550)

```diff
-             xZ: UR(RR, uR, ZR),
+             Oj: Yr(rr, ar, jr),
```

#### 939. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11581` → after: `L11581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11581) · [Before (L11581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11581)

```diff
-             for (let GR = 0; GR < RR.length; GR++) this._simplexes.push(new rR(`${JR}${GR}`))
+             for (let Qr = 0; Qr < rr.length; Qr++) this._simplexes.push(new Nr(`${Sr}${Qr}`))
```

#### 940. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11606` → after: `L11606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11606) · [Before (L11606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11606)

```diff
-             for (let tR = 0; tR < RR.length; tR++) this._simplexes.push(new rR(`${GR}${tR}`));
+             for (let Wr = 0; Wr < rr.length; Wr++) this._simplexes.push(new Nr(`${Qr}${Wr}`));
```

#### 941. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11762` → after: `L11762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11762) · [Before (L11762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11762)

```diff
-             if (void 0 === yR) throw new Error(`Number not found for x=${RR}, z=${JR}, thirdIndex=${GR}`);
+             if (void 0 === Zr) throw new Error(`Number not found for x=${rr}, z=${Sr}, thirdIndex=${Qr}`);
```

#### 942. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11811` → after: `L11811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11811) · [Before (L11811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11811)

```diff
-             if (void 0 === tR) throw new Error(`Number not found for x=${RR}, z=${JR}, thirdIndex=${GR}, fourthIndex=${yR}`);
+             if (void 0 === Wr) throw new Error(`Number not found for x=${rr}, z=${Sr}, thirdIndex=${Qr}, fourthIndex=${Zr}`);
```

#### 943. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11841` → after: `L11841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11841) · [Before (L11841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11841)

```diff
-       41226: (RR, JR, GR) => {
+       41598: (rr, Sr, Qr) => {
```

#### 944. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11844-L11846` → after: `L11844-L11846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11844-L11846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11844-L11846) · [Before (L11844-L11846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11844-L11846)

```diff
-           f: () => ZR,
-           h: () => fR,
-           i: () => uR,
+           d: () => jr,
+           g: () => Er,
+           j: () => ar,
```

#### 945. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11848-L11849` → after: `L11848-L11849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11848-L11849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11848-L11849) · [Before (L11848-L11849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11848-L11849)

```diff
-           o: () => tR,
-           q: () => yR
+           l: () => Wr,
+           n: () => Zr
```

#### 946. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11862` → after: `L11862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11862) · [Before (L11862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11862)

```diff
-       41234: (RR, JR, GR) => {
+       41603: (rr, Sr, Qr) => {
```

#### 947. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11864` → after: `L11864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11864) · [Before (L11864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11864)

```diff
-           c: () => tR,
+           d: () => Wr,
```

#### 948. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11867-L11869` → after: `L11867-L11869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11867-L11869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11867-L11869) · [Before (L11867-L11869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11867-L11869)

```diff
-           l: () => qR,
-           o: () => ZR,
-           s: () => uR
+           m: () => Ir,
+           n: () => jr,
+           q: () => ar
```

#### 949. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11888` → after: `L11888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11888) · [Before (L11888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11888)

```diff
-       3031: (RR, JR, GR) => {
+       2999: (rr, Sr, Qr) => {
```

#### 950. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11890-L11893` → after: `L11890-L11892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11890-L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11890-L11892) · [Before (L11890-L11893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11890-L11893)

```diff
-           c: () => iR,
-           f: () => uR,
-           i: () => yR,
-           j: () => qR,
+           e: () => fr,
+           h: () => ar,
+           l: () => Zr,
```

#### 951. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11921` → after: `L11921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11921) · [Before (L11921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11921)

```diff
-             if (this.distribution = void 0, RR.length <= 0) throw new Error(`Distribution must have at least one item: ${JSON.stringify(RR)}`);
+             if (this.distribution = void 0, rr.length <= 0) throw new Error(`Distribution must have at least one item: ${JSON.stringify(rr)}`);
```

#### 952. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11926` → after: `L11926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11926) · [Before (L11926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11926)

```diff
-               if (JR.has(yR)) throw new Error(`Values must be unique: ${JSON.stringify(RR)}`);
+               if (Sr.has(Zr)) throw new Error(`Values must be unique: ${JSON.stringify(rr)}`);
```

#### 953. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11929` → after: `L11929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11929) · [Before (L11929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11929)

```diff
-               if (uR <= 0) throw new Error(`Weights must be positive: ${JSON.stringify(RR)}`);
+               if (ar <= 0) throw new Error(`Weights must be positive: ${JSON.stringify(rr)}`);
```

#### 954. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11954` → after: `L11954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11954) · [Before (L11954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11954)

```diff
-             if (this.offset = void 0, this.multiplier = void 0, RR > JR) throw new Error(`Min must be less than or equal to Max, but Min=${RR} and Max=${JR}`);
+             if (this.offset = void 0, this.multiplier = void 0, rr > Sr) throw new Error(`Min must be less than or equal to Max, but Min=${rr} and Max=${Sr}`);
```

#### 955. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11964` → after: `L11964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11964) · [Before (L11964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11964)

```diff
-             if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new ZR(RR, JR, GR), !Number.isInteger(RR) || !Number.isInteger(JR)) throw new Error(`Min and Max must be integers, but Min=${RR} and Max=${JR}`)
+             if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new jr(rr, Sr, Qr), !Number.isInteger(rr) || !Number.isInteger(Sr)) throw new Error(`Min and Max must be integers, but Min=${rr} and Max=${Sr}`)
```

#### 956. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11980` → after: `L11980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11980) · [Before (L11980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11980)

```diff
-       679: (RR, JR, GR) => {
+       688: (rr, Sr, Qr) => {
```

#### 957. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11982-L11983` → after: `L11982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11982) · [Before (L11982-L11983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11982-L11983)

```diff
-           A: () => fR,
-           E: () => rR,
+           C: () => Nr,
```

#### 958. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11985-L11987` → after: `L11984-L11986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11984-L11986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11984-L11986) · [Before (L11985-L11987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11985-L11987)

```diff
-           I: () => iR,
-           X: () => KR,
-           e: () => qR,
+           L: () => fr,
+           U: () => xr,
+           c: () => Ir,
```

#### 959. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11989-L11991` → after: `L11988-L11991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11988-L11991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11988-L11991) · [Before (L11989-L11991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11989-L11991)

```diff
-           k: () => tR,
-           t: () => uR,
-           x: () => wR
+           l: () => Wr,
+           v: () => ar,
+           x: () => mr,
+           y: () => Er
```

#### 960. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11993` → after: `L11993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L11993) · [Before (L11993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L11993)

```diff
-         var yR = GR(688);
+         var Zr = Qr(692);
```

#### 961. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12023` → after: `L12023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12023) · [Before (L12023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12023)

```diff
-         yR.d, Number(atob("NQ==")), Number(atob("MTM="));
+         Zr.e, Number(atob("NQ==")), Number(atob("MTM="));
```

#### 962. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12031` → after: `L12031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12031) · [Before (L12031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12031)

```diff
-       688: (RR, JR, GR) => {
+       692: (rr, Sr, Qr) => {
```

#### 963. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12033` → after: `L12033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12033) · [Before (L12033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12033)

```diff
-           d: () => yR
+           e: () => Zr
```

#### 964. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12037-L12038` → after: `L12037-L12038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12037-L12038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12037-L12038) · [Before (L12037-L12038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12037-L12038)

```diff
-       37219: (RR, JR, GR) => {
-         RR.exports = GR.p + "static/media/bloxd_wasm_bg.039608235c8f47710330.wasm"
+       37573: (rr, Sr, Qr) => {
+         rr.exports = Qr.p + "static/media/bloxd_wasm_bg.e6e79e6510291a686e28.wasm"
```

#### 965. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12120` → after: `L12120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12120) · [Before (L12120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12120)

```diff
-       GR = JR < 0 ? this.length + JR : JR;
+       Qr = Sr < 0 ? this.length + Sr : Sr;
```

#### 966. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12135` → after: `L12135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12135) · [Before (L12135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12135)

```diff
-     SR: () => fR,
+     Or: () => Er,
```

#### 967. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12137` → after: `L12137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12137) · [Before (L12137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12137)

```diff
-     TR: () => KR,
+     ES: () => xr,
```

#### 968. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12139-L12144` → after: `L12139-L12145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12139-L12145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12139-L12145) · [Before (L12139-L12144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12139-L12144)

```diff
-     BG: () => rR,
-     EG: () => eR,
-     sy: () => aR,
-     qt: () => LR,
-     Nu: () => nR,
-     pq: () => UR,
+     US: () => Nr,
+     PS: () => Ur,
+     AS: () => tr,
+     XQ: () => hr,
+     PQ: () => zr,
+     HQ: () => Yr,
+     Za: () => nr,
```

#### 969. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12146-L12148` → after: `L12147-L12148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12147-L12148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12147-L12148) · [Before (L12146-L12148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12146-L12148)

```diff
-     UV: () => AR,
-     DK: () => CR,
-     HK: () => XR,
+     BE: () => Kr,
+     HE: () => yr,
```

#### 970. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12151-L12165` → after: `L12151-L12165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12151-L12165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12151-L12165) · [Before (L12151-L12165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12151-L12165)

```diff
-     oK: () => MR,
-     cK: () => BR,
-     PK: () => lR,
-     IK: () => pR,
-     mK: () => gR,
-     zK: () => bR,
-     SK: () => vR,
-     jK: () => OR,
-     dK: () => xR,
-     EK: () => NR,
-     YK: () => DR,
-     kK: () => HR,
-     QK: () => oR,
-     FK: () => cR,
-     TK: () => PR
+     ip: () => Br,
+     tx: () => Tr,
+     Rx: () => vr,
+     gx: () => Or,
+     Cx: () => Lr,
+     Mx: () => lr,
+     Gx: () => Xr,
+     kx: () => Pr,
+     Ax: () => Hr,
+     Vx: () => qr,
+     ix: () => Rr,
+     wx: () => gr,
+     Fx: () => Cr,
+     bx: () => Mr,
+     Jx: () => Gr
```

#### 971. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12179` → after: `L12179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12179) · [Before (L12179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12179)

```diff
-       lJ.FaJF(RR, 0)
+       vS.orzO(rr, 0)
```

#### 972. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12182` → after: `L12182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12182) · [Before (L12182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12182)

```diff
-       const RR = lJ.lizN(this.__wbg_ptr);
+       const rr = vS.GWfh(this.__wbg_ptr);
```

#### 973. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12187` → after: `L12187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12187) · [Before (L12187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12187)

```diff
-       return lJ.OR16(this.__wbg_ptr) >>> 0
+       return vS.CaPz(this.__wbg_ptr) >>> 0
```

#### 974. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12190` → after: `L12190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12190) · [Before (L12190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12190)

```diff
-       const RR = lJ.rpbX();
+       const rr = vS.LOSB();
```

#### 975. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12194` → after: `L12194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12194) · [Before (L12194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12194)

```diff
-       return lJ.riGb(this.__wbg_ptr) >>> 0
+       return vS.QYrF(this.__wbg_ptr) >>> 0
```

#### 976. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12197` → after: `L12197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12197) · [Before (L12197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12197)

```diff
-       const JR = lJ.QKhi(this.__wbg_ptr, RR);
+       const Sr = vS.VriV(this.__wbg_ptr, rr);
```

#### 977. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12202` → after: `L12202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12202) · [Before (L12202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12202)

```diff
-       const JR = lJ.g7xV(this.__wbg_ptr, RR);
+       const Sr = vS.CjPy(this.__wbg_ptr, rr);
```

#### 978. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12237` → after: `L12237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12237) · [Before (L12237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12237)

```diff
-       lJ.JJt1(RR, 0)
+       vS.gnHJ(rr, 0)
```

#### 979. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12240` → after: `L12240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12240) · [Before (L12240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12240)

```diff
-       const GR = lJ.l7Pw(this.__wbg_ptr, RR, JR);
+       const Qr = vS.T08K(this.__wbg_ptr, rr, Sr);
```

#### 980. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12245` → after: `L12245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12245) · [Before (L12245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12245)

```diff
-       const JR = lJ.SbDk(this.__wbg_ptr, RR);
+       const Sr = vS.fwe4(this.__wbg_ptr, rr);
```

#### 981. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12250` → after: `L12250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12250) · [Before (L12250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12250)

```diff
-       lJ.QVSe(this.__wbg_ptr)
+       vS.kxig(this.__wbg_ptr)
```

#### 982. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12253` → after: `L12253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12253) · [Before (L12253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12253)

```diff
-       return lJ.lVg8() >>> 0
+       return vS.u7is() >>> 0
```

#### 983. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12256` → after: `L12256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12256) · [Before (L12256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12256)

```diff
-       return lJ.LulB(this.__wbg_ptr) >>> 0
+       return vS.DVZ4(this.__wbg_ptr) >>> 0
```

#### 984. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12259` → after: `L12259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12259) · [Before (L12259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12259)

```diff
-       const RR = lJ.OFSj(this.__wbg_ptr);
+       const rr = vS.JOU4(this.__wbg_ptr);
```

#### 985. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12263` → after: `L12263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12263) · [Before (L12263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12263)

```diff
-       return lJ.Tn2I(this.__wbg_ptr) >>> 0
+       return vS.oS0i(this.__wbg_ptr) >>> 0
```

#### 986. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12266` → after: `L12266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12266) · [Before (L12266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12266)

```diff
-       return lJ.bOcY(this.__wbg_ptr) >>> 0
+       return vS.vfyi(this.__wbg_ptr) >>> 0
```

#### 987. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12269` → after: `L12269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12269) · [Before (L12269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12269)

```diff
-       return lJ.E5Gl() >>> 0
+       return vS.LiPS() >>> 0
```

#### 988. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12272` → after: `L12272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12272) · [Before (L12272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12272)

```diff
-       const RR = lJ.MxMI();
+       const rr = vS.g4Si();
```

#### 989. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12276` → after: `L12276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12276) · [Before (L12276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12276)

```diff
-       return lJ.jBWG(this.__wbg_ptr) >>> 0
+       return vS.IfIl(this.__wbg_ptr) >>> 0
```

#### 990. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12279` → after: `L12279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12279) · [Before (L12279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12279)

```diff
-       return lJ.QFHr(this.__wbg_ptr) >>> 0
+       return vS.za7z(this.__wbg_ptr) >>> 0
```

#### 991. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12282` → after: `L12282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12282) · [Before (L12282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12282)

```diff
-       return lJ.UxLr(this.__wbg_ptr) >>> 0
+       return vS.fHZ5(this.__wbg_ptr) >>> 0
```

#### 992. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12285` → after: `L12285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12285) · [Before (L12285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12285)

```diff
-       return lJ.YapY(this.__wbg_ptr, RR) >>> 0
+       return vS.Bcmn(this.__wbg_ptr, rr) >>> 0
```

#### 993. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12288` → after: `L12288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12288) · [Before (L12288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12288)

```diff
-       const GR = lJ.uBmu(this.__wbg_ptr, RR, JR);
+       const Qr = vS.nDI8(this.__wbg_ptr, rr, Sr);
```

#### 994. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12292` → after: `L12292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12292) · [Before (L12292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12292)

```diff
-       const GR = eJ(RR, lJ.OLc9),
+       const Qr = US(rr, vS.M7if),
```

#### 995. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12294` → after: `L12294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12294) · [Before (L12294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12294)

```diff
-       lJ.iSy6(this.__wbg_ptr, GR, yR, JR)
+       vS.SK35(this.__wbg_ptr, Qr, Zr, Sr)
```

#### 996. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12299` → after: `L12299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12299) · [Before (L12299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12299)

```diff
-         const GR = lJ.E56J(this.__wbg_ptr);
+         const Qr = vS.pSeJ(this.__wbg_ptr);
```

#### 997. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12302` → after: `L12302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12302) · [Before (L12302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12302)

```diff
-         lJ.jJvb(RR, JR, 1)
+         vS.WVqq(rr, Sr, 1)
```

#### 998. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12314` → after: `L12314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12314) · [Before (L12314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12314)

```diff
-       lJ.boWK(RR, 0)
+       vS.CBI0(rr, 0)
```

#### 999. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12318` → after: `L12318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12318) · [Before (L12318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12318)

```diff
-       const GR = lJ.OA5O(this.__wbg_ptr, RR, JR.__wbg_ptr);
+       const Qr = vS.QT7A(this.__wbg_ptr, rr, Sr.__wbg_ptr);
```

#### 1000. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12323` → after: `L12323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12323) · [Before (L12323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12323)

```diff
-       const RR = lJ.BI46(this.__wbg_ptr);
+       const rr = vS.qgvm(this.__wbg_ptr);
```

#### 1001. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12328` → after: `L12328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12328) · [Before (L12328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12328)

```diff
-       const KR = lJ.URwu(this.__wbg_ptr, RR.__wbg_ptr, JR, GR, yR, tR, uR, ZR, qR, iR, fR, VR);
+       const xr = vS.q8II(this.__wbg_ptr, rr.__wbg_ptr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er, pr);
```

#### 1002. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12333` → after: `L12333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12333) · [Before (L12333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12333)

```diff
-       const RR = lJ.HxUM(this.__wbg_ptr);
+       const rr = vS.yjDJ(this.__wbg_ptr);
```

#### 1003. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12335` → after: `L12335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12335) · [Before (L12335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12335)

```diff
-       return lJ.jJvb(RR[0], 8 * RR[1], 8), JR
+       return vS.WVqq(rr[0], 8 * rr[1], 8), Sr
```

#### 1004. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12338` → after: `L12338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12338) · [Before (L12338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12338)

```diff
-       return lJ.y0fX(this.__wbg_ptr) >>> 0
+       return vS.OHZF(this.__wbg_ptr) >>> 0
```

#### 1005. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12341` → after: `L12341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12341) · [Before (L12341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12341)

```diff
-       return lJ.WNjx(this.__wbg_ptr) >>> 0
+       return vS.D4lz(this.__wbg_ptr) >>> 0
```

#### 1006. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12344` → after: `L12344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12344) · [Before (L12344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12344)

```diff
-       return lJ.FzhU(this.__wbg_ptr) >>> 0
+       return vS.Sb1j(this.__wbg_ptr) >>> 0
```

#### 1007. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12347` → after: `L12347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12347) · [Before (L12347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12347)

```diff
-       const iR = lJ.LbIx(RR, JR, GR, yR, tR, uR, ZR, qR);
+       const fr = vS.ernP(rr, Sr, Qr, Zr, Wr, ar, jr, Ir);
```

#### 1008. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12353` → after: `L12353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12353) · [Before (L12353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12353)

```diff
-       const JR = lJ.jZOE(this.__wbg_ptr, RR.__wbg_ptr);
+       const Sr = vS.szMB(this.__wbg_ptr, rr.__wbg_ptr);
```

#### 1009. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12358` → after: `L12358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12358) · [Before (L12358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12358)

```diff
-       const JR = lJ.WxPx(this.__wbg_ptr, RR);
+       const Sr = vS.npnV(this.__wbg_ptr, rr);
```

#### 1010. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12362` → after: `L12362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12362) · [Before (L12362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12362)

```diff
-       return lJ.y8Ot(this.__wbg_ptr) >>> 0
+       return vS.nGex(this.__wbg_ptr) >>> 0
```

#### 1011. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12366` → after: `L12366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12366) · [Before (L12366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12366)

```diff
-       const GR = lJ.hbgu(this.__wbg_ptr, RR.__wbg_ptr, JR.__wbg_ptr);
+       const Qr = vS.z0rK(this.__wbg_ptr, rr.__wbg_ptr, Sr.__wbg_ptr);
```

#### 1012. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12371` → after: `L12371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12371) · [Before (L12371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12371)

```diff
-       const JR = lJ.AvdW(this.__wbg_ptr, RR);
+       const Sr = vS.iWSS(this.__wbg_ptr, rr);
```

#### 1013. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12376` → after: `L12376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12376) · [Before (L12376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12376)

```diff
-       const GR = lJ.hG5c(this.__wbg_ptr, RR, JR.__wbg_ptr);
+       const Qr = vS.UNNg(this.__wbg_ptr, rr, Sr.__wbg_ptr);
```

#### 1014. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12380` → after: `L12380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12380) · [Before (L12380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12380)

```diff
-       const JR = LJ(RR, lJ.OLc9),
+       const Sr = hS(rr, vS.M7if),
```

#### 1015. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12382` → after: `L12382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12382) · [Before (L12382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12382)

```diff
-         yR = lJ.uBoc(this.__wbg_ptr, JR, GR);
+         Zr = vS.oI74(this.__wbg_ptr, Sr, Qr);
```

#### 1016. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12386` → after: `L12386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12386) · [Before (L12386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12386)

```diff
-       const ZR = lJ.F1Y9(this.__wbg_ptr, RR, JR, GR, yR, tR, uR);
+       const jr = vS.OJP0(this.__wbg_ptr, rr, Sr, Qr, Zr, Wr, ar);
```

#### 1017. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12390` → after: `L12390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12390) · [Before (L12390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12390)

```diff
-       const tR = eJ(RR, lJ.OLc9),
+       const Wr = US(rr, vS.M7if),
```

#### 1018. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12392` → after: `L12392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12392) · [Before (L12392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12392)

```diff
-         ZR = LJ(JR, lJ.OLc9),
+         jr = hS(Sr, vS.M7if),
```

#### 1019. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12394` → after: `L12394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12394) · [Before (L12394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12394)

```diff
-         iR = LJ(GR, lJ.OLc9),
+         fr = hS(Qr, vS.M7if),
```

#### 1020. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12396` → after: `L12396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12396) · [Before (L12396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12396)

```diff
-         VR = LJ(yR, lJ.OLc9),
+         pr = hS(Zr, vS.M7if),
```

#### 1021. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12398` → after: `L12398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12398) · [Before (L12398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12398)

```diff
-         wR = lJ.APAc(this.__wbg_ptr, tR, uR, ZR, qR, iR, fR, VR, KR);
+         mr = vS.zsE2(this.__wbg_ptr, Wr, ar, jr, Ir, fr, Er, pr, xr);
```

#### 1022. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12403` → after: `L12403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12403) · [Before (L12403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12403)

```diff
-       const GR = lJ.AONj(this.__wbg_ptr, RR, JR.__wbg_ptr);
+       const Qr = vS.BZpb(this.__wbg_ptr, rr, Sr.__wbg_ptr);
```

#### 1023. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12407` → after: `L12407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12407) · [Before (L12407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12407)

```diff
-       const yR = lJ.Ml1r(this.__wbg_ptr, RR, JR, GR);
+       const Zr = vS.ZP1b(this.__wbg_ptr, rr, Sr, Qr);
```

#### 1024. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12412` → after: `L12412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12412) · [Before (L12412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12412)

```diff
-       return lJ.b16D(this.__wbg_ptr, RR.__wbg_ptr, JR, GR, yR, tR, uR, ZR, qR, iR, fR)
+       return vS.dui8(this.__wbg_ptr, rr.__wbg_ptr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er)
```

#### 1025. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12427` → after: `L12427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12427) · [Before (L12427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12427)

```diff
-       lJ.icJg(RR, 0)
+       vS.YvTV(rr, 0)
```

#### 1026. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12430` → after: `L12430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12430) · [Before (L12430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12430)

```diff
-       const JR = lJ.mt8F(this.__wbg_ptr, RR);
+       const Sr = vS.k1K2(this.__wbg_ptr, rr);
```

#### 1027. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12435` → after: `L12435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12435) · [Before (L12435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12435)

```diff
-       return lJ.dk0I(this.__wbg_ptr, RR, JR, GR)
+       return vS.tPme(this.__wbg_ptr, rr, Sr, Qr)
```

#### 1028. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12438` → after: `L12438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12438) · [Before (L12438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12438)

```diff
-       return lJ.Ivoz(this.__wbg_ptr, RR, JR, GR) >>> 0
+       return vS.K8f9(this.__wbg_ptr, rr, Sr, Qr) >>> 0
```

#### 1029. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12441` → after: `L12441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12441) · [Before (L12441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12441)

```diff
-       return 0 !== lJ.QJKx(this.__wbg_ptr, RR, JR, GR, yR)
+       return 0 !== vS.hKnY(this.__wbg_ptr, rr, Sr, Qr, Zr)
```

#### 1030. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12444` → after: `L12444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12444) · [Before (L12444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12444)

```diff
-       lJ.tt8D(this.__wbg_ptr)
+       vS.eyGf(this.__wbg_ptr)
```

#### 1031. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12447` → after: `L12447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12447) · [Before (L12447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12447)

```diff
-       const JR = lJ.WXwY(this.__wbg_ptr, RR);
+       const Sr = vS.nfUG(this.__wbg_ptr, rr);
```

#### 1032. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12450` → after: `L12450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12450) · [Before (L12450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12450)

```diff
-       return lJ.jJvb(JR[0], 1 * JR[1], 1), GR
+       return vS.WVqq(Sr[0], 1 * Sr[1], 1), Qr
```

#### 1033. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12453` → after: `L12453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12453) · [Before (L12453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12453)

```diff
-       return lJ.MGCY(this.__wbg_ptr, RR, JR) >>> 0
+       return vS.m1jZ(this.__wbg_ptr, rr, Sr) >>> 0
```

#### 1034. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12456` → after: `L12456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12456) · [Before (L12456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12456)

```diff
-       lJ.VcX4(this.__wbg_ptr)
+       vS.FY83(this.__wbg_ptr)
```

#### 1035. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12459` → after: `L12459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12459) · [Before (L12459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12459)

```diff
-       lJ.fQBs(this.__wbg_ptr, RR, JR, GR)
+       vS.mRRx(this.__wbg_ptr, rr, Sr, Qr)
```

#### 1036. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12462` → after: `L12462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12462) · [Before (L12462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12462)

```diff
-       const JR = lJ.TmUv(this.__wbg_ptr, RR);
+       const Sr = vS.Vx3o(this.__wbg_ptr, rr);
```

#### 1037. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12466` → after: `L12466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12466) · [Before (L12466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12466)

```diff
-       return lJ.p7Cz(this.__wbg_ptr) >>> 0
+       return vS.vPFv(this.__wbg_ptr) >>> 0
```

#### 1038. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12469` → after: `L12469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12469) · [Before (L12469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12469)

```diff
-       return lJ.b4EA(this.__wbg_ptr) >>> 0
+       return vS.FbTw(this.__wbg_ptr) >>> 0
```

#### 1039. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12472` → after: `L12472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12472) · [Before (L12472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12472)

```diff
-       lJ.U63x(this.__wbg_ptr, RR, JR, GR)
+       vS.OhNH(this.__wbg_ptr, rr, Sr, Qr)
```

#### 1040. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12475` → after: `L12475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12475) · [Before (L12475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12475)

```diff
-       lJ.aaOS(this.__wbg_ptr, RR, JR, GR)
+       vS.E0KE(this.__wbg_ptr, rr, Sr, Qr)
```

#### 1041. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12478` → after: `L12478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12478) · [Before (L12478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12478)

```diff
-       return lJ.aKZ4(this.__wbg_ptr) >>> 0
+       return vS.TInW(this.__wbg_ptr) >>> 0
```

#### 1042. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12481` → after: `L12481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12481) · [Before (L12481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12481)

```diff
-       return lJ.v9oO(this.__wbg_ptr) >>> 0
+       return vS.Tgcv(this.__wbg_ptr) >>> 0
```

#### 1043. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12484` → after: `L12484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12484) · [Before (L12484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12484)

```diff
-       const RR = lJ.DKvX();
+       const rr = vS.v3pU();
```

#### 1044. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12488` → after: `L12488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12488) · [Before (L12488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12488)

```diff
-       const RR = lJ.Ure0();
+       const rr = vS.GBkK();
```

#### 1045. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12492` → after: `L12492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12492) · [Before (L12492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12492)

```diff
-       return lJ.LEaL(this.__wbg_ptr) >>> 0
+       return vS.oXlC(this.__wbg_ptr) >>> 0
```

#### 1046. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12495` → after: `L12495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12495) · [Before (L12495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12495)

```diff
-       return lJ.GNho(this.__wbg_ptr) >>> 0
+       return vS.Knot(this.__wbg_ptr) >>> 0
```

#### 1047. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12498` → after: `L12498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12498) · [Before (L12498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12498)

```diff
-       const tR = lJ.VhXf(this.__wbg_ptr, RR, JR, GR, yR);
+       const Wr = vS.nCe8(this.__wbg_ptr, rr, Sr, Qr, Zr);
```

#### 1048. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12502` → after: `L12502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12502) · [Before (L12502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12502)

```diff
-       return lJ.quWX(this.__wbg_ptr) >>> 0
+       return vS.eT9l(this.__wbg_ptr) >>> 0
```

#### 1049. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12505` → after: `L12505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12505) · [Before (L12505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12505)

```diff
-       return lJ.Z3xQ(this.__wbg_ptr) >>> 0
+       return vS.uPqq(this.__wbg_ptr) >>> 0
```

#### 1050. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12508` → after: `L12508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12508) · [Before (L12508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12508)

```diff
-       lJ.JGe5(this.__wbg_ptr, RR, JR, GR, yR)
+       vS.nRxW(this.__wbg_ptr, rr, Sr, Qr, Zr)
```

#### 1051. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12511` → after: `L12511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12511) · [Before (L12511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12511)

```diff
-       lJ.F2lN(this.__wbg_ptr, RR)
+       vS.GlAL(this.__wbg_ptr, rr)
```

#### 1052. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12514` → after: `L12514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12514) · [Before (L12514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12514)

```diff
-       const uR = aJ(JR, lJ.OLc9),
+       const ar = tS(Sr, vS.M7if),
```

#### 1053. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12516` → after: `L12516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12516) · [Before (L12516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12516)

```diff
-         qR = eJ(GR, lJ.OLc9),
+         Ir = US(Qr, vS.M7if),
```

#### 1054. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12518` → after: `L12518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12518) · [Before (L12518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12518)

```diff
-         fR = LJ(yR, lJ.OLc9),
+         Er = hS(Zr, vS.M7if),
```

#### 1055. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12520` → after: `L12520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12520) · [Before (L12520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12520)

```diff
-         KR = lJ.HGKK(this.__wbg_ptr, RR, uR, ZR, qR, iR, fR, VR, tR);
+         xr = vS.Le0E(this.__wbg_ptr, rr, ar, jr, Ir, fr, Er, pr, Wr);
```

#### 1056. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12524` → after: `L12524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12524) · [Before (L12524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12524)

```diff
-       const tR = aJ(RR, lJ.OLc9),
+       const Wr = tS(rr, vS.M7if),
```

#### 1057. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12526` → after: `L12526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12526) · [Before (L12526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12526)

```diff
-         ZR = eJ(JR, lJ.OLc9),
+         jr = US(Sr, vS.M7if),
```

#### 1058. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12528` → after: `L12528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12528) · [Before (L12528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12528)

```diff
-         iR = LJ(GR, lJ.OLc9),
+         fr = hS(Qr, vS.M7if),
```

#### 1059. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12530` → after: `L12530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12530) · [Before (L12530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12530)

```diff
-         VR = aJ(yR, lJ.OLc9),
+         pr = tS(Zr, vS.M7if),
```

#### 1060. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12532` → after: `L12532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12532) · [Before (L12532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12532)

```diff
-         wR = lJ.fHxS(this.__wbg_ptr, tR, uR, ZR, qR, iR, fR, VR, KR);
+         mr = vS.z3B4(this.__wbg_ptr, Wr, ar, jr, Ir, fr, Er, pr, xr);
```

#### 1061. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12536` → after: `L12536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12536) · [Before (L12536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12536)

```diff
-       const JR = aJ(RR, lJ.OLc9),
+       const Sr = tS(rr, vS.M7if),
```

#### 1062. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12538` → after: `L12538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12538) · [Before (L12538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12538)

```diff
-         yR = lJ.tBm7(this.__wbg_ptr, JR, GR);
+         Zr = vS.lT9w(this.__wbg_ptr, Sr, Qr);
```

#### 1063. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12542` → after: `L12542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12542) · [Before (L12542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12542)

```diff
-       return lJ.k71z(this.__wbg_ptr) >>> 0
+       return vS.F1Bu(this.__wbg_ptr) >>> 0
```

#### 1064. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12545` → after: `L12545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12545) · [Before (L12545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12545)

```diff
-       const JR = lJ.N524(this.__wbg_ptr, RR);
+       const Sr = vS.MQag(this.__wbg_ptr, rr);
```

#### 1065. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12550` → after: `L12550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12550) · [Before (L12550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12550)

```diff
-       return lJ.esTF(this.__wbg_ptr) >>> 0
+       return vS.pdOS(this.__wbg_ptr) >>> 0
```

#### 1066. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12553` → after: `L12553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12553) · [Before (L12553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12553)

```diff
-       const RR = lJ.V3iF(this.__wbg_ptr);
+       const rr = vS.HNK2(this.__wbg_ptr);
```

#### 1067. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12555` → after: `L12555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12555) · [Before (L12555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12555)

```diff
-       return lJ.jJvb(RR[0], 8 * RR[1], 8), JR
+       return vS.WVqq(rr[0], 8 * rr[1], 8), Sr
```

#### 1068. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12558` → after: `L12558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12558) · [Before (L12558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12558)

```diff
-       return lJ.UR6t(this.__wbg_ptr) >>> 0
+       return vS.lqMb(this.__wbg_ptr) >>> 0
```

#### 1069. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12561` → after: `L12561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12561) · [Before (L12561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12561)

```diff
-       const RR = lJ.uW1d(this.__wbg_ptr);
+       const rr = vS.Zf7V(this.__wbg_ptr);
```

#### 1070. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12563` → after: `L12563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12563) · [Before (L12563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12563)

```diff
-       return lJ.jJvb(RR[0], 4 * RR[1], 4), yR
+       return vS.WVqq(rr[0], 4 * rr[1], 4), Zr
```

#### 1071. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12574` → after: `L12574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12574) · [Before (L12574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12574)

```diff
-       lJ.rIoC(RR, 0)
+       vS.aa2v(rr, 0)
```

#### 1072. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12577` → after: `L12577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12577) · [Before (L12577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12577)

```diff
-       const JR = eJ(RR, lJ.OLc9),
+       const Sr = US(rr, vS.M7if),
```

#### 1073. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12579` → after: `L12579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12579) · [Before (L12579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12579)

```diff
-         yR = lJ.v4wE(this.__wbg_ptr, JR, GR);
+         Zr = vS.G7Pr(this.__wbg_ptr, Sr, Qr);
```

#### 1074. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12583` → after: `L12583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12583) · [Before (L12583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12583)

```diff
-       return lJ.Tiyf(this.__wbg_ptr) >>> 0
+       return vS.HV7a(this.__wbg_ptr) >>> 0
```

#### 1075. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12586` → after: `L12586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12586) · [Before (L12586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12586)

```diff
-       return lJ.YlyL(this.__wbg_ptr) >>> 0
+       return vS.f0Tm(this.__wbg_ptr) >>> 0
```

#### 1076. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12589` → after: `L12589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12589) · [Before (L12589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12589)

```diff
-       const RR = lJ.OhED();
+       const rr = vS.c2IW();
```

#### 1077. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12594` → after: `L12594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12594) · [Before (L12594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12594)

```diff
-       const GR = lJ.Oig3(this.__wbg_ptr, RR.__wbg_ptr, JR);
+       const Qr = vS.NWZP(this.__wbg_ptr, rr.__wbg_ptr, Sr);
```

#### 1078. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12599` → after: `L12599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12599) · [Before (L12599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12599)

```diff
-       const JR = eJ(RR, lJ.OLc9),
+       const Sr = US(rr, vS.M7if),
```

#### 1079. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12601` → after: `L12601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12601) · [Before (L12601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12601)

```diff
-       lJ.hQKz(this.__wbg_ptr, JR, GR)
+       vS.ghZn(this.__wbg_ptr, Sr, Qr)
```

#### 1080. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12604` → after: `L12604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12604) · [Before (L12604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12604)

```diff
-       const JR = eJ(RR, lJ.OLc9),
+       const Sr = US(rr, vS.M7if),
```

#### 1081. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12606` → after: `L12606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12606) · [Before (L12606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12606)

```diff
-       lJ.u2TA(this.__wbg_ptr, JR, GR)
+       vS.idLu(this.__wbg_ptr, Sr, Qr)
```

#### 1082. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12617` → after: `L12617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12617) · [Before (L12617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12617)

```diff
-       lJ.LKRU(RR, 0)
+       vS.rkcx(rr, 0)
```

#### 1083. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12620` → after: `L12620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12620) · [Before (L12620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12620)

```diff
-       const GR = aJ(RR, lJ.OLc9),
+       const Qr = tS(rr, vS.M7if),
```

#### 1084. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12622` → after: `L12622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12622) · [Before (L12622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12622)

```diff
-       return lJ.spq3(this.__wbg_ptr, GR, yR, JR) >>> 0
+       return vS.tYax(this.__wbg_ptr, Qr, Zr, Sr) >>> 0
```

#### 1085. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12626` → after: `L12626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12626) · [Before (L12626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12626)

```diff
-       const yR = aJ(GR, lJ.OLc9),
+       const Zr = tS(Qr, vS.M7if),
```

#### 1086. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12628` → after: `L12628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12628) · [Before (L12628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12628)

```diff
-         uR = lJ.jngk(this.__wbg_ptr, RR.__wbg_ptr, JR, yR, tR);
+         ar = vS.tX8u(this.__wbg_ptr, rr.__wbg_ptr, Sr, Zr, Wr);
```

#### 1087. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12633` → after: `L12633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12633) · [Before (L12633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12633)

```diff
-       return lJ.yV8R(this.__wbg_ptr, RR) >>> 0
+       return vS.OQVY(this.__wbg_ptr, rr) >>> 0
```

#### 1088. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12636` → after: `L12636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12636) · [Before (L12636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12636)

```diff
-       const RR = lJ.edZI();
+       const rr = vS.haH6();
```

#### 1089. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12641` → after: `L12641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12641) · [Before (L12641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12641)

```diff
-       const GR = lJ.m2vK(this.__wbg_ptr, RR.__wbg_ptr, JR);
+       const Qr = vS.bpeJ(this.__wbg_ptr, rr.__wbg_ptr, Sr);
```

#### 1090. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12646` → after: `L12646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12646) · [Before (L12646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12646)

```diff
-       const JR = aJ(RR, lJ.OLc9),
+       const Sr = tS(rr, vS.M7if),
```

#### 1091. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12648` → after: `L12648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12648) · [Before (L12648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12648)

```diff
-       lJ.WsqU(this.__wbg_ptr, JR, GR)
+       vS.Ytjk(this.__wbg_ptr, Sr, Qr)
```

#### 1092. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12651` → after: `L12651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12651) · [Before (L12651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12651)

```diff
-       return lJ.LCIr(this.__wbg_ptr) >>> 0
+       return vS.y31y(this.__wbg_ptr) >>> 0
```

#### 1093. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12654` → after: `L12654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12654) · [Before (L12654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12654)

```diff
-       return lJ.Ja4r(this.__wbg_ptr) >>> 0
+       return vS.qcx7(this.__wbg_ptr) >>> 0
```

#### 1094. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12665` → after: `L12665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12665) · [Before (L12665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12665)

```diff
-       lJ.lZhS(RR, 0)
+       vS.vIov(rr, 0)
```

#### 1095. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12668` → after: `L12668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12668) · [Before (L12668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12668)

```diff
-       const JR = lJ.R4UO(this.__wbg_ptr, RR);
+       const Sr = vS.dCM6(this.__wbg_ptr, rr);
```

#### 1096. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12673` → after: `L12673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12673) · [Before (L12673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12673)

```diff
-       var tR = wJ(yR) ? 0 : nJ(yR, lJ.OLc9, lJ.l8g9),
+       var Wr = mS(Zr) ? 0 : zS(Zr, vS.M7if, vS.mB3G),
```

#### 1097. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12675` → after: `L12675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12675) · [Before (L12675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12675)

```diff
-       const ZR = lJ.xgvz(this.__wbg_ptr, RR, wJ(JR) ? Number.MAX_SAFE_INTEGER : JR | 0, GR, tR, uR);
+       const jr = vS.ZU7T(this.__wbg_ptr, rr, mS(Sr) ? Number.MAX_SAFE_INTEGER : Sr | 0, Qr, Wr, ar);
```

#### 1098. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12680` → after: `L12680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12680) · [Before (L12680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12680)

```diff
-       const JR = nJ(RR, lJ.OLc9, lJ.l8g9),
+       const Sr = zS(rr, vS.M7if, vS.mB3G),
```

#### 1099. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12682` → after: `L12682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12682) · [Before (L12682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12682)

```diff
-       lJ.VSzr(this.__wbg_ptr, JR, GR)
+       vS.EADY(this.__wbg_ptr, Sr, Qr)
```

#### 1100. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12685` → after: `L12685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12685) · [Before (L12685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12685)

```diff
-       return lJ.ZEeo(this.__wbg_ptr)
+       return vS.RjjC(this.__wbg_ptr)
```

#### 1101. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12688` → after: `L12688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12688) · [Before (L12688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12688)

```diff
-       return lJ.Hxp7(this.__wbg_ptr, RR) >>> 0
+       return vS.AlSZ(this.__wbg_ptr, rr) >>> 0
```

#### 1102. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12691` → after: `L12691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12691) · [Before (L12691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12691)

```diff
-       return lJ.tFBB(this.__wbg_ptr) >>> 0
+       return vS.skoq(this.__wbg_ptr) >>> 0
```

#### 1103. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12694` → after: `L12694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12694) · [Before (L12694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12694)

```diff
-       return lJ.eZyM(this.__wbg_ptr) >>> 0
+       return vS.jBgY(this.__wbg_ptr) >>> 0
```

#### 1104. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12697` → after: `L12697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12697) · [Before (L12697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12697)

```diff
-       const GR = lJ.oPOO(this.__wbg_ptr, RR, JR);
+       const Qr = vS.e2UY(this.__wbg_ptr, rr, Sr);
```

#### 1105. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12701` → after: `L12701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12701) · [Before (L12701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12701)

```diff
-       return lJ.A5lR(this.__wbg_ptr) >>> 0
+       return vS.xAhl(this.__wbg_ptr) >>> 0
```

#### 1106. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12704` → after: `L12704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12704) · [Before (L12704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12704)

```diff
-       return lJ.Nz1j(this.__wbg_ptr) >>> 0
+       return vS.pARg(this.__wbg_ptr) >>> 0
```

#### 1107. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12707` → after: `L12707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12707) · [Before (L12707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12707)

```diff
-       return lJ.bRa7(this.__wbg_ptr) >>> 0
+       return vS.HBa0(this.__wbg_ptr) >>> 0
```

#### 1108. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12710` → after: `L12710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12710) · [Before (L12710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12710)

```diff
-       const yR = eJ(RR, lJ.OLc9),
+       const Zr = US(rr, vS.M7if),
```

#### 1109. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12712` → after: `L12712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12712) · [Before (L12712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12712)

```diff
-         uR = eJ(JR, lJ.OLc9),
+         ar = US(Sr, vS.M7if),
```

#### 1110. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12714` → after: `L12714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12714) · [Before (L12714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12714)

```diff
-         qR = lJ.g3Dd(this.__wbg_ptr, yR, tR, uR, ZR, GR);
+         Ir = vS.A3pC(this.__wbg_ptr, Zr, Wr, ar, jr, Qr);
```

#### 1111. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12718` → after: `L12718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12718) · [Before (L12718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12718)

```diff
-       return lJ.tpnk(this.__wbg_ptr) >>> 0
+       return vS.ia7V(this.__wbg_ptr) >>> 0
```

#### 1112. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12721` → after: `L12721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12721) · [Before (L12721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12721)

```diff
-       const uR = lJ.iXxM(this.__wbg_ptr, RR, JR, GR, yR, tR);
+       const ar = vS.sDig(this.__wbg_ptr, rr, Sr, Qr, Zr, Wr);
```

#### 1113. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12726` → after: `L12726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12726) · [Before (L12726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12726)

```diff
-       const CR = rJ(RR, lJ.OLc9),
+       const Kr = NS(rr, vS.M7if),
```

#### 1114. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12728` → after: `L12728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12728) · [Before (L12728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12728)

```diff
-         MR = LJ(JR, lJ.OLc9),
+         Br = hS(Sr, vS.M7if),
```

#### 1115. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12730` → after: `L12730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12730) · [Before (L12730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12730)

```diff
-         lR = eJ(GR, lJ.OLc9),
+         vr = US(Qr, vS.M7if),
```

#### 1116. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12732` → after: `L12732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12732) · [Before (L12732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12732)

```diff
-         gR = aJ(yR, lJ.OLc9),
+         Lr = tS(Zr, vS.M7if),
```

#### 1117. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12734` → after: `L12734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12734) · [Before (L12734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12734)

```diff
-         vR = aJ(tR, lJ.OLc9),
+         Xr = tS(Wr, vS.M7if),
```

#### 1118. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12736` → after: `L12736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12736) · [Before (L12736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12736)

```diff
-         xR = eJ(uR, lJ.OLc9),
+         Hr = US(ar, vS.M7if),
```

#### 1119. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12738` → after: `L12738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12738) · [Before (L12738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12738)

```diff
-         DR = eJ(ZR, lJ.OLc9),
+         Rr = US(jr, vS.M7if),
```

#### 1120. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12740` → after: `L12740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12740) · [Before (L12740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12740)

```diff
-         oR = LJ(qR, lJ.OLc9),
+         Cr = hS(Ir, vS.M7if),
```

#### 1121. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12742` → after: `L12742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12742) · [Before (L12742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12742)

```diff
-         PR = LJ(iR, lJ.OLc9),
+         Gr = hS(fr, vS.M7if),
```

#### 1122. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12744` → after: `L12744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12744) · [Before (L12744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12744)

```diff
-         mR = aJ(fR, lJ.OLc9),
+         Ar = tS(Er, vS.M7if),
```

#### 1123. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12746` → after: `L12746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12746) · [Before (L12746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12746)

```diff
-       var SR = wJ(VR) ? 0 : rJ(VR, lJ.OLc9),
+       var ir = mS(pr) ? 0 : NS(pr, vS.M7if),
```

#### 1124. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12748` → after: `L12748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12748) · [Before (L12748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12748)

```diff
-       const dR = eJ(KR, lJ.OLc9),
+       const cr = US(xr, vS.M7if),
```

#### 1125. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12750` → after: `L12750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12750) · [Before (L12750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12750)

```diff
-         kR = aJ(wR, lJ.OLc9),
+         br = tS(mr, vS.M7if),
```

#### 1126. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12752` → after: `L12752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12752) · [Before (L12752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12752)

```diff
-       var FR = wJ(rR) ? 0 : aJ(rR, lJ.OLc9),
+       var Dr = mS(Nr) ? 0 : tS(Nr, vS.M7if),
```

#### 1127. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12754` → after: `L12754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/procGenWorker.js#L12754) · [Before (L12754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/procGenWorker.js#L12754)

```diff
-         sR = wJ(eR) ? 0 : aJ(eR, lJ.OLc9),
+         sr = mS(Ur) ? 0 : tS(Ur, vS.M7if),
```
