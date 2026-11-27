# Changed — Bundle Modifications Report (Part 050 / 126)

- **Updated at**: `2026-11-28T08:15 JST`
- **Part**: `50 / 126` (**293** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 049](part-049.md) · [Part 051 →](part-051.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/283.js` (4udp6d.2845de07 → fl4vv.bd3c59ce · continued)

- **File**: `bundles/bloxd.io/chunks/js/283.js` (76 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e)

#### 48. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L794-L808` → after: `L460-L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L460-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L460-L461) · [Before (L794-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L794-L808)

```diff
-       getAggregateErrors(RR) {
-         try {
-           if (oG(RR)) {
-             let GR = Object.getPrototypeOf(RR);
-             for (let yR = 0; GR && 100 > yR; yR++) {
-               var JR;
-               const yR = null === (JR = Object.getOwnPropertyDescriptor(GR, "constructor")) || void 0 === JR ? void 0 : JR.value;
-               if ("function" == typeof yR && "AggregateError" === yR.name) {
-                 const JR = RR.errors;
-                 return WG(JR) ? JR : void 0
-               }
-               GR = Object.getPrototypeOf(GR)
-             }
-           }
-         } catch (RR) {}
+       put() {
+         return Promise.resolve()
```

#### 49. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L810-L885` → after: `L463-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L463-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L463-L464) · [Before (L810-L885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L810-L885)

```diff
-       buildCoercingContext(RR, JR) {
-         var GR = this;
-         let yR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-           tR = 0,
-           uR = 0,
-           ZR = !1;
-         const qR = new Set,
-           iR = [],
-           fR = {},
-           VR = function(RR, JR) {
-             let yR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-             const VR = KR(JR, yR),
-               wR = VR.apply;
-             if (VR.apply = JR => {
-                 iR.push(RR);
-                 try {
- ... (60 more removed lines; see GitHub link above)
+       post() {
+         return Promise.resolve()
```

#### 50. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L897-L904` → after: `L475-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L475-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L475-L476) · [Before (L897-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L897-L904)

```diff
-     function Ot(RR, JR, GR, yR, tR) {
-       const uR = {
-         platform: RR,
-         filename: JR,
-         function: "<anonymous>" === GR ? "?" : GR,
-         in_app: vt(JR)
-       };
-       return MG(yR) || (uR.lineno = yR), MG(tR) || (uR.colno = tR), uR
+     function ar() {
+       return Wr()('(()=>{var rr={13:(rr,Sr,Qr)=>{function Zr(){return"object"===typeof process&&"object"===typeof process.versions&&"undefined"!==typeof process.versions.node}function Wr(rr){return rr instanceof Uint8Array&&(!Zr()||!Buffer.isBuffer(rr))}function ar(rr){return rr  … [truncated]
```

#### 51. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L906-L927` → after: `L478-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L478-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L478-L511) · [Before (L906-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L906-L927)

```diff
-     const xt = (RR, JR) => {
-         const GR = -1 !== RR.indexOf("safari-extension"),
-           yR = -1 !== RR.indexOf("safari-web-extension");
-         return GR || yR ? [-1 !== RR.indexOf("@") ? RR.split("@")[0] : "?", GR ? `safari-extension:${JR}` : `safari-web-extension:${JR}`] : [RR, JR]
-       },
-       Nt = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
-       Dt = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
-       Ht = /\((\S*)(?::(\d+))(?::(\d+))\)/,
-       ot = (RR, JR) => {
-         const GR = Nt.exec(RR);
-         if (GR) {
-           const [, RR, yR, tR] = GR;
-           return Ot(JR, RR, "?", +yR, +tR)
-         }
-         const yR = Dt.exec(RR);
-         if (yR) {
- ... (6 more removed lines; see GitHub link above)
+     class jr {
+       constructor() {
+         let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
+         this.quietMs = rr, this.worker = null, this.failure = null, this.nextId = 0, this.waiting = new Map, this.watchdog = null, this.rearmed = !1
+       }
+       pack(rr) {
+         return new Promise(((Sr, Qr) => {
+           var Zr;
+           const Wr = null !== (Zr = this.worker) && void 0 !== Zr ? Zr : this.start();
+           if (null === Wr) return void Qr(this.failure);
+           const ar = this.nextId++;
+           this.waiting.set(ar, {
+             resolve: Sr,
+             reject: Qr
+           });
+           const jr = {
+ ... (18 more added lines; see GitHub link above)
```

#### 52. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L929-L937` → after: `L513-L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L513-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L513-L546) · [Before (L929-L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L929-L937)

```diff
-       },
-       ct = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
-       Pt = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
-       It = (RR, JR) => {
-         const GR = ct.exec(RR);
-         if (GR) {
-           if (GR[3] && GR[3].indexOf(" > eval") > -1) {
-             const RR = Pt.exec(GR[3]);
-             RR && (GR[1] = GR[1] || "eval", GR[3] = RR[1], GR[4] = RR[2], GR[5] = "")
+         return this.worker.onmessage = rr => {
+           const {
+             id: Sr,
+             bytes: Qr,
+             inflatedBytes: Zr
+           } = rr.data, Wr = this.waiting.get(Sr);
+           this.waiting.delete(Sr), this.stopWatchdog(), this.waiting.size > 0 && (this.watchdog = this.startWatchdog()), null === Wr || void 0 === Wr || Wr.resolve({
+             bytes: Qr,
+             inflatedBytes: Zr
+           })
+         }, this.worker.onerror = rr => {
+           this.broke(rr.message || "it didn't load")
+         }, this.worker.onmessageerror = () => {
+           this.broke("a reply couldn't be read")
+         }, this.worker
+       }
+ ... (18 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L939-L947` → after: `L548-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L548-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L548-L550) · [Before (L939-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L939-L947)

```diff
-           let RR = GR[3],
-             yR = GR[1] || "?";
-           return [yR, RR] = xt(yR, RR), Ot(JR, RR, yR, GR[4] ? +GR[4] : void 0, GR[5] ? +GR[5] : void 0)
-         }
-       },
-       mt = /\(error: (.*)\)/;
- 
-     function zt(RR, JR) {
-       return RR.filename === JR.filename && RR.function === JR.function && RR.module === JR.module && RR.lineno === JR.lineno && RR.colno === JR.colno
+           of this.waiting.values()) Qr(rr);
+         this.waiting.clear()
+       }
```

#### 54. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L951-L965` → after: `L560-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L560-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L560-L563) · [Before (L951-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L951-L965)

```diff
-       for (let JR = 1; 10 >= JR; JR++) {
-         const GR = RR.length - 2 * JR;
-         if (0 > GR) break;
-         let yR = !0;
-         for (let tR = 0; JR > tR; tR++)
-           if (!zt(RR[GR + tR], RR[GR + JR + tR])) {
-             yR = !1;
-             break
-           } if (yR) {
-           for (let yR = 0; JR > yR; yR++) RR[GR + yR] = RR[GR + JR + yR];
-           return RR.length = GR + JR, {
-             start: GR,
-             length: JR
-           }
-         }
+       const Sr = (new TextEncoder).encode(rr);
+       return {
+         bytes: (0, Zr.d)(Sr),
+         inflatedBytes: Sr.byteLength
```

#### 55. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L969-L972` → after: `L574-L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L574-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L574-L577) · [Before (L969-L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L969-L972)

```diff
-     function jt(RR, JR) {
-       const GR = JR.start + JR.length,
-         yR = Et(RR, JR);
-       yR && RR.splice(GR + yR === RR.length ? GR : JR.start, yR)
+     function ar() {
+       const rr = performance.now(),
+         Sr = Date.now();
+       return Math.abs(Sr - (rr + Wr)) > Zr && (Wr = Sr - rr), rr + Wr
```

#### 56. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L975-L1120` → after: `L587-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L587-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L587-L590) · [Before (L975-L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L975-L1120)

```diff
-     function dt(RR, JR) {
-       let GR = JR.start;
-       for (; GR > 0 && zt(RR[GR - 1], RR[GR - 1 + JR.length]);) GR--;
-       return JR.start - GR
-     }
- 
-     function Et(RR, JR) {
-       const GR = JR.start + JR.length;
-       let yR = GR;
-       for (; RR.length > yR && zt(RR[yR], RR[yR - JR.length]);) yR++;
-       return yR - GR
-     }
- 
-     function Yt(RR, JR) {
-       const GR = JR[0];
-       let yR = RR.length - (GR ? dt(RR, GR) : 0);
- ... (130 more removed lines; see GitHub link above)
+     function ar() {
+       return {
+         segmentUploadUrl: `${Wr.clientSideServerUrls.indexUrl}${Zr.i}`,
+         manifestUrl: `${Wr.clientSideServerUrls.indexUrl}${Zr.f}`
```

#### 57. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1124-L1245` → after: `L593-L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L593-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L593-L600) · [Before (L1124-L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L1124-L1245)

```diff
-     var Gu = class {
-         match(RR) {
-           return "object" == typeof RR && null !== RR
-         }
-         coerce(RR, JR) {
-           var GR, yR;
-           const tR = this.getErrorPropertyFromObject(RR);
-           return tR ? JR.apply(tR) : {
-             type: this.getType(RR),
-             value: this.getValue(RR),
-             stack: null !== (GR = this.getStack(RR)) && void 0 !== GR ? GR : null === (yR = JR.syntheticException) || void 0 === yR ? void 0 : yR.stack,
-             level: this.isSeverityLevel(RR.level) ? RR.level : "error",
-             synthetic: !0
-           }
-         }
-         getType(RR) {
- ... (106 more removed lines; see GitHub link above)
+   },
+   41387: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       d: () => Zr,
+       g: () => ar,
+       i: () => Wr
+     });
+     const Zr = 32768;
```

#### 58. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1248-L1318` → after: `L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L603) · [Before (L1248-L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L1248-L1318)

```diff
-       var JR;
-       return RR ? {
-         enabled: null !== (JR = RR.enabled) && void 0 !== JR ? JR : fu.enabled,
-         max_bytes: wu(RR.max_bytes, fu.max_bytes)
-       } : Wt({}, fu)
-     }
-     var Ku = class {
-       constructor(RR) {
-         this._entries = [], this._totalBytes = 0, this._config = Vu(RR)
-       }
-       setConfig(RR) {
-         this._config = Vu(RR), this._trimToMaxBytes()
-       }
-       add(RR) {
-         const JR = function(RR) {
-           let JR;
- ... (55 more removed lines; see GitHub link above)
+       return (new TextEncoder).encode(rr).byteLength
```

#### 59. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1320-L1325` → after: `L605-L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L605-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L605-L607) · [Before (L1320-L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L1320-L1325)

```diff
-     const ru = RR => {
-       if ("string" != typeof RR) return RR;
-       try {
-         return JSON.parse(RR)
-       } catch (tR) {
-         return RR
+     const ar = new class {
+       constructor() {
+         this.inFlightBytes = 0, this.inFlightLabels = new Map
```

#### 60. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1327-L1375` → after: `L609-L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L609-L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L609-L615) · [Before (L1327-L1375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L1327-L1375)

```diff
-     };
- 
-     function eu(RR) {
-       return "string" == typeof RR || RR
-     }
- 
-     function au(RR) {
-       return "string" == typeof RR ? RR : void 0
-     }
-     const Lu = ["$feature_flag", "$feature_flag_response", "$feature_flag_has_experiment", "$feature_flag_id", "$feature_flag_version", "$feature_flag_reason", "$feature_flag_request_id", "$feature_flag_evaluated_at", "$feature_flag_error", "locally_evaluated", "$groups", "$proce … [truncated]
-       nu = "NativeGzipValidationError",
-       Uu = RR => RR.length >= 2 && 31 === RR[0] && 139 === RR[1],
-       Wu = (RR, JR) => RR === fG.GZipJS || JR === fG.GZipJS || "gzip" === JR,
-       Au = RR => !(!RR || "object" != typeof RR) && "NotReadableError" === ("name" in RR ? String(RR.name) : "");
-     let Cu;
-     const Xu = RR => {
- ... (33 more removed lines; see GitHub link above)
+       async fetch(rr, Sr, Qr, Zr) {
+         if (this.inFlightBytes + Qr > 49152) return await fetch(rr, Sr);
+         this.inFlightBytes += Qr, this.countLabel(Zr, 1);
+         const Wr = () => {
+           this.inFlightBytes -= Qr, this.countLabel(Zr, -1)
+         };
+         let ar;
```

#### 61. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1377-L1390` → after: `L617-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L617-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L617-L620) · [Before (L1377-L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L1377-L1390)

```diff
-           const JR = (new TextEncoder).encode(RR),
-             GR = new globalThis.CompressionStream("gzip"),
-             tR = GR.writable.getWriter(),
-             uR = tR.write(JR).then((() => tR.close())).catch((yR = jG((function*(RR) {
-               try {
-                 yield tR.abort(RR)
-               } catch (RR) {}
-               throw RR
-             })), function(RR) {
-               return yR.apply(this, arguments)
-             })),
-             ZR = new Response(GR.readable).blob(),
-             [qR] = yield Promise.all([ZR, uR]);
-           return yield Mu(qR, JR), qR
+           ar = await fetch(rr, {
+             ...Sr,
+             keepalive: !0
+           })
```

#### 62. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1392-L1393` → after: `L622-L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L622-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L622-L624) · [Before (L1392-L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L1392-L1393)

```diff
-           if (null == GR ? void 0 : GR.rethrow) throw RR;
-           return JR && console.error("Failed to gzip compress data", RR), null
+           var jr;
+           if (Wr(), null !== (jr = Sr.signal) && void 0 !== jr && jr.aborted) throw Ir;
+           return console.info("Session replay keepalive request failed; retrying without keepalive.", Ir), await fetch(rr, Sr)
```

#### 63. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1395-L1470` → after: `L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L626) · [Before (L1395-L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L1395-L1470)

```diff
-         var yR
-       })), lu.apply(this, arguments)
-     }
- 
-     function pu(RR, JR) {
-       if (null == RR) return {};
-       var GR, yR, tR = function(RR, JR) {
-         if (null == RR) return {};
-         var GR = {};
-         for (var yR in RR)
-           if ({}.hasOwnProperty.call(RR, yR)) {
-             if (JR.includes(yR)) continue;
-             GR[yR] = RR[yR]
-           } return GR
-       }(RR, JR);
-       if (Object.getOwnPropertySymbols) {
- ... (60 more removed lines; see GitHub link above)
+         return Wr(), ar
```

#### 64. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1472-L1475` → after: `L628-L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L628-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L628-L630) · [Before (L1472-L1475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L1472-L1475)

```diff
-       return {
-         changed: yR,
-         lastFieldSensitive: tR,
-         serialized: GR.toString()
+       isInFlight(rr) {
+         var Sr;
+         return (null !== (Sr = this.inFlightLabels.get(rr)) && void 0 !== Sr ? Sr : 0) > 0
```

#### 65. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1477-L1487` → after: `L632-L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L632-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L632-L636) · [Before (L1477-L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L1477-L1487)

```diff
-     }
- 
-     function tZ(RR, JR) {
-       if (!RR.includes("=")) return {
-         value: uZ(RR, JR),
-         lastFieldSensitive: !1
-       };
-       const GR = yZ(RR, JR);
-       return {
-         value: GR.changed ? GR.serialized : RR,
-         lastFieldSensitive: GR.lastFieldSensitive
+       sendBeacon(rr, Sr) {
+         const Qr = Wr(Sr);
+         return !(this.inFlightBytes + Qr > 57344) && this.beaconSent(navigator.sendBeacon(rr, new Blob([Sr], {
+           type: "text/plain"
+         })), Qr)
```

#### 66. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1489-L1523` → after: `L638-L639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L638-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L638-L639) · [Before (L1489-L1523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L1489-L1523)

```diff
-     }
- 
-     function uZ(RR, JR) {
-       return JR ? iZ(RR, {
-         allowNestedUrls: !1,
-         stripPunctuation: !0
-       }) : Pu.test(RR) ? gu : RR
-     }
- 
-     function ZZ(RR, JR, GR) {
-       return "#" === RR ? !JR.fragment && (JR.fragment = !0) : "?" === RR && (JR.fragment ? "=" !== GR && !JR.fragmentQuery && (JR.fragmentQuery = !0) : !JR.query && (JR.query = !0))
-     }
- 
-     function qZ(RR, JR) {
-       var GR;
-       if (RR.length > 8192 && mu.test(RR)) return gu;
- ... (19 more removed lines; see GitHub link above)
+       sendUploadBeacon(rr, Sr, Qr) {
+         return !(this.inFlightBytes + Qr > 40960) && this.beaconSent(navigator.sendBeacon(rr, Sr), Qr)
```

#### 67. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1525-L1598` → after: `L641-L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L641-L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L641-L643) · [Before (L1525-L1598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L1525-L1598)

```diff
-       const ZR = uR.search.slice(1),
-         qR = "" !== uR.hash,
-         iR = function(RR) {
-           const JR = RR.slice(1),
-             GR = JR.indexOf("?");
-           return 0 > GR ? {
-             head: JR,
-             tail: null
-           } : {
-             head: JR.slice(0, GR),
-             tail: JR.slice(GR + 1)
-           }
-         }(uR.hash);
-       if (JZ(ZR) || JZ(iR.head) || JZ(null !== (GR = iR.tail) && void 0 !== GR ? GR : "")) return gu + tR;
-       let fR = !1;
-       (uR.username || uR.password) && (uR.username = gu, uR.password = "", fR = !0);
- ... (58 more removed lines; see GitHub link above)
+       countLabel(rr, Sr) {
+         var Qr;
+         void 0 !== rr && this.inFlightLabels.set(rr, (null !== (Qr = this.inFlightLabels.get(rr)) && void 0 !== Qr ? Qr : 0) + Sr)
```

#### 68. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1600-L1617` → after: `L645-L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L645-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L645-L648) · [Before (L1600-L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L1600-L1617)

```diff
-       return JR % 10 == 0
-     }
- 
-     function KZ(RR) {
-       const JR = [];
-       for (let uR = Tu.exec(RR); null !== uR; uR = Tu.exec(RR)) JR.push({
-         digits: uR[0],
-         start: uR.index,
-         end: uR.index + uR[0].length
-       });
-       let GR = "",
-         yR = 0,
-         tR = 0;
-       for (; JR.length > tR;) {
-         let uR = "",
-           ZR = -1;
- ... (2 more removed lines; see GitHub link above)
+       beaconSent(rr, Sr) {
+         return rr && (this.inFlightBytes += Sr, setTimeout((() => {
+           this.inFlightBytes -= Sr
+         }), 1e4)), rr
```

#### 69. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1621-L1623` → after: `L651-L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L651-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L651-L660) · [Before (L1621-L1623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L1621-L1623)

```diff
-     const wZ = {}.propertyIsEnumerable;
- 
-     function rZ(RR, JR) {
+   },
+   41405: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       e: () => jr
+     });
+     var Zr = Qr(41387),
+       Wr = Qr(1267);
+     const ar = 6e4;
+     async function jr(rr, Sr) {
+       const Qr = JSON.stringify(Sr);
```

#### 70. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1625-L1726` → after: `L662-L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L662-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L662-L674) · [Before (L1625-L1726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L1625-L1726)

```diff
-         return LZ(RR, JR, {
-           ancestors: new WeakSet,
-           remainingNodes: 1e4
-         }, 0)
-       } catch (RR) {
-         return []
-       }
-     }
- 
-     function eZ(RR, JR, GR, yR) {
-       if (0 >= GR.remainingNodes) return {
-         stringValue: Jt
-       };
-       if (GR.remainingNodes--, OG(RR)) return {
-         boolValue: RR
-       };
- ... (86 more removed lines; see GitHub link above)
+         const Sr = await Zr.g.fetch(rr, {
+           method: "POST",
+           headers: {
+             "Content-Type": "application/json"
+           },
+           body: Qr,
+           signal: (0, Wr.o)(ar)
+         }, (0, Zr.i)(Qr));
+         return await async function(rr) {
+           if (!rr.ok) return 413 === rr.status ? "refused" : "retryLater";
+           const Sr = await rr.json();
+           return "rejected" in Sr ? (console.warn(`Session replay manifest refused: ${Sr.reason}`), Sr.retryable ? "retryLater" : "refused") : "uploaded"
+         }(Sr)
```

#### 71. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1728-L1730` → after: `L676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L676) · [Before (L1728-L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L1728-L1730)

```diff
-         tR.push({
-           stringValue: Gt
-         })
+         return console.warn("Session replay manifest upload failed.", jr), "retryLater"
```

#### 72. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1779` → after: `L679-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L679-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L679-L688) · [Before (L1779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L1779)

```diff
-     const UZ = ["service.name", "deployment.environment", "service.version", "telemetry.sdk.name", "telemetry.sdk.version"];
+   },
+   41413: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       b: () => Ir,
+       c: () => fr
+     });
+     var Zr = Qr(41387);
+     const Wr = 16384,
+       ar = 100,
+       jr = (0, Zr.i)(',"domSegments":[]');
```

#### 73. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1782-L1820` → after: `L691-L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L691-L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L691-L712) · [Before (L1782-L1820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L1782-L1820)

```diff
-       const GR = tt({}, RR),
-         yR = {};
-       for (const tR of UZ)({}).hasOwnProperty.call(GR, tR) && (yR[tR] = GR[tR], delete GR[tR]);
-       return [...rZ(GR, JR), ...rZ(yR, JR)]
-     }
-     const AZ = {
-         darwin: "macOS",
-         win32: "Windows",
-         cygwin: "Windows",
-         linux: "Linux",
-         android: "Android",
-         freebsd: "FreeBSD",
-         openbsd: "OpenBSD",
-         netbsd: "NetBSD",
-         sunos: "SunOS",
-         aix: "AIX",
- ... (23 more removed lines; see GitHub link above)
+       let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Wr;
+       const {
+         domSegments: Ir,
+         ...fr
+       } = rr.manifest, Er = () => ({
+         ...rr,
+         manifest: {
+           ...fr,
+           videoSegments: [],
+           telemetrySegments: [],
+           games: []
+         },
+         creatorGrants: []
+       }), pr = (0, Zr.i)(JSON.stringify(Er())), xr = [];
+       let mr = {
+           request: Er(),
+ ... (6 more added lines; see GitHub link above)
```

#### 74. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1822-L1832` → after: `L714-L749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L714-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L714-L749) · [Before (L1822-L1832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L1822-L1832)

```diff
-         fatal: {
-           text: "FATAL",
-           number: 21
-         }
-       },
-       XZ = CZ.info;
- 
-     function MZ(RR) {
-       try {
-         return yt(String(RR))
-       } catch (RR) {
+         tr = (rr, Sr, Qr) => Qr + (rr.length > 0 ? 1 : "domSegments" === Sr.list ? jr : 0);
+       for (const Wr of Sr) {
+         const rr = (0, Zr.i)(JSON.stringify(Wr.value));
+         let Sr = Ur(mr.request, Wr.list);
+         mr.items.length > 0 && (Nr + tr(Sr, Wr, rr) > Qr || Sr.length >= ar) && (xr.push(mr), mr = {
+           request: Er(),
+           items: []
+         }, Nr = pr, Sr = Ur(mr.request, Wr.list)), Nr += tr(Sr, Wr, rr), "domSegments" === Wr.list && (mr.request.manifest.domSegments = Sr), Sr.push(Wr.value), mr.items.push(Wr)
+       }
+       return xr.push(mr), xr
+     }
+ 
+     function fr(rr) {
+       let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wr;
+       return Ir(rr, function(rr) {
+         var Sr;
+ ... (20 more added lines; see GitHub link above)
```

#### 75. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1837-L1871` → after: `L777-L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L777-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L777-L780) · [Before (L1837-L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L1837-L1871)

```diff
-     function BZ(RR, JR, GR, yR) {
-       const tR = RR.level || "info",
-         {
-           text: uR,
-           number: ZR
-         } = CZ[tR] || XZ,
-         qR = function() {
-           let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
-           return String(RR) + "000000"
-         }(bG(yR) ? yR : void 0),
-         iR = {};
-       JR.distinctId && (iR.posthogDistinctId = JR.distinctId), JR.sessionId && (iR.sessionId = JR.sessionId), JR.windowId && (iR["window.id"] = JR.windowId), gG(JR.sessionStartTimestamp) || (iR.sessionStartTimestamp = String(JR.sessionStartTimestamp)), gG(JR.lastActivityTimestamp … [truncated]
-       const fR = Wt({}, iR),
-         VR = RR.attributes;
-       if (VR) {
-         let RR = [];
- ... (19 more removed lines; see GitHub link above)
+     function jr(rr) {
+       return {
+         count: Math.ceil(rr.segmentDurationMs / rr.partDurationMs) + 1,
+         maxBytes: Math.ceil(1.5 * rr.bitrate / 8 * (rr.partDurationMs / 1e3)) + 32768
```

#### 76. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1885-L12783` → after: `L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/283.js#L783) · [Before (L1885-L12783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/283.js#L1885-L12783)

```diff
- 
-     function lZ(RR, JR, GR) {
-       return nZ(RR, JR, GR)
-     }
- 
-     function pZ(RR, JR, GR, yR) {
-       return {
-         resourceLogs: [{
-           resource: {
-             attributes: WZ(JR)
-           },
-           scopeLogs: [{
-             scope: {
-               name: GR,
-               version: yR
-             },
- ... (10883 more removed lines; see GitHub link above)
+     const Ir = 432e5
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/284.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/284.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887)

#### 1. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/284.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/284.js#L4-L6)

```diff
-   41339: (RR, JR, GR) => {
-     GR.r(JR), GR.d(JR, {
-       playDocsSound: () => iR
+   41464: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       c: () => zE,
+       f: () => FN
```

#### 2. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L8-L12` → after: `L9-L895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L9-L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/284.js#L9-L895) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/284.js#L8-L12)

```diff
-     var yR = GR(5742),
-       tR = GR(37470),
-       uR = GR(1282),
-       ZR = GR(37479);
-     const qR = new Map;
+     const Zr = "0.9.4",
+       Wr = {
+         DEBUG: !1,
+         LIB_VERSION: "1.438.7",
+         LIB_NAME: "web",
+         JS_SDK_VERSION: Zr
+       };
+     var ar = Wr;
+     const jr = "$early_access_features",
+       Ir = "$active_feature_flags",
+       fr = "$feature_flag_details",
+       Er = "$feature_flag_errors",
+       pr = "$feature_flag_evaluated_at",
+       xr = "$feature_flag_request_id",
+       mr = "$minimal_flag_called_events",
+       Nr = "$enabled_feature_flags",
+ ... (871 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L15-L19` → after: `L898-L1368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L898-L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/284.js#L898-L1368) · [Before (L15-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/284.js#L15-L19)

```diff
-       let VR, KR = 0;
-       if (JR) VR = new yR.Howl({
-         src: [`${uR.clientSideServerUrls.staticUrl}/sounds/music/${RR}.mp3`],
-         html5: !0,
-         volume: GR
+       const ar = {
+         platform: rr,
+         filename: Sr,
+         function: "<anonymous>" === Qr ? "?" : Qr,
+         in_app: lW(Sr)
+       };
+       return BQ(Zr) || (ar.lineno = Zr), BQ(Wr) || (ar.colno = Wr), ar
+     }
+     const PW = (rr, Sr) => {
+         const Qr = -1 !== rr.indexOf("safari-extension"),
+           Zr = -1 !== rr.indexOf("safari-web-extension");
+         return Qr || Zr ? [-1 !== rr.indexOf("@") ? rr.split("@")[0] : "?", Qr ? `safari-extension:${Sr}` : `safari-web-extension:${Sr}`] : [rr, Sr]
+       },
+       HW = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
+       qW = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
+       RW = /\((\S*)(?::(\d+))(?::(\d+))\)/,
+ ... (455 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L21-L32` → after: `L1370-L1517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1370-L1517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/284.js#L1370-L1517) · [Before (L21-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/284.js#L21-L32)

```diff
-       else {
-         const JR = (0, tR.v)(RR);
-         KR = JR.ms / 1e3, VR = qR.get(RR), VR || (VR = new yR.Howl({
-           src: [...JR.src],
-           volume: 1
-         }), qR.set(RR, VR))
-       }
-       const wR = JR ? VR.play() : VR.play(ZR.d);
-       VR.volume(GR, wR), iR > 0 && VR.seek(iR, wR);
-       const rR = () => {
-         const RR = VR.duration();
-         return JR || RR > 0 ? RR : KR
+     var Ba;
+ 
+     function Ta() {
+       return Ta = wQ((function*(rr) {
+         let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
+           Qr = arguments.length > 2 ? arguments[2] : void 0;
+         try {
+           const Sr = (new TextEncoder).encode(rr),
+             Qr = new globalThis.CompressionStream("gzip"),
+             Wr = Qr.writable.getWriter(),
+             ar = Wr.write(Sr).then((() => Wr.close())).catch((Zr = wQ((function*(rr) {
+               try {
+                 yield Wr.abort(rr)
+               } catch (rr) {}
+               throw rr
+             })), function(rr) {
+ ... (132 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L35-L48` → after: `L1540-L1686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1540-L1686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/284.js#L1540-L1686) · [Before (L35-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/284.js#L35-L48)

```diff
-       const aR = RR => {
-           eR || (eR = !0, VR.off("play", LR, wR), VR.off("end", nR, wR), VR.off("loaderror", WR), VR.off("playerror", UR, wR), JR && VR.unload(), fR.onEnd(RR))
-         },
-         LR = () => {
-           fR.onPlay(rR())
-         },
-         nR = () => {
-           aR(!1)
-         },
-         UR = (JR, GR) => {
-           console.error(`Could not play docs sound ${RR}`, GR), aR(!0)
-         },
-         WR = (GR, yR) => {
-           JR || qR.get(RR) !== VR || (qR.delete(RR), VR.unload()), UR(GR, yR)
+       (ar.username || ar.password) && (ar.username = Oa, ar.password = "", Er = !0);
+       const pr = Qj(jr, Sr.allowNestedUrls);
+       pr.changed && (ar.search = pr.serialized, Er = !0);
+       const xr = Zj(fr.head, Sr.allowNestedUrls),
+         mr = null === fr.tail ? null : (Nr = fr.tail, xr.lastFieldSensitive ? {
+           value: "" === Nr ? "" : Oa,
+           lastFieldSensitive: !0
+         } : Zj(Nr, Sr.allowNestedUrls));
+       var Nr;
+       const Ur = null === mr ? xr.value : `${xr.value}?${mr.value}`;
+       Ur !== ar.hash.slice(1) && (ar.hash = Ur, Er = !0);
+       const tr = Ir ? null != mr ? mr : xr : pr;
+       return (Er ? fj(ar.toString()) : Zr) + (tr.lastFieldSensitive ? "" : Wr)
+     }
+ 
+     function Ij(rr, Sr) {
+ ... (131 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L50-L52` → after: `L1688-L1804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1688-L1804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/284.js#L1688-L1804) · [Before (L50-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/284.js#L50-L52)

```diff
-       return VR.on("play", LR, wR), VR.once("end", nR, wR), VR.once("loaderror", WR), VR.once("playerror", UR, wR), {
-         pause: () => {
-           VR.pause(wR)
+         if (rr instanceof Date) {
+           const Sr = rr.getTime(),
+             Qr = Number.isFinite(Sr) ? rr.toISOString() : String(rr);
+           return {
+             stringValue: "string" == typeof Qr ? ZW(Qr) : String(Qr)
+           }
+         }
+         Qr.ancestors.add(rr);
+         try {
+           try {
+             const Wr = rr.toJSON;
+             if ("function" == typeof Wr) return Nj(Wr.call(rr), Sr, Qr, Zr + 1)
+           } catch (rr) {}
+           return nQ(rr) ? {
+             arrayValue: {
+               values: Uj(rr, Sr, Qr, Zr + 1)
+ ... (101 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L54-L55` → after: `L1806-L1808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1806-L1808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/284.js#L1806-L1808) · [Before (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/284.js#L54-L55)

```diff
-         resume: () => {
-           VR.play(wR)
+         debug: {
+           text: "DEBUG",
+           number: 5
```

#### 8. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L57-L60` → after: `L1810-L1812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1810-L1812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/284.js#L1810-L1812) · [Before (L57-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/284.js#L57-L60)

```diff
-         seek: RR => {
-           const JR = rR(),
-             GR = Math.max(RR, 0);
-           VR.seek(JR > 0 ? Math.min(GR, JR) : GR, wR)
+         info: {
+           text: "INFO",
+           number: 9
```

#### 9. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L62-L64` → after: `L1814-L1816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1814-L1816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/284.js#L1814-L1816) · [Before (L62-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/284.js#L62-L64)

```diff
-         vW: () => {
-           const RR = VR.seek(wR);
-           return "number" === typeof RR ? Math.max(0, RR) : 0
+         warn: {
+           text: "WARN",
+           number: 13
```

#### 10. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L66-L68` → after: `L1818-L1820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1818-L1820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/284.js#L1818-L1820) · [Before (L66-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/284.js#L66-L68)

```diff
-         getDuration: rR,
-         setVolume: RR => {
-           VR.volume(RR, wR)
+         error: {
+           text: "ERROR",
+           number: 17
```

#### 11. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L70-L71` → after: `L1822-L1824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1822-L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/284.js#L1822-L1824) · [Before (L70-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/284.js#L70-L71)

```diff
-         stop: () => {
-           eR || (VR.stop(wR), aR(!1))
+         fatal: {
+           text: "FATAL",
+           number: 21
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/285.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/285.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2)

#### 1. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/285.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/285.js#L4)

```diff
-   41345: (RR, JR, GR) => {
+   41704: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/285.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/285.js#L6)

```diff
-       default: () => kR
+       playDocsSound: () => fr
```

#### 3. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L8-L66` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/285.js#L8-L12) · [Before (L8-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/285.js#L8-L66)

```diff
-     GR(7570);
-     var yR = GR(66),
-       tR = GR(41352),
-       uR = GR(41610),
-       ZR = GR(41719),
-       qR = GR(41768),
-       iR = GR(41781),
-       fR = GR(38329),
-       VR = GR(38195),
-       KR = GR(41932),
-       wR = GR(41987),
-       rR = (GR(42014), GR(1317)),
-       eR = GR(203),
-       aR = GR(1270),
-       LR = GR(25),
-       nR = GR(3909),
- ... (43 more removed lines; see GitHub link above)
+     var Zr = Qr(5681),
+       Wr = Qr(37851),
+       ar = Qr(1262),
+       jr = Qr(37853);
+     const Ir = new Map;
```

#### 4. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L68-L130` → after: `L14-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L14-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/285.js#L14-L32) · [Before (L68-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/285.js#L68-L130)

```diff
-     function kR(RR) {
-       let {
-         heatmap: JR,
-         scale: GR,
-         fullyOpaqueFrom: NR,
-         bounds: PR,
-         fitBounds: IR,
-         schematic: mR,
-         controls: zR,
-         onStepTime: SR,
-         onShowAllTime: jR,
-         onTogglePlaying: dR,
-         getReadout: YR = null
-       } = RR;
-       const {
-         t: kR
- ... (47 more removed lines; see GitHub link above)
+     function fr(rr, Sr, Qr, fr, Er) {
+       let pr, xr = 0;
+       if (Sr) pr = new Zr.Howl({
+         src: [`${ar.clientSideServerUrls.staticUrl}/sounds/music/${rr}.mp3`],
+         html5: !0,
+         volume: Qr
+       });
+       else {
+         const Sr = (0, Wr.r)(rr);
+         xr = Sr.ms / 1e3, pr = Ir.get(rr), pr || (pr = new Zr.Howl({
+           src: [...Sr.src],
+           volume: 1
+         }), Ir.set(rr, pr))
+       }
+       const mr = Sr ? pr.play() : pr.play(jr.e);
+       pr.volume(Qr, mr), fr > 0 && pr.seek(fr, mr);
+ ... (3 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L132-L249` → after: `L34-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L34-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/285.js#L34-L71) · [Before (L132-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/285.js#L132-L249)

```diff
-       const mJ = (0, yR.useMemo)((() => {
-           if (!CJ) return null;
-           const RR = (RR, GR, yR) => {
-               var tR, uR, ZR;
-               return null !== (tR = null === (uR = JR.frequencies[RR + bJ[0]]) || void 0 === uR || null === (ZR = uR[GR + bJ[1]]) || void 0 === ZR ? void 0 : ZR[yR + bJ[2]]) && void 0 !== tR ? tR : 0
-             },
-             yR = function(RR, JR, GR, yR) {
-               let tR = 0,
-                 uR = 1 / 0;
-               for (const KR of [0, 1, 2]) {
-                 if (0 === JR[KR]) {
-                   if (RR[KR] < 0 || RR[KR] > GR[KR]) return null;
-                   continue
-                 }
-                 const yR = (0 - RR[KR]) / JR[KR],
-                   ZR = (GR[KR] - RR[KR]) / JR[KR];
- ... (102 more removed lines; see GitHub link above)
+       let Ur = !1;
+       const tr = rr => {
+           Ur || (Ur = !0, pr.off("play", hr, mr), pr.off("end", zr, mr), pr.off("loaderror", nr), pr.off("playerror", Yr, mr), Sr && pr.unload(), Er.onEnd(rr))
+         },
+         hr = () => {
+           Er.onPlay(Nr())
+         },
+         zr = () => {
+           tr(!1)
+         },
+         Yr = (Sr, Qr) => {
+           console.error(`Could not play docs sound ${rr}`, Qr), tr(!0)
+         },
+         nr = (Qr, Zr) => {
+           Sr || Ir.get(rr) !== pr || (Ir.delete(rr), pr.unload()), Yr(Qr, Zr)
+         };
+ ... (22 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/286.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/286.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469)

#### 1. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/286.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/286.js#L4-L7)

```diff
-   41732: (RR, JR, GR) => {
-     GR.d(JR, {
-       b: () => LR,
-       d: () => WR
+   41717: (rr, Sr, Qr) => {
+     Qr.r(Sr), Qr.d(Sr, {
+       default: () => br
```

#### 2. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L9-L6585` → after: `L8-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L8-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/286.js#L8-L136) · [Before (L9-L6585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/286.js#L9-L6585)

```diff
-     var yR = GR(41520),
-       tR = GR(41524),
-       uR = GR(41626),
-       ZR = GR(38233),
-       qR = GR(38204),
-       iR = GR(41741),
-       fR = GR(39914),
-       VR = GR(38253),
-       KR = GR(41407),
-       wR = GR(39248),
-       rR = GR(38928),
-       eR = GR(41483),
-       aR = GR(41542);
-     let LR = (() => {
-       var RR;
-       let JR, GR, VR, LR, nR, UR, WR, AR, CR, XR, MR, BR, lR, pR, gR, bR, vR, OR, xR = iR.d,
- ... (6561 more removed lines; see GitHub link above)
+     Qr(7402);
+     var Zr = Qr(72),
+       Wr = Qr(41725),
+       ar = Qr(41934),
+       jr = Qr(42047),
+       Ir = Qr(42085),
+       fr = Qr(42100),
+       Er = Qr(38679),
+       pr = Qr(38555),
+       xr = Qr(42236),
+       mr = Qr(42295),
+       Nr = (Qr(42318), Qr(1279)),
+       Ur = Qr(208),
+       tr = Qr(1251),
+       hr = Qr(26),
+       zr = Qr(3855),
+ ... (113 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L6587-L6608` → after: `L138-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L138-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/286.js#L138-L407) · [Before (L6587-L6608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/286.js#L6587-L6608)

```diff
-             JR = RR(uR.l.PositionKind, this.positions),
-             GR = (GR, yR) => {
-               const tR = RR(GR, yR);
-               if (tR !== JR) throw new Error("The " + GR + "s element count (" + tR + ") does not match the positions count (" + JR + ")")
-             };
-           this.normals && GR(uR.l.NormalKind, this.normals), this.tangents && GR(uR.l.TangentKind, this.tangents), this.uvs && GR(uR.l.UVKind, this.uvs), this.uvs2 && GR(uR.l.UV2Kind, this.uvs2), this.uvs3 && GR(uR.l.UV3Kind, this.uvs3), this.uvs4 && GR(uR.l.UV4Kind, this.uvs4),  … [truncated]
-         }
-         clone() {
-           const JR = this.serialize();
-           return RR.Parse(JR)
-         }
-         serialize() {
-           const RR = {};
-           if (this.positions && (RR.positions = Array.from(this.positions)), this.normals && (RR.normals = Array.from(this.normals)), this.tangents && (RR.tangents = Array.from(this.tangents)), this.uvs && (RR.uvs = Array.from(this.uvs)), this.uvs2 && (RR.uvs2 = Array.from(this.u … [truncated]
-             RR.materialInfos = [];
-             for (const JR of this.materialInfos) {
- ... (6 more removed lines; see GitHub link above)
+             Zr = function(rr, Sr, Qr, Zr) {
+               let Wr = 0,
+                 ar = 1 / 0;
+               for (const xr of [0, 1, 2]) {
+                 if (0 === Sr[xr]) {
+                   if (rr[xr] < 0 || rr[xr] > Qr[xr]) return null;
+                   continue
+                 }
+                 const Zr = (0 - rr[xr]) / Sr[xr],
+                   jr = (Qr[xr] - rr[xr]) / Sr[xr];
+                 Wr = Math.max(Wr, Math.min(Zr, jr)), ar = Math.min(ar, Math.max(Zr, jr))
+               }
+               if (Wr > ar) return null;
+               const jr = [0, 1, 2].map((Zr => Math.min(Qr[Zr] - 1, Math.max(0, Math.floor(rr[Zr] + Sr[Zr] * Wr))))),
+                 Ir = [0, 1, 2].map((rr => Math.sign(Sr[rr]))),
+                 fr = [0, 1, 2].map((Qr => {
+ ... (254 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L6610-L6801` → after: `L409-L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L409-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/286.js#L409-L490) · [Before (L6610-L6801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/286.js#L6610-L6801)

```diff
-               RR.materialInfos.push(GR)
-             }
-           }
-           return RR
-         }
-         static ExtractFromMesh(JR, GR, yR) {
-           return RR._ExtractFrom(JR, GR, yR)
-         }
-         static ExtractFromGeometry(JR, GR, yR) {
-           return RR._ExtractFrom(JR, GR, yR)
-         }
-         static _ExtractFrom(JR, GR, yR) {
-           const tR = new RR;
-           if (JR.isVerticesDataPresent(uR.l.PositionKind) && (tR.positions = JR.getVerticesData(uR.l.PositionKind, GR, yR)), JR.isVerticesDataPresent(uR.l.NormalKind) && (tR.normals = JR.getVerticesData(uR.l.NormalKind, GR, yR)), JR.isVerticesDataPresent(uR.l.TangentKind) && (tR. … [truncated]
-             const RR = JR.geometry || JR,
-               ZR = RR.getVertexBuffer(uR.l.ColorKind),
- ... (176 more removed lines; see GitHub link above)
+             LS(QS(CS, gS, RS, Qr))
+           },
+           onTurn: (rr, Sr) => {
+             LS((Qr => function(rr, Sr, Qr, Zr) {
+               return ZS(rr, Sr, {
+                 heading: rr.heading + Qr * Fr,
+                 pitch: Math.max(-Mr, Math.min(Mr, rr.pitch + Zr * Fr))
+               })
+             }(null !== Qr && void 0 !== Qr ? Qr : kS.current.fittedView, WS(CS), rr, Sr)))
+           },
+           onFlip: () => {
+             LS((rr => function(rr, Sr) {
+               return ZS(rr, Sr, {
+                 heading: rr.heading + Math.PI,
+                 pitch: -rr.pitch
+               })
+ ... (66 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L6803-L6874` → after: `L492-L557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L492-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/286.js#L492-L557) · [Before (L6803-L6874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/286.js#L6803-L6874)

```diff
-           return GR
-         }
-         static ImportVertexData(JR, GR) {
-           const yR = RR.Parse(JR);
-           GR.setAllVerticesData(yR, JR.updatable)
-         }
-       }, (() => {
-         const tR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         JR = [fR.f.filter((function() {
-           return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
-         }))], GR = [fR.f.filter((function() {
-           return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
-         }))], eR = [fR.f.filter((function() {
-           return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
-         }))], aR = [fR.f.filter((function() {
-           return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
- ... (56 more removed lines; see GitHub link above)
+         },
+         onPointerMove: rr => {
+           const Sr = fr.current;
+           if (null === Sr || Sr.pointerId !== rr.pointerId) return;
+           const Qr = rr.clientX - Sr.x,
+             Zr = rr.clientY - Sr.y;
+           Sr.x = rr.clientX, Sr.y = rr.clientY, Sr.travel += Math.abs(Qr) + Math.abs(Zr), Sr.travel >= or && ar(Qr, Zr)
+         },
+         onPointerUp: rr => {
+           const Sr = fr.current;
+           fr.current = null, null === Sr || Sr.pointerId !== rr.pointerId || Sr.travel >= or || (null !== Sr.side ? Wr(Sr.side) : Sr.isOnMiddle && jr())
+         },
+         onPointerCancel: () => {
+           fr.current = null
+         },
+         children: [Nr.map(((rr, Sr) => {
+ ... (50 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L6877-L6878` → after: `L560-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L560-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/286.js#L560-L582) · [Before (L6877-L6878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/286.js#L6877-L6878)

```diff
-       const JR = RR.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
-       return JR instanceof Float32Array || JR instanceof Uint16Array
+       var Sr, Qr, Zr;
+       const {
+         chunkGridOrigin: Wr,
+         camera: ar
+       } = rr;
+       if (null === Wr) return;
+       const jr = [ar.position.x, ar.position.y, ar.position.z],
+         Ir = [0, 2].map((rr => Math.floor((jr[rr] + Wr[rr]) / Ur.i.hx))),
+         fr = rr.chunkGridCentre;
+       if (null !== fr && fr.every(((rr, Sr) => rr === Ir[Sr]))) return;
+       const xr = null === (Sr = null === (Qr = rr.chunkGrid) || void 0 === Qr ? void 0 : Qr.isVisible) || void 0 === Sr || Sr;
+       null === (Zr = rr.chunkGrid) || void 0 === Zr || Zr.dispose();
+       const [Nr, tr] = [0, 2].map(((rr, Sr) => {
+         const Qr = [];
+         for (let Zr = Ir[Sr] - Rr; Zr <= Ir[Sr] + Rr + 1; Zr++) Qr.push(Zr * Ur.i.hx - Wr[rr]);
+         return Qr
+ ... (7 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L6882-L6888` → after: `L586-L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L586-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/286.js#L586-L593) · [Before (L6882-L6888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/286.js#L6882-L6888)

```diff
-       GR.NRR(Number.POSITIVE_INFINITY), yR.NRR(Number.NEGATIVE_INFINITY);
-       for (let tR = 0; tR < 3 * JR; tR += 3) {
-         const JR = RR[tR],
-           uR = RR[tR + 1],
-           ZR = RR[tR + 2];
-         JR < GR.x && (GR.x = JR), uR < GR.y && (GR.y = uR), ZR < GR.z && (GR.z = ZR), JR > yR.x && (yR.x = JR), uR > yR.y && (yR.y = uR), ZR > yR.z && (yR.z = ZR)
-       }
+       rr.vrr("matrix", function(rr, Sr) {
+         const Qr = new Float32Array(16 * Sr);
+         for (let Zr = 0; Zr < Sr; Zr++) {
+           const Sr = 16 * Zr;
+           Qr[Sr] = 1, Qr[Sr + 5] = 1, Qr[Sr + 10] = 1, Qr[Sr + 12] = rr[3 * Zr], Qr[Sr + 13] = rr[3 * Zr + 1], Qr[Sr + 14] = rr[3 * Zr + 2], Qr[Sr + 15] = 1
+         }
+         return Qr
+       }(Sr, Zr), 16, !0), rr.vrr("color", Qr, 4, !0), rr.isVisible = Zr > 0
```

#### 8. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L6891-L6892` → after: `L596-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L596-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/286.js#L596-L616) · [Before (L6891-L6892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/286.js#L6891-L6892)

```diff
-     function KR(RR, JR, GR) {
-       GR && (RR.x -= RR.x * GR.x + GR.y, RR.y -= RR.y * GR.x + GR.y, RR.z -= RR.z * GR.x + GR.y, JR.x += JR.x * GR.x + GR.y, JR.y += JR.y * GR.x + GR.y, JR.z += JR.z * GR.x + GR.y)
+     function sr(rr) {
+       const {
+         camera: Sr,
+         translucent: Qr
+       } = rr, Zr = [Sr.position.x, Sr.position.y, Sr.position.z], Wr = rr.translucentSortedFrom;
+       if (null !== Wr && Math.hypot(Zr[0] - Wr[0], Zr[1] - Wr[1], Zr[2] - Wr[2]) < qr) return;
+       rr.translucentSortedFrom = Zr;
+       const ar = new Float64Array(Qr.count),
+         jr = new Uint32Array(Qr.count);
+       for (let Er = 0; Er < Qr.count; Er++) {
+         const rr = Qr.Uh[3 * Er] - Zr[0],
+           Sr = Qr.Uh[3 * Er + 1] - Zr[1],
+           Wr = Qr.Uh[3 * Er + 2] - Zr[2];
+         ar[Er] = rr * rr + Sr * Sr + Wr * Wr, jr[Er] = Er
+       }
+       jr.sort(((rr, Sr) => ar[Sr] - ar[rr]));
+ ... (5 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L6895-L6900` → after: `L619-L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L619-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/286.js#L619-L624) · [Before (L6895-L6900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/286.js#L6895-L6900)

```diff
-     function wR(RR, JR, GR, tR, uR) {
-       const ZR = yR.l.Fe[7],
-         qR = yR.l.Fe[8];
-       for (let iR = 0; iR < 2; ++iR)
-         for (let fR = 0; fR < 2; ++fR)
-           for (let VR = 0; VR < 2; ++VR) ZR.set(iR ? JR.x : RR.x, fR ? JR.y : RR.y, VR ? JR.z : RR.z), yR.r.TransformCoordinatesToRef(ZR, GR, qR), tR.minimizeInPlace(qR), uR.maximizeInPlace(qR)
+     function ur(rr, Sr) {
+       const Qr = (Qr, Zr, Wr) => new pr.kU(0 === Qr ? rr[0] : Sr[0], 0 === Zr ? rr[1] : Sr[1], 0 === Wr ? rr[2] : Sr[2]),
+         Zr = [];
+       for (const Wr of [0, 1])
+         for (const rr of [0, 1]) Zr.push([Qr(0, Wr, rr), Qr(1, Wr, rr)], [Qr(Wr, 0, rr), Qr(Wr, 1, rr)], [Qr(Wr, rr, 0), Qr(Wr, rr, 1)]);
+       return Zr
```

#### 10. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L6903-L6905` → after: `L627-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L627-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/286.js#L627-L632) · [Before (L6903-L6905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/286.js#L6903-L6905)

```diff
-     function rR(RR, JR, GR, tR, uR) {
-       const ZR = yR.l.Fe[7];
-       for (let qR = 0; qR < 3 * JR; qR += 3) yR.r.TransformCoordinatesFromFloatsToRef(RR[qR], RR[qR + 1], RR[qR + 2], GR, ZR), tR.minimizeInPlace(ZR), uR.maximizeInPlace(ZR)
+     function rS(rr) {
+       return [Math.sin(rr.heading) * Math.cos(rr.pitch), -Math.sin(rr.pitch), Math.cos(rr.heading) * Math.cos(rr.pitch)]
+     }
+ 
+     function SS(rr) {
+       return [Math.cos(rr), 0, -Math.sin(rr)]
```

#### 11. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7675-L7682` → after: `L636-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L636-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/286.js#L636-L657) · [Before (L7675-L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/286.js#L7675-L7682)

```diff
-       const yR = fR.c.Parse((() => new aR(RR.name, JR)), RR, JR, GR);
-       if (RR.localMatrix ? yR.setPreTransformMatrix(KR.e.FromArray(RR.localMatrix)) : RR.pivotMatrix && yR.setPivotMatrix(KR.e.FromArray(RR.pivotMatrix)), yR.JA(RR.isEnabled), yR._waitingParsedUniqueId = RR.uniqueId, void 0 !== RR.parentId && (yR._waitingParentId = RR.parentId),  … [truncated]
-         for (let JR = 0; JR < RR.animations.length; JR++) {
-           const GR = RR.animations[JR],
-             tR = (0, rR.e)("BABYLON.Animation");
-           tR && yR.animations.push(tR.Parse(GR))
-         }
-         wR.d.ParseAnimationRanges(yR, RR, JR)
+       let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
+         heading: Gr,
+         pitch: kr
+       };
+       const Wr = [rr.max[0] - rr.min[0], rr.max[1] - rr.min[1], rr.max[2] - rr.min[2]],
+         ar = rS(Zr),
+         jr = SS(Zr.heading),
+         Ir = ES(ar, jr),
+         fr = Math.tan(Qr / 2),
+         Er = fr * Sr;
+       let pr = 1;
+       for (const xr of [-Wr[0] / 2, Wr[0] / 2])
+         for (const rr of [-Wr[1] / 2, Wr[1] / 2])
+           for (const Sr of [-Wr[2] / 2, Wr[2] / 2]) {
+             const Qr = [xr, rr, Sr],
+               Zr = fS(Qr, ar);
+ ... (6 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7694-L7700` → after: `L662-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L662-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/286.js#L662-L669) · [Before (L7694-L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/286.js#L7694-L7700)

```diff
-       try {
-         const yR = RR.next();
-         yR.done ? JR(yR) : yR.value ? yR.value.then((() => {
-           yR.value = void 0, JR(yR)
-         }), GR) : JR(yR)
-       } catch (yR) {
-         GR(yR)
+       const Zr = aS(rr),
+         Wr = aS(Qr),
+         ar = jS(rr.position, IS(Sr, -1)),
+         jr = [0, 1, 2].reduce(((rr, Sr) => jS(rr, IS(Wr[Sr], fS(ar, Zr[Sr])))), [0, 0, 0]);
+       return {
+         position: jS(Sr, jr),
+         heading: Qr.heading,
+         pitch: Qr.pitch
```

#### 13. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7704-L7711` → after: `L673-L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L673-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/286.js#L673-L674) · [Before (L7704-L7711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/286.js#L7704-L7711)

```diff
-     function tR() {
-       let RR, JR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
-       return (GR, tR, uR) => {
-         const ZR = performance.now();
-         void 0 === RR || ZR - RR > JR ? (RR = ZR, setTimeout((() => {
-           yR(GR, tR, uR)
-         }), 0)) : yR(GR, tR, uR)
-       }
+     function WS(rr) {
+       return IS(jS(rr.min, rr.max), .5)
```

#### 14. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7714-L7724` → after: `L677-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L677-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/286.js#L677-L684) · [Before (L7714-L7724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/286.js#L7714-L7724)

```diff
-     function uR(RR, JR, GR, yR, tR) {
-       const uR = () => {
-         let ZR;
-         const qR = RR => {
-           RR.done ? GR(RR.value) : void 0 === ZR ? ZR = !0 : uR()
-         };
-         do {
-           ZR = void 0, tR && tR.aborted ? yR(new Error("Aborted")) : JR(RR, qR, yR), void 0 === ZR && (ZR = !1)
-         } while (ZR)
-       };
-       uR()
+     function aS(rr) {
+       const Sr = rS(rr),
+         Qr = SS(rr.heading);
+       return [Sr, Qr, ES(Sr, Qr)]
+     }
+ 
+     function jS(rr, Sr) {
+       return [rr[0] + Sr[0], rr[1] + Sr[1], rr[2] + Sr[2]]
```

#### 15. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7728-L7731` → after: `L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/286.js#L688) · [Before (L7728-L7731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/286.js#L7728-L7731)

```diff
-       let GR;
-       return uR(RR, yR, (RR => GR = RR), (RR => {
-         throw RR
-       }), JR), GR
+       return [rr[0] * Sr, rr[1] * Sr, rr[2] * Sr]
```

#### 16. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7733-L7736` → after: `L690-L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L690-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/286.js#L690-L692) · [Before (L7733-L7736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/286.js#L7733-L7736)

```diff
-     async function qR(RR, JR, GR) {
-       return await new Promise(((yR, tR) => {
-         uR(RR, JR, yR, tR, GR)
-       }))
+ 
+     function fS(rr, Sr) {
+       return rr[0] * Sr[0] + rr[1] * Sr[1] + rr[2] * Sr[2]
```

#### 17. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7740-L7742` → after: `L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/286.js#L696) · [Before (L7740-L7742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/286.js#L7740-L7742)

```diff
-       return function() {
-         return ZR(RR(...arguments), JR)
-       }
+       return [rr[1] * Sr[2] - rr[2] * Sr[1], rr[2] * Sr[0] - rr[0] * Sr[2], rr[0] * Sr[1] - rr[1] * Sr[0]]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/287.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/287.js` (516 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1)

#### 1. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L4)

```diff
-   41663: (RR, JR, GR) => {
+   42057: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7-L9` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L7) · [Before (L7-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7-L9)

```diff
-       g: () => aR,
-       i: () => fR,
-       l: () => iR
+       g: () => nr
```

#### 3. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L11-L56` → after: `L9-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L9-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L9-L52) · [Before (L11-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L11-L56)

```diff
-     var yR = GR(41444),
-       tR = GR(39914),
-       uR = GR(41586),
-       ZR = GR(41491);
-     class qR {
-       get oB() {
-         return this._isDisposed
-       }
-       constructor(RR, JR, GR) {
-         let tR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
-           uR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-           qR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-           iR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-           fR = arguments.length > 7 ? arguments[7] : void 0,
-           VR = arguments.length > 8 ? arguments[8] : void 0;
-         this._isAlreadyOwned = !1, this._isDisposed = !1, (0, ZR.e)(), RR && RR.jH ? this._engine = RR.jH().ke() : this._engine = RR, this._updatable = GR, this._instanced = qR, this._divisor = fR || 1, this._label = VR, JR instanceof yR.b ? (this._data = null, this._buffer = JR) … [truncated]
- ... (30 more removed lines; see GitHub link above)
+     var Zr = Qr(41872),
+       Wr = Qr(41875),
+       ar = Qr(41960),
+       jr = Qr(38595),
+       Ir = Qr(38560),
+       fr = Qr(42060),
+       Er = Qr(40246),
+       pr = Qr(38609),
+       xr = Qr(41769),
+       mr = Qr(39607),
+       Nr = Qr(39262),
+       Ur = Qr(41843),
+       tr = Qr(41889);
+     let hr = (() => {
+       var rr;
+       let Sr, Qr, pr, hr, zr, Yr, nr, er, Kr, yr, Br, Tr, vr, Or, Lr, lr, Xr, Pr, Hr = fr.c,
+ ... (28 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L58-L119` → after: `L54-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L54-L55) · [Before (L58-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L58-L119)

```diff
-       }
-       update(RR) {
-         this.create(RR)
-       }
-       updateDirectly(RR, JR, GR) {
-         let yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-         this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, RR, yR ? JR : JR * Float32Array.BYTES_PER_ELEMENT, GR ? GR * this.byteStride : void 0), this._data = 0 === JR && void 0 === GR ? RR : null)
-       }
-       _increaseReferences() {
-         this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
-       }
-       dispose() {
-         this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
-       }
-     }
-     class iR {
- ... (46 more removed lines; see GitHub link above)
+         set position(rr) {
+           this._position = rr
```

#### 5. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L121-L278` → after: `L57-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L57-L58) · [Before (L121-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L121-L278)

```diff
-       }
-       _computeHashCode() {
-         this.hashCode = (iR._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
-       }
-       _rebuild() {
-         this._buffer?._rebuild()
-       }
-       getKind() {
-         return this._kind
-       }
-       isUpdatable() {
-         return this._buffer.isUpdatable()
-       }
-       getData() {
-         return this._buffer.getData()
-       }
- ... (142 more removed lines; see GitHub link above)
+         set upVector(rr) {
+           this._upVector = rr
```

#### 6. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L280-L286` → after: `L60-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L60-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L60-L297) · [Before (L280-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L280-L286)

```diff
-         const fR = (RR, JR) => {
-           if (-1 !== this.thinInstanceIndex) {
-             const GR = RR._thinInstanceDataStorage.matrixData,
-               tR = this.thinInstanceIndex << 4;
-             if (GR && GR.length > tR) {
-               const RR = yR.l.Matrix[0];
-               yR.e.FromArrayToRef(GR, tR, RR), yR.r.TransformNormalToRef(JR, RR, JR)
+         get upVector() {
+           return this._upVector
+         }
+         get screenArea() {
+           let Sr, Qr;
+           if (this.mode === rr.PERSPECTIVE_CAMERA) this.fovMode === rr.FOVMODE_VERTICAL_FIXED ? (Qr = 2 * this.minZ * Math.tan(this.fov / 2), Sr = this.MU().getAspectRatio(this) * Qr) : (Sr = 2 * this.minZ * Math.tan(this.fov / 2), Qr = Sr / this.MU().getAspectRatio(this));
+           else {
+             const rr = this.MU().getRenderWidth() / 2,
+               Zr = this.MU().getRenderHeight() / 2;
+             Sr = (this.orthoRight ?? rr) - (this.orthoLeft ?? -rr), Qr = (this.orthoTop ?? Zr) - (this.orthoBottom ?? -Zr)
+           }
+           return Sr * Qr
+         }
+         set orthoLeft(rr) {
+           this._orthoLeft = rr;
+           for (const Sr of this._rigCameras) Sr.orthoLeft = rr
+ ... (222 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L289-L357` → after: `L300-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L300-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L300-L302) · [Before (L289-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L289-L357)

```diff
-           let GR = RR.getWorldMatrix();
-           RR.nonUniformScaling && (yR.l.Matrix[0].vN(GR), GR = yR.l.Matrix[0], GR.setTranslationFromFloats(0, 0, 0), GR.invert(), GR.transposeToRef(yR.l.Matrix[1]), GR = yR.l.Matrix[1]), yR.r.TransformNormalToRef(JR, GR, JR)
-         };
-         if (RR && fR(this.pickedMesh, GR), this.ray) {
-           const JR = yR.l.Fe[0].vN(GR);
-           RR || fR(this.pickedMesh, JR), yR.r.Dot(JR, this.ray.direction) > 0 && GR.negateInPlace()
-         }
-         return GR.normalize(), GR
-       }
-       getTextureCoordinates() {
-         let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tR.l.UVKind;
-         if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(RR)) return null;
-         const JR = this.pickedMesh.NuR();
-         if (!JR) return null;
-         const GR = this.pickedMesh.getVerticesData(RR);
-         if (!GR) return null;
- ... (53 more removed lines; see GitHub link above)
+           let Zr = this.customRenderTargets.length;
+           for (; --Zr >= 0;) this.customRenderTargets[Zr].dispose();
+           this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.eC().MU().releaseRenderPassId(this.renderPassId), super.dispose(Sr, Qr)
```

#### 8. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L359-L680` → after: `L304-L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L304-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L304-L305) · [Before (L359-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L359-L680)

```diff
-       }
-       getMSAARenderBuffer() {
-         let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
-         return this._MSAARenderBuffers?.[RR] ?? null
-       }
-       release() {
-         this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
-       }
-     }
-   },
-   41418: (RR, JR, GR) => {
-     GR.d(JR, {
-       c: () => UR
-     });
-     var yR = GR(38233),
-       tR = GR(41382),
- ... (306 more removed lines; see GitHub link above)
+         get isLeftCamera() {
+           return this._isLeftCamera
```

#### 9. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L682-L694` → after: `L307-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L307-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L307-L308) · [Before (L682-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L682-L694)

```diff
-       }
-       _rebuildInternalTextures() {
-         const RR = this._internalTexturesCache.slice();
-         for (const JR of RR) JR._rebuild()
-       }
-       _rebuildRenderTargetWrappers() {
-         const RR = this._renderTargetWrapperCache.slice();
-         for (const JR of RR) JR.textures?.some((RR => 15 === RR.source)) || JR._rebuild()
-       }
-       _rebuildEffects() {
-         for (const RR in this._compiledEffects) {
-           const JR = this._compiledEffects[RR];
-           JR._pipelineContext = null, JR._prepareEffect()
+         get isRightCamera() {
+           return this._isRightCamera
```

#### 10. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L696-L741` → after: `L310-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L310-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L310-L311) · [Before (L696-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L696-L741)

```diff
-         tR.d.ResetCache()
-       }
-       _rebuildGraphicsResources() {
-         this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
-       }
-       _flagContextRestored() {
-         ZR.c.Warn(this.name + " context successfully restored."), this.Ye.notifyObservers(this), this._contextWasLost = !1
-       }
-       _restoreEngineAfterContextLost(RR) {
-         setTimeout((() => {
-           this._clearEmptyResources();
-           const JR = this._depthCullingState.depthTest,
-             GR = this._depthCullingState.depthFunc,
-             yR = this._depthCullingState.depthMask,
-             tR = this._stencilState.stencilTest;
-           RR(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = JR, this._depthCullingState.depthFunc = GR, this._depthCullingState.depthMask = yR, this._stencilState.stencilTest = tR, this._flagContextRestored()
- ... (30 more removed lines; see GitHub link above)
+         get leftCamera() {
+           return this._rigCameras.length < 1 ? null : this._rigCameras[0]
```

#### 11. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L743-L773` → after: `L313-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L313-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L313-L314) · [Before (L743-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L743-L773)

```diff
-         return this._emptyCubeTexture
-       }
-       set framebufferDimensionsObject(RR) {
-         this._framebufferDimensionsObject = RR
-       }
-       get activeRenderLoops() {
-         return this._activeRenderLoops
-       }
-       stopRenderLoop(RR) {
-         if (!RR) return this._activeRenderLoops.length = 0, void this._cancelFrame();
-         const JR = this._activeRenderLoops.indexOf(RR);
-         JR >= 0 && (this._activeRenderLoops.splice(JR, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
-       }
-       _cancelFrame() {
-         if (this.customAnimationFrameRequester) {
-           if (0 !== this._frameHandler) {
- ... (15 more removed lines; see GitHub link above)
+         get rightCamera() {
+           return this._rigCameras.length < 2 ? null : this._rigCameras[1]
```

#### 12. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L775-L796` → after: `L316-L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L316-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L316-L317) · [Before (L775-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L775-L796)

```diff
-       }
-       yX() {
-         this.onBeginFrameObservable.notifyObservers(this)
-       }
-       XK() {
-         this._frameId++, this.onEndFrameObservable.notifyObservers(this)
-       }
-       get maxFPS() {
-         return this._maxFPS
-       }
-       set maxFPS(RR) {
-         this._maxFPS = RR, void 0 !== RR && (this._minFrameTime = RR <= 0 ? Number.MAX_VALUE : 1e3 / RR)
-       }
-       _isOverFrameTime(RR) {
-         if (!RR || void 0 === this._maxFPS) return !1;
-         const JR = RR - this._lastFrameTime;
- ... (6 more removed lines; see GitHub link above)
+         getLeftTarget() {
+           return this._rigCameras.length < 1 ? null : this._rigCameras[0].getTarget()
```

#### 13. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L798-L804` → after: `L319-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L319-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L319-L320) · [Before (L798-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L798-L804)

```diff
-       }
-       _renderLoop(RR) {
-         this._processFrame(RR), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
-       }
-       _renderFrame() {
-         for (let RR = 0; RR < this._activeRenderLoops.length; RR++) {
-           (0, this._activeRenderLoops[RR])()
+         getRightTarget() {
+           return this._rigCameras.length < 2 ? null : this._rigCameras[1].getTarget()
```

#### 14. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L806-L930` → after: `L322-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L322-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L322-L326) · [Before (L806-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L806-L930)

```diff
-       }
-       _renderViews() {
-         return !1
-       }
-       _queueNewFrame(RR, JR) {
-         return nR(RR, JR)
-       }
-       _queueNewFrameForRenderLoop() {
-         this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.Te = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.T … [truncated]
-       }
-       runRenderLoop(RR) {
-         -1 === this._activeRenderLoops.indexOf(RR) && (this._activeRenderLoops.push(RR), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
-       }
-       getDepthBuffer() {
-         return this._depthCullingState.depthTest
-       }
- ... (109 more removed lines; see GitHub link above)
+         setCameraRigMode(Sr, Qr) {
+           if (this.cameraRigMode !== Sr) {
+             for (; this._rigCameras.length > 0;) {
+               const rr = this._rigCameras.pop();
+               rr && rr.dispose()
```

#### 15. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L932-L1044` → after: `L328-L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L328-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L328-L332) · [Before (L932-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L932-L1044)

```diff
-           }), void 0, yR ? yR.offlineProvider : void 0, !0, ((RR, JR) => {
-             vR("Unable to load " + (RR && RR.responseURL, JR))
-           }))
-         } else {
-           const GR = RR => {
-             CR && !this._doNotHandleContextLost && (MR._buffer = RR), fR(MR, pR, yR, RR, MR.invertY, JR, !1, VR, tR)
-           };
-           !AR || XR ? KR && ("string" === typeof KR.decoding || KR.close) ? GR(KR) : UR._FileToolsLoadImage(RR || "", GR, vR, yR ? yR.offlineProvider : null, LR, MR.invertY && this._features.needsInvertingBitmap ? {
-             imageOrientation: "flipY"
-           } : void 0, this) : "string" === typeof KR || KR instanceof ArrayBuffer || ArrayBuffer.isView(KR) || KR instanceof Blob ? UR._FileToolsLoadImage(KR, GR, vR, yR ? yR.offlineProvider : null, LR, MR.invertY && this._features.needsInvertingBitmap ? {
-             imageOrientation: "flipY"
-           } : void 0, this) : KR && GR(KR)
-         }
-         return MR
-       }
-       _rebuildBuffers() {
- ... (97 more removed lines; see GitHub link above)
+             if (this.cameraRigMode = Sr, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = Qr.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== rr.RI … [truncated]
+               const rr = this.createRigCamera(this.name + "_L", 0);
+               rr && (rr._isLeftCamera = !0);
+               const Sr = this.createRigCamera(this.name + "_R", 1);
+               Sr && (Sr._isRightCamera = !0), rr && Sr && (this._rigCameras.push(rr), this._rigCameras.push(Sr))
```

#### 16. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1049-L1144` → after: `L337-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L337-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L337-L339) · [Before (L1049-L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L1049-L1144)

```diff
-         return !0
-       }
-       createRawTexture(RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR, VR, KR) {
-         throw (0, rR.j)("engine.rawTexture")
-       }
-       createRawCubeTexture(RR, JR, GR, yR, tR, uR, ZR, qR) {
-         throw (0, rR.j)("engine.rawTexture")
-       }
-       createRawTexture3D(RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR, VR) {
-         throw (0, rR.j)("engine.rawTexture")
-       }
-       createRawTexture2DArray(RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR, VR, KR) {
-         throw (0, rR.j)("engine.rawTexture")
-       }
-       _sharedInit(RR) {
-         this._renderingCanvas = RR
- ... (80 more removed lines; see GitHub link above)
+         _setRigMode(rr) {}
+         _getVRProjectionMatrix() {
+           return Ir.d.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.MU().isNDCHalfZRange), this._cameraRigParams.vrW … [truncated]
```

#### 17. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1146-L1208` → after: `L341-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L341-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L341-L342) · [Before (L1146-L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L1146-L1208)

```diff
-       }
-       static GetCompatibleTextureLoader(RR, JR) {
-         return null
-       }
-     }
-     UR._RenderPassIdCounter = 0, UR._RescalePostProcessFactory = null, UR.CollisionsEpsilon = .001, UR.QueueNewFrame = nR
-   },
-   41387: (RR, JR, GR) => {
-     GR.d(JR, {
-       b: () => yR
-     });
-     class yR {
-       static GetShadersRepository() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? yR.ShadersRepository : yR.ShadersRepositoryWGSL
-       }
-       static GetShadersStore() {
- ... (47 more removed lines; see GitHub link above)
+         setCameraRigParameter(rr, Sr) {
+           this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[rr] = Sr, "interaxialDistance" === rr && (this._cameraRigParams.stereoHalfAngle = Sr / .0637 * (Math.PI / 180))
```

#### 18. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1210-L1230` → after: `L344-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L344-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L344-L345) · [Before (L1210-L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L1210-L1230)

```diff
-         tR.forEach(((RR, JR) => {
-           uR[RR] = JR
-         }));
-         for (const VR of iR.getAttributes(this, ZR)) qR.push(VR)
-       }
-       dispose() {
-         this._uniforms = {}, this._isDisposed = !0
-       }
-       _cacheMatrix(RR, JR) {
-         const GR = this._valueCache[RR],
-           yR = JR.updateFlag;
-         if (void 0 !== GR && GR === yR) return !1;
-         const tR = JR.QtR();
-         let uR = this._matrixValueCache[RR];
-         if (void 0 !== GR && null !== GR && void 0 !== uR) {
-           let JR = !0;
- ... (5 more removed lines; see GitHub link above)
+         createRigCamera(rr, Sr) {
+           return null
```

#### 19. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1232-L2050` → after: `L347-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L347-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L347-L349) · [Before (L1232-L2050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L1232-L2050)

```diff
-         return void 0 === uR && (uR = this._matrixValueCache[RR] = new Float32Array(16)), uR.set(tR), this._valueCache[RR] = yR, !0
-       }
-       _cacheFloat2(RR, JR, GR) {
-         let yR = this._valueCache[RR];
-         if (!yR || 2 !== yR.length) return yR = [JR, GR], this._valueCache[RR] = yR, !0;
-         let tR = !1;
-         return yR[0] !== JR && (yR[0] = JR, tR = !0), yR[1] !== GR && (yR[1] = GR, tR = !0), tR
-       }
-       _cacheFloat3(RR, JR, GR, yR) {
-         let tR = this._valueCache[RR];
-         if (!tR || 3 !== tR.length) return tR = [JR, GR, yR], this._valueCache[RR] = tR, !0;
-         let uR = !1;
-         return tR[0] !== JR && (tR[0] = JR, uR = !0), tR[1] !== GR && (tR[1] = GR, uR = !0), tR[2] !== yR && (tR[2] = yR, uR = !0), uR
-       }
-       _cacheFloat4(RR, JR, GR, yR, tR) {
-         let uR = this._valueCache[RR];
- ... (803 more removed lines; see GitHub link above)
+         _updateRigCameras() {
+           for (let rr = 0; rr < this._rigCameras.length; rr++) this._rigCameras[rr].minZ = this.minZ, this._rigCameras[rr].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[rr].fov = this.fov, this._rigCameras[rr].upVector.iH(this.upVector);
+           this.cameraRigMode === rr.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
```

#### 20. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L2052-L2066` → after: `L351-L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L351-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L351-L378) · [Before (L2052-L2066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L2052-L2066)

```diff
-         this._bindIndexBufferWithCache(JR)
-       }
-       _unbindVertexArrayObject() {
-         this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
-       }
-       bindBuffers(RR, JR, GR, yR) {
-         this._cachedVertexBuffers === RR && this._cachedEffectForVertexBuffers === GR || (this._cachedVertexBuffers = RR, this._cachedEffectForVertexBuffers = GR, this._bindVertexBuffersAttributes(RR, GR, yR)), this._bindIndexBufferWithCache(JR)
-       }
-       unbindInstanceAttributes() {
-         let RR;
-         for (let JR = 0, GR = this._currentInstanceLocations.length; JR < GR; JR++) {
-           const GR = this._currentInstanceBuffers[JR];
-           RR != GR && GR.references && (RR = GR, this.bindArrayBuffer(GR));
-           const yR = this._currentInstanceLocations[JR];
-           this._gl.vertexAttribDivisor(yR, 0)
+         _setupInputs() {}
+         serialize() {
+           const rr = tr.e.Serialize(this);
+           return rr.uniqueId = this.uniqueId, rr.type = this.getClassName(), this.parent && this.parent._serializeAsParent(rr), this.inputs && this.inputs.serialize(rr), tr.e.AppendSerializedAnimations(this, rr), rr.yh = this.serializeAnimationRanges(), rr.isEnabled = this.isEnab … [truncated]
+         }
+         clone(Sr) {
+           let Qr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+           const Zr = tr.e.Clone(rr.GetConstructorFromName(this.getClassName(), Sr, this.eC(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
+           return Zr.name = Sr, Zr.parent = Qr, this.onClonedObservable.notifyObservers(Zr), Zr
+         }
+         Y1(rr) {
+           const Sr = Ir.u.Zero();
+           return this.getDirectionToRef(rr, Sr), Sr
+         }
+         get absoluteRotation() {
+           return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
+ ... (12 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L2068-L2097` → after: `L380-L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L380-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L380-L381) · [Before (L2068-L2097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L2068-L2097)

```diff
-         this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
-       }
-       releaseVertexArrayObject(RR) {
-         this._gl.deleteVertexArray(RR)
-       }
-       _releaseBuffer(RR) {
-         return RR.references--, 0 === RR.references && (this._deleteBuffer(RR), !0)
-       }
-       _deleteBuffer(RR) {
-         this._gl.deleteBuffer(RR.underlyingResource)
-       }
-       updateAndBindInstancesBuffer(RR, JR, GR) {
-         if (this.bindArrayBuffer(RR), JR && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, JR), void 0 !== GR[0].index) this.bindInstancesBuffer(RR, GR, !0);
-         else
-           for (let yR = 0; yR < 4; yR++) {
-             const JR = GR[yR];
- ... (14 more removed lines; see GitHub link above)
+         computeWorldMatrix() {
+           return this.getWorldMatrix()
```

#### 22. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L2099-L2203` → after: `L383-L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L383-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L383-L385) · [Before (L2099-L2203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L2099-L2203)

```diff
-       }
-       disableInstanceAttributeByName(RR) {
-         if (!this._currentEffect) return;
-         const JR = this._currentEffect.getAttributeLocationByName(RR);
-         this.disableInstanceAttribute(JR)
-       }
-       disableInstanceAttribute(RR) {
-         let JR, GR = !1;
-         for (; - 1 !== (JR = this._currentInstanceLocations.indexOf(RR));) this._currentInstanceLocations.splice(JR, 1), this._currentInstanceBuffers.splice(JR, 1), GR = !0;
-         GR && (this._gl.vertexAttribDivisor(RR, 0), this.disableAttributeByIndex(RR))
-       }
-       disableAttributeByIndex(RR) {
-         this._gl.disableVertexAttribArray(RR), this._vertexAttribArraysEnabled[RR] = !1, this._currentBufferPointers[RR].active = !1
-       }
-       draw(RR, JR, GR, yR) {
-         this.drawElementsType(RR ? 0 : 1, JR, GR, yR)
- ... (89 more removed lines; see GitHub link above)
+         _calculateHandednessMultiplier() {
+           let rr = this.eC().useRightHandedSystem ? -1 : 1;
+           return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (rr *= -1), rr
```

#### 23. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L2205-L5220` → after: `L387-L614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L387-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L387-L614) · [Before (L2205-L5220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L2205-L5220)

```diff
-         const JR = (0, tR.v)(this._gl, RR);
-         return JR.engine = this, JR
-       }
-       createMaterialContext() {}
-       createDrawContext() {}
-       _finalizePipelineContext(RR) {
-         return (0, tR.k)(RR, this._gl, this.validateShaderPrograms)
-       }
-       _preparePipelineContextAsync(RR, JR, GR, yR, uR, ZR, qR, iR, fR, VR, KR) {
-         const wR = (0, tR.H)(this._gl);
-         return wR._contextWasLost = this._contextWasLost, wR.validateShaderPrograms = this.validateShaderPrograms, wR._createShaderProgramInjection = this._createShaderProgram.bind(this), wR.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), wR.createShader … [truncated]
-       }
-       _createShaderProgram(RR, JR, GR, yR) {
-         let uR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
-         return (0, tR.e)(RR, JR, GR, yR, uR)
-       }
- ... (3000 more removed lines; see GitHub link above)
+       }, (() => {
+         const ar = "function" === typeof Symbol && Symbol.metadata ? Object.create(Hr[Symbol.metadata] ?? null) : void 0;
+         Sr = [(0, Wr.C)("position")], Qr = [(0, Wr.C)("upVector")], pr = [(0, Wr.G)()], hr = [(0, Wr.G)()], zr = [(0, Wr.G)()], Yr = [(0, Wr.G)()], nr = [(0, Wr.G)()], er = [(0, Wr.G)()], Kr = [(0, Wr.G)()], yr = [(0, Wr.G)()], Br = [(0, Wr.G)()], Tr = [(0, Wr.G)()], vr = [(0, Wr … [truncated]
+           kind: "getter",
+           name: "orthoLeft",
+           static: !1,
+           private: !1,
+           access: {
+             has: rr => "orthoLeft" in rr,
+             get: rr => rr.orthoLeft
+           },
+           metadata: ar
+         }, null, qr), (0, Zr.k)(rr, null, hr, {
+           kind: "getter",
+           name: "orthoRight",
+           static: !1,
+ ... (212 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5222-L5224` → after: `L616-L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L616-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L616-L634) · [Before (L5222-L5224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L5222-L5224)

```diff
-     function OR(RR) {
-       const JR = CR.c.Parse((() => new bR), RR, null, null);
-       return void 0 !== RR.vignetteCentreX && (JR.vignetteCenterX = RR.vignetteCentreX), void 0 !== RR.vignetteCentreY && (JR.vignetteCenterY = RR.vignetteCentreY), JR
+     function zr(rr, Sr) {
+       const Qr = rr.type,
+         Zr = hr.GetConstructorFromName(Qr, rr.name, Sr, rr.interaxial_distance, rr.isStereoscopicSideBySide),
+         Wr = tr.e.Parse(Zr, rr, Sr);
+       if (void 0 !== rr.parentId && (Wr._waitingParentId = rr.parentId), void 0 !== rr.parentInstanceIndex && (Wr._waitingParentInstanceIndex = rr.parentInstanceIndex), Wr.inputs && (Wr.inputs.parse(rr), Wr._setupInputs()), rr.upVector && (Wr.upVector = Ir.u.FromArray(rr.upVector … [truncated]
+         const Sr = rr.interaxial_distance ? {
+           interaxialDistance: rr.interaxial_distance
+         } : {};
+         Wr.setCameraRigMode(rr.cameraRigMode, Sr)
+       }
+       if (rr.animations) {
+         for (let Sr = 0; Sr < rr.animations.length; Sr++) {
+           const Qr = rr.animations[Sr],
+             Zr = (0, pr.d)("BABYLON.Animation");
+           Zr && Wr.animations.push(Zr.Parse(Qr))
+         }
+ ... (3 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5228` → after: `L639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L639) · [Before (L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L5228)

```diff
-       vR || (vR = !0, bR.Parse = OR, CR.c._ImageProcessingConfigurationParser = OR, (0, gR.f)("BABYLON.ImageProcessingConfiguration", bR))
+       Yr || (Yr = !0, hr.Parse = zr)
```

#### 26. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5231` → after: `L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L642) · [Before (L5231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L5231)

```diff
-   41650: (RR, JR, GR) => {
+   42073: (rr, Sr, Qr) => {
```

#### 27. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5233` → after: `L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L644) · [Before (L5233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L5233)

```diff
-       b: () => uR
+       d: () => Wr
```

#### 28. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5235-L5236` → after: `L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L646) · [Before (L5235-L5236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L5235-L5236)

```diff
-     var yR = GR(39914),
-       tR = GR(41616);
+     var Zr = Qr(38560);
```

#### 29. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5238-L5359` → after: `L648-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L648-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L648-L694) · [Before (L5238-L5359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L5238-L5359)

```diff
-       constructor(RR, JR) {
-         let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-           yR = arguments.length > 3 ? arguments[3] : void 0,
-           tR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-           uR = arguments.length > 5 ? arguments[5] : void 0;
-         this._uniformNames = [], this._valueCache = {}, this._engine = RR, this._noUBO = !RR.supportsUniformBuffers || tR, this._dynamic = GR, this._name = yR ?? "no-name", this._data = JR || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {},  … [truncated]
-       }
-       get useUbo() {
-         return !this._noUBO
-       }
-       get isSync() {
-         return !this._needSync
-       }
-       isDynamic() {
-         return this._dynamic
-       }
- ... (106 more removed lines; see GitHub link above)
+       constructor(rr, Sr, Qr) {
+         this._cameraPosition = Sr, this._behavior = Qr, this.activeInput = !1, this.speed = 1, this.HJ = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = . … [truncated]
+       }
+       computeCurrentFrameDeltas() {
+         const rr = this._scene.MU().getDeltaTime(),
+           Sr = this._getEffectiveDeltaMs(rr);
+         if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 ===  … [truncated]
+         this.panDeltaCurrentFrame.Srr(0), this.rotationDeltaCurrentFrame.Srr(0), this.zoomDeltaCurrentFrame = 0;
+         (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.Hrr(this._calculateCurrentVelocity(this._p … [truncated]
+       }
+       resetRotationVelocity() {
+         this._rotationVelocity.Srr(0), this.rotationAccumulatedPixels.Srr(0)
+       }
+       resetPanVelocity() {
+         this._panVelocity.Srr(0), this.panAccumulatedPixels.Srr(0)
+       }
+ ... (31 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5361-L5362` → after: `L696-L704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L696-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L696-L704) · [Before (L5361-L5362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L5361-L5362)

```diff
-       get currentEffect() {
-         return this._currentEffect
+     }
+   },
+   42075: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       e: () => Zr
+     });
+     class Zr {
+       constructor(rr, Sr) {
+         this.inputMap = [], this.handlers = rr, this._createDefaultEntries = Sr, this.resetInputMap()
```

#### 31. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5364-L5367` → after: `L706-L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L706-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L706-L709) · [Before (L5364-L5367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L5364-L5367)

```diff
-       _buffersEqual(RR, JR) {
-         for (let GR = 0; GR < RR.length; ++GR)
-           if (RR[GR] !== JR[GR]) return !1;
-         return !0
+       resolveInteraction(rr, Sr) {
+         for (const Qr of this.inputMap)
+           if (Qr.source === rr && this._entryMatches(Qr, Sr)) return Qr;
+         return null
```

#### 32. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5369-L5370` → after: `L711-L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L711-L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L711-L712) · [Before (L5369-L5370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L5369-L5370)

```diff
-       _copyBuffer(RR, JR) {
-         for (let GR = 0; GR < RR.length; ++GR) JR[GR] = RR[GR]
+       resetInputMap() {
+         this.inputMap = this._createDefaultEntries?.() ?? []
```

#### 33. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5372-L5452` → after: `L714-L718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L714-L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L714-L718) · [Before (L5372-L5452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L5372-L5452)

```diff
-       update() {
-         if (!this._noUBO)
-           if (this.bindUniformBuffer(), this._buffer)
-             if (this._dynamic || this._needSync) {
-               if (this._buffers && this._buffers.length > 1 && this._buffers[this._bufferIndex][1]) {
-                 if (this._buffersEqual(this._bufferData, this._buffers[this._bufferIndex][1])) return this._needSync = !1, void(this._createBufferOnWrite = this._trackUBOsInFrame);
-                 this._copyBuffer(this._bufferData, this._buffers[this._bufferIndex][1])
-               }
-               this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData), this._needSync = !1, this._createBufferOnWrite = this._trackUBOsInFrame
-             } else this._createBufferOnWrite = this._trackUBOsInFrame;
-         else this.create()
-       }
-       _updateOwnerKeyed(RR) {
-         if (this._noUBO || !this._trackUBOsInFrame) return void this.update();
-         this._buffer || this.create(), this._checkNewFrame();
-         let JR = this._slotByOwner.get(RR);
- ... (65 more removed lines; see GitHub link above)
+       getEntry(rr, Sr, Qr) {
+         const Zr = this.inputMap;
+         for (let Wr = 0; Wr < Zr.length; Wr++) {
+           const ar = Zr[Wr];
+           if (ar.source === rr && ar.interaction === Sr && this._entryConditionsMatch(ar, Qr)) return ar
```

#### 34. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5455-L5516` → after: `L721-L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L721-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L721-L726) · [Before (L5455-L5516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L5455-L5516)

```diff
-       _cacheMatrix(RR, JR) {
-         this._checkNewFrame();
-         const GR = this._valueCache[RR],
-           yR = JR.updateFlag;
-         return (void 0 === GR || GR !== yR) && (this._valueCache[RR] = yR, !0)
-       }
-       _updateMatrix3x3ForUniform(RR, JR) {
-         for (let GR = 0; GR < 3; GR++) uR._TempBuffer[4 * GR] = JR[3 * GR], uR._TempBuffer[4 * GR + 1] = JR[3 * GR + 1], uR._TempBuffer[4 * GR + 2] = JR[3 * GR + 2], uR._TempBuffer[4 * GR + 3] = 0;
-         this.updateUniform(RR, uR._TempBuffer, 12)
-       }
-       _updateMatrix3x3ForEffect(RR, JR) {
-         this._currentEffect.setMatrix3x3(RR, JR)
-       }
-       _updateMatrix2x2ForEffect(RR, JR) {
-         this._currentEffect.setMatrix2x2(RR, JR)
-       }
- ... (46 more removed lines; see GitHub link above)
+       getEntries(rr, Sr, Qr) {
+         const Zr = [],
+           Wr = this.inputMap;
+         for (let ar = 0; ar < Wr.length; ar++) {
+           const jr = Wr[ar];
+           jr.source === rr && jr.interaction === Sr && this._entryConditionsMatch(jr, Qr) && Zr.push(jr)
```

#### 35. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5519-L5657` → after: `L730-L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L730-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L730-L759) · [Before (L5519-L5657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L5519-L5657)

```diff
-       _updateFloatArrayForUniform(RR, JR) {
-         this.updateUniformArray(RR, JR, JR.length)
-       }
-       _updateArrayForEffect(RR, JR) {
-         this._currentEffect.setArray(RR, JR)
-       }
-       _updateArrayForUniform(RR, JR) {
-         this.updateUniformArray(RR, JR, JR.length)
-       }
-       _updateIntArrayForEffect(RR, JR) {
-         this._currentEffect.setIntArray(RR, JR)
-       }
-       _updateIntArrayForUniform(RR, JR) {
-         uR._TempBufferInt32View.set(JR), this.updateUniformArray(RR, uR._TempBuffer, JR.length)
-       }
-       _updateUIntArrayForEffect(RR, JR) {
- ... (123 more removed lines; see GitHub link above)
+       addEntry(rr) {
+         const Sr = this._entrySpecificity(rr);
+         let Qr = this.inputMap.length;
+         for (let Zr = 0; Zr < this.inputMap.length; Zr++)
+           if (this._entrySpecificity(this.inputMap[Zr]) < Sr) {
+             Qr = Zr;
+             break
+           } this.inputMap.splice(Qr, 0, rr)
+       }
+       setInteraction(rr, Sr, Qr) {
+         const Zr = this.resolveInteraction(rr, Sr);
+         return Zr && this._entryCoversAllConditionsOf(Zr, Sr) ? (Zr.interaction = Qr, !0) : (this.addEntry({
+           source: rr,
+           ...Sr ?? {},
+           interaction: Qr
+         }), !0)
+ ... (14 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5659-L5660` → after: `L761-L768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L761-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L761-L768) · [Before (L5659-L5660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L5659-L5660)

```diff
-       unbindEffect() {
-         this._currentEffect = void 0, this._currentEffectName = void 0
+       setInteractions(rr, Sr, Qr) {
+         let Zr = 0;
+         const Wr = this.inputMap;
+         for (let ar = 0; ar < Wr.length; ar++) {
+           const jr = Wr[ar];
+           jr.source === rr && this._entryMatches(jr, Sr) && (jr.interaction = Qr, Zr++)
+         }
+         return Zr
```

#### 37. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5662-L5665` → after: `L770-L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L770-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L770-L796) · [Before (L5662-L5665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L5662-L5665)

```diff
-       setDataBuffer(RR) {
-         if (!this._buffers) return this._buffer === RR;
-         for (let JR = 0; JR < this._buffers.length; ++JR) {
-           if (this._buffers[JR][0] === RR) return this._bufferIndex = JR, this._buffer = RR, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[JR][1] && (this._bufferData.set(this._buffers[JR][1]), this._dataGeneration++), thi … [truncated]
+       _entryMatches(rr, Sr) {
+         switch (rr.source) {
+           case "pointer":
+             return (void 0 === rr.button || rr.button === Sr?.button) && this._matchModifiers(rr.modifiers, Sr?.modifiers);
+           case "wheel":
+             return this._matchModifiers(rr.modifiers, Sr?.modifiers);
+           case "touch":
+             return void 0 === rr.touchCount || rr.touchCount === Sr?.touchCount;
+           case "keyboard":
+             return (void 0 === rr.key || (Array.isArray(rr.key) ? -1 !== rr.key.indexOf(Sr?.key ?? -1) : rr.key === Sr?.key)) && this._matchModifiers(rr.modifiers, Sr?.modifiers)
+         }
+       }
+       _entryConditionsMatch(rr, Sr) {
+         if (!Sr) return !0;
+         switch (rr.source) {
+           case "pointer":
+ ... (11 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5669-L5670` → after: `L799-L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L799-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L799-L804) · [Before (L5669-L5670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L5669-L5670)

```diff
-       has(RR) {
-         return void 0 !== this._uniformLocations[RR]
+       _entrySpecificity(rr) {
+         let Sr = 0;
+         return "button" in rr && void 0 !== rr.button && Sr++, "key" in rr && void 0 !== rr.key && Sr++, "touchCount" in rr && void 0 !== rr.touchCount && Sr++, "modifiers" in rr && rr.modifiers && Sr++, Sr
+       }
+       _matchModifiers(rr, Sr) {
+         return !rr || (void 0 === rr.ctrl || rr.ctrl === (Sr?.ctrl ?? !1)) && ((void 0 === rr.shift || rr.shift === (Sr?.shift ?? !1)) && (void 0 === rr.alt || rr.alt === (Sr?.alt ?? !1)))
```

#### 39. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5672-L5683` → after: `L806-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L806-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L806-L808) · [Before (L5672-L5683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L5672-L5683)

```diff
-       dispose() {
-         if (this._noUBO) return;
-         const RR = this._engine._uniformBuffers,
-           JR = RR.indexOf(this);
-         if (-1 !== JR && (RR[JR] = RR[RR.length - 1], RR.pop()), this._trackUBOsInFrame && this._buffers) {
-           this._resetOwnerSlots();
-           for (let RR = 0; RR < this._buffers.length; ++RR) {
-             const JR = this._buffers[RR][0];
-             this._engine._releaseBuffer(JR)
-           }
-           this._buffers = [], this._buffer = null, this._bufferIndex = -1
-         } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
+       _entryModifiersMatch(rr, Sr) {
+         if (!Sr) return !rr;
+         return void 0 !== Sr.ctrl || void 0 !== Sr.shift || void 0 !== Sr.alt ? (void 0 === Sr.ctrl || rr?.ctrl === Sr.ctrl) && ((void 0 === Sr.shift || rr?.shift === Sr.shift) && (void 0 === Sr.alt || rr?.alt === Sr.alt)) : !rr || void 0 === rr.ctrl && void 0 === rr.shift && voi … [truncated]
```

#### 40. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5688` → after: `L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L812) · [Before (L5688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L5688)

```diff
-   41441: (RR, JR, GR) => {
+   42052: (rr, Sr, Qr) => {
```

#### 41. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5690` → after: `L814-L815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L814-L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L814-L815) · [Before (L5690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L5690)

```diff
-       d: () => tR
+       c: () => zr,
+       f: () => tr
```

#### 42. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5692-L5699` → after: `L817-L1071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L817-L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L817-L1071) · [Before (L5692-L5699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L5692-L5699)

```diff
-     var yR = GR(41444);
-     class tR extends yR.b {
-       constructor(RR) {
-         super(), this._buffer = RR
-       }
-       get underlyingResource() {
-         return this._buffer
-       }
+     var Zr = Qr(41872),
+       Wr = Qr(41875),
+       ar = Qr(42057),
+       jr = Qr(38560),
+       Ir = Qr(38569),
+       fr = Qr(42069),
+       Er = Qr(42060),
+       pr = Qr(42073),
+       xr = Qr(42075);
+     class mr extends pr.d {
+       constructor(rr, Sr, Qr) {
+         super(rr, Sr, Qr), this.input = new xr.e({
+           translate: (rr, Sr, Qr) => {
+             this.panAccumulatedPixels.x += rr, this.panAccumulatedPixels.y += Sr, this.panAccumulatedPixels.z += Qr
+           },
+           rotate: (rr, Sr) => {
+ ... (239 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5702` → after: `L1074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L1074) · [Before (L5702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L5702)

```diff
-   41527: (RR, JR, GR) => {
+   41839: (rr, Sr, Qr) => {
```

#### 44. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5704-L5705` → after: `L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L1076) · [Before (L5704-L5705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L5704-L5705)

```diff
-       d: () => iR,
-       h: () => fR
+       d: () => ar
```

#### 45. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5707-L5729` → after: `L1078-L1079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1078-L1079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L1078-L1079) · [Before (L5707-L5729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L5707-L5729)

```diff
-     const yR = "__bjs_serializable__",
-       tR = new WeakMap;
- 
-     function uR(RR, JR) {
-       return Object.prototype.hasOwnProperty.call(RR, JR)
-     }
-     const ZR = function() {
-       let RR = Symbol.metadata;
-       return RR || (RR = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
-         configurable: !0,
-         writable: !0,
-         value: RR
-       })), RR
-     }();
- 
-     function qR(RR) {
- ... (7 more removed lines; see GitHub link above)
+     var Zr = Qr(41784);
+     let Wr = !1;
```

#### 46. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5731-L5745` → after: `L1081-L1096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1081-L1096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L1081-L1096) · [Before (L5731-L5745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L5731-L5745)

```diff
-     function fR(RR) {
-       const JR = qR(RR),
-         GR = JR ? JR[ZR] : void 0;
-       if (!GR) return {};
-       const iR = tR.get(GR);
-       if (iR) return iR;
-       const fR = {},
-         VR = [];
-       let KR = GR;
-       for (; KR;) VR.push(KR), KR = Object.getPrototypeOf(KR);
-       for (const tR of VR)
-         if (uR(tR, yR)) {
-           const RR = tR[yR];
-           for (const JR in RR) fR[JR] = RR[JR]
-         } return tR.set(GR, fR), fR
+     function ar() {
+       Wr || (Wr = !0, Zr.e.prototype.getInputElement = function() {
+         return this._renderingCanvas
+       }, Zr.e.prototype.getRenderingCanvasClientRect = function() {
+         return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
+       }, Zr.e.prototype.getInputElementClientRect = function() {
+         return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
+       }, Zr.e.prototype.getAspectRatio = function(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         const Qr = rr.viewport;
+         return this.getRenderWidth(Sr) * Qr.width / (this.getRenderHeight(Sr) * Qr.height)
+       }, Zr.e.prototype.getScreenAspectRatio = function() {
+         return this.getRenderWidth(!0) / this.getRenderHeight(!0)
+       }, Zr.e.prototype._verifyPointerLock = function() {
+         this._onPointerLockChange?.()
+       })
```

#### 47. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5748` → after: `L1099-L1116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1099-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L1099-L1116) · [Before (L5748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L5748)

```diff
-   41524: (RR, JR, GR) => {
+   41895: (rr, Sr, Qr) => {
+     var Zr = Qr(41784),
+       Wr = Qr(41898);
+     let ar = !1;
+     ar || (ar = !0, (0, Wr.x)(), Zr.e.prototype._loadFileAsync = async function(rr, Sr, Qr) {
+       return await new Promise(((Zr, Wr) => {
+         this._loadFile(rr, (rr => {
+           Zr(rr)
+         }), void 0, Sr, Qr, ((rr, Sr) => {
+           Wr(Sr)
+         }))
+       }))
+     })
+   },
+   41893: (rr, Sr, Qr) => {
+     (0, Qr(41843).e)()
+ ... (2 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5750-L5763` → after: `L1118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L1118) · [Before (L5750-L5763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L5750-L5763)

```diff
-       C: () => qR,
-       F: () => VR,
-       G: () => KR,
-       H: () => ZR,
-       c: () => WR,
-       d: () => uR,
-       f: () => UR,
-       h: () => rR,
-       k: () => iR,
-       m: () => eR,
-       q: () => fR,
-       u: () => LR,
-       x: () => wR,
-       y: () => aR
+       e: () => ar
```

#### 49. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5765-L5777` → after: `L1120-L1121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1120-L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L1120-L1121) · [Before (L5765-L5777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L5765-L5777)

```diff
-     var yR = GR(41527);
- 
-     function tR(RR, JR) {
-       return (GR, tR) => {
-         if (!tR.metadata) return;
-         const uR = String(tR.name),
-           ZR = (0, yR.d)(tR.metadata);
-         ZR[uR] || (ZR[uR] = {
-           type: RR,
-           sourceName: JR
-         })
-       }
-     }
+     var Zr = Qr(41784);
+     let Wr = !1;
```

#### 50. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5779-L5793` → after: `L1123-L1140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1123-L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L1123-L1140) · [Before (L5779-L5793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L5779-L5793)

```diff
-     function uR(RR) {
-       return function(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-         return (GR, yR) => {
-           const tR = JR || "_" + String(yR.name);
-           return {
-             init(RR) {
-               return void 0 === RR && tR in this || (this[tR] = RR), RR
-             },
-             get() {
-               return this[tR]
-             },
-             set(JR) {
-               "function" === typeof this[tR]?.equals && this[tR].equals(JR) || this[tR] !== JR && (this[tR] = JR, this[RR]())
-             }
+     function ar() {
+       Wr || (Wr = !0, Zr.e.prototype.getRenderPassNames = function() {
+         return this._renderPassNames
+       }, Zr.e.prototype.getCurrentRenderPassName = function() {
+         return this._renderPassNames[this.currentRenderPassId]
+       }, Zr.e.prototype.createRenderPassId = function(rr) {
+         const Sr = ++Zr.e._RenderPassIdCounter;
+         return this._renderPassNames[Sr] = rr ?? "NONAME", Sr
+       }, Zr.e.prototype.releaseRenderPassId = function(rr) {
+         this._renderPassNames[rr] = void 0;
+         for (let Sr = 0; Sr < this.scenes.length; ++Sr) {
+           const Qr = this.scenes[Sr];
+           for (let Sr = 0; Sr < Qr.meshes.length; ++Sr) {
+             const Zr = Qr.meshes[Sr];
+             if (Zr._releaseRenderPassId(rr), Zr.jT)
+               for (let Sr = 0; Sr < Zr.jT.length; ++Sr) {
+ ... (2 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5796-L5859` → after: `L1143-L1144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1143-L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L1143-L1144) · [Before (L5796-L5859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L5796-L5859)

```diff
-       }(RR, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
-     }
- 
-     function ZR(RR) {
-       return tR(0, RR)
-     }
- 
-     function qR(RR) {
-       return tR(1, RR)
-     }
- 
-     function iR(RR) {
-       return tR(2, RR)
-     }
- 
-     function fR(RR) {
- ... (48 more removed lines; see GitHub link above)
+         this._onReleaseRenderPassObservable?.notifyObservers(rr)
+       })
```

#### 52. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5862-L5871` → after: `L1160-L1167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1160-L1167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L1160-L1167) · [Before (L5862-L5871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L5862-L5871)

```diff
-     function WR(RR) {
-       let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-       return (GR, yR) => {
-         const tR = JR || "_" + String(yR.name);
-         return {
-           get() {
-             return this[tR]?.value
-           },
-           set(JR) {
-             "function" === typeof this[tR]?.value?.equals && this[tR].value.equals(JR) || this[tR].value !== JR && (this[tR].value = JR, this[RR]())
+     function ar() {
+       Wr || (Wr = !0, Zr.ThinEngine.prototype.setAlphaMode = function(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         if (this._alphaMode[Qr] === rr) {
+           if (!Sr) {
+             const Sr = 0 === rr;
+             this.depthCullingState.depthMask !== Sr && (this.depthCullingState.depthMask = Sr)
```

#### 53. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5874-L5880` → after: `L1171-L1173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1171-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L1171-L1173) · [Before (L5874-L5880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L5874-L5880)

```diff
-       }
-     }
-     UR.filter = function(RR) {
-       return (JR, GR) => nR(JR, GR, ((JR, GR) => function() {
-         for (var yR = arguments.length, tR = new Array(yR), uR = 0; uR < yR; uR++) tR[uR] = arguments[uR];
-         return RR(...tR) ? JR(...tR) : GR.apply(this, tR)
-       }))
+         const Zr = 0 === rr;
+         this._alphaState.setAlphaBlend(!Zr, Qr), this._alphaState.setAlphaMode(rr, Qr), Sr || (this.depthCullingState.depthMask = Zr), this._alphaMode[Qr] = rr
+       })
```

#### 54. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5883-L5921` → after: `L1176-L1191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1176-L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L1176-L1191) · [Before (L5883-L5921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L5883-L5921)

```diff
-   41542: (RR, JR, GR) => {
-     GR.d(JR, {
-       c: () => fR
-     });
-     var yR = GR(41407),
-       tR = GR(41547),
-       uR = GR(38331),
-       ZR = GR(38204),
-       qR = GR(41527);
-     const iR = function(RR, JR, GR) {
-       let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
-       const uR = RR();
-       tR.d && tR.d.HasTags(JR) && tR.d.AddTagsTo(uR, tR.d.GetTags(JR, !0));
-       const ZR = (0, qR.h)(uR),
-         iR = {};
-       for (const tR in ZR) {
- ... (23 more removed lines; see GitHub link above)
+   41851: (rr, Sr, Qr) => {
+     var Zr = Qr(41731),
+       Wr = Qr(40246),
+       ar = Qr(41737),
+       jr = Qr(41859),
+       Ir = Qr(41827);
+     class fr extends jr.b {
+       setDepthStencilTexture(rr) {
+         let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         if (super.setDepthStencilTexture(rr, Sr), !rr) return;
+         const Qr = this._engine,
+           Zr = this._context,
+           Wr = rr._hardwareTexture;
+         if (Wr && rr._autoMSAAManagement && this._MSAAFramebuffer) {
+           const Sr = Qr._currentFramebuffer;
+           Qr._bindUnboundFramebuffer(this._MSAAFramebuffer), Zr.framebufferRenderbuffer(Zr.FRAMEBUFFER, (0, Ir.b)(rr.format) ? Zr.DEPTH_STENCIL_ATTACHMENT : Zr.DEPTH_ATTACHMENT, Zr.RENDERBUFFER, Wr.getMSAARenderBuffer()), Qr._bindUnboundFramebuffer(Sr)
```

#### 55. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5924-L5933` → after: `L1194-L1246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1194-L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L1194-L1246) · [Before (L5924-L5933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L5924-L5933)

```diff
-       return uR
-     };
-     class fR {
-       static AppendSerializedAnimations(RR, JR) {
-         if (RR.animations) {
-           JR.animations = [];
-           for (let GR = 0; GR < RR.animations.length; GR++) {
-             const yR = RR.animations[GR];
-             JR.animations.push(yR.serialize())
-           }
+       constructor(rr, Sr, Qr, Zr, Wr) {
+         super(rr, Sr, Qr, Zr), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = Wr
+       }
+       _cloneRenderTargetWrapper() {
+         let rr;
+         return this._colorTextureArray && this._depthStencilTextureArray ? (rr = this._engine.createMultiviewRenderTargetTexture(this.width, this.height), rr.texture.isReady = !0) : rr = super._cloneRenderTargetWrapper(), rr
+       }
+       _swapRenderTargetWrapper(rr) {
+         super._swapRenderTargetWrapper(rr), rr._framebuffer = this._framebuffer, rr._depthStencilBuffer = this._depthStencilBuffer, rr._MSAAFramebuffer = this._MSAAFramebuffer, rr._colorTextureArray = this._colorTextureArray, rr._depthStencilTextureArray = this._depthStencilTextu … [truncated]
+       }
+       createDepthStencilTexture() {
+         let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
+           Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
+           Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
+ ... (37 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5936-L5965` → after: `L1254-L1402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1254-L1402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L1254-L1402) · [Before (L5936-L5965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L5936-L5965)

```diff
-       static Serialize(RR, JR) {
-         JR || (JR = {}), tR.d && (JR.tags = tR.d.GetTags(RR));
-         const GR = (0, qR.h)(RR);
-         for (const yR in GR) {
-           const tR = GR[yR],
-             uR = tR.sourceName || yR,
-             ZR = tR.type,
-             qR = RR[yR];
-           if (void 0 !== qR && null !== qR && ("uniqueId" !== yR || fR.AllowLoadingUniqueId)) switch (ZR) {
-             case 0:
-               Array.isArray(qR) ? JR[uR] = qR.slice() : JR[uR] = qR;
-               break;
-             case 1:
-             case 3:
-             case 7:
-             case 9:
- ... (14 more removed lines; see GitHub link above)
+       setTexture(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
+         super.setTexture(rr, Sr, Qr), this._bindTextureRenderTarget(rr, Sr)
+       }
+       setLayerAndFaceIndices(rr, Sr) {
+         if (super.setLayerAndFaceIndices(rr, Sr), !this.textures || !this.layerIndices || !this.faceIndices) return;
+         const Qr = this._attachments?.length ?? this.textures.length;
+         for (let Zr = 0; Zr < Qr; Zr++) {
+           const rr = this.textures[Zr];
+           rr && (rr.is2DArray || rr.is3D ? this._bindTextureRenderTarget(rr, Zr, this.layerIndices[Zr]) : rr.isCube ? this._bindTextureRenderTarget(rr, Zr, this.faceIndices[Zr]) : this._bindTextureRenderTarget(rr, Zr))
+         }
+       }
+       setLayerAndFaceIndex() {
+         let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           Sr = arguments.length > 1 ? arguments[1] : void 0,
+ ... (133 more added lines; see GitHub link above)
```

#### 57. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5970-L6022` → after: `L1406-L1416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1406-L1416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L1406-L1416) · [Before (L5970-L6022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L5970-L6022)

```diff
-       static ParseProperties(RR, JR, GR, yR) {
-         yR || (yR = "");
-         const tR = (0, qR.h)(JR);
-         for (const qR in tR) {
-           const iR = tR[qR],
-             VR = RR[iR.sourceName || qR],
-             KR = iR.type;
-           if (void 0 !== VR && null !== VR && ("uniqueId" !== qR || fR.AllowLoadingUniqueId)) {
-             const RR = JR;
-             switch (KR) {
-               case 0:
-                 RR[qR] = VR;
-                 break;
-               case 1:
-                 GR && (RR[qR] = fR._TextureParser(VR, GR, yR));
-                 break;
- ... (37 more removed lines; see GitHub link above)
+ 
+       function Sr(rr) {
+         return function(Sr, Qr, Zr, Wr, ar, Ir, fr, Er) {
+           let pr = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
+             xr = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
+           const mr = rr ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
+             Nr = rr ? 10 : 11,
+             Ur = new jr.b(this, Nr);
+           Ur.baseWidth = Qr, Ur.baseHeight = Zr, Ur.baseDepth = Wr, Ur.width = Qr, Ur.height = Zr, Ur.depth = Wr, Ur.format = ar, Ur.type = xr, Ur.generateMipMaps = Ir, Ur.samplingMode = Er, rr ? Ur.is3D = !0 : Ur.is2DArray = !0, this._doNotHandleContextLost || (Ur._bufferView =  … [truncated]
+           const tr = this._getSamplingParameters(Er, Ir);
+           return this._gl.texParameteri(mr, this._gl.TEXTURE_MAG_FILTER, tr.mag), this._gl.texParameteri(mr, this._gl.TEXTURE_MIN_FILTER, tr.min), Ir && this._gl.generateMipmap(mr), this._bindTextureDirectly(mr, null), this._internalTexturesCache.push(Ur), Ur
```

#### 58. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6025-L6031` → after: `L1419-L1604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1419-L1604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L1419-L1604) · [Before (L6025-L6031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6025-L6031)

```diff
-       static Parse(RR, JR, GR) {
-         let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-         const uR = RR();
-         return tR.d && tR.d.AddTagsTo(uR, JR.tags), fR.ParseProperties(JR, uR, GR, yR), uR
-       }
-       static Clone(RR, JR) {
-         return iR(RR, JR, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
+ 
+       function Qr(rr) {
+         return function(Sr, Qr, Zr, Wr) {
+           let ar = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+             jr = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
+           const Ir = rr ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
+             fr = this._getWebGLTextureType(jr),
+             Er = this._getInternalFormat(Zr),
+             pr = this._getRGBABufferInternalSizedFormat(jr, Zr);
+           this._bindTextureDirectly(Ir, Sr, !0), this._unpackFlipY(void 0 === Wr || !!Wr), this._doNotHandleContextLost || (Sr._bufferView = Qr, Sr.format = Zr, Sr.invertY = Wr, Sr._compression = ar), Sr.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), ar && … [truncated]
+         }
+       }
+       Er || (Er = !0, Wr.ThinEngine.prototype.updateRawTexture = function(rr, Sr, Qr, Zr) {
+         let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+           ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
+           jr = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
+ ... (170 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6033-L6034` → after: `L1606-L1816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1606-L1816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L1606-L1816) · [Before (L6033-L6034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6033-L6034)

```diff
-       static Instanciate(RR, JR) {
-         return iR(RR, JR, !0)
+     });
+     Qr(41851);
+     let Nr = !1;
+     Nr || (Nr = !0, Wr.ThinEngine.prototype.setDepthStencilTexture = function(rr, Sr, Qr, Zr) {
+       void 0 !== rr && (Sr && (this._boundUniforms[rr] = Sr), Qr && Qr.depthStencilTexture ? this._setTexture(rr, Qr, !1, !0, Zr) : this._setTexture(rr, null, void 0, void 0, Zr))
+     });
+     let Ur = !1;
+     Ur || (Ur = !0, Wr.ThinEngine.prototype.createRenderTargetCubeTexture = function(rr, Sr) {
+       const Qr = this._createHardwareRenderTargetWrapper(!1, !0, rr),
+         Zr = {
+           generateMipMaps: !0,
+           generateDepthBuffer: !0,
+           generateStencilBuffer: !1,
+           type: 0,
+           samplingMode: 3,
+           format: 5,
+ ... (195 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6036-L6045` → after: `L1818-L1828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1818-L1828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L1818-L1828) · [Before (L6036-L6045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6036-L6045)

```diff
-     }
-     fR.AllowLoadingUniqueId = !1, fR._ImageProcessingConfigurationParser = RR => {
-       throw (0, yR.j)("ImageProcessingConfiguration")
-     }, fR._FresnelParametersParser = RR => {
-       throw (0, yR.j)("FresnelParameters")
-     }, fR._ColorCurvesParser = RR => {
-       throw (0, yR.j)("ColorCurves")
-     }, fR._TextureParser = (RR, JR, GR) => {
-       throw (0, yR.j)("Texture")
-     }
+       return this._createDepthStencilTexture(rr, Sr, Qr)
+     });
+     Qr(41895), Qr(41925);
+     let Or = !1;
+     Or || (Or = !0, Wr.ThinEngine.prototype.enableScissor = function(rr, Sr, Qr, Zr) {
+       const Wr = this._gl;
+       Wr.enable(Wr.SCISSOR_TEST), Wr.scissor(rr, Sr, Qr, Zr)
+     }, Wr.ThinEngine.prototype.disableScissor = function() {
+       const rr = this._gl;
+       rr.disable(rr.SCISSOR_TEST)
+     })
```

#### 61. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6047` → after: `L1830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L1830) · [Before (L6047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6047)

```diff
-   41475: (RR, JR, GR) => {
+   41728: (rr, Sr, Qr) => {
```

#### 62. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6051` → after: `L1834-L1837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1834-L1837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L1834-L1837) · [Before (L6051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6051)

```diff
-     var yR = GR(41425);
+     var Zr = Qr(41731),
+       Wr = Qr(38587),
+       ar = Qr(41737),
+       jr = Qr(41787);
```

#### 63. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6053-L6060` → after: `L1839-L1841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1839-L1841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L1839-L1841) · [Before (L6053-L6060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6053-L6060)

```diff
-       get min() {
-         return this._min
-       }
-       get max() {
-         return this._max
-       }
-       get average() {
-         return this._average
+       constructor() {
+         let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
+         this._enabled = !0, this._rollingFrameTime = new fr(rr)
```

#### 64. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6062-L6063` → after: `L1843-L1851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1843-L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L1843-L1851) · [Before (L6062-L6063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6062-L6063)

```diff
-       get lastSecAverage() {
-         return this._lastSecAverage
+       sampleFrame() {
+         let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jr.c.Now;
+         if (this._enabled) {
+           if (null != this._lastFrameTimeMs) {
+             const Sr = rr - this._lastFrameTimeMs;
+             this._rollingFrameTime.add(Sr)
+           }
+           this._lastFrameTimeMs = rr
+         }
```

#### 65. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6065-L6066` → after: `L1853-L1854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1853-L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L1853-L1854) · [Before (L6065-L6066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6065-L6066)

```diff
-       get current() {
-         return this._current
+       get averageFrameTime() {
+         return this._rollingFrameTime.average
```

#### 66. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6068-L6069` → after: `L1856-L1857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1856-L1857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L1856-L1857) · [Before (L6068-L6069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6068-L6069)

```diff
-       get total() {
-         return this._totalAccumulated
+       get averageFrameTimeVariance() {
+         return this._rollingFrameTime.variance
```

#### 67. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6071-L6072` → after: `L1859-L1860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1859-L1860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L1859-L1860) · [Before (L6071-L6072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6071-L6072)

```diff
-       get count() {
-         return this._totalValueCount
+       get instantaneousFrameTime() {
+         return this._rollingFrameTime.history(0)
```

#### 68. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6074-L6075` → after: `L1862-L1863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1862-L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L1862-L1863) · [Before (L6074-L6075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6074-L6075)

```diff
-       constructor() {
-         this._startMonitoringTime = 0, this._min = 0, this._max = 0, this._hasResult = !1, this._hasCurrentValue = !1, this._average = 0, this._lastSecAverage = 0, this._current = 0, this._totalValueCount = 0, this._totalAccumulated = 0, this._lastSecAccumulated = 0, this._lastSe … [truncated]
+       get averageFPS() {
+         return 1e3 / this._rollingFrameTime.average
```

#### 69. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6077-L6078` → after: `L1865-L1867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1865-L1867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L1865-L1867) · [Before (L6077-L6078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6077-L6078)

```diff
-       fetchNewFrame() {
-         this._totalValueCount++, this._current = 0, this._hasCurrentValue = tR.Enabled, this._lastSecValueCount++
+       get instantaneousFPS() {
+         const rr = this._rollingFrameTime.history(0);
+         return 0 === rr ? 0 : 1e3 / rr
```

#### 70. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6080-L6081` → after: `L1869-L1870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1869-L1870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L1869-L1870) · [Before (L6080-L6081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6080-L6081)

```diff
-       addCount(RR, JR) {
-         tR.Enabled && (this._current += RR, this._hasCurrentValue = !0, JR && this._fetchResult())
+       get isSaturated() {
+         return this._rollingFrameTime.isSaturated()
```

#### 71. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6083-L6084` → after: `L1872-L1873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1872-L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L1872-L1873) · [Before (L6083-L6084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6083-L6084)

```diff
-       beginMonitoring() {
-         tR.Enabled && (this._startMonitoringTime = yR.b.Now)
+       enable() {
+         this._enabled = !0
```

#### 72. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6086-L6091` → after: `L1875-L1876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1875-L1876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L1875-L1876) · [Before (L6086-L6091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6086-L6091)

```diff
-       endMonitoring() {
-         let RR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-         if (!tR.Enabled) return;
-         RR && this.fetchNewFrame();
-         const JR = yR.b.Now;
-         this._current = JR - this._startMonitoringTime, this._hasCurrentValue = !0, RR && this._fetchResult()
+       disable() {
+         this._enabled = !1, this._lastFrameTimeMs = null
```

#### 73. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6093-L6094` → after: `L1878-L1879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1878-L1879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L1878-L1879) · [Before (L6093-L6094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6093-L6094)

```diff
-       XK() {
-         this._fetchResult()
+       get isEnabled() {
+         return this._enabled
```

#### 74. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6096-L6100` → after: `L1881-L1882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1881-L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L1881-L1882) · [Before (L6096-L6100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6096-L6100)

```diff
-       _fetchResult() {
-         if (!this._hasCurrentValue) return;
-         this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult  … [truncated]
-         const RR = yR.b.Now;
-         RR - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = RR, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
+       reset() {
+         this._lastFrameTimeMs = null, this._rollingFrameTime.reset()
```

#### 75. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6112` → after: `L1887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L1887) · [Before (L6112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6112)

```diff
-         this.length = 0, this.data = new Array(RR), this._id = yR._GlobalId++
+         this._samples = new Array(rr), this.reset()
```

#### 76. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6114-L6115` → after: `L1889-L1895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1889-L1895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L1889-L1895) · [Before (L6114-L6115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6114-L6115)

```diff
-       push(RR) {
-         this.data[this.length++] = RR, this.length > this.data.length && (this.data.length *= 2)
+       add(rr) {
+         let Sr;
+         if (this.isSaturated()) {
+           const rr = this._samples[this._pos];
+           Sr = rr - this.average, this.average -= Sr / (this._sampleCount - 1), this._m2 -= Sr * (rr - this.average)
+         } else this._sampleCount++;
+         Sr = rr - this.average, this.average += Sr / this._sampleCount, this._m2 += Sr * (rr - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = rr, this._pos++, this._pos %= this._samples.length
```

#### 77. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6117-L6118` → after: `L1897-L1900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1897-L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L1897-L1900) · [Before (L6117-L6118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6117-L6118)

```diff
-       forEach(RR) {
-         for (let JR = 0; JR < this.length; JR++) RR(this.data[JR])
+       history(rr) {
+         if (rr >= this._sampleCount || rr >= this._samples.length) return 0;
+         const Sr = this._wrapPosition(this._pos - 1);
+         return this._samples[this._wrapPosition(Sr - rr)]
```

#### 78. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6120-L6121` → after: `L1902-L1903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1902-L1903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L1902-L1903) · [Before (L6120-L6121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6120-L6121)

```diff
-       sort(RR) {
-         this.data.sort(RR)
+       isSaturated() {
+         return this._sampleCount >= this._samples.length
```

#### 79. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6124` → after: `L1906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L1906) · [Before (L6124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6124)

```diff
-         this.length = 0
+         this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
```

#### 80. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6126-L6127` → after: `L1908-L1910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1908-L1910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L1908-L1910) · [Before (L6126-L6127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6126-L6127)

```diff
-       dispose() {
-         this.reset(), this.data && (this.data.length = 0)
+       _wrapPosition(rr) {
+         const Sr = this._samples.length;
+         return (rr % Sr + Sr) % Sr
```

#### 81. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6129-L6132` → after: `L1912-L1975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1912-L1975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L1912-L1975) · [Before (L6129-L6132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6129-L6132)

```diff
-       concat(RR) {
-         if (0 !== RR.length) {
-           this.length + RR.length > this.data.length && (this.data.length = 2 * (this.length + RR.length));
-           for (let JR = 0; JR < RR.length; JR++) this.data[this.length++] = (RR.data || RR)[JR]
+     }
+     var Er = Qr(41803),
+       pr = Qr(40246),
+       xr = Qr(41820),
+       mr = Qr(41784),
+       Nr = Qr(41749);
+ 
+     function Ur(rr) {
+       const Sr = function(rr) {
+         if (!(0, Nr.f)() || !document.body) return null;
+         const Sr = document.createElement("span");
+         Sr.textContent = "Hg", Sr.style.font = rr;
+         const Qr = document.createElement("div");
+         Qr.style.display = "inline-block", Qr.style.width = "1px", Qr.style.height = "0px", Qr.style.verticalAlign = "bottom";
+         const Zr = document.createElement("div");
+         let Wr, ar;
+ ... (48 more added lines; see GitHub link above)
```

#### 82. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6135-L6137` → after: `L2000-L2001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2000-L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2000-L2001) · [Before (L6135-L6137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6135-L6137)

```diff
-       indexOf(RR) {
-         const JR = this.data.indexOf(RR);
-         return JR >= this.length ? -1 : JR
+       static get Version() {
+         return mr.e.Version
```

#### 83. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6139-L6140` → after: `L2003-L2004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2003-L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2003-L2004) · [Before (L6139-L6140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6139-L6140)

```diff
-       contains(RR) {
-         return -1 !== this.indexOf(RR)
+       static get Instances() {
+         return Wr.b.Instances
```

#### 84. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6142-L6146` → after: `L2006-L2007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2006-L2007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2006-L2007) · [Before (L6142-L6146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6142-L6146)

```diff
-     }
-     yR._GlobalId = 0;
-     class tR extends yR {
-       constructor() {
-         super(...arguments), this._duplicateId = 0
+       static get LastCreatedEngine() {
+         return Wr.b.LastCreatedEngine
```

#### 85. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6148-L6149` → after: `L2009-L2010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2009-L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2009-L2010) · [Before (L6148-L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6148-L6149)

```diff
-       push(RR) {
-         super.push(RR), RR.__smartArrayFlags || (RR.__smartArrayFlags = {}), RR.__smartArrayFlags[this._id] = this._duplicateId
+       static get LastCreatedScene() {
+         return Wr.b.LastCreatedScene
```

#### 86. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6151-L6152` → after: `L2012-L2013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2012-L2013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2012-L2013) · [Before (L6151-L6152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6151-L6152)

```diff
-       pushNoDuplicate(RR) {
-         return (!RR.__smartArrayFlags || RR.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(RR), !0)
+       static DefaultLoadingScreenFactory(rr) {
+         return mr.e.DefaultLoadingScreenFactory(rr)
```

#### 87. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6154-L6155` → after: `L2015-L2016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2015-L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2015-L2016) · [Before (L6154-L6155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6154-L6155)

```diff
-       reset() {
-         super.reset(), this._duplicateId++
+       get _supportsHardwareTextureRescaling() {
+         return !!Kr._RescalePostProcessFactory
```

#### 88. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6157-L6164` → after: `L2018-L2019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2018-L2019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2018-L2019) · [Before (L6157-L6164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6157-L6164)

```diff
-       concatWithNoDuplicate(RR) {
-         if (0 !== RR.length) {
-           this.length + RR.length > this.data.length && (this.data.length = 2 * (this.length + RR.length));
-           for (let JR = 0; JR < RR.length; JR++) {
-             const GR = (RR.data || RR)[JR];
-             this.pushNoDuplicate(GR)
-           }
-         }
+       _measureFps() {
+         this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
```

#### 89. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6166-L6174` → after: `L2021-L2022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2021-L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2021-L2022) · [Before (L6166-L6174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6166-L6174)

```diff
-     }
-   },
-   41547: (RR, JR, GR) => {
-     GR.d(JR, {
-       d: () => tR
-     });
-     class yR {
-       static Eval(RR, JR) {
-         return "true" === (RR = RR.match(/\([^()]*\)/g) ? RR.replace(/\([^()]*\)/g, (RR => (RR = RR.slice(1, RR.length - 1), yR._HandleParenthesisContent(RR, JR)))) : yR._HandleParenthesisContent(RR, JR)) || "false" !== RR && yR.Eval(RR, JR)
+       get performanceMonitor() {
+         return this._performanceMonitor
```

#### 90. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6176-L6197` → after: `L2024-L2026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2024-L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2024-L2026) · [Before (L6176-L6197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6176-L6197)

```diff
-       static _HandleParenthesisContent(RR, JR) {
-         let GR;
-         JR = JR || (RR => "true" === RR);
-         const tR = RR.split("||");
-         for (const uR in tR)
-           if (Object.prototype.hasOwnProperty.call(tR, uR)) {
-             let RR = yR._SimplifyNegation(tR[uR].trim());
-             const ZR = RR.split("&&");
-             if (ZR.length > 1)
-               for (let tR = 0; tR < ZR.length; ++tR) {
-                 const uR = yR._SimplifyNegation(ZR[tR].trim());
-                 if (GR = "true" !== uR && "false" !== uR ? "!" === uR[0] ? !JR(uR.substring(1)) : JR(uR) : "true" === uR, !GR) {
-                   RR = "false";
-                   break
-                 }
-               }
- ... (6 more removed lines; see GitHub link above)
+       constructor(rr, Sr, Qr) {
+         let Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         (0, nr.d)(), (0, er.e)(), super(rr, Sr, Qr, Zr), this._performanceMonitor = new Ir, this._drawCalls = new zr.b, rr && (this._features.supportRenderPasses = !0)
```

#### 91. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6199-L6200` → after: `L2028-L2029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2028-L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2028-L2029) · [Before (L6199-L6200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6199-L6200)

```diff
-       static _SimplifyNegation(RR) {
-         return "!true" === (RR = (RR = RR.replace(/^[\s!]+/, (RR => (RR = RR.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? RR = "false" : "!false" === RR && (RR = "true"), RR
+       _initGLContext() {
+         super._initGLContext(), this._rescalePostProcess = null
```

#### 92. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6202-L6205` → after: `L2031-L2055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2031-L2055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2031-L2055) · [Before (L6202-L6205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6202-L6205)

```diff
-     }
-     class tR {
-       static EnableFor(RR) {
-         RR._tags = RR._tags || {}, RR.hasTags = () => tR.HasTags(RR), RR.addTags = JR => tR.AddTagsTo(RR, JR), RR.removeTags = JR => tR.RemoveTagsFrom(RR, JR), RR.matchesTagsQuery = JR => tR.MatchesQuery(RR, JR)
+       _sharedInit(rr) {
+         super._sharedInit(rr),
+           function(rr, Sr, Qr) {
+             rr._onCanvasFocus = () => {
+               rr.onCanvasFocusObservable.notifyObservers(rr)
+             }, rr._onCanvasBlur = () => {
+               rr.onCanvasBlurObservable.notifyObservers(rr)
+             }, rr._onCanvasContextMenu = Sr => {
+               rr.disableContextMenu && Sr.preventDefault()
+             }, Sr.addEventListener("focus", rr._onCanvasFocus), Sr.addEventListener("blur", rr._onCanvasBlur), Sr.addEventListener("contextmenu", rr._onCanvasContextMenu), rr._onBlur = () => {
+               rr.disablePerformanceMonitorInBackground && rr.performanceMonitor.disable(), rr._windowIsBackground = !0
+             }, rr._onFocus = () => {
+               rr.disablePerformanceMonitorInBackground && rr.performanceMonitor.enable(), rr._windowIsBackground = !1
+             }, rr._onCanvasPointerOut = Qr => {
+               document.elementFromPoint(Qr.clientX, Qr.clientY) !== Sr && rr.onCanvasPointerOutObservable.notifyObservers(Qr)
+             };
+ ... (9 more added lines; see GitHub link above)
```

#### 93. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6207-L6208` → after: `L2057-L2078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2057-L2078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2057-L2078) · [Before (L6207-L6208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6207-L6208)

```diff
-       static DisableFor(RR) {
-         delete RR._tags, delete RR.hasTags, delete RR.addTags, delete RR.removeTags, delete RR.matchesTagsQuery
+       resizeImageBitmap(rr, Sr, Qr) {
+         return function(rr, Sr, Qr, Zr) {
+           const Wr = rr.createCanvas(Qr, Zr).getContext("2d");
+           if (!Wr) throw new Error("Unable to get 2d context for resizeImageBitmap");
+           return Wr.drawImage(Sr, 0, 0), Wr.getImageData(0, 0, Qr, Zr).data
+         }(this, rr, Sr, Qr)
+       }
+       async _createImageBitmapFromSource(rr, Sr) {
+         return await async function(rr, Sr, Qr) {
+           return await new Promise(((Zr, Wr) => {
+             const ar = new Image;
+             ar.onload = () => {
+               ar.decode().then((() => {
+                 rr.createImageBitmap(ar, Qr).then((rr => {
+                   Zr(rr)
+                 }))
+ ... (6 more added lines; see GitHub link above)
```

#### 94. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6210-L6215` → after: `L2080-L2081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2080-L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2080-L2081) · [Before (L6210-L6215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6210-L6215)

```diff
-       static HasTags(RR) {
-         if (!RR._tags) return !1;
-         const JR = RR._tags;
-         for (const GR in JR)
-           if (Object.prototype.hasOwnProperty.call(JR, GR)) return !0;
-         return !1
+       switchFullscreen(rr) {
+         this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(rr)
```

#### 95. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6217-L6225` → after: `L2083-L2087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2083-L2087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2083-L2087) · [Before (L6217-L6225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6217-L6225)

```diff
-       static GetTags(RR) {
-         let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         if (!RR._tags) return null;
-         if (JR) {
-           const JR = [];
-           for (const GR in RR._tags) Object.prototype.hasOwnProperty.call(RR._tags, GR) && !0 === RR._tags[GR] && JR.push(GR);
-           return JR.join(" ")
-         }
-         return RR._tags
+       enterFullscreen(rr) {
+         this.isFullscreen || (this._pointerLockRequested = rr, this._renderingCanvas && function(rr) {
+           const Sr = rr.requestFullscreen || rr.webkitRequestFullscreen;
+           Sr && Sr.call(rr)
+         }(this._renderingCanvas))
```

#### 96. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6227-L6231` → after: `L2089-L2093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2089-L2093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2089-L2093) · [Before (L6227-L6231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6227-L6231)

```diff
-       static AddTagsTo(RR, JR) {
-         if (!JR) return;
-         if ("string" !== typeof JR) return;
-         const GR = JR.split(" ");
-         for (const yR of GR) tR._AddTagTo(RR, yR)
+       exitFullscreen() {
+         this.isFullscreen && function() {
+           const rr = document;
+           document.exitFullscreen ? document.exitFullscreen() : rr.webkitCancelFullScreen && rr.webkitCancelFullScreen()
+         }()
```

#### 97. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6233-L6234` → after: `L2095-L2096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2095-L2096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2095-L2096) · [Before (L6233-L6234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6233-L6234)

```diff
-       static _AddTagTo(RR, JR) {
-         "" !== (JR = JR.trim()) && "true" !== JR && "false" !== JR && (JR.match(/[\s]/) || JR.match(/^([!]|([|]|[&]){2})/) || (tR.EnableFor(RR), RR._tags[JR] = !0))
+       setDitheringState(rr) {
+         rr ? this._gl.enable(this._gl.DITHER) : this._gl.disable(this._gl.DITHER)
```

#### 98. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6236-L6239` → after: `L2098-L2099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2098-L2099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2098-L2099) · [Before (L6236-L6239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6236-L6239)

```diff
-       static RemoveTagsFrom(RR, JR) {
-         if (!tR.HasTags(RR)) return;
-         const GR = JR.split(" ");
-         for (const yR in GR) tR._RemoveTagFrom(RR, GR[yR])
+       setRasterizerState(rr) {
+         rr ? this._gl.disable(this._gl.RASTERIZER_DISCARD) : this._gl.enable(this._gl.RASTERIZER_DISCARD)
```

#### 99. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6241-L6242` → after: `L2101-L2103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2101-L2103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2101-L2103) · [Before (L6241-L6242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6241-L6242)

```diff
-       static _RemoveTagFrom(RR, JR) {
-         delete RR._tags[JR]
+       setDirectViewport(rr, Sr, Qr, Zr) {
+         const Wr = this._cachedViewport;
+         return this._cachedViewport = null, this._viewport(rr, Sr, Qr, Zr), Wr
```

#### 100. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6244-L6245` → after: `L2105-L2106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2105-L2106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2105-L2106) · [Before (L6244-L6245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6244-L6245)

```diff
-       static MatchesQuery(RR, JR) {
-         return void 0 === JR || ("" === JR ? tR.HasTags(RR) : yR.Eval(JR, (JR => tR.HasTags(RR) && RR._tags[JR])))
+       scissorClear(rr, Sr, Qr, Zr, Wr) {
+         this.enableScissor(rr, Sr, Qr, Zr), this.clear(Wr, !0, !0, !0), this.disableScissor()
```

#### 101. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6247-L6257` → after: `L2108-L2110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2108-L2110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2108-L2110) · [Before (L6247-L6257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6247-L6257)

```diff
-     }
-   },
-   41670: (RR, JR, GR) => {
-     GR.d(JR, {
-       b: () => uR
-     });
-     var yR = GR(41663),
-       tR = GR(38233);
-     class uR {
-       constructor(RR) {
-         this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new tR.b, this._scene = RR
+       getVertexShaderSource(rr) {
+         const Sr = this._gl.getAttachedShaders(rr);
+         return Sr ? this._gl.getShaderSource(Sr[0]) : null
```

#### 102. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6259-L6262` → after: `L2112-L2114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2112-L2114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2112-L2114) · [Before (L6259-L6262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6259-L6262)

```diff
-       _prepareBuffers() {
-         if (this._vertexBuffers[yR.l.PositionKind]) return;
-         const RR = [];
-         RR.push(1, 1), RR.push(-1, 1), RR.push(-1, -1), RR.push(1, -1), this._vertexBuffers[yR.l.PositionKind] = new yR.l(this._scene.ke(), RR, yR.l.PositionKind, !1, !1, 2), this._buildIndexBuffer()
+       getFragmentShaderSource(rr) {
+         const Sr = this._gl.getAttachedShaders(rr);
+         return Sr ? this._gl.getShaderSource(Sr[1]) : null
```

#### 103. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6264-L6266` → after: `L2116-L2117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2116-L2117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2116-L2117) · [Before (L6264-L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6264-L6266)

```diff
-       _buildIndexBuffer() {
-         const RR = [];
-         RR.push(0), RR.push(1), RR.push(2), RR.push(0), RR.push(2), RR.push(3), this._indexBuffer = this._scene.ke().createIndexBuffer(RR)
+       set framebufferDimensionsObject(rr) {
+         this._framebufferDimensionsObject = rr, this._framebufferDimensionsObject && this.onResizeObservable.notifyObservers(this)
```

#### 104. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6268-L6275` → after: `L2119-L2122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2119-L2122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2119-L2122) · [Before (L6268-L6275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6268-L6275)

```diff
-       _getActivePostProcesses(RR) {
-         const JR = this._activePostProcesses;
-         JR.length = 0;
-         for (let GR = 0; GR < RR.length; GR++) {
-           const yR = RR[GR];
-           yR && JR.push(yR)
-         }
-         return JR
+       _rebuildBuffers() {
+         for (const rr of this.scenes) rr.resetCachedMaterial(), rr._rebuildGeometries();
+         for (const rr of this._virtualScenes) rr.resetCachedMaterial(), rr._rebuildGeometries();
+         super._rebuildBuffers()
```

#### 105. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6277-L6279` → after: `L2124-L2125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2124-L2125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2124-L2125) · [Before (L6277-L6279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6277-L6279)

```diff
-       _rebuild() {
-         const RR = this._vertexBuffers[yR.l.PositionKind];
-         RR && (RR._rebuild(), this._buildIndexBuffer())
+       getFontOffset(rr) {
+         return Ur(rr)
```

#### 106. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6281-L6285` → after: `L2127-L2128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2127-L2128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2127-L2128) · [Before (L6281-L6285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6281-L6285)

```diff
-       _prepareFrame() {
-         let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-           JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-         const GR = this._scene.activeCamera;
-         return !!GR && (JR = JR || this._getActivePostProcesses(GR._postProcesses), !(!JR || 0 === JR.length || !this._scene.postProcessesEnabled) && (JR[0].activate(GR, RR, null !== JR && void 0 !== JR), !0))
+       enterPointerlock() {
+         this._renderingCanvas && hr(this._renderingCanvas)
```

#### 107. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6287-L6299` → after: `L2130-L2152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2130-L2152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2130-L2152) · [Before (L6287-L6299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6287-L6299)

```diff
-       directRender(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-           yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
-           tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
-           uR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-           ZR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : RR.length;
-         const qR = this._scene.ke();
-         for (let iR = 0; iR < ZR; iR++) {
-           iR < RR.length - 1 ? RR[iR + 1].activate(this._scene.activeCamera || this._scene, JR?.texture) : (JR ? qR.bindFramebuffer(JR, yR, void 0, void 0, GR, tR) : uR || qR.restoreDefaultFramebuffer(), qR._debugInsertMarker?.(`post process ${RR[iR].name} output`));
-           const ZR = RR[iR],
-             fR = ZR.apply();
-           fR && (ZR.onBeforeRenderObservable.notifyObservers(fR), this._prepareBuffers(), qR.bindBuffers(this._vertexBuffers, this._indexBuffer, fR), qR.drawElementsType(0, 0, 6), ZR.onAfterRenderObservable.notifyObservers(fR))
+       exitPointerlock() {
+         document.exitPointerLock && document.exitPointerLock()
+       }
+       lB() {
+         this._measureFps(), super.lB()
+       }
+       _deletePipelineContext(rr) {
+         const Sr = rr;
+         Sr && Sr.program && Sr.transformFeedback && (this.deleteTransformFeedback(Sr.transformFeedback), Sr.transformFeedback = null), super._deletePipelineContext(rr)
+       }
+       createShaderProgram(rr, Sr, Qr, Zr, Wr) {
+         let ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
+         Wr = Wr || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
+         const jr = super.createShaderProgram(rr, Sr, Qr, Zr, Wr, ar);
+         return this.onAfterShaderCompilationObservable.notifyObservers(this), jr
+       }
+ ... (7 more added lines; see GitHub link above)
```

#### 108. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6301` → after: `L2154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2154) · [Before (L6301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6301)

```diff
-         qR.setDepthBuffer(!0), qR.setDepthWrite(!0)
+         return Zr.linkProgram(ar), this.tt > 1 && Wr && this.bindTransformFeedback(null), rr.context = Zr, rr.vertexShader = Sr, rr.fragmentShader = Qr, rr.isParallelCompiled || this._finalizePipelineContext(rr), ar
```

#### 109. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6303-L6313` → after: `L2156-L2191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2156-L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2156-L2191) · [Before (L6303-L6313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6303-L6313)

```diff
-       _finalizeFrame(RR, JR, GR, yR) {
-         let tR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const uR = this._scene.activeCamera;
-         if (!uR) return;
-         if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (yR = yR || this._getActivePostProcesses(uR._postProcesses)).length || !this._scene.postProcessesEnabled) return;
-         const ZR = this._scene.ke();
-         for (let qR = 0, iR = yR.length; qR < iR; qR++) {
-           const fR = yR[qR];
-           if (qR < iR - 1 ? fR._outputTexture = yR[qR + 1].activate(uR, JR?.texture) : (JR ? (ZR.bindFramebuffer(JR, GR, void 0, void 0, tR), fR._outputTexture = JR) : (ZR.restoreDefaultFramebuffer(), fR._outputTexture = null), ZR._debugInsertMarker?.(`post process ${yR[qR].name} … [truncated]
-           const VR = fR.apply();
-           VR && (fR.onBeforeRenderObservable.notifyObservers(VR), this._prepareBuffers(), ZR.bindBuffers(this._vertexBuffers, this._indexBuffer, VR), ZR.drawElementsType(0, 0, 6), fR.onAfterRenderObservable.notifyObservers(VR))
+       _releaseTexture(rr) {
+         super._releaseTexture(rr)
+       }
+       _releaseRenderTargetWrapper(rr) {
+         super._releaseRenderTargetWrapper(rr);
+         for (const Sr of this.scenes) {
+           for (const Qr of Sr.postProcesses) Qr._outputTexture === rr && (Qr._outputTexture = null);
+           for (const Qr of Sr.cameras)
+             for (const Sr of Qr._postProcesses) Sr && Sr._outputTexture === rr && (Sr._outputTexture = null)
+         }
+       }
+       _rescaleTexture(rr, Sr, Qr, Zr, Wr) {
+         this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDG … [truncated]
+         const ar = this.createRenderTargetTexture({
+           width: Sr.width,
+           height: Sr.height
+ ... (20 more added lines; see GitHub link above)
```

#### 110. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6315` → after: `L2193-L2268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2193-L2268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2193-L2268) · [Before (L6315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6315)

```diff
-         ZR.setDepthBuffer(!0), ZR.setDepthWrite(!0), ZR.setAlphaMode(0)
+       }
+       wrapWebGLTexture(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
+           Wr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
+           ar = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
+         const jr = new xr.b(rr, this._gl),
+           Ir = new Zr.b(this, 15, !0);
+         return Ir._hardwareTexture = jr, Ir.baseWidth = Wr, Ir.baseHeight = ar, Ir.width = Wr, Ir.height = ar, Ir.isReady = !0, Ir.useMipMaps = Sr, this.updateTextureSamplingMode(Qr, Ir), Ir
+       }
+       updateWrappedWebGLTexture(rr, Sr) {
+         if (15 !== rr.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
+         for (const Zr of this._renderTargetWrapperCache)
+           if (Zr.textures?.includes(rr)) {
+             if (Zr.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
+             if (Zr._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
+ ... (60 more added lines; see GitHub link above)
```

#### 111. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6318-L6319` → after: `L2271-L2276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2271-L2276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2271-L2276) · [Before (L6318-L6319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6318-L6319)

```diff
-         const RR = this._vertexBuffers[yR.l.PositionKind];
-         RR && (RR.dispose(), this._vertexBuffers[yR.l.PositionKind] = null), this._indexBuffer && (this._scene.ke()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
+         this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
+           function(rr, Sr) {
+             1 === Wr.b.Instances.length && mr.e.audioEngine && (mr.e.audioEngine.dispose(), mr.e.audioEngine = null);
+             const Qr = rr.getHostWindow();
+             Qr && "function" === typeof Qr.removeEventListener && (Qr.removeEventListener("blur", rr._onBlur), Qr.removeEventListener("focus", rr._onFocus)), Sr && (Sr.removeEventListener("focus", rr._onCanvasFocus), Sr.removeEventListener("blur", rr._onCanvasBlur), Sr.removeEven … [truncated]
+           }(this, this._renderingCanvas), super.dispose()
```

#### 112. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6323` → after: `L2281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2281) · [Before (L6323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6323)

```diff
-   41690: (RR, JR, GR) => {
+   41859: (rr, Sr, Qr) => {
```

#### 113. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6325` → after: `L2283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2283) · [Before (L6325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6325)

```diff
-       d: () => fR
+       b: () => Wr
```

#### 114. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6327-L6335` → after: `L2285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2285) · [Before (L6327-L6335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6327-L6335)

```diff
-     var yR = GR(41626),
-       tR = GR(38204);
-     const uR = [],
-       ZR = [];
-     let qR = !1;
- 
-     function iR(RR, JR) {
-       for (; RR.length < JR;) RR.push(void 0)
-     }
+     var Zr = Qr(41827);
```

#### 115. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6337-L6338` → after: `L2287-L2288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2287-L2288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2287-L2288) · [Before (L6337-L6338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6337-L6338)

```diff
-       set opaqueSortCompareFn(RR) {
-         this._opaqueSortCompareFn = RR || fR.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
+       get depthStencilTexture() {
+         return this._depthStencilTexture
```

#### 116. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6340-L6341` → after: `L2290-L2291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2290-L2291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2290-L2291) · [Before (L6340-L6341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6340-L6341)

```diff
-       set alphaTestSortCompareFn(RR) {
-         this._alphaTestSortCompareFn = RR || fR.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
+       setDepthStencilTexture(rr) {
+         (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = rr, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, r … [truncated]
```

#### 117. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6343-L6344` → after: `L2293-L2294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2293-L2294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2293-L2294) · [Before (L6343-L6344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6343-L6344)

```diff
-       set transparentSortCompareFn(RR) {
-         this._transparentSortCompareFn = RR || fR.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
+       get depthStencilTextureWithStencil() {
+         return this._depthStencilTextureWithStencil
```

#### 118. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6346-L6401` → after: `L2296-L2297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2296-L2297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2296-L2297) · [Before (L6346-L6401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6346-L6401)

```diff
-       constructor(RR, JR) {
-         let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-           tR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
-           uR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
-         this.index = RR, this._opaqueSubMeshes = new yR.f(256), this._transparentSubMeshes = new yR.f(256), this._alphaTestSubMeshes = new yR.f(256), this._depthOnlySubMeshes = new yR.f(256), this._particleSystems = new yR.f(256), this._spriteManagers = new yR.f(256), this._empty … [truncated]
-       }
-       render(RR, JR, GR, yR) {
-         let tR = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
-           uR = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
-           ZR = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
-           qR = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
-           iR = arguments.length > 8 ? arguments[8] : void 0;
-         if (RR) return void RR(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
-         const fR = this._scene.ke();
-         tR && 0 !== this._depthOnlySubMeshes.length && (fR.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), fR.setColorWrite(!0)), uR && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), ZR && 0 !== this._alphaTestSubMeshes.length … [truncated]
-         const VR = fR.getStencilBuffer();
- ... (40 more removed lines; see GitHub link above)
+       get isCube() {
+         return this._isCube
```

#### 119. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6403-L6419` → after: `L2299-L2300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2299-L2300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2299-L2300) · [Before (L6403-L6419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6403-L6419)

```diff
-       static _DrawSorted(RR, JR, GR, yR) {
-         let tR;
-         const uR = RR[0].getMesh().jH();
-         for (let ZR = 0; ZR < JR; ZR++) {
-           if (tR = RR[ZR], uR._activeMeshesFrozenButKeepClipping && !tR.isInFrustum(uR._frustumPlanes)) continue;
-           let JR = !1;
-           if (GR) {
-             const RR = tR.he();
-             if (RR && RR.needDepthPrePass && !yR) {
-               JR = !0;
-               const GR = RR.jH().ke();
-               GR.setColorWrite(!1), GR.setAlphaMode(0), tR.render(!1), GR.setColorWrite(!0)
-             }
-           }
-           const qR = tR._renderingMesh;
-           !JR && qR._renderRunFollower(tR, GR) || tR.render(GR)
- ... (1 more removed lines; see GitHub link above)
+       get isMulti() {
+         return this._isMulti
```

#### 120. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6421-L6461` → after: `L2302-L2303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2302-L2303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2302-L2303) · [Before (L6421-L6461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6421-L6461)

```diff
-       static _StableSort(RR, JR, GR) {
-         for (let yR = 0; yR < JR; yR += 16) {
-           const tR = Math.min(yR + 16, JR);
-           for (let JR = yR + 1; JR < tR; JR++) {
-             const tR = RR[JR];
-             let uR = yR,
-               ZR = JR;
-             for (; uR < ZR;) {
-               const JR = uR + ZR >>> 1;
-               GR(tR, RR[JR]) < 0 ? ZR = JR : uR = JR + 1
-             }
-             for (let GR = JR; GR > uR; GR--) RR[GR] = RR[GR - 1];
-             RR[uR] = tR
-           }
-         }
-         if (!(JR <= 16)) {
- ... (25 more removed lines; see GitHub link above)
+       get is2DArray() {
+         return this.layers > 0
```

#### 121. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6463-L6464` → after: `L2305-L2306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2305-L2306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2305-L2306) · [Before (L6463-L6464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6463-L6464)

```diff
-       static defaultTransparentSortCompare(RR, JR) {
-         return RR._alphaIndex > JR._alphaIndex ? 1 : RR._alphaIndex < JR._alphaIndex ? -1 : fR.backToFrontSortCompare(RR, JR)
+       get is3D() {
+         return this.depth > 0
```

#### 122. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6466-L6467` → after: `L2308-L2309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2308-L2309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2308-L2309) · [Before (L6466-L6467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6466-L6467)

```diff
-       static backToFrontSortCompare(RR, JR) {
-         return RR._distanceToCamera < JR._distanceToCamera ? 1 : RR._distanceToCamera > JR._distanceToCamera ? -1 : 0
+       get size() {
+         return this.width
```

#### 123. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6469-L6470` → after: `L2311-L2312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2311-L2312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2311-L2312) · [Before (L6469-L6470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6469-L6470)

```diff
-       static frontToBackSortCompare(RR, JR) {
-         return RR._distanceToCamera < JR._distanceToCamera ? -1 : RR._distanceToCamera > JR._distanceToCamera ? 1 : 0
+       get width() {
+         return this._size.width ?? this._size
```

#### 124. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6472-L6475` → after: `L2314-L2315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2314-L2315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2314-L2315) · [Before (L6472-L6475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6472-L6475)

```diff
-       static PainterSortCompare(RR, JR) {
-         const GR = RR.getMesh(),
-           yR = JR.getMesh();
-         return GR.material && yR.material ? GR.material.uniqueId - yR.material.uniqueId : GR.uniqueId - yR.uniqueId
+       get height() {
+         return this._size.height ?? this._size
```

#### 125. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6477-L6478` → after: `L2317-L2318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2317-L2318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2317-L2318) · [Before (L6477-L6478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6477-L6478)

```diff
-       prepare() {
-         this._opaqueSubMeshes.reset(), this._transparentSubMeshes.reset(), this._alphaTestSubMeshes.reset(), this._depthOnlySubMeshes.reset(), this._particleSystems.reset(), this.prepareSprites(), this._edgesRenderers.reset(), this._empty = !0
+       get layers() {
+         return this._size.layers || 0
```

#### 126. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6480-L6481` → after: `L2320-L2321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2320-L2321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2320-L2321) · [Before (L6480-L6481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6480-L6481)

```diff
-       prepareSprites() {
-         this._spriteManagers.reset()
+       get depth() {
+         return this._size.depth || 0
```

#### 127. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6483-L6484` → after: `L2323-L2324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2323-L2324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2323-L2324) · [Before (L6483-L6484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6483-L6484)

```diff
-       dispose() {
-         this._opaqueSubMeshes.dispose(), this._transparentSubMeshes.dispose(), this._alphaTestSubMeshes.dispose(), this._depthOnlySubMeshes.dispose(), this._particleSystems.dispose(), this._spriteManagers.dispose(), this._edgesRenderers.dispose()
+       get texture() {
+         return this._textures?.[0] ?? null
```

#### 128. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6486-L6487` → after: `L2326-L2327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2326-L2327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2326-L2327) · [Before (L6486-L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6486-L6487)

```diff
-       dispatch(RR, JR, GR) {
-         void 0 === JR && (JR = RR.getMesh()), void 0 === GR && (GR = RR.he()), null !== GR && void 0 !== GR && (GR.needAlphaBlendingForMesh(JR) ? this._transparentSubMeshes.push(RR) : GR.needAlphaTestingForMesh(JR) ? (GR.needDepthPrePass && !this.disableDepthPrePass && this._dept … [truncated]
+       get textures() {
+         return this._textures
```

#### 129. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6489-L6490` → after: `L2329-L2330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2329-L2330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2329-L2330) · [Before (L6489-L6490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6489-L6490)

```diff
-       dispatchSprites(RR) {
-         this._spriteManagers.push(RR), this._empty = !1
+       get faceIndices() {
+         return this._faceIndices
```

#### 130. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6492-L6493` → after: `L2332-L2333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2332-L2333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2332-L2333) · [Before (L6492-L6493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6492-L6493)

```diff
-       dispatchParticles(RR) {
-         this._particleSystems.push(RR), this._empty = !1
+       get layerIndices() {
+         return this._layerIndices
```

#### 131. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6495-L6505` → after: `L2335-L2340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2335-L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2335-L2340) · [Before (L6495-L6505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6495-L6505)

```diff
-       _renderParticles(RR) {
-         if (0 === this._particleSystems.length) return;
-         const JR = this._scene.activeCamera;
-         this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
-         for (let GR = 0; GR < this._particleSystems.length; GR++) {
-           const yR = this._particleSystems.data[GR];
-           if (0 === (JR && JR.layerMask & yR.layerMask)) continue;
-           const tR = yR.emitter;
-           tR.position && RR && -1 === RR.indexOf(tR) || this._scene._activeParticles.addCount(yR.render(), !1)
-         }
-         this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
+       getBaseArrayLayer(rr) {
+         if (!this._textures) return -1;
+         const Sr = this._textures[rr],
+           Qr = this._layerIndices?.[rr] ?? 0,
+           Zr = this._faceIndices?.[rr] ?? 0;
+         return Sr.isCube ? 6 * Qr + Zr : Sr.is3D ? 0 : Qr
```

#### 132. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6507-L6515` → after: `L2342-L2343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2342-L2343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2342-L2343) · [Before (L6507-L6515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6507-L6515)

```diff
-       _renderSprites() {
-         if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
-         const RR = this._scene.activeCamera;
-         this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
-         for (let JR = 0; JR < this._spriteManagers.length; JR++) {
-           const GR = this._spriteManagers.data[JR];
-           0 !== (RR && RR.layerMask & GR.layerMask) && GR.render()
-         }
-         this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
+       get samples() {
+         return this._samples
```

#### 133. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6517-L6528` → after: `L2345-L2362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2345-L2362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2345-L2362) · [Before (L6517-L6528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6517-L6528)

```diff
-     }
-     fR._ZeroVector = tR.r.Zero()
-   },
-   41681: (RR, JR, GR) => {
-     GR.d(JR, {
-       e: () => uR
-     });
-     var yR = GR(41690);
-     class tR {}
-     class uR {
-       get disableDepthPrePass() {
-         return this._disableDepthPrePass
+       setSamples(rr) {
+         let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
+           Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         if (this.samples === rr && !Qr) return rr;
+         const Zr = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, rr, Sr) : this._engine.updateRenderTargetTextureSampleCount(this, rr);
+         return this._samples = rr, Zr
+       }
+       resolveMSAATextures() {
+         this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
+       }
+       generateMipMaps() {
+         this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuf … [truncated]
+       }
+       constructor(rr, Sr, Qr, Zr, Wr) {
+         this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, thi … [truncated]
+       }
+ ... (2 more added lines; see GitHub link above)
```

#### 134. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6530-L6532` → after: `L2364-L2367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2364-L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2364-L2367) · [Before (L6530-L6532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6530-L6532)

```diff
-       set disableDepthPrePass(RR) {
-         this._disableDepthPrePass = RR;
-         for (const JR of this._renderingGroups) JR.disableDepthPrePass = RR
+       setTexture(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
+         this._textures || (this._textures = []), this._textures[Sr] !== rr && (this._textures[Sr] && Qr && this._textures[Sr].dispose(), this._textures[Sr] = rr)
```

#### 135. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6534-L6535` → after: `L2369-L2370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2369-L2370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2369-L2370) · [Before (L6534-L6535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6534-L6535)

```diff
-       get maintainStateBetweenFrames() {
-         return this._maintainStateBetweenFrames
+       setLayerAndFaceIndices(rr, Sr) {
+         this._layerIndices = rr, this._faceIndices = Sr
```

#### 136. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6537-L6538` → after: `L2372-L2376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2372-L2376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2372-L2376) · [Before (L6537-L6538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6537-L6538)

```diff
-       set maintainStateBetweenFrames(RR) {
-         RR !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = RR, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
+       setLayerAndFaceIndex() {
+         let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           Sr = arguments.length > 1 ? arguments[1] : void 0,
+           Qr = arguments.length > 2 ? arguments[2] : void 0;
+         this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== Sr && Sr >= 0 && (this._layerIndices[rr] = Sr), void 0 !== Qr && Qr >= 0 && (this._faceIndices[rr] = Qr)
```

#### 137. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6540-L6546` → after: `L2378-L2399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2378-L2399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2378-L2399) · [Before (L6540-L6546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6540-L6546)

```diff
-       restoreDispachedFlags() {
-         for (const RR of this._scene.meshes)
-           if (RR.XM)
-             for (const JR of RR.XM) JR._wasDispatched = !1;
-         if (this._scene.spriteManagers)
-           for (const RR of this._scene.spriteManagers) RR._wasDispatched = !1;
-         for (const RR of this._scene.pM) RR._wasDispatched = !1
+       createDepthStencilTexture() {
+         let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
+           Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
+           Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
+           ar = arguments.length > 5 ? arguments[5] : void 0;
+         return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = Qr, this._depthStencilTextureLabel = ar, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
+           bilinearFiltering: Sr,
+           comparisonFunction: rr,
+           generateStencil: Qr,
+           isCube: this._isCube,
+           samples: Zr,
+           depthTextureFormat: Wr,
+           label: ar
+         }, this), this._depthStencilTexture
+ ... (6 more added lines; see GitHub link above)
```

#### 138. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6548-L6593` → after: `L2401-L2453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2401-L2453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2401-L2453) · [Before (L6548-L6593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6548-L6593)

```diff
-       constructor(RR) {
-         this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderin … [truncated]
-         for (let JR = uR.MIN_RENDERINGGROUPS; JR < uR.MAX_RENDERINGGROUPS; JR++) this._autoClearDepthStencil[JR] = {
-           autoClear: !0,
-           depth: !0,
-           stencil: !0
-         }
-       }
-       get renderingGroups() {
-         return this._renderingGroups
-       }
-       getRenderingGroup(RR) {
-         const JR = RR || 0;
-         return this._prepareRenderingGroup(JR), this._renderingGroups[JR]
-       }
-       _clearDepthStencilBuffer() {
- ... (30 more removed lines; see GitHub link above)
+       _swapAndDie(rr) {
+         this.texture && this.texture._swapAndDie(rr), this._textures = null, this.dispose(!0)
+       }
+       _cloneRenderTargetWrapper() {
+         let rr = null;
+         if (this._isMulti) {
+           const Sr = this.textures;
+           if (Sr && Sr.length > 0) {
+             let Qr = !1,
+               Zr = Sr.length,
+               Wr = -1;
+             const ar = Sr[Sr.length - 1]._source;
+             14 !== ar && 12 !== ar || (Qr = !0, Wr = Sr[Sr.length - 1].format, Zr--);
+             const jr = [],
+               Ir = [],
+               fr = [],
+ ... (37 more added lines; see GitHub link above)
```

#### 139. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6595-L6597` → after: `L2455-L2464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2455-L2464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2455-L2464) · [Before (L6595-L6597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6595-L6597)

```diff
-           VR.render(RR, yR, GR, JR, tR, ZR, qR, iR, fR);
-           for (let RR = 0, JR = this._scene._afterRenderingGroupDrawStage; RR < JR.length; RR++) {
-             JR[RR].action(rR)
+         } else {
+           const Sr = {};
+           if (Sr.generateDepthBuffer = this._generateDepthBuffer, Sr.generateMipMaps = this.texture?.generateMipMaps ?? !1, Sr.generateStencilBuffer = this._generateStencilBuffer, Sr.samplingMode = this.texture?.samplingMode, Sr.type = this.texture?.type, Sr.format = this.texture … [truncated]
+           else {
+             const Qr = {
+               width: this.width,
+               height: this.height,
+               layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
+             };
+             rr = this._engine.createRenderTargetTexture(Qr, Sr)
```

#### 140. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6599` → after: `L2466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2466) · [Before (L6599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6599)

```diff
-           this._scene.onAfterRenderingGroupObservable.notifyObservers(KR, wR)
+           rr.texture && (rr.texture.isReady = !0)
```

#### 141. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6602-L6607` → after: `L2470-L2473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2470-L2473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2470-L2473) · [Before (L6602-L6607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6602-L6607)

```diff
-       reset() {
-         if (!this.maintainStateBetweenFrames)
-           for (let RR = uR.MIN_RENDERINGGROUPS; RR < uR.MAX_RENDERINGGROUPS; RR++) {
-             const JR = this._renderingGroups[RR];
-             JR && JR.prepare()
-           }
+       _swapRenderTargetWrapper(rr) {
+         if (this._textures && rr._textures)
+           for (let Sr = 0; Sr < this._textures.length; ++Sr) this._textures[Sr]._swapAndDie(rr._textures[Sr], !1), rr._textures[Sr].isReady = !0;
+         this._depthStencilTexture && rr._depthStencilTexture && (this._depthStencilTexture._swapAndDie(rr._depthStencilTexture), rr._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
```

#### 142. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6609-L6613` → after: `L2475-L2482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2475-L2482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2475-L2482) · [Before (L6609-L6613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6609-L6613)

```diff
-       resetSprites() {
-         if (!this.maintainStateBetweenFrames)
-           for (let RR = uR.MIN_RENDERINGGROUPS; RR < uR.MAX_RENDERINGGROUPS; RR++) {
-             const JR = this._renderingGroups[RR];
-             JR && JR.prepareSprites()
+       _rebuild() {
+         const rr = this._cloneRenderTargetWrapper();
+         if (rr) {
+           if (this._depthStencilTexture) {
+             const Sr = this._depthStencilTexture.samplingMode,
+               Qr = this._depthStencilTexture.format,
+               Zr = 2 === Sr || 3 === Sr || 11 === Sr;
+             rr.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, Zr, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, Qr, this._depthStencilTextureLabel)
```

#### 143. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6617` → after: `L2493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2493) · [Before (L6617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6617)

```diff
-         this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
+         arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (this._depthStencilTexture?.dispose(), this._depthStencilTexture = null, this.releaseTextures()), this._engine._releaseRenderTargetWrapper(this)
```

#### 144. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6619-L6623` → after: `L2495-L2503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2495-L2503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2495-L2503) · [Before (L6619-L6623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6619-L6623)

```diff
-       freeRenderingGroups() {
-         for (let RR = uR.MIN_RENDERINGGROUPS; RR < uR.MAX_RENDERINGGROUPS; RR++) {
-           const JR = this._renderingGroups[RR];
-           JR && JR.dispose()
-         }
+     }
+   },
+   42273: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       e: () => Zr
+     });
+     class Zr {
+       static get ForceFullSceneLoadingForIncremental() {
+         return Zr._ForceFullSceneLoadingForIncremental
```

#### 145. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6625-L6626` → after: `L2505-L2506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2505-L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2505-L2506) · [Before (L6625-L6626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6625-L6626)

```diff
-       _prepareRenderingGroup(RR) {
-         void 0 === this._renderingGroups[RR] && (this._renderingGroups[RR] = new yR.d(RR, this._scene, this._customOpaqueSortCompareFn[RR], this._customAlphaTestSortCompareFn[RR], this._customTransparentSortCompareFn[RR]), this._renderingGroups[RR].disableDepthPrePass = this._dis … [truncated]
+       static set ForceFullSceneLoadingForIncremental(rr) {
+         Zr._ForceFullSceneLoadingForIncremental = rr
```

#### 146. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6628-L6629` → after: `L2508-L2509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2508-L2509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2508-L2509) · [Before (L6628-L6629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6628-L6629)

```diff
-       dispatchSprites(RR) {
-         this.maintainStateBetweenFrames && RR._wasDispatched || (RR._wasDispatched = !0, this.getRenderingGroup(RR.renderingGroupId).dispatchSprites(RR))
+       static get ShowLoadingScreen() {
+         return Zr._ShowLoadingScreen
```

#### 147. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6631-L6632` → after: `L2511-L2512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2511-L2512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2511-L2512) · [Before (L6631-L6632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6631-L6632)

```diff
-       dispatchParticles(RR) {
-         this.maintainStateBetweenFrames && RR._wasDispatched || (RR._wasDispatched = !0, this.getRenderingGroup(RR.renderingGroupId).dispatchParticles(RR))
+       static set ShowLoadingScreen(rr) {
+         Zr._ShowLoadingScreen = rr
```

#### 148. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6634-L6635` → after: `L2514-L2515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2514-L2515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2514-L2515) · [Before (L6634-L6635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6634-L6635)

```diff
-       dispatch(RR, JR, GR) {
-         void 0 === JR && (JR = RR.getMesh()), this.maintainStateBetweenFrames && RR._wasDispatched || (RR._wasDispatched = !0, this.getRenderingGroup(JR.renderingGroupId).dispatch(RR, JR, GR))
+       static get loggingLevel() {
+         return Zr._LoggingLevel
```

#### 149. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6637-L6644` → after: `L2517-L2518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2517-L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2517-L2518) · [Before (L6637-L6644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6637-L6644)

```diff
-       setRenderingOrder(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-           yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-         if (this._customOpaqueSortCompareFn[RR] = JR, this._customAlphaTestSortCompareFn[RR] = GR, this._customTransparentSortCompareFn[RR] = yR, this._renderingGroups[RR]) {
-           const JR = this._renderingGroups[RR];
-           JR.opaqueSortCompareFn = this._customOpaqueSortCompareFn[RR], JR.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[RR], JR.transparentSortCompareFn = this._customTransparentSortCompareFn[RR]
-         }
+       static set loggingLevel(rr) {
+         Zr._LoggingLevel = rr
```

#### 150. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6646-L6653` → after: `L2520-L2521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2520-L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2520-L2521) · [Before (L6646-L6653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6646-L6653)

```diff
-       setRenderingAutoClearDepthStencil(RR, JR) {
-         let GR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
-           yR = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-         this._autoClearDepthStencil[RR] = {
-           autoClear: JR,
-           depth: GR,
-           stencil: yR
-         }
+       static get CleanBoneMatrixWeights() {
+         return Zr._CleanBoneMatrixWeights
```

#### 151. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6655-L6656` → after: `L2523-L2524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2523-L2524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2523-L2524) · [Before (L6655-L6656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6655-L6656)

```diff
-       getAutoClearDepthStencilSetup(RR) {
-         return this._autoClearDepthStencil[RR]
+       static set CleanBoneMatrixWeights(rr) {
+         Zr._CleanBoneMatrixWeights = rr
```

#### 152. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6659` → after: `L2527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2527) · [Before (L6659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6659)

```diff
-     uR.MAX_RENDERINGGROUPS = 4, uR.MIN_RENDERINGGROUPS = 0, uR.AUTOCLEAR = !0
+     Zr._ForceFullSceneLoadingForIncremental = !1, Zr._ShowLoadingScreen = !0, Zr._CleanBoneMatrixWeights = !1, Zr._LoggingLevel = 0
```

#### 153. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6661` → after: `L2529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2529) · [Before (L6661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6661)

```diff
-   41429: (RR, JR, GR) => {
+   41928: (rr, Sr, Qr) => {
```

#### 154. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6663` → after: `L2531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2531) · [Before (L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6663)

```diff
-       d: () => yR
+       e: () => jr
```

#### 155. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6665-L6667` → after: `L2533-L2558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2533-L2558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2533-L2558) · [Before (L6665-L6667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6665-L6667)

```diff
-     class yR {
-       constructor(RR) {
-         this._supportBlendParametersPerTarget = RR, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled =  … [truncated]
+     var Zr = Qr(40246);
+     const Wr = new Map;
+ 
+     function ar(rr, Sr) {
+       (function(rr) {
+         return Wr.delete(rr)
+       })(rr) && Zr.c.Warn(`Extension with the name '${rr}' already exists`), Wr.set(rr, Sr)
+     }
+ 
+     function jr(rr, Sr) {
+       "image/ktx" !== Sr && "image/ktx2" !== Sr || (rr = ".ktx"), Wr.has(rr) || (rr.endsWith(".ies") && ar(".ies", (async () => await Qr.e(628).then((() => Qr(54312))).then((rr => new rr._IESTextureLoader)))), rr.endsWith(".dds") && ar(".dds", (async () => await Qr.e(626).then((( … [truncated]
+       const Zr = Wr.get(rr);
+       return Zr ? Promise.resolve(Zr(Sr)) : null
+     }
+   },
+   42293: (rr, Sr, Qr) => {
+ ... (10 more added lines; see GitHub link above)
```

#### 156. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6669-L6670` → after: `L2560-L2561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2560-L2561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2560-L2561) · [Before (L6669-L6670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6669-L6670)

```diff
-       get isDirty() {
-         return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
+       set Lrr(rr) {
+         this._subMaterials = rr, this._hookArray(rr)
```

#### 157. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6672-L6673` → after: `L2563-L2564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2563-L2564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2563-L2564) · [Before (L6672-L6673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6672-L6673)

```diff
-       get alphaBlend() {
-         return this._numTargetEnabled > 0
+       getChildren() {
+         return this.Lrr
```

#### 158. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6675-L6676` → after: `L2566-L2567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2566-L2567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2566-L2567) · [Before (L6675-L6676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6675-L6676)

```diff
-       set alphaBlend(RR) {
-         this.setAlphaBlend(RR)
+       constructor(rr, Sr) {
+         super(rr, Sr, !0), this._waitingSubMaterialsUniqueIds = [], this.eC().addMultiMaterial(this), this.Lrr = [], this._storeEffectOnSubMeshes = !0
```

#### 159. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6678-L6680` → after: `L2569-L2581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2569-L2581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2569-L2581) · [Before (L6678-L6680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6678-L6680)

```diff
-       setAlphaBlend(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         this._alphaBlend[JR] !== RR && (RR ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[JR] = RR, this._isAlphaBlendDirty = !0)
+       _hookArray(rr) {
+         var Sr = this;
+         const Qr = rr.push;
+         rr.push = function() {
+           for (var Zr = arguments.length, Wr = new Array(Zr), ar = 0; ar < Zr; ar++) Wr[ar] = arguments[ar];
+           const jr = Qr.apply(rr, Wr);
+           return Sr._markAllSubMeshesAsTexturesDirty(), jr
+         };
+         const Zr = rr.splice;
+         rr.splice = (Sr, Qr) => {
+           const Wr = Zr.call(rr, Sr, Qr ?? rr.length);
+           return this._markAllSubMeshesAsTexturesDirty(), Wr
+         }
```

#### 160. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6682-L6683` → after: `L2583-L2584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2583-L2584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2583-L2584) · [Before (L6682-L6683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6682-L6683)

```diff
-       setAlphaBlendConstants(RR, JR, GR, yR) {
-         this._blendConstants[0] === RR && this._blendConstants[1] === JR && this._blendConstants[2] === GR && this._blendConstants[3] === yR || (this._blendConstants[0] = RR, this._blendConstants[1] = JR, this._blendConstants[2] = GR, this._blendConstants[3] = yR, this._isBlendCo … [truncated]
+       getSubMaterial(rr) {
+         return rr < 0 || rr >= this.Lrr.length ? this.eC().defaultMaterial : this.Lrr[rr]
```

#### 161. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6685-L6687` → after: `L2586-L2587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2586-L2587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2586-L2587) · [Before (L6685-L6687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6685-L6687)

```diff
-       setAlphaBlendFunctionParameters(RR, JR, GR, yR) {
-         const tR = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
-         this._blendFunctionParameters[tR + 0] === RR && this._blendFunctionParameters[tR + 1] === JR && this._blendFunctionParameters[tR + 2] === GR && this._blendFunctionParameters[tR + 3] === yR || (this._blendFunctionParameters[tR + 0] = RR, this._blendFunctionParameters[tR +  … [truncated]
+       getActiveTextures() {
+         return super.getActiveTextures().concat(...this.Lrr.map((rr => rr ? rr.getActiveTextures() : [])))
```

#### 162. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6689-L6691` → after: `L2589-L2593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2589-L2593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2589-L2593) · [Before (L6689-L6691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6689-L6691)

```diff
-       setAlphaEquationParameters(RR, JR) {
-         const GR = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
-         this._blendEquationParameters[GR + 0] === RR && this._blendEquationParameters[GR + 1] === JR || (this._blendEquationParameters[GR + 0] = RR, this._blendEquationParameters[GR + 1] = JR, this._isBlendEquationParametersDirty = !0)
+       hasTexture(rr) {
+         if (super.hasTexture(rr)) return !0;
+         for (let Sr = 0; Sr < this.Lrr.length; Sr++)
+           if (this.Lrr[Sr]?.hasTexture(rr)) return !0;
+         return !1
```

#### 163. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6693-L6694` → after: `L2595-L2596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2595-L2596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2595-L2596) · [Before (L6693-L6694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6693-L6694)

```diff
-       reset() {
-         this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this. … [truncated]
+       getClassName() {
+         return "MultiMaterial"
```

#### 164. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6696-L6718` → after: `L2598-L2606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2598-L2606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2598-L2606) · [Before (L6696-L6718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6696-L6718)

```diff
-       apply(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
-           GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         if (this._numTargets !== JR && (this._numTargets = JR, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== GR && (this._blendDisabledTargetsMask = GR, this._isAlphaBlendDirty = !0), !this.isDirty) return;
-         if (this._isBlendConstantsDirty && (RR.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === JR || !this._supportBlendParametersPerTarget) {
-           if (this._isAlphaBlendDirty) {
-             if (JR > 1 && 0 !== GR && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
-             this._alphaBlend[0] && 0 === (1 & GR) ? RR.enable(RR.BLEND) : RR.disable(RR.BLEND), this._isAlphaBlendDirty = !1
-           }
-           return this._isBlendFunctionParametersDirty && (RR.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEq … [truncated]
-         }
-         const yR = RR;
-         if (this._isAlphaBlendDirty) {
-           for (let tR = 0; tR < JR; tR++) {
-             const JR = tR < this._numTargetEnabled ? tR : 0;
-             this._alphaBlend[JR] && 0 === (GR & 1 << tR) ? yR.enableIndexed(RR.BLEND, tR) : yR.disableIndexed(RR.BLEND, tR)
- ... (7 more removed lines; see GitHub link above)
+       isReadyForSubMesh(rr, Sr, Qr) {
+         for (let Zr = 0; Zr < this.Lrr.length; Zr++) {
+           const Wr = this.Lrr[Zr];
+           if (Wr) {
+             if (Wr._storeEffectOnSubMeshes) {
+               if (!Wr.isReadyForSubMesh(rr, Sr, Qr)) return !1;
+               continue
+             }
+             if (!Wr.isReady(rr)) return !1
```

#### 165. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6722-L6727` → after: `L2609-L2616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2609-L2616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2609-L2616) · [Before (L6722-L6727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6722-L6727)

```diff
-         if (this._isBlendEquationParametersDirty) {
-           for (let RR = 0; RR < JR; RR++) {
-             const JR = RR < this._numTargetEnabled ? 2 * RR : 0;
-             yR.blendEquationSeparateIndexed(RR, this._blendEquationParameters[JR + 0], this._blendEquationParameters[JR + 1])
-           }
-           this._isBlendEquationParametersDirty = !1
+         return !0
+       }
+       clone(rr, Sr) {
+         const Qr = new jr(rr, this.eC());
+         for (let Zr = 0; Zr < this.Lrr.length; Zr++) {
+           let Wr;
+           const ar = this.Lrr[Zr];
+           Wr = Sr && ar ? ar.clone(rr + "-" + ar.name) : this.Lrr[Zr], Qr.Lrr.push(Wr)
```

#### 166. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6730-L6794` → after: `L2620-L2625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2620-L2625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2620-L2625) · [Before (L6730-L6794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6730-L6794)

```diff
-       setAlphaMode(RR, JR) {
-         let GR = 32774;
-         switch (RR) {
-           case 0:
-             break;
-           case 7:
-             this.setAlphaBlendFunctionParameters(1, 771, 1, 1, JR);
-             break;
-           case 8:
-           case 14:
-             this.setAlphaBlendFunctionParameters(1, 771, 1, 771, JR);
-             break;
-           case 2:
-             this.setAlphaBlendFunctionParameters(770, 771, 1, 1, JR);
-             break;
-           case 6:
- ... (49 more removed lines; see GitHub link above)
+       serialize() {
+         const rr = {};
+         rr.name = this.name, rr.id = this.id, rr.uniqueId = this.uniqueId, Wr.b && (rr.tags = Wr.b.GetTags(this)), rr.materialsUniqueIds = [], rr.materials = [];
+         for (let Sr = 0; Sr < this.Lrr.length; Sr++) {
+           const Qr = this.Lrr[Sr];
+           Qr ? (rr.materialsUniqueIds.push(Qr.uniqueId), rr.materials.push(Qr.id)) : (rr.materialsUniqueIds.push(null), rr.materials.push(null))
```

#### 167. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6796` → after: `L2627-L2638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2627-L2638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2627-L2638) · [Before (L6796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6796)

```diff
-         this.setAlphaEquationParameters(GR, GR, JR)
+         return rr
+       }
+       dispose(rr, Sr, Qr) {
+         const Zr = this.eC();
+         if (!Zr) return;
+         if (Qr)
+           for (let ar = 0; ar < this.Lrr.length; ar++) {
+             const Qr = this.Lrr[ar];
+             Qr && Qr.dispose(rr, Sr)
+           }
+         const Wr = Zr.multiMaterials.indexOf(this);
+         Wr >= 0 && Zr.multiMaterials.splice(Wr, 1), super.dispose(rr, Sr)
```

#### 168. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6800` → after: `L2655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2655) · [Before (L6800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6800)

```diff
-   41710: (RR, JR, GR) => {
+   42069: (rr, Sr, Qr) => {
```

#### 169. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6802` → after: `L2657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2657) · [Before (L6802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6802)

```diff
-       d: () => yR
+       c: () => jr
```

#### 170. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6805` → after: `L2664-L2667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2664-L2667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2664-L2667) · [Before (L6805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6805)

```diff
-     yR._IsPickingAvailable = !1
+     jr.X = new ar.u(1, 0, 0), jr.Y = new ar.u(0, 1, 0), jr.Z = new ar.u(0, 0, 1),
+       function(rr) {
+         rr[rr.X = 0] = "X", rr[rr.Y = 1] = "Y", rr[rr.Z = 2] = "Z"
+       }(Wr || (Wr = {}))
```

#### 171. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6807` → after: `L2669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2669) · [Before (L6807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6807)

```diff
-   41612: (RR, JR, GR) => {
+   41861: (rr, Sr, Qr) => {
```

#### 172. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6810` → after: `L2672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2672) · [Before (L6810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6810)

```diff
-       g: () => uG
+       d: () => Er
```

#### 173. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6812-L6816` → after: `L2674-L2678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2674-L2678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2674-L2678) · [Before (L6812-L6816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6812-L6816)

```diff
-     var yR = GR(41616),
-       tR = GR(41415),
-       uR = GR(41425),
-       ZR = GR(38233),
-       qR = GR(41626);
+     var Zr = Qr(38560);
+     const Wr = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / ( … [truncated]
+       ar = [() => 1, rr => rr.y, rr => rr.z, rr => rr.x, rr => rr.x * rr.y, rr => rr.y * rr.z, rr => 3 * rr.z * rr.z - 1, rr => rr.x * rr.z, rr => rr.x * rr.x - rr.y * rr.y],
+       jr = (rr, Sr) => Wr[rr] * ar[rr](Sr),
+       Ir = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
```

#### 174. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6819-L6830` → after: `L2681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2681) · [Before (L6819-L6830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6819-L6830)

```diff
-         this._count = 0, this._data = {}
-       }
-       vN(RR) {
-         this.clear(), RR.forEach(((RR, JR) => this.add(RR, JR)))
-       }
-       get(RR) {
-         const JR = this._data[RR];
-         if (void 0 !== JR) return JR
-       }
-       getOrAddWithFactory(RR, JR) {
-         let GR = this.get(RR);
-         return void 0 !== GR || (GR = JR(RR), GR && this.add(RR, GR)), GR
+         this.preScaled = !1, this.l00 = Zr.u.Zero(), this.l1_1 = Zr.u.Zero(), this.l10 = Zr.u.Zero(), this.l11 = Zr.u.Zero(), this.l2_2 = Zr.u.Zero(), this.l2_1 = Zr.u.Zero(), this.l20 = Zr.u.Zero(), this.l21 = Zr.u.Zero(), this.l22 = Zr.u.Zero()
```

#### 175. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6832-L6834` → after: `L2683-L2687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2683-L2687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2683-L2687) · [Before (L6832-L6834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6832-L6834)

```diff
-       getOrAdd(RR, JR) {
-         const GR = this.get(RR);
-         return void 0 !== GR ? GR : (this.add(RR, JR), JR)
+       addLight(rr, Sr, Qr) {
+         Zr.n.kU[0].set(Sr.r, Sr.g, Sr.b);
+         const Wr = Zr.n.kU[0],
+           ar = Zr.n.kU[1];
+         Wr.scaleToRef(Qr, ar), ar.scaleToRef(jr(0, rr), Zr.n.kU[2]), this.l00.addInPlace(Zr.n.kU[2]), ar.scaleToRef(jr(1, rr), Zr.n.kU[2]), this.l1_1.addInPlace(Zr.n.kU[2]), ar.scaleToRef(jr(2, rr), Zr.n.kU[2]), this.l10.addInPlace(Zr.n.kU[2]), ar.scaleToRef(jr(3, rr), Zr.n.kU[2] … [truncated]
```

#### 176. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6836-L6837` → after: `L2689-L2690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2689-L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2689-L2690) · [Before (L6836-L6837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6836-L6837)

```diff
-       contains(RR) {
-         return void 0 !== this._data[RR]
+       scaleInPlace(rr) {
+         this.l00.scaleInPlace(rr), this.l1_1.scaleInPlace(rr), this.l10.scaleInPlace(rr), this.l11.scaleInPlace(rr), this.l2_2.scaleInPlace(rr), this.l2_1.scaleInPlace(rr), this.l20.scaleInPlace(rr), this.l21.scaleInPlace(rr), this.l22.scaleInPlace(rr)
```

#### 177. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6839-L6840` → after: `L2692-L2693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2692-L2693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2692-L2693) · [Before (L6839-L6840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6839-L6840)

```diff
-       add(RR, JR) {
-         return void 0 === this._data[RR] && (this._data[RR] = JR, ++this._count, !0)
+       convertIncidentRadianceToIrradiance() {
+         this.l00.scaleInPlace(Ir[0]), this.l1_1.scaleInPlace(Ir[1]), this.l10.scaleInPlace(Ir[2]), this.l11.scaleInPlace(Ir[3]), this.l2_2.scaleInPlace(Ir[4]), this.l2_1.scaleInPlace(Ir[5]), this.l20.scaleInPlace(Ir[6]), this.l21.scaleInPlace(Ir[7]), this.l22.scaleInPlace(Ir[8])
```

#### 178. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6842-L6843` → after: `L2695-L2696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2695-L2696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2695-L2696) · [Before (L6842-L6843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6842-L6843)

```diff
-       set(RR, JR) {
-         return void 0 !== this._data[RR] && (this._data[RR] = JR, !0)
+       convertIrradianceToLambertianRadiance() {
+         this.scaleInPlace(1 / Math.PI)
```

#### 179. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6845-L6847` → after: `L2698-L2699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2698-L2699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2698-L2699) · [Before (L6845-L6847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6845-L6847)

```diff
-       getAndRemove(RR) {
-         const JR = this.get(RR);
-         return void 0 !== JR ? (delete this._data[RR], --this._count, JR) : null
+       preScaleForRendering() {
+         this.preScaled = !0, this.l00.scaleInPlace(Wr[0]), this.l1_1.scaleInPlace(Wr[1]), this.l10.scaleInPlace(Wr[2]), this.l11.scaleInPlace(Wr[3]), this.l2_2.scaleInPlace(Wr[4]), this.l2_1.scaleInPlace(Wr[5]), this.l20.scaleInPlace(Wr[6]), this.l21.scaleInPlace(Wr[7]), this.l22 … [truncated]
```

#### 180. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6849-L6850` → after: `L2701-L2702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2701-L2702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2701-L2702) · [Before (L6849-L6850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6849-L6850)

```diff
-       remove(RR) {
-         return !!this.contains(RR) && (delete this._data[RR], --this._count, !0)
+       updateFromArray(rr) {
+         return Zr.u.FromArrayToRef(rr[0], 0, this.l00), Zr.u.FromArrayToRef(rr[1], 0, this.l1_1), Zr.u.FromArrayToRef(rr[2], 0, this.l10), Zr.u.FromArrayToRef(rr[3], 0, this.l11), Zr.u.FromArrayToRef(rr[4], 0, this.l2_2), Zr.u.FromArrayToRef(rr[5], 0, this.l2_1), Zr.u.FromArrayTo … [truncated]
```

#### 181. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6852-L6853` → after: `L2704-L2705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2704-L2705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2704-L2705) · [Before (L6852-L6853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6852-L6853)

```diff
-       clear() {
-         this._data = {}, this._count = 0
+       updateFromFloatsArray(rr) {
+         return Zr.u.FromFloatsToRef(rr[0], rr[1], rr[2], this.l00), Zr.u.FromFloatsToRef(rr[3], rr[4], rr[5], this.l1_1), Zr.u.FromFloatsToRef(rr[6], rr[7], rr[8], this.l10), Zr.u.FromFloatsToRef(rr[9], rr[10], rr[11], this.l11), Zr.u.FromFloatsToRef(rr[12], rr[13], rr[14], this. … [truncated]
```

#### 182. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6855-L6856` → after: `L2707-L2708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2707-L2708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2707-L2708) · [Before (L6855-L6856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6855-L6856)

```diff
-       get count() {
-         return this._count
+       static FromArray(rr) {
+         return (new fr).updateFromArray(rr)
```

#### 183. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6858-L6868` → after: `L2710-L2712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2710-L2712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2710-L2712) · [Before (L6858-L6868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6858-L6868)

```diff
-       forEach(RR) {
-         for (const JR in this._data) {
-           RR(JR, this._data[JR])
-         }
-       }
-       first(RR) {
-         for (const JR in this._data) {
-           const GR = RR(JR, this._data[JR]);
-           if (GR) return GR
-         }
-         return null
+       static FromPolynomial(rr) {
+         const Sr = new fr;
+         return Sr.l00 = rr.xx.scale(.376127).add(rr.yy.scale(.376127)).add(rr.zz.scale(.376126)), Sr.l1_1 = rr.y.scale(.977204), Sr.l10 = rr.z.scale(.977204), Sr.l11 = rr.x.scale(.977204), Sr.l2_2 = rr.xy.scale(1.16538), Sr.l2_1 = rr.yz.scale(1.16538), Sr.l20 = rr.zz.scale(1.3456 … [truncated]
```

#### 184. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6877-L6885` → after: `L2716-L2717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2716-L2717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2716-L2717) · [Before (L6877-L6885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6877-L6885)

```diff
-       constructor(RR, JR, GR, yR, tR, uR) {
-         this.source = RR, this.pointerX = JR, this.pointerY = GR, this.meshUnderPointer = yR, this.sourceEvent = tR, this.additionalData = uR
-       }
-       static CreateNew(RR, JR, GR) {
-         const yR = RR.jH();
-         return new eR(RR, yR.pointerX, yR.pointerY, yR.meshUnderPointer || RR, JR, GR)
-       }
-       static CreateNewFromSprite(RR, JR, GR, yR) {
-         return new eR(RR, JR.pointerX, JR.pointerY, JR.meshUnderPointer, GR, yR)
+       constructor() {
+         this.x = Zr.u.Zero(), this.y = Zr.u.Zero(), this.z = Zr.u.Zero(), this.xx = Zr.u.Zero(), this.yy = Zr.u.Zero(), this.zz = Zr.u.Zero(), this.xy = Zr.u.Zero(), this.yz = Zr.u.Zero(), this.zx = Zr.u.Zero()
```

#### 185. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6887-L6888` → after: `L2719-L2720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2719-L2720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2719-L2720) · [Before (L6887-L6888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6887-L6888)

```diff
-       static CreateNewFromScene(RR, JR) {
-         return new eR(null, RR.pointerX, RR.pointerY, RR.meshUnderPointer, JR)
+       get preScaledHarmonics() {
+         return this._harmonics || (this._harmonics = fr.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
```

#### 186. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6890-L6891` → after: `L2722-L2725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2722-L2725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2722-L2725) · [Before (L6890-L6891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6890-L6891)

```diff
-       static CreateNewFromPrimitive(RR, JR, GR, yR) {
-         return new eR(RR, JR.x, JR.y, null, GR, yR)
+       addAmbient(rr) {
+         Zr.n.kU[0].Hrr(rr.r, rr.g, rr.b);
+         const Sr = Zr.n.kU[0];
+         this.xx.addInPlace(Sr), this.yy.addInPlace(Sr), this.zz.addInPlace(Sr)
```

#### 187. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6893-L6904` → after: `L2727-L2728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2727-L2728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2727-L2728) · [Before (L6893-L6904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6893-L6904)

```diff
-     }
-     var aR = GR(41670),
-       LR = GR(41678),
-       nR = GR(41681),
-       UR = GR(41693),
-       WR = GR(41395),
-       AR = GR(38224),
-       CR = GR(41407),
-       XR = GR(41701);
-     class MR {
-       constructor() {
-         this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
+       scaleInPlace(rr) {
+         this.x.scaleInPlace(rr), this.y.scaleInPlace(rr), this.z.scaleInPlace(rr), this.xx.scaleInPlace(rr), this.yy.scaleInPlace(rr), this.zz.scaleInPlace(rr), this.yz.scaleInPlace(rr), this.zx.scaleInPlace(rr), this.xy.scaleInPlace(rr)
```

#### 188. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6906-L6909` → after: `L2730-L2731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2730-L2731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2730-L2731) · [Before (L6906-L6909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6906-L6909)

```diff
-       static get HasTriggers() {
-         for (const RR in MR.Triggers)
-           if (Object.prototype.hasOwnProperty.call(MR.Triggers, RR)) return !0;
-         return !1
+       updateFromHarmonics(rr) {
+         return this._harmonics = rr, this.x.iH(rr.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.iH(rr.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.iH(rr.l10), this.z.scaleInPlace(1.02333), this.xx.iH(rr.l00), Zr.n.kU[0].iH(rr.l20).scaleInPlace(.24770 … [truncated]
```

#### 189. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6911-L6916` → after: `L2733-L2734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2733-L2734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2733-L2734) · [Before (L6911-L6916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6911-L6916)

```diff
-       static get HasPickTriggers() {
-         for (const RR in MR.Triggers)
-           if (Object.prototype.hasOwnProperty.call(MR.Triggers, RR)) {
-             const JR = parseInt(RR);
-             if (JR >= 1 && JR <= 7) return !0
-           } return !1
+       static FromHarmonics(rr) {
+         return (new Er).updateFromHarmonics(rr)
```

#### 190. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6918-L6922` → after: `L2736-L2738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2736-L2738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2736-L2738) · [Before (L6918-L6922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6918-L6922)

```diff
-       static HasSpecificTrigger(RR) {
-         for (const JR in MR.Triggers)
-           if (Object.prototype.hasOwnProperty.call(MR.Triggers, JR)) {
-             if (parseInt(JR) === RR) return !0
-           } return !1
+       static FromArray(rr) {
+         const Sr = new Er;
+         return Zr.u.FromArrayToRef(rr[0], 0, Sr.x), Zr.u.FromArrayToRef(rr[1], 0, Sr.y), Zr.u.FromArrayToRef(rr[2], 0, Sr.z), Zr.u.FromArrayToRef(rr[3], 0, Sr.xx), Zr.u.FromArrayToRef(rr[4], 0, Sr.yy), Zr.u.FromArrayToRef(rr[5], 0, Sr.zz), Zr.u.FromArrayToRef(rr[6], 0, Sr.yz), Zr … [truncated]
```

#### 191. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6925-L6948` → after: `L2741-L2755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2741-L2755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2741-L2755) · [Before (L6925-L6948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6925-L6948)

```diff
-     MR.Triggers = {};
-     var BR, lR, pR, gR, bR, vR, OR, xR = GR(41705);
-     ! function(RR) {
-       RR[RR.Generic = 0] = "Generic", RR[RR.Keyboard = 1] = "Keyboard", RR[RR.Mouse = 2] = "Mouse", RR[RR.Touch = 3] = "Touch", RR[RR.DualShock = 4] = "DualShock", RR[RR.Xbox = 5] = "Xbox", RR[RR.Switch = 6] = "Switch", RR[RR.DualSense = 7] = "DualSense"
-     }(BR || (BR = {})),
-     function(RR) {
-       RR[RR.Horizontal = 0] = "Horizontal", RR[RR.Vertical = 1] = "Vertical", RR[RR.LeftClick = 2] = "LeftClick", RR[RR.MiddleClick = 3] = "MiddleClick", RR[RR.RightClick = 4] = "RightClick", RR[RR.BrowserBack = 5] = "BrowserBack", RR[RR.BrowserForward = 6] = "BrowserForward", RR … [truncated]
-     }(lR || (lR = {})),
-     function(RR) {
-       RR[RR.Horizontal = 0] = "Horizontal", RR[RR.Vertical = 1] = "Vertical", RR[RR.LeftClick = 2] = "LeftClick", RR[RR.MiddleClick = 3] = "MiddleClick", RR[RR.RightClick = 4] = "RightClick", RR[RR.BrowserBack = 5] = "BrowserBack", RR[RR.BrowserForward = 6] = "BrowserForward", RR … [truncated]
-     }(pR || (pR = {})),
-     function(RR) {
-       RR[RR.Cross = 0] = "Cross", RR[RR.Circle = 1] = "Circle", RR[RR.Square = 2] = "Square", RR[RR.Triangle = 3] = "Triangle", RR[RR.L1 = 4] = "L1", RR[RR.R1 = 5] = "R1", RR[RR.L2 = 6] = "L2", RR[RR.R2 = 7] = "R2", RR[RR.Share = 8] = "Share", RR[RR.Options = 9] = "Options", RR[R … [truncated]
-     }(gR || (gR = {})),
-     function(RR) {
-       RR[RR.Cross = 0] = "Cross", RR[RR.Circle = 1] = "Circle", RR[RR.Square = 2] = "Square", RR[RR.Triangle = 3] = "Triangle", RR[RR.L1 = 4] = "L1", RR[RR.R1 = 5] = "R1", RR[RR.L2 = 6] = "L2", RR[RR.R2 = 7] = "R2", RR[RR.Create = 8] = "Create", RR[RR.Options = 9] = "Options", RR … [truncated]
- ... (8 more removed lines; see GitHub link above)
+   },
+   42284: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       c: () => Hr,
+       f: () => Rr
+     });
+     var Zr = Qr(41872),
+       Wr = Qr(38595),
+       ar = Qr(38560),
+       jr = Qr(41995),
+       Ir = Qr(42256),
+       fr = Qr(42287),
+       Er = Qr(41989),
+       pr = Qr(42147),
+       xr = Qr(41987);
```

#### 192. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6950-L7004` → after: `L2757-L2805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2757-L2805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2757-L2805) · [Before (L6950-L7004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L6950-L7004)

```diff
-       static CreateDeviceEvent(RR, JR, GR, yR, tR, uR, ZR) {
-         switch (RR) {
-           case BR.Keyboard:
-             return this._CreateKeyboardEvent(GR, yR, tR, uR);
-           case BR.Mouse:
-             if (GR === lR.MouseWheelX || GR === lR.MouseWheelY || GR === lR.MouseWheelZ) return this._CreateWheelEvent(RR, JR, GR, yR, tR, uR);
-           case BR.Touch:
-             return this._CreatePointerEvent(RR, JR, GR, yR, tR, uR, ZR);
-           default:
-             throw `Unable to generate event for device ${BR[RR]}`
-         }
-       }
-       static _CreatePointerEvent(RR, JR, GR, yR, tR, uR, ZR) {
-         const qR = this._CreateMouseEvent(RR, JR, GR, yR, tR, uR);
-         RR === BR.Mouse ? (qR.deviceType = BR.Mouse, qR.pointerId = 1, qR.pointerType = "mouse") : (qR.deviceType = BR.Touch, qR.pointerId = ZR ?? JR, qR.pointerType = "touch");
-         let iR = 0;
- ... (39 more removed lines; see GitHub link above)
+       constructor() {
+         this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new ar.u(0, 0, 0), this._diffPositionForCollisions = new ar.u(0, 0, 0), this._collisionResponse = !0
+       }
+     }
+     var Nr, Ur, tr, hr = Qr(41769),
+       zr = Qr(41922),
+       Yr = Qr(42162),
+       nr = Qr(38684),
+       er = Qr(38569),
+       Kr = Qr(42069),
+       yr = Qr(40246),
+       Br = Qr(41875),
+       Tr = Qr(41784),
+       vr = Qr(38609);
+ 
+     function Or(rr, Sr) {
+ ... (33 more added lines; see GitHub link above)
```

#### 193. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7008-L7028` → after: `L2810-L2816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2810-L2816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2810-L2816) · [Before (L7008-L7028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7008-L7028)

```diff
-       constructor(RR, JR, GR) {
-         this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(RR, JR, ((RR, JR, yR, tR) => {
-           const uR = DR.CreateDeviceEvent(RR, JR, yR, tR, this);
-           GR(RR, JR, uR)
-         })) : this._createDummyNativeInput()
-       }
-       pollInput(RR, JR, GR) {
-         return this._nativeInput.pollInput(RR, JR, GR)
-       }
-       isDeviceAvailable(RR) {
-         return RR === BR.Mouse || RR === BR.Touch
-       }
-       dispose() {
-         this._nativeInput.dispose()
-       }
-       _createDummyNativeInput() {
- ... (5 more removed lines; see GitHub link above)
+       constructor() {
+         this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = ar.u.Zero(), this.subDiv = {
+           max: 1,
+           X: 1,
+           Y: 1,
+           Z: 1
+         }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
```

#### 194. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7033-L7094` → after: `L2820-L2821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2820-L2821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2820-L2821) · [Before (L7033-L7094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7033-L7094)

```diff
-       constructor(RR, JR, GR, tR) {
-         this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = yR.h.IsSafari(), this._usingMacOs = (0, WR.i)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = RR => {}, this._keyboardUpEvent = RR => {}, this._k … [truncated]
-           this._enableEvents()
-         })
-       }
-       pollInput(RR, JR, GR) {
-         const tR = this._inputs[RR][JR];
-         if (!tR) throw `Unable to find device ${BR[RR]}`;
-         RR >= BR.DualShock && RR <= BR.DualSense && this._updateDevice(RR, JR, GR);
-         const uR = tR[GR];
-         if (void 0 === uR) throw `Unable to find input ${GR} for device ${BR[RR]} in slot ${JR}`;
-         return GR === lR.Move && yR.h.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), uR
-       }
-       isDeviceAvailable(RR) {
-         return void 0 !== this._inputs[RR]
-       }
- ... (46 more removed lines; see GitHub link above)
+       constructor() {
+         this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new Xr, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, th … [truncated]
```

#### 195. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7096-L7103` → after: `L2823-L3000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2823-L3000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L2823-L3000) · [Before (L7096-L7103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7096-L7103)

```diff
-       _handleKeyActions() {
-         this._keyboardDownEvent = RR => {
-           this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(BR.Keyboard, 0, 255));
-           const JR = this._inputs[BR.Keyboard][0];
-           if (JR) {
-             JR[RR.keyCode] = 1;
-             const GR = RR;
-             GR.inputIndex = RR.keyCode, this._usingMacOs && RR.metaKey && "Meta" !== RR.key && (this._metaKeys.includes(RR.keyCode) || this._metaKeys.push(RR.keyCode)), this._onInputChanged(BR.Keyboard, 0, GR)
+     }
+     let Hr = (() => {
+         var rr;
+         let Sr, mr = fr.e,
+           Nr = [];
+         return rr = class extends mr {
+           static get BILLBOARDMODE_NONE() {
+             return fr.e.BILLBOARDMODE_NONE
+           }
+           static get BILLBOARDMODE_X() {
+             return fr.e.BILLBOARDMODE_X
+           }
+           static get BILLBOARDMODE_Y() {
+             return fr.e.BILLBOARDMODE_Y
+           }
+           static get BILLBOARDMODE_Z() {
+ ... (162 more added lines; see GitHub link above)
```

#### 196. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7105-L7116` → after: `L3002-L3053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3002-L3053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3002-L3053) · [Before (L7105-L7116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7105-L7116)

```diff
-         }, this._keyboardUpEvent = RR => {
-           this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(BR.Keyboard, 0, 255));
-           const JR = this._inputs[BR.Keyboard][0];
-           if (JR) {
-             JR[RR.keyCode] = 0;
-             const GR = RR;
-             if (GR.inputIndex = RR.keyCode, this._usingMacOs && "Meta" === RR.key && this._metaKeys.length > 0) {
-               for (const RR of this._metaKeys) {
-                 const GR = DR.CreateDeviceEvent(BR.Keyboard, 0, RR, 0, this, this._elementToAttachTo);
-                 JR[RR] = 0, this._onInputChanged(BR.Keyboard, 0, GR)
-               }
-               this._metaKeys.splice(0, this._metaKeys.length)
+           set layerMask(rr) {
+             rr !== this._internalAbstractMeshDataInfo._layerMask && (this._internalAbstractMeshDataInfo._layerMask = rr, this._resyncLightSources())
+           }
+           get collisionMask() {
+             return this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask
+           }
+           set collisionMask(rr) {
+             this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask = isNaN(rr) ? -1 : rr
+           }
+           get collisionResponse() {
+             return this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse
+           }
+           set collisionResponse(rr) {
+             this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse = rr
+           }
+           get collisionGroup() {
+ ... (36 more added lines; see GitHub link above)
```

#### 197. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7120-L7216` → after: `L3056-L3085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3056-L3085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3056-L3085) · [Before (L7120-L7216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7120-L7216)

```diff
-         }, this._keyboardBlurEvent = () => {
-           if (this._keyboardActive) {
-             const RR = this._inputs[BR.Keyboard][0];
-             for (let JR = 0; JR < RR.length; JR++)
-               if (0 !== RR[JR]) {
-                 RR[JR] = 0;
-                 const GR = DR.CreateDeviceEvent(BR.Keyboard, 0, JR, 0, this, this._elementToAttachTo);
-                 this._onInputChanged(BR.Keyboard, 0, GR)
-               } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
-           }
-         }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
-       }
-       _handlePointerActions() {
-         this._maxTouchPoints = (0, WR.i)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
-         for (let yR = 0; yR < this._maxTouchPoints; yR++) this._activeTouchIds[yR] = -1;
-         this._pointerMoveEvent = RR => {
- ... (81 more removed lines; see GitHub link above)
+           _buildUniformLayout() {
+             this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
+           }
+           transferToEffect(rr) {
+             const Sr = this._uniformBuffer;
+             Sr.hrr("world", rr), Sr.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), Sr.update()
+           }
+           getMeshUniformBuffer() {
+             return this._uniformBuffer
+           }
+           get _isGaussianSplatting() {
+             return !1
+           }
+           getClassName() {
+             return "AbstractMesh"
+           }
+ ... (14 more added lines; see GitHub link above)
```

#### 198. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7218-L7230` → after: `L3087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3087) · [Before (L7218-L7230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7218-L7230)

```diff
-           });
-           this._elementToAttachTo.addEventListener("test", JR, GR), this._elementToAttachTo.removeEventListener("test", JR, GR)
-         } catch (GR) {}
-         this._pointerBlurEvent = () => {
-           if (this.isDeviceAvailable(BR.Mouse)) {
-             const RR = this._inputs[BR.Mouse][0];
-             this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
-             for (let JR = lR.LeftClick; JR <= lR.BrowserForward; JR++)
-               if (1 === RR[JR]) {
-                 RR[JR] = 0;
-                 const GR = DR.CreateDeviceEvent(BR.Mouse, 0, JR, 0, this, this._elementToAttachTo);
-                 this._onInputChanged(BR.Mouse, 0, GR)
-               }
+             return this.parent ? this.parent._getActionManagerForTrigger(rr, !1) : null
```

#### 199. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7232-L7240` → after: `L3089-L3093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3089-L3093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3089-L3093) · [Before (L7232-L7240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7232-L7240)

```diff
-           if (this.isDeviceAvailable(BR.Touch)) {
-             const RR = this._inputs[BR.Touch];
-             for (let JR = 0; JR < this._activeTouchIds.length; JR++) {
-               const GR = this._activeTouchIds[JR];
-               if (this._elementToAttachTo.hasPointerCapture?.(GR) && this._elementToAttachTo.releasePointerCapture(GR), -1 !== GR && 1 === RR[JR]?.[lR.LeftClick]) {
-                 RR[JR][lR.LeftClick] = 0;
-                 const yR = DR.CreateDeviceEvent(BR.Touch, JR, lR.LeftClick, 0, this, this._elementToAttachTo, GR);
-                 this._onInputChanged(BR.Touch, JR, yR), this._activeTouchIds[JR] = -1, this._onDeviceDisconnected(BR.Touch, JR)
-               }
+           _releaseRenderPassId(rr) {}
+           _rebuild() {
+             if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.jT) {
+               for (const rr of this.jT) rr._rebuild();
+               this.resetDrawCache()
```

#### 200. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7243-L7250` → after: `L3096-L3112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3096-L3112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3096-L3112) · [Before (L7243-L7250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7243-L7250)

```diff
-         }, this._pointerWheelEvent = RR => {
-           const JR = BR.Mouse;
-           this._inputs[JR] || (this._inputs[JR] = []), this._inputs[JR][0] || (this._pointerActive = !0, this._registerDevice(JR, 0, oR));
-           const GR = this._inputs[JR][0];
-           if (GR) {
-             GR[lR.MouseWheelX] = RR.deltaX || 0, GR[lR.MouseWheelY] = RR.deltaY || RR.wheelDelta || 0, GR[lR.MouseWheelZ] = RR.deltaZ || 0;
-             const yR = RR;
-             void 0 === RR.pointerId && (RR.pointerId = this._mouseId), 0 !== GR[lR.MouseWheelX] && (yR.inputIndex = lR.MouseWheelX, this._onInputChanged(JR, 0, yR)), 0 !== GR[lR.MouseWheelY] && (yR.inputIndex = lR.MouseWheelY, this._onInputChanged(JR, 0, yR)), 0 !== GR[lR.MouseWh … [truncated]
+           _resyncLightSources() {
+             this._lightSources.length = 0;
+             for (const rr of this.eC().lights) rr.isEnabled() && rr.canAffectMesh(this) && this._lightSources.push(rr);
+             this._markSubMeshesAsLightDirty()
+           }
+           _resyncLightSource(rr) {
+             const Sr = rr.isEnabled() && rr.canAffectMesh(this),
+               Qr = this._lightSources.indexOf(rr);
+             let Zr = !1;
+             if (-1 === Qr) {
+               if (!Sr) return;
+               this._lightSources.push(rr)
+             } else {
+               if (Sr) return;
+               Zr = !0, this._lightSources.splice(Qr, 1)
+             }
+ ... (1 more added lines; see GitHub link above)
```

#### 201. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7252-L7259` → after: `L3114-L3115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3114-L3115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3114-L3115) · [Before (L7252-L7259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7252-L7259)

```diff
-         }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = RR => {
-           RR.buttons > 1 && this._pointerCancelEvent(RR)
-         }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._p … [truncated]
-           passive: !1
-         }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
-           if (this.isDeviceAvailable(BR.Mouse)) {
-             const RR = this._inputs[BR.Mouse][0];
-             RR[lR.MouseWheelX] = 0, RR[lR.MouseWheelY] = 0, RR[lR.MouseWheelZ] = 0
+           _unBindEffect() {
+             for (const rr of this.jT) rr.setEffect(null)
```

#### 202. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7261-L7270` → after: `L3117-L3118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3117-L3118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3117-L3118) · [Before (L7261-L7270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7261-L7270)

```diff
-         }))
-       }
-       _handleGamepadActions() {
-         this._gamepadConnectedEvent = RR => {
-           this._addGamePad(RR.gamepad)
-         }, this._gamepadDisconnectedEvent = RR => {
-           if (this._gamepads) {
-             const JR = this._getGamepadDeviceType(RR.gamepad.id),
-               GR = RR.gamepad.index;
-             this._unregisterDevice(JR, GR), delete this._gamepads[GR]
+           _removeLightSource(rr, Sr) {
+             const Qr = this._lightSources.indexOf(rr); - 1 !== Qr && (this._lightSources.splice(Qr, 1), this._markSubMeshesAsLightDirty(Sr))
```

#### 203. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7272-L7306` → after: `L3120-L3126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3120-L3126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3120-L3126) · [Before (L7272-L7306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7272-L7306)

```diff
-         }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
-       }
-       _updateDevice(RR, JR, GR) {
-         const yR = navigator.getGamepads()[JR];
-         if (yR && RR === this._gamepads[JR]) {
-           const tR = this._inputs[RR][JR];
-           GR >= yR.buttons.length ? tR[GR] = yR.axes[GR - yR.buttons.length].valueOf() : tR[GR] = yR.buttons[GR].value
-         }
-       }
-       _getGamepadDeviceType(RR) {
-         return -1 !== RR.indexOf("054c") ? -1 !== RR.indexOf("0ce6") ? BR.DualSense : BR.DualShock : -1 !== RR.indexOf("Xbox One") || -1 !== RR.search("Xbox 360") || -1 !== RR.search("xinput") || -1 !== RR.indexOf("045e") && -1 === RR.indexOf("Surface Dock") ? BR.Xbox : -1 !== RR … [truncated]
-       }
-       _getPointerType(RR) {
-         let JR = BR.Mouse;
-         return ("touch" === RR.pointerType || "pen" === RR.pointerType || RR.touches) && (JR = BR.Touch), JR
-       }
- ... (19 more removed lines; see GitHub link above)
+           _markSubMeshesAsDirty(rr) {
+             if (this.jT)
+               for (const Sr of this.jT)
+                 for (let Qr = 0; Qr < Sr._drawWrappers.length; ++Qr) {
+                   const Zr = Sr._drawWrappers[Qr];
+                   Zr && Zr.defines && Zr.defines.markAllAsDirty && rr(Zr.defines)
+                 }
```

#### 204. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7308-L7319` → after: `L3128-L3243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3128-L3243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3128-L3243) · [Before (L7308-L7319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7308-L7319)

```diff
-           this._registeredManagers.push(RR)
-         }, this.unregisterManager = RR => {
-           const JR = this._registeredManagers.indexOf(RR);
-           JR > -1 && this._registeredManagers.splice(JR, 1)
-         };
-         const JR = Object.keys(BR).length / 2;
-         this._devices = new Array(JR);
-         const GR = (RR, JR) => {
-             this._devices[RR] || (this._devices[RR] = new Array), this._devices[RR][JR] || (this._devices[RR][JR] = JR);
-             for (const GR of this._registeredManagers) {
-               const yR = new PR(this._deviceInputSystem, RR, JR);
-               GR._addDevice(yR)
+           _markSubMeshesAsLightDirty() {
+             let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+             this._markSubMeshesAsDirty((Sr => Sr.markAsLightDirty(rr)))
+           }
+           _markSubMeshesAsAttributesDirty() {
+             this._markSubMeshesAsDirty((rr => rr.markAsAttributesDirty()))
+           }
+           _markSubMeshesAsMiscDirty() {
+             this._markSubMeshesAsDirty((rr => rr.markAsMiscDirty()))
+           }
+           BQr(rr) {
+             return this._currentRenderId = Number.MAX_VALUE, super.BQr(rr), this._isDirty = !0, this
+           }
+           resetDrawCache(rr) {
+             let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+             if (this.jT)
+ ... (100 more added lines; see GitHub link above)
```

#### 205. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7321-L7383` → after: `L3245-L3395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3245-L3395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3245-L3395) · [Before (L7321-L7383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7321-L7383)

```diff
-           },
-           yR = (RR, JR) => {
-             this._devices[RR]?.[JR] && delete this._devices[RR][JR];
-             for (const GR of this._registeredManagers) GR._removeDevice(RR, JR)
-           },
-           tR = (RR, JR, GR) => {
-             if (GR)
-               for (const yR of this._registeredManagers) yR._onInputChanged(RR, JR, GR)
-           };
-         "undefined" !== typeof _native ? this._deviceInputSystem = new HR(GR, yR, tR) : this._deviceInputSystem = new cR(RR, GR, yR, tR)
-       }
-       dispose() {
-         this._deviceInputSystem.dispose()
-       }
-     }
-     class mR {
- ... (47 more removed lines; see GitHub link above)
+             if (this.jT)
+               for (let Qr = 0; Qr < this.jT.length; Qr++) this.jT[Qr].refreshBoundingInfo(rr);
+             this._updateBoundingInfo()
+           }
+           _refreshBoundingInfoDirect(rr) {
+             if (this._boundingInfo ? this._boundingInfo.reConstruct(rr.minimum, rr.maximum) : this._boundingInfo = new pr.c(rr.minimum, rr.maximum), this.jT)
+               for (let Sr = 0; Sr < this.jT.length; Sr++) this.jT[Sr].refreshBoundingInfo(null);
+             this._updateBoundingInfo()
+           }
+           static _ApplySkeleton(rr, Sr, Qr, Zr, Wr, Ir, fr) {
+             ! function(rr, Sr, Qr, Zr, Wr, Ir, fr) {
+               const Er = ar.n.kU[0],
+                 pr = ar.n.Matrix[0],
+                 xr = ar.n.Matrix[1],
+                 mr = Sr === jr.j.NormalKind ? ar.u.TransformNormalFromFloatsToRef : ar.u.TransformCoordinatesFromFloatsToRef;
+               for (let jr = 0, Nr = 0; jr < rr.length; jr += 3, Nr += 4) {
+ ... (135 more added lines; see GitHub link above)
```

#### 206. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7385-L7389` → after: `L3397-L3399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3397-L3399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3397-L3399) · [Before (L7385-L7389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7385-L7389)

```diff
-               for (let GR = 0; GR < JR.length; GR++)
-                 if (JR[GR]) {
-                   this._firstDevice[RR] = GR;
-                   break
-                 } break
+               for (const ar of this.getChildMeshes())
+                 if (ar.har(rr, Sr, !0)) return !0;
+             return !1
```

#### 207. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7391-L7536` → after: `L3401-L3425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3401-L3425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3401-L3425) · [Before (L7391-L7536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7391-L7536)

```diff
-         }
-       }
-     }
-     var zR = GR(41710);
-     class SR {
-       constructor() {
-         this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
-       }
-       get singleClick() {
-         return this._singleClick
-       }
-       get Ri() {
-         return this._doubleClick
-       }
-       get hasSwiped() {
-         return this._hasSwiped
- ... (130 more removed lines; see GitHub link above)
+           intersectsPoint(rr) {
+             return this.mG().intersectsPoint(rr)
+           }
+           get checkCollisions() {
+             return this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions
+           }
+           set checkCollisions(rr) {
+             this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions = rr
+           }
+           get collider() {
+             return this._internalAbstractMeshDataInfo._meshCollisionData._collider
+           }
+           moveWithCollisions(rr) {
+             let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+             this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
+             const Qr = this.eC().collisionCoordinator;
+ ... (9 more added lines; see GitHub link above)
```

#### 208. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7538-L7541` → after: `L3427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3427) · [Before (L7538-L7541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7538-L7541)

```diff
-             yR.hasSpecificTrigger(8) && window.setTimeout((() => {
-               const RR = GR.Ur(this._unTranslatedPointerX, this._unTranslatedPointerY, (RR => RR.ZL && RR.isVisible && RR.isReady() && RR.actionManager && RR.actionManager.hasSpecificTrigger(8) && RR === this._pickedDownMesh), !1, GR.cameraToUseForPointers);
-               RR?.pickedMesh && yR && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > jR.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, yR.processTrigger(8, eR.CreateNew(RR.pickedMesh, JR)))
-             }), jR.LongPressDelay)
+             return Qr._collide(rr._trianglePlanes, rr._lastColliderWorldVertices, this.yar(), rr.indexStart, rr.indexStart + rr.indexCount, rr.verticesStart, !!rr.iU(), this, this._shouldConvertRHS(), 7 === rr.iU()?.fillMode), this
```

#### 209. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7543-L7584` → after: `L3429-L3434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3429-L3434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3429-L3434) · [Before (L7543-L7584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7543-L7584)

```diff
-         } else
-           for (const uR of GR._pointerDownStage) RR = uR.action(this._unTranslatedPointerX, this._unTranslatedPointerY, RR, JR, !1);
-         let yR;
-         const tR = XR.c.POINTERDOWN;
-         RR ? (GR.onPointerDown && GR.onPointerDown(JR, RR, tR), yR = new XR.j(tR, JR, RR), this._setRayOnPointerInfo(RR, JR)) : yR = new XR.j(tR, JR, null, this), GR.onPointerObservable.hasObservers() && GR.onPointerObservable.notifyObservers(yR, tR)
-       }
-       _isPointerSwiping() {
-         return this._isSwiping
-       }
-       simulatePointerUp(RR, JR, GR) {
-         const yR = new PointerEvent("pointerup", JR);
-         yR.inputIndex = lR.Move;
-         const tR = new SR;
-         GR ? tR.Ri = !0 : tR.singleClick = !0, this._checkPrePointerObservable(RR, yR, XR.c.POINTERUP) || this._processPointerUp(RR, yR, tR)
-       }
-       _processPointerUp(RR, JR, GR) {
- ... (26 more removed lines; see GitHub link above)
+           _processCollisionsForSubMeshes(rr, Sr) {
+             const Qr = this._scene.getCollidingSubMeshCandidates(this, rr),
+               Zr = Qr.length;
+             for (let Wr = 0; Wr < Zr; Wr++) {
+               const ar = Qr.data[Wr];
+               Zr > 1 && !ar._checkCollision(rr) || this._collideForSubMesh(ar, Sr, rr)
```

#### 210. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7587-L7603` → after: `L3438-L3439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3438-L3439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3438-L3439) · [Before (L7587-L7603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7587-L7603)

```diff
-         }
-       }
-       isPointerCaptured() {
-         let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
-         return this._pointerCaptures[RR]
-       }
-       attachControl() {
-         let RR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
-           JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
-           GR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
-           yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-         const tR = this._scene,
-           uR = tR.ke();
-         yR || (yR = uR.getInputElement()), this._alreadyAttached && this.detachControl(), yR && (this._alreadyAttachedTo = yR), this._deviceSourceManager = new mR(uR), this._initActionManager = RR => {
-           if (!this._meshPickProceed) {
-             const JR = tR.skipPointerUpPicking || 0 === tR._registeredActions && !this._checkForPicking() && !tR.onPointerUp ? null : tR.Ur(this._unTranslatedPointerX, this._unTranslatedPointerY, tR.pointerUpPredicate, tR.pointerUpFastCheck, tR.cameraToUseForPointers, tR.pointerU … [truncated]
- ... (1 more removed lines; see GitHub link above)
+           _shouldConvertRHS() {
+             return !1
```

#### 211. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7605-L7624` → after: `L3441-L3546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3441-L3546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3441-L3546) · [Before (L7605-L7624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7605-L7624)

```diff
-           return RR
-         }, this._delayedSimpleClick = (RR, JR, GR) => {
-           if ((Date.now() - this._previousStartingPointerTime > jR.DoubleClickDelay && !this._doubleClickOccured || RR !== this._previousButtonPressed) && (this._doubleClickOccured = !1, JR.singleClick = !0, JR.ignore = !1, this._delayedClicks[RR])) {
-             const JR = this._delayedClicks[RR].evt,
-               GR = XR.c.POINTERTAP,
-               yR = new XR.j(GR, JR, this._currentPickResult);
-             tR.onPointerObservable.hasObservers() && tR.onPointerObservable.hasSpecificMask(GR) && tR.onPointerObservable.notifyObservers(yR, GR), this._delayedClicks[RR] = null
-           }
-         }, this._initClickEvent = (RR, JR, GR, yR) => {
-           const tR = new SR;
-           this._currentPickResult = null;
-           let uR = null,
-             ZR = RR.hasSpecificMask(XR.c.POINTERPICK) || JR.hasSpecificMask(XR.c.POINTERPICK) || RR.hasSpecificMask(XR.c.POINTERTAP) || JR.hasSpecificMask(XR.c.POINTERTAP) || RR.hasSpecificMask(XR.c.POINTERDOUBLETAP) || JR.hasSpecificMask(XR.c.POINTERDOUBLETAP);
-           !ZR && MR && (uR = this._initActionManager(uR, tR), uR && (ZR = uR.hasPickTriggers));
-           let qR = !1;
-           if (ZR = ZR && !this._isMultiTouchGesture, ZR) {
- ... (4 more removed lines; see GitHub link above)
+           _checkCollision(rr) {
+             if (!this.mG()._checkCollision(rr)) return this;
+             const Sr = ar.n.Matrix[0],
+               Qr = ar.n.Matrix[1];
+             return ar.d.ScalingToRef(1 / rr._radius.x, 1 / rr._radius.y, 1 / rr._radius.z, Sr), this.worldMatrixFromCache.multiplyToRef(Sr, Qr), this._processCollisionsForSubMeshes(rr, Qr), this
+           }
+           _generatePointsArray() {
+             return !1
+           }
+           intersects(rr, Sr, Qr) {
+             let Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+               Wr = arguments.length > 4 ? arguments[4] : void 0,
+               jr = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+             const Ir = new Er.b,
+               fr = this.getClassName(),
+               pr = "InstancedLinesMesh" === fr || "LinesMesh" === fr || "GreasedLineMesh" === fr ? this.intersectionThreshold : 0,
+ ... (90 more added lines; see GitHub link above)
```

#### 212. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7627-L7629` → after: `L3564-L3565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3564-L3565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3564-L3565) · [Before (L7627-L7629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7627-L7629)

```diff
-                   evt: GR,
-                   clickInfo: tR,
-                   timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, ZR, tR, yR), jR.DoubleClickDelay)
+                   ind: 3 * Sr,
+                   sqDistance: 0
```

#### 213. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7631` → after: `L3567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3567) · [Before (L7631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7631)

```diff
-                 this._delayedClicks[ZR] = RR
+                 rr.depthSortedFacets.push(Qr)
```

#### 214. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7633-L7634` → after: `L3569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3569) · [Before (L7633-L7634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7633-L7634)

```diff
-               let fR = RR.hasSpecificMask(XR.c.POINTERDOUBLETAP) || JR.hasSpecificMask(XR.c.POINTERDOUBLETAP);
-               !fR && MR.HasSpecificTrigger(6) && (uR = this._initActionManager(uR, tR), uR && (fR = uR.hasSpecificTrigger(6))), fR && (ZR === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < jR.DoubleClickDelay && !this._doubleClickOccured ? (tR.has … [truncated]
+               rr.invertedMatrix = ar.d.Identity(), rr.facetDepthSortOrigin = ar.u.Zero()
```

#### 215. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7636-L7672` → after: `L3571-L3580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3571-L3580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3571-L3580) · [Before (L7636-L7672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7636-L7672)

```diff
-           }
-           qR || yR(tR, this._currentPickResult)
-         }, this._onPointerMove = RR => {
-           if (this._updatePointerPosition(RR), this._latestPointerMoveEvents.set(RR.pointerId, {
-               event: RR,
-               pointerX: this._pointerX,
-               pointerY: this._pointerY,
-               unTranslatedPointerX: this._unTranslatedPointerX,
-               unTranslatedPointerY: this._unTranslatedPointerY
-             }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > jR.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > jR.DragMovementThreshold), uR.isPointerLo … [truncated]
-           if (!tR.cameraToUseForPointers && !tR.activeCamera) return;
-           if (tR.skipPointerMovePicking) return void this._processPointerMove(new rR.e, RR);
-           this._ensurePointerMovePredicate();
-           const JR = tR._registeredActions > 0 || tR.constantlyUpdateMeshUnderPointer ? this._pickMove(RR) : null;
-           this._processPointerMove(JR, RR)
-         }, this._onPointerDown = RR => {
- ... (21 more removed lines; see GitHub link above)
+             rr.bbSize.x = Wr.maximum.x - Wr.minimum.x > er.e ? Wr.maximum.x - Wr.minimum.x : er.e, rr.bbSize.y = Wr.maximum.y - Wr.minimum.y > er.e ? Wr.maximum.y - Wr.minimum.y : er.e, rr.bbSize.z = Wr.maximum.z - Wr.minimum.z > er.e ? Wr.maximum.z - Wr.minimum.z : er.e;
+             let fr = rr.bbSize.x > rr.bbSize.y ? rr.bbSize.x : rr.bbSize.y;
+             if (fr = fr > rr.bbSize.z ? fr : rr.bbSize.z, rr.subDiv.max = rr.partitioningSubdivisions, rr.subDiv.X = Math.floor(rr.subDiv.max * rr.bbSize.x / fr), rr.subDiv.Y = Math.floor(rr.subDiv.max * rr.bbSize.y / fr), rr.subDiv.Z = Math.floor(rr.subDiv.max * rr.bbSize.z / fr … [truncated]
+               rr.depthSortedFacets.sort(rr.facetDepthSortFunction);
+               const Sr = rr.depthSortedIndices.length / 3 | 0;
+               for (let Zr = 0; Zr < Sr; Zr++) {
+                 const Sr = rr.depthSortedFacets[Zr].ind;
+                 rr.depthSortedIndices[3 * Zr] = Qr[Sr], rr.depthSortedIndices[3 * Zr + 1] = Qr[Sr + 1], rr.depthSortedIndices[3 * Zr + 2] = Qr[Sr + 2]
+               }
+               this.updateIndices(rr.depthSortedIndices, void 0, !0)
```

#### 216. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7674-L7706` → after: `L3582-L3736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3582-L3736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3582-L3736) · [Before (L7674-L7706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7674-L7706)

```diff
-             this._pointerCaptures[RR.pointerId] ? (0 === RR.buttons && (this._pointerCaptures[RR.pointerId] = !1), (tR.cameraToUseForPointers || tR.activeCamera) && (tR.pointerUpPredicate || (tR.pointerUpPredicate = RR => RR.ZL && RR.isVisible && RR.isReady() && RR.isEnabled() && … [truncated]
-           })))
-         }, this._onKeyDown = RR => {
-           const JR = xR.b.KEYDOWN;
-           if (tR.onPreKeyboardObservable.hasObservers()) {
-             const GR = new xR.e(JR, RR);
-             if (tR.onPreKeyboardObservable.notifyObservers(GR, JR), GR.skipOnKeyboardObservable) return
-           }
-           if (tR.onKeyboardObservable.hasObservers()) {
-             const GR = new xR.h(JR, RR);
-             tR.onKeyboardObservable.notifyObservers(GR, JR)
-           }
-           tR.actionManager && tR.actionManager.processTrigger(14, eR.CreateNewFromScene(tR, RR))
-         }, this._onKeyUp = RR => {
-           const JR = xR.b.KEYUP;
-           if (tR.onPreKeyboardObservable.hasObservers()) {
- ... (17 more removed lines; see GitHub link above)
+             return this
+           }
+           getFacetLocalNormals() {
+             const rr = this._internalAbstractMeshDataInfo._facetData;
+             return rr.facetNormals || this.updateFacetData(), rr.facetNormals
+           }
+           getFacetLocalPositions() {
+             const rr = this._internalAbstractMeshDataInfo._facetData;
+             return rr.facetPositions || this.updateFacetData(), rr.facetPositions
+           }
+           getFacetLocalPartitioning() {
+             const rr = this._internalAbstractMeshDataInfo._facetData;
+             return rr.facetPartitioning || this.updateFacetData(), rr.facetPartitioning
+           }
+           getFacetPosition(rr) {
+             const Sr = ar.u.Zero();
+ ... (139 more added lines; see GitHub link above)
```

#### 217. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7708-L7709` → after: `L3738-L3739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3738-L3739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3738-L3739) · [Before (L7708-L7709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7708-L7709)

```diff
-       detachControl() {
-         this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAtta … [truncated]
+       set boundingBias(rr) {
+         this._boundingBias ? this._boundingBias.iH(rr) : this._boundingBias = rr.clone(), this._updateBoundingInfo(!0, null)
```

#### 218. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7711-L7726` → after: `L3741-L3755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3741-L3755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3741-L3755) · [Before (L7711-L7726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7711-L7726)

```diff
-       setPointerOverMesh(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           GR = arguments.length > 2 ? arguments[2] : void 0,
-           yR = arguments.length > 3 ? arguments[3] : void 0;
-         if (this._meshUnderPointerId[JR] === RR && (!RR || !RR._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
-         const tR = this._meshUnderPointerId[JR];
-         let uR;
-         tR && (uR = tR._getActionManagerForTrigger(10), uR && uR.processTrigger(10, new eR(tR, this._pointerX, this._pointerY, RR, yR, {
-           pointerId: JR
-         }))), RR ? (this._meshUnderPointerId[JR] = RR, this._pointerOverMesh = RR, uR = RR._getActionManagerForTrigger(9), uR && uR.processTrigger(9, new eR(RR, this._pointerX, this._pointerY, RR, yR, {
-           pointerId: JR,
-           pickResult: GR
-         }))) : (delete this._meshUnderPointerId[JR], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
-           mesh: RR,
-           pointerId: JR
-         })
+       static CreateGeometryForMesh(rr) {
+         const Sr = new zr(zr.RandomId(), rr.eC());
+         return Sr.applyToMesh(rr), Sr
+       }
+       get meshes() {
+         return this._meshes
+       }
+       constructor(rr, Sr, Qr) {
+         let Wr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+           ar = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+           jr = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
+         this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
+           minimum: new Zr.u(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
+           maximum: new Zr.u(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
+         }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = Sr || Ur.b.LastCreatedScene, this._scene && (this.id = rr, this.uniqueId = this._scene.getUniqueId(), this._engine = this._s … [truncated]
```

#### 219. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7728-L7729` → after: `L3757-L3758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3757-L3758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3757-L3758) · [Before (L7728-L7729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7728-L7729)

```diff
-       getPointerOverMesh() {
-         return this.meshUnderPointer
+       get extend() {
+         return this._extend
```

#### 220. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7731-L7733` → after: `L3760-L3761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3760-L3761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3760-L3761) · [Before (L7731-L7733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7731-L7733)

```diff
-       _invalidateMesh(RR) {
-         this._pointerOverMesh === RR && (this._pointerOverMesh = null), this._pickedDownMesh === RR && (this._pickedDownMesh = null), this._pickedUpMesh === RR && (this._pickedUpMesh = null);
-         for (const JR in this._meshUnderPointerId) this._meshUnderPointerId[JR] === RR && delete this._meshUnderPointerId[JR]
+       eC() {
+         return this._scene
```

#### 221. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7735-L7743` → after: `L3763-L3764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3763-L3764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3763-L3764) · [Before (L7735-L7743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7735-L7743)

```diff
-     }
-     jR.DragMovementThreshold = 10, jR.LongPressDelay = 500, jR.DoubleClickDelay = 300, jR.ExclusiveDoubleClickMode = !1;
-     var dR = GR(41475),
-       ER = GR(38331),
-       YR = GR(38928);
-     class kR {
-       static get UniqueId() {
-         const RR = this._UniqueIdCounter;
-         return this._UniqueIdCounter++, RR
+       MU() {
+         return this._engine
```

#### 222. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7745-L7752` → after: `L3766-L3767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3766-L3767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3766-L3767) · [Before (L7745-L7752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7745-L7752)

```diff
-     }
-     kR._UniqueIdCounter = 1;
-     var QR = GR(41564),
-       FR = GR(41715),
-       TR = GR(38217);
-     class sR {
-       constructor() {
-         this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
+       isReady() {
+         return 1 === this.delayLoadState || 0 === this.delayLoadState
```

#### 223. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7754-L7765` → after: `L3769-L3772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3769-L3772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3769-L3772) · [Before (L7754-L7765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7754-L7765)

```diff
-     }
-     var hR, RJ, JJ, GJ, yJ, tJ, uJ, ZJ, qJ, iJ, fJ, VJ, KJ, wJ, rJ, eJ, aJ, LJ, nJ, UJ, WJ, AJ, CJ, XJ, MJ, BJ, lJ, pJ, gJ, bJ, vJ, OJ, xJ, NJ, DJ, HJ, oJ, cJ, PJ, IJ, mJ, zJ, SJ, jJ, dJ, EJ, YJ, kJ, QJ, FJ, TJ, sJ, hJ, RG = GR(39914),
-       JG = GR(38253);
-     const GG = new VR.s,
-       yG = new VR.s;
-     var tG;
-     ! function(RR) {
-       RR[RR.BackwardCompatible = 0] = "BackwardCompatible", RR[RR.Intermediate = 1] = "Intermediate", RR[RR.Aggressive = 2] = "Aggressive"
-     }(tG || (tG = {}));
-     class uG {
-       static DefaultMaterialFactory(RR) {
-         throw (0, CR.j)("StandardMaterial")
+       get doNotSerialize() {
+         for (let rr = 0; rr < this._meshes.length; rr++)
+           if (!this._meshes[rr].doNotSerialize) return !1;
+         return !0
```

#### 224. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7767-L7768` → after: `L3774-L3780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3774-L3780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3774-L3780) · [Before (L7767-L7768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7767-L7768)

```diff
-       static CollisionCoordinatorFactory() {
-         throw (0, CR.j)("DefaultCollisionCoordinator")
+       _rebuild() {
+         this._vertexArrayObjects && (this._vertexArrayObjects = {}), 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer"));
+         const rr = new Set;
+         for (const Sr in this._vertexBuffers) rr.add(this._vertexBuffers[Sr].getWrapperBuffer());
+         rr.forEach((rr => {
+           rr._rebuild()
+         }))
```

#### 225. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7770-L7771` → after: `L3782-L3783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3782-L3783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3782-L3783) · [Before (L7770-L7771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7770-L7771)

```diff
-       get clearColor() {
-         return this._clearColor
+       setAllVerticesData(rr, Sr) {
+         rr.applyToGeometry(this, Sr), this._notifyUpdate()
```

#### 226. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7773-L7774` → after: `L3785-L3816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3785-L3816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3785-L3816) · [Before (L7773-L7774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7773-L7774)

```diff
-       set clearColor(RR) {
-         RR !== this._clearColor && (this._clearColor = RR, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
+       setVerticesData(rr, Sr) {
+         let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           Zr = arguments.length > 3 ? arguments[3] : void 0;
+         Qr && Array.isArray(Sr) && (Sr = new Float32Array(Sr));
+         const Wr = new jr.j(this._engine, Sr, rr, {
+           updatable: Qr,
+           postponeInternalCreation: 0 === this._meshes.length,
+           stride: Zr,
+           label: "Geometry_" + this.id + "_" + rr
+         });
+         this.setVerticesBuffer(Wr)
+       }
+       removeVerticesData(rr) {
+         this._vertexBuffers[rr] && (this._vertexBuffers[rr].dispose(), delete this._vertexBuffers[rr]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
+       }
+       setVerticesBuffer(rr) {
+ ... (16 more added lines; see GitHub link above)
```

#### 227. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7776-L7777` → after: `L3818-L3821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3818-L3821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3818-L3821) · [Before (L7776-L7777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7776-L7777)

```diff
-       get imageProcessingConfiguration() {
-         return this._imageProcessingConfiguration
+       updateVerticesDataDirectly(rr, Sr, Qr) {
+         let Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         const Wr = this.getVertexBuffer(rr);
+         Wr && (Wr.updateDirectly(Sr, Qr, Zr), this._notifyUpdate(rr))
```

#### 228. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7779-L7780` → after: `L3823-L3826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3823-L3826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3823-L3826) · [Before (L7779-L7780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7779-L7780)

```diff
-       get performancePriority() {
-         return this._performancePriority
+       updateVerticesData(rr, Sr) {
+         let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         const Zr = this.getVertexBuffer(rr);
+         Zr && (Zr.update(Sr), rr === jr.j.PositionKind && this._updateBoundingInfo(Qr, Sr), this._notifyUpdate(rr))
```

#### 229. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7782-L7792` → after: `L3828-L3834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3828-L3834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3828-L3834) · [Before (L7782-L7792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7782-L7792)

```diff
-       set performancePriority(RR) {
-         if (RR !== this._performancePriority) {
-           switch (this._performancePriority = RR, RR) {
-             case 0:
-               this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !1, this.autoClear = !0;
-               break;
-             case 1:
-               this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !0, this.autoClear = !1;
-               break;
-             case 2:
-               this.skipFrustumClipping = !0, this._renderingManager.maintainStateBetweenFrames = !0, this.skipPointerMovePicking = !0, this.autoClear = !1
+       _updateBoundingInfo(rr, Sr) {
+         if (rr && this._updateExtend(Sr), this._resetPointsArrayCache(), rr) {
+           const rr = this._meshes;
+           for (const Sr of rr) {
+             Sr.hasBoundingInfo ? Sr.mG().reConstruct(this._extend.minimum, this._extend.maximum) : Sr.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
+             const rr = Sr.jT;
+             for (const Sr of rr) Sr.refreshBoundingInfo()
```

#### 230. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7797-L7798` → after: `L3838-L3846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3838-L3846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3838-L3846) · [Before (L7797-L7798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7797-L7798)

```diff
-       set forceWireframe(RR) {
-         this._forceWireframe !== RR && (this._forceWireframe = RR, this.markAllMaterialsAsDirty(16))
+       _bind(rr, Sr, Qr, Zr) {
+         if (!rr) return;
+         void 0 === Sr && (Sr = this._indexBuffer);
+         const Wr = this.getVertexBuffers();
+         if (!Wr) return;
+         if (Sr != this._indexBuffer || !this._vertexArrayObjects && !Zr) return void this._engine.bindBuffers(Wr, Sr, rr, Qr);
+         const ar = Zr || this._vertexArrayObjects,
+           jr = this._engine;
+         ar[rr.key] || (ar[rr.key] = jr.recordVertexArrayObject(Wr, Sr, rr, Qr)), jr.bindVertexArrayObject(ar[rr.key], Sr)
```

#### 231. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7800-L7801` → after: `L3848-L3849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3848-L3849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3848-L3849) · [Before (L7800-L7801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7800-L7801)

```diff
-       get forceWireframe() {
-         return this._forceWireframe
+       getTotalVertices() {
+         return this.isReady() ? this._totalVertices : 0
```
