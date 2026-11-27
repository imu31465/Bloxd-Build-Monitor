# Changed — Bundle Modifications Report (Part 049 / 126)

- **Updated at**: `2026-11-28T08:15 JST`
- **Part**: `49 / 126` (**316** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 048](part-048.md) · [Part 050 →](part-050.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/277.js` (4udp6d.2845de07 → fl4vv.bd3c59ce · continued)

- **File**: `bundles/bloxd.io/chunks/js/277.js` (54 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410)

#### 45. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1020` → after: `L655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L655) · [Before (L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L1020)

```diff
-         iR += (0, tR.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = qR, this._tempVector.x = Math.sin(iR), this._tempVector.z = Math.cos(iR), this._tempVector.normalize(), uR ? JR.vN(this._tempVector) : yR.r.TransformNormalFromFloatsToRef … [truncated]
+         fr += (0, Wr.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = Ir, this._tempVector.x = Math.sin(fr), this._tempVector.z = Math.cos(fr), this._tempVector.normalize(), ar ? Sr.iH(this._tempVector) : Zr.u.TransformNormalFromFloatsToRef … [truncated]
```

#### 46. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1029` → after: `L664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L664) · [Before (L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L1029)

```diff
-         uR ? JR.VJR(VR, ZR, KR) : yR.r.TransformCoordinatesFromFloatsToRef(VR, ZR, KR, RR, JR)
+         ar ? Sr.Hrr(pr, jr, xr) : Zr.u.TransformCoordinatesFromFloatsToRef(pr, jr, xr, rr, Sr)
```

#### 47. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1060-L1061` → after: `L695-L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L695-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L695-L696) · [Before (L1060-L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L1060-L1061)

```diff
-           tR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new yR.r(0, 1, 0),
-           uR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new yR.r(0, 1, 0);
+           Wr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Zr.u(0, 1, 0),
+           ar = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Zr.u(0, 1, 0);
```

#### 48. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1068` → after: `L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L703) · [Before (L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L1068)

```diff
-         uR ? JR.VJR(ZR, qR, iR) : yR.r.TransformNormalFromFloatsToRef(ZR, qR, iR, RR, JR)
+         ar ? Sr.Hrr(jr, Ir, fr) : Zr.u.TransformNormalFromFloatsToRef(jr, Ir, fr, rr, Sr)
```

#### 49. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1088` → after: `L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L723) · [Before (L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L1088)

```diff
-         return RR.direction1 = this.direction1.QtR(), RR.direction2 = this.direction2.QtR(), RR
+         return rr.direction1 = this.direction1.OWr(), rr.direction2 = this.direction2.OWr(), rr
```

#### 50. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1091` → after: `L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L726) · [Before (L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L1091)

```diff
-         super.parse(RR), yR.r.FromArrayToRef(RR.direction1, 0, this.direction1), yR.r.FromArrayToRef(RR.direction2, 0, this.direction2)
+         super.parse(rr), Zr.u.FromArrayToRef(rr.direction1, 0, this.direction1), Zr.u.FromArrayToRef(rr.direction2, 0, this.direction2)
```

#### 51. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1095` → after: `L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L730) · [Before (L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L1095)

```diff
-   53576: (RR, JR, GR) => {
+   40368: (rr, Sr, Qr) => {
```

#### 52. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1097` → after: `L732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L732) · [Before (L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L1097)

```diff
-       e: () => EJ
+       d: () => xr
```

#### 53. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1099-L1110` → after: `L734-L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L734-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L734-L742) · [Before (L1099-L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L1099-L1110)

```diff
-     var yR = GR(39941),
-       tR = GR(38233),
-       uR = GR(38204),
-       ZR = GR(41663),
-       qR = GR(53579),
-       iR = GR(38224),
-       fR = GR(41797),
-       VR = GR(38331),
-       KR = GR(39943),
-       wR = GR(39912),
-       rR = GR(38239);
-     class eR {
+     const Zr = .5 * (Math.sqrt(3) - 1),
+       Wr = (3 - Math.sqrt(3)) / 6,
+       ar = 1 / 3,
+       jr = 1 / 6,
+       Ir = (Math.sqrt(5) - 1) / 4,
+       fr = (5 - Math.sqrt(5)) / 20,
+       Er = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
+       pr = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0,  … [truncated]
+     const xr = class {
```

#### 54. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1112-L4266` → after: `L744-L951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L744-L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L744-L951) · [Before (L1112-L4266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L1112-L4266)

```diff
-         this.direction1 = new uR.r(0, 1, 0), this.direction2 = new uR.r(0, 1, 0)
-       }
-       startDirectionFunction(RR, JR, GR, yR) {
-         const tR = (0, rR.RandomRange)(this.direction1.x, this.direction2.x),
-           ZR = (0, rR.RandomRange)(this.direction1.y, this.direction2.y),
-           qR = (0, rR.RandomRange)(this.direction1.z, this.direction2.z);
-         yR ? JR.VJR(tR, ZR, qR) : uR.r.TransformNormalFromFloatsToRef(tR, ZR, qR, RR, JR)
-       }
-       startPositionFunction(RR, JR, GR, yR) {
-         yR ? JR.VJR(0, 0, 0) : uR.r.TransformCoordinatesFromFloatsToRef(0, 0, 0, RR, JR)
-       }
-       clone() {
-         const RR = new eR;
-         return wR.b.DeepCopy(this, RR), RR
-       }
-       applyToShader(RR) {
- ... (3139 more removed lines; see GitHub link above)
+         let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
+         const Sr = "function" == typeof rr ? rr : function(rr) {
+           let Sr = 0,
+             Qr = 0,
+             Zr = 0,
+             Wr = 1;
+           const ar = function() {
+             let rr = 4022871197;
+             return function(Sr) {
+               Sr = Sr.toString();
+               for (let Qr = 0; Qr < Sr.length; Qr++) {
+                 rr += Sr.charCodeAt(Qr);
+                 let Zr = .02519603282416938 * rr;
+                 rr = Zr >>> 0, Zr -= rr, Zr *= rr, rr = Zr >>> 0, Zr -= rr, rr += 4294967296 * Zr
+               }
+               return 2.3283064365386963e-10 * (rr >>> 0)
+ ... (192 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/278.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/278.js` (47 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0)

#### 1. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L4)

```diff
-   42629: (RR, JR, GR) => {
+   54135: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L6-L8` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L6) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L6-L8)

```diff
-       d: () => ZR,
-       f: () => VR,
-       j: () => fR
+       e: () => ar
```

#### 3. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L10-L28` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L8-L9) · [Before (L10-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L10-L28)

```diff
-     var yR, tR = GR(38239),
-       uR = GR(38204);
-     ! function(RR) {
-       RR[RR.CW = 0] = "CW", RR[RR.CCW = 1] = "CCW"
-     }(yR || (yR = {}));
-     class ZR {
-       static Interpolate(RR, JR, GR, yR, tR) {
-         if (0 === RR) return 0;
-         const uR = 1 - 3 * yR + 3 * JR,
-           ZR = 3 * yR - 6 * JR,
-           qR = 3 * JR;
-         let iR = RR;
-         for (let fR = 0; fR < 5; fR++) {
-           const JR = iR * iR;
-           iR -= (uR * (JR * iR) + ZR * JR + qR * iR - RR) * (1 / (3 * uR * JR + 2 * ZR * iR + qR)), iR = Math.min(1, Math.max(0, iR))
-         }
- ... (3 more removed lines; see GitHub link above)
+     var Zr = Qr(41960),
+       Wr = Qr(54138);
```

#### 4. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L30-L31` → after: `L11-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L11-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L11-L13) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L30-L31)

```diff
-       constructor(RR) {
-         this._radians = RR, this._radians < 0 && (this._radians += 2 * Math.PI)
+       constructor(rr, Sr) {
+         let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
+         this.maxDepth = Qr, this.MWr = [], this._maxBlockCapacity = Sr || 64, this._selectionContent = new Zr.e(1024), this._creationFunc = rr
```

#### 5. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L33-L34` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L15-L16) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L33-L34)

```diff
-       degrees() {
-         return 180 * this._radians / Math.PI
+       update(rr, Sr, Qr) {
+         Wr.d._CreateBlocks(rr, Sr, Qr, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
```

#### 6. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L36-L37` → after: `L18-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L18-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L18-L21) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L36-L37)

```diff
-       radians() {
-         return this._radians
+       XWr(rr) {
+         for (let Sr = 0; Sr < this.blocks.length; Sr++) {
+           this.blocks[Sr].addEntry(rr)
+         }
```

#### 7. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L39-L42` → after: `L23-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L23-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L23-L26) · [Before (L39-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L39-L42)

```diff
-       static BetweenTwoPoints(RR, JR) {
-         const GR = JR.subtract(RR),
-           yR = Math.atan2(GR.y, GR.x);
-         return new qR(yR)
+       rM(rr) {
+         for (let Sr = 0; Sr < this.blocks.length; Sr++) {
+           this.blocks[Sr].removeEntry(rr)
+         }
```

#### 8. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L44-L51` → after: `L28-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L28-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L28-L33) · [Before (L44-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L44-L51)

```diff
-       static BetweenTwoVectors(RR, JR) {
-         let GR = RR.lengthSquared() * JR.lengthSquared();
-         if (0 === GR) return new qR(Math.PI / 2);
-         GR = Math.sqrt(GR);
-         let yR = RR.dot(JR) / GR;
-         yR = (0, tR.Clamp)(yR, -1, 1);
-         const uR = Math.acos(yR);
-         return new qR(uR)
+       select(rr, Sr) {
+         this._selectionContent.reset();
+         for (let Qr = 0; Qr < this.blocks.length; Qr++) {
+           this.blocks[Qr].select(rr, this._selectionContent, Sr)
+         }
+         return Sr ? this._selectionContent.concat(this.MWr) : this._selectionContent.concatWithNoDuplicate(this.MWr), this._selectionContent
```

#### 9. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L53-L54` → after: `L35-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L35-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L35-L40) · [Before (L53-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L53-L54)

```diff
-       static FromRadians(RR) {
-         return new qR(RR)
+       intersects(rr, Sr, Qr) {
+         this._selectionContent.reset();
+         for (let Zr = 0; Zr < this.blocks.length; Zr++) {
+           this.blocks[Zr].intersects(rr, Sr, this._selectionContent, Qr)
+         }
+         return Qr ? this._selectionContent.concat(this.MWr) : this._selectionContent.concatWithNoDuplicate(this.MWr), this._selectionContent
```

#### 10. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L56-L57` → after: `L42-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L42-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L42-L47) · [Before (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L56-L57)

```diff
-       static FromDegrees(RR) {
-         return new qR(RR * Math.PI / 180)
+       intersectsRay(rr) {
+         this._selectionContent.reset();
+         for (let Sr = 0; Sr < this.blocks.length; Sr++) {
+           this.blocks[Sr].intersectsRay(rr, this._selectionContent)
+         }
+         return this._selectionContent.concatWithNoDuplicate(this.MWr), this._selectionContent
```

#### 11. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L60-L72` → after: `L50-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L50-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L50-L54) · [Before (L60-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L60-L72)

```diff
-     class iR {
-       constructor(RR, JR, GR) {
-         this.startPoint = RR, this.midPoint = JR, this.endPoint = GR;
-         const yR = Math.pow(JR.x, 2) + Math.pow(JR.y, 2),
-           tR = (Math.pow(RR.x, 2) + Math.pow(RR.y, 2) - yR) / 2,
-           ZR = (yR - Math.pow(GR.x, 2) - Math.pow(GR.y, 2)) / 2,
-           iR = (RR.x - JR.x) * (JR.y - GR.y) - (JR.x - GR.x) * (RR.y - JR.y);
-         this.centerPoint = new uR.n((tR * (JR.y - GR.y) - ZR * (RR.y - JR.y)) / iR, ((RR.x - JR.x) * ZR - (JR.x - GR.x) * tR) / iR), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = qR.BetweenTwoPoints(this.centerPoint, this.startPoint);
-         const fR = this.startAngle.degrees();
-         let VR = qR.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
-           KR = qR.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
-         VR - fR > 180 && (VR -= 360), VR - fR < -180 && (VR += 360), KR - VR > 180 && (KR -= 360), KR - VR < -180 && (KR += 360), this.orientation = VR - fR < 0 ? 0 : 1, this.angle = qR.FromDegrees(0 === this.orientation ? fR - KR : KR - fR)
-       }
+     ar.CreationFuncForMeshes = (rr, Sr) => {
+       const Qr = rr.mG();
+       !rr.isBlocked && Qr.boundingBox.intersectsMinMax(Sr.lWr, Sr.LWr) && Sr.entries.push(rr)
+     }, ar.CreationFuncForSubMeshes = (rr, Sr) => {
+       rr.mG().boundingBox.intersectsMinMax(Sr.lWr, Sr.LWr) && Sr.entries.push(rr)
```

#### 12. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L75-L99` → after: `L64-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L64-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L64-L74) · [Before (L75-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L75-L99)

```diff
-       constructor(RR, JR) {
-         this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new uR.n(RR, JR))
-       }
-       addLineTo(RR, JR) {
-         if (this.closed) return this;
-         const GR = new uR.n(RR, JR),
-           yR = this._points[this._points.length - 1];
-         return this._points.push(GR), this._length += GR.subtract(yR).length(), this
-       }
-       addArcTo(RR, JR, GR, yR) {
-         let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
-         if (this.closed) return this;
-         const ZR = this._points[this._points.length - 1],
-           qR = new uR.n(RR, JR),
-           fR = new uR.n(GR, yR),
-           VR = new iR(ZR, qR, fR);
- ... (9 more removed lines; see GitHub link above)
+       constructor(rr, Sr, Qr, Zr, Wr, ar) {
+         this.entries = [], this.GWr = new Array, this._capacity = Qr, this._depth = Zr, this._maxDepth = Wr, this._creationFunc = ar, this._minPoint = rr, this._maxPoint = Sr, this.GWr.push(rr.clone()), this.GWr.push(Sr.clone()), this.GWr.push(rr.clone()), this.GWr[2].x = Sr.x, t … [truncated]
+       }
+       get sx() {
+         return this._capacity
+       }
+       get lWr() {
+         return this._minPoint
+       }
+       get LWr() {
+         return this._maxPoint
```

#### 13. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L101-L110` → after: `L76-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L76-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L76-L87) · [Before (L101-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L101-L110)

```diff
-       addQuadraticCurveTo(RR, JR, GR, yR) {
-         let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
-         if (this.closed) return this;
-         const uR = (RR, JR, GR, yR) => (1 - RR) * (1 - RR) * JR + 2 * RR * (1 - RR) * GR + RR * RR * yR,
-           ZR = this._points[this._points.length - 1];
-         for (let qR = 0; qR <= tR; qR++) {
-           const iR = qR / tR,
-             fR = uR(iR, ZR.x, RR, GR),
-             VR = uR(iR, ZR.y, JR, yR);
-           this.addLineTo(fR, VR)
+       addEntry(rr) {
+         if (this.blocks)
+           for (let Sr = 0; Sr < this.blocks.length; Sr++) {
+             this.blocks[Sr].addEntry(rr)
+           } else this._creationFunc(rr, this), this.entries.length > this.sx && this._depth < this._maxDepth && this.createInnerBlocks()
+       }
+       removeEntry(rr) {
+         if (this.blocks) {
+           for (let Sr = 0; Sr < this.blocks.length; Sr++) {
+             this.blocks[Sr].removeEntry(rr)
+           }
+           return
```

#### 14. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L112` → after: `L89-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L89-L90) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L112)

```diff
-         return this
+         const Sr = this.entries.indexOf(rr);
+         Sr > -1 && this.entries.splice(Sr, 1)
```

#### 15. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L114-L123` → after: `L92-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L92-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L92-L95) · [Before (L114-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L114-L123)

```diff
-       addBezierCurveTo(RR, JR, GR, yR, tR, uR) {
-         let ZR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
-         if (this.closed) return this;
-         const qR = (RR, JR, GR, yR, tR) => (1 - RR) * (1 - RR) * (1 - RR) * JR + 3 * RR * (1 - RR) * (1 - RR) * GR + 3 * RR * RR * (1 - RR) * yR + RR * RR * RR * tR,
-           iR = this._points[this._points.length - 1];
-         for (let fR = 0; fR <= ZR; fR++) {
-           const VR = fR / ZR,
-             KR = qR(VR, iR.x, RR, GR, tR),
-             wR = qR(VR, iR.y, JR, yR, uR);
-           this.addLineTo(KR, wR)
+       addEntries(rr) {
+         for (let Sr = 0; Sr < rr.length; Sr++) {
+           const Qr = rr[Sr];
+           this.addEntry(Qr)
```

#### 16. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L127-L142` → after: `L98-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L98-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L98-L102) · [Before (L127-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L127-L142)

```diff
-       isPointInside(RR) {
-         let JR = !1;
-         const GR = this._points.length;
-         for (let yR = GR - 1, tR = 0; tR < GR; yR = tR++) {
-           let GR = this._points[yR],
-             uR = this._points[tR],
-             ZR = uR.x - GR.x,
-             qR = uR.y - GR.y;
-           if (Math.abs(qR) > Number.EPSILON) {
-             if (qR < 0 && (GR = this._points[tR], ZR = -ZR, uR = this._points[yR], qR = -qR), RR.y < GR.y || RR.y > uR.y) continue;
-             if (RR.y === GR.y && RR.x === GR.x) return !0;
-             {
-               const yR = qR * (RR.x - GR.x) - ZR * (RR.y - GR.y);
-               if (0 === yR) return !0;
-               if (yR < 0) continue;
-               JR = !JR
+       select(rr, Sr, Qr) {
+         if (Wr.d.IsInFrustum(this.GWr, rr)) {
+           if (this.blocks) {
+             for (let Zr = 0; Zr < this.blocks.length; Zr++) {
+               this.blocks[Zr].select(rr, Sr, Qr)
```

#### 17. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L144-L146` → after: `L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L104) · [Before (L144-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L144-L146)

```diff
-           } else {
-             if (RR.y !== GR.y) continue;
-             if (uR.x <= RR.x && RR.x <= GR.x || GR.x <= RR.x && RR.x <= uR.x) return !0
+             return
```

#### 18. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L151-L152` → after: `L109-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L109-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L109-L118) · [Before (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L151-L152)

```diff
-       close() {
-         return this.closed = !0, this
+       intersects(rr, Sr, Qr, Zr) {
+         if (Wr.d.IntersectsSphere(this._minPoint, this._maxPoint, rr, Sr)) {
+           if (this.blocks) {
+             for (let Wr = 0; Wr < this.blocks.length; Wr++) {
+               this.blocks[Wr].intersects(rr, Sr, Qr, Zr)
+             }
+             return
+           }
+           Zr ? Qr.concat(this.entries) : Qr.concatWithNoDuplicate(this.entries)
+         }
```

#### 19. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L154-L158` → after: `L120-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L120-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L120-L128) · [Before (L154-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L154-L158)

```diff
-       length() {
-         let RR = this._length;
-         if (this.closed) {
-           const JR = this._points[this._points.length - 1];
-           RR += this._points[0].subtract(JR).length()
+       intersectsRay(rr, Sr) {
+         if (rr.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
+           if (this.blocks) {
+             for (let Qr = 0; Qr < this.blocks.length; Qr++) {
+               this.blocks[Qr].intersectsRay(rr, Sr)
+             }
+             return
+           }
+           Sr.concatWithNoDuplicate(this.entries)
```

#### 20. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L162-L166` → after: `L131-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L131-L132) · [Before (L162-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L162-L166)

```diff
-       area() {
-         const RR = this._points.length;
-         let JR = 0;
-         for (let GR = RR - 1, yR = 0; yR < RR; GR = yR++) JR += this._points[GR].x * this._points[yR].y - this._points[yR].x * this._points[GR].y;
-         return .5 * JR
+       createInnerBlocks() {
+         ar._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
```

#### 21. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L168-L169` → after: `L134-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L134-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L134-L144) · [Before (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L168-L169)

```diff
-       getPoints() {
-         return this._points
+       static _CreateBlocks(rr, Sr, Qr, Wr, jr, Ir, fr, Er) {
+         fr.blocks = new Array;
+         const pr = new Zr.u((Sr.x - rr.x) / 2, (Sr.y - rr.y) / 2, (Sr.z - rr.z) / 2);
+         for (let Zr = 0; Zr < 2; Zr++)
+           for (let Sr = 0; Sr < 2; Sr++)
+             for (let xr = 0; xr < 2; xr++) {
+               const mr = rr.add(pr.multiplyByFloats(Zr, Sr, xr)),
+                 Nr = rr.add(pr.multiplyByFloats(Zr + 1, Sr + 1, xr + 1)),
+                 Ur = new ar(mr, Nr, Wr, jr + 1, Ir, Er);
+               Ur.addEntries(Qr), fr.blocks.push(Ur)
+             }
```

#### 22. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L171-L183` → after: `L146-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L146-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L146-L167) · [Before (L171-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L171-L183)

```diff
-       getPointAtLengthPosition(RR) {
-         if (RR < 0 || RR > 1) return uR.n.Zero();
-         const JR = RR * this.length();
-         let GR = 0;
-         for (let yR = 0; yR < this._points.length; yR++) {
-           const RR = (yR + 1) % this._points.length,
-             tR = this._points[yR],
-             ZR = this._points[RR].subtract(tR),
-             qR = ZR.length() + GR;
-           if (JR >= GR && JR <= qR) {
-             const RR = ZR.normalize(),
-               yR = JR - GR;
-             return new uR.n(tR.x + RR.x * yR, tR.y + RR.y * yR)
+     }
+   },
+   54146: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       b: () => pr
+     });
+     var Zr = Qr(41941),
+       Wr = Qr(38560),
+       ar = Qr(42284),
+       jr = Qr(54096),
+       Ir = Qr(42020),
+       fr = Qr(38587),
+       Er = Qr(54135);
+     class pr {
+       constructor(rr) {
+         this.name = Ir.b.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new jr.A(Wr.u.Zero(), new Wr.u(1, 1, 1)), (rr = rr || fr.b.LastCreatedScene) && (this.Dt = rr, this.Dt.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.Dt.getActiveSubMeshCandidat … [truncated]
+ ... (6 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L185` → after: `L169-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L169-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L169-L186) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L185)

```diff
-           GR = qR
+         })), this.Dt.onMeshImportedObservable.add((rr => {
+           const Sr = this.Dt.selectionOctree;
+           void 0 !== Sr && null !== Sr && Sr.XWr(rr)
+         }))
+       }
+       getActiveMeshCandidates() {
+         return this.Dt.cWr?.select(this.Dt.frustumPlanes) || this.Dt._getDefaultMeshCandidates()
+       }
+       getActiveSubMeshCandidates(rr) {
+         if (rr._submeshesOctree && rr.useOctreeForRenderingSelection) {
+           return rr._submeshesOctree.select(this.Dt.frustumPlanes)
+         }
+         return this.Dt._getDefaultSubMeshCandidates(rr)
+       }
+       getIntersectingSubMeshCandidates(rr, Sr) {
+         if (rr._submeshesOctree && rr.useOctreeForPicking) {
+ ... (2 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L187` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L188) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L187)

```diff
-         return uR.n.Zero()
+         return this.Dt._getDefaultSubMeshCandidates(rr)
```

#### 25. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L189-L190` → after: `L190-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L190-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L190-L195) · [Before (L189-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L189-L190)

```diff
-       static StartingAt(RR, JR) {
-         return new fR(RR, JR)
+       getCollidingSubMeshCandidates(rr, Sr) {
+         if (rr._submeshesOctree && rr.useOctreeForCollisions) {
+           const Qr = Sr._velocityWorldLength + Math.max(Sr._radius.x, Sr._radius.y, Sr._radius.z);
+           return rr._submeshesOctree.intersects(Sr._basePointWorld, Qr)
+         }
+         return this.Dt._getDefaultSubMeshCandidates(rr)
```

#### 26. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L194-L199` → after: `L248-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L248-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L248-L251) · [Before (L194-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L194-L199)

```diff
-       static CreateQuadraticBezier(RR, JR, GR, yR) {
-         yR = yR > 2 ? yR : 3;
-         const tR = [],
-           ZR = (RR, JR, GR, yR) => (1 - RR) * (1 - RR) * JR + 2 * RR * (1 - RR) * GR + RR * RR * yR;
-         for (let qR = 0; qR <= yR; qR++) tR.push(new uR.r(ZR(qR / yR, RR.x, JR.x, GR.x), ZR(qR / yR, RR.y, JR.y, GR.y), ZR(qR / yR, RR.z, JR.z, GR.z)));
-         return new VR(tR)
+       constructor(rr, Sr) {
+         let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
+           Wr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Zr.e;
+         this.origin = rr, this.direction = Sr, this.length = Qr, this.epsilon = Wr
```

#### 27. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L201-L206` → after: `L253-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L253-L254) · [Before (L201-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L201-L206)

```diff
-       static CreateCubicBezier(RR, JR, GR, yR, tR) {
-         tR = tR > 3 ? tR : 4;
-         const ZR = [],
-           qR = (RR, JR, GR, yR, tR) => (1 - RR) * (1 - RR) * (1 - RR) * JR + 3 * RR * (1 - RR) * (1 - RR) * GR + 3 * RR * RR * (1 - RR) * yR + RR * RR * RR * tR;
-         for (let iR = 0; iR <= tR; iR++) ZR.push(new uR.r(qR(iR / tR, RR.x, JR.x, GR.x, yR.x), qR(iR / tR, RR.y, JR.y, GR.y, yR.y), qR(iR / tR, RR.z, JR.z, GR.z, yR.z)));
-         return new VR(ZR)
+       clone() {
+         return new xr(this.origin.clone(), this.direction.clone(), this.length)
```

#### 28. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L208-L212` → after: `L256-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L256-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L256-L271) · [Before (L208-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L208-L212)

```diff
-       static CreateHermiteSpline(RR, JR, GR, yR, tR) {
-         const ZR = [],
-           qR = 1 / tR;
-         for (let iR = 0; iR <= tR; iR++) ZR.push(uR.r.Hermite(RR, JR, GR, yR, iR * qR));
-         return new VR(ZR)
+       intersectsBoxMinMax(rr, Sr) {
+         let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         const Zr = xr._TmpVector3[0].Hrr(rr.x - Qr, rr.y - Qr, rr.z - Qr),
+           Wr = xr._TmpVector3[1].Hrr(Sr.x + Qr, Sr.y + Qr, Sr.z + Qr);
+         let ar, jr, Ir, fr, Er = 0,
+           pr = Number.MAX_VALUE;
+         if (Math.abs(this.direction.x) < 1e-7) {
+           if (this.origin.x < Zr.x || this.origin.x > Wr.x) return !1
+         } else if (ar = 1 / this.direction.x, jr = (Zr.x - this.origin.x) * ar, Ir = (Wr.x - this.origin.x) * ar, Ir === -1 / 0 && (Ir = 1 / 0), jr > Ir && (fr = jr, jr = Ir, Ir = fr), Er = Math.max(jr, Er), pr = Math.min(Ir, pr), Er > pr) return !1;
+         if (Math.abs(this.direction.y) < 1e-7) {
+           if (this.origin.y < Zr.y || this.origin.y > Wr.y) return !1
+         } else if (ar = 1 / this.direction.y, jr = (Zr.y - this.origin.y) * ar, Ir = (Wr.y - this.origin.y) * ar, Ir === -1 / 0 && (Ir = 1 / 0), jr > Ir && (fr = jr, jr = Ir, Ir = fr), Er = Math.max(jr, Er), pr = Math.min(Ir, pr), Er > pr) return !1;
+         if (Math.abs(this.direction.z) < 1e-7) {
+           if (this.origin.z < Zr.z || this.origin.z > Wr.z) return !1
+         } else if (ar = 1 / this.direction.z, jr = (Zr.z - this.origin.z) * ar, Ir = (Wr.z - this.origin.z) * ar, Ir === -1 / 0 && (Ir = 1 / 0), jr > Ir && (fr = jr, jr = Ir, Ir = fr), Er = Math.max(jr, Er), pr = Math.min(Ir, pr), Er > pr) return !1;
+         return !0
```

#### 29. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L214-L222` → after: `L273-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L273-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L273-L323) · [Before (L214-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L214-L222)

```diff
-       static CreateCatmullRomSpline(RR, JR, GR) {
-         const yR = [],
-           tR = 1 / JR;
-         let ZR = 0;
-         if (GR) {
-           const GR = RR.length;
-           for (let qR = 0; qR < GR; qR++) {
-             ZR = 0;
-             for (let iR = 0; iR < JR; iR++) yR.push(uR.r.CatmullRom(RR[qR % GR], RR[(qR + 1) % GR], RR[(qR + 2) % GR], RR[(qR + 3) % GR], ZR)), ZR += tR
+       intersectsBox(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return this.intersectsBoxMinMax(rr.minimum, rr.maximum, Sr)
+       }
+       intersectsSphere(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         const Qr = rr.center.x - this.origin.x,
+           Zr = rr.center.y - this.origin.y,
+           Wr = rr.center.z - this.origin.z,
+           ar = Qr * Qr + Zr * Zr + Wr * Wr,
+           jr = rr.radius + Sr,
+           Ir = jr * jr;
+         if (ar <= Ir) return !0;
+         const fr = Qr * this.direction.x + Zr * this.direction.y + Wr * this.direction.z;
+         if (fr < 0) return !1;
+         return ar - fr * fr <= Ir
+ ... (35 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L224-L231` → after: `L325-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L325-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L325-L327) · [Before (L224-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L224-L231)

```diff
-           yR.push(yR[0])
-         } else {
-           const GR = [];
-           GR.push(RR[0].clone()), GR.push(...RR), GR.push(RR[RR.length - 1].clone());
-           let qR = 0;
-           for (; qR < GR.length - 3; qR++) {
-             ZR = 0;
-             for (let RR = 0; RR < JR; RR++) yR.push(uR.r.CatmullRom(GR[qR], GR[qR + 1], GR[qR + 2], GR[qR + 3], ZR)), ZR += tR
+           case "x": {
+             const rr = (this.origin.x - Sr) / this.direction.x;
+             return rr > 0 ? null : new Wr.u(Sr, this.origin.y + this.direction.y * -rr, this.origin.z + this.direction.z * -rr)
```

#### 31. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L233` → after: `L329-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L329-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L329-L334) · [Before (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L233)

```diff
-           qR--, yR.push(uR.r.CatmullRom(GR[qR], GR[qR + 1], GR[qR + 2], GR[qR + 3], ZR))
+           case "z": {
+             const rr = (this.origin.z - Sr) / this.direction.z;
+             return rr > 0 ? null : new Wr.u(this.origin.x + this.direction.x * -rr, this.origin.y + this.direction.y * -rr, Sr)
+           }
+           default:
+             return null
```

#### 32. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L237-L239` → after: `L337-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L337-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L337-L339) · [Before (L237-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L237-L239)

```diff
-       static ArcThru3Points(RR, JR, GR) {
-         let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
-           tR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+       har(rr, Sr, Qr) {
+         let Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+           ar = arguments.length > 4 ? arguments[4] : void 0,
```

#### 33. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L241-L269` → after: `L341-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L341-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L341-L348) · [Before (L241-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L241-L269)

```diff
-         const qR = [],
-           iR = JR.subtract(RR),
-           fR = GR.subtract(JR),
-           KR = RR.subtract(GR),
-           wR = uR.r.Cross(iR, fR),
-           rR = wR.length();
-         if (rR < Math.pow(10, -8)) return new VR(qR);
-         const eR = iR.lengthSquared(),
-           aR = fR.lengthSquared(),
-           LR = KR.lengthSquared(),
-           nR = wR.lengthSquared(),
-           UR = .5 * iR.length() * fR.length() * KR.length() / rR,
-           WR = -.5 * aR * uR.r.Dot(iR, KR) / nR,
-           AR = -.5 * LR * uR.r.Dot(iR, fR) / nR,
-           CR = -.5 * eR * uR.r.Dot(fR, KR) / nR,
-           XR = RR.scale(WR).add(JR.scale(AR)).add(GR.scale(CR)),
- ... (13 more removed lines; see GitHub link above)
+         const Ir = Wr.n.Matrix[0];
+         return rr.getWorldMatrix().invertToRef(Ir), this._tmpRay ? xr.TransformToRef(this, Ir, this._tmpRay) : this._tmpRay = xr.Transform(this, Ir), rr.intersects(this._tmpRay, Sr, Qr, Zr, ar, jr)
+       }
+       intersectsMeshes(rr, Sr, Qr) {
+         Qr ? Qr.length = 0 : Qr = [];
+         for (let Zr = 0; Zr < rr.length; Zr++) {
+           const Wr = this.har(rr[Zr], Sr);
+           Wr.hit && Qr.push(Wr)
```

#### 34. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L271` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L350) · [Before (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L271)

```diff
-         return new VR(qR)
+         return Qr.sort(this._comparePickingInfo), Qr
```

#### 35. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L273-L274` → after: `L352-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L352-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L352-L379) · [Before (L273-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L273-L274)

```diff
-       constructor(RR) {
-         this._length = 0, this._points = RR, this._length = this._computeLength(RR)
+       _comparePickingInfo(rr, Sr) {
+         return rr.distance < Sr.distance ? -1 : rr.distance > Sr.distance ? 1 : 0
+       }
+       intersectionSegment(rr, Sr, Qr) {
+         const Zr = this.origin,
+           ar = Wr.n.kU[0],
+           jr = Wr.n.kU[1],
+           Ir = Wr.n.kU[2],
+           fr = Wr.n.kU[3];
+         Sr.subtractToRef(rr, ar), this.direction.scaleToRef(xr._Rayl, Ir), Zr.addToRef(Ir, jr), rr.subtractToRef(Zr, fr);
+         const Er = Wr.u.Dot(ar, ar),
+           pr = Wr.u.Dot(ar, Ir),
+           mr = Wr.u.Dot(Ir, Ir),
+           Nr = Wr.u.Dot(ar, fr),
+           Ur = Wr.u.Dot(Ir, fr),
+           tr = Er * mr - pr * pr;
+ ... (12 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L276-L277` → after: `L381-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L381-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L381-L387) · [Before (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L276-L277)

```diff
-       getPoints() {
-         return this._points
+       update(rr, Sr, Qr, Zr, ar, jr, Ir) {
+         if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
+           xr._RayDistant || (xr._RayDistant = xr.Zero()), xr._RayDistant.unprojectRayToRef(rr, Sr, Qr, Zr, Wr.d.IdentityReadOnly, jr, Ir);
+           const fr = Wr.n.Matrix[0];
+           ar.invertToRef(fr), xr.TransformToRef(xr._RayDistant, fr, this)
+         } else this.unprojectRayToRef(rr, Sr, Qr, Zr, ar, jr, Ir);
+         return this
```

#### 37. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L279-L280` → after: `L389-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L389-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L389-L390) · [Before (L279-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L279-L280)

```diff
-       length() {
-         return this._length
+       static Zero() {
+         return new xr(Wr.u.Zero(), Wr.u.Zero())
```

#### 38. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L282-L287` → after: `L392-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L392-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L392-L393) · [Before (L282-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L282-L287)

```diff
-       continue (RR) {
-         const JR = this._points[this._points.length - 1],
-           GR = this._points.slice(),
-           yR = RR.getPoints();
-         for (let tR = 1; tR < yR.length; tR++) GR.push(yR[tR].subtract(yR[0]).add(JR));
-         return new VR(GR)
+       static CreateNew(rr, Sr, Qr, Zr, Wr, ar, jr) {
+         return xr.Zero().update(rr, Sr, Qr, Zr, Wr, ar, jr)
```

#### 39. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L289-L291` → after: `L395-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L395-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L395-L418) · [Before (L289-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L289-L291)

```diff
-       _computeLength(RR) {
-         let JR = 0;
-         for (let GR = 1; GR < RR.length; GR++) JR += RR[GR].subtract(RR[GR - 1]).length();
+       static CreateNewFromTo(rr, Sr) {
+         let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Wr.d.IdentityReadOnly;
+         const Zr = new xr(new Wr.u(0, 0, 0), new Wr.u(0, 0, 0));
+         return xr.CreateFromToToRef(rr, Sr, Zr, Qr)
+       }
+       static CreateFromToToRef(rr, Sr, Qr) {
+         let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Wr.d.IdentityReadOnly;
+         Qr.origin.iH(rr);
+         const ar = Sr.subtractToRef(rr, Qr.direction),
+           jr = Math.sqrt(ar.x * ar.x + ar.y * ar.y + ar.z * ar.z);
+         return Qr.length = jr, Qr.direction.normalize(), xr.TransformToRef(Qr, Zr, Qr)
+       }
+       static Transform(rr, Sr) {
+         const Qr = new xr(new Wr.u(0, 0, 0), new Wr.u(0, 0, 0));
+         return xr.TransformToRef(rr, Sr, Qr), Qr
+       }
+ ... (8 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L296` → after: `L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L673) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L296)

```diff
-   39912: (RR, JR, GR) => {
+   54098: (rr, Sr, Qr) => {
```

#### 41. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L300-L303` → after: `L677-L913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L677-L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L677-L913) · [Before (L300-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L300-L303)

```diff
-     var yR = GR(39914);
-     const tR = (RR, JR, GR) => RR ? RR.getClassName && "Mesh" === RR.getClassName() ? null : !RR.getClassName || "SubMesh" !== RR.getClassName() && "PhysicsBody" !== RR.getClassName() ? RR.clone ? RR.clone() : Array.isArray(RR) ? RR.slice() : GR && "object" === typeof RR ? {
-       ...RR
-     } : null : RR.clone(JR) : null;
+     var Zr = Qr(41872),
+       Wr = Qr(41875),
+       ar = Qr(38560),
+       jr = Qr(42094),
+       Ir = Qr(54104),
+       fr = Qr(42060),
+       Er = Qr(38609);
+     let pr = (() => {
+         var rr;
+         let Sr, Qr, fr, Er, pr, xr, mr, Nr, Ur = Ir.c,
+           tr = [],
+           hr = [],
+           zr = [],
+           Yr = [],
+           nr = [],
+           er = [],
+ ... (221 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L305-L318` → after: `L915-L938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L915-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L915-L938) · [Before (L305-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L305-L318)

```diff
-       static DeepCopy(RR, JR, GR, uR) {
-         let ZR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const qR = function(RR) {
-           const JR = [];
-           do {
-             const GR = Object.getOwnPropertyNames(RR);
-             for (const RR of GR) - 1 === JR.indexOf(RR) && JR.push(RR)
-           } while (RR = Object.getPrototypeOf(RR));
-           return JR
-         }(RR);
-         for (const fR of qR) {
-           if ("_" === fR[0] && (!uR || -1 === uR.indexOf(fR))) continue;
-           if (fR.endsWith("Observable")) continue;
-           if (GR && -1 !== GR.indexOf(fR)) continue;
+       constructor(rr, Sr, Qr) {
+         this.gradient = rr, this.color1 = Sr, this.color2 = Qr
+       }
+       getColorToRef(rr) {
+         this.color2 ? Zr.f.LerpToRef(this.color1, this.color2, Math.random(), rr) : rr.iH(this.color1)
+       }
+     }
+     class ar {
+       constructor(rr, Sr) {
+         this.gradient = rr, this.color = Sr
+       }
+     }
+     class jr {
+       constructor(rr, Sr, Qr) {
+         this.gradient = rr, this.factor1 = Sr, this.factor2 = Qr
+       }
+ ... (8 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L320-L333` → after: `L940-L942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L940-L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L940-L942) · [Before (L320-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L320-L333)

```diff
-             VR = typeof qR;
-           if ("function" !== VR) try {
-             if ("object" === VR)
-               if (qR instanceof Uint8Array) JR[fR] = Uint8Array.from(qR);
-               else if (qR instanceof Array) {
-               if (JR[fR] = [], qR.length > 0)
-                 if ("object" == typeof qR[0])
-                   for (let RR = 0; RR < qR.length; RR++) {
-                     const GR = tR(qR[RR], JR, ZR); - 1 === JR[fR].indexOf(GR) && JR[fR].push(GR)
-                   } else JR[fR] = qR.slice(0)
-             } else JR[fR] = tR(qR, JR, ZR);
-             else JR[fR] = qR
-           } catch (iR) {
-             yR.c.Warn(iR.message)
+             ar = Sr[Wr + 1];
+           if (rr >= Zr.gradient && rr <= ar.gradient) {
+             return void Qr(Zr, ar, (rr - Zr.gradient) / (ar.gradient - Zr.gradient))
```

#### 44. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L339` → after: `L1095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L1095) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L339)

```diff
-   39914: (RR, JR, GR) => {
+   54116: (rr, Sr, Qr) => {
```

#### 45. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L341` → after: `L1097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R1097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L1097) · [Before (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L341)

```diff
-       c: () => yR
+       d: () => FS
```

#### 46. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L344-L367` → after: `L1148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R1148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L1148) · [Before (L344-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L344-L367)

```diff
-       static _CheckLimit(RR, JR) {
-         let GR = yR._LogLimitOutputs[RR];
-         return GR ? GR.current++ : (GR = {
-           limit: JR,
-           current: 1
-         }, yR._LogLimitOutputs[RR] = GR), GR.current <= GR.limit
-       }
-       static _GenerateLimitMessage(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const GR = yR._LogLimitOutputs[RR];
-         if (!GR || !yR.MessageLimitReached) return;
-         const tR = this._Levels[JR];
-         GR.current === GR.limit && yR[tR.name](yR.MessageLimitReached.replace(/%LIMIT%/g, "" + GR.limit).replace(/%TYPE%/g, tR.name ?? ""))
-       }
-       static _AddLogEntry(RR) {
-         yR._LogCache = RR + yR._LogCache, yR.OnNewCacheEntry && yR.OnNewCacheEntry(RR)
- ... (8 more removed lines; see GitHub link above)
+       constructor() {
```

#### 47. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L369-L408` → after: `L1150-L4594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R1150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L1150-L4594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/278.js#L1150-L4594) · [Before (L369-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/278.js#L369-L408)

```diff
-           JR = arguments.length > 1 ? arguments[1] : void 0,
-           GR = arguments.length > 2 ? arguments[2] : void 0;
-         const tR = Array.isArray(JR) ? JR[0] : JR;
-         if (void 0 !== GR && !yR._CheckLimit(tR, GR)) return;
-         const uR = yR._FormatMessage(tR),
-           ZR = this._Levels[RR],
-           qR = Array.isArray(JR) ? JR.slice(1) : [];
-         ZR.logFunc && ZR.logFunc("BJS - " + uR, ...qR);
-         const iR = `<div style='color:${ZR.color}'>${uR}</div><br>`;
-         yR._AddLogEntry(iR), yR._GenerateLimitMessage(tR, RR)
-       }
-       static get LogCache() {
-         return yR._LogCache
-       }
-       static ClearLogCache() {
-         yR._LogCache = "", yR._LogLimitOutputs = {}, yR.errorsCount = 0
- ... (24 more removed lines; see GitHub link above)
+           Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+           Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this.radius = rr, this.radiusRange = Sr, this.directionRandomizer = Qr
+       }
+       startDirectionFunction(rr, Sr, Qr, Zr) {
+         const Wr = Qr.position.subtract(rr.getTranslation()).normalize(),
+           jr = (0, Nr.RandomRange)(0, this.directionRandomizer),
+           Ir = (0, Nr.RandomRange)(0, this.directionRandomizer),
+           fr = (0, Nr.RandomRange)(0, this.directionRandomizer);
+         Wr.x += jr, Wr.y += Ir, Wr.z += fr, Wr.normalize(), Zr ? Sr.iH(Wr) : ar.u.TransformNormalFromFloatsToRef(Wr.x, Wr.y, Wr.z, rr, Sr)
+       }
+       startPositionFunction(rr, Sr, Qr, Zr) {
+         const Wr = this.radius - (0, Nr.RandomRange)(0, this.radius * this.radiusRange),
+           jr = (0, Nr.RandomRange)(0, 1),
+           Ir = (0, Nr.RandomRange)(0, 2 * Math.PI),
+           fr = Math.acos(2 * jr - 1),
+ ... (3429 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/279.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/279.js` (22 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae)

#### 1. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L4-L35` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/279.js#L4) · [Before (L4-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/279.js#L4-L35)

```diff
-   40429: (RR, JR, GR) => {
-     function yR(RR) {
-       return void 0 === RR ? void 0 : [RR[0], RR[1], RR[2]]
-     }
- 
-     function tR(RR) {
-       const JR = RR.particles;
-       return {
-         opts: {
-           texture: JR.texture,
-           hK: JR.hK,
-           minLifeTime: JR.minLifeTime,
-           maxLifeTime: JR.maxLifeTime,
-           minSize: JR.minSize,
-           maxSize: JR.maxSize,
-           minEmitPower: JR.minEmitPower,
- ... (16 more removed lines; see GitHub link above)
+   42952: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L40-L63` → after: `L7-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/279.js#L7-L8) · [Before (L40-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/279.js#L40-L63)

```diff
-       i: () => ZR
-     });
-     var yR = GR(216);
-     const tR = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2" … [truncated]
-       uR = "PetRoot";
-     let ZR = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset … [truncated]
-       qR = tR;
-     new Map, new Map;
- 
-     function iR(RR) {
-       var JR;
-       return null !== (JR = (0, yR.b)(ZR, RR)) && void 0 !== JR ? JR : null
-     }
- 
-     function fR(RR) {
-       var JR;
- ... (8 more removed lines; see GitHub link above)
+       h: () => pr,
+       k: () => Er
```

#### 3. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L66-L102` → after: `L16-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L16-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/279.js#L16-L24) · [Before (L66-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/279.js#L66-L102)

```diff
-       constructor() {
-         this.pose = {
-           pos: [0, 0, 0],
-           yaw: 0,
-           mode: "flying",
-           seated: !1,
-           clip: void 0
-         }, this.BL = [0, 0, 0], this.lastFeet = [0, 0, 0], this.target = [0, 0, 0], this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0
-       }
-       step(RR) {
-         var JR;
-         const {
-           feet: GR,
-           heading: yR,
-           tuning: ZR
-         } = RR, qR = Math.min(Math.max(RR.dt, 0), .1), {
- ... (21 more removed lines; see GitHub link above)
+       static Interpolate(rr, Sr, Qr, Zr, Wr) {
+         if (0 === rr) return 0;
+         const ar = 1 - 3 * Zr + 3 * Sr,
+           jr = 3 * Zr - 6 * Sr,
+           Ir = 3 * Sr;
+         let fr = rr;
+         for (let Er = 0; Er < 5; Er++) {
+           const Sr = fr * fr;
+           fr -= (ar * (Sr * fr) + jr * Sr + Ir * fr - rr) * (1 / (3 * ar * Sr + 2 * jr * fr + Ir)), fr = Math.min(1, Math.max(0, fr))
```

#### 4. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L104-L106` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/279.js#L26) · [Before (L104-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/279.js#L104-L106)

```diff
-         const LR = yR + ZR.yawOffset;
-         var nR;
-         return this.started ? iR.yaw += ((nR = LR - iR.yaw) - 2 * Math.PI * Math.round(nR / (2 * Math.PI))) * Math.min(8 * qR, 1) : iR.yaw = LR, this.started = !0, iR.seated = "perched" === KR && this.perchLocked, iR.clip = null === (JR = ZR.clips) || void 0 === JR ? void 0 : JR[ … [truncated]
+         return 3 * Math.pow(1 - fr, 2) * fr * Qr + 3 * (1 - fr) * Math.pow(fr, 2) * Wr + Math.pow(fr, 3)
```

#### 5. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L108-L109` → after: `L28-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L28-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/279.js#L28-L31) · [Before (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/279.js#L108-L109)

```diff
-       reset() {
-         this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0, this.pose.mode = "flying", this.pose.seated = !1
+     }
+     class Ir {
+       constructor(rr) {
+         this._radians = rr, this._radians < 0 && (this._radians += 2 * Math.PI)
```

#### 6. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L111-L112` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/279.js#L33-L34) · [Before (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/279.js#L111-L112)

```diff
-       rG(RR) {
-         return "perched" === RR ? this.perchLocked ? "perch" : "land" : this.sinceTakeOffS < .4 ? "takeOff" : "fly"
+       degrees() {
+         return 180 * this._radians / Math.PI
```

#### 7. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L114-L223` → after: `L36-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L36-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/279.js#L36-L57) · [Before (L114-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/279.js#L114-L223)

```diff
-     }
- 
-     function tR(RR, JR) {
-       return RR.bobAmplitude * Math.sin(2 * Math.PI * RR.bobHz * JR)
-     }
- 
-     function uR(RR, JR, GR, yR, tR) {
-       const [uR, ZR, qR] = GR;
-       RR[0] = JR[0] + uR * tR + qR * yR, RR[1] = JR[1] + ZR, RR[2] = JR[2] - uR * yR + qR * tR
-     }
-   },
-   40402: (RR, JR, GR) => {
-     GR.d(JR, {
-       b: () => uR
-     });
-     var yR = GR(38195),
- ... (94 more removed lines; see GitHub link above)
+       radians() {
+         return this._radians
+       }
+       static BetweenTwoPoints(rr, Sr) {
+         const Qr = Sr.subtract(rr),
+           Zr = Math.atan2(Qr.y, Qr.x);
+         return new Ir(Zr)
+       }
+       static BetweenTwoVectors(rr, Sr) {
+         let Qr = rr.lengthSquared() * Sr.lengthSquared();
+         if (0 === Qr) return new Ir(Math.PI / 2);
+         Qr = Math.sqrt(Qr);
+         let Zr = rr.dot(Sr) / Qr;
+         Zr = (0, Wr.Clamp)(Zr, -1, 1);
+         const ar = Math.acos(Zr);
+         return new Ir(ar)
+ ... (6 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L226-L405` → after: `L60-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L60-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/279.js#L60-L72) · [Before (L226-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/279.js#L226-L405)

```diff
- 
-     function CR() {
-       return Promise.all([GR.e(289), GR.e(290), GR.e(287), GR.e(297), GR.e(291), GR.e(296), GR.e(294), GR.e(286), GR.e(299), GR.e(311), GR.e(298), GR.e(292), GR.e(293), GR.e(277), GR.e(0)]).then((() => GR(53540)))
-     }
-     async function XR() {
-       return (await CR()).createSceneParticleSystem
-     }
-     async function MR() {
-       Promise.all([GR.e(289), GR.e(621)]).then((() => GR(53623))).then((RR => {
-         RR.installImageBitmapTextureLoader()
-       })).catch((() => {}));
-       const [RR, JR] = await Promise.all([CR(), Promise.all([GR.e(289), GR.e(290), GR.e(287), GR.e(297), GR.e(291), GR.e(296), GR.e(294), GR.e(286), GR.e(299), GR.e(311), GR.e(298), GR.e(292), GR.e(293), GR.e(277), GR.e(0)]).then((() => GR(53641))), Promise.all([GR.e(289), GR.e(2 … [truncated]
-       return (0, qR.g)(JR.SkyMaterial), RR.default
-     }
- 
-     function BR(RR) {
- ... (164 more removed lines; see GitHub link above)
+     class fr {
+       constructor(rr, Sr, Qr) {
+         this.startPoint = rr, this.midPoint = Sr, this.endPoint = Qr;
+         const Zr = Math.pow(Sr.x, 2) + Math.pow(Sr.y, 2),
+           Wr = (Math.pow(rr.x, 2) + Math.pow(rr.y, 2) - Zr) / 2,
+           jr = (Zr - Math.pow(Qr.x, 2) - Math.pow(Qr.y, 2)) / 2,
+           fr = (rr.x - Sr.x) * (Sr.y - Qr.y) - (Sr.x - Qr.x) * (rr.y - Sr.y);
+         this.centerPoint = new ar.q((Wr * (Sr.y - Qr.y) - jr * (rr.y - Sr.y)) / fr, ((rr.x - Sr.x) * jr - (Sr.x - Qr.x) * Wr) / fr), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = Ir.BetweenTwoPoints(this.centerPoint, this.startPoint);
+         const Er = this.startAngle.degrees();
+         let pr = Ir.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
+           xr = Ir.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
+         pr - Er > 180 && (pr -= 360), pr - Er < -180 && (pr += 360), xr - pr > 180 && (xr -= 360), xr - pr < -180 && (xr += 360), this.orientation = pr - Er < 0 ? 0 : 1, this.angle = Ir.FromDegrees(0 === this.orientation ? Er - xr : xr - Er)
+       }
```

#### 9. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L407-L502` → after: `L74-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L74-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/279.js#L74-L146) · [Before (L407-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/279.js#L407-L502)

```diff
-   },
-   40103: (RR, JR, GR) => {
-     GR.d(JR, {
-       B: () => jR,
-       D: () => GJ,
-       F: () => KJ,
-       b: () => mR,
-       c: () => cR,
-       e: () => TR,
-       g: () => SR,
-       k: () => VJ,
-       n: () => uJ,
-       r: () => tJ,
-       u: () => zR,
-       y: () => QR
-     });
- ... (80 more removed lines; see GitHub link above)
+     class Er {
+       constructor(rr, Sr) {
+         this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new ar.q(rr, Sr))
+       }
+       addLineTo(rr, Sr) {
+         if (this.closed) return this;
+         const Qr = new ar.q(rr, Sr),
+           Zr = this._points[this._points.length - 1];
+         return this._points.push(Qr), this._length += Qr.subtract(Zr).length(), this
+       }
+       addArcTo(rr, Sr, Qr, Zr) {
+         let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
+         if (this.closed) return this;
+         const jr = this._points[this._points.length - 1],
+           Ir = new ar.q(rr, Sr),
+           Er = new ar.q(Qr, Zr),
+ ... (57 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L504-L508` → after: `L148-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L148-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/279.js#L148-L183) · [Before (L504-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/279.js#L504-L508)

```diff
-           const yR = (0, gR.q)(RR.action, bR.d.get("isTouchScreen")),
-             tR = (0, gR.n)(RR.action);
-           null === yR && null === tR && console.warn(`No key binding found for action: ${RR.action}`), RR = {
-             str: null !== yR && void 0 !== yR ? yR : (0, gR.m)(tR),
-             style: RR.style
+         }
+         return Sr
+       }
+       close() {
+         return this.closed = !0, this
+       }
+       length() {
+         let rr = this._length;
+         if (this.closed) {
+           const Sr = this._points[this._points.length - 1];
+           rr += this._points[0].subtract(Sr).length()
+         }
+         return rr
+       }
+       area() {
+         const rr = this._points.length;
+ ... (20 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L511-L541` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/279.js#L187) · [Before (L511-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/279.js#L511-L541)

```diff
-         let qR;
-         return qR = "string" !== typeof RR && "str" in RR ? RR : {
-             str: RR
-           }, null !== (GR = qR.style) && void 0 !== GR && GR.fontSize ? qR.style.fontSize.endsWith("px") || console.warn(new Error("Canvas text font size should be in px").stack) : qR.style ? qR.style.fontSize = `${JR}px` : qR.style = {
-             fontSize: `${JR}px`
-           },
-           function(RR) {
-             if ("object" !== typeof RR.str || !("translationKey" in RR.str)) return [RR];
-             const JR = tR.g.get().getCurrentLanguageCode(),
-               GR = (0, yR.o)(RR.str.params, MR.e.shown),
-               uR = (0, yR.u)(JR, RR.str.translationKey, GR);
-             if (uR.every((RR => "string" === typeof RR))) return [RR];
-             return uR.map((JR => "string" === typeof JR ? {
-               str: JR,
-               style: RR.style
-             } : {
- ... (15 more removed lines; see GitHub link above)
+         return ar.q.Zero()
```

#### 12. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L543-L610` → after: `L189-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L189-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/279.js#L189-L190) · [Before (L543-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/279.js#L543-L610)

```diff
-     }
- 
-     function jR(RR) {
-       return RR && void 0 !== RR.str
-     }
- 
-     function dR(RR) {
-       return RR && "object" === typeof RR && "icon" in RR && !("mainRGB" in RR)
-     }
- 
-     function ER(RR) {
-       return RR && "object" === typeof RR && "mainRGB" in RR
-     }
- 
-     function YR(RR) {
-       var JR, GR;
- ... (52 more removed lines; see GitHub link above)
+       static StartingAt(rr, Sr) {
+         return new Er(rr, Sr)
```

#### 13. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L613-L650` → after: `L193-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L193-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/279.js#L193-L199) · [Before (L613-L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/279.js#L613-L650)

```diff
- 
-     function sR(RR, JR) {
-       if (dR(RR)) return fJ(RR);
-       if (ER(RR)) return function(RR) {
-         const JR = kR(RR);
-         if (!JR) return IR;
-         const [GR, yR] = JR.icon;
-         return IR * (GR / yR)
-       }(RR.icon) + cR.HORIZONTAL_PADDING;
-       const GR = YR(RR);
-       return function(RR, JR, GR) {
-         return GR.font = JR, GR.measureText(RR).width
-       }(FR(RR), GR, JR)
-     }
- 
-     function hR(RR) {
- ... (22 more removed lines; see GitHub link above)
+     class pr {
+       static CreateQuadraticBezier(rr, Sr, Qr, Zr) {
+         Zr = Zr > 2 ? Zr : 3;
+         const Wr = [],
+           jr = (rr, Sr, Qr, Zr) => (1 - rr) * (1 - rr) * Sr + 2 * rr * (1 - rr) * Qr + rr * rr * Zr;
+         for (let Ir = 0; Ir <= Zr; Ir++) Wr.push(new ar.u(jr(Ir / Zr, rr.x, Sr.x, Qr.x), jr(Ir / Zr, rr.y, Sr.y, Qr.y), jr(Ir / Zr, rr.z, Sr.z, Qr.z)));
+         return new pr(Wr)
```

#### 14. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L652-L716` → after: `L201-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L201-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/279.js#L201-L222) · [Before (L652-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/279.js#L652-L716)

```diff
-     }
- 
-     function uJ(RR, JR, GR, yR, tR, ZR) {
-       var KR;
-       let wR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : yJ;
-       if (dR(RR)) {
-         const yR = fJ(RR);
-         return function(RR, JR, GR, yR, tR) {
-           var uR;
-           let ZR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : yJ;
-           const KR = (0, VR.j)(tR);
-           GR += cR.VERTICAL_PADDING / 2;
-           const wR = ZR(),
-             rR = (0, vR.m)(RR.icon),
-             eR = RR => {
-               if (wR === ZR())
- ... (49 more removed lines; see GitHub link above)
+       static CreateCubicBezier(rr, Sr, Qr, Zr, Wr) {
+         Wr = Wr > 3 ? Wr : 4;
+         const jr = [],
+           Ir = (rr, Sr, Qr, Zr, Wr) => (1 - rr) * (1 - rr) * (1 - rr) * Sr + 3 * rr * (1 - rr) * (1 - rr) * Qr + 3 * rr * rr * (1 - rr) * Zr + rr * rr * rr * Wr;
+         for (let fr = 0; fr <= Wr; fr++) jr.push(new ar.u(Ir(fr / Wr, rr.x, Sr.x, Qr.x, Zr.x), Ir(fr / Wr, rr.y, Sr.y, Qr.y, Zr.y), Ir(fr / Wr, rr.z, Sr.z, Qr.z, Zr.z)));
+         return new pr(jr)
+       }
+       static CreateHermiteSpline(rr, Sr, Qr, Zr, Wr) {
+         const jr = [],
+           Ir = 1 / Wr;
+         for (let fr = 0; fr <= Wr; fr++) jr.push(ar.u.Hermite(rr, Sr, Qr, Zr, fr * Ir));
+         return new pr(jr)
+       }
+       static CreateCatmullRomSpline(rr, Sr, Qr) {
+         const Zr = [],
+           Wr = 1 / Sr;
+ ... (6 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L718-L732` → after: `L224-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L224-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/279.js#L224-L231) · [Before (L718-L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/279.js#L718-L732)

```diff
-           if (!WR) return;
-           const AR = new Image;
-           rR && (AR.crossOrigin = "anonymous");
-           if (AR.src = WR, nR) return void(AR.onload = () => {
-             const JR = function(RR, JR) {
-               let [GR, yR, tR] = JR;
-               const uR = document.createElement("canvas");
-               uR.width = RR.naturalWidth, uR.height = RR.naturalHeight;
-               const ZR = uR.getContext("2d");
-               return ZR.drawImage(RR, 0, 0), ZR.globalCompositeOperation = "multiply", ZR.fillStyle = `rgb(${GR}, ${yR}, ${tR})`, ZR.fillRect(0, 0, uR.width, uR.height), ZR.globalCompositeOperation = "destination-in", ZR.drawImage(RR, 0, 0), uR
-             }(AR, nR);
-             oR[RR.icon] = JR, eR(JR), (0, UR.l)(tR)
-           });
-           HR[RR.icon] = AR, AR.onload = () => {
-             eR(AR), (0, UR.l)(tR)
+           Zr.push(Zr[0])
+         } else {
+           const Qr = [];
+           Qr.push(rr[0].clone()), Qr.push(...rr), Qr.push(rr[rr.length - 1].clone());
+           let Ir = 0;
+           for (; Ir < Qr.length - 3; Ir++) {
+             jr = 0;
+             for (let rr = 0; rr < Sr; rr++) Zr.push(ar.u.CatmullRom(Qr[Ir], Qr[Ir + 1], Qr[Ir + 2], Qr[Ir + 3], jr)), jr += Wr
```

#### 16. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L734-L839` → after: `L233-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L233-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/279.js#L233-L292) · [Before (L734-L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/279.js#L734-L839)

```diff
-         }(RR, JR, GR, yR, tR, wR), yR
-       }
-       const rR = (0, VR.j)(tR);
-       if (ER(RR)) {
-         const tR = null !== ZR && void 0 !== ZR ? ZR : sR(RR, rR);
-         return function(RR, JR, GR, yR, tR, uR) {
-           var ZR, qR;
-           uR.fillStyle = RR.mainRGB, uR.fillRect(JR, GR, yR, tR);
-           const iR = kR(RR.icon);
-           if (!iR) return;
-           const fR = (null === (ZR = RR.nameTag) || void 0 === ZR ? void 0 : ZR.iconRGB) || "white",
-             VR = (null === (qR = RR.nameTag) || void 0 === qR ? void 0 : qR.iconShadowRGB) || "black",
-             [KR, wR, , , rR] = iR.icon,
-             eR = "string" === typeof rR ? rR : rR.join(" "),
-             aR = IR / wR,
-             LR = JR + (yR - KR * aR) / 2,
- ... (90 more removed lines; see GitHub link above)
+           Ir--, Zr.push(ar.u.CatmullRom(Qr[Ir], Qr[Ir + 1], Qr[Ir + 2], Qr[Ir + 3], jr))
+         }
+         return new pr(Zr)
+       }
+       static ArcThru3Points(rr, Sr, Qr) {
+         let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
+           Wr = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+           jr = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+         const Ir = [],
+           fr = Sr.subtract(rr),
+           Er = Qr.subtract(Sr),
+           xr = rr.subtract(Qr),
+           mr = ar.u.Cross(fr, Er),
+           Nr = mr.length();
+         if (Nr < Math.pow(10, -8)) return new pr(Ir);
+         const Ur = fr.lengthSquared(),
+ ... (44 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L850` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/279.js#L296) · [Before (L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/279.js#L850)

```diff
-   39917: (RR, JR, GR) => {
+   40237: (rr, Sr, Qr) => {
```

#### 18. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L852-L855` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/279.js#L298) · [Before (L852-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/279.js#L852-L855)

```diff
-       e: () => fR,
-       h: () => ZR,
-       i: () => iR,
-       l: () => qR
+       b: () => ar
```

#### 19. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L857-L886` → after: `L300-L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L300-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/279.js#L300-L335) · [Before (L857-L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/279.js#L857-L886)

```diff
-     var yR = GR(38406),
-       tR = GR(38382),
-       uR = GR(39922);
- 
-     function ZR(RR, JR, GR, tR, uR) {
-       const ZR = function(RR) {
-           return !RR.lK.engine.needPOTTextures
-         }(RR),
-         qR = ZR ? uR.mipped : uR.unmipped;
-       return (0, yR.n)(RR.lK.jH(), JR, {
-         width: GR,
-         height: tR,
-         mipmaps: ZR,
-         samplingMode: qR,
-         hasAlpha: !0
-       })
- ... (14 more removed lines; see GitHub link above)
+     var Zr = Qr(40246);
+     const Wr = (rr, Sr, Qr) => rr ? rr.getClassName && "Mesh" === rr.getClassName() ? null : !rr.getClassName || "SubMesh" !== rr.getClassName() && "PhysicsBody" !== rr.getClassName() ? rr.clone ? rr.clone() : Array.isArray(rr) ? rr.slice() : Qr && "object" === typeof rr ? {
+       ...rr
+     } : null : rr.clone(Sr) : null;
+     class ar {
+       static DeepCopy(rr, Sr, Qr, ar) {
+         let jr = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const Ir = function(rr) {
+           const Sr = [];
+           do {
+             const Qr = Object.getOwnPropertyNames(rr);
+             for (const rr of Qr) - 1 === Sr.indexOf(rr) && Sr.push(rr)
+           } while (rr = Object.getPrototypeOf(rr));
+           return Sr
+         }(rr);
+         for (const Er of Ir) {
+ ... (20 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L896-L905` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/279.js#L339) · [Before (L896-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/279.js#L896-L905)

```diff
-   39974: (RR, JR, GR) => {
-     function yR(RR, JR) {
-       return "object" === typeof RR && null !== RR ? Object.assign(RR, {
-         startStep: JR
-       }) : RR
-     }
- 
-     function tR(RR) {
-       return "object" === typeof RR && null !== RR && "startStep" in RR ? RR.startStep : null
-     }
+   40246: (rr, Sr, Qr) => {
```

#### 21. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L907-L934` → after: `L341-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L341-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/279.js#L341-L393) · [Before (L907-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/279.js#L907-L934)

```diff
-       e: () => tR,
-       h: () => yR
-     })
-   },
-   40042: (RR, JR, GR) => {
-     var yR = {
-       "./cape_cow_cream.png": 28783,
-       "./cape_cow_normal.png": 28787,
-       "./cape_creator_level1.png": 28794,
-       "./cape_creator_level2.png": 28801,
-       "./cape_creator_level3.png": 28803,
-       "./cape_none.png": 28806,
-       "./cape_pig.png": 28808,
-       "./cape_sheep.png": 28813,
-       "./cape_super.png": 28820,
-       "./cape_super_inverted.png": 28826,
- ... (12 more removed lines; see GitHub link above)
+       c: () => Zr
+     });
+     class Zr {
+       static _CheckLimit(rr, Sr) {
+         let Qr = Zr._LogLimitOutputs[rr];
+         return Qr ? Qr.current++ : (Qr = {
+           limit: Sr,
+           current: 1
+         }, Zr._LogLimitOutputs[rr] = Qr), Qr.current <= Qr.limit
+       }
+       static _GenerateLimitMessage(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const Qr = Zr._LogLimitOutputs[rr];
+         if (!Qr || !Zr.MessageLimitReached) return;
+         const Wr = this._Levels[Sr];
+         Qr.current === Qr.limit && Zr[Wr.name](Zr.MessageLimitReached.replace(/%LIMIT%/g, "" + Qr.limit).replace(/%TYPE%/g, Wr.name ?? ""))
+ ... (37 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L938-L940` → after: `L396-L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L396-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/279.js#L396-L408) · [Before (L938-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/279.js#L938-L940)

```diff
-     tR.keys = function() {
-       return Object.keys(yR)
-     }, tR.resolve = uR, RR.exports = tR, tR.id = 40042
+     Zr.NoneLogLevel = 0, Zr.MessageLogLevel = 1, Zr.WarningLogLevel = 2, Zr.ErrorLogLevel = 4, Zr.AllLogLevel = 7, Zr.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Zr._LogCache = "", Zr._LogLimitOutputs = {}, Zr._Levels =  … [truncated]
+       color: "white",
+       logFunc: console.log,
+       name: "Log"
+     }, {
+       color: "orange",
+       logFunc: console.warn,
+       name: "Warn"
+     }, {}, {
+       color: "red",
+       logFunc: console.error,
+       name: "Error"
+     }], Zr.errorsCount = 0, Zr.Log = Zr._LogEnabled.bind(Zr, Zr.MessageLogLevel), Zr.Warn = Zr._LogEnabled.bind(Zr, Zr.WarningLogLevel), Zr.Error = Zr._LogEnabled.bind(Zr, Zr.ErrorLogLevel)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/280.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/280.js` (66 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db)

#### 1. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4-L13` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L4-L6) · [Before (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L4-L13)

```diff
-   42577: (RR, JR, GR) => {
-     GR.d(JR, {
-       c: () => uR,
-       g: () => ZR
-     });
-     var yR = GR(2144);
-     let tR = !1;
- 
-     function uR() {
-       tR = !0
+   40728: (rr, Sr, Qr) => {
+     function Zr(rr) {
+       return void 0 === rr ? void 0 : [rr[0], rr[1], rr[2]]
```

#### 2. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L16-L17` → after: `L9-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L9-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L9-L29) · [Before (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L16-L17)

```diff
-     function ZR() {
-       tR && (tR = !1, (0, yR.e)())
+     function Wr(rr) {
+       const Sr = rr.particles;
+       return {
+         opts: {
+           texture: Sr.texture,
+           sx: Sr.sx,
+           minLifeTime: Sr.minLifeTime,
+           maxLifeTime: Sr.maxLifeTime,
+           minSize: Sr.minSize,
+           maxSize: Sr.maxSize,
+           minEmitPower: Sr.minEmitPower,
+           maxEmitPower: Sr.maxEmitPower,
+           emitRate: Sr.emitRate,
+           gravity: Zr(Sr.gravity),
+           dir1: Zr(Sr.dir1),
+           dir2: Zr(Sr.dir2),
+ ... (5 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L20` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L35) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L20)

```diff
-   42423: (RR, JR, GR) => {
+   40699: (rr, Sr, Qr) => {
```

#### 4. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L34-L39` → after: `L39-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L39-L40) · [Before (L34-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L34-L39)

```diff
-       k: () => pR,
-       o: () => YR,
-       r: () => gR,
-       t: () => lR,
-       w: () => cR,
-       y: () => OR
+       i: () => fr,
+       l: () => jr
```

#### 5. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L41-L61` → after: `L42-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L42-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L42-L47) · [Before (L41-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L41-L61)

```diff
-     var yR = GR(1532),
-       tR = GR(32),
-       uR = GR(1383),
-       ZR = GR(3428),
-       qR = GR(5699),
-       iR = GR(5665);
-     let fR, VR = !1,
-       KR = !1,
-       wR = !1,
-       rR = !1;
-     const eR = 1300,
-       aR = 3e3;
-     let LR = 0,
-       nR = !1,
-       UR = !1,
-       WR = 0;
- ... (5 more removed lines; see GitHub link above)
+     var Zr = Qr(215);
+     const Wr = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2" … [truncated]
+       ar = "PetRoot";
+     let jr = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset … [truncated]
+       Ir = Wr;
+     new Map, new Map;
```

#### 6. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L63-L64` → after: `L49-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L49-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L49-L51) · [Before (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L63-L64)

```diff
-     function lR() {
-       return VR
+     function fr(rr) {
+       var Sr;
+       return null !== (Sr = (0, Zr.b)(jr, rr)) && void 0 !== Sr ? Sr : null
```

#### 7. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L67-L68` → after: `L54-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L54-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L54-L113) · [Before (L67-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L67-L68)

```diff
-     function pR() {
-       return UR
+     function Er(rr) {
+       var Sr;
+       return null !== (Sr = (0, Zr.b)(Ir, rr)) && void 0 !== Sr ? Sr : null
+     }
+   },
+   40733: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       b: () => Zr,
+       e: () => Wr,
+       f: () => ar
+     });
+     class Zr {
+       constructor() {
+         this.pose = {
+           pos: [0, 0, 0],
+           yaw: 0,
+ ... (44 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L71-L72` → after: `L116-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L116-L117) · [Before (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L71-L72)

```diff
-     function gR() {
-       return XR
+     function Wr(rr, Sr) {
+       return rr.bobAmplitude * Math.sin(2 * Math.PI * rr.bobHz * Sr)
```

#### 9. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L75-L76` → after: `L120-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L120-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L120-L122) · [Before (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L75-L76)

```diff
-     function bR() {
-       return (0, uR.u)() && !XR
+     function ar(rr, Sr, Qr, Zr, Wr) {
+       const [ar, jr, Ir] = Qr;
+       rr[0] = Sr[0] + ar * Wr + Ir * Zr, rr[1] = Sr[1] + jr, rr[2] = Sr[2] - ar * Zr + Ir * Wr
```

#### 10. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L79-L85` → after: `L132-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L132-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L132-L137) · [Before (L79-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L79-L85)

```diff
-     function vR(RR) {
-       let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-       if (RR !== XR) {
-         XR = RR;
-         for (const RR of [...BR]) RR(XR);
-         JR && jR()
-       }
+     function ar(rr, Sr) {
+       var Qr;
+       rr.blendMode = Sr.blendMode, rr.minLifeTime = Sr.minLifeTime, rr.maxLifeTime = Sr.maxLifeTime, rr.minSize = Sr.minSize, rr.maxSize = Sr.maxSize, rr.minEmitPower = Sr.minEmitPower, rr.maxEmitPower = Sr.maxEmitPower;
+       const ar = null !== (Qr = Sr.gravity) && void 0 !== Qr ? Qr : [0, 0, 0];
+       rr.gravity = new Zr.kU(ar[0], ar[1], ar[2]);
+       for (const Zr of Sr.colorGradients) rr.addColorGradient(Zr.timeFraction, (0, Wr.i)(Zr.minColor), Zr.maxColor ? (0, Wr.i)(Zr.maxColor) : void 0)
```

#### 11. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L89-L90` → after: `L170-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L170-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L170-L223) · [Before (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L89-L90)

```diff
-       return BR.add(RR), () => {
-         BR.delete(RR)
+       var Sr;
+       const Qr = null !== (Sr = pr.currentUrl.getSearchParam(rr)) && void 0 !== Sr ? Sr : Ur.j.getItem(rr);
+       return null === Qr || void 0 === Qr || "" === Qr ? null : "0" !== Qr && "false" !== Qr && !1 !== Qr && 0 !== Qr
+     }
+     async function er(rr, Sr) {
+       (0, ar.H)(null);
+       const Qr = (0, jr.p)((0, jr.n)(Sr.useWebGpu, !0));
+       (0, mr.setWebGpuRequested)("lite" === Qr.requested && (0, mr.getWebGpuSupported)());
+       const Ir = (0, jr.i)(Qr.source);
+       null !== Ir && console.info(`Renderer: ${Qr.requested} from ${Ir}`), null !== Qr.fallbackReason && console.warn(`Renderer: ${Qr.fallbackReason}`);
+       let pr = Qr.fallbackReason;
+       if ("webgl2" !== Qr.choice) {
+         const Ir = await async function(rr, Sr, Qr, jr) {
+           const Ir = await (0, mr.probeWebGpuAdapter)();
+           if ("usable" !== Ir) return (0, mr.setWebGpuFallbackReason)(Ir), console.info("No usable WebGPU adapter, rendering with WebGL."), "no usable WebGPU adapter";
+           if (Qr && !0 !== Ur.j.getItem(Zr.mc)) {
+ ... (38 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L95` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L228) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L95)

```diff
-       (0, qR.i)(ZR.C.Menu, (0, uR.u)() ? 0 : ZR.C.Menu)
+       return Promise.all([Qr.e(290), Qr.e(291), Qr.e(288), Qr.e(298), Qr.e(292), Qr.e(297), Qr.e(295), Qr.e(287), Qr.e(300), Qr.e(312), Qr.e(299), Qr.e(293), Qr.e(294), Qr.e(278), Qr.e(0)]).then((() => Qr(54088)))
```

#### 13. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L97-L99` → after: `L230-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L230-L231) · [Before (L97-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L97-L99)

```diff
- 
-     function NR() {
-       UR = !1, WR = 0, xR(), jR()
+     async function yr() {
+       return (await Kr()).createSceneParticleSystem
```

#### 14. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L101-L105` → after: `L233-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L233-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L233-L238) · [Before (L101-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L101-L105)

```diff
- 
-     function DR(RR) {
-       return MR.add(RR), () => {
-         MR.delete(RR)
-       }
+     async function Br() {
+       Promise.all([Qr.e(290), Qr.e(622)]).then((() => Qr(54157))).then((rr => {
+         rr.installImageBitmapTextureLoader()
+       })).catch((() => {}));
+       const [rr, Sr] = await Promise.all([Kr(), Promise.all([Qr.e(290), Qr.e(291), Qr.e(288), Qr.e(298), Qr.e(292), Qr.e(297), Qr.e(295), Qr.e(287), Qr.e(300), Qr.e(312), Qr.e(299), Qr.e(293), Qr.e(294), Qr.e(278), Qr.e(0)]).then((() => Qr(54165))), Promise.all([Qr.e(290), Qr.e(2 … [truncated]
+       return (0, Ir.c)(Sr.SkyMaterial), rr.default
```

#### 15. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L109` → after: `L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L242) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L109)

```diff
-       KR = !1, RR !== VR && (VR = RR, rR = !1, clearTimeout(fR), wR = !VR && CR, VR ? (nR = !1, UR = !1, WR = 0) : bR() && !CR && (UR = !0), CR = !1, VR && !bR() && QR(), TR(), wR && jR())
+       return "lite" === (0, jr.p)((0, jr.n)(rr, !1)).choice && (0, mr.getWebGpuSupported)() && !Ur.j.getItem(zr.s)
```

#### 16. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L113-L125` → after: `L246-L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L246-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L246-L248) · [Before (L113-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L113-L125)

```diff
-       RR !== nR && (nR = RR, RR || jR())
-     }
- 
-     function cR() {
-       KR = !1, rR || !0 !== zR() || (rR = !0, clearTimeout(fR), fR = setTimeout(IR, eR))
-     }
- 
-     function PR() {
-       return (!KR || performance.now() - LR > aR) && (KR = (0, iR.E)().lockPointer(), LR = performance.now()), KR
-     }
- 
-     function IR() {
-       mR() && SR() && PR()
+       Tr(rr) || Br().catch((rr => {
+         console.warn("Failed to prefetch noa's Babylon backend.", rr)
+       }))
```

#### 17. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L128-L129` → after: `L251-L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L251-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L251-L256) · [Before (L128-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L128-L129)

```diff
-     function mR() {
-       return bR() && !VR && !nR && !(0, yR.j)()
+     function Or(rr) {
+       (0, hr.g)((() => {
+         Tr(rr) ? (0, ar.q)().load().catch((rr => {
+           console.warn("Failed to prefetch the Lite renderer.", rr)
+         })) : vr(rr)
+       }))
```

#### 18. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L132` → after: `L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L268) · [Before (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L132)

```diff
-     function zR() {
+     function jr(rr) {
```

#### 19. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L134` → after: `L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L270) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L134)

```diff
-       return "undefined" === typeof navigator || null === (RR = navigator.userActivation) || void 0 === RR ? void 0 : RR.isActive
+       return null !== (Sr = rr.parentElement) && void 0 !== Sr ? Sr : rr
```

#### 20. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L137-L142` → after: `L273-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L273-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L273-L277) · [Before (L137-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L137-L142)

```diff
-     function SR() {
-       return wR && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== zR()
-     }
- 
-     function jR() {
-       bR() ? mR() && !UR && SR() && PR() : VR && !CR && QR()
+     function Ir(rr, Sr) {
+       if (rr.clientWidth <= 0 || rr.clientHeight <= 0 || Wr.d.isHeld()) return null;
+       const Qr = (0, ar.m)(),
+         [jr, Ir] = Sr.size(Qr);
+       return (0, ar.o)(jr, Ir, Qr, Zr.c.get("clientEscMenuOptions").pixelScale)
```

#### 21. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L145-L146` → after: `L287-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L287-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L287-L289) · [Before (L145-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L145-L146)

```diff
-     function dR() {
-       UR ? navigator.vendor.startsWith("Apple") ? kR() : WR = AR : jR()
+     function Wr(rr) {
+       let Sr = 0;
+       return rr > 5 && (Sr = .12 * Math.min(rr - 5, 15), rr > 20 && (Sr += .01 * (rr - 20))), 1.4 + Sr
```

#### 22. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L149-L150` → after: `L309-L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L309-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L309-L310) · [Before (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L149-L150)

```diff
-     function ER() {
-       WR > 0 && 0 === --WR && kR()
+     function fr(rr) {
+       return !1 !== rr && (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || arguments.length > 2 && void 0 !== arguments[2] && arguments[2])
```

#### 23. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L153-L154` → after: `L313-L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L313-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L313-L366) · [Before (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L153-L154)

```diff
-     function YR() {
-       WR = 0
+     function Er(rr, Sr) {
+       return null !== rr && void 0 !== rr ? rr : Sr
+     }
+ 
+     function pr(rr, Sr, Qr) {
+       return Sr && !Qr ? Math.max(1, rr / Ir) : 1
+     }
+     const xr = new WeakMap;
+ 
+     function mr(rr, Sr, Qr, Wr) {
+       const ar = rr.YB.rQr(Qr),
+         jr = ar.offset;
+       jr[0] = jr[1] = jr[2] = 0;
+       const Ir = rr.YB.rQr(Sr);
+       if (Wr || !Ir || !ar.mesh.isEnabled() || !ar.mesh.isVisible) return 1;
+       const fr = rr.YB.gJ(Qr).lD,
+ ... (38 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L157-L158` → after: `L369-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L369-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L369-L374) · [Before (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L157-L158)

```diff
-     function kR() {
-       mR() && !0 === zR() && PR()
+     function Nr(rr, Sr) {
+       const {
+         mesh: Qr,
+         offset: Zr
+       } = rr.YB.rQr(Sr), ar = rr.YB.gJ(Sr).lD, jr = ar[0] + Zr[0], Ir = ar[1] + Zr[1], fr = ar[2] + Zr[2];
+       (0, Wr.p)(Qr, jr, Ir, fr)
```

#### 25. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L161-L162` → after: `L388-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L388-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L388-L389) · [Before (L161-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L161-L162)

```diff
-     function QR() {
-       CR = !0, (0, iR.E)().unlockPointer()
+     function Ir(rr) {
+       jr = rr
```

#### 26. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L165-L168` → after: `L392-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L392-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L392-L394) · [Before (L165-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L165-L168)

```diff
-     function FR() {
-       KR = !1, wR = !1, rR = !1, clearTimeout(fR), nR = !1, UR = !1, WR = 0, CR = !1;
-       const RR = VR;
-       VR = !1, RR && TR()
+     function fr(rr) {
+       if (!jr) throw new Error("No SkyMaterial: WebGL2's backend installs it");
+       return new jr("sky", rr)
```

#### 27. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L171-L173` → after: `L397-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L397-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L397-L405) · [Before (L171-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L171-L173)

```diff
-     function TR() {
-       for (const RR of [...MR]) RR(VR);
-       tR.n.JK("pointerLockUpdate", VR)
+     function Er(rr, Sr, Qr) {
+       if (!(0, Zr.c)(rr)) return void rr.material.forceCompilation(rr, Sr);
+       const jr = () => {
+         if (rr.Dv()) return void ar.delete(rr);
+         const Zr = (0, Wr.Y)(rr.material);
+         if (![null === Zr || void 0 === Zr ? void 0 : Zr.diffuseTexture, null === Zr || void 0 === Zr ? void 0 : Zr.opacityTexture, null === Zr || void 0 === Zr ? void 0 : Zr.emissiveTexture, null === Zr || void 0 === Zr ? void 0 : Zr.reflectionTexture].every((rr => !rr || Qr.pre … [truncated]
+         ar.delete(rr), Sr()
+       };
+       jr()
```

#### 28. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L176` → after: `L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L408) · [Before (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L176)

```diff
-   42394: (RR, JR, GR) => {
+   40434: (rr, Sr, Qr) => {
```

#### 29. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L178-L179` → after: `L410-L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L410-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L410-L411) · [Before (L178-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L178-L179)

```diff
-       b: () => wR,
-       f: () => qR,
+       D: () => xS,
+       e: () => Ar,
```

#### 30. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L181` → after: `L413-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L413-L414) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L181)

```diff
-       l: () => fR,
+       j: () => dr,
+       m: () => ir,
```

#### 31. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L184` → after: `L417-L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L417-L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L417-L421) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L184)

```diff
-       r: () => iR
+       q: () => WS,
+       s: () => Vr,
+       t: () => Jr,
+       x: () => wr,
+       z: () => QS
```

#### 32. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L186-L188` → after: `L423-L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L423-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L423-L535) · [Before (L186-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L186-L188)

```diff
-     let yR = null,
-       tR = null,
-       uR = null;
+     var Zr = Qr(1251),
+       Wr = Qr(1304),
+       ar = Qr(360),
+       jr = Qr(1463),
+       Ir = Qr(5223),
+       fr = Qr(5249),
+       Er = Qr(2383),
+       pr = Qr(38762),
+       xr = Qr(38754),
+       mr = Qr(39402),
+       Nr = Qr(39030),
+       Ur = Qr(38889),
+       tr = Qr(38677),
+       hr = Qr(40436),
+       zr = Qr(39428),
+       Yr = Qr(40255),
+ ... (97 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L191` → after: `L538-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L538-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L538-L542) · [Before (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L191)

```diff
-       yR = RR
+       const Sr = Object.keys(rr).length;
+       return {
+         width: Mr.EFFECT_ICON_SIZE * Sr,
+         height: Sr > 0 ? Mr.EFFECT_ICON_SIZE : 0
+       }
```

#### 34. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L194-L195` → after: `L545-L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L545-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L545-L546) · [Before (L194-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L194-L195)

```diff
-     function qR() {
-       return yR
+     function wr(rr) {
+       return rr && void 0 !== rr.str
```

#### 35. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L199` → after: `L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L550) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L199)

```diff
-       tR = RR
+       return rr && "object" === typeof rr && "icon" in rr && !("mainRGB" in rr)
```

#### 36. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L202-L203` → after: `L553-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L553-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L553-L554) · [Before (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L202-L203)

```diff
-     function fR() {
-       return tR
+     function Fr(rr) {
+       return rr && "object" === typeof rr && "mainRGB" in rr
```

#### 37. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L207` → after: `L558-L560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L558-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L558-L560) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L207)

```diff
-       uR = RR
+       var Sr, Qr;
+       const Zr = null !== (Sr = wr(rr) ? null === (Qr = rr.style) || void 0 === Qr ? void 0 : Qr.fontSize : void 0) && void 0 !== Sr ? Sr : `${Mr.DEFAULT_FONT_SIZE}px`;
+       return Gr.text(Number(Zr.replace("px", "")))
```

#### 38. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L210-L211` → after: `L563-L566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L563-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L563-L566) · [Before (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L210-L211)

```diff
-     function KR() {
-       return uR
+     function br(rr) {
+       var Sr;
+       const Qr = null !== (Sr = Object.hasOwn(Rr.d, rr) ? Rr.d[rr] : null) && void 0 !== Sr ? Sr : (0, jr.e)(rr, (0, jr.m)(rr));
+       return Qr || console.warn(`Unknown rank icon "${rr}" \u2014 not in the bundled Font Awesome subset.`), Qr
```

#### 39. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L214-L216` → after: `L569-L570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L569-L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L569-L570) · [Before (L214-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L214-L216)

```diff
-     function wR() {
-       var RR, JR;
-       return !0 === (null === (RR = tR) || void 0 === RR || null === (JR = RR.currentViewer) || void 0 === JR ? void 0 : JR.inPlayback)
+     function Jr(rr) {
+       return Fr(rr) ? "" : Dr(rr)
```

#### 40. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L229-L245` → after: `L574-L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L574-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L574-L579) · [Before (L229-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L229-L245)

```diff
-       if (RR.queries.drawCensus() < yR.wb.BYTES) return null;
-       const JR = RR.memoryData(RR.scratch(), yR.wb.BYTES, 4, "the draw census");
-       return null === JR ? null : {
-         terrainOpaque: yR.wb.terrainOpaque(JR, 0),
-         terrainTransparent: yR.wb.terrainTransparent(JR, 0),
-         terrainPack: yR.wb.terrainPack(JR, 0),
-         earthSky: yR.wb.earthSky(JR, 0),
-         skyMeshes: yR.wb.skyMeshes(JR, 0),
-         regular: yR.wb.regular(JR, 0),
-         thin: yR.wb.thin(JR, 0),
-         line: yR.wb.line(JR, 0),
-         text: yR.wb.text(JR, 0),
-         particles: yR.wb.particles(JR, 0),
-         terrainParts: yR.wb.terrainParts(JR, 0),
-         terrainCompiling: yR.wb.terrainCompiling(JR, 0),
-         ringCopiesMax: yR.wb.ringCopiesMax(JR, 0),
- ... (1 more removed lines; see GitHub link above)
+       if (!wr(rr)) return "";
+       if ("string" === typeof rr.str) return rr.str;
+       if ("translationKey" in rr.str) {
+         const Sr = Wr.f.get().getCurrentLanguageCode(),
+           Qr = (0, Zr.p)(rr.str.params, Br.b.shown);
+         return (0, Zr.z)(Sr, rr.str.translationKey, Qr)
```

#### 41. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L249-L261` → after: `L584-L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L584-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L584-L611) · [Before (L249-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L249-L261)

```diff
-     function ZR(RR) {
-       const {
-         terrainOpaque: JR,
-         terrainTransparent: GR,
-         earthSky: yR,
-         skyMeshes: tR,
-         regular: uR,
-         thin: ZR,
-         line: qR,
-         text: iR,
-         particles: fR
-       } = RR;
-       return JR + GR + yR + tR + uR + ZR + qR + iR + fR
+     function dr(rr, Sr) {
+       if ((0, Kr.L)(rr) || 0 === rr.length) return {
+         width: 0,
+         height: 0,
+         sizeCache: []
+       };
+       let Qr = 0;
+       for (const jr of rr) {
+         const rr = ES(jr);
+         Qr = Math.max(Qr, rr)
+       }
+       const Zr = Qr + Mr.VERTICAL_PADDING,
+         Wr = [];
+       let ar = 0;
+       ar += rS(void 0, rr[0]);
+       for (let jr = 0; jr < rr.length; jr++) {
+ ... (12 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L264-L266` → after: `L614-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L614-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L614-L616) · [Before (L264-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L264-L266)

```diff
-     function qR() {
-       const RR = (0, tR.l)();
-       return !0 === (null === RR || void 0 === RR ? void 0 : RR.isCoreRunning) ? function(RR) {
+     function sr(rr, Sr) {
+       if (cr(rr)) return ES(rr);
+       if (Fr(rr)) return function(rr) {
```

#### 43. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L268-L297` → after: `L618-L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L618-L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L618-L625) · [Before (L268-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L268-L297)

```diff
-         if (null === JR) return [];
-         const {
-           terrainOpaque: GR,
-           terrainTransparent: yR,
-           terrainPack: tR,
-           earthSky: qR,
-           skyMeshes: iR,
-           regular: fR,
-           thin: VR,
-           line: KR,
-           text: wR,
-           particles: rR
-         } = JR;
-         return [{
-           label: "Drawn",
-           value: `${ZR(JR)}`
- ... (14 more removed lines; see GitHub link above)
+         if (!Sr) return kr;
+         const [Qr, Zr] = Sr.icon;
+         return kr * (Qr / Zr)
+       }(rr.icon) + Mr.HORIZONTAL_PADDING;
+       const Qr = or(rr);
+       return function(rr, Sr, Qr) {
+         return Qr.font = Sr, Qr.measureText(rr).width
+       }(Dr(rr), Qr, Sr)
```

#### 44. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L316-L317` → after: `L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L629) · [Before (L316-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L316-L317)

```diff
-       const JR = (0, uR.l)();
-       return null !== JR && +RR === JR.api.localId
+       return wr(rr) || cr(rr)
```

#### 45. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L320-L339` → after: `L632-L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L632-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L632-L635) · [Before (L320-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L320-L339)

```diff
-     function wR() {
-       VR || (VR = !0, (0, iR.l)(ZR.k, (RR => {
-         var JR, GR;
-         const yR = (0, qR.i)(ZR.k, RR);
-         if (!(0, qR.e)(yR)) return;
-         const tR = yR;
-         KR(tR.tZ) && rR(tR.uZ, {
-           icon: tR.qZ,
-           level: tR.fZ,
-           displayName: null !== (JR = tR.ZZ) && void 0 !== JR ? JR : null,
-           durationMs: null !== (GR = tR.iZ) && void 0 !== GR ? GR : null
-         })
-       })), (0, iR.l)(ZR.R, (RR => {
-         const JR = (0, qR.i)(ZR.R, RR);
-         if (!(0, qR.e)(JR)) return;
-         const GR = JR;
- ... (4 more removed lines; see GitHub link above)
+     function rS(rr, Sr) {
+       const Qr = ur(rr),
+         Zr = ur(Sr);
+       return void 0 === rr && !Zr || !Qr && void 0 === Sr ? 0 : Qr !== Zr ? .5 * Mr.HORIZONTAL_PADDING : 0
```

#### 46. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L342-L345` → after: `L639-L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L639-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L639-L640) · [Before (L342-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L342-L345)

```diff
-     function rR(RR, JR) {
-       yR.d.update(RR, JR), fR.forEach((JR => {
-         JR(RR)
-       }))
+     function QS() {
+       return SS ??= document.createElement("canvas").getContext("2d"), SS
```

#### 47. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L347-L349` → after: `L642-L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L642-L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L642-L650) · [Before (L347-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L347-L349)

```diff
-     const eR = {
-       localEffectUpdated: {
-         watch: RR => fR.add(RR)
+     const ZS = () => 0;
+ 
+     function WS(rr, Sr, Qr, Zr, Wr) {
+       let ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : ZS;
+       Sr += rS(void 0, rr[0]);
+       for (let jr = 0; jr < rr.length; jr++) {
+         const Ir = rr[jr],
+           fr = aS(Ir, Sr, Qr, Zr, Wr, void 0, ar);
+         Sr += 0 === fr ? 0 : fr + rS(Ir, rr[jr + 1])
```

#### 48. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L365` → after: `L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L654) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L365)

```diff
-     function VR(RR, JR) {
+     function aS(rr, Sr, Qr, Zr, Wr, jr) {
```

#### 49. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L367-L406` → after: `L656-L772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L656-L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L656-L772) · [Before (L367-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L367-L406)

```diff
-       return null === (GR = fR.get(RR)) || void 0 === GR ? void 0 : GR[JR]
-     }(0, ZR.l)(yR.sc.NewOtherEntitySettings, (RR => {
-       RR.payloadKind === tR.gc.Msgpack && iR.some((JR => function(RR, JR) {
-         const GR = JR[0];
-         for (let yR = RR.indexOf(GR); - 1 !== yR && yR + JR.length <= RR.length; yR = RR.indexOf(GR, yR + 1)) {
-           let GR = 1;
-           for (; GR < JR.length && RR[yR + GR] === JR[GR];) GR++;
-           if (GR === JR.length) return !0
-         }
-         return !1
-       }(RR.payload, JR))) && function(RR) {
-         if (null === RR || "object" !== typeof RR || null === RR.settings || "object" !== typeof RR.settings) return;
-         const JR = String(RR.eId),
-           GR = RR.settings;
-         let yR = fR.get(JR);
-         for (const tR in GR) {
- ... (24 more removed lines; see GitHub link above)
+       let mr = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : ZS;
+       if (cr(rr)) {
+         const Zr = ES(rr);
+         return function(rr, Sr, Qr, Zr, Wr) {
+           var ar;
+           let jr = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : ZS;
+           const xr = (0, pr.h)(Wr);
+           Qr += Mr.VERTICAL_PADDING / 2;
+           const mr = jr(),
+             Nr = (0, Xr.p)(rr.icon),
+             Ur = rr => {
+               if (mr === jr())
+                 if (xr.imageSmoothingEnabled = Nr, Nr && rr.width > rr.height) {
+                   const Wr = Zr * rr.height / rr.width;
+                   xr.drawImage(rr, Sr, Qr + (Zr - Wr) / 2, Zr, Wr)
+                 } else xr.drawImage(rr, Sr, Qr, Zr, Zr)
+ ... (101 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L408-L409` → after: `L774-L775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L774-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L774-L775) · [Before (L408-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L408-L409)

```diff
-     function KR(RR) {
-       return VR[RR]
+     function jS(rr, Sr, Qr, Zr, Wr, ar) {
+       rr.save(), rr.translate(Qr, Zr), rr.scale(Wr, Wr), rr.fillStyle = ar, rr.fill(Sr), rr.restore()
```

#### 51. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L413-L414` → after: `L778-L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L778-L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L778-L779) · [Before (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L413-L414)

```diff
-     function rR(RR) {
-       return wR.add(RR)
+     function IS(rr, Sr, Qr, Zr, Wr, ar) {
+       rr.font = Wr, rr.fillStyle = ar, rr.fillText(Sr, Qr, Zr)
```

#### 52. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L418-L466` → after: `L784-L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L784-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L784-L787) · [Before (L418-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L418-L466)

```diff
-       wR.callEach(RR, "a roster listener")
-     }(0, iR.l)(ZR.bb, (RR => {
-       const JR = (0, qR.i)(ZR.bb, RR);
-       if (void 0 === JR) return;
-       const GR = JR.vt.some((RR => {
-           let {
-             Ot: JR,
-             xt: GR
-           } = RR;
-           return null !== GR && fR.has(JR) && fR.getName(JR) !== GR
-         })),
-         {
-           added: yR,
-           removed: uR,
-           settingChanges: iR
-         } = fR.apply(JR),
- ... (33 more removed lines; see GitHub link above)
+       if (wr(rr) || cr(rr)) {
+         var Sr, Qr;
+         const Zr = null !== (Sr = null === (Qr = rr.style) || void 0 === Qr ? void 0 : Qr.fontSize) && void 0 !== Sr ? Sr : `${Mr.DEFAULT_FONT_SIZE}px`;
+         return Number(Zr.replace("px", "")) || Mr.DEFAULT_FONT_SIZE
```

#### 53. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L468-L476` → after: `L789-L848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L789-L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L789-L848) · [Before (L468-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L468-L476)

```diff
-     })), (0, iR.f)((() => {
-       fR.clear(), VR = {}, tR.e.clear(), eR({
-         kind: "reset"
-       })
-     })), (0, iR.i)((() => {
-       fR.clear(), eR({
-         kind: "reset"
-       })
-     }))
+       return Mr.DEFAULT_FONT_SIZE
+     }
+ 
+     function pS(rr, Sr, Qr) {
+       let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
+         Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
+         ar = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       const jr = rr.Ox.eC(),
+         Ir = (0, Yr.f)(rr, `${Qr}Tex`, Zr, Wr, {
+           mipped: xr.g.nearestLinearMipLinear,
+           unmipped: xr.g.nearestLinearMipNearest
+         }),
+         fr = (0, mr.p)(rr.Ox, Qr, (0, Nr.h)({
+           width: 1,
+           height: 1
+         }));
+ ... (44 more added lines; see GitHub link above)
```

#### 54. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L478` → after: `L850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L850) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L478)

```diff
-   42563: (RR, JR, GR) => {
+   40255: (rr, Sr, Qr) => {
```

#### 55. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L480` → after: `L852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L852) · [Before (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L480)

```diff
-       c: () => gR,
+       b: () => Er,
```

#### 56. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L482-L483` → after: `L854-L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L854-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L854-L855) · [Before (L482-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L482-L483)

```diff
-       j: () => xR,
-       l: () => NR
+       h: () => fr,
+       i: () => Ir
```

#### 57. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L485-L495` → after: `L857-L873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L857-L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L857-L873) · [Before (L485-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L485-L495)

```diff
-     var yR = GR(1359),
-       tR = GR(664),
-       uR = GR(103),
-       ZR = GR(5685),
-       qR = GR(42106),
-       iR = GR(42132),
-       fR = GR(42118),
-       VR = GR(42555),
-       KR = GR(42543),
-       wR = GR(42145),
-       rR = GR(42164);
+     var Zr = Qr(38762),
+       Wr = Qr(38736),
+       ar = Qr(40263);
+ 
+     function jr(rr, Sr, Qr, Wr, ar) {
+       const jr = function(rr) {
+           return !rr.Ox.engine.needPOTTextures
+         }(rr),
+         Ir = jr ? ar.mipped : ar.unmipped;
+       return (0, Zr.k)(rr.Ox.eC(), Sr, {
+         width: Qr,
+         height: Wr,
+         mipmaps: jr,
+         samplingMode: Ir,
+         hasAlpha: !0
+       })
+ ... (1 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L498-L515` → after: `L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L876) · [Before (L498-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L498-L515)

```diff
-       let {
-         deadEId: JR,
-         killerEId: GR,
-         killerLifeformType: yR,
-         withItem: tR,
-         killstreak: uR
-       } = RR;
-       return {
-         killer: AR({
-           eId: GR,
-           lifeformType: yR
-         }),
-         victim: AR({
-           eId: JR
-         }),
-         withItem: tR,
- ... (2 more removed lines; see GitHub link above)
+       (0, Zr.R)(rr, !0, !rr.sampler.noMipmap)
```

#### 59. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L525-L528` → after: `L881-L886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L881-L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L881-L886) · [Before (L525-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L525-L528)

```diff
-         killer: AR(JR),
-         victim: AR(GR),
-         withItem: yR,
-         killstreak: 0
+         diffuseTexture: rr,
+         useAlphaFromDiffuseTexture: !0,
+         transparencyMode: Wr.s.alphaTestAndBlend,
+         alphaCutOff: .05,
+         alphaMode: Wr.e.premultiplied,
+         forceDepthWrite: !0
```

#### 60. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L532-L533` → after: `L890-L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L890-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L890-L893) · [Before (L532-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L532-L533)

```diff
-     function LR(RR) {
-       BR && pR((() => "killed" === RR.kind ? eR(RR.body) : aR(RR.body)))
+     function Er(rr, Sr) {
+       rr.diffuseTexture.sampler.noMipmap || (0, Wr.t)(rr, ar.h, {
+         lodBias: ar.d[Sr]
+       })
```

#### 61. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L535-L537` → after: `L895-L896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L895-L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L895-L896) · [Before (L535-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L535-L537)

```diff
-     const nR = "#2727f1",
-       UR = "#912c2c";
- 
+   },
+   40327: (rr, Sr, Qr) => {
```

#### 62. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L539-L540` → after: `L898-L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L898-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L898-L900) · [Before (L539-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L539-L540)

```diff
-       var GR;
-       return KR.f.has(RR) ? null === (GR = KR.f.getSettings(RR)) || void 0 === GR ? void 0 : GR[JR] : (0, VR.b)(RR, JR)
+       return "object" === typeof rr && null !== rr ? Object.assign(rr, {
+         startStep: Sr
+       }) : rr
```

#### 63. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L544-L580` → after: `L904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L904) · [Before (L544-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L544-L580)

```diff
-       var JR, GR, ZR, qR, VR;
-       let {
-         eId: wR,
-         name: rR,
-         colour: eR,
-         lifeformType: aR
-       } = RR;
-       if (void 0 === wR || null === wR || "" === wR) {
-         const RR = rR || null;
-         return {
-           id: null,
-           shownName: RR,
-           lifeformType: null === RR && null !== aR && void 0 !== aR ? aR : null,
-           colour: eR || null,
-           local: !1,
-           realName: null
- ... (21 more removed lines; see GitHub link above)
+       return "object" === typeof rr && null !== rr && "startStep" in rr ? rr.startStep : null
```

#### 64. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L582-L586` → after: `L906-L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L906-L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L906-L924) · [Before (L582-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L582-L586)

```diff
-     const CR = 32;
-     let XR = [],
-       MR = null,
-       BR = !1,
-       lR = !1;
+     Qr.d(Sr, {
+       e: () => Wr,
+       f: () => Zr
+     })
+   },
+   40378: (rr, Sr, Qr) => {
+     var Zr = {
+       "./cape_cow_cream.png": 29026,
+       "./cape_cow_normal.png": 29035,
+       "./cape_creator_level1.png": 29043,
+       "./cape_creator_level2.png": 29051,
+       "./cape_creator_level3.png": 29055,
+       "./cape_none.png": 29061,
+       "./cape_pig.png": 29065,
+       "./cape_sheep.png": 29073,
+       "./cape_super.png": 29079,
+ ... (3 more added lines; see GitHub link above)
```

#### 65. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L589` → after: `L927-L928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L927-L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L927-L928) · [Before (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L589)

```diff
-       null === MR ? (XR.length === CR && XR.shift(), XR.push(RR)) : MR(RR())
+       var Sr = ar(rr);
+       return Qr(Sr)
```

#### 66. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L592-L701` → after: `L931-L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L931-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/280.js#L931-L934) · [Before (L592-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/280.js#L592-L701)

```diff
-     function gR() {
-       lR || (lR = !0, (0, rR.l)(ZR.sc.PlayerKilled, (RR => {
-         const JR = (0, wR.k)(RR);
-         (0, wR.e)(JR) && pR((() => eR(JR)))
-       })), (0, rR.l)(ZR.sc.CustomKillfeed, (RR => {
-         const JR = (0, wR.k)(RR);
-         (0, wR.e)(JR) && (0, wR.e)(JR.killer) && (0, wR.e)(JR.victim) && pR((() => aR(JR)))
-       })), (0, rR.f)((() => {
-         XR = []
-       })))
-     }
-     const bR = Object.freeze([0, 0, 0]),
-       vR = [0, 0, 0],
-       OR = [0, 0, 0],
-       xR = {
-         kill: {
- ... (94 more removed lines; see GitHub link above)
+     function ar(rr) {
+       if (!Qr.o(Zr, rr)) {
+         var Sr = new Error("Cannot find module '" + rr + "'");
+         throw Sr.code = "MODULE_NOT_FOUND", Sr
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/281.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/281.js` (71 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696)

#### 1. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L4)

```diff
-   40722: (RR, JR, GR) => {
+   42904: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L6)

```diff
-       c: () => tR
+       c: () => ar,
+       d: () => jr
```

#### 3. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L8` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L9-L10) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L8)

```diff
-     const yR = 1e3;
+     var Zr = Qr(2098);
+     let Wr = !1;
```

#### 4. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L10-L12` → after: `L12-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L12-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L12-L17) · [Before (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L10-L12)

```diff
-     function tR(RR, JR) {
-       const GR = performance.now() + RR;
-       return 0 !== JR && Math.abs(GR - JR) < yR ? JR : GR
+     function ar() {
+       Wr = !0
+     }
+ 
+     function jr() {
+       Wr && (Wr = !1, (0, Zr.b)())
```

#### 5. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L15-L17` → after: `L20-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L20-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L20-L39) · [Before (L15-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L15-L17)

```diff
-   40882: (RR, JR, GR) => {
-     GR.r(JR), GR.d(JR, {
-       default: () => qG
+   42751: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       C: () => Cr,
+       G: () => Xr,
+       H: () => gr,
+       K: () => lr,
+       L: () => cr,
+       O: () => wr,
+       S: () => Hr,
+       b: () => Fr,
+       e: () => Gr,
+       g: () => Or,
+       i: () => or,
+       m: () => Lr,
+       n: () => vr,
+       o: () => Mr,
+ ... (4 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L19-L24` → after: `L41-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L41-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L41-L61) · [Before (L19-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L19-L24)

```diff
-     var yR = GR(66);
-     const tR = "shootingLobby",
-       uR = {
-         Red: "#fc6464",
-         Blue: "#4f94f1"
-       };
+     var Zr = Qr(1518),
+       Wr = Qr(34),
+       ar = Qr(1353),
+       jr = Qr(3372),
+       Ir = Qr(5628),
+       fr = Qr(5602);
+     let Er, pr = !1,
+       xr = !1,
+       mr = !1,
+       Nr = !1;
+     const Ur = 1300,
+       tr = 3e3;
+     let hr = 0,
+       zr = !1,
+       Yr = !1,
+       nr = 0;
+ ... (5 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L26-L28` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L63-L64) · [Before (L26-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L26-L28)

```diff
-     function ZR(RR, JR) {
-       const GR = RR.reduce(((RR, JR) => RR + JR[5]), 0);
-       return 0 === GR ? 0 === RR.length ? 0 : Math.round(100 / RR.length) : Math.round(RR[JR][5] / GR * 100)
+     function vr() {
+       return pr
```

#### 8. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L49-L51` → after: `L67-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L67-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L67-L68) · [Before (L49-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L49-L51)

```diff
-     function lR(RR, JR) {
-       var GR;
-       return "tdm" === JR && vR(RR) ? uR[RR] : null !== (GR = (0, AR.lb)(RR)) && void 0 !== GR ? GR : "#ffffff"
+     function Or() {
+       return Yr
```

#### 9. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L54-L57` → after: `L71-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L71-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L71-L76) · [Before (L54-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L54-L57)

```diff
-     function pR(RR, JR) {
-       return {
-         "--team": lR(RR, JR)
-       }
+     function Lr() {
+       return yr
+     }
+ 
+     function lr() {
+       return (0, ar.v)() && !yr
```

#### 10. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L70` → after: `L80-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L80-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L80-L85) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L70)

```diff
-       return Object.hasOwn(uR, RR)
+       let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+       if (rr !== yr) {
+         yr = rr;
+         for (const rr of [...Tr]) rr(yr);
+         Sr && wr()
+       }
```

#### 11. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L80` → after: `L89-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L89-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L89-L91) · [Before (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L80)

```diff
-       return OR[RR]
+       return Tr.add(rr), () => {
+         Tr.delete(rr)
+       }
```

#### 12. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L84-L85` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L95) · [Before (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L84-L85)

```diff
-       const RR = (0, rR.i)("hiddenPlayerNames");
-       return (0, yR.useCallback)((JR => "" === JR ? "" : (0, XR.e)(JR, RR)), [RR])
+       (0, Ir.f)(jr.y.Menu, (0, ar.v)() ? 0 : jr.y.Menu)
```

#### 13. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L88-L96` → after: `L98-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L98-L99) · [Before (L88-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L88-L96)

```diff
-     function DR(RR) {
-       var JR;
-       let {
-         playerId: GR
-       } = RR;
-       const yR = null === (JR = (0, rR.i)("players").byId[GR]) || void 0 === JR ? void 0 : JR.cosmetics;
-       return (0, MR.jsx)(CR.c, {
-         cosmetics: null !== yR && void 0 !== yR ? yR : {}
-       })
+     function qr() {
+       Yr = !1, nr = 0, Hr(), wr()
```

#### 14. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L100-L119` → after: `L103-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L103-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L103-L105) · [Before (L100-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L100-L119)

```diff
-       let {
-         icon: JR,
-         value: GR,
-         label: yR,
-         gold: tR = !1
-       } = RR;
-       return (0, MR.jsxs)("div", {
-         className: "ShootingStat",
-         children: [(0, MR.jsxs)("b", {
-           className: wR()("FullyFancyText", {
-             Gold: tR
-           }),
-           children: [JR && (0, MR.jsx)(eR.d, {
-             name: JR
-           }), GR]
-         }), (0, MR.jsx)("span", {
- ... (4 more removed lines; see GitHub link above)
+       return Br.add(rr), () => {
+         Br.delete(rr)
+       }
```

#### 15. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L125-L224` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L109) · [Before (L125-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L125-L224)

```diff
-       return `shooting:${RR}`
-     }
-     class IR {
-       constructor() {
-         this.slices = {
-           hud: {
-             wire: null,
-             endsAt: 0,
-             spawnProtectionEndsAt: 0
-           },
-           lobby: {
-             wire: ["none"],
-             startsAt: 0
-           },
-           roundEnd: {
-             wire: ["none"],
- ... (84 more removed lines; see GitHub link above)
+       xr = !1, rr !== pr && (pr = rr, Nr = !1, clearTimeout(Er), mr = !pr && Kr, pr ? (zr = !1, Yr = !1, nr = 0) : lr() && !Kr && (Yr = !0), Kr = !1, pr && !lr() && Jr(), dr(), mr && wr())
```

#### 16. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L227-L228` → after: `L112-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L112-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L112-L113) · [Before (L227-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L227-L228)

```diff
-     function mR(RR, JR) {
-       return (0, oR.b)(PR(JR), (() => RR.get(JR)))
+     function Cr(rr) {
+       rr !== zr && (zr = rr, rr || wr())
```

#### 17. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L237-L304` → after: `L116-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L116-L117) · [Before (L237-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L237-L304)

```diff
-     function jR(RR) {
-       var JR;
-       let {
-         store: GR,
-         variation: yR
-       } = RR;
-       const {
-         t: tR
-       } = (0, WR.A)(), uR = mR(GR, "leaderboard"), ZR = mR(GR, "hud"), [, qR = "lobby", , fR = "normal", , , VR = "", , , KR = null] = null !== (JR = ZR.wire) && void 0 !== JR ? JR : [], nR = (0, UR.j)("match" === qR ? ZR.endsAt : 0), AR = (0, rR.i)("players").localId, CR = "tdm" … [truncated]
-       return (0, MR.jsx)(LR.e, {
-         close: iR.j,
-         togglePointerLock: !1,
-         className: "ShootingBoardOverlay",
-         children: (0, MR.jsxs)("section", {
-           className: wR()("ShootingBoard", {
-             ShootingBoardFfa: !CR
- ... (52 more removed lines; see GitHub link above)
+     function Mr() {
+       xr = !1, Nr || !0 !== Vr() || (Nr = !0, clearTimeout(Er), Er = setTimeout(kr, Ur))
```

#### 18. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L307-L387` → after: `L120-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L120-L121) · [Before (L307-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L307-L387)

```diff
-     function dR(RR) {
-       let {
-         title: JR,
-         team: GR,
-         rows: yR,
-         localId: tR
-       } = RR;
-       const {
-         t: uR
-       } = (0, WR.A)(), ZR = NR(), qR = [{
-         key: "name",
-         header: (0, MR.jsxs)("span", {
-           className: "ShootingBoardTeam",
-           children: [(0, MR.jsxs)("span", {
-             children: [JR, (null === GR || void 0 === GR ? void 0 : GR.mine) && (0, MR.jsxs)("span", {
-               className: "ShootingBoardYou",
- ... (65 more removed lines; see GitHub link above)
+     function Gr() {
+       return (!xr || performance.now() - hr > tr) && (xr = (0, fr.N)().lockPointer(), hr = performance.now()), xr
```

#### 19. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L389-L452` → after: `L123-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L123-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L123-L125) · [Before (L389-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L389-L452)

```diff
-     var ER = GR(37796),
-       YR = GR(37849),
-       kR = GR(25),
-       QR = GR(5792),
-       FR = GR(2186),
-       TR = GR(5347),
-       sR = GR(3701),
-       hR = GR(1581),
-       RJ = GR(1614),
-       JJ = GR(39767);
-     const GJ = "shooting:vote";
-     class yJ {
-       constructor(RR, JR) {
-         let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new JJ.c;
-         this.JK = RR, this.sendCommand = JR, this.pacer = GR, this.view = {
-           hidden: !1,
- ... (48 more removed lines; see GitHub link above)
+ 
+     function kr() {
+       Ar() && ir() && Gr()
```

#### 20. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L456-L531` → after: `L128-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L128-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L128-L129) · [Before (L456-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L456-L531)

```diff
-     function uJ(RR) {
-       var JR, GR, tR, uR, qR;
-       let {
-         maps: iR,
-         votes: fR
-       } = RR;
-       const {
-         t: VR
-       } = (0, WR.A)(), KR = (0, hR.h)(GJ, fR.getView()), {
-         isTouchScreen: rR,
-         openInGameMenuName: aR,
-         openEverythingMenuName: LR
-       } = (0, kR.o)(["isTouchScreen", "openInGameMenuName", "openEverythingMenuName"]), nR = null !== aR || null !== LR, UR = (0, sR.c)();
-       (0, TR.d)(!0, !rR && !KR.hidden && !nR && !UR, "shootingVoteStrip", !0), (0, yR.useEffect)((() => {
-         if (!KR.hidden && !rR) return document.body.classList.add(tJ), () => {
-           document.body.classList.remove(tJ)
- ... (60 more removed lines; see GitHub link above)
+     function Ar() {
+       return lr() && !pr && !zr && !(0, Zr.j)()
```

#### 21. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L534-L607` → after: `L132-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L132-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L132-L134) · [Before (L534-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L534-L607)

```diff
-     function ZJ(RR) {
-       let {
-         map: JR,
-         chance: GR,
-         mine: tR,
-         onVote: uR,
-         showHeads: ZR
-       } = RR;
-       const {
-         t: qR
-       } = (0, WR.A)(), [iR, fR, VR, KR, rR, aR, , LR, nR] = JR, [UR, AR] = (0, yR.useState)(!1);
-       return (0, MR.jsxs)("button", {
-         type: "button",
-         className: wR()("ShootingMapCard", {
-           Mine: tR
-         }),
- ... (58 more removed lines; see GitHub link above)
+     function Vr() {
+       var rr;
+       return "undefined" === typeof navigator || null === (rr = navigator.userActivation) || void 0 === rr ? void 0 : rr.isActive
```

#### 22. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L610-L623` → after: `L137-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L137-L138) · [Before (L610-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L610-L623)

```diff
-     function qJ(RR) {
-       let {
-         voters: JR
-       } = RR;
-       const GR = (0, rR.i)("players");
-       return (0, MR.jsx)("span", {
-         className: "ShootingMapCardHeads",
-         children: JR.slice(0, 8).map((RR => {
-           var JR;
-           return (null === (JR = GR.byId[RR]) || void 0 === JR ? void 0 : JR.cosmetics) && (0, MR.jsx)(DR, {
-             playerId: RR
-           }, RR)
-         }))
-       })
+     function ir() {
+       return mr && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== Vr()
```

#### 23. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L626-L648` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L141-L142) · [Before (L626-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L626-L648)

```diff
-     function iJ(RR) {
-       let {
-         store: JR,
-         votes: GR,
-         variation: yR
-       } = RR;
-       const tR = mR(JR, "lobby"),
-         uR = (0, rR.i)("localPlayerAlive"),
-         ZR = (0, rR.e)("connectedGame", (RR => RR.replay));
-       if ("lobby" !== tR.wire[0] || ZR) return null;
-       const qR = tR.wire;
-       return (0, MR.jsxs)(MR.Fragment, {
-         children: [(0, MR.jsx)(fJ, {
-           wire: qR,
-           startsAt: tR.startsAt,
-           variation: yR
- ... (7 more removed lines; see GitHub link above)
+     function wr() {
+       lr() ? Ar() && !Yr && ir() && Gr() : pr && !Kr && Jr()
```

#### 24. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L705-L729` → after: `L145-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L145-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L145-L146) · [Before (L705-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L705-L729)

```diff
-     function VJ(RR) {
-       let {
-         waiting: JR,
-         startsAt: GR
-       } = RR;
-       const {
-         t: yR
-       } = (0, WR.A)(), tR = (0, UR.j)(JR ? 0 : GR);
-       return (0, MR.jsxs)("div", {
-         className: "ShootingLobbyCountdown",
-         children: [JR && (0, MR.jsx)("span", {
-           className: "ShootingLobbyCountdownLabel",
-           children: yR("shootingLobby:waiting")
-         }), !JR && (0, MR.jsxs)(MR.Fragment, {
-           children: [(0, MR.jsx)("span", {
-             className: "ShootingLobbyCountdownLabel",
- ... (9 more removed lines; see GitHub link above)
+     function cr() {
+       Yr ? navigator.vendor.startsWith("Apple") ? br() : nr = er : wr()
```

#### 25. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L732-L755` → after: `L149-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L149-L150) · [Before (L732-L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L732-L755)

```diff
-     function KJ(RR) {
-       let {
-         team: JR,
-         count: GR,
-         cap: yR,
-         mine: tR
-       } = RR;
-       const {
-         t: uR
-       } = (0, WR.A)();
-       return (0, MR.jsxs)("span", {
-         className: wR()("ShootingLobbyTeam", {
-           Mine: tR,
-           Full: GR >= yR
-         }),
-         style: pR(JR, "tdm"),
- ... (8 more removed lines; see GitHub link above)
+     function Fr() {
+       nr > 0 && 0 === --nr && br()
```

#### 26. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L875-L892` → after: `L153-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L153-L154) · [Before (L875-L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L875-L892)

```diff
-     function nJ(RR) {
-       let {
-         endsAt: JR,
-         label: GR
-       } = RR;
-       const yR = (0, UR.j)(JR);
-       return (0, MR.jsxs)("div", {
-         className: "CubeWarfareClock",
-         children: [(0, MR.jsx)("div", {
-           className: wR()("CubeWarfareClockTime", {
-             Urgent: yR < 60
-           }),
-           children: (0, UR.e)(yR)
-         }), (0, MR.jsx)("div", {
-           className: "CubeWarfareClockLabel",
-           children: GR
- ... (2 more removed lines; see GitHub link above)
+     function or() {
+       nr = 0
```

#### 27. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L895-L948` → after: `L157-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L157-L158) · [Before (L895-L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L895-L948)

```diff
-     function UJ(RR) {
-       const {
-         t: JR
-       } = (0, WR.A)(), GR = JR => RR.leaderboard.filter((RR => RR[2] === JR)), yR = {
-         team: "Red",
-         name: JR(gR.Red),
-         score: RR.redScore,
-         members: GR("Red")
-       }, tR = {
-         team: "Blue",
-         name: JR(gR.Blue),
-         score: RR.blueScore,
-         members: GR("Blue")
-       }, [uR, ZR] = "Blue" === RR.myTeam ? [tR, yR] : [yR, tR], qR = (GR, yR) => (0, MR.jsxs)("div", {
-         className: wR()("CubeWarfareSide", yR, `Team-${GR.team}`, {
-           Mine: GR.team === RR.myTeam
- ... (38 more removed lines; see GitHub link above)
+     function br() {
+       Ar() && !0 === Vr() && Gr()
```

#### 28. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L951-L1005` → after: `L161-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L161-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L161-L162) · [Before (L951-L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L951-L1005)

```diff
-     function WJ(RR) {
-       var JR;
-       const {
-         t: GR
-       } = (0, WR.A)(), yR = NR(), tR = null !== (JR = RR.second) && void 0 !== JR ? JR : RR.spectating || RR.playerCount > 1 ? RR.leader : null;
-       return (0, MR.jsxs)(MR.Fragment, {
-         children: [!RR.spectating && (0, MR.jsxs)("div", {
-           className: wR()("CubeWarfareSide", "Left", "Mine", "Ffa"),
-           style: {
-             "--team": (0, AR.lb)(RR.myTeam)
-           },
-           children: [(0, MR.jsx)("span", {
-             className: "CubeWarfareYouTag",
-             children: GR("shootingOverlays:you")
-           }), (0, MR.jsxs)("div", {
-             className: "CubeWarfareSideText",
- ... (39 more removed lines; see GitHub link above)
+     function Jr() {
+       Kr = !0, (0, fr.N)().unlockPointer()
```

#### 29. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1008-L1022` → after: `L165-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L165-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L165-L168) · [Before (L1008-L1022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L1008-L1022)

```diff
-     function AJ(RR) {
-       let {
-         score: JR,
-         target: GR
-       } = RR;
-       return (0, MR.jsx)("div", {
-         className: wR()("CubeWarfareStrip", {
-           Progress: GR > 0
-         }),
-         children: GR > 0 && (0, MR.jsx)("i", {
-           style: {
-             transform: `scaleX(${Math.min(1,JR/GR)})`
-           }
-         })
-       })
+     function Dr() {
+       xr = !1, mr = !1, Nr = !1, clearTimeout(Er), zr = !1, Yr = !1, nr = 0, Kr = !1;
+       const rr = pr;
+       pr = !1, rr && dr()
```

#### 30. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1045-L1103` → after: `L171-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L171-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L171-L173) · [Before (L1045-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L1045-L1103)

```diff
-     function XJ(RR) {
-       let {
-         wire: JR,
-         touch: GR = !1
-       } = RR;
-       const {
-         t: yR
-       } = (0, WR.A)(), tR = JR[11], uR = JR[12], ZR = uR.findIndex((RR => {
-         let [, JR] = RR;
-         return tR < JR
-       }));
-       return (0, MR.jsxs)("div", {
-         className: "CubeWarfarePerkColumn",
-         children: [(0, MR.jsxs)("div", {
-           className: "CubeWarfarePerkPoints SmallTextBold",
-           children: [(0, MR.jsx)(eR.d, {
- ... (43 more removed lines; see GitHub link above)
+     function dr() {
+       for (const rr of [...Br]) rr(pr);
+       Wr.i.Jp("pointerLockUpdate", pr)
```

#### 31. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1107-L1115` → after: `L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L191) · [Before (L1107-L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L1107-L1115)

```diff
-       const [, JR] = (0, yR.useReducer)((RR => RR + 1), 0);
-       (0, yR.useEffect)((() => {
-         const GR = RR - performance.now();
-         if (0 === RR || GR <= 0) return;
-         const yR = window.setTimeout(JR, GR);
-         return () => {
-           window.clearTimeout(yR)
-         }
-       }), [RR])
+       Zr = rr
```

#### 32. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1119-L1130` → after: `L194-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L194-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L194-L195) · [Before (L1119-L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L1119-L1130)

```diff
-     function lJ(RR) {
-       let {
-         store: JR
-       } = RR;
-       const GR = vJ(mR(JR, "kill"), 2500),
-         yR = NR();
-       return GR ? (0, MR.jsx)(gJ, {
-         victimName: yR(GR.wire[2]),
-         headshot: GR.wire[4],
-         killsThisLife: GR.wire[5],
-         gold: GR.wire[6]
-       }, GR.seq) : null
+     function Ir() {
+       return Zr
```

#### 33. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1134-L1142` → after: `L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L199) · [Before (L1134-L1142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L1134-L1142)

```diff
-       let {
-         store: JR
-       } = RR;
-       const GR = vJ(mR(JR, "tier"), 3500);
-       return GR ? (0, MR.jsx)(bJ, {
-         tier: GR.wire[1],
-         perk: GR.wire[2],
-         icon: GR.wire[3]
-       }, GR.seq) : null
+       Wr = rr
```

#### 34. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1145-L1184` → after: `L202-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L202-L203) · [Before (L1145-L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L1145-L1184)

```diff
-     function gJ(RR) {
-       let {
-         victimName: JR,
-         headshot: GR,
-         killsThisLife: yR,
-         gold: tR
-       } = RR;
-       const {
-         t: uR
-       } = (0, WR.A)(), ZR = BJ[Math.min(yR, BJ.length - 1)];
-       return (0, MR.jsxs)("div", {
-         className: "CubeWarfareKillPop",
-         children: [ZR && (0, MR.jsx)("div", {
-           className: "CubeWarfareMultiKill SmallTextBold",
-           children: uR(ZR)
-         }), (0, MR.jsxs)("div", {
- ... (24 more removed lines; see GitHub link above)
+     function Er() {
+       return Wr
```

#### 35. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1188-L1216` → after: `L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L207) · [Before (L1188-L1216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L1188-L1216)

```diff
-       let {
-         tier: JR,
-         perk: GR,
-         icon: yR
-       } = RR;
-       const {
-         t: tR
-       } = (0, WR.A)();
-       return (0, MR.jsxs)("div", {
-         className: "CubeWarfareTierBanner",
-         children: [(0, MR.jsx)("div", {
-           className: "CubeWarfareTierIcon",
-           children: (0, MR.jsx)(eR.d, {
-             name: yR || "crosshairs"
-           })
-         }), (0, MR.jsxs)("div", {
- ... (13 more removed lines; see GitHub link above)
+       ar = rr
```

#### 36. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1219-L1220` → after: `L210-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L210-L211) · [Before (L1219-L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L1219-L1220)

```diff
-     function vJ(RR, JR) {
-       return MJ(RR ? RR.at + JR : 0), RR && performance.now() - RR.at < JR ? RR : null
+     function xr() {
+       return ar
```

#### 37. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1226-L1242` → after: `L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L216) · [Before (L1226-L1242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L1226-L1242)

```diff
-       const GR = null === (RR = (0, OJ.f)("currencyAmounts")) || void 0 === RR || null === (JR = RR.gold) || void 0 === JR ? void 0 : JR.amount,
-         [tR, uR] = (0, yR.useState)(0),
-         ZR = (0, yR.useRef)(GR);
-       return (0, yR.useEffect)((() => {
-         void 0 !== GR && void 0 !== ZR.current && GR > ZR.current && uR((RR => RR + 1)), ZR.current = GR
-       }), [GR]), void 0 === GR ? null : (0, MR.jsx)(ER.d, {
-         placement: "statBars",
-         children: (0, MR.jsxs)("div", {
-           className: wR()("CubeWarfareWallet SmallTextBold", {
-             Bump: tR > 0
-           }),
-           children: [(0, MR.jsx)(eR.d, {
-             name: "coins",
-             className: "CubeWarfareCoin"
-           }), GR]
-         }, tR)
- ... (1 more removed lines; see GitHub link above)
+       return !0 === (null === (rr = Wr) || void 0 === rr || null === (Sr = rr.currentViewer) || void 0 === Sr ? void 0 : Sr.inPlayback)
```

#### 38. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1244-L1251` → after: `L218-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L218-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L218-L246) · [Before (L1244-L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L1244-L1251)

```diff
- 
-     function NJ(RR) {
-       let {
-         endsAt: JR
-       } = RR;
-       return 0 === JR ? null : (0, MR.jsx)(HJ, {
-         endsAt: JR
-       }, JR)
+   },
+   42895: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       e: () => jr,
+       f: () => ar,
+       i: () => Ir
+     });
+     var Zr = Qr(42438),
+       Wr = Qr(42451);
+ 
+     function ar(rr) {
+       if (rr.queries.drawCensus() < Zr.lb.BYTES) return null;
+       const Sr = rr.memoryData(rr.scratch(), Zr.lb.BYTES, 4, "the draw census");
+       return null === Sr ? null : {
+         terrainOpaque: Zr.lb.terrainOpaque(Sr, 0),
+         terrainTransparent: Zr.lb.terrainTransparent(Sr, 0),
+ ... (13 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1255-L1256` → after: `L250-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L250-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L250-L259) · [Before (L1255-L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L1255-L1256)

```diff
-       let {
-         endsAt: JR
+       const {
+         terrainOpaque: Sr,
+         terrainTransparent: Qr,
+         earthSky: Zr,
+         skyMeshes: Wr,
+         regular: ar,
+         thin: jr,
+         line: Ir,
+         text: fr,
+         particles: Er
```

#### 40. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1258-L1260` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L261) · [Before (L1258-L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L1258-L1260)

```diff
-       return MJ(JR), JR <= performance.now() ? null : (0, MR.jsx)("div", {
-         className: "CubeWarfareProtectionEdge"
-       })
+       return Sr + Qr + Zr + Wr + ar + jr + Ir + fr + Er
```

#### 41. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1263-L1286` → after: `L264-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L264-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L264-L297) · [Before (L1263-L1286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L1263-L1286)

```diff
-     function HJ(RR) {
-       let {
-         endsAt: JR
-       } = RR;
-       const {
-         t: GR
-       } = (0, WR.A)(), [tR] = (0, yR.useState)((() => Math.max(0, JR - performance.now())));
-       return MJ(JR), JR <= performance.now() ? null : (0, MR.jsxs)("div", {
-         className: "CubeWarfareProtection",
-         children: [(0, MR.jsx)(eR.d, {
-           name: "shield-halved",
-           className: "CubeWarfareProtectionIcon"
-         }), (0, MR.jsxs)("div", {
-           className: "CubeWarfareProtectionText SmallTextBold",
-           children: [GR("cubeWarfareHud:spawnProtected"), (0, MR.jsx)("small", {
-             children: GR("cubeWarfareHud:spawnProtectedHint")
- ... (8 more removed lines; see GitHub link above)
+     function Ir() {
+       const rr = (0, Wr.f)();
+       return !0 === (null === rr || void 0 === rr ? void 0 : rr.isCoreRunning) ? function(rr) {
+         const Sr = ar(rr);
+         if (null === Sr) return [];
+         const {
+           terrainOpaque: Qr,
+           terrainTransparent: Zr,
+           terrainPack: Wr,
+           earthSky: Ir,
+           skyMeshes: fr,
+           regular: Er,
+           thin: pr,
+           line: xr,
+           text: mr,
+           particles: Nr
+ ... (18 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1290-L1308` → after: `L316-L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L316-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L316-L317) · [Before (L1290-L1308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L1290-L1308)

```diff
-       let {
-         place: JR,
-         hidden: GR = !1,
-         children: yR
-       } = RR;
-       return "OverHotbar" !== JR ? (0, MR.jsx)("div", {
-         className: wR()("CubeWarfareCentreSlot", JR, {
-           Hidden: GR
-         }),
-         children: yR
-       }) : (0, MR.jsx)(ER.d, {
-         children: (0, MR.jsx)("div", {
-           className: "CubeWarfareOverHotbar",
-           children: (0, MR.jsx)("div", {
-             className: "CubeWarfareCentreSlot OverHotbar",
-             children: yR
- ... (3 more removed lines; see GitHub link above)
+       const Sr = (0, ar.f)();
+       return null !== Sr && +rr === Sr.api.localId
```

#### 43. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1320-L1389` → after: `L320-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L320-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L320-L330) · [Before (L1320-L1389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L1320-L1389)

```diff
-     function PJ(RR) {
-       let {
-         item: JR,
-         shotsLeft: GR,
-         clipSize: tR
-       } = RR;
-       const {
-         t: uR
-       } = (0, WR.A)(), ZR = function(RR, JR, GR) {
-         const [tR, uR] = (0, yR.useState)(null), ZR = (0, yR.useRef)(RR), qR = (0, yR.useRef)(0);
-         return (0, hR.f)("middleScreenBarInitiate", (RR => {
-           let {
-             duration: GR
-           } = RR;
-           GR >= 400 && ZR.current < JR && uR({
-             key: ++qR.current,
- ... (54 more removed lines; see GitHub link above)
+     function mr() {
+       pr || (pr = !0, (0, fr.j)(jr.m, (rr => {
+         var Sr, Qr;
+         const Zr = (0, Ir.d)(jr.m, rr);
+         if (!(0, Ir.b)(Zr)) return;
+         const Wr = Zr;
+         xr(Wr.ua) && Nr(Wr.rj, {
+           icon: Wr.Qj,
+           level: Wr.Wj,
+           displayName: null !== (Sr = Wr.Sj) && void 0 !== Sr ? Sr : null,
+           durationMs: null !== (Qr = Wr.Zj) && void 0 !== Qr ? Qr : null
```

#### 44. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1391` → after: `L332-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L332-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L332-L339) · [Before (L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L1391)

```diff
-       })
+       })), (0, fr.j)(jr.O, (rr => {
+         const Sr = (0, Ir.d)(jr.O, rr);
+         if (!(0, Ir.b)(Sr)) return;
+         const Qr = Sr;
+         xr(Qr.ua) && Zr.b.remove(Qr.rj)
+       })), (0, fr.d)((() => {
+         Zr.b.clear()
+       })))
```

#### 45. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1394-L1443` → after: `L342-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L342-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L342-L345) · [Before (L1394-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L1394-L1443)

```diff
-     function IJ(RR) {
-       let {
-         store: JR
-       } = RR;
-       const GR = mR(JR, "hud"),
-         tR = mR(JR, "leaderboard"),
-         uR = (0, rR.e)("connectedGame", (RR => RR.replay));
-       ! function(RR) {
-         (0, yR.useEffect)((() => {
-           const JR = (0, wJ.m)({
-               headshot: (JR, GR) => {
-                 var yR;
-                 const tR = performance.now(),
-                   uR = RR.get("killfeed").findLast((RR => {
-                     let {
-                       at: yR,
- ... (34 more removed lines; see GitHub link above)
+     function Nr(rr, Sr) {
+       Zr.b.update(rr, Sr), Er.forEach((Sr => {
+         Sr(rr)
+       }))
```

#### 46. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1445-L1475` → after: `L347-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L347-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L347-L350) · [Before (L1445-L1475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L1445-L1475)

```diff
- 
-     function mJ(RR) {
-       let {
-         store: JR,
-         protectionEndsAt: GR
-       } = RR;
-       const {
-         isTouchScreen: yR
-       } = (0, kR.o)(["isTouchScreen"]), tR = (0, hR.h)("aimingOverlay", "none"), uR = (0, MR.jsx)(NJ, {
-         endsAt: GR
-       }), ZR = (0, MR.jsx)(pJ, {
-         store: JR
-       }), qR = (0, MR.jsx)(lJ, {
-         store: JR
-       });
-       if (!yR) return (0, MR.jsxs)(oJ, {
- ... (15 more removed lines; see GitHub link above)
+     const Ur = {
+       localEffectUpdated: {
+         watch: rr => Er.add(rr)
+       }
```

#### 47. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1477-L1478` → after: `L352-L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L352-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L352-L406) · [Before (L1477-L1478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L1477-L1478)

```diff
-     var zJ = GR(359);
-     const SJ = 2 * Math.PI * 19;
+   },
+   42884: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       b: () => pr
+     });
+     var Zr = Qr(5617),
+       Wr = Qr(5610),
+       ar = Qr(42485),
+       jr = Qr(42495);
+     const Ir = new Set(Zr.N),
+       fr = Zr.N.map((rr => (new TextEncoder).encode(rr))),
+       Er = new Map;
+ 
+     function pr(rr, Sr) {
+       var Qr;
+       return null === (Qr = Er.get(rr)) || void 0 === Qr ? void 0 : Qr[Sr]
+ ... (39 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1481-L1590` → after: `L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L409) · [Before (L1481-L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L1481-L1590)

```diff
-       var JR, GR;
-       let {
-         store: tR,
-         variation: uR,
-         state: ZR
-       } = RR;
-       const {
-         t: qR
-       } = (0, WR.A)(), iR = mR(tR, "death"), fR = mR(tR, "leaderboard"), VR = NR(), KR = (0, yR.useRef)(performance.now()), wR = (0, yR.useRef)(ZR.alive);
-       !ZR.alive && wR.current && (KR.current = performance.now()), wR.current = ZR.alive;
-       const rR = (0, yR.useRef)(null);
-       iR && iR.at >= KR.current - 3e3 && (rR.current = {
-         diedAt: KR.current,
-         wire: iR.wire
-       });
-       const LR = (null === (JR = rR.current) || void 0 === JR ? void 0 : JR.diedAt) === KR.current ? rR.current.wire : null,
- ... (94 more removed lines; see GitHub link above)
+       return pr[rr]
```

#### 49. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1594-L1601` → after: `L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L414) · [Before (L1594-L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L1594-L1601)

```diff
-       switch (RR) {
-         case "self":
-           return `${BR}diedSelf`;
-         case "void":
-           return `${BR}diedVoid`;
-         default:
-           return "respawnPage:youDied"
-       }
+       return mr.add(rr)
```

#### 50. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1605-L1634` → after: `L418-L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L418-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L418-L470) · [Before (L1605-L1634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L1605-L1634)

```diff
-       let {
-         secondsLeft: JR,
-         totalSeconds: GR,
-         alive: yR
-       } = RR;
-       const tR = yR || JR <= 0,
-         uR = GR > 0 ? Math.min(1, JR / GR) : 0;
-       return (0, MR.jsxs)("div", {
-         className: "ShootingDeathRing",
-         children: [(0, MR.jsxs)("svg", {
-           viewBox: "0 0 44 44",
-           children: [(0, MR.jsx)("circle", {
-             className: "ShootingDeathRingTrack",
-             cx: "22",
-             cy: "22",
-             r: 19
- ... (14 more removed lines; see GitHub link above)
+       mr.callEach(rr, "a roster listener")
+     }(0, fr.j)(jr._, (rr => {
+       const Sr = (0, Ir.d)(jr._, rr);
+       if (void 0 === Sr) return;
+       const Qr = Sr.vW.some((rr => {
+           let {
+             OW: Sr,
+             LW: Qr
+           } = rr;
+           return null !== Qr && Er.has(Sr) && Er.getName(Sr) !== Qr
+         })),
+         {
+           added: Zr,
+           removed: ar,
+           settingChanges: fr
+         } = Er.apply(Sr),
+ ... (37 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1653-L1672` → after: `L520-L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L520-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L520-L522) · [Before (L1653-L1672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L1653-L1672)

```diff
-         store: JR
-       } = RR;
-       const GR = mR(JR, "roundEnd"),
-         yR = mR(JR, "hud").wire,
-         tR = (0, rR.i)("localPlayerAlive"),
-         uR = (0, UR.j)(GR.lobbyAt),
-         ZR = (0, rR.e)("connectedGame", (RR => RR.replay));
-       return "roundEnd" !== GR.wire[0] || !yR || !tR || uR <= 0 || ZR ? null : (0, MR.jsx)(hJ, {
-         wire: GR.wire,
-         hud: yR,
-         lobbyAt: GR.lobbyAt,
-         secondsLeft: uR
-       }, GR.lobbyAt)
-     }
-     const hJ = (0, yR.memo)((function(RR) {
-       let {
- ... (4 more removed lines; see GitHub link above)
+         killer: Sr,
+         victim: Qr,
+         withItem: Zr
```

#### 52. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1674-L1783` → after: `L524-L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L524-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L524-L528) · [Before (L1674-L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L1674-L1783)

```diff
-       const {
-         t: ZR
-       } = (0, WR.A)(), [qR] = (0, yR.useState)((() => Math.max(0, tR - performance.now()))), iR = NR(), [, fR, VR, KR, , rR, eR, aR, LR, nR, , UR, AR, CR, XR, lR, bR, vR] = JR, [, , OR, DR, , oR, cR, PR] = GR, IR = "tdm" === OR, mR = RR => RR === cR ? ZR(`${BR}teamYours`, {
-         team: ZR(gR[RR])
-       }) : ZR(gR[RR]);
-       return (0, MR.jsxs)("div", {
-         className: wR()("ShootingResults", "win" === fR ? "Won" : "Lost"),
-         style: {
-           "--lobbyMs": `${vR}ms`,
-           "--lobbyElapsedMs": `${Math.max(0,vR-qR)}ms`
-         },
-         children: [(0, MR.jsx)("div", {
-           className: "ShootingResultsTitle FullyFancyText",
-           children: RG(ZR, JR, IR, PR, iR)
-         }), (0, MR.jsxs)("div", {
-           className: "ShootingResultsScore FullyFancyText",
- ... (94 more removed lines; see GitHub link above)
+       return {
+         killer: er(Sr),
+         victim: er(Qr),
+         withItem: Zr,
+         killstreak: 0
```

#### 53. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1788-L1827` → after: `L533-L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L533-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L533-L540) · [Before (L1788-L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L1788-L1827)

```diff
-       let {
-         entry: JR,
-         place: GR,
-         mvp: yR,
-         tdm: tR
-       } = RR;
-       const {
-         t: uR
-       } = (0, WR.A)(), ZR = NR(), [qR, iR, fR, VR, KR] = JR, aR = (0, rR.i)("players").localId;
-       return (0, MR.jsxs)("div", {
-         className: wR()("ShootingPodiumCard", `Place${GR+1}`, {
-           Mvp: yR,
-           Mine: qR === aR,
-           Team: tR
-         }),
-         style: tR ? pR(fR, "tdm") : void 0,
- ... (24 more removed lines; see GitHub link above)
+       Tr && Or((() => "killed" === rr.kind ? Ur(rr.body) : tr(rr.body)))
+     }
+     const zr = "#2727f1",
+       Yr = "#912c2c";
+ 
+     function nr(rr, Sr) {
+       var Qr;
+       return xr.g.has(rr) ? null === (Qr = xr.g.getSettings(rr)) || void 0 === Qr ? void 0 : Qr[Sr] : (0, pr.b)(rr, Sr)
```

#### 54. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1831` → after: `L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L544) · [Before (L1831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L1831)

```diff
-       var JR, GR;
+       var Sr, Qr, jr, Ir, pr;
```

#### 55. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1833-L1834` → after: `L546-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L546-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L546-L549) · [Before (L1833-L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L1833-L1834)

```diff
-         store: tR,
-         variation: uR
+         eId: mr,
+         name: Nr,
+         colour: Ur,
+         lifeformType: tr
```

#### 56. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1836-L1841` → after: `L551-L559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L551-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L551-L559) · [Before (L1836-L1841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L1836-L1841)

```diff
-       const ZR = "lobby" !== (null !== (JR = null === (GR = mR(tR, "hud").wire) || void 0 === GR ? void 0 : GR[1]) && void 0 !== JR ? JR : "lobby");
-       return (0, yR.useEffect)((() => {
-         if (!ZR) return;
-         const RR = (0, iR.x)(iR.t);
-         return () => {
-           RR(), (0, iR.h)()
+       if (void 0 === mr || null === mr || "" === mr) {
+         const rr = Nr || null;
+         return {
+           id: null,
+           shownName: rr,
+           lifeformType: null === rr && null !== tr && void 0 !== tr ? tr : null,
+           colour: Ur || null,
+           local: !1,
+           realName: null
```

#### 57. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1843-L1849` → after: `L561-L580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L561-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L561-L580) · [Before (L1843-L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L1843-L1849)

```diff
-       }), [ZR]), (0, yR.useEffect)((() => (0, iR.D)((RR => (0, MR.jsx)(jJ, {
-         store: tR,
-         variation: uR,
-         state: RR
-       })))), [tR, uR]), (0, MR.jsx)(sJ, {
-         store: tR
-       })
+       }
+       const hr = String(mr),
+         er = null === (Sr = (0, Er.f)()) || void 0 === Sr ? void 0 : Sr.api,
+         Kr = void 0 !== er && String(er.localId) === hr,
+         yr = null !== (Qr = xr.g.getName(hr)) && void 0 !== Qr ? Qr : null,
+         Br = null !== (jr = nr(hr, "hideNameSeed")) && void 0 !== jr ? jr : null;
+       let Tr = null === yr ? null : (0, Zr.e)(yr, !ar.featureFlags.canSeeRealPlayerNames, Br) || null,
+         vr = null;
+       if (null === Tr && void 0 !== er) {
+         const rr = er.getEntityType(hr);
+         "Player" !== rr && (Tr = (0, fr.j)(er, +hr) || null), vr = Wr.n.includes(rr) ? rr : null
+       }
+       return {
+         id: hr,
+         shownName: Tr,
+         lifeformType: null === Tr && null !== (Ir = null !== (pr = vr) && void 0 !== pr ? pr : tr) && void 0 !== Ir ? Ir : null,
+ ... (4 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1853-L1861` → after: `L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L589) · [Before (L1853-L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L1853-L1861)

```diff
-       return (0, MR.jsxs)(MR.Fragment, {
-         children: [(0, MR.jsx)(IJ, {
-           ...RR
-         }), (0, MR.jsx)(yG, {
-           ...RR
-         }), (0, MR.jsx)(iJ, {
-           ...RR
-         })]
-       })
+       null === Br ? (yr.length === Kr && yr.shift(), yr.push(rr)) : Br(rr())
```

#### 59. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1863-L1903` → after: `L591-L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L591-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L591-L623) · [Before (L1863-L1903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L1863-L1903)

```diff
-     const uG = "CubeWarfareUi",
-       ZG = "CubeWarfareFfa",
-       qG = function(RR, JR, GR, uR) {
-         let {
-           localPlayerId: ZR
-         } = uR;
-         const KR = new IR,
-           wR = "tdm" === GR ? "tdm" : "ffa";
-         let rR = null,
-           eR = null,
-           aR = null;
-         return {
-           onCreate: RR => {
-             document.body.classList.add(uG), document.body.classList.toggle(ZG, "ffa" === wR), eR = new VR.d(RR, ZR), aR = new yJ((RR => {
-               qR.n.JK(GJ, RR, !0)
-             }), (JR => {
- ... (25 more removed lines; see GitHub link above)
+ 
+     function Lr() {
+       vr || (vr = !0, (0, Nr.j)(jr.pc.PlayerKilled, (rr => {
+         const Sr = (0, mr.f)(rr);
+         (0, mr.b)(Sr) && Or((() => Ur(Sr)))
+       })), (0, Nr.j)(jr.pc.CustomKillfeed, (rr => {
+         const Sr = (0, mr.f)(rr);
+         (0, mr.b)(Sr) && (0, mr.b)(Sr.killer) && (0, mr.b)(Sr.victim) && Or((() => tr(Sr)))
+       })), (0, Nr.d)((() => {
+         yr = []
+       })))
+     }
+     const lr = Object.freeze([0, 0, 0]),
+       Xr = [0, 0, 0],
+       Pr = [0, 0, 0],
+       Hr = {
+ ... (17 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1908` → after: `L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L643) · [Before (L1908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L1908)

```diff
-   40720: (RR, JR, GR) => {
+   40568: (rr, Sr, Qr) => {
```

#### 61. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1910` → after: `L645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L645) · [Before (L1910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L1910)

```diff
-       e: () => uR
+       b: () => Zr
```

#### 62. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1941-L1980` → after: `L648-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L648-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L648-L649) · [Before (L1941-L1980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L1941-L1980)

```diff
-       constructor(RR, JR) {
-         let {
-           arcs: GR = !0,
-           edgeGlow: tR = !0,
-           lowHealthShade: uR = !0,
-           enabled: ZR = !0
-         } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-         this.api = RR, this.localPlayerId = JR, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
-           frac: 0,
-           at: -1 / 0
-         }, this.maxHealth = null, this.Et = 1, this.dead = !1, this.enabled = void 0, this.parts = void 0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = RR => {
-           var JR, GR;
-           this.clearHits(), this.root = RR, this.lowLayer = null !== (JR = null === RR || void 0 === RR ? void 0 : RR.querySelector(".DamageFeedbackLow")) && void 0 !== JR ? JR : null, this.arcLayer = null !== (GR = null === RR || void 0 === RR ? void 0 : RR.querySelector(".Damag … [truncated]
-         }, this.parts = {
-           arcs: GR,
-           edgeGlow: tR,
- ... (24 more removed lines; see GitHub link above)
+       constructor() {
+         this.members = new Map
```

#### 63. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1982-L1997` → after: `L651-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L651-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L651-L669) · [Before (L1982-L1997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L1982-L1997)

```diff
-       syncHealth() {
-         const RR = this.api.getClientOption(this.localPlayerId, "_health"),
-           JR = this.api.getClientOption(this.localPlayerId, "_shield"),
-           GR = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
-         if (Object.is(RR, this.readHealth) && Object.is(JR, this.readShield) && Object.is(GR, this.readMaxHealth)) return;
-         if (this.readHealth = RR, this.readShield = JR, this.readMaxHealth = GR, null === RR || void 0 === RR || !GR) return this.lastHealthPool = null, this.maxHealth = null, this.Et = 1, this.dead = !1, void this.drawLow();
-         const yR = RR + (null !== JR && void 0 !== JR ? JR : 0);
-         if (null !== this.lastHealthPool && yR < this.lastHealthPool) {
-           const RR = performance.now(),
-             JR = (this.lastHealthPool - yR) / GR;
-           this.lastDrop = RR - this.lastDrop.at < 300 ? {
-             frac: this.lastDrop.frac + JR,
-             at: this.lastDrop.at
-           } : {
-             frac: JR,
-             at: RR
+       apply(rr) {
+         const Sr = {
+           added: [],
+           removed: [],
+           settingChanges: []
+         };
+         for (const Zr of rr.vW) {
+           let rr = this.members.get(Zr.OW);
+           if (rr || (rr = {
+               name: null,
+               settings: {}
+             }, this.members.set(Zr.OW, rr), Sr.added.push(Zr.OW)), null !== Zr.LW && (rr.name = Zr.LW), null !== Zr.lW || Zr.XW.length > 0) {
+             const Qr = null === Zr.lW ? {} : JSON.parse(Zr.lW);
+             Object.assign(rr.settings, Qr);
+             for (const Sr of Zr.XW) delete rr.settings[Sr], Qr[Sr] = void 0;
+             Sr.settingChanges.push({
+ ... (3 more added lines; see GitHub link above)
```

#### 64. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2000-L2005` → after: `L672-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L672-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L672-L680) · [Before (L2000-L2005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L2000-L2005)

```diff
-         this.dead = RR <= 0, this.dead && this.clearHits(), this.lastHealthPool = yR, this.maxHealth = GR, this.Et = RR > 0 ? RR / GR : 1, this.drawLow()
-       }
-       onHurt(RR, JR) {
-         if (this.syncHealth(), this.dead || !this.enabled) return;
-         const GR = Math.min(1, this.takeDamageFrac(JR) / .3);
-         null !== RR && this.parts.arcs && this.showArc(RR, GR), this.parts.edgeGlow && this.flashEdge(null === RR ? null : RR - this.cameraHeading, .4 + .6 * GR)
+         for (const Zr of rr.PW) {
+           const rr = this.members.get(Zr);
+           var Qr;
+           if (rr) this.members.delete(Zr), Sr.removed.push({
+             playerId: Zr,
+             name: null !== (Qr = rr.name) && void 0 !== Qr ? Qr : void 0
+           })
+         }
+         return Sr
```

#### 65. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2007-L2016` → after: `L682-L683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L682-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L682-L683) · [Before (L2007-L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L2007-L2016)

```diff
-       takeDamageFrac(RR) {
-         if (void 0 !== RR && this.maxHealth) return RR / this.maxHealth;
-         if (performance.now() - this.lastDrop.at >= 300) return .12;
-         const {
-           frac: JR
-         } = this.lastDrop;
-         return this.lastDrop = {
-           frac: 0,
-           at: -1 / 0
-         }, JR
+       has(rr) {
+         return this.members.has(rr)
```

#### 66. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2018-L2023` → after: `L685-L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L685-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L685-L686) · [Before (L2018-L2023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L2018-L2023)

```diff
-       drawLow() {
-         if (!this.lowLayer || !this.parts.lowHealthShade) return;
-         const RR = fR((uR - this.Et) / .25),
-           JR = fR((ZR - this.Et) / .15000000000000002),
-           GR = this.Et < uR;
-         this.lowLayer.classList.toggle("Active", GR), this.lowLayer.classList.toggle("Critical", this.Et < ZR), this.lowLayer.style.opacity = String(GR ? .55 + .3 * RR + .15 * JR : 0)
+       ids() {
+         return [...this.members.keys()]
```

#### 67. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2025` → after: `L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L688) · [Before (L2025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L2025)

```diff
-       showArc(RR, JR) {
+       getName(rr) {
```

#### 68. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2027-L2071` → after: `L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L690) · [Before (L2027-L2071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L2027-L2071)

```diff
-         if (!this.arcLayer) return;
-         let tR = this.arcs.find((JR => iR(JR.direction, RR) < .6));
-         if (!tR) {
-           const JR = document.createElement("div");
-           JR.className = "DamageFeedbackArc", JR.appendChild(document.createElement("div")).className = "DamageFeedbackArcBand", this.arcLayer.appendChild(JR), tR = {
-             element: JR,
-             direction: RR,
-             drawnAngle: null,
-             fade: null,
-             pop: null
-           }, this.arcs.push(tR)
-         }
-         tR.direction = RR, this.drawArcAngle(tR);
-         const uR = tR.fade ? Number(getComputedStyle(tR.element).opacity) : 0;
-         null === (GR = tR.fade) || void 0 === GR || GR.cancel(), null === (yR = tR.pop) || void 0 === yR || yR.cancel(), tR.element.style.opacity = "1";
-         const ZR = tR.element.animate([{
- ... (29 more removed lines; see GitHub link above)
+         return null !== (Sr = null === (Qr = this.members.get(rr)) || void 0 === Qr ? void 0 : Qr.name) && void 0 !== Sr ? Sr : void 0
```

#### 69. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2073-L2075` → after: `L692-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L692-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L692-L694) · [Before (L2073-L2075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L2073-L2075)

```diff
-       drawArcAngle(RR) {
-         const JR = RR.direction - this.cameraHeading;
-         (null === RR.drawnAngle || Math.abs(JR - RR.drawnAngle) > .005) && (RR.drawnAngle = JR, RR.element.style.rotate = `${JR}rad`)
+       getSettings(rr) {
+         var Sr;
+         return null === (Sr = this.members.get(rr)) || void 0 === Sr ? void 0 : Sr.settings
```

#### 70. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2077-L2154` → after: `L696-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L696-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L696-L698) · [Before (L2077-L2154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L2077-L2154)

```diff
-       flashEdge(RR, JR) {
-         var GR, yR, tR;
-         if (!this.root) return;
-         let uR = this.flashes.find((JR => null === JR.angle || null === RR ? JR.angle === RR : iR(JR.angle, RR) < .5));
-         if (!uR) {
-           const JR = document.createElement("div");
-           JR.className = "DamageFeedbackFlash";
-           const GR = JR.appendChild(document.createElement("div"));
-           GR.className = "DamageFeedbackFlashGlow", this.root.insertBefore(JR, this.arcLayer), uR = {
-             element: JR,
-             glow: GR,
-             angle: RR,
-             level: 0,
-             animation: null
-           }, this.flashes.push(uR)
-         }
- ... (62 more removed lines; see GitHub link above)
+       getSetting(rr, Sr) {
+         var Qr;
+         return null === (Qr = this.members.get(rr)) || void 0 === Qr ? void 0 : Qr.settings[Sr]
```

#### 71. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2156-L2166` → after: `L700-L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L700-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/281.js#L700-L701) · [Before (L2156-L2166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/281.js#L2156-L2166)

```diff
-       clearHits() {
-         for (const yR of this.arcs) {
-           var RR, JR;
-           null === (RR = yR.fade) || void 0 === RR || RR.cancel(), yR.fade = null, null === (JR = yR.pop) || void 0 === JR || JR.cancel(), yR.element.remove()
-         }
-         this.arcs.length = 0;
-         for (const yR of this.flashes) {
-           var GR;
-           null === (GR = yR.animation) || void 0 === GR || GR.cancel(), yR.element.remove()
-         }
-         this.flashes.length = 0
+       clear() {
+         this.members.clear()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/282.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/282.js` (53 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8)

#### 1. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L4)

```diff
-   41072: (RR, JR, GR) => {
+   41063: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L6)

```diff
-       e: () => fR
+       b: () => Wr
```

#### 3. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L8-L9` → after: `L8-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L8-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L8-L67) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L8-L9)

```diff
-     var yR = GR(5506);
-     const tR = ["recordings", "videoHeaders", "videoChunks", "videoSequences", "videoProgress", "telemetry", "dom", "domTail"];
+     const Zr = 1e3;
+ 
+     function Wr(rr, Sr) {
+       const Qr = performance.now() + rr;
+       return 0 !== Sr && Math.abs(Qr - Sr) < Zr ? Sr : Qr
+     }
+   },
+   41228: (rr, Sr, Qr) => {
+     Qr.r(Sr), Qr.d(Sr, {
+       default: () => IQ
+     });
+     var Zr = Qr(72);
+     const Wr = "shootingLobby",
+       ar = {
+         Red: "#fc6464",
+         Blue: "#4f94f1"
+ ... (44 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L12-L18` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L70) · [Before (L12-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L12-L18)

```diff
-       return new Promise(((JR, GR) => {
-         RR.onsuccess = () => {
-           JR(RR.result)
-         }, RR.onerror = () => {
-           GR(RR.error)
-         }
-       }))
+       return Object.hasOwn(ar, rr)
```

#### 5. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L22-L31` → after: `L80-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L80-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L80-L85) · [Before (L22-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L22-L31)

```diff
-       return new Promise(((JR, GR) => {
-         RR.oncomplete = () => {
-           JR()
-         }, RR.onerror = () => {
-           GR(RR.error)
-         }, RR.onabort = () => {
-           var JR;
-           GR(null !== (JR = RR.error) && void 0 !== JR ? JR : new Error("IndexedDB transaction aborted"))
-         }
-       }))
+       return Pr[rr]
+     }
+ 
+     function qr() {
+       const rr = (0, Nr.j)("hiddenPlayerNames");
+       return (0, Zr.useCallback)((Sr => "" === Sr ? "" : (0, yr.c)(Sr, rr)), [rr])
```

#### 6. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L35` → after: `L89-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L89-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L89-L96) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L35)

```diff
-       return IDBKeyRange.bound([RR], [RR, []])
+       var Sr;
+       let {
+         playerId: Qr
+       } = rr;
+       const Zr = null === (Sr = (0, Nr.j)("players").byId[Qr]) || void 0 === Sr ? void 0 : Sr.cosmetics;
+       return (0, Br.jsx)(Kr.b, {
+         cosmetics: null !== Zr && void 0 !== Zr ? Zr : {}
+       })
```

#### 7. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L38-L39` → after: `L99-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L99-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L99-L125) · [Before (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L38-L39)

```diff
-     function iR(RR, JR) {
-       return IDBKeyRange.bound([RR, JR], [RR, JR, []])
+     function gr(rr) {
+       let {
+         icon: Sr,
+         value: Qr,
+         label: Zr,
+         gold: Wr = !1
+       } = rr;
+       return (0, Br.jsxs)("div", {
+         className: "ShootingStat",
+         children: [(0, Br.jsxs)("b", {
+           className: mr()("FullyFancyText", {
+             Gold: Wr
+           }),
+           children: [Sr && (0, Br.jsx)(Ur.c, {
+             name: Sr
+           }), Qr]
+ ... (11 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L43-L83` → after: `L129-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L129-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L129-L162) · [Before (L43-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L43-L83)

```diff
-         this.db = null, this.opening = null, this.failed = !1, this.tailRecordings = new Set
-       }
-       get working() {
-         return !this.failed
-       }
-       static get supported() {
-         try {
-           return "undefined" !== typeof indexedDB
-         } catch {
-           return !1
-         }
-       }
-       putRecording(RR) {
-         this.write(["recordings"], (JR => {
-           JR.objectStore("recordings").put(RR)
-         }))
- ... (25 more removed lines; see GitHub link above)
+         this.slices = {
+           hud: {
+             wire: null,
+             endsAt: 0,
+             spawnProtectionEndsAt: 0
+           },
+           lobby: {
+             wire: ["none"],
+             startsAt: 0
+           },
+           roundEnd: {
+             wire: ["none"],
+             lobbyAt: 0
+           },
+           leaderboard: [],
+           killfeed: [],
+ ... (18 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L85-L190` → after: `L164-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L164-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L164-L169) · [Before (L85-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L85-L190)

```diff
-         }))
-       }
-       removeVideoChunks(RR, JR) {
-         this.write(["videoChunks"], (GR => {
-           GR.objectStore("videoChunks").delete(iR(RR, JR))
-         }))
-       }
-       removeVideo(RR, JR) {
-         this.write(["videoHeaders", "videoChunks", "videoSequences", "videoProgress"], (GR => {
-           GR.objectStore("videoHeaders").delete([RR, JR]), GR.objectStore("videoChunks").delete(iR(RR, JR)), GR.objectStore("videoSequences").delete([RR, JR]), GR.objectStore("videoProgress").delete([RR, JR])
-         }))
-       }
-       putTelemetry(RR) {
-         this.write(["telemetry"], (JR => {
-           JR.objectStore("telemetry").put(RR)
-         }))
- ... (90 more removed lines; see GitHub link above)
+           case "shootingRoundEnd": {
+             const rr = Sr;
+             return this.set("roundEnd", {
+               wire: rr,
+               lobbyAt: "roundEnd" === rr[0] ? performance.now() + rr[17] : 0
+             }), !0
```

#### 10. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L192-L198` → after: `L171-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L171-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L171-L185) · [Before (L192-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L192-L198)

```diff
-         };
-         null === this.db ? this.open().then(yR, (RR => {
-           this.fail(RR)
-         })) : yR(this.db)
-       }
-       fail(RR) {
-         this.failed || (this.failed = !0, console.warn("Session replay can't keep its upload journal; what a closing tab leaves unsent will be lost.", RR), this.dropTails())
+           case "shootingLeaderboard":
+             return this.set("leaderboard", Sr), !0;
+           case "shootingKillfeed": {
+             const rr = {
+               seq: ++this.seq,
+               at: performance.now(),
+               wire: Sr
+             };
+             return this.set("killfeed", [...this.slices.killfeed.slice(-11), rr]), !0
+           }
+           case "shootingEvent":
+             return this.receiveEvent(Sr), !0;
+           default:
+             return !1
+         }
```

#### 11. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L200-L203` → after: `L187-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L187-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L187-L200) · [Before (L200-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L200-L203)

```diff
-       dropTails() {
-         if (null === this.db || 0 === this.tailRecordings.size) return;
-         const RR = RR => {
-           console.warn("Session replay couldn't drop its page recording tails from its upload journal.", RR)
+       receiveHud(rr) {
+         var Sr;
+         const Qr = this.slices.hud,
+           Zr = (null === (Sr = Qr.wire) || void 0 === Sr ? void 0 : Sr[1]) === rr[1];
+         Qr.wire && !Zr && (this.set("kill", null), this.set("tier", null), this.set("death", null)), this.set("hud", {
+           wire: rr,
+           endsAt: (0, Mr.b)(rr[4], Zr ? Qr.endsAt : 0),
+           spawnProtectionEndsAt: 0 === rr[13] ? 0 : (0, Mr.b)(rr[13], Qr.spawnProtectionEndsAt)
+         })
+       }
+       receiveEvent(rr) {
+         const Sr = {
+           seq: ++this.seq,
+           at: performance.now()
```

#### 12. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L205-L210` → after: `L202-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L202-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L202-L219) · [Before (L205-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L205-L210)

```diff
-         try {
-           const JR = this.db.transaction(["domTail"], "readwrite");
-           for (const RR of this.tailRecordings) JR.objectStore("domTail").delete(qR(RR));
-           ZR(JR).catch(RR)
-         } catch (JR) {
-           RR(JR)
+         switch (rr[0]) {
+           case "kill":
+             this.set("kill", {
+               ...Sr,
+               wire: rr
+             });
+             break;
+           case "tier":
+             this.set("tier", {
+               ...Sr,
+               wire: rr
+             });
+             break;
+           case "death":
+             this.set("death", {
+               ...Sr,
+ ... (2 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L213-L247` → after: `L222-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L222-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L222-L223) · [Before (L213-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L213-L247)

```diff
-       open() {
-         return this.opening ??= new Promise(((RR, JR) => {
-           const GR = indexedDB.open(yR.i, 4);
-           GR.onupgradeneeded = RR => {
-             const JR = GR.result;
-             RR.oldVersion < 1 && (JR.createObjectStore("recordings", {
-               keyPath: "recordingId"
-             }), JR.createObjectStore("videoHeaders", {
-               keyPath: ["recordingId", "segmentId"]
-             }), JR.createObjectStore("videoChunks", {
-               keyPath: ["recordingId", "segmentId", "index"]
-             }), JR.createObjectStore("videoSequences", {
-               keyPath: ["recordingId", "segmentId"]
-             }), JR.createObjectStore("telemetry", {
-               keyPath: ["recordingId", "sequence"]
-             })), RR.oldVersion < 2 && JR.createObjectStore("videoProgress", {
- ... (19 more removed lines; see GitHub link above)
+       set(rr, Sr) {
+         this.slices[rr] = Sr, Ir.i.Jp(Gr(rr), Sr, !0)
```

#### 14. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L261-L262` → after: `L228-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L228-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L228-L303) · [Before (L261-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L261-L262)

```diff
-       return new Blob([tR.encode(`${JSON.stringify(RR)}\n`), JR], {
-         type: "text/plain"
+       return (0, Cr.b)(Gr(Sr), (() => rr.get(Sr)))
+     }
+     const Vr = ["Red", "Blue"],
+       ir = {
+         streak: `${Tr}scoreIs_streak`,
+         diamonds: `${Tr}scoreIs_diamonds`,
+         kills: `${Tr}scoreIs_kills`
+       };
+ 
+     function wr(rr) {
+       var Sr;
+       let {
+         store: Qr,
+         variation: Zr
+       } = rr;
+       const {
+ ... (60 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L267-L268` → after: `L402-L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L402-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L402-L442) · [Before (L267-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L267-L268)

```diff
-         let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
-         this.token = RR, this.relay = JR, this.nowMs = GR, this.refused = !1, this.skipUntilMs = 0
+         let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new SS.c;
+         this.Jp = rr, this.sendCommand = Sr, this.pacer = Qr, this.view = {
+           hidden: !1,
+           pending: null
+         }, this.unsent = !1, this.cardsKey = "", this.pendingTimer = null, this.unsubscribePacer = void 0, this.vote = rr => {
+           this.unsent = !0, this.set({
+             ...this.view,
+             pending: rr
+           }), this.flush()
+         }, this.setHidden = rr => {
+           this.set({
+             ...this.view,
+             hidden: rr
+           })
+         }, this.flush = () => {
+           const rr = this.view.pending;
+ ... (25 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L270-L294` → after: `L444-L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L444-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L444-L445) · [Before (L270-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L270-L294)

```diff
-       async send(RR, JR, GR, tR, ZR) {
-         if (this.goesDirect(JR, GR)) return null;
-         const qR = uR({
-             token: this.token,
-             contentType: GR,
-             target: RR
-           }, JR),
-           iR = {
-             method: "POST",
-             headers: {
-               "Content-Type": "text/plain"
-             },
-             body: qR,
-             signal: tR
-           };
-         let fR;
- ... (9 more removed lines; see GitHub link above)
+       dispose() {
+         this.unsubscribePacer(), this.pacer.dispose(), this.clearPendingTimer()
```

#### 17. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L296-L303` → after: `L447-L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L447-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L447-L448) · [Before (L296-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L296-L303)

```diff
-       beacon(RR, JR, GR, yR) {
-         if (this.goesDirect(JR, GR)) return null;
-         const tR = uR({
-           token: this.token,
-           contentType: GR,
-           target: RR
-         }, JR);
-         return yR.sendUploadBeacon(this.relay.url, tR, tR.size)
+       clearPendingTimer() {
+         null !== this.pendingTimer && (clearTimeout(this.pendingTimer), this.pendingTimer = null)
```

#### 18. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L305-L306` → after: `L450-L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L450-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L450-L451) · [Before (L305-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L305-L306)

```diff
-       goesDirect(RR, JR) {
-         return this.refused || this.nowMs() < this.skipUntilMs || RR.byteLength > this.relay.maxBytes || "video/mp4" === JR
+       set(rr) {
+         this.view = rr, this.Jp(rr)
```

#### 19. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L311` → after: `L457-L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L457-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L457-L531) · [Before (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L311)

```diff
-       return void 0 === (null === RR || void 0 === RR ? void 0 : RR.relay) ? null : new ZR(RR.token, RR.relay)
+       var Sr, Qr, Wr, ar, Ir;
+       let {
+         maps: fr,
+         votes: Er
+       } = rr;
+       const {
+         t: pr
+       } = (0, nr.E)(), xr = (0, ur.g)(QS, Er.getView()), {
+         isTouchScreen: Nr,
+         openInGameMenuName: tr,
+         openEverythingMenuName: hr
+       } = (0, br.n)(["isTouchScreen", "openInGameMenuName", "openEverythingMenuName"]), zr = null !== tr || null !== hr, Yr = (0, sr.b)();
+       (0, dr.b)(!0, !Nr && !xr.hidden && !zr && !Yr, "shootingVoteStrip", !0), (0, Zr.useEffect)((() => {
+         if (!xr.hidden && !Nr) return document.body.classList.add(WS), () => {
+           document.body.classList.remove(WS)
+         }
+ ... (59 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L313-L320` → after: `L533-L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L533-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L533-L607) · [Before (L313-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L313-L320)

```diff
-     class iR {
-       constructor() {
-         this.relays = new Map
-       }
-       for (RR) {
-         let JR = this.relays.get(RR.recordingId);
-         return void 0 === JR && (JR = qR(RR.partJoiner), this.relays.set(RR.recordingId, JR)), JR
-       }
+ 
+     function jS(rr) {
+       let {
+         map: Sr,
+         chance: Qr,
+         mine: Wr,
+         onVote: ar,
+         showHeads: jr
+       } = rr;
+       const {
+         t: Ir
+       } = (0, nr.E)(), [fr, Er, pr, xr, Nr, tr, , hr, zr] = Sr, [Yr, er] = (0, Zr.useState)(!1);
+       return (0, Br.jsxs)("button", {
+         type: "button",
+         className: mr()("ShootingMapCard", {
+           Mine: Wr
+ ... (59 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L335` → after: `L611-L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L611-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L611-L623) · [Before (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L335)

```diff
-       return 6e4 + Math.ceil(RR / 16384 * 1e3)
+       let {
+         voters: Sr
+       } = rr;
+       const Qr = (0, Nr.j)("players");
+       return (0, Br.jsx)("span", {
+         className: "ShootingMapCardHeads",
+         children: Sr.slice(0, 8).map((rr => {
+           var Sr;
+           return (null === (Sr = Qr.byId[rr]) || void 0 === Sr ? void 0 : Sr.cosmetics) && (0, Br.jsx)(Rr, {
+             playerId: rr
+           }, rr)
+         }))
+       })
```

#### 22. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L338-L347` → after: `L626-L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L626-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L626-L648) · [Before (L338-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L338-L347)

```diff
-     function iR(RR, JR, GR) {
-       const tR = new FormData;
-       let uR = JR.byteLength + ZR;
-       for (const [ZR, qR] of Object.entries(RR.fields)) tR.append(ZR, qR), uR += (0, yR.j)(ZR) + (0, yR.j)(qR);
-       return tR.append("file", new Blob([JR], {
-         type: GR
-       })), {
-         form: tR,
-         byteLength: uR
-       }
+     function fS(rr) {
+       let {
+         store: Sr,
+         votes: Qr,
+         variation: Zr
+       } = rr;
+       const Wr = Ar(Sr, "lobby"),
+         ar = (0, Nr.j)("localPlayerAlive"),
+         jr = (0, Nr.f)("connectedGame", (rr => rr.replay));
+       if ("lobby" !== Wr.wire[0] || jr) return null;
+       const Ir = Wr.wire;
+       return (0, Br.jsxs)(Br.Fragment, {
+         children: [(0, Br.jsx)(ES, {
+           wire: Ir,
+           startsAt: Wr.startsAt,
+           variation: Zr
+ ... (7 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L350-L351` → after: `L705-L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L705-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L705-L729) · [Before (L350-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L350-L351)

```diff
-     function fR(RR, JR, GR) {
-       return new uR.d(`Segment ${RR} failed with ${JR}${null===GR?"":` (${GR})`}`, JR, GR)
+     function pS(rr) {
+       let {
+         waiting: Sr,
+         startsAt: Qr
+       } = rr;
+       const {
+         t: Zr
+       } = (0, nr.E)(), Wr = (0, Yr.h)(Sr ? 0 : Qr);
+       return (0, Br.jsxs)("div", {
+         className: "ShootingLobbyCountdown",
+         children: [Sr && (0, Br.jsx)("span", {
+           className: "ShootingLobbyCountdownLabel",
+           children: Zr("shootingLobby:waiting")
+         }), !Sr && (0, Br.jsxs)(Br.Fragment, {
+           children: [(0, Br.jsx)("span", {
+             className: "ShootingLobbyCountdownLabel",
+ ... (9 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L355` → after: `L733-L755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L733-L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L733-L755) · [Before (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L355)

```diff
-       if (RR < 200 || RR > 299) throw fR("POST", RR, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
+       let {
+         team: Sr,
+         count: Qr,
+         cap: Zr,
+         mine: Wr
+       } = rr;
+       const {
+         t: ar
+       } = (0, nr.E)();
+       return (0, Br.jsxs)("span", {
+         className: mr()("ShootingLobbyTeam", {
+           Mine: Wr,
+           Full: Qr >= Zr
+         }),
+         style: Or(Sr, "tdm"),
+         children: [ar(Lr[Sr]), (0, Br.jsx)("span", {
+ ... (7 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L358-L359` → after: `L875-L892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L875-L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L875-L892) · [Before (L358-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L358-L359)

```diff
-     function KR(RR, JR) {
-       if ((RR < 200 || RR > 299) && (!JR || 412 !== RR)) throw fR("PUT", RR, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
+     function zS(rr) {
+       let {
+         endsAt: Sr,
+         label: Qr
+       } = rr;
+       const Zr = (0, Yr.h)(Sr);
+       return (0, Br.jsxs)("div", {
+         className: "CubeWarfareClock",
+         children: [(0, Br.jsx)("div", {
+           className: mr()("CubeWarfareClockTime", {
+             Urgent: Zr < 60
+           }),
+           children: (0, Yr.c)(Zr)
+         }), (0, Br.jsx)("div", {
+           className: "CubeWarfareClockLabel",
+           children: Qr
+ ... (2 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L361-L370` → after: `L894-L948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L894-L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L894-L948) · [Before (L361-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L361-L370)

```diff
-     async function wR(RR) {
-       var JR, GR;
-       if (RR.ok) return null;
-       let yR;
-       try {
-         yR = await RR.text()
-       } catch (tR) {
-         return console.warn("Session replay couldn't read storage's error answer", tR), null
-       }
-       return null !== (JR = null === (GR = /<Code>([^<]+)<\/Code>/.exec(yR)) || void 0 === GR ? void 0 : GR[1]) && void 0 !== JR ? JR : null
+ 
+     function YS(rr) {
+       const {
+         t: Sr
+       } = (0, nr.E)(), Qr = Sr => rr.leaderboard.filter((rr => rr[2] === Sr)), Zr = {
+         team: "Red",
+         name: Sr(Lr.Red),
+         score: rr.redScore,
+         members: Qr("Red")
+       }, Wr = {
+         team: "Blue",
+         name: Sr(Lr.Blue),
+         score: rr.blueScore,
+         members: Qr("Blue")
+       }, [ar, jr] = "Blue" === rr.myTeam ? [Wr, Zr] : [Zr, Wr], Ir = (Qr, Zr) => (0, Br.jsxs)("div", {
+         className: mr()("CubeWarfareSide", Zr, `Team-${Qr.team}`, {
+ ... (39 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L372-L412` → after: `L950-L960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L950-L960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L950-L960) · [Before (L372-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L372-L412)

```diff
-     class rR {
-       constructor(RR) {
-         var JR;
-         let GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-         this.segmentUploadUrl = RR, this.deadline = void 0, this.relay = void 0, this.deadline = GR.deadline, this.relay = null !== (JR = GR.relay) && void 0 !== JR ? JR : null
-       }
-       requestPutUrl(RR) {
-         return this.presign(RR)
-       }
-       requestPostTargets(RR) {
-         return this.presign(RR)
-       }
-       async presign(RR) {
-         const JR = await fetch(this.segmentUploadUrl, {
-           method: "POST",
-           headers: {
- ... (25 more removed lines; see GitHub link above)
+ 
+     function nS(rr) {
+       var Sr;
+       const {
+         t: Qr
+       } = (0, nr.E)(), Zr = qr(), Wr = null !== (Sr = rr.second) && void 0 !== Sr ? Sr : rr.spectating || rr.playerCount > 1 ? rr.leader : null;
+       return (0, Br.jsxs)(Br.Fragment, {
+         children: [!rr.spectating && (0, Br.jsxs)("div", {
+           className: mr()("CubeWarfareSide", "Left", "Mine", "Ffa"),
+           style: {
+             "--team": (0, er.hb)(rr.myTeam)
```

#### 28. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L414-L440` → after: `L962-L1005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L962-L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L962-L1005) · [Before (L414-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L414-L440)

```diff
-           iR = JR.byteLength <= yR.e ? await yR.i.fetch(RR, ZR, JR.byteLength, GR) : await fetch(RR, ZR);
-         KR(iR.status, tR, await wR(iR))
-       }
-       async post(RR, JR, GR) {
-         const tR = await this.sendThroughRelay({
-           method: "POST",
-           url: RR.url,
-           fields: RR.fields
-         }, JR, GR);
-         if (null !== tR) return void VR(tR);
-         const {
-           form: uR,
-           byteLength: ZR
-         } = iR(RR, JR, GR), fR = {
-           method: "POST",
-           body: uR,
- ... (11 more removed lines; see GitHub link above)
+           children: [(0, Br.jsx)("span", {
+             className: "CubeWarfareYouTag",
+             children: Qr("shootingOverlays:you")
+           }), (0, Br.jsxs)("div", {
+             className: "CubeWarfareSideText",
+             children: [(0, Br.jsx)("div", {
+               className: "CubeWarfareSideName",
+               children: (0, Br.jsx)("span", {
+                 className: "CubeWarfareSideLabel",
+                 children: Qr("cubeWarfareHud:rank", {
+                   rank: rr.myRank
+                 })
+               })
+             }), (0, Br.jsx)("div", {
+               className: "CubeWarfareSideScore SmallTextBold",
+               children: rr.myScore
+ ... (28 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L442-L465` → after: `L1007-L1022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L1007-L1022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L1007-L1022) · [Before (L442-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L442-L465)

```diff
-     class eR {
-       async requestPutUrl(RR) {
-         return {
-           uploadUrl: "",
-           ifNoneMatch: !1
-         }
-       }
-       async requestPostTargets(RR) {
-         return {
-           targets: Array.from({
-             length: RR.parts.count
-           }, (() => ({
-             url: "",
-             fields: {}
-           }))),
-           expiresInSecs: 900
- ... (8 more removed lines; see GitHub link above)
+ 
+     function eS(rr) {
+       let {
+         score: Sr,
+         target: Qr
+       } = rr;
+       return (0, Br.jsx)("div", {
+         className: mr()("CubeWarfareStrip", {
+           Progress: Qr > 0
+         }),
+         children: Qr > 0 && (0, Br.jsx)("i", {
+           style: {
+             transform: `scaleX(${Math.min(1,Sr/Qr)})`
+           }
+         })
+       })
```

#### 30. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L467-L473` → after: `L1024-L1043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R1024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L1024-L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L1024-L1043) · [Before (L467-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L467-L473)

```diff
-   },
-   41028: (RR, JR, GR) => {
-     GR.d(JR, {
-       d: () => ZR
-     });
-     var yR = GR(37156),
-       tR = GR.n(yR);
+     const KS = (0, Zr.memo)((function(rr) {
+       let {
+         wire: Sr
+       } = rr;
+       const {
+         isTouchScreen: Qr
+       } = (0, br.n)(["isTouchScreen"]);
+       return Qr ? (0, Br.jsx)("div", {
+         className: "CubeWarfarePerkColumnTouch",
+         children: (0, Br.jsx)(yS, {
+           wire: Sr,
+           touch: !0
+         })
+       }) : (0, Br.jsx)(Fr.d, {
+         placement: "bottomLeft",
+         children: (0, Br.jsx)(yS, {
+ ... (4 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L475-L476` → after: `L1045-L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R1045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L1045-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L1045-L1103) · [Before (L475-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L475-L476)

```diff
-     function uR() {
-       return tR()('(()=>{var RR={8:(RR,JR,GR)=>{function yR(){return"object"===typeof process&&"object"===typeof process.versions&&"undefined"!==typeof process.versions.node}function tR(RR){return RR instanceof Uint8Array&&(!yR()||!Buffer.isBuffer(RR))}function uR(RR){return RR i … [truncated]
+     function yS(rr) {
+       let {
+         wire: Sr,
+         touch: Qr = !1
+       } = rr;
+       const {
+         t: Zr
+       } = (0, nr.E)(), Wr = Sr[11], ar = Sr[12], jr = ar.findIndex((rr => {
+         let [, Sr] = rr;
+         return Wr < Sr
+       }));
+       return (0, Br.jsxs)("div", {
+         className: "CubeWarfarePerkColumn",
+         children: [(0, Br.jsxs)("div", {
+           className: "CubeWarfarePerkPoints SmallTextBold",
+           children: [(0, Br.jsx)(Ur.c, {
+ ... (43 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L478-L511` → after: `L1105-L1113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L1105-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L1105-L1113) · [Before (L478-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L478-L511)

```diff
-     class ZR {
-       constructor() {
-         let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
-         this.quietMs = RR, this.worker = null, this.failure = null, this.nextId = 0, this.waiting = new Map, this.watchdog = null, this.rearmed = !1
-       }
-       pack(RR) {
-         return new Promise(((JR, GR) => {
-           var yR;
-           const tR = null !== (yR = this.worker) && void 0 !== yR ? yR : this.start();
-           if (null === tR) return void GR(this.failure);
-           const uR = this.nextId++;
-           this.waiting.set(uR, {
-             resolve: JR,
-             reject: GR
-           });
-           const ZR = {
- ... (18 more removed lines; see GitHub link above)
+ 
+     function BS(rr) {
+       const [, Sr] = (0, Zr.useReducer)((rr => rr + 1), 0);
+       (0, Zr.useEffect)((() => {
+         const Qr = rr - performance.now();
+         if (0 === rr || Qr <= 0) return;
+         const Zr = window.setTimeout(Sr, Qr);
+         return () => {
+           window.clearTimeout(Zr)
```

#### 33. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L513-L550` → after: `L1115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R1115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L1115) · [Before (L513-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L513-L550)

```diff
-         return this.worker.onmessage = RR => {
-           const {
-             id: JR,
-             bytes: GR,
-             inflatedBytes: yR
-           } = RR.data, tR = this.waiting.get(JR);
-           this.waiting.delete(JR), this.stopWatchdog(), this.waiting.size > 0 && (this.watchdog = this.startWatchdog()), null === tR || void 0 === tR || tR.resolve({
-             bytes: GR,
-             inflatedBytes: yR
-           })
-         }, this.worker.onerror = RR => {
-           this.broke(RR.message || "it didn't load")
-         }, this.worker.onmessageerror = () => {
-           this.broke("a reply couldn't be read")
-         }, this.worker
-       }
- ... (22 more removed lines; see GitHub link above)
+       }), [rr])
```

#### 34. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L552-L557` → after: `L1117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R1117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L1117) · [Before (L552-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L552-L557)

```diff
-   },
-   41001: (RR, JR, GR) => {
-     GR.d(JR, {
-       d: () => tR
-     });
-     var yR = GR(41009);
+     const TS = ["", "", "cubeWarfareHud:doubleKill", "cubeWarfareHud:tripleKill", "cubeWarfareHud:quadKill", "cubeWarfareHud:rampage"];
```

#### 35. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L560-L564` → after: `L1120-L1130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R1120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L1120-L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L1120-L1130) · [Before (L560-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L560-L564)

```diff
-       const JR = (new TextEncoder).encode(RR);
-       return {
-         bytes: (0, yR.e)(JR),
-         inflatedBytes: JR.byteLength
-       }
+       let {
+         store: Sr
+       } = rr;
+       const Qr = XS(Ar(Sr, "kill"), 2500),
+         Zr = qr();
+       return Qr ? (0, Br.jsx)(LS, {
+         victimName: Zr(Qr.wire[2]),
+         headshot: Qr.wire[4],
+         killsThisLife: Qr.wire[5],
+         gold: Qr.wire[6]
+       }, Qr.seq) : null
```

#### 36. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L574-L577` → after: `L1133-L1216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R1133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L1133-L1216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L1133-L1216) · [Before (L574-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L574-L577)

```diff
-     function uR() {
-       const RR = performance.now(),
-         JR = Date.now();
-       return Math.abs(JR - (RR + tR)) > yR && (tR = JR - RR), RR + tR
+     function OS(rr) {
+       let {
+         store: Sr
+       } = rr;
+       const Qr = XS(Ar(Sr, "tier"), 3500);
+       return Qr ? (0, Br.jsx)(lS, {
+         tier: Qr.wire[1],
+         perk: Qr.wire[2],
+         icon: Qr.wire[3]
+       }, Qr.seq) : null
+     }
+ 
+     function LS(rr) {
+       let {
+         victimName: Sr,
+         headshot: Qr,
+ ... (68 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L579-L585` → after: `L1218-L1222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R1218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L1218-L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L1218-L1222) · [Before (L579-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L579-L585)

```diff
-   },
-   41031: (RR, JR, GR) => {
-     GR.d(JR, {
-       c: () => uR
-     });
-     var yR = GR(41034),
-       tR = GR(1282);
+ 
+     function XS(rr, Sr) {
+       return BS(rr ? rr.at + Sr : 0), rr && performance.now() - rr.at < Sr ? rr : null
+     }
+     var PS = Qr(3404);
```

#### 38. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L588-L591` → after: `L1225-L1242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R1225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L1225-L1242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L1225-L1242) · [Before (L588-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L588-L591)

```diff
-       return {
-         segmentUploadUrl: `${tR.clientSideServerUrls.indexUrl}${yR.k}`,
-         manifestUrl: `${tR.clientSideServerUrls.indexUrl}${yR.f}`
-       }
+       var rr, Sr;
+       const Qr = null === (rr = (0, PS.l)("currencyAmounts")) || void 0 === rr || null === (Sr = rr.gold) || void 0 === Sr ? void 0 : Sr.amount,
+         [Wr, ar] = (0, Zr.useState)(0),
+         jr = (0, Zr.useRef)(Qr);
+       return (0, Zr.useEffect)((() => {
+         void 0 !== Qr && void 0 !== jr.current && Qr > jr.current && ar((rr => rr + 1)), jr.current = Qr
+       }), [Qr]), void 0 === Qr ? null : (0, Br.jsx)(Fr.d, {
+         placement: "statBars",
+         children: (0, Br.jsxs)("div", {
+           className: mr()("CubeWarfareWallet SmallTextBold", {
+             Bump: Wr > 0
+           }),
+           children: [(0, Br.jsx)(Ur.c, {
+             name: "coins",
+             className: "CubeWarfareCoin"
+           }), Qr]
+ ... (2 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L603` → after: `L1246-L1251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R1246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L1246-L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L1246-L1251) · [Before (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L603)

```diff
-       return (new TextEncoder).encode(RR).byteLength
+       let {
+         endsAt: Sr
+       } = rr;
+       return 0 === Sr ? null : (0, Br.jsx)(gS, {
+         endsAt: Sr
+       }, Sr)
```

#### 40. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L605-L619` → after: `L1253-L1305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R1253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L1253-L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L1253-L1305) · [Before (L605-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L605-L619)

```diff
-     const uR = new class {
-       constructor() {
-         this.inFlightBytes = 0, this.inFlightLabels = new Map
-       }
-       async fetch(RR, JR, GR, yR) {
-         if (this.inFlightBytes + GR > 49152) return await fetch(RR, JR);
-         this.inFlightBytes += GR, this.countLabel(yR, 1);
-         const tR = () => {
-           this.inFlightBytes -= GR, this.countLabel(yR, -1)
-         };
-         let uR;
-         try {
-           uR = await fetch(RR, {
-             ...JR,
-             keepalive: !0
+ 
+     function RS(rr) {
+       let {
+         endsAt: Sr
+       } = rr;
+       return BS(Sr), Sr <= performance.now() ? null : (0, Br.jsx)("div", {
+         className: "CubeWarfareProtectionEdge"
+       })
+     }
+ 
+     function gS(rr) {
+       let {
+         endsAt: Sr
+       } = rr;
+       const {
+         t: Qr
+ ... (37 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L621-L649` → after: `L1307-L1308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R1307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L1307-L1308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L1307-L1308) · [Before (L621-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L621-L649)

```diff
-         } catch (qR) {
-           var ZR;
-           if (tR(), null !== (ZR = JR.signal) && void 0 !== ZR && ZR.aborted) throw qR;
-           return console.info("Session replay keepalive request failed; retrying without keepalive.", qR), await fetch(RR, JR)
-         }
-         return tR(), uR
-       }
-       isInFlight(RR) {
-         var JR;
-         return (null !== (JR = this.inFlightLabels.get(RR)) && void 0 !== JR ? JR : 0) > 0
-       }
-       sendBeacon(RR, JR) {
-         const GR = tR(JR);
-         return !(this.inFlightBytes + GR > 57344) && this.beaconSent(navigator.sendBeacon(RR, new Blob([JR], {
-           type: "text/plain"
-         })), GR)
- ... (13 more removed lines; see GitHub link above)
+         })
+       })
```

#### 42. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L651-L677` → after: `L1310-L1391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R1310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L1310-L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L1310-L1391) · [Before (L651-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L651-L677)

```diff
-   },
-   41051: (RR, JR, GR) => {
-     GR.d(JR, {
-       b: () => ZR
-     });
-     var yR = GR(41038),
-       tR = GR(1295);
-     const uR = 6e4;
-     async function ZR(RR, JR) {
-       const GR = JSON.stringify(JR);
-       try {
-         const JR = await yR.i.fetch(RR, {
-           method: "POST",
-           headers: {
-             "Content-Type": "application/json"
-           },
- ... (11 more removed lines; see GitHub link above)
+     const MS = rr => {
+       var Sr;
+       const Qr = null === (Sr = rr.attributes.customAttributes) || void 0 === Sr ? void 0 : Sr.shotsLeft;
+       return "number" === typeof Qr && rr.clipSize ? (0, Br.jsx)(GS, {
+         item: rr,
+         shotsLeft: Qr,
+         clipSize: rr.clipSize
+       }) : null
+     };
+ 
+     function GS(rr) {
+       let {
+         item: Sr,
+         shotsLeft: Qr,
+         clipSize: Wr
+       } = rr;
+ ... (66 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L690-L691` → after: `L1394-L1450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R1394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L1394-L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L1394-L1450) · [Before (L690-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L690-L691)

```diff
-     function qR(RR, JR) {
-       let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tR;
+     function kS(rr) {
+       let {
+         store: Sr
+       } = rr;
+       const Qr = Ar(Sr, "hud"),
+         Wr = Ar(Sr, "leaderboard"),
+         ar = (0, Nr.f)("connectedGame", (rr => rr.replay));
+       ! function(rr) {
+         (0, Zr.useEffect)((() => {
+           const Sr = (0, mS.t)({
+               headshot: (Sr, Qr) => {
+                 var Zr;
+                 const Wr = performance.now(),
+                   ar = rr.get("killfeed").findLast((rr => {
+                     let {
+                       at: Zr,
+ ... (41 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L693-L707` → after: `L1452-L1503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R1452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L1452-L1503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L1452-L1503) · [Before (L693-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L693-L707)

```diff
-         domSegments: qR,
-         ...iR
-       } = RR.manifest, fR = () => ({
-         ...RR,
-         manifest: {
-           ...iR,
-           videoSegments: [],
-           telemetrySegments: [],
-           games: []
-         },
-         creatorGrants: []
-       }), VR = (0, yR.j)(JSON.stringify(fR())), KR = [];
-       let wR = {
-           request: fR(),
-           items: []
+         isTouchScreen: Zr
+       } = (0, br.n)(["isTouchScreen"]), Wr = (0, ur.g)("aimingOverlay", "none"), ar = (0, Br.jsx)(qS, {
+         endsAt: Qr
+       }), jr = (0, Br.jsx)(OS, {
+         store: Sr
+       }), Ir = (0, Br.jsx)(vS, {
+         store: Sr
+       });
+       if (!Zr) return (0, Br.jsxs)(CS, {
+         place: "OverHotbar",
+         children: [ar, jr, Ir]
+       });
+       const fr = "sniper" === Wr;
+       return (0, Br.jsxs)(Br.Fragment, {
+         children: [(0, Br.jsxs)(CS, {
+           place: "AboveCrosshair",
+ ... (36 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L709-L712` → after: `L1505-L1683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R1505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L1505-L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L1505-L1683) · [Before (L709-L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L709-L712)

```diff
-         rR = VR;
-       const eR = (RR, JR) => {
-           var GR;
-           return "domSegments" === JR ? null !== (GR = RR.manifest.domSegments) && void 0 !== GR ? GR : [] : "creatorGrants" === JR ? RR.creatorGrants : RR.manifest[JR]
+         children: [(0, Br.jsxs)("div", {
+           className: "ShootingDeathKiller",
+           children: [Xr && (0, Br.jsx)("div", {
+             className: "ShootingDeathHead",
+             children: (0, Br.jsx)(Rr, {
+               playerId: Yr
+             })
+           }), !Xr && (0, Br.jsx)("div", {
+             className: "ShootingDeathHead ShootingDeathSkull",
+             children: (0, Br.jsx)(Ur.c, {
+               name: "skull"
+             })
+           }), (0, Br.jsxs)("div", {
+             className: "ShootingDeathWho",
+             children: [Xr && (0, Br.jsxs)(Br.Fragment, {
+               children: [(0, Br.jsx)("div", {
+ ... (163 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L714-L721` → after: `L1685-L1783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R1685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L1685-L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L1685-L1783) · [Before (L714-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L714-L721)

```diff
-         aR = (RR, JR, GR) => GR + (RR.length > 0 ? 1 : "domSegments" === JR.list ? ZR : 0);
-       for (const tR of JR) {
-         const RR = (0, yR.j)(JSON.stringify(tR.value));
-         let JR = eR(wR.request, tR.list);
-         wR.items.length > 0 && (rR + aR(JR, tR, RR) > GR || JR.length >= uR) && (KR.push(wR), wR = {
-           request: fR(),
-           items: []
-         }, rR = VR, JR = eR(wR.request, tR.list)), rR += aR(JR, tR, RR), "domSegments" === tR.list && (wR.request.manifest.domSegments = JR), JR.push(tR.value), wR.items.push(tR)
+         children: [(0, Br.jsx)("div", {
+           className: "ShootingResultsTitle FullyFancyText",
+           children: rQ(jr, Sr, kr, Gr, fr)
+         }), (0, Br.jsxs)("div", {
+           className: "ShootingResultsScore FullyFancyText",
+           children: [kr && (0, Br.jsxs)(Br.Fragment, {
+             children: [(0, Br.jsx)("span", {
+               className: "ShootingResultsTeam",
+               children: Ar("Red")
+             }), (0, Br.jsx)("b", {
+               style: Or("Red", "tdm"),
+               children: tr
+             }), (0, Br.jsx)("span", {
+               className: "ShootingResultsDash",
+               children: "\u2013"
+             }), (0, Br.jsx)("b", {
+ ... (83 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L727-L746` → after: `L1788-L1865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R1788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L1788-L1865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L1788-L1865) · [Before (L727-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L727-L746)

```diff
-       let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tR;
-       return qR(RR, function(RR) {
-         var JR;
-         return [...RR.creatorGrants.map((RR => ({
-           list: "creatorGrants",
-           value: RR
-         }))), ...RR.manifest.games.map((RR => ({
-           list: "games",
-           value: RR
-         }))), ...RR.manifest.videoSegments.map((RR => ({
-           list: "videoSegments",
-           value: RR
-         }))), ...RR.manifest.telemetrySegments.map((RR => ({
-           list: "telemetrySegments",
-           value: RR
-         }))), ...(null !== (JR = RR.manifest.domSegments) && void 0 !== JR ? JR : []).map((RR => ({
- ... (4 more removed lines; see GitHub link above)
+       let {
+         entry: Sr,
+         place: Qr,
+         mvp: Zr,
+         tdm: Wr
+       } = rr;
+       const {
+         t: ar
+       } = (0, nr.E)(), jr = qr(), [Ir, fr, Er, pr, xr] = Sr, tr = (0, Nr.j)("players").localId;
+       return (0, Br.jsxs)("div", {
+         className: mr()("ShootingPodiumCard", `Place${Qr+1}`, {
+           Mvp: Zr,
+           Mine: Ir === tr,
+           Team: Wr
+         }),
+         style: Wr ? Or(Er, "tdm") : void 0,
+ ... (62 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L748` → after: `L1867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R1867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L1867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L1867) · [Before (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L748)

```diff
-           request: JR
+           localPlayerId: jr
```

#### 49. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L750-L752` → after: `L1869-L1930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R1869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L1869-L1930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L1869-L1930) · [Before (L750-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L750-L752)

```diff
-         return JR
-       }))
-     }
+         const xr = new kr,
+           mr = "tdm" === Qr ? "tdm" : "ffa";
+         let Nr = null,
+           Ur = null,
+           tr = null;
+         return {
+           onCreate: rr => {
+             document.body.classList.add(aQ), document.body.classList.toggle(jQ, "ffa" === mr), Ur = new pr.d(rr, jr), tr = new ZS((rr => {
+               Ir.i.Jp(QS, rr, !0)
+             }), (Sr => {
+               rr.sendCommand(Sr)
+             })), Nr = (0, fr.H)((0, Zr.createElement)(Zr.Fragment, null, (0, Zr.createElement)(Er.b, {
+               controller: Ur
+             }), (0, Zr.createElement)(WQ, {
+               store: xr,
+               votes: tr,
+ ... (46 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L758` → after: `L1936-L1940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R1936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L1936-L1940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L1936-L1940) · [Before (L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L758)

```diff
-     class yR extends Error {
+     var Zr = Qr(34);
+     const Wr = "DamageFeedbackArcsShown",
+       ar = .45,
+       jr = .2;
+     class Ir {
```

#### 51. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L760-L761` → after: `L1942-L2166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R1942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L1942-L2166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L1942-L2166) · [Before (L760-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L760-L761)

```diff
-         let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         super(RR), this.status = JR, this.storageCode = GR
+         let {
+           arcs: Qr = !0,
+           edgeGlow: Wr = !0,
+           lowHealthShade: ar = !0,
+           enabled: jr = !0
+         } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+         this.api = rr, this.localPlayerId = Sr, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
+           frac: 0,
+           at: -1 / 0
+         }, this.maxHealth = null, this.AW = 1, this.dead = !1, this.enabled = void 0, this.parts = void 0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = rr => {
+           var Sr, Qr;
+           this.clearHits(), this.root = rr, this.lowLayer = null !== (Sr = null === rr || void 0 === rr ? void 0 : rr.querySelector(".DamageFeedbackLow")) && void 0 !== Sr ? Sr : null, this.arcLayer = null !== (Qr = null === rr || void 0 === rr ? void 0 : rr.querySelector(".Damag … [truncated]
+         }, this.parts = {
+           arcs: Qr,
+           edgeGlow: Wr,
+           lowHealthShade: ar
+ ... (209 more added lines; see GitHub link above)
```

#### 52. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L764-L775` → after: `L2169-L2172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R2169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L2169-L2172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L2169-L2172) · [Before (L764-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L764-L775)

```diff
-   },
-   41034: (RR, JR, GR) => {
-     GR.d(JR, {
-       d: () => qR,
-       f: () => tR,
-       g: () => uR,
-       k: () => yR,
-       m: () => ZR
-     });
-     const yR = "/index/replay/segment-upload-url",
-       tR = "/index/replay/manifest";
-     const uR = 65536;
+ 
+     function fr(rr, Sr) {
+       return Math.abs(Math.atan2(Math.sin(rr - Sr), Math.cos(rr - Sr)))
+     }
```

#### 53. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L778-L781` → after: `L2175-L2179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R2175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L2175-L2179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/282.js#L2175-L2179) · [Before (L778-L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/282.js#L778-L781)

```diff
-       return {
-         count: Math.ceil(RR.segmentDurationMs / RR.partDurationMs) + 1,
-         maxBytes: Math.ceil(1.5 * RR.bitrate / 8 * (RR.partDurationMs / 1e3)) + 32768
-       }
+       return Math.max(0, Math.min(1, rr))
+     }
+ 
+     function pr(rr, Sr) {
+       const Qr = rr.indexOf(Sr); - 1 !== Qr && rr.splice(Qr, 1)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/283.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/283.js` (76 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e)

#### 1. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L4)

```diff
-   41097: (RR, JR, GR) => {
+   41438: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L6-L7)

```diff
-       c: () => Wf,
-       f: () => kr
+       e: () => Er
```

#### 3. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L9-L131` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L8-L9) · [Before (L9-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L9-L131)

```diff
-     const yR = "0.9.4",
-       tR = {
-         DEBUG: !1,
-         LIB_VERSION: "1.438.7",
-         LIB_NAME: "web",
-         JS_SDK_VERSION: yR
-       };
-     var uR = tR;
-     const ZR = "$early_access_features",
-       qR = "$active_feature_flags",
-       iR = "$feature_flag_details",
-       fR = "$feature_flag_errors",
-       VR = "$feature_flag_evaluated_at",
-       KR = "$feature_flag_request_id",
-       wR = "$minimal_flag_called_events",
-       rR = "$enabled_feature_flags",
- ... (107 more removed lines; see GitHub link above)
+     var Zr = Qr(5459);
+     const Wr = ["recordings", "videoHeaders", "videoChunks", "videoSequences", "videoProgress", "telemetry", "dom", "domTail"];
```

#### 4. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L133-L134` → after: `L11-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L11-L18) · [Before (L133-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L133-L134)

```diff
-     function wG(RR, JR) {
-       return -1 !== RR.indexOf(JR)
+     function ar(rr) {
+       return new Promise(((Sr, Qr) => {
+         rr.onsuccess = () => {
+           Sr(rr.result)
+         }, rr.onerror = () => {
+           Qr(rr.error)
+         }
+       }))
```

#### 5. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L144-L159` → after: `L22-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L22-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L22-L29) · [Before (L144-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L144-L159)

```diff
-       var JR;
-       const GR = [];
-       return null !== (JR = JSON.stringify(RR, (function(RR, JR) {
-         if ("bigint" == typeof JR) return JR.toString();
-         if ("function" != typeof JR && "symbol" != typeof JR) {
-           if (JR instanceof Error) return {
-             name: JR.name,
-             message: JR.message,
-             stack: JR.stack
-           };
-           if (JR && "object" == typeof JR) {
-             for (; GR.length > 0 && GR[GR.length - 1] !== this;) GR.pop();
-             if (GR.includes(JR)) return "[Circular]";
-             GR.push(JR)
-           }
-           return JR
+       return new Promise(((Sr, Qr) => {
+         rr.oncomplete = () => {
+           Sr()
+         }, rr.onerror = () => {
+           Qr(rr.error)
+         }, rr.onabort = () => {
+           var Sr;
+           Qr(null !== (Sr = rr.error) && void 0 !== Sr ? Sr : new Error("IndexedDB transaction aborted"))
```

#### 6. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L161` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L31) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L161)

```diff
-       }))) && void 0 !== JR ? JR : "null"
+       }))
```

#### 7. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L191` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L35) · [Before (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L191)

```diff
-       return null === RR || "object" != typeof RR
+       return IDBKeyRange.bound([rr], [rr, []])
```

#### 8. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L195` → after: `L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L39) · [Before (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L195)

```diff
-       return {}.toString.call(RR) === `[object ${JR}]`
+       return IDBKeyRange.bound([rr, Sr], [rr, Sr, []])
```

#### 9. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L197-L207` → after: `L41-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L41-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L41-L43) · [Before (L197-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L197-L207)

```diff
- 
-     function oG(RR) {
-       switch ({}.toString.call(RR)) {
-         case "[object Error]":
-         case "[object Exception]":
-         case "[object DOMException]":
-         case "[object DOMError]":
-         case "[object WebAssembly.Exception]":
-           return !0;
-         default:
-           return PG(RR, Error)
+     class Er {
+       constructor() {
+         this.db = null, this.opening = null, this.failed = !1, this.tailRecordings = new Set
```

#### 10. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L209-L219` → after: `L45-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L45-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L45-L46) · [Before (L209-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L209-L219)

```diff
-     }
- 
-     function cG(RR) {
-       return "u" > typeof Event && PG(RR, Event)
-     }
- 
-     function PG(RR, JR) {
-       try {
-         return RR instanceof JR
-       } catch (RR) {
-         return !1
+       get working() {
+         return !this.failed
```

#### 11. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L221-L231` → after: `L48-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L48-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L48-L53) · [Before (L221-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L221-L231)

```diff
-     }
-     const IG = [!0, "true", 1, "1", "yes"],
-       mG = RR => wG(IG, RR),
-       zG = [!1, "false", 0, "0", "no"];
- 
-     function SG(RR, JR, GR, yR, tR, uR, ZR) {
-       try {
-         var qR = RR[uR](ZR),
-           iR = qR.value
-       } catch (RR) {
-         return void GR(RR)
+       static get supported() {
+         try {
+           return "undefined" !== typeof indexedDB
+         } catch {
+           return !1
+         }
```

#### 12. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L233-L248` → after: `L55-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L55-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L55-L83) · [Before (L233-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L233-L248)

```diff
-       qR.done ? JR(iR) : Promise.resolve(iR).then(yR, tR)
-     }
- 
-     function jG(RR) {
-       return function() {
-         var JR = this,
-           GR = arguments;
-         return new Promise((function(yR, tR) {
-           var uR = RR.apply(JR, GR);
- 
-           function ZR(RR) {
-             SG(uR, yR, tR, ZR, qR, "next", RR)
-           }
- 
-           function qR(RR) {
-             SG(uR, yR, tR, ZR, qR, "throw", RR)
+       putRecording(rr) {
+         this.write(["recordings"], (Sr => {
+           Sr.objectStore("recordings").put(rr)
+         }))
+       }
+       putVideoSequence(rr, Sr, Qr) {
+         this.write(["recordings", "videoSequences"], (Zr => {
+           Zr.objectStore("recordings").put(rr), Zr.objectStore("videoSequences").put({
+             recordingId: rr.recordingId,
+             segmentId: Sr,
+             sequence: Qr
+           })
+         }))
+       }
+       appendVideo(rr, Sr) {
+         this.write(["videoHeaders", "videoChunks"], (Qr => {
+ ... (13 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L253-L279` → after: `L87-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L87-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L87-L95) · [Before (L253-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L253-L279)

```diff
-     }
-     const dG = ["amazonbot", "amazonproductbot", "app.hypefactors.com", "applebot", "archive.org_bot", "awariobot", "backlinksextendedbot", "baiduspider", "bingbot", "bingpreview", "chrome-lighthouse", "dataforseobot", "deepscan", "duckduckbot", "facebookexternal", "facebookcatal … [truncated]
-       EG = new Map,
-       YG = function(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
-         if (!RR) return !1;
-         const GR = function(RR, JR) {
-             let GR = "";
-             for (let yR = 0; JR.length > yR; yR++) {
-               const RR = JR[yR];
-               GR += RR.length + ":" + RR
-             }
-             return RR.length + ":" + RR + "|" + JR.length + ":" + GR
-           }(RR, JR),
-           yR = EG.get(GR);
-         if (void 0 !== yR) return yR;
- ... (11 more removed lines; see GitHub link above)
+       removeVideoChunks(rr, Sr) {
+         this.write(["videoChunks"], (Qr => {
+           Qr.objectStore("videoChunks").delete(fr(rr, Sr))
+         }))
+       }
+       removeVideo(rr, Sr) {
+         this.write(["videoHeaders", "videoChunks", "videoSequences", "videoProgress"], (Qr => {
+           Qr.objectStore("videoHeaders").delete([rr, Sr]), Qr.objectStore("videoChunks").delete(fr(rr, Sr)), Qr.objectStore("videoSequences").delete([rr, Sr]), Qr.objectStore("videoProgress").delete([rr, Sr])
+         }))
```

#### 14. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L281-L283` → after: `L97-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L97-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L97-L100) · [Before (L281-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L281-L283)

```diff
-       _applyRefill(RR, JR) {
-         const GR = Math.floor((JR - RR.lastAccess) / this._refillInterval);
-         GR > 0 && (RR.tokens = Math.min(RR.tokens + GR * this._refillRate, this._bucketSize), RR.lastAccess = RR.lastAccess + GR * this._refillInterval)
+       putTelemetry(rr) {
+         this.write(["telemetry"], (Sr => {
+           Sr.objectStore("telemetry").put(rr)
+         }))
```

#### 15. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L285-L293` → after: `L102-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L102-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L102-L124) · [Before (L285-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L285-L293)

```diff
-       consumeRateLimit(RR) {
-         var JR;
-         const GR = Date.now(),
-           yR = String(RR);
-         let tR = this._buckets[yR];
-         return tR ? this._applyRefill(tR, GR) : (tR = {
-           tokens: this._bucketSize,
-           lastAccess: GR
-         }, this._buckets[yR] = tR), 0 === tR.tokens || (tR.tokens--, 0 === tR.tokens && (null === (JR = this._onBucketRateLimited) || void 0 === JR || JR.call(this, RR)), 0 === tR.tokens)
+       removeTelemetry(rr, Sr) {
+         this.write(["telemetry"], (Qr => {
+           Qr.objectStore("telemetry").delete([rr, Sr])
+         }))
+       }
+       putDom(rr) {
+         this.write(["dom"], (Sr => {
+           Sr.objectStore("dom").put(rr)
+         }))
+       }
+       queueDom(rr, Sr, Qr) {
+         this.write(["recordings", "dom", "domTail"], (Zr => {
+           Zr.objectStore("recordings").put(rr), Zr.objectStore("dom").put(Sr), Zr.objectStore("domTail").delete(fr(Sr.recordingId, Qr))
+         }), (Zr => {
+           console.warn(`Session replay couldn't journal page recording chunk ${Sr.sequence}; a closing tab may lose it.`, Zr), this.write(["recordings", "domTail"], (Zr => {
+             Zr.objectStore("recordings").put(rr), Zr.objectStore("domTail").delete(fr(Sr.recordingId, Qr))
+ ... (7 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L295-L296` → after: `L126-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L126-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L126-L138) · [Before (L295-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L295-L296)

```diff
-       stop() {
-         this._buckets = {}
+       removeDomTail(rr, Sr) {
+         this.write(["domTail"], (Qr => {
+           Qr.objectStore("domTail").delete(fr(rr, Sr))
+         }))
+       }
+       removeDom(rr, Sr) {
+         this.write(["dom"], (Qr => {
+           Qr.objectStore("dom").delete([rr, Sr])
+         }))
+       }
+       async listRecordings() {
+         const rr = await this.open();
+         return await ar(rr.transaction("recordings", "readonly").objectStore("recordings").getAll())
```

#### 17. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L298-L404` → after: `L140-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L140-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L140-L158) · [Before (L298-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L298-L404)

```diff
-     };
-     const FG = "Mobile",
-       TG = "Android",
-       sG = "Tablet",
-       hG = "Android Tablet",
-       Ry = "iPad",
-       Jy = "Apple Watch",
-       Gy = "Safari",
-       yy = "BlackBerry",
-       ty = "Samsung Internet",
-       uy = "Chrome",
-       Zy = "Chrome iOS",
-       qy = "Internet Explorer",
-       iy = "Internet Explorer Mobile",
-       fy = "Opera",
-       Vy = "Microsoft Edge",
- ... (91 more removed lines; see GitHub link above)
+       async read(rr) {
+         const Sr = (await this.open()).transaction(["videoHeaders", "videoChunks", "videoSequences", "videoProgress", "telemetry", "dom", "domTail"], "readonly"),
+           Qr = Ir(rr.recordingId),
+           Zr = rr => ar(Sr.objectStore(rr).getAll(Qr)),
+           [Wr, jr, fr, Er, pr, xr, mr] = await Promise.all([Zr("videoHeaders"), Zr("videoChunks"), Zr("videoSequences"), Zr("videoProgress"), Zr("telemetry"), Zr("dom"), Zr("domTail")]);
+         return {
+           recording: rr,
+           telemetry: pr,
+           dom: xr,
+           domTails: mr,
+           video: Wr.map((rr => {
+             var Sr, Qr, Zr;
+             return {
+               header: rr,
+               sequence: null !== (Sr = null === (Qr = fr.find((Sr => Sr.segmentId === rr.segmentId))) || void 0 === Qr ? void 0 : Qr.sequence) && void 0 !== Sr ? Sr : null,
+               progress: null !== (Zr = Er.find((Sr => Sr.segmentId === rr.segmentId))) && void 0 !== Zr ? Zr : null,
+ ... (3 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L406-L419` → after: `L160-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L160-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L160-L190) · [Before (L406-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L406-L419)

```diff
-         return null
-       },
-       Qy = [
-         [new RegExp("Xbox; Xbox (.*?)[);]", "i"), RR => [ay, RR && RR[1] || ""]],
-         [new RegExp(ry, "i"), [ry, ""]],
-         [new RegExp(ey, "i"), [ey, ""]],
-         [jy, [yy, ""]],
-         [new RegExp(Uy, "i"), (RR, JR) => {
-           if (/Phone/.test(JR) || /WPDesktop/.test(JR)) return [Wy, ""];
-           if (new RegExp(FG).test(JR) && !/IEMobile\b/.test(JR)) return ["Windows Mobile", ""];
-           const GR = /Windows NT ([0-9.]+)/i.exec(JR);
-           if (GR && GR[1]) {
-             let RR = dy[GR[1]] || "";
-             return /arm/i.test(JR) && (RR = "RT"), [Uy, RR]
+       }
+       async deleteRecording(rr) {
+         const Sr = (await this.open()).transaction([...Wr], "readwrite");
+         Sr.objectStore("recordings").delete(rr);
+         for (const Qr of Wr.slice(1)) Sr.objectStore(Qr).delete(Ir(rr));
+         await jr(Sr)
+       }
+       async forgetSent(rr, Sr) {
+         const Qr = (await this.open()).transaction([...Wr], "readwrite"),
+           {
+             recordingId: Zr
+           } = rr;
+         Qr.objectStore("recordings").put(rr);
+         for (const Wr of Sr.videoSegmentIds) Qr.objectStore("videoHeaders").delete([Zr, Wr]), Qr.objectStore("videoChunks").delete(fr(Zr, Wr)), Qr.objectStore("videoSequences").delete([Zr, Wr]), Qr.objectStore("videoProgress").delete([Zr, Wr]);
+         for (const Wr of Sr.telemetrySequences) Qr.objectStore("telemetry").delete([Zr, Wr]);
+         for (const Wr of Sr.domSequences) Qr.objectStore("dom").delete([Zr, Wr]);
+ ... (15 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L421-L483` → after: `L192-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L192-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L192-L210) · [Before (L421-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L421-L483)

```diff
-           return [Uy, ""]
-         }],
-         [/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, RR => RR && RR[3] ? ["iOS", [RR[3], RR[4], RR[5] || "0"].join(".")] : ["iOS", ""]],
-         [/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, RR => {
-           let JR = "";
-           return RR && RR.length >= 3 && (JR = MG(RR[2]) ? RR[3] : RR[2]), ["watchOS", JR]
-         }],
-         [new RegExp("(Android (\\d+)\\.(\\d+)\\.?(\\d+)?|Android)", "i"), RR => RR && RR[2] ? [TG, [RR[2], RR[3], RR[4] || "0"].join(".")] : [TG, ""]],
-         [/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, RR => {
-           const JR = ["Mac OS X", ""];
-           return RR && RR[1] && (JR[1] = [RR[1], RR[2], RR[3] || "0"].join(".")), JR
-         }],
-         [/Mac/i, ["Mac OS X", ""]],
-         [/CrOS/, ["Chrome OS", ""]],
-         [/Linux|debian/i, ["Linux", ""]]
-       ],
- ... (47 more removed lines; see GitHub link above)
+         };
+         null === this.db ? this.open().then(Zr, (rr => {
+           this.fail(rr)
+         })) : Zr(this.db)
+       }
+       fail(rr) {
+         this.failed || (this.failed = !0, console.warn("Session replay can't keep its upload journal; what a closing tab leaves unsent will be lost.", rr), this.dropTails())
+       }
+       dropTails() {
+         if (null === this.db || 0 === this.tailRecordings.size) return;
+         const rr = rr => {
+           console.warn("Session replay couldn't drop its page recording tails from its upload journal.", rr)
+         };
+         try {
+           const Sr = this.db.transaction(["domTail"], "readwrite");
+           for (const rr of this.tailRecordings) Sr.objectStore("domTail").delete(Ir(rr));
+ ... (3 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L486` → after: `L213-L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L213-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L213-L248) · [Before (L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L486)

```diff
-       return JR
+       open() {
+         return this.opening ??= new Promise(((rr, Sr) => {
+           const Qr = indexedDB.open(Zr.j, 4);
+           Qr.onupgradeneeded = rr => {
+             const Sr = Qr.result;
+             rr.oldVersion < 1 && (Sr.createObjectStore("recordings", {
+               keyPath: "recordingId"
+             }), Sr.createObjectStore("videoHeaders", {
+               keyPath: ["recordingId", "segmentId"]
+             }), Sr.createObjectStore("videoChunks", {
+               keyPath: ["recordingId", "segmentId", "index"]
+             }), Sr.createObjectStore("videoSequences", {
+               keyPath: ["recordingId", "segmentId"]
+             }), Sr.createObjectStore("telemetry", {
+               keyPath: ["recordingId", "sequence"]
+             })), rr.oldVersion < 2 && Sr.createObjectStore("videoProgress", {
+ ... (20 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L490-L495` → after: `L261-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L261-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L261-L268) · [Before (L490-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L490-L495)

```diff
-       if (!JR) return RR;
-       let GR = [];
-       try {
-         GR = Object.keys(JR)
-       } catch (RR) {
-         GR = []
+       return new Blob([Wr.encode(`${JSON.stringify(rr)}\n`), Sr], {
+         type: "text/plain"
+       })
+     }
+     class jr {
+       constructor(rr, Sr) {
+         let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
+         this.token = rr, this.relay = Sr, this.nowMs = Qr, this.refused = !1, this.skipUntilMs = 0
```

#### 22. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L497` → after: `L270-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L270-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L270-L284) · [Before (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L497)

```diff
-       for (const yR of GR) {
+       async send(rr, Sr, Qr, Wr, jr) {
+         if (this.goesDirect(Sr, Qr)) return null;
+         const Ir = ar({
+             token: this.token,
+             contentType: Qr,
+             target: rr
+           }, Sr),
+           fr = {
+             method: "POST",
+             headers: {
+               "Content-Type": "text/plain"
+             },
+             body: Ir,
+             signal: Wr
+           };
```

#### 23. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L500` → after: `L287-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L287-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L287-L289) · [Before (L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L500)

```diff
-           GR = JR[yR]
+           const rr = Sr.byteLength <= Zr.d ? await Zr.g.fetch(this.relay.url, fr, Ir.size, Qr) : await fetch(this.relay.url, fr);
+           if (!rr.ok) throw new Error(`HTTP ${rr.status}`);
+           if (Er = await rr.json(), "refused" !== Er.outcome && ("forwarded" !== Er.outcome || !Number.isInteger(Er.status))) throw new Error(`Unexpected relay answer ${JSON.stringify(Er)}`)
```

#### 24. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L502` → after: `L291-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L291-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L291-L292) · [Before (L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L502)

```diff
-           GR = Gt
+           if (!0 === (null === jr || void 0 === jr ? void 0 : jr.aborted)) throw pr;
+           return console.warn("Session replay couldn't relay an upload through the part joiner; uploading straight to storage.", pr), this.skipUntilMs = this.nowMs() + 12e4, null
```

#### 25. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L504-L530` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L294) · [Before (L504-L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L504-L530)

```diff
-         Object.defineProperty(RR, yR, {
-           value: GR,
-           enumerable: !0,
-           writable: !0,
-           configurable: !0
-         })
-       }
-       return RR
-     }
-     Date, Date;
-     const ut = 3e5;
-     var Zt = class {
-       record(RR) {
-         if ("too-large" === RR.kind) return;
-         if ("retry-later" !== RR.kind) return void this.reset();
-         if (!RR.retryAfterMs) return;
- ... (11 more removed lines; see GitHub link above)
+         return "refused" === Er.outcome ? (console.info(`Session replay's part joiner refused to relay (${Er.reason}); uploading straight to storage.`), this.refused = !0, null) : Er.status
```

#### 26. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L532-L536` → after: `L296-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L296-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L296-L303) · [Before (L532-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L532-L536)

```diff
-       isOpen() {
-         return this.remainingMs() > 0
-       }
-       reset() {
-         this._until = 0, this._installedAt = 0
+       beacon(rr, Sr, Qr, Zr) {
+         if (this.goesDirect(Sr, Qr)) return null;
+         const Wr = ar({
+           token: this.token,
+           contentType: Qr,
+           target: rr
+         }, Sr);
+         return Zr.sendUploadBeacon(this.relay.url, Wr, Wr.size)
```

#### 27. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L538-L539` → after: `L305-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L305-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L305-L306) · [Before (L538-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L538-L539)

```diff
-       constructor() {
-         this._until = 0, this._installedAt = 0
+       goesDirect(rr, Sr) {
+         return this.refused || this.nowMs() < this.skipUntilMs || rr.byteLength > this.relay.maxBytes || "video/mp4" === Sr
```

#### 28. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L563` → after: `L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L311) · [Before (L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L563)

```diff
-       return RR ? RR.split("#")[0] : RR
+       return void 0 === (null === rr || void 0 === rr ? void 0 : rr.relay) ? null : new jr(rr.token, rr.relay)
```

#### 29. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L565-L570` → after: `L313-L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L313-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L313-L319) · [Before (L565-L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L565-L570)

```diff
- 
-     function Kt(RR) {
-       try {
-         return RR()
-       } catch (RR) {
-         return
+     class fr {
+       constructor() {
+         this.relays = new Map
+       }
+       for (rr) {
+         let Sr = this.relays.get(rr.recordingId);
+         return void 0 === Sr && (Sr = Ir(rr.partJoiner), this.relays.set(rr.recordingId, Sr)), Sr
```

#### 30. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L573-L600` → after: `L322-L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L322-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L322-L332) · [Before (L573-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L573-L600)

```diff
- 
-     function wt(RR, JR) {
-       const GR = setTimeout(RR, JR);
-       return null != GR && GR.unref && (null == GR || GR.unref()), GR
-     }
- 
-     function rt(RR, JR, GR) {
-       return et.apply(this, arguments)
-     }
- 
-     function et() {
-       return (et = jG((function*(RR, JR, GR) {
-         let yR;
-         try {
-           return yield Promise.race([RR, new Promise(((RR, tR) => {
-             yR = wt((() => {
- ... (12 more removed lines; see GitHub link above)
+   },
+   41420: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       c: () => Ur,
+       d: () => Nr,
+       g: () => fr
+     });
+     var Zr = Qr(41387),
+       Wr = Qr(1267),
+       ar = Qr(41398);
+     const jr = 1024;
```

#### 31. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L603-L607` → after: `L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L335) · [Before (L603-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L603-L607)

```diff
-       return Lt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
-         return typeof RR
-       } : function(RR) {
-         return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
-       }, Lt(RR)
+       return 6e4 + Math.ceil(rr / 16384 * 1e3)
```

#### 32. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L611-L637` → after: `L339-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L339-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L339-L346) · [Before (L611-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L611-L637)

```diff
-       return (JR = function(RR) {
-         var JR = function(RR) {
-           if ("object" != Lt(RR) || !RR) return RR;
-           var JR = RR[Symbol.toPrimitive];
-           if (void 0 !== JR) {
-             var GR = JR.call(RR, "string");
-             if ("object" != Lt(GR)) return GR;
-             throw new TypeError("@@toPrimitive must return a primitive value.")
-           }
-           return String(RR)
-         }(RR);
-         return "symbol" == Lt(JR) ? JR : JR + ""
-       }(JR)) in RR ? Object.defineProperty(RR, JR, {
-         value: GR,
-         enumerable: !0,
-         configurable: !0,
- ... (11 more removed lines; see GitHub link above)
+       const Wr = new FormData;
+       let ar = Sr.byteLength + jr;
+       for (const [jr, Ir] of Object.entries(rr.fields)) Wr.append(jr, Ir), ar += (0, Zr.i)(jr) + (0, Zr.i)(Ir);
+       return Wr.append("file", new Blob([Sr], {
+         type: Qr
+       })), {
+         form: Wr,
+         byteLength: ar
```

#### 33. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L642-L651` → after: `L350-L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L350-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L350-L351) · [Before (L642-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L642-L651)

```diff
-     function Wt(RR) {
-       for (var JR = 1; arguments.length > JR; JR++) {
-         var GR = null != arguments[JR] ? arguments[JR] : {};
-         JR % 2 ? Ut(Object(GR), !0).forEach((function(JR) {
-           nt(RR, JR, GR[JR])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : Ut(Object(GR)).forEach((function(JR) {
-           Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
-         }))
-       }
-       return RR
+     function Er(rr, Sr, Qr) {
+       return new ar.d(`Segment ${rr} failed with ${Sr}${null===Qr?"":` (${Qr})`}`, Sr, Qr)
```

#### 34. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L656-L684` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L355) · [Before (L656-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L656-L684)

```diff
-       var JR;
-       const GR = globalThis._posthogChunkIds,
-         yR = globalThis._debugIds;
-       if (!GR && !yR) return;
-       const tR = GR ? Object.keys(GR) : [],
-         uR = yR ? Object.keys(yR) : [];
-       if (Mt && lt(GR, tR, Ct) && lt(yR, uR, Xt)) return Mt;
-       Ct = GR ? Wt({}, GR) : void 0, Xt = yR ? Wt({}, yR) : void 0, Mt = {}, null !== (JR = At) && void 0 !== JR || (At = {});
-       const ZR = (JR, GR) => {
-         for (const tR of JR) {
-           const JR = GR[tR];
-           if (!JR) continue;
-           const uR = null == At ? void 0 : At[tR];
-           if (uR) {
-             Mt[uR] = JR;
-             continue
- ... (13 more removed lines; see GitHub link above)
+       if (rr < 200 || rr > 299) throw Er("POST", rr, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
```

#### 35. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L687-L688` → after: `L358-L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L358-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L358-L359) · [Before (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L687-L688)

```diff
-     function lt(RR, JR, GR) {
-       return RR && GR ? JR.length === Object.keys(GR).length && JR.every((JR => RR[JR] === GR[JR])) : RR === GR
+     function xr(rr, Sr) {
+       if ((rr < 200 || rr > 299) && (!Sr || 412 !== rr)) throw Er("PUT", rr, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
```

#### 36. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L690-L693` → after: `L361-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L361-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L361-L368) · [Before (L690-L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L690-L693)

```diff
-     var pt = class {
-       constructor(RR, JR) {
-         let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
-         this.coercers = RR, this.stackParser = JR, this.modifiers = GR
+     async function mr(rr) {
+       var Sr, Qr;
+       if (rr.ok) return null;
+       let Zr;
+       try {
+         Zr = await rr.text()
+       } catch (Wr) {
+         return console.warn("Session replay couldn't read storage's error answer", Wr), null
```

#### 37. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L695` → after: `L370-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L370-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L370-L374) · [Before (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L695)

```diff
-       buildFromUnknown(RR) {
+       return null !== (Sr = null === (Qr = /<Code>([^<]+)<\/Code>/.exec(Zr)) || void 0 === Qr ? void 0 : Qr[1]) && void 0 !== Sr ? Sr : null
+     }
+     class Nr {
+       constructor(rr) {
+         var Sr;
```

#### 38. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L697-L707` → after: `L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L376) · [Before (L697-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L697-L707)

```diff
-         const GR = JR && JR.mechanism || {
-             handled: !0,
-             type: "generic"
-           },
-           yR = this.buildCoercingContext(GR, JR, 0).apply(RR),
-           tR = this.buildParsingContext(JR),
-           uR = this.parseStacktrace(yR, tR);
-         return {
-           $exception_list: this.convertToExceptionList(uR, GR),
-           $exception_level: "error"
-         }
+         this.segmentUploadUrl = rr, this.deadline = void 0, this.relay = void 0, this.deadline = Qr.deadline, this.relay = null !== (Sr = Qr.relay) && void 0 !== Sr ? Sr : null
```

#### 39. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L709-L714` → after: `L378-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L378-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L378-L379) · [Before (L709-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L709-L714)

```diff
-       modifyFrames(RR) {
-         var JR = this;
-         return jG((function*() {
-           for (const GR of RR) GR.stacktrace && GR.stacktrace.frames && WG(GR.stacktrace.frames) && (GR.stacktrace.frames = yield JR.applyModifiers(GR.stacktrace.frames));
-           return RR
-         }))()
+       requestPutUrl(rr) {
+         return this.presign(rr)
```

#### 40. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L716-L723` → after: `L381-L382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L381-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L381-L382) · [Before (L716-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L716-L723)

```diff
-       coerceFallback(RR) {
-         var JR;
-         return {
-           type: "Error",
-           value: "Unknown error",
-           stack: null === (JR = RR.syntheticException) || void 0 === JR ? void 0 : JR.stack,
-           synthetic: !0
-         }
+       requestPostTargets(rr) {
+         return this.presign(rr)
```

#### 41. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L725-L735` → after: `L384-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L384-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L384-L394) · [Before (L725-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L725-L735)

```diff
-       parseStacktrace(RR, JR) {
-         var GR;
-         let yR, tR;
-         if (null != RR.cause && (yR = this.parseStacktrace(RR.cause, JR)), "" != RR.stack && null != RR.stack) try {
-           tR = this.applyChunkIds(this.stackParser(RR.stack, RR.synthetic ? JR.skipFirstLines : 0), JR.chunkIdMap)
-         } catch (RR) {}
-         return Wt(Wt({}, RR), {}, {
-           cause: yR,
-           stack: tR,
-           errors: null === (GR = RR.errors) || void 0 === GR ? void 0 : GR.map((RR => this.parseStacktrace(RR, JR)))
-         })
+       async presign(rr) {
+         const Sr = await fetch(this.segmentUploadUrl, {
+           method: "POST",
+           headers: {
+             "Content-Type": "application/json"
+           },
+           body: JSON.stringify(rr),
+           signal: this.signal(6e4)
+         });
+         if (!Sr.ok) throw new ar.d(`Segment presign failed with ${Sr.status}`, Sr.status);
+         return await Sr.json()
```

#### 42. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L737-L738` → after: `L396-L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L396-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L396-L432) · [Before (L737-L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L737-L738)

```diff
-       applyChunkIds(RR, JR) {
-         return RR.map((RR => (RR.filename && JR && (RR.chunk_id = JR[RR.filename]), RR)))
+       async put(rr, Sr, Qr, Wr) {
+         const ar = await this.sendThroughRelay({
+           method: "PUT",
+           url: rr,
+           ifNoneMatch: Wr
+         }, Sr, Qr);
+         if (null !== ar) return void xr(ar, Wr);
+         const jr = {
+             method: "PUT",
+             headers: {
+               "Content-Type": Qr,
+               ...Wr ? {
+                 "If-None-Match": "*"
+               } : {}
+             },
+             body: Sr,
+ ... (21 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L740-L743` → after: `L434-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L434-L435) · [Before (L740-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L740-L743)

```diff
-       applyCoercers(RR, JR) {
-         for (const GR of this.coercers)
-           if (GR.match(RR)) return GR.coerce(RR, JR);
-         return this.coerceFallback(JR)
+       async sendThroughRelay(rr, Sr, Qr) {
+         return null === this.relay ? null : await this.relay.send(rr, Sr, Qr, this.signal(Ir(Sr.byteLength)), this.deadline)
```

#### 44. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L745-L751` → after: `L437-L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L437-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L437-L439) · [Before (L745-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L745-L751)

```diff
-       applyModifiers(RR) {
-         var JR = this;
-         return jG((function*() {
-           let GR = RR;
-           for (const RR of JR.modifiers) GR = yield RR(GR);
-           return GR
-         }))()
+       signal(rr) {
+         const Sr = (0, Wr.o)(rr);
+         return void 0 === this.deadline ? Sr : (0, Wr.i)([this.deadline, Sr])
```

#### 45. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L753-L785` → after: `L441-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L441-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L441-L447) · [Before (L753-L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L753-L785)

```diff
-       convertToExceptionList(RR, JR) {
-         const GR = [],
-           yR = (RR, tR, uR) => {
-             var ZR;
-             const qR = GR.length,
-               iR = void 0 === tR ? Wt(Wt({
-                 type: "string" == typeof JR.type && JR.type.length > 0 ? JR.type : "generic"
-               }, "boolean" == typeof JR.handled ? {
-                 handled: JR.handled
-               } : void 0 === JR.handled ? {
-                 handled: !0
-               } : {}), {}, {
-                 synthetic: "boolean" == typeof JR.synthetic ? JR.synthetic : RR.synthetic,
-                 exception_id: qR
-               }) : {
-                 type: "chained",
- ... (17 more removed lines; see GitHub link above)
+     }
+     class Ur {
+       async requestPutUrl(rr) {
+         return {
+           uploadUrl: "",
+           ifNoneMatch: !1
+         }
```

#### 46. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L787-L788` → after: `L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L449) · [Before (L787-L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L787-L788)

```diff
-       buildParsingContext(RR) {
-         var JR;
+       async requestPostTargets(rr) {
```

#### 47. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L790-L791` → after: `L451-L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L451-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L451-L457) · [Before (L790-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L790-L791)

```diff
-           chunkIdMap: Bt(this.stackParser),
-           skipFirstLines: null !== (JR = RR.skipFirstLines) && void 0 !== JR ? JR : 1
+           targets: Array.from({
+             length: rr.parts.count
+           }, (() => ({
+             url: "",
+             fields: {}
+           }))),
+           expiresInSecs: 900
```
