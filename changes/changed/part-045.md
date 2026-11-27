# Changed — Bundle Modifications Report (Part 045 / 126)

- **Updated at**: `2026-11-28T08:15 JST`
- **Part**: `45 / 126` (**316** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 044](part-044.md) · [Part 046 →](part-046.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/235.js` (4udp6d.2845de07 → fl4vv.bd3c59ce · continued)

- **File**: `bundles/bloxd.io/chunks/js/235.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f)

#### 4. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L305-L326` → after: `L9868-L10909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR9868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L9868-L10909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/235.js#L9868-L10909) · [Before (L305-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/235.js#L305-L326)

```diff
-     RR.exports = function(RR, JR, GR, yR) {
-       var tR = self || window;
-       try {
-         try {
-           var uR;
-           try {
-             uR = new tR.Blob([RR])
-           } catch (fR) {
-             (uR = new(tR.BlobBuilder || tR.WebKitBlobBuilder || tR.MozBlobBuilder || tR.MSBlobBuilder)).append(RR), uR = uR.getBlob()
-           }
-           var ZR = tR.URL || tR.webkitURL,
-             qR = ZR.createObjectURL(uR),
-             iR = new tR[JR](qR, GR);
-           return ZR.revokeObjectURL(qR), iR
-         } catch (fR) {
-           return new tR[JR]("data:application/javascript,".concat(encodeURIComponent(RR)), GR)
- ... (6 more removed lines; see GitHub link above)
+     rr.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAgCAYAAAAv8DnQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAoElEQVR42pWSwQ6AIAxD+QY9qAf1ZEw8+v//pilJCbAO9NAQmgesY2EYp+e8biP46348YV62aGBDEcBaAPlK/z9ASYCClwAvBRUBiKcgepAEcrD/hCoyb5gb0wXMDayBoIxJQEVtpojfnTdF3tDqQQJ4qk4AL6gELqCG … [truncated]
+   },
+   37158: rr => {
+     rr.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAgCAYAAAAv8DnQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAApElEQVR42pWSsQ6AIBBD+SjjYmLi4ujox7k5+QF+oKYkJcD1QIeG0DzgelwYxuPZ9tsI/rJeT5jmMxrYUASwFkC+0v8PUBKg4CXAS0FFAOIpiB4kgRzsP6GKzBvmxnQBcwNrIChjElBRmynid+dNkTe0epAAnqoTwAsq … [truncated]
+   },
+   37164: rr => {
+     rr.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAgCAYAAAAv8DnQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAApklEQVR42pWSwQ2AIBAE6cbExJc1+PNnBVbg16ctWLFmSZYAtwf62BA2A9weF45leO59NoJ/bdMTznWMBjYUAawFkK/0/wOUBCh4CfBSUBGAeAqiB0kgB/tPqCLzhrkxXcDcwBoIypgEVNRmivjdeVPkDa0eJICn6gTw … [truncated]
+   },
+   37170: rr => {
+     rr.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAABACAYAAAAnBDaKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAuklEQVR42mPQN7b6jw8zgIjFq7b8l5FTQcEgMbiC4qrW/zeD5f7/35n+/1V3Gph28QxCVRAWk4aCMRSgW4GhAGQsTgUgB4EEkDGKIwl6kzrh8KbN+f/XRelgDGLTIBz6ctz+N7gZDe5wQE4LoLRBg3AACT7Jsx/c4YCc … [truncated]
+   },
+   37178: rr => {
+     rr.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAABACAYAAAAnBDaKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA1klEQVR42mPYvPvsfxBOms/yP2krEwZmmDF71f/i4nqsGKSJYfW6ff8Tk/L/Kykr/w95zACmQRgkhqJAW0f3/67jt/+D+CCFGApAgiAFIAxSjNUEEAYpRFEAciSIg+5AuAK4NztZMTGKAqqEg3WzEBhjDQeHDnGwF0HW … [truncated]
+   },
+   37183: rr => {
+     rr.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAABACAYAAAAnBDaKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAd0lEQVR42mNI2sr0Hx9mSJrP8n/1un3/QfTm3WdRMEgMrCCpk/U/TGHQpf9gDNMEUQDFIMHkJ//AGKcCmPFYFYCtQsYwBTDV6KZhOBLDNLACqodD9O3/YIzTmwQVDI9wIBjdBBPMaHoYTuEwWj6MpofR8mGYpAcArqq1 … [truncated]
+ ... (1026 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/236.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/236.js` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0)

#### 1. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L5-L8` → after: `L4-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/236.js#L4-L11) · [Before (L5-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/236.js#L5-L8)

```diff
-   41009: (RR, JR, GR) => {
-     function yR() {
-       return "object" === typeof process && "object" === typeof process.versions && "undefined" !== typeof process.versions.node
-     }
+   37491: (rr, Sr, Qr) => {
+     Qr.r(Sr), Qr.d(Sr, {
+       WasmTextureWorker: () => Yr
+     });
+     var Zr = Qr(679),
+       Wr = Qr(4400),
+       ar = Qr(37500),
+       jr = Qr.n(ar);
```

#### 2. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L10-L11` → after: `L13-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/236.js#L13-L14) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/236.js#L10-L11)

```diff
-     function tR(RR) {
-       return RR instanceof Uint8Array && (!yR() || !Buffer.isBuffer(RR))
+     function Ir() {
+       return jr()('(()=>{var rr={d:(Sr,Qr)=>{for(var Zr in Qr)rr.o(Qr,Zr)&&!rr.o(Sr,Zr)&&Object.defineProperty(Sr,Zr,{enumerable:!0,get:Qr[Zr]})},o:(rr,Sr)=>Object.prototype.hasOwnProperty.call(rr,Sr),r:rr=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r … [truncated]
```

#### 3. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L15` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/236.js#L23) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/236.js#L15)

```diff
-       return RR instanceof ArrayBuffer
+       return "" === rr ? [] : rr.split("\0")
```

#### 4. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L19-L44` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/236.js#L27-L28) · [Before (L19-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/236.js#L19-L44)

```diff
-       return !!yR() && Buffer.isBuffer(RR)
-     }
-     var qR = GR(41017).b,
-       iR = GR(41023).d,
-       fR = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";
-     JR.e = function(RR) {
-       if (!tR(RR) && !uR(RR) && !ZR(RR)) throw new TypeError(fR);
-       var JR = !1,
-         GR = !1;
-       tR(RR) ? JR = !0 : uR(RR) && (GR = !0, RR = new Uint8Array(RR));
-       var yR, qR, VR, KR = new iR(RR),
-         wR = KR.maxCompressedLength();
-       if (JR ? (yR = new Uint8Array(wR), VR = KR.compressToBuffer(yR)) : GR ? (yR = new ArrayBuffer(wR), qR = new Uint8Array(yR), VR = KR.compressToBuffer(qR)) : (yR = Buffer.alloc(wR), VR = KR.compressToBuffer(yR)), !yR.slice) {
-         var rR = new Uint8Array(Array.prototype.slice.call(yR, 0, VR));
-         if (JR) return rR;
-         if (GR) return rR.buffer;
- ... (10 more removed lines; see GitHub link above)
+       if ("" !== rr)
+         for (const Sr of rr.split("\n")) console.error(Sr)
```

#### 5. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L48-L57` → after: `L32-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L32-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/236.js#L32-L72) · [Before (L48-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/236.js#L48-L57)

```diff
-       return RR[JR] + (RR[JR + 1] << 8) + (RR[JR + 2] << 16) + (RR[JR + 3] << 24)
-     }
- 
-     function uR(RR, JR, GR) {
-       return RR[JR] === RR[GR] && RR[JR + 1] === RR[GR + 1] && RR[JR + 2] === RR[GR + 2] && RR[JR + 3] === RR[GR + 3]
-     }
- 
-     function ZR(RR, JR, GR, yR, tR) {
-       return GR <= 60 ? (yR[tR] = GR - 1 << 2, tR += 1) : GR < 256 ? (yR[tR] = 240, yR[tR + 1] = GR - 1, tR += 2) : (yR[tR] = 244, yR[tR + 1] = GR - 1 & 255, yR[tR + 2] = GR - 1 >>> 8, tR += 3),
-         function(RR, JR, GR, yR, tR) {
+       return async function(rr, Sr) {
+         const Qr = Object.keys(rr),
+           Zr = [],
+           Wr = new Map,
+           ar = new Uint32Array(Qr.length);
+         for (const [jr, Ir] of Qr.entries()) {
+           const {
+             url: Sr
+           } = rr[Ir];
+           Wr.has(Sr) || (Wr.set(Sr, Zr.length), Zr.push(Sr)), ar[jr] = Wr.get(Sr)
+         }
+         return {
+           sources: await Sr(Zr),
+           names: Qr.join("\0"),
+           sourceOfName: ar
+         }
+ ... (25 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L59-L60` → after: `L74-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L74-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/236.js#L74-L76) · [Before (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/236.js#L59-L60)

```diff
-           for (uR = 0; uR < tR; uR++) GR[yR + uR] = RR[JR + uR]
-         }(RR, JR, yR, tR, GR), tR + GR
+           return (0, mr.c)(null !== (Sr = Qr.get(rr)) && void 0 !== Sr ? Sr : rr)
+         })))
+       }))
```

#### 7. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L63-L64` → after: `L79-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L79-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/236.js#L79-L81) · [Before (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/236.js#L63-L64)

```diff
-     function qR(RR, JR, GR, yR) {
-       return yR < 12 && GR < 2048 ? (RR[JR] = 1 + (yR - 4 << 2) + (GR >>> 8 << 5), RR[JR + 1] = 255 & GR, JR + 2) : (RR[JR] = 2 + (yR - 1 << 2), RR[JR + 1] = 255 & GR, RR[JR + 2] = GR >>> 8, JR + 3)
+     function hr(rr, Sr) {
+       const Qr = pr.l.from(rr, Sr ? pr.j.Optional : pr.j.Error);
+       return Qr.code !== pr.j.Fetch && Qr.code !== pr.j.Error && (0, Er.h)(Qr.message), Qr
```

#### 8. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L67-L69` → after: `L84-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/236.js#L84-L85) · [Before (L67-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/236.js#L67-L69)

```diff
-     function iR(RR, JR, GR, yR) {
-       for (; yR >= 68;) JR = qR(RR, JR, GR, 64), yR -= 64;
-       return yR > 64 && (JR = qR(RR, JR, GR, 60), yR -= 60), qR(RR, JR, GR, yR)
+     function zr(rr) {
+       return rr.message ? new Error(`the texture worker failed: ${rr.message}`) : new pr.l(pr.j.Load, "the texture worker failed to start")
```

#### 9. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L71-L98` → after: `L87-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L87-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/236.js#L87-L192) · [Before (L71-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/236.js#L71-L98)

```diff
- 
-     function fR(RR, JR, qR, fR, VR) {
-       for (var KR = 1; 1 << KR <= qR && KR <= 14;) KR += 1;
-       var wR = 32 - (KR -= 1);
-       "undefined" === typeof GR[KR] && (GR[KR] = new Uint16Array(1 << KR));
-       var rR, eR = GR[KR];
-       for (rR = 0; rR < eR.length; rR++) eR[rR] = 0;
-       var aR, LR, nR, UR, WR, AR, CR, XR, MR, BR, lR = JR + qR,
-         pR = JR,
-         gR = JR,
-         bR = !0;
-       if (qR >= 15)
-         for (aR = lR - 15, nR = yR(tR(RR, JR += 1), wR); bR;) {
-           AR = 32, UR = JR;
-           do {
-             if (LR = nR, CR = AR >>> 5, AR += 1, UR = (JR = UR) + CR, JR > aR) {
- ... (12 more removed lines; see GitHub link above)
+     class Yr {
+       constructor(rr) {
+         this.worker = rr, this.failure = void 0, this.abandonStep = null, rr.addEventListener("error", (rr => {
+           rr.preventDefault(), this.failure ??= zr(rr)
+         }))
+       }
+       static async generateRequired(rr, Sr, Qr, ar) {
+         let jr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : pr.c,
+           Er = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
+         const mr = (0, fr.m)();
+         if (null !== mr) throw hr(new pr.l(pr.j.Load, mr), !1);
+         let Nr;
+         const zr = new AbortController;
+         try {
+           Nr = new Yr(function() {
+             try {
+ ... (90 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L100-L103` → after: `L194-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L194-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/236.js#L194-L202) · [Before (L100-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/236.js#L100-L103)

```diff
-             eR[yR(tR(RR, JR - 1), wR)] = JR - 1 - pR, WR = pR + eR[BR = yR(tR(RR, JR), wR)], eR[BR] = JR - pR
-           } while (uR(RR, JR, WR));
-           if (!bR) break;
-           nR = yR(tR(RR, JR += 1), wR)
+             return Qr
+           }(Br, Tr.imagesPerAtlas.length)), Ur(Or), {
+             assets: Tr,
+             layerCap: vr,
+             worker: Nr
+           }
+         } catch (er) {
+           var nr;
+           throw zr.abort(), null === (nr = Nr) || void 0 === nr || nr.terminate(), hr(er, !1)
```

#### 11. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L105` → after: `L204-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L204-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/236.js#L204-L279) · [Before (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/236.js#L105)

```diff
-       return gR < lR && (VR = ZR(RR, gR, lR - gR, fR, VR)), VR
+       }
+       async generateOptional() {
+         let rr;
+         try {
+           rr = await this.request({
+             type: "optional"
+           }, [])
+         } catch (Sr) {
+           throw hr(Sr, !0)
+         } finally {
+           this.terminate()
+         }
+         return Ur(rr.warnings),
+           function(rr) {
+             let {
+               blocks: Sr,
+ ... (60 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L108-L109` → after: `L282-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/236.js#L282-L283) · [Before (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/236.js#L108-L109)

```diff
-     function VR(RR) {
-       this.array = RR
+     function nr(rr, Sr) {
+       return Sr > 0 ? `${rr}, its module's memory ${Math.round(Sr/2**20)} MiB` : rr
```

#### 13. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L128-L134` → after: `L286-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L286-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/236.js#L286-L294) · [Before (L128-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/236.js#L128-L134)

```diff
-   41017: (RR, JR) => {
-     var GR = [0, 255, 65535, 16777215, 4294967295];
- 
-     function yR(RR, JR, GR, yR, tR) {
-       var uR;
-       for (uR = 0; uR < tR; uR++) GR[yR + uR] = RR[JR + uR]
-     }
+   37522: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       e: () => Zr,
+       f: () => Wr,
+       i: () => ar,
+       m: () => jr
+     });
+     const Zr = 1024,
+       Wr = 1024 * Zr;
```

#### 14. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L136-L138` → after: `L296-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L296-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/236.js#L296-L297) · [Before (L136-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/236.js#L136-L138)

```diff
-     function tR(RR, JR, GR, yR) {
-       var tR;
-       for (tR = 0; tR < yR; tR++) RR[JR + tR] = RR[JR - GR + tR]
+     function ar(rr) {
+       return 2 ** Math.floor(Math.log2(Math.max(1, rr / Wr)))
```

#### 15. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L142` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/236.js#L301) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/236.js#L142)

```diff
-       this.array = RR, this.pos = 0
+       return (rr / Wr).toFixed(1)
```

#### 16. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L178` → after: `L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/236.js#L304) · [Before (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/236.js#L178)

```diff
-   37156: RR => {
+   37500: rr => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/237.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/237.js` (58 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3)

#### 1. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L4-L43` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L5) · [Before (L4-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L4-L43)

```diff
-   53511: (RR, JR, GR) => {
-     GR.r(JR), GR.d(JR, {
-       loadGlbAsset: () => pJ,
-       loadGlbTree: () => lJ
-     });
-     var yR = GR(39062),
-       tR = GR(134),
-       uR = GR(1287);
- 
-     function ZR(RR) {
-       return (0, tR.isDiscordClient)() ? `https://${uR.e.discordDomain}/${RR.href}` : RR.href
-     }
-     const qR = {
-       scriptUrl: ZR(new GR.U(GR(53515))),
-       wasmBinaryUrl: ZR(new GR.U(GR(53520)))
-     };
- ... (24 more removed lines; see GitHub link above)
+   41361: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L45-L72` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L7) · [Before (L45-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L45-L72)

```diff
-       if (!nR) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
-       const {
-         scriptUrl: RR,
-         wasmBinaryUrl: JR
-       } = nR;
-       return UR ??= (0, iR.B)(JR), UR.catch((() => {
-         UR = null
-       })), XR.workersStarted++, Promise.all([UR, (0, eR.k)()]).then((JR => {
-         let [GR] = JR;
-         return new Promise(((JR, yR) => {
-           const tR = new KR;
-           tR.onerror = RR => {
-             tR.onmessage = null, tR.onerror = null, tR.terminate(), yR(new Error("Draco: the decode worker failed to start" + (RR.message ? `: ${RR.message}` : " (its script did not load)")))
-           }, tR.onmessage = RR => {
-             let {
-               data: GR
- ... (12 more removed lines; see GitHub link above)
+       return "object" === typeof process && "object" === typeof process.versions && "undefined" !== typeof process.versions.node
```

#### 3. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L76-L117` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L11) · [Before (L76-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L76-L117)

```diff
-       const JR = WR.indexOf(RR); - 1 !== JR && WR.splice(JR, 1);
-       const GR = AR.shift();
-       GR && gR(GR)
-     }
- 
-     function pR(RR, JR) {
-       RR.busy = !0, RR.releaseTimer && (clearTimeout(RR.releaseTimer), RR.releaseTimer = null);
-       RR.worker.then((GR => {
-         const yR = CR++;
-         GR.onmessage = tR => {
-           let {
-             data: uR
-           } = tR;
-           if (("decoded" === uR.id || "decodeError" === uR.id) && uR.seq === yR) {
-             if (GR.onmessage = null, GR.onerror = null, "decoded" === uR.id) return XR.decodes++, JR.resolve({
-               indices: uR.indices,
- ... (26 more removed lines; see GitHub link above)
+       return rr instanceof Uint8Array && (!Zr() || !Buffer.isBuffer(rr))
```

#### 4. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L121-L148` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L15) · [Before (L121-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L121-L148)

```diff
-       const JR = WR.find((RR => !RR.busy));
-       if (JR) pR(JR, RR);
-       else {
-         if (MR ??= (0, rR.e)() ? 1 : function(RR, JR) {
-             const GR = RR ? Math.max(1, Math.min(Math.floor(.5 * RR), 4)) : 1;
-             return JR ? Math.min(GR, aR) : GR
-           }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, wR.isMobile)()), WR.length < MR) {
-           const JR = {
-             worker: BR(),
-             busy: !0,
-             releaseTimer: null
-           };
-           return WR.push(JR), XR.mostWorkers = Math.max(XR.mostWorkers, WR.length), void pR(JR, RR)
-         }
-         AR.push(RR)
-       }
- ... (12 more removed lines; see GitHub link above)
+       return rr instanceof ArrayBuffer
```

#### 5. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L163-L339` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L19) · [Before (L163-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L163-L339)

```diff
-       const JR = (0, NR.i)(RR.byteLength);
-       if (JR) throw new xR.l(JR);
-       const {
-         json: GR,
-         bin: yR
-       } = (0, xR.y)(RR), tR = (0, NR.f)(GR, yR);
-       if (tR) throw new xR.l(tR);
-       try {
-         return function(RR, JR) {
-           var GR, yR, tR, uR, ZR, qR, iR, fR, VR, KR, wR, rR, eR, aR, LR;
-           const nR = new Map,
-             UR = GR => {
-               let yR = nR.get(GR);
-               if (!yR) {
-                 var tR;
-                 const uR = RR.bufferViews[GR],
- ... (161 more removed lines; see GitHub link above)
+       return !!Zr() && Buffer.isBuffer(rr)
```

#### 6. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L341-L359` → after: `L21-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L21-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L21-L35) · [Before (L341-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L341-L359)

```diff
-     async function oR(RR, JR) {
-       var GR, yR;
-       const tR = RR.draco;
-       if (!tR) throw new xR.i("not a Draco primitive");
-       let uR;
-       try {
-         uR = await JR(tR.bufferView.bytes, tR.attributeIds, tR.expected)
-       } catch (fR) {
-         throw new xR.i(`Draco decoding failed: ${fR instanceof Error?fR.message:String(fR)}`)
-       }
-       const {
-         vertices: ZR,
-         indices: qR,
-         components: iR
-       } = tR.expected;
-       if (uR.totalVertices !== ZR || (null !== (GR = null === (yR = uR.indices) || void 0 === yR ? void 0 : yR.length) && void 0 !== GR ? GR : 0) !== qR || uR.attributes.some((RR => RR.size !== iR[RR.kind] || RR.data.length !== ZR * RR.size))) throw new xR.i("Draco decoding gave  … [truncated]
- ... (3 more removed lines; see GitHub link above)
+     var Ir = Qr(41364).c,
+       fr = Qr(41369).b,
+       Er = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";
+     Sr.d = function(rr) {
+       if (!Wr(rr) && !ar(rr) && !jr(rr)) throw new TypeError(Er);
+       var Sr = !1,
+         Qr = !1;
+       Wr(rr) ? Sr = !0 : ar(rr) && (Qr = !0, rr = new Uint8Array(rr));
+       var Zr, Ir, pr, xr = new fr(rr),
+         mr = xr.maxCompressedLength();
+       if (Sr ? (Zr = new Uint8Array(mr), pr = xr.compressToBuffer(Zr)) : Qr ? (Zr = new ArrayBuffer(mr), Ir = new Uint8Array(Zr), pr = xr.compressToBuffer(Ir)) : (Zr = Buffer.alloc(mr), pr = xr.compressToBuffer(Zr)), !Zr.slice) {
+         var Nr = new Uint8Array(Array.prototype.slice.call(Zr, 0, pr));
+         if (Sr) return Nr;
+         if (Qr) return Nr.buffer;
+         throw new Error("Not implemented")
```

#### 7. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L361` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L37) · [Before (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L361)

```diff
-       return uR
+       return Zr.slice(0, pr)
```

#### 8. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L363` → after: `L39-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L39-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L39-L41) · [Before (L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L363)

```diff
-     const cR = new WeakMap;
+   },
+   41369: (rr, Sr) => {
+     var Qr = new Array(15);
```

#### 9. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L366-L376` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L44) · [Before (L366-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L366-L376)

```diff
-       var GR;
-       const yR = null !== (GR = cR.get(RR)) && void 0 !== GR ? GR : JR(RR);
-       return cR.set(RR, yR), yR
-     }
- 
-     function IR(RR) {
-       const JR = RR.bufferView,
-         GR = 5125 === RR.componentType ? Uint32Array : Uint16Array,
-         yR = JR.bytes.buffer,
-         tR = JR.bytes.byteOffset + (RR.byteOffset || 0);
-       return tR % GR.BYTES_PER_ELEMENT !== 0 ? new GR(yR.slice(tR, tR + RR.count * GR.BYTES_PER_ELEMENT), 0) : new GR(yR, tR, RR.count)
+       return 506832829 * rr >>> Sr
```

#### 10. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L380-L388` → after: `L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L48) · [Before (L380-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L380-L388)

```diff
-       if (RR.min && RR.max) return [new Float64Array(RR.min), new Float64Array(RR.max)];
-       const GR = JR.find((RR => {
-           let {
-             kind: JR
-           } = RR;
-           return "position" === JR
-         })),
-         yR = GR ? (0, OR.h)(GR, RR.count) : new Float32Array(0);
-       return (0, OR.r)(yR.length / 3, ((RR, JR) => yR[3 * RR + JR]))
+       return rr[Sr] + (rr[Sr + 1] << 8) + (rr[Sr + 2] << 16) + (rr[Sr + 3] << 24)
```

#### 11. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L391-L429` → after: `L51-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L51-L53) · [Before (L391-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L391-L429)

```diff
-     function zR(RR) {
-       const JR = RR.attributes.map((RR => {
-           var JR, GR;
-           let {
-             kind: yR,
-             accessor: tR
-           } = RR;
-           const {
-             bufferView: uR,
-             numComponents: ZR
-           } = tR;
-           if (!uR) {
-             return {
-               kind: yR,
-               data: PR(tR, (() => new Float32Array(ZR * tR.count))),
-               offset: 0,
- ... (23 more removed lines; see GitHub link above)
+     function ar(rr, Sr, Qr) {
+       return rr[Sr] === rr[Qr] && rr[Sr + 1] === rr[Qr + 1] && rr[Sr + 2] === rr[Qr + 2] && rr[Sr + 3] === rr[Qr + 3]
+     }
```

#### 12. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L431-L451` → after: `L55-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L55-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L55-L60) · [Before (L431-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L431-L451)

```diff
-     function jR(RR, JR) {
-       const GR = JR.attributes.map((RR => {
-         let {
-           kind: JR,
-           data: GR,
-           size: yR,
-           byteOffset: tR,
-           byteStride: uR,
-           normalized: ZR
-         } = RR;
-         return {
-           kind: JR,
-           data: GR,
-           offset: tR,
-           stride: uR,
-           components: yR,
- ... (5 more removed lines; see GitHub link above)
+     function jr(rr, Sr, Qr, Zr, Wr) {
+       return Qr <= 60 ? (Zr[Wr] = Qr - 1 << 2, Wr += 1) : Qr < 256 ? (Zr[Wr] = 240, Zr[Wr + 1] = Qr - 1, Wr += 2) : (Zr[Wr] = 244, Zr[Wr + 1] = Qr - 1 & 255, Zr[Wr + 2] = Qr - 1 >>> 8, Wr += 3),
+         function(rr, Sr, Qr, Zr, Wr) {
+           var ar;
+           for (ar = 0; ar < Wr; ar++) Qr[Zr + ar] = rr[Sr + ar]
+         }(rr, Sr, Zr, Wr, Qr), Wr + Qr
```

#### 13. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L454-L456` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L63-L64) · [Before (L454-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L454-L456)

```diff
-     function dR(RR) {
-       const JR = RR.lastIndexOf("/");
-       return JR < 0 ? RR : RR.substring(JR + 1)
+     function Ir(rr, Sr, Qr, Zr) {
+       return Zr < 12 && Qr < 2048 ? (rr[Sr] = 1 + (Zr - 4 << 2) + (Qr >>> 8 << 5), rr[Sr + 1] = 255 & Qr, Sr + 2) : (rr[Sr] = 2 + (Zr - 1 << 2), rr[Sr + 1] = 255 & Qr, rr[Sr + 2] = Qr >>> 8, Sr + 3)
```

#### 14. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L459-L461` → after: `L67-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L67-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L67-L69) · [Before (L459-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L459-L461)

```diff
-     function ER(RR) {
-       const JR = RR.lastIndexOf("/");
-       return JR < 0 ? "" : RR.substring(0, JR + 1)
+     function fr(rr, Sr, Qr, Zr) {
+       for (; Zr >= 68;) Sr = Ir(rr, Sr, Qr, 64), Zr -= 64;
+       return Zr > 64 && (Sr = Ir(rr, Sr, Qr, 60), Zr -= 60), Ir(rr, Sr, Qr, Zr)
```

#### 15. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L464-L465` → after: `L72-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L72-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L72-L105) · [Before (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L464-L465)

```diff
-     function YR(RR) {
-       return RR.name || `node${RR.index}`
+     function Er(rr, Sr, Ir, Er, pr) {
+       for (var xr = 1; 1 << xr <= Ir && xr <= 14;) xr += 1;
+       var mr = 32 - (xr -= 1);
+       "undefined" === typeof Qr[xr] && (Qr[xr] = new Uint16Array(1 << xr));
+       var Nr, Ur = Qr[xr];
+       for (Nr = 0; Nr < Ur.length; Nr++) Ur[Nr] = 0;
+       var tr, hr, zr, Yr, nr, er, Kr, yr, Br, Tr, vr = Sr + Ir,
+         Or = Sr,
+         Lr = Sr,
+         lr = !0;
+       if (Ir >= 15)
+         for (tr = vr - 15, zr = Zr(Wr(rr, Sr += 1), mr); lr;) {
+           er = 32, Yr = Sr;
+           do {
+             if (hr = zr, Kr = er >>> 5, er += 1, Yr = (Sr = Yr) + Kr, Sr > tr) {
+               lr = !1;
+ ... (18 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L488-L490` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L109) · [Before (L488-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L488-L490)

```diff
-       var JR, GR, yR, tR;
-       const uR = null !== (JR = RR.minFilter) && void 0 !== JR ? JR : 9987;
-       return 9729 === (null !== (GR = RR.magFilter) && void 0 !== GR ? GR : 9729) ? null !== (yR = QR[uR]) && void 0 !== yR ? yR : 3 : null !== (tR = FR[uR]) && void 0 !== tR ? tR : 4
+       this.array = rr
```

#### 17. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L492-L495` → after: `L111-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L111-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L111-L129) · [Before (L492-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L492-L495)

```diff
-     const sR = {
-       33071: 0,
-       33648: 2
-     };
+     pr.prototype.maxCompressedLength = function() {
+       var rr = this.array.length;
+       return 32 + rr + Math.floor(rr / 6)
+     }, pr.prototype.compressToBuffer = function(rr) {
+       var Sr, Qr = this.array,
+         Zr = Qr.length,
+         Wr = 0,
+         ar = 0;
+       for (ar = function(rr, Sr, Qr) {
+           do {
+             Sr[Qr] = 127 & rr, (rr >>>= 7) > 0 && (Sr[Qr] += 128), Qr += 1
+           } while (rr > 0);
+           return Qr
+         }(Zr, rr, ar); Wr < Zr;) ar = Er(Qr, Wr, Sr = Math.min(Zr - Wr, 65536), rr, ar), Wr += Sr;
+       return ar
+     }, Sr.b = pr
+ ... (3 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L497` → after: `L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L131) · [Before (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L497)

```diff
-     function hR(RR) {
+     function Zr(rr, Sr, Qr, Zr, Wr) {
```

#### 19. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L499` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L133) · [Before (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L499)

```diff
-       return null !== (JR = sR[null !== RR && void 0 !== RR ? RR : 10497]) && void 0 !== JR ? JR : 1
+       for (ar = 0; ar < Wr; ar++) Qr[Zr + ar] = rr[Sr + ar]
```

#### 20. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L502-L503` → after: `L136-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L136-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L136-L138) · [Before (L502-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L502-L503)

```diff
-     function RJ(RR) {
-       return 9728 === RR.minFilter || 9729 === RR.minFilter
+     function Wr(rr, Sr, Qr, Zr) {
+       var Wr;
+       for (Wr = 0; Wr < Zr; Wr++) rr[Sr + Wr] = rr[Sr - Qr + Wr]
```

#### 21. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L507-L523` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L142) · [Before (L507-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L507-L523)

```diff
-       var JR, GR, yR;
-       const tR = Float64Array.from(null !== (JR = RR.scale) && void 0 !== JR ? JR : [1, 1, 1]);
-       return RR.hasCamera && (tR[0] = -1), {
-         translation: Float64Array.from(null !== (GR = RR.translation) && void 0 !== GR ? GR : [0, 0, 0]),
-         rotation: Float64Array.from(null !== (yR = RR.rotation) && void 0 !== yR ? yR : [0, 0, 0, 1]),
-         scale: tR
-       }
-     }
- 
-     function GJ(RR, JR) {
-       let {
-         translation: GR,
-         rotation: yR,
-         scale: tR
-       } = RR;
-       const uR = new Float32Array(16);
- ... (1 more removed lines; see GitHub link above)
+       this.array = rr, this.pos = 0
```

#### 22. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L525-L563` → after: `L144-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L144-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L144-L148) · [Before (L525-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L525-L563)

```diff
-     class yJ {
-       constructor(RR, JR, GR, yR) {
-         this.model = RR, this.decode = JR, this.fileInfo = GR, this.uniqueRootUrl = yR, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
-         const tR = new Set,
-           uR = (JR, GR) => {
-             const yR = RR.nodes[JR];
-             if (this.parents.has(yR)) throw new xR.i(`/nodes/${JR}: Invalid recursive node hierarchy`);
-             this.parents.set(yR, GR);
-             const ZR = null === yR.mesh ? [] : RR.meshes[yR.mesh].primitives,
-               qR = ZR.map((RR => {
-                 const JR = ZR.length > 1;
-                 return {
-                   name: JR ? `${YR(yR)}_primitive${RR.index}` : YR(yR),
-                   node: yR,
-                   primitive: RR,
-                   part: JR,
- ... (23 more removed lines; see GitHub link above)
+     ar.prototype.readUncompressedLength = function() {
+       for (var rr, Sr, Qr = 0, Zr = 0; Zr < 32 && this.pos < this.array.length;) {
+         if (rr = this.array[this.pos], this.pos += 1, (Sr = 127 & rr) << Zr >>> Zr !== Sr) return -1;
+         if (Qr |= Sr << Zr, rr < 128) return Qr;
+         Zr += 7
```

#### 23. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L565-L676` → after: `L150-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L150-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L150-L171) · [Before (L565-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L565-L676)

```diff
-       parentOf(RR) {
-         var JR;
-         return null !== (JR = this.parents.get(RR)) && void 0 !== JR ? JR : null
-       }
-       meshesUnder(RR) {
-         const JR = this.model.nodes.filter((RR => this.uses.has(RR)));
-         for (const yR of JR) {
-           const JR = this.uses.get(yR),
-             GR = JR.find((JR => JR.name === RR));
-           if (GR) return 1 === JR.length ? this.subtree(yR) : this.own.get(yR).includes(GR) ? [GR] : []
-         }
-         const GR = JR.find((JR => 1 !== this.uses.get(JR).length && YR(JR) === RR));
-         return GR ? this.subtree(GR) : null
-       }
-       subtree(RR) {
-         return [...this.own.get(RR), ...RR.children.flatMap((RR => this.subtree(this.model.nodes[RR])))]
- ... (96 more removed lines; see GitHub link above)
+       return -1
+     }, ar.prototype.uncompressToBuffer = function(rr) {
+       for (var Sr, ar, jr, Ir, fr = this.array, Er = fr.length, pr = this.pos, xr = 0; pr < fr.length;)
+         if (Sr = fr[pr], pr += 1, 0 === (3 & Sr)) {
+           if ((ar = 1 + (Sr >>> 2)) > 60) {
+             if (pr + 3 >= Er) return !1;
+             jr = ar - 60, ar = 1 + ((ar = fr[pr] + (fr[pr + 1] << 8) + (fr[pr + 2] << 16) + (fr[pr + 3] << 24)) & Qr[jr]), pr += jr
+           }
+           if (pr + ar > Er) return !1;
+           Zr(fr, pr, rr, xr, ar), pr += ar, xr += ar
+         } else {
+           switch (3 & Sr) {
+             case 1:
+               ar = 4 + (Sr >>> 2 & 7), Ir = fr[pr] + (Sr >>> 5 << 8), pr += 1;
+               break;
+             case 2:
+ ... (6 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L678-L680` → after: `L173-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L173-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L173-L180) · [Before (L678-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L678-L680)

```diff
-         }(GR, RR, tR),
-         iR = {};
-       JR.addPendingData(iR);
+           if (0 === Ir || Ir > xr) return !1;
+           Wr(rr, xr, Ir, ar), xr += ar
+         } return !0
+     }, Sr.c = ar
+   },
+   37500: rr => {
+     rr.exports = function(rr, Sr, Qr, Zr) {
+       var Wr = self || window;
```

#### 25. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L682-L733` → after: `L182-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L182-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L182-L194) · [Before (L682-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L682-L733)

```diff
-         const GR = HR(await async function(RR, JR) {
-             return "string" !== typeof JR ? JR : RR.url.startsWith("data:") ? (0, xR.p)(RR.url) : await (0, xR.s)(RR.url)
-           }(qR, RR)),
-           iR = new yJ(GR, yR, qR, function(RR, JR) {
-             let {
-               rootUrl: GR,
-               name: yR
-             } = RR;
-             return !GR.startsWith("file:") && yR ? GR : `${GR}${JR()}/`
-           }(qR, tR));
-         return await uR(iR), JR.importedMeshesFiles && (JR.loadingPluginName = "dD", ZR && JR.importedMeshesFiles.push(qR.url)), iR
-       } finally {
-         JR.removePendingData(iR)
-       }
-     }
-     var uJ = GR(38650),
- ... (36 more removed lines; see GitHub link above)
+         try {
+           var ar;
+           try {
+             ar = new Wr.Blob([rr])
+           } catch (Er) {
+             (ar = new(Wr.BlobBuilder || Wr.WebKitBlobBuilder || Wr.MozBlobBuilder || Wr.MSBlobBuilder)).append(rr), ar = ar.getBlob()
+           }
+           var jr = Wr.URL || Wr.webkitURL,
+             Ir = jr.createObjectURL(ar),
+             fr = new Wr[Sr](Ir, Qr);
+           return jr.revokeObjectURL(Ir), fr
+         } catch (Er) {
+           return new Wr[Sr]("data:application/javascript,".concat(encodeURIComponent(rr)), Qr)
```

#### 26. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L735-L747` → after: `L196-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L196-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L196-L198) · [Before (L735-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L735-L747)

```diff
-         return uR
-       }
-       layoutVertexBuffer(RR, JR) {
-         let {
-           kind: GR,
-           offset: yR,
-           stride: tR,
-           components: uR,
-           glType: ZR,
-           isNormalized: qR
-         } = JR;
-         const iR = this.tL.ke();
-         return new((0, uJ.c)().VertexBuffer)(iR, RR, GR, !1, void 0, tR, void 0, yR, uR, ZR, qR, !0, void 0, !0)
+       } catch (Er) {
+         if (!Zr) throw Error("Inline worker is not supported");
+         return new Wr[Sr](Zr, Qr)
```

#### 27. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L749-L763` → after: `L200-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L200-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L200-L234) · [Before (L749-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L749-L763)

```diff
-       load(RR, JR, GR) {
-         const yR = (0, ZJ.d)(GR),
-           tR = RR => {
-             yR || (GR._delayInfo = GR._delayInfo || [], -1 === GR._delayInfo.indexOf(RR) && GR._delayInfo.push(RR))
-           },
-           uR = JR.draco;
-         if (uR) {
-           for (const RR in uR.attributeIds) tR(RR);
-           let ZR = this.dracoGeometry.get(uR.bufferView.index);
-           return ZR || (ZR = this.viewBytes(uR.bufferView).then((async () => {
-             let tR;
-             try {
-               tR = await oR(JR, this.decode)
-             } catch (iR) {
-               throw new xR.i(`${RR}: ${iR instanceof Error?iR.message:String(iR)}`)
+     }
+   },
+   41488: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       c: () => ar,
+       e: () => Wr,
+       h: () => Er,
+       i: () => Nr,
+       m: () => jr,
+       q: () => Ur
+     });
+     var Zr = Qr(41493);
+     const Wr = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350],
+       ar = [-1, 1, 2, 3, 4, 5, 6, 8],
+       jr = rr => {
+         if (!rr || rr.byteLength < 2) throw new TypeError("AAC description must be at least 2 bytes long.");
+ ... (19 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L765-L772` → after: `L236-L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L236-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L236-L244) · [Before (L765-L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L765-L772)

```diff
-             const uR = jR(JR, tR);
-             if (yR) return uR;
-             const ZR = iJ(JR.position),
-               qR = new((0, uJ.c)().MirroredGeometry)(GR.name, this.tL);
-             ZR && (qR._boundingInfo = ZR, qR.useBoundingInfoFromGeometry = !0), uR.indexData && qR.setIndices(uR.indexData);
-             for (const RR of uR.vertexAttributes) qR.setVerticesBuffer(this.layoutVertexBuffer(RR.data, RR), uR.vertexCount);
-             return qR.link(uR), qR
-           })), this.dracoGeometry.set(uR.bufferView.index, ZR)), ZR
+             Sr.pos = rr + 1
+           }
+         return null !== pr && pr > 1 && (mr = !1), {
+           objectType: Qr,
+           coreObjectType: xr,
+           frequencyIndex: Wr,
+           channelConfiguration: Er,
+           outputSampleRate: Nr,
+           outputNumberOfChannels: mr && 1 === pr ? 2 : pr
```

#### 29. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L774-L777` → after: `L246-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L246-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L246-L288) · [Before (L774-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L774-L777)

```diff
-         const ZR = [],
-           qR = zR(JR);
-         if (yR) return GR.isUnIndexed = !qR.indexData, GR.hasVertexAlpha = (0, qJ.f)(JR), Promise.resolve(qR);
-         const iR = new((0, uJ.c)().MirroredGeometry)(GR.name, this.tL),
+       },
+       Ir = rr => {
+         const Sr = rr.readBits(5);
+         return 31 === Sr ? 32 + rr.readBits(6) : Sr
+       },
+       fr = rr => {
+         const Sr = rr.readBits(4);
+         return 15 === Sr ? {
+           frequencyIndex: Sr,
+           sampleRate: rr.readBits(24)
+         } : {
+           frequencyIndex: Sr,
+           sampleRate: Sr < Wr.length ? Wr[Sr] : null
+         }
+       },
+       Er = rr => {
+ ... (27 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L779-L815` → after: `L290-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L290-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L290-L301) · [Before (L779-L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L779-L815)

```diff
-             indexData: fR
-           } = qR;
-         fR ? ZR.push(this.viewBytes(JR.indices.bufferView).then((() => {
-           iR.setIndices(fR)
-         }))) : GR.isUnIndexed = !0;
-         for (const [VR, {
-             kind: KR,
-             accessor: wR
-           }] of JR.attributes.entries()) tR(KR), ZR.push(this.vertexBuffer(wR, qR.vertexAttributes[VR]).then((RR => {
-           if ("position" === RR.getKind()) {
-             const RR = iJ(wR);
-             RR && (iR._boundingInfo = RR, iR.useBoundingInfoFromGeometry = !0)
-           }
-           iR.setVerticesBuffer(RR, qR.vertexCount)
-         })));
-         return (0, qJ.f)(JR) && (GR.hasVertexAlpha = !0), Promise.all(ZR).then((() => (iR.link(qR), iR)))
- ... (21 more removed lines; see GitHub link above)
+             coreObjectType: Wr,
+             frequencyIndex: ar,
+             channelConfiguration: jr
+           } = rr,
+           Ir = Wr - 1;
+         return Qr.writeBits(12, 4095), Qr.writeBits(1, 0), Qr.writeBits(2, 0), Qr.writeBits(1, 1), Qr.writeBits(2, Ir), Qr.writeBits(4, ar), Qr.writeBits(1, 0), Qr.writeBits(3, jr), Qr.writeBits(1, 0), Qr.writeBits(1, 0), Qr.writeBits(1, 0), Qr.writeBits(1, 0), Qr.skipBits(13), Q … [truncated]
+           header: Sr,
+           bitstream: Qr
+         }
+       },
+       Ur = (rr, Sr) => {
+         rr.pos = 30, rr.writeBits(13, Sr)
```

#### 31. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L817-L821` → after: `L303-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L303-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L303-L307) · [Before (L817-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L817-L821)

```diff
-     }
- 
-     function CJ(RR, JR) {
-       JR.position = RR.translation ? rJ.Fe.FromArray(RR.translation) : rJ.Fe.Zero(), JR.rotationQuaternion = RR.rotation ? rJ.Quaternion.FromArray(RR.rotation) : rJ.Quaternion.Identity(), JR.MK = RR.scale ? rJ.Fe.FromArray(RR.scale) : rJ.Fe.One()
-     }
+   },
+   41493: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       b: () => Zr
+     });
```

#### 32. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L823-L835` → after: `L309-L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L309-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L309-L310) · [Before (L823-L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L823-L835)

```diff
-       constructor(RR, JR) {
-         if (this.tL = RR, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, JR) {
-           const JR = RR.ke(),
-             GR = RR.YH.add((() => {
-               this.dispose()
-             })),
-             yR = JR.Ye.add((() => {
-               for (const RR of [...this.geometries, ...this.meshes, ...this.textures]) RR._rebuild()
-             }));
-           this.release = () => {
-             RR.YH.remove(GR), JR.Ye.remove(yR)
-           }
-         }
+       constructor(rr) {
+         this.bytes = rr, this.pos = 0
```

#### 33. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L837-L838` → after: `L312-L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L312-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L312-L313) · [Before (L837-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L837-L838)

```diff
-       getNodes() {
-         return [...this.meshes, ...this.transformNodes]
+       seekToByte(rr) {
+         this.pos = 8 * rr
```

#### 34. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L840-L848` → after: `L315-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L315-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L315-L320) · [Before (L840-L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L840-L848)

```diff
-       addAllToScene() {
-         if (this.release) {
-           this.release(), this.release = null;
-           for (const RR of this.meshes) this.tL.stR(RR);
-           for (const RR of this.materials) this.tL.addMaterial(RR);
-           for (const RR of this.geometries) this.tL.addGeometry(RR);
-           for (const RR of this.transformNodes) this.tL.addTransformNode(RR);
-           for (const RR of this.textures) this.tL.addTexture(RR)
-         }
+       readBit() {
+         const rr = Math.floor(this.pos / 8),
+           Sr = this.bytes[rr] ?? 0,
+           Qr = 7 - (7 & this.pos),
+           Zr = (Sr & 1 << Qr) >> Qr;
+         return this.pos++, Zr
```

#### 35. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L850-L854` → after: `L322-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L322-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L322-L334) · [Before (L850-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L850-L854)

```diff
-       dispose() {
-         var RR;
-         for (const JR of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
-           for (const RR of JR.slice()) RR.dispose();
-           JR.length = 0
+       readBits(rr) {
+         if (1 === rr) return this.readBit();
+         let Sr = 0;
+         for (let Qr = 0; Qr < rr; Qr++) Sr <<= 1, Sr |= this.readBit();
+         return Sr
+       }
+       writeBits(rr, Sr) {
+         const Qr = this.pos + rr;
+         for (let Zr = this.pos; Zr < Qr; Zr++) {
+           const rr = Math.floor(Zr / 8);
+           let Wr = this.bytes[rr];
+           const ar = 7 - (7 & Zr);
+           Wr &= ~(1 << ar), Wr |= (Sr & 1 << Qr - Zr - 1) >> Qr - Zr - 1 << ar, this.bytes[rr] = Wr
```

#### 36. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L856` → after: `L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L336) · [Before (L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L856)

```diff
-         null === (RR = this.release) || void 0 === RR || RR.call(this), this.release = null
+         this.pos = Qr
```

#### 37. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L858-L861` → after: `L338-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L338-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L338-L342) · [Before (L858-L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L858-L861)

```diff
-     }
-     class MJ {
-       constructor(RR, JR, GR, yR, tR, uR, ZR) {
-         this.asset = RR, this.tL = JR, this.tree = GR, this.geometryData = tR, this.materials = uR, this.lite = ZR, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = yR ? GR : null
+       copyBits(rr, Sr) {
+         let Qr = 0;
+         for (; Qr < rr - 7; Qr += 8) this.writeBits(8, Sr.readBits(8));
+         const Zr = rr - Qr;
+         Zr > 0 && this.writeBits(Zr, Sr.readBits(Zr))
```

#### 38. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L863-L872` → after: `L344-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L344-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L344-L348) · [Before (L863-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L863-L872)

```diff
-       create(RR) {
-         if (this.lite) return RR();
-         const JR = this.tL;
-         JR._blockEntityCollection = !!this.container;
-         try {
-           const JR = RR();
-           return this.container && (JR._parentContainer = this.container), JR
-         } finally {
-           JR._blockEntityCollection = !1
-         }
+       readAlignedByte() {
+         if (this.pos % 8 !== 0) throw new Error("Bitstream is not byte-aligned.");
+         const rr = this.pos / 8,
+           Sr = this.bytes[rr] ?? 0;
+         return this.pos += 8, Sr
```

#### 39. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L874-L875` → after: `L350-L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L350-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L350-L351) · [Before (L874-L875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L874-L875)

```diff
-       node(RR, JR) {
-         return this.create((() => this.lite ? JR ? (0, eJ.i)(this.lite, RR) : (0, eJ.p)(this.lite, RR) : JR ? new((0, uJ.c)().Mesh)(RR, this.tL) : new((0, uJ.c)().TransformNode)(RR, this.tL)))
+       skipBits(rr) {
+         this.pos += rr
```

#### 40. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L877-L915` → after: `L353-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L353-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L353-L354) · [Before (L877-L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L877-L915)

```diff
-       async load() {
-         var RR;
-         this.asset.model.json.nodes && this.createRoot();
-         const JR = this.lite ? null : this.tL,
-           GR = null !== (RR = null === JR || void 0 === JR ? void 0 : JR.blockMaterialDirtyMechanism) && void 0 !== RR && RR;
-         let yR;
-         JR && (JR.blockMaterialDirtyMechanism = !0);
-         try {
-           yR = this.loadScene()
-         } finally {
-           null === JR || void 0 === JR || JR._forceBlockMaterialDirtyMechanism(GR)
-         }
-         await yR;
-         const {
-           root: tR,
-           tree: uR
- ... (23 more removed lines; see GitHub link above)
+       getBitsLeft() {
+         return 8 * this.bytes.length - this.pos
```

#### 41. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L917-L947` → after: `L356-L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L356-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L356-L358) · [Before (L917-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L917-L947)

```diff
-       loadNode(RR, JR) {
-         const GR = `/nodes/${RR.index}`,
-           yR = [],
-           tR = tR => {
-             if (WJ(tR, GR), CJ(RR, tR), RR.hasCamera && !this.tL.useRightHandedSystem) {
-               const {
-                 MK: RR
-               } = tR;
-               RR.set(-1, RR.y, RR.z)
-             }
-             for (const JR of RR.children) yR.push(this.loadNode(this.asset.model.nodes[JR], (RR => {
-               RR.parent = tR
-             })));
-             (GR => {
-               AJ(GR, RR.extras), JR(GR)
-             })(tR)
- ... (15 more removed lines; see GitHub link above)
+       clone() {
+         const rr = new Zr(this.bytes);
+         return rr.pos = this.pos, rr
```

#### 42. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L949-L959` → after: `L360-L7078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L360-L7078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L360-L7078) · [Before (L949-L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L949-L959)

```diff
-       loadMesh(RR, JR, GR, yR) {
-         const tR = [],
-           uR = YR(JR);
-         if (1 === GR.primitives.length) {
-           const yR = GR.primitives[0];
-           tR.push(this.loadPrimitive(`${RR}/primitives/${yR.index}`, uR, yR, (RR => {
-             this.nodeObjects.set(JR.index, RR), this.nodePrimitives.set(JR.index, [RR])
-           })))
-         } else {
-           const yR = this.node(uR, !1);
-           this.nodeObjects.set(JR.index, yR);
+     }
+   },
+   41506: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       b: () => ur,
+       f: () => fr,
+       j: () => rS,
+       n: () => Dr,
+       r: () => Er,
+       s: () => wr,
+       w: () => US,
+       y: () => zr,
+       C: () => Yr,
+       D: () => dr,
+       E: () => Kr,
+       I: () => Mr,
+ ... (6703 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L961-L964` → after: `L7080-L7095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R7080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L7080-L7095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L7080-L7095) · [Before (L961-L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L961-L964)

```diff
-           this.nodePrimitives.set(JR.index, ZR);
-           for (const JR of GR.primitives) tR.push(this.loadPrimitive(`${RR}/primitives/${JR.index}`, `${uR}_primitive${JR.index}`, JR, (RR => {
-             RR.parent = yR, ZR.push(RR)
-           })))
+           for (const Zr of rr) Qr.set(Zr.data, Wr), ar.push(Wr), Wr += Zr.data.byteLength;
+           return new VideoFrame(Qr, {
+             format: this.format,
+             layout: rr.map(((rr, Sr) => ({
+               offset: ar[Sr],
+               stride: rr.stride
+             }))),
+             codedWidth: this.codedWidth,
+             codedHeight: this.codedHeight,
+             timestamp: this.microsecondTimestamp,
+             duration: this.microsecondDuration,
+             colorSpace: this.colorSpace,
+             visibleRect: this.visibleRect,
+             displayWidth: this.squarePixelWidth,
+             displayHeight: this.squarePixelHeight
+           })
```

#### 44. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L966-L967` → after: `L7097-L7114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R7097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L7097-L7114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L7097-L7114) · [Before (L966-L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L966-L967)

```diff
-         const ZR = this.nodeObjects.get(JR.index);
-         return yR(ZR), Promise.all(tR).then((() => ZR))
+         return nr(this._data) ? new VideoFrame(this._data, {
+           timestamp: this.microsecondTimestamp,
+           duration: this.microsecondDuration || void 0
+         }) : this._data instanceof Uint8Array ? ((0, Zr.I)(this._layout), new VideoFrame(this._data, {
+           format: this.format,
+           codedWidth: this.codedWidth,
+           codedHeight: this.codedHeight,
+           layout: this._layout,
+           timestamp: this.microsecondTimestamp,
+           duration: this.microsecondDuration || void 0,
+           colorSpace: this.colorSpace,
+           visibleRect: this.visibleRect,
+           displayWidth: this.squarePixelWidth,
+           displayHeight: this.squarePixelHeight
+         })) : new VideoFrame(this._data, {
+           timestamp: this.microsecondTimestamp,
+ ... (2 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L969-L991` → after: `L7116-L7187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R7116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L7116-L7187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L7116-L7187) · [Before (L969-L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L969-L991)

```diff
-       loadPrimitive(RR, JR, GR, yR) {
-         const tR = [],
-           uR = this.node(JR, !0);
-         if (uR.sideOrientation = this.tL.useRightHandedSystem ? aJ.d.CounterClockWiseSideOrientation : aJ.d.ClockWiseSideOrientation, tR.push(this.geometryData.load(RR, GR, uR).then((RR => {
-             if ((0, ZJ.d)(uR)) {
-               var JR, GR;
-               const yR = RR;
-               uR.replaceModel(yR, Int32Array.of(0, null !== (JR = null === (GR = yR.indexData) || void 0 === GR ? void 0 : GR.length) && void 0 !== JR ? JR : yR.vertexCount, 0, yR.vertexCount))
-             } else this.create((() => (RR.applyToMesh(uR), RR)))
-           }))), this.materials) {
-           const RR = 0 === GR.mode ? aJ.d.PointListDrawMode : aJ.d.TriangleFillMode,
-             JR = null === GR.material ? null : this.asset.model.materials[GR.material];
-           tR.push(this.loadMaterial(JR, RR, (RR => {
-             uR.material = RR
-           })))
-         }
- ... (7 more removed lines; see GitHub link above)
+       draw(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr) {
+         let Er = 0,
+           pr = 0,
+           xr = this.displayWidth,
+           mr = this.displayHeight,
+           Nr = 0,
+           Ur = 0,
+           tr = this.displayWidth,
+           hr = this.displayHeight;
+         if (void 0 !== ar ? (Er = Sr, pr = Qr, xr = Zr, mr = Wr, Nr = ar, Ur = jr, void 0 !== Ir ? (tr = Ir, hr = fr) : (tr = xr, hr = mr)) : (Nr = Sr, Ur = Qr, void 0 !== Zr && (tr = Zr, hr = Wr)), !("undefined" !== typeof CanvasRenderingContext2D && rr instanceof CanvasRenderin … [truncated]
+         if (!Number.isFinite(Er)) throw new TypeError("sx must be a number.");
+         if (!Number.isFinite(pr)) throw new TypeError("sy must be a number.");
+         if (!Number.isFinite(xr) || xr < 0) throw new TypeError("sWidth must be a non-negative number.");
+         if (!Number.isFinite(mr) || mr < 0) throw new TypeError("sHeight must be a non-negative number.");
+         if (!Number.isFinite(Nr)) throw new TypeError("dx must be a number.");
+         if (!Number.isFinite(Ur)) throw new TypeError("dy must be a number.");
+ ... (56 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L993-L994` → after: `L7189-L7198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R7189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L7189-L7198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L7189-L7198) · [Before (L993-L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L993-L994)

```diff
-       createMaterial(RR, JR) {
-         const GR = RR ? RR.name || `material${RR.index}` : "__GLTFLoader._default",
+       _drawWithFitAndMipmapping(rr, Sr, Qr) {
+         const Zr = rr.width,
+           Wr = rr.height,
+           [ar, jr] = Qr.rotation % 180 === 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth],
+           Ir = Qr.crop ? Qr.crop.width : ar,
+           fr = Qr.crop ? Qr.crop.height : jr;
+         let Er = 0;
+         2 * Zr < Ir && 2 * Wr < fr && (Er = Math.floor(Math.log2(Math.min(Ir / Zr, fr / Wr))));
+         const pr = Zr * 2 ** Er,
+           xr = Wr * 2 ** Er,
```

#### 47. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L996-L998` → after: `L7200-L7504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R7200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L7200-L7504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L7200-L7504) · [Before (L996-L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L996-L998)

```diff
-             style: yR,
-             unlit: tR
-           } = this.materials;
+             canvas: mr,
+             context: Nr,
+             isNew: Ur
+           } = Er > 0 ? zr(pr, xr) : {
+             canvas: rr,
+             context: Sr,
+             isNew: Qr.targetIsFresh
+           };
+         Nr.imageSmoothingQuality = "high", Qr.fillBlack ? (Nr.fillStyle = "black", Nr.fillRect(0, 0, pr, xr)) : Ur || Nr.clearRect(0, 0, pr, xr), this.drawWithFit(Nr, {
+           fit: Qr.fit,
+           rotation: Qr.rotation,
+           flip: Qr.flip,
+           crop: Qr.crop
+         }), Nr.globalCompositeOperation = "copy";
+         for (let tr = Er; tr > 1; tr--) {
+           const rr = Zr * 2 ** tr,
+ ... (289 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L1000-L1019` → after: `L7506-L7567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R7506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L7506-L7567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L7506-L7567) · [Before (L1000-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L1000-L1019)

```diff
-         const ZR = this.create((() => {
-           const ZR = (0, UJ.b)({
-             name: GR,
-             tL: this.tL,
-             sets: {
-               ...(0, qJ.b)(this.asset, RR, yR, tR),
-               fillMode: JR
-             },
-             unrendered: !0
-           });
-           return uR = ZR.model, ZR.mirror
-         }));
-         let qR = Promise.resolve();
-         if (RR) {
-           const JR = `/materials/${RR.index}`,
-             yR = uR.diffuseTexture;
- ... (4 more removed lines; see GitHub link above)
+         if (Sr.format && Sr.format !== rr.format) {
+           if (!["RGBA", "RGBX", "BGRA", "BGRX"].includes(Sr.format)) throw new Error("NotSupportedError: Invalid destination format.");
+           jr = Sr.format
+         } else jr = rr.format;
+         return lr(Wr, jr, ar)
+       },
+       Or = (rr, Sr, Qr, Zr, Wr) => {
+         const ar = {
+           ...rr
+         };
+         if (void 0 !== Sr) {
+           if (0 === Sr.width || 0 === Sr.height) throw new TypeError("visibleRect dimensions cannot be zero.");
+           if ((Sr.x || 0) + (Sr.width || 0) > Qr) throw new TypeError("visibleRect exceeds codedWidth.");
+           if ((Sr.y || 0) + (Sr.height || 0) > Zr) throw new TypeError("visibleRect exceeds codedHeight.");
+           ar.x = Sr.x || 0, ar.y = Sr.y || 0, ar.width = Sr.width || 0, ar.height = Sr.height || 0
+         }
+ ... (46 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L1021` → after: `L7569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R7569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L7569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L7569) · [Before (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L1021)

```diff
-           AJ(ZR, RR.extras), WJ(ZR, JR)
+           jr.push(xr)
```

#### 50. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L1023-L1025` → after: `L7571-L7573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R7571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L7571-L7573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L7571-L7573) · [Before (L1023-L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L1023-L1025)

```diff
-         return this.tree.materials.push(ZR), {
-           material: ZR,
-           promise: qR
+         return {
+           allocationSize: ar,
+           computedLayouts: jr
```

#### 51. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L1029-L1036` → after: `L7582-L7607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R7582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L7582-L7607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L7582-L7607) · [Before (L1029-L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L1029-L1036)

```diff
- 
-     function BJ() {
-       wJ.d.dracoDecodes = XR.decodes, wJ.d.dracoWorkersStarted = XR.workersStarted, wJ.d.dracoMostWorkers = XR.mostWorkers
-     }
-     async function lJ(RR, JR, GR, tR, uR) {
-       try {
-         return await async function(RR, JR, GR, tR, uR, ZR) {
-           var qR;
+     class Hr {
+       get microsecondTimestamp() {
+         return Math.trunc(Zr.r * this.timestamp)
+       }
+       get microsecondDuration() {
+         return Math.trunc(Zr.r * this.duration)
+       }
+       constructor(rr) {
+         if (this._closed = !1, Mr(rr)) {
+           if (null === rr.format) throw new TypeError("AudioData with null format is not supported.");
+           this._data = rr, this.format = rr.format, this.sampleRate = rr.sampleRate, this.numberOfFrames = rr.numberOfFrames, this.numberOfChannels = rr.numberOfChannels, this.timestamp = rr.timestamp / 1e6, this.duration = rr.numberOfFrames / rr.sampleRate
+         } else if (rr instanceof Pr) {
+           if (this._data = rr, rr._referenceCount++, this.format = rr.getFormat(), !Xr.has(this.format)) throw new TypeError("getFormat() must return an AudioSampleFormat.");
+           if (this.sampleRate = rr.getSampleRate(), !Number.isInteger(this.sampleRate) || this.sampleRate <= 0) throw new TypeError("getSampleRate() must return a positive integer.");
+           if (this.numberOfFrames = rr.getNumberOfFrames(), !Number.isInteger(this.numberOfFrames) || this.numberOfFrames < 0) throw new TypeError("getNumberOfFrames() must return a non-negative integer.");
+           if (this.numberOfChannels = rr.getNumberOfChannels(), !Number.isInteger(this.numberOfChannels) || this.numberOfChannels <= 0) throw new TypeError("getNumberOfChannels() must return a positive integer.");
+ ... (10 more added lines; see GitHub link above)
```

#### 52. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L1038-L1044` → after: `L7609-L7912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R7609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L7609-L7912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L7609-L7912) · [Before (L1038-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L1038-L1044)

```diff
-           const fR = null === (qR = (0, nJ.i)()) || void 0 === qR ? void 0 : qR.lK,
-             VR = null !== fR && void 0 !== fR && fR.La && JR === fR.jH() ? fR : null,
-             KR = uR && !VR;
-           return await tJ(RR, JR, GR, tR, yR.c, (RR => (iR = new XJ(JR, KR), new MJ(RR, JR, iR, KR, new VJ(JR, tR), ZR, VR).load())), !uR), iR
-         }(RR, JR, GR, bR, tR, uR)
-       } finally {
-         BJ()
+           if (this.format = rr.format, this.sampleRate = rr.sampleRate, this.numberOfFrames = Sr, this.numberOfChannels = rr.numberOfChannels, this.timestamp = rr.timestamp, this.duration = Sr / rr.sampleRate, rr.data instanceof ArrayBuffer) Qr = new Uint8Array(rr.data);
+           else {
+             if (!ArrayBuffer.isView(rr.data)) throw new TypeError("Invalid AudioDataInit: data is not a BufferSource.");
+             Qr = new Uint8Array(rr.data.buffer, rr.data.byteOffset, rr.data.byteLength)
+           }
+           const Zr = this.numberOfFrames * this.numberOfChannels * qr(this.format);
+           if (Qr.byteLength < Zr) throw new TypeError("Invalid AudioDataInit: insufficient data size.");
+           this._data = Qr
+         }
+         Er?.register(this, {
+           type: "audio",
+           data: this._data
+         }, this)
+       }
+       allocationSize(rr) {
+         if (!rr || "object" !== typeof rr) throw new TypeError("options must be an object.");
+ ... (288 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L1047-L1051` → after: `L7915-L8117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R7915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L7915-L8117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L7915-L8117) · [Before (L1047-L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L1047-L1051)

```diff
-     async function pJ(RR, JR, GR, tR) {
-       try {
-         return await tJ(RR, JR, GR, bR, yR.c, (RR => tR(RR, new VJ(JR, bR))))
-       } finally {
-         BJ()
+     const qr = rr => {
+         switch (rr) {
+           case "u8":
+           case "u8-planar":
+             return 1;
+           case "s16":
+           case "s16-planar":
+             return 2;
+           case "s32":
+           case "s32-planar":
+           case "f32":
+           case "f32-planar":
+             return 4;
+           default:
+             throw new Error("Unknown AudioSampleFormat")
+         }
+ ... (187 more added lines; see GitHub link above)
```

#### 54. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L1054-L1057` → after: `L8120-L8132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R8120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L8120-L8132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L8120-L8132) · [Before (L1054-L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L1054-L1057)

```diff
-     KJ = qR, nR || (nR = {
-       scriptUrl: new URL(KJ.scriptUrl, location.href).href,
-       wasmBinaryUrl: new URL(KJ.wasmBinaryUrl, location.href).href
-     })
+     const Ir = /(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})/,
+       fr = rr => {
+         const Sr = Ir.exec(rr);
+         if (!Sr) throw new Error("Expected match.");
+         return 36e5 * Number(Sr[1] || "0") + 6e4 * Number(Sr[2]) + 1e3 * Number(Sr[3]) + Number(Sr[4])
+       },
+       Er = rr => {
+         const Sr = Math.floor(rr / 36e5),
+           Qr = Math.floor(rr % 36e5 / 6e4),
+           Zr = Math.floor(rr % 6e4 / 1e3),
+           Wr = rr % 1e3;
+         return Sr.toString().padStart(2, "0") + ":" + Qr.toString().padStart(2, "0") + ":" + Zr.toString().padStart(2, "0") + "." + Wr.toString().padStart(3, "0")
+       }
```

#### 55. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L1059-L1068` → after: `L8134-L8188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R8134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L8134-L8188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L8134-L8188) · [Before (L1059-L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L1059-L1068)

```diff
-   37156: RR => {
-     RR.exports = function(RR, JR, GR, yR) {
-       var tR = self || window;
-       try {
-         try {
-           var uR;
-           try {
-             uR = new tR.Blob([RR])
-           } catch (fR) {
-             (uR = new(tR.BlobBuilder || tR.WebKitBlobBuilder || tR.MozBlobBuilder || tR.MSBlobBuilder)).append(RR), uR = uR.getBlob()
+   41539: (rr, Sr, Qr) => {
+     var Zr;
+     Qr.d(Sr, {
+       d: () => Er,
+       g: () => pr,
+       h: () => mr,
+       k: () => jr
+     });
+     var Wr = Qr(41545),
+       ar = Qr(41474);
+     "undefined" !== typeof(Zr || (Zr = Qr.t(Wr, 2))) && (Zr || (Zr = Qr.t(Wr, 2)));
+     class jr extends ar.j {
+       constructor() {
+         super(...arguments), this._writerAcquired = !1, this._monotonicity = null, this.onwrite = null
+       }
+       _setMonotonicity(rr) {
+ ... (39 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L1077-L1079` → after: `L8191-L8238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R8191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L8191-L8238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L8191-L8238) · [Before (L1077-L1079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L1077-L1079)

```diff
-       } catch (fR) {
-         if (!yR) throw Error("Inline worker is not supported");
-         return new tR[JR](yR, GR)
+       }
+       _start() {}
+       _write(rr, Sr) {
+         this._ensureSize(Sr + rr.byteLength), this._bytes.set(rr, Sr), this._maxPos = Math.max(this._maxPos, Sr + rr.byteLength), this._dispatchWrite(Sr, Sr + rr.byteLength)
+       }
+       async _flush() {}
+       async _finalize() {
+         this.buffer = this._buffer.slice(0, this._maxPos), this._options.onFinalize && await this._options.onFinalize(this.buffer), this._emit("finalized")
+       }
+       async _close() {}
+       _getSlice(rr, Sr) {
+         return this._bytes.slice(rr, Sr)
+       }
+     }
+     class pr extends jr {
+       _start() {}
+ ... (32 more added lines; see GitHub link above)
```

#### 57. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L1083-L1084` → after: `L8242-L8246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R8242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L8242-L8246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L8242-L8246) · [Before (L1083-L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L1083-L1084)

```diff
-   53515: (RR, JR, GR) => {
-     RR.exports = GR.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
+   41521: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       e: () => Zr
+     });
+     const Zr = "Mediabunny v1.61.3"
```

#### 58. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L1086-L1087` → after: `L8248-L8304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R8248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L8248-L8304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/237.js#L8248-L8304) · [Before (L1086-L1087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/237.js#L1086-L1087)

```diff
-   53520: (RR, JR, GR) => {
-     RR.exports = GR.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
+   41531: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       d: () => Wr
+     });
+     var Zr = Qr(41474);
+     class Wr {
+       constructor(rr, Sr) {
+         if (this.finalized = !1, this.started = !1, this.pos = 0, this.trackedWrites = null, this.trackedStart = -1, this.trackedEnd = -1, rr._writerAcquired) throw new Error("Can't have multiple Writers for the same Target.");
+         this.target = rr, rr._setMonotonicity(Sr), rr._writerAcquired = !0
+       }
+       start() {
+         (0, Zr.I)(!this.started), this.target._start(), this.started = !0
+       }
+       write(rr) {
+         (0, Zr.I)(this.started && !this.finalized), this.maybeTrackWrites(rr), this.target._write(rr, this.pos), this.pos += rr.byteLength
+       }
+ ... (41 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/238.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/238.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf)

#### 1. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/238.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/238.js#L4)

```diff
-   53522: (RR, JR, GR) => {
+   54056: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/238.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/238.js#L6)

```diff
-       default: () => uR
+       loadGlbAsset: () => OS,
+       loadGlbTree: () => vS
```

#### 3. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L8` → after: `L9-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L9-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/238.js#L9-L21) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/238.js#L8)

```diff
-     var yR = GR(37156),
+     var Zr = Qr(39405),
+       Wr = Qr(139),
+       ar = Qr(1264);
+ 
+     function jr(rr) {
+       return (0, Wr.isDiscordClient)() ? `https://${ar.c.discordDomain}/${rr.href}` : rr.href
+     }
+     const Ir = {
+       scriptUrl: jr(new Qr.U(Qr(54064))),
+       wasmBinaryUrl: jr(new Qr.U(Qr(54071)))
+     };
+     var fr = Qr(2398),
+       Er = Qr(37500),
```

#### 4. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L12` → after: `L25-L1031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L25-L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/238.js#L25-L1031) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/238.js#L12)

```diff
-       return tR()('/*! For license information please see 4udp6d.procGen.worker.c4f3c34c.worker.js.LICENSE.txt */\n(()=>{var RR={65:RR=>{const JR="object"===typeof performance&&performance&&"function"===typeof performance.now?performance:Date,GR=()=>JR.now(),yR=RR=>RR===1/0||(RR= … [truncated]
+       return pr()('(()=>{class rr extends Error{}function Sr(Sr,Qr){const Zr=Sr._malloc(Qr);if(0===Zr)throw new rr(`Draco: the decoder\'s heap refused ${Qr} bytes`);return Zr}function Qr(Qr,Zr,Wr,ar){let jr=null,Ir=null,fr=null;try{jr=new Qr.Decoder,Ir=new Qr.DecoderBuffer,Ir.Ini … [truncated]
+     }
+     var mr = Qr(109),
+       Nr = Qr(5116),
+       Ur = Qr(335);
+     const tr = 2;
+     const hr = 1e3;
+     let zr = null,
+       Yr = null;
+     const nr = [],
+       er = [];
+     let Kr = 0;
+     const yr = {
+       decodes: 0,
+       workersStarted: 0,
+       mostWorkers: 0
+ ... (991 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L15` → after: `L1059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR1059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/238.js#L1059) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/238.js#L15)

```diff
-   37156: RR => {
+   37500: rr => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/239.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/239.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f)

#### 1. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/239.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/239.js#L4)

```diff
-   53536: (RR, JR, GR) => {
+   54075: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/239.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/239.js#L8)

```diff
-     var yR = GR(37156),
+     var Zr = Qr(37500),
```

#### 3. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/239.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/239.js#L12)

```diff
-       return tR()('(()=>{var RR={10:(RR,JR,GR)=>{RR.exports=GR.p+"static/media/zstdDecodeWorker.b8f7df783d739c667f16.js"},18:(RR,JR,GR)=>{RR.exports=GR.p+"static/media/bloxd_wasm_bg.039608235c8f47710330.wasm"},20:(RR,JR,GR)=>{RR.exports=GR.p+"static/media/bloxd_wasm_textures_bg.c … [truncated]
+       return Wr()('/*! For license information please see fl4vv.procGen.worker.5acf22ba.worker.js.LICENSE.txt */\n(()=>{var rr={55:rr=>{const Sr="object"===typeof performance&&performance&&"function"===typeof performance.now?performance:Date,Qr=()=>Sr.now(),Zr=rr=>rr===1/0||(rr=> … [truncated]
```

#### 4. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L15` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/239.js#L15) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/239.js#L15)

```diff
-   37156: RR => {
+   37500: rr => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/240.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/240.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1)

#### 1. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L4-L8` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/240.js#L4-L6) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/240.js#L4-L8)

```diff
-   37640: (RR, JR, GR) => {
-     GR.d(JR, {
-       d: () => ZR,
-       g: () => tR,
-       j: () => uR
+   54082: (rr, Sr, Qr) => {
+     Qr.r(Sr), Qr.d(Sr, {
+       default: () => ar
```

#### 2. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L10-L255` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/240.js#L8-L9) · [Before (L10-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/240.js#L10-L255)

```diff
-     var yR = GR(1825);
-     class tR extends Error {
-       constructor(RR) {
-         super("The game server didn't answer in time"), this.leg = RR, this.name = "SeatRequestTimedOut"
-       }
-     }
-     const uR = new class {
-       constructor() {
-         this.count = 0, this.answers = 0, this.waiting = new Set
-       }
-       get answered() {
-         return this.answers
-       }
-       answer() {
-         this.answers++
-       }
- ... (230 more removed lines; see GitHub link above)
+     var Zr = Qr(37500),
+       Wr = Qr.n(Zr);
```

#### 3. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L258-L340` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/240.js#L12) · [Before (L258-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/240.js#L258-L340)

```diff
-       var RR, JR;
-       return gR ??= {
-         os: (0, tR.getOperatingSystem)(),
-         deviceMemory: navigator.deviceMemory,
-         ...(0, ZR.g)()
-       }, {
-         ...gR,
-         x32: null !== (RR = (0, KR.C)()) && void 0 !== RR ? RR : void 0,
-         lowRam: null !== (JR = (0, VR.e)()) && void 0 !== JR ? JR : void 0
-       }
-     }
- 
-     function xR() {
-       return pR(OR(), (0, qR.e)(), (0, iR.E)("wasm").length > 0, cR())
-     }
- 
- ... (67 more removed lines; see GitHub link above)
+       return Wr()('(()=>{var rr={12:(rr,Sr,Qr)=>{rr.exports=Qr.p+"static/media/zstdDecodeWorker.2d53c12fe4db8f8ead7f.js"},21:(rr,Sr,Qr)=>{rr.exports=Qr.p+"static/media/bloxd_wasm_bg.e6e79e6510291a686e28.wasm"},27:(rr,Sr,Qr)=>{rr.exports=Qr.p+"static/media/bloxd_wasm_textures_bg.c … [truncated]
```

#### 4. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L343-L604` → after: `L15-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L15-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/240.js#L15-L18) · [Before (L343-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/240.js#L343-L604)

```diff
-   37633: (RR, JR, GR) => {
-     GR.d(JR, {
-       A: () => lR,
-       D: () => wR,
-       e: () => pR,
-       k: () => CR,
-       o: () => KR,
-       p: () => XR,
-       s: () => UR,
-       v: () => BR
-     });
-     var yR = GR(37178),
-       tR = GR(37627);
-     const uR = 64 * yR.b,
-       ZR = 40 * yR.f,
-       qR = 36 * yR.f,
- ... (246 more removed lines; see GitHub link above)
+   37500: rr => {
+     rr.exports = function(rr, Sr, Qr, Zr) {
+       var Wr = self || window;
+       try {
```

#### 5. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L606` → after: `L20-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L20-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/240.js#L20-L29) · [Before (L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/240.js#L606)

```diff
-           return RR()
+           var ar;
+           try {
+             ar = new Wr.Blob([rr])
+           } catch (Er) {
+             (ar = new(Wr.BlobBuilder || Wr.WebKitBlobBuilder || Wr.MozBlobBuilder || Wr.MSBlobBuilder)).append(rr), ar = ar.getBlob()
+           }
+           var jr = Wr.URL || Wr.webkitURL,
+             Ir = jr.createObjectURL(ar),
+             fr = new Wr[Sr](Ir, Qr);
+           return jr.revokeObjectURL(Ir), fr
```

#### 6. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L608` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/240.js#L31) · [Before (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/240.js#L608)

```diff
-           return this.stop(), this.onError(GR), JR
+           return new Wr[Sr]("data:application/javascript,".concat(encodeURIComponent(rr)), Qr)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/241.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/241.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5)

#### 1. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L4-L10` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/241.js#L4-L8) · [Before (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/241.js#L4-L10)

```diff
-   37221: (RR, JR, GR) => {
-     GR.r(JR), GR.d(JR, {
-       ITEM_FILES_WITHOUT_SPRITE: () => qR,
-       ITEM_SPRITES: () => uR,
-       ITEM_SPRITES_WITHOUT_FILE: () => ZR,
-       ITEM_SPRITE_RUNS: () => tR,
-       MAX_SPRITE_ITEM_ID: () => yR
+   38018: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       b: () => jr,
+       c: () => Wr,
+       d: () => ar
```

#### 2. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L12-L16` → after: `L10-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L10-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/241.js#L10-L616) · [Before (L12-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/241.js#L12-L16)

```diff
-     const yR = 10113,
-       tR = "$######$################################################%=####################################################################################################################################################$########################################$#################### … [truncated]
-       uR = "unloaded|dirt|coarse_dirt|sand|clay|gravel|snow|log_maple|log_pine|log_plum|log_cedar|log_aspen|log_jungle|planks_maple|planks_aspen|planks_plum|planks_jungle|planks_pine|planks_cedar|stripped_maple_log|stripped_aspen_log|stripped_plum_log|stripped_jungle_log|stripped … [truncated]
-       ZR = "############################################################################################################################################4+##&###############%####$##3########################0######&#####&####$%###############<#####$#&###%##########'*######G%#####-$ … [truncated]
-       qR = "amethite_armour_2|astral_armour_2|beetroot_plant_stage0|beetroot_plant_stage1|beetroot_plant_stage2|berry_bush_stage0|book_page|camel_painting_option2|carrot_plant_stage0|carrot_plant_stage1|carrot_plant_stage2|crimson_trapdoor|cursemetal_armour_2|date_pudding_option2 … [truncated]
+     var Zr = Qr(1783);
+     class Wr extends Error {
+       constructor(rr) {
+         super("The game server didn't answer in time"), this.leg = rr, this.name = "SeatRequestTimedOut"
+       }
+     }
+     const ar = new class {
+       constructor() {
+         this.count = 0, this.answers = 0, this.waiting = new Set
+       }
+       get answered() {
+         return this.answers
+       }
+       answer() {
+         this.answers++
+       }
+ ... (591 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/242.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/242.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee)

#### 1. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L4-L857` → after: `L4-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L4-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/242.js#L4-L16) · [Before (L4-L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/242.js#L4-L857)

```diff
-   42509: (RR, JR, GR) => {
-     GR.d(JR, {
-       e: () => ZR,
-       h: () => uR
-     });
-     var yR = GR(2374),
-       tR = GR(1127);
- 
-     function uR(RR, JR) {
-       return null !== RR.gameSource && (0, yR.o)(JR, RR.gameSource)
-     }
- 
-     function ZR(RR, JR) {
-       if (null === RR.gameSource || "" === RR.gameSource || null === JR) return !0;
-       const GR = (0, tR.n)(JR) ? (0, tR.s)(JR) : null;
-       return null !== GR && uR(RR, GR)
- ... (838 more removed lines; see GitHub link above)
+   37580: (rr, Sr, Qr) => {
+     Qr.r(Sr), Qr.d(Sr, {
+       ITEM_FILES_WITHOUT_SPRITE: () => Ir,
+       ITEM_SPRITES: () => ar,
+       ITEM_SPRITES_WITHOUT_FILE: () => jr,
+       ITEM_SPRITE_RUNS: () => Wr,
+       MAX_SPRITE_ITEM_ID: () => Zr
+     });
+     const Zr = 10113,
+       Wr = "$######$################################################%=####################################################################################################################################################$########################################$#################### … [truncated]
+       ar = "unloaded|dirt|coarse_dirt|sand|clay|gravel|snow|log_maple|log_pine|log_plum|log_cedar|log_aspen|log_jungle|planks_maple|planks_aspen|planks_plum|planks_jungle|planks_pine|planks_cedar|stripped_maple_log|stripped_aspen_log|stripped_plum_log|stripped_jungle_log|stripped … [truncated]
+       jr = "############################################################################################################################################4+##&###############%####$##3########################0######&#####&####$%###############<#####$#&###%##########'*######G%#####-$ … [truncated]
+       Ir = "amethite_armour_2|astral_armour_2|beetroot_plant_stage0|beetroot_plant_stage1|beetroot_plant_stage2|berry_bush_stage0|book_page|camel_painting_option2|carrot_plant_stage0|carrot_plant_stage1|carrot_plant_stage2|crimson_trapdoor|cursemetal_armour_2|date_pudding_option2 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/243.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/243.js` (66 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9)

#### 1. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L4)

```diff
-   37357: (RR, JR, GR) => {
+   42831: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L6-L7)

```diff
-       e: () => qR,
-       h: () => ZR
+       d: () => jr,
+       g: () => ar
```

#### 3. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L9-L11` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L9-L10) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L9-L11)

```diff
-     var yR = GR(4563);
-     let tR = null,
-       uR = null;
+     var Zr = Qr(2325),
+       Wr = Qr(1127);
```

#### 4. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L13-L31` → after: `L12-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L12-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L12-L13) · [Before (L13-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L13-L31)

```diff
-     function ZR() {
-       return uR ??= GR.e(241).then((() => GR(37221))).then((RR => {
-         let {
-           ITEM_SPRITES: JR,
-           ITEM_SPRITES_WITHOUT_FILE: GR,
-           ITEM_FILES_WITHOUT_SPRITE: uR
-         } = RR;
-         tR = function(RR, JR, GR) {
-           const tR = new Set,
-             uR = (0, yR.u)(JR);
-           let ZR = 0;
-           for (const [yR, qR] of RR.entries()) yR === uR[ZR] ? ZR++ : tR.add(qR);
-           if ("" !== GR)
-             for (const qR of GR.split(yR.r)) tR.add(qR);
-           return tR
-         }(JR.split(yR.r), GR, uR)
- ... (3 more removed lines; see GitHub link above)
+     function ar(rr, Sr) {
+       return null !== rr.gameSource && (0, Zr.n)(Sr, rr.gameSource)
```

#### 5. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L34-L36` → after: `L16-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L16-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L16-L19) · [Before (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L34-L36)

```diff
-     function qR(RR) {
-       var JR, GR;
-       return null !== (JR = null === (GR = tR) || void 0 === GR ? void 0 : GR.has(RR)) && void 0 !== JR && JR
+     function jr(rr, Sr) {
+       if (null === rr.gameSource || "" === rr.gameSource || null === Sr) return !0;
+       const Qr = (0, Wr.l)(Sr) ? (0, Wr.q)(Sr) : null;
+       return null !== Qr && ar(rr, Qr)
```

#### 6. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L39` → after: `L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L22) · [Before (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L39)

```diff
-   37346: (RR, JR, GR) => {
+   42810: (rr, Sr, Qr) => {
```

#### 7. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L41-L44` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L24) · [Before (L41-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L41-L44)

```diff
-       e: () => VR,
-       f: () => iR,
-       g: () => qR,
-       j: () => fR
+       c: () => Ir
```

#### 8. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L46-L61` → after: `L26-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L26-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L26-L41) · [Before (L46-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L46-L61)

```diff
-     var yR = GR(2144);
-     let tR = null,
-       uR = 0;
-     const ZR = new Set;
- 
-     function qR() {
-       return tR
-     }
- 
-     function iR() {
-       return uR
-     }
- 
-     function fR(RR) {
-       tR = RR, uR++, (0, yR.e)();
-       for (const JR of ZR) JR()
+     var Zr = Qr(679),
+       Wr = Qr(42816),
+       ar = Qr(42694);
+     async function jr(rr) {
+       const Sr = await (0, Wr.i)({
+         Helmet: Qr(39465),
+         Chestplate: Qr(39470),
+         Gauntlets: Qr(39483),
+         Leggings: Qr(39477),
+         Boots: Qr(39479)
+       } [Zr.e[rr]]);
+       try {
+         return (0, ar.v)(Sr)
+       } finally {
+         Sr.close()
+       }
```

#### 9. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L63-L65` → after: `L43-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L43-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L43-L92) · [Before (L63-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L63-L65)

```diff
- 
-     function VR(RR) {
-       ZR.add(RR)
+     const Ir = new class {
+       constructor() {
+         let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jr,
+           Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wr.k;
+         this.decode = rr, this.register = Sr, this.decoded = new Map
+       }
+       warm() {
+         for (let rr = 0; rr < Zr.e.length; rr++) this.part(rr).catch((Sr => {
+           console.warn(`The grayscale armour ${Zr.e[rr]} image didn't decode ahead of use`, Sr)
+         }))
+       }
+       async load(rr, Sr) {
+         const {
+           width: Qr,
+           height: ar,
+           pixels: jr
+ ... (34 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L68` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L95) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L68)

```diff
-   37353: (RR, JR, GR) => {
+   42805: (rr, Sr, Qr) => {
```

#### 11. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L70-L71` → after: `L97-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L97-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L97-L101) · [Before (L70-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L70-L71)

```diff
-       d: () => ZR,
-       e: () => qR
+       e: () => jr,
+       g: () => hr,
+       i: () => pr,
+       l: () => xr,
+       o: () => tr
```

#### 12. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L73-L75` → after: `L103-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L103-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L103-L127) · [Before (L73-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L73-L75)

```diff
-     var yR = GR(37357);
-     let tR = null,
-       uR = null;
+     var Zr = Qr(42684),
+       Wr = Qr(42810),
+       ar = Qr(42816);
+     const jr = 396,
+       Ir = 1,
+       fr = 2,
+       Er = 3,
+       pr = {
+         Glb: 1,
+         LifeformAtlas: 2,
+         ArmourAtlas: 3,
+         Cape: 4,
+         GroupAtlas: 5,
+         Particle: 6,
+         AttachmentImage: 7,
+         BlockImage: 8,
+ ... (9 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L77-L80` → after: `L129-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L129-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L129-L145) · [Before (L77-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L77-L80)

```diff
-     function ZR() {
-       return tR ??= GR.e(74).then((() => GR(42743))).catch((RR => {
-         throw tR = null, RR
-       })), tR
+     function tr(rr) {
+       const Sr = (0, Zr.o)();
+       Sr.catch((() => {}));
+       let Wr = null;
+       return {
+         glbUrl: rr,
+         lifeformAtlasUrl: async rr => (await Sr).lifeformAtlasUrl(rr),
+         armourAtlasUrl: async () => (await Qr.e(235).then((() => Qr(35587)))).armourAtlasUrl,
+         capeUrl: async rr => (await Sr).capeUrl(rr),
+         attachmentImageUrl: async rr => (await Sr).attachmentImageUrl(rr),
+         blockImageUrl: async rr => (await Sr).blockImageUrl(rr),
+         groupAtlasUrl: async rr => (await Sr).groupAtlasUrl(rr),
+         particleTextureUrl: async rr => (await Sr).particleTextureUrl(rr),
+         particleItemUrl: async rr => (Wr ??= Qr.e(45).then((() => Qr(55213))).catch((rr => {
+           throw Wr = null, rr
+         })), (await Wr).particleItemUrl(rr))
+ ... (1 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L82-L85` → after: `L147-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L147-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L147-L297) · [Before (L82-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L82-L85)

```diff
- 
-     function qR() {
-       return uR ??= Promise.all([ZR(), (0, yR.h)()]).then((RR => {
-         let [JR] = RR;
+     class hr {
+       constructor(rr, Sr) {
+         var Qr, jr, Ir, fr;
+         let Er = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+         this.sources = rr, this.onFailure = Sr, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.grey … [truncated]
+       }
+       get waiting() {
+         return this.ready.length
+       }
+       get inFlight() {
+         return this.loading.size
+       }
+       glbWritten(rr, Sr) {
+         this.glbWrittenImages.set(rr, Br(Sr))
+       }
+       glbTaken(rr, Sr) {
+ ... (135 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L87-L89` → after: `L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L299) · [Before (L87-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L87-L89)

```diff
-       }), (RR => {
-         throw uR = null, RR
-       })), uR
+       }
```

#### 16. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L129` → after: `L303-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L303-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L303-L308) · [Before (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L129)

```diff
-       return "object" !== typeof RR || null === RR || Array.isArray(RR) ? void 0 : RR
+       let {
+         kind: Sr,
+         index: Qr,
+         word: Zr
+       } = rr;
+       return `${Sr}:${Qr}:${Zr}`
```

#### 17. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L134` → after: `L312-L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L312-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L312-L322) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L134)

```diff
-       return "string" === typeof RR ? (0, iR.m)(RR, JR) : JR
+       if (null === rr) throw new ar.e("fetch", `no URL for image ${zr(Sr)}`, {
+         cause: null
+       });
+       return rr
+     }
+ 
+     function nr(rr, Sr, Qr) {
+       var Zr, Wr, ar;
+       const jr = new Uint8Array(16),
+         Ir = new DataView(jr.buffer);
+       return Ir.setUint8(0, rr.kind), Ir.setUint8(1, rr.index), Ir.setUint8(2, Sr), Ir.setUint32(4, rr.word, !0), Ir.setUint32(8, null !== (Zr = null === Qr || void 0 === Qr ? void 0 : Qr.id) && void 0 !== Zr ? Zr : 0, !0), Ir.setUint16(12, Math.min(null !== (Wr = null === Qr ||  … [truncated]
```

#### 18. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L138` → after: `L329-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L329-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L329-L349) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L138)

```diff
-       return UR(RR.width, VR)
+       var Sr;
+       const Qr = new DataView(rr.buffer, rr.byteOffset, rr.byteLength);
+       if (rr.byteLength < 20 || Qr.getUint32(0, !0) !== er || Qr.getUint32(16, !0) !== Kr) return [];
+       let Zr, Wr = 20 + Qr.getUint32(12, !0);
+       try {
+         Zr = JSON.parse((new TextDecoder).decode(rr.subarray(20, Wr)))
+       } catch {
+         return []
+       }
+       for (; Wr + 8 <= rr.byteLength && Qr.getUint32(Wr + 4, !0) !== yr;) Wr += 8 + Qr.getUint32(Wr, !0);
+       const ar = null !== (Sr = Zr.images) && void 0 !== Sr ? Sr : [];
+       if (0 === ar.length || Wr + 8 > rr.byteLength) return ar.map((() => null));
+       const jr = rr.subarray(Wr + 8, Math.min(rr.byteLength, Wr + 8 + Qr.getUint32(Wr, !0)));
+       return ar.map((rr => {
+         var Sr, Qr, Wr;
+         const ar = void 0 === rr.bufferView || null === (Sr = Zr.bufferViews) || void 0 === Sr ? void 0 : Sr[rr.bufferView];
+ ... (5 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L142-L144` → after: `L420-L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L420-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L420-L436) · [Before (L142-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L142-L144)

```diff
-       var GR;
-       const yR = null !== (GR = RR.applyTo) && void 0 !== GR ? GR : "both";
-       return "both" === yR || yR === JR
+       return {
+         ...rr,
+         armourAtlasUrl: () => {
+           var Qr, Zr;
+           return null !== (Qr = null === (Zr = Sr()) || void 0 === Zr ? void 0 : Zr.armourAtlasUrl()) && void 0 !== Qr ? Qr : rr.armourAtlasUrl()
+         },
+         lifeformAtlasUrl: Qr => fr(Sr(), (rr => rr.LIFEFORM_ATLAS_PATHS[Qr]), (() => rr.lifeformAtlasUrl(Qr))),
+         groupAtlasUrl: Qr => fr(Sr(), (rr => rr.GROUP_ATLAS_PATHS[Qr]), (() => rr.groupAtlasUrl(Qr))),
+         particleItemUrl: Zr => Er(Sr(), (async () => {
+           const rr = await Qr.e(45).then((() => Qr(55213))).catch((() => null));
+           return (null === rr || void 0 === rr ? void 0 : rr.particleItemSprite(Zr)) || null
+         }), (() => rr.particleItemUrl(Zr))),
+         blockImageUrl: Qr => Er(Sr(), (async () => {
+           var rr, Sr;
+           return null !== (rr = null === (Sr = await Ir()) || void 0 === Sr ? void 0 : Sr.blockImageName(Qr)) && void 0 !== rr ? rr : null
+         }), (() => rr.blockImageUrl(Qr)))
+ ... (1 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L147-L149` → after: `L439-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L439-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L439-L440) · [Before (L147-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L147-L149)

```diff
-     function CR(RR) {
-       const JR = WR(RR);
-       return "glow" === RR.style ? JR * KR : Math.ceil(JR / 2) + 1
+     function Ir() {
+       return (0, Wr.o)().catch((() => null))
```

#### 21. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L153-L214` → after: `L444-L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L444-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L444-L456) · [Before (L153-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L153-L214)

```diff
-       var yR, ZR;
-       const VR = null !== (yR = LR(RR.info)) && void 0 !== yR ? yR : {},
-         XR = "string" === typeof RR.name ? RR.name : "",
-         MR = VR.subtitle;
-       if (Array.isArray(VR.content) && 0 === VR.content.length && !(Array.isArray(MR) && MR.length > 0)) return null;
-       const BR = "number" === typeof RR.hideNameSeed ? RR.hideNameSeed : null,
-         lR = "" === XR || !0 === RR.mesh ? XR : (0, tR.e)(XR, !GR.canSeeRealPlayerNames, BR);
-       if (!lR && !VR.content) return null;
-       const pR = "string" === typeof RR.colour ? RR.colour : "default",
-         gR = Object.hasOwn(uR.v, pR) ? uR.v[pR] : void 0,
-         bR = VR.content ? (0, iR.h)(VR.content, iR.c.DEFAULT_FONT_SIZE, GR, gR) : [{
-           kind: "text",
-           text: lR,
-           size: iR.c.DEFAULT_FONT_SIZE,
-           colour: gR
-         }],
- ... (46 more removed lines; see GitHub link above)
+       return Er(rr, (async () => {
+         var rr;
+         const Qr = await Ir(),
+           Zr = null === Qr ? null : Sr(Qr),
+           Wr = null !== (rr = null === Zr || void 0 === Zr ? void 0 : Zr.slice(Zr.lastIndexOf("/") + 1)) && void 0 !== rr ? rr : null;
+         return "Player_Atlas" === Wr ? null : Wr
+       }), Qr)
+     }
+     async function Er(rr, Sr, Qr) {
+       if (null !== rr) {
+         const Qr = await Sr(),
+           Zr = null === Qr ? null : rr.textureUrl(Qr);
+         if (null !== Zr) return Zr
```

#### 22. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L216-L290` → after: `L458-L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L458-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L458-L471) · [Before (L216-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L216-L290)

```diff
-       const TR = mR.height + zR.height + kR + QR,
-         sR = mR.width + iR.c.HORIZONTAL_PADDING,
-         hR = zR.width + iR.c.HORIZONTAL_PADDING,
-         RJ = Math.max(sR, hR),
-         JJ = (FR - RJ) / 2,
-         GJ = Math.max(SR.height, jR);
-       return {
-         width: FR,
-         height: TR,
-         draw: RR => {
-           const JR = [];
-           if (RR.fillStyle = DR, RR.fillRect(JJ, GJ, RJ, mR.height), (0, iR.l)(vR, (FR - sR) / 2 + iR.c.HORIZONTAL_PADDING / 2, GJ, mR.height, RR, GR, JR), NR) {
-             const yR = GJ + mR.height;
-             RR.fillStyle = HR, RR.fillRect(JJ, yR, RJ, zR.height), (0, iR.l)(NR, (FR - hR) / 2 + iR.c.HORIZONTAL_PADDING / 2, yR, zR.height, RR, GR, JR)
-           }
-           let yR = null;
- ... (59 more removed lines; see GitHub link above)
+       return Qr()
+     }
+     const pr = 0;
+ 
+     function xr(rr) {
+       const Sr = [Zr.i.ArmourAtlas, Zr.i.LifeformAtlas, Zr.i.GroupAtlas, Zr.i.BlockImage, Zr.i.Particle];
+       rr.reload(Sr, (rr => {
+         switch (rr.kind) {
+           case Zr.i.Particle:
+             return rr.index === Zr.l.Item;
+           case Zr.i.LifeformAtlas:
+             return rr.word !== pr;
+           default:
+             return !0
```

#### 23. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L292` → after: `L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L473) · [Before (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L292)

```diff
-       }
+       }))
```

#### 24. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L295` → after: `L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L476) · [Before (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L295)

```diff
-   37266: (RR, JR, GR) => {
+   42746: (rr, Sr, Qr) => {
```

#### 25. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L298` → after: `L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L479) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L298)

```diff
-       g: () => UR,
+       f: () => Ir,
```

#### 26. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L300-L304` → after: `L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L481) · [Before (L300-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L300-L304)

```diff
-       j: () => CR,
-       k: () => AR,
-       l: () => WR,
-       m: () => fR,
-       p: () => KR
+       i: () => ar
```

#### 27. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L306-L321` → after: `L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L483) · [Before (L306-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L306-L321)

```diff
-     var yR = GR(656),
-       tR = GR(359);
-     const uR = {
-         DEFAULT_FONT_SIZE: 47,
-         DEFAULT_SUBTITLE_FONT_SIZE: 30,
-         HORIZONTAL_PADDING: 30,
-         VERTICAL_PADDING: 22,
-         TEXT_SHADOW_WIDTH: 2,
-         LINE_SPACING: 8,
-         EFFECT_ICON_SIZE: 70
-       },
-       ZR = 41;
- 
-     function qR(RR) {
-       return `bolder ${RR}px 'Jetbrains Mono'`
-     }
+     const Zr = 1e3;
```

#### 28. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L323-L324` → after: `L485-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L485-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L485-L488) · [Before (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L323-L324)

```diff
-     function iR(RR) {
-       return "object" === typeof RR && null !== RR
+     function Wr() {
+       fr((() => {
+         window.location.reload()
+       }))
```

#### 29. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L327-L329` → after: `L491-L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L491-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L491-L492) · [Before (L327-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L327-L329)

```diff
-     function fR(RR, JR) {
-       const GR = "number" === typeof RR ? RR : "string" === typeof RR ? Number(RR.replace("px", "")) : NaN;
-       return Number.isFinite(GR) && GR > 0 ? GR : JR
+     function ar() {
+       return new Promise((() => {}))
```

#### 30. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L333` → after: `L496-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L496-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L496-L498) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L333)

```diff
-       return iR(RR) ? RR : void 0
+       fr((() => {
+         window.location.replace(rr(window.location.href))
+       }))
```

#### 31. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L337-L338` → after: `L502-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L502-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L502-L509) · [Before (L337-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L337-L338)

```diff
-       const JR = "number" === typeof RR ? yR.z[RR] : RR;
-       return "string" === typeof JR && Object.hasOwn(yR.n, JR) ? yR.n[JR] : void 0
+       Promise.resolve().then((() => Qr(120))).then((Sr => {
+         let {
+           currentUrl: Qr
+         } = Sr;
+         jr((() => Qr.mergeSearchParamsInto(rr)))
+       }), (() => {
+         jr((() => rr))
+       }))
```

#### 32. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L341-L342` → after: `L512-L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L512-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L512-L525) · [Before (L341-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L341-L342)

```diff
-     function wR(RR, JR) {
-       return "string" === typeof RR ? RR : iR(RR) ? "string" === typeof RR.translationKey ? JR.translate(RR.translationKey, RR.params).map((RR => "string" === typeof RR ? RR : RR.icon)).join("") : "string" === typeof RR.entityName ? JR.shownPlayerName(RR.entityName) : "" : void 0 … [truncated]
+     function fr(rr) {
+       null !== window.onbeforeunload ? Promise.resolve().then((() => Qr(1885))).then((Sr => {
+         let {
+           prepareForUnloadWithoutConfirmation: Qr
+         } = Sr;
+         try {
+           Qr()
+         } catch (Zr) {
+           console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", Zr), window.onbeforeunload = null
+         }
+         rr()
+       }), (() => {
+         window.onbeforeunload = null, rr()
+       })) : rr()
```

#### 33. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L345-L400` → after: `L547-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L547-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L547-L551) · [Before (L345-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L345-L400)

```diff
-     function rR(RR, JR, GR, yR) {
-       if (!Array.isArray(RR)) return [];
-       const ZR = [];
-       for (const eR of RR) {
-         var qR, KR;
-         if (iR(eR) && "chatTag" in eR) {
-           ZR.push({
-             kind: "rank",
-             rank: eR
-           });
-           continue
-         }
-         if (iR(eR) && "icon" in eR && !("mainRGB" in eR)) {
-           var rR;
-           ZR.push({
-             kind: "icon",
- ... (40 more removed lines; see GitHub link above)
+     function pr() {
+       0 === ar && (jr = !1, Ir = !1), ar++;
+       let rr = !1;
+       return () => {
+         rr || (rr = !0, ar--)
```

#### 34. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L406` → after: `L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L556) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L406)

```diff
-       return void 0 !== RR && "rank" !== RR.kind
+       rr && (Ir = !0)
```

#### 35. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L409-L412` → after: `L559-L560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L559-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L559-L560) · [Before (L409-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L409-L412)

```diff
-     function aR(RR, JR) {
-       const GR = eR(RR),
-         yR = eR(JR);
-       return void 0 === RR && !yR || !GR && void 0 === JR ? 0 : GR !== yR ? .5 * uR.HORIZONTAL_PADDING : 0
+     function mr() {
+       return Ir
```

#### 36. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L416` → after: `L564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L564) · [Before (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L416)

```diff
-       return "rank" === RR.kind ? uR.DEFAULT_FONT_SIZE : RR.size
+       jr = rr
```

#### 37. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L419-L423` → after: `L567-L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L567-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L567-L568) · [Before (L419-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L419-L423)

```diff
-     function nR(RR, JR, GR) {
-       return "icon" === RR.kind ? RR.size : "rank" === RR.kind ? function(RR, JR) {
-         const GR = JR.rankIcon(RR.rank.icon);
-         return GR ? ZR * (GR.width / GR.height) : ZR
-       }(RR, GR) + uR.HORIZONTAL_PADDING : (GR.glyphsShown(RR.text), JR.font = qR(RR.size), JR.measureText(RR.text).width)
+     function Ur() {
+       return ar > 0
```

#### 38. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L426-L447` → after: `L571-L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L571-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L571-L572) · [Before (L426-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L426-L447)

```diff
-     function UR(RR, JR, GR) {
-       if (0 === RR.length) return {
-         width: 0,
-         height: 0,
-         sizes: []
-       };
-       let yR = 0;
-       for (const uR of RR) yR = Math.max(yR, LR(uR));
-       const tR = [];
-       let ZR = aR(void 0, RR[0]);
-       for (let uR = 0; uR < RR.length; uR++) {
-         const yR = ZR;
-         ZR += nR(RR[uR], JR, GR), ZR += aR(RR[uR], RR[uR + 1]), tR.push({
-           x: yR,
-           width: ZR - yR
-         })
- ... (6 more removed lines; see GitHub link above)
+     function tr(rr) {
+       return !(ar > 0 && (jr || rr - fr < 1e3 / Zr - Wr)) && (fr = rr, !0)
```

#### 39. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L450-L454` → after: `L575-L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L575-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L575-L577) · [Before (L450-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L450-L454)

```diff
-     function WR(RR, JR, GR, yR, tR, uR, ZR) {
-       JR += aR(void 0, RR[0]);
-       for (let qR = 0; qR < RR.length; qR++) {
-         const iR = AR(RR[qR], JR, GR, yR, tR, uR, ZR);
-         JR += 0 === iR ? 0 : iR + aR(RR[qR], RR[qR + 1])
+     function hr(rr) {
+       return Er.push(rr), () => {
+         Er = Er.filter((Sr => Sr !== rr))
```

#### 40. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L458-L488` → after: `L581-L588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L581-L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L581-L588) · [Before (L458-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L458-L488)

```diff
-     function AR(RR, JR, GR, yR, tR, iR, fR, VR) {
-       var KR;
-       if ("icon" === RR.kind) {
-         const yR = iR.iconImage(RR.icon);
-         return yR && fR.push({
-           image: yR,
-           x: JR,
-           y: GR + uR.VERTICAL_PADDING / 2,
-           size: RR.size
-         }), RR.size
-       }
-       if ("rank" === RR.kind) {
-         const qR = null !== VR && void 0 !== VR ? VR : nR(RR, tR, iR);
-         return function(RR, JR, GR, yR, tR, qR, iR) {
-           var fR, VR;
-           const {
- ... (15 more removed lines; see GitHub link above)
+     function zr() {
+       if (0 === Er.length) return;
+       const rr = Er;
+       Er = [];
+       for (const Qr of rr) try {
+         Qr()
+       } catch (Sr) {
+         console.warn("[bloxd-previews] an after-draw callback threw", Sr)
```

#### 41. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L517` → after: `L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L592) · [Before (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L517)

```diff
-   37341: (RR, JR, GR) => {
+   42753: (rr, Sr, Qr) => {
```

#### 42. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L519-L524` → after: `L594-L596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L594-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L594-L596) · [Before (L519-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L519-L524)

```diff
-       e: () => QR,
-       f: () => JJ,
-       h: () => jR,
-       i: () => ER,
-       l: () => YR,
-       m: () => kR,
+       d: () => yr,
+       g: () => mr,
+       k: () => nr,
```

#### 43. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L527` → after: `L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L599) · [Before (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L527)

```diff
-       r: () => zR
+       s: () => Br
```

#### 44. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L529-L604` → after: `L601-L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L601-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L601-L609) · [Before (L529-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L529-L604)

```diff
-     var yR = GR(5281),
-       tR = GR(5303),
-       uR = GR(35162),
-       ZR = GR(4555),
-       qR = GR(4546),
-       iR = GR(1485),
-       fR = GR(37256),
-       VR = GR(103),
-       KR = GR(1351),
-       wR = GR(37278),
-       rR = GR(37346),
-       eR = GR(37353),
-       aR = GR(9468),
-       LR = GR(8872),
-       nR = GR(9056),
-       UR = GR(9180),
- ... (60 more removed lines; see GitHub link above)
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

#### 45. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L607` → after: `L612-L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L612-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L612-L621) · [Before (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L607)

```diff
-       return IR
+       var rr;
+       const Sr = (0, jr.J)(),
+         Qr = function(rr, Sr) {
+           return {
+             sampleCount: rr.antiAliasing ? 4 : 1,
+             n: (0, jr.y)(rr.pixelScale, Sr),
+             pixelated: (0, jr.v)(rr.pixelSmoothing)
+           }
+         }(Wr.c.get("clientEscMenuOptions"), Sr);
+       return Qr.sampleCount > 1 && (0, fr.c)() && (Qr.sampleCount = 1), Qr.n = null !== (rr = (0, fr.n)()) && void 0 !== rr ? rr : Qr.n, Zr.i.includes((0, pr.getSoftwareRenderer)()) && (Qr.sampleCount = 1, Qr.n = Math.max(Qr.n, (0, jr.y)(xr.l.pixelScale, Sr))), Qr
```

#### 46. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L611-L614` → after: `L628-L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L628-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L628-L629) · [Before (L611-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L611-L614)

```diff
-     function jR(RR) {
-       return SR.add(RR), () => {
-         SR.delete(RR)
-       }
+     function zr() {
+       for (const rr of tr) rr()
```

#### 47. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L618-L647` → after: `L633-L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L633-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L633-L635) · [Before (L618-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L618-L647)

```diff
-       IR++, !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? mR = "all" : "none" === mR && (mR = "notBoards");
-       for (const RR of SR) RR()
-     }(0, wR.m)((() => {
-       dR(!1)
-     })), (0, iR.t)((() => {
-       (function() {
-         const RR = BR;
-         return BR = !1, RR
-       })() && dR(!1)
-     }));
-     const ER = new class {
-       constructor(RR) {
-         this.loaded = RR, this.latin = null, this.rest = null, this.restWanted = !1
-       }
-       load() {
-         if (null === this.latin) {
- ... (14 more removed lines; see GitHub link above)
+       if (null === Nr) {
+         const rr = document.createElement("div");
+         rr.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", rr.setAttribute("aria-hidden", "true"), document.body.append(rr), Ur = rr, Nr = new jr.d(rr, zr)
```

#### 48. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L649-L661` → after: `L637-L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L637-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L637-L638) · [Before (L649-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L649-L661)

```diff
-       loadRest() {
-         var RR;
-         this.restWanted || (this.restWanted = !0, null === (RR = this.rest) || void 0 === RR || RR.load())
-       }
-       async untilLoadedFor(RR) {
-         await this.load(), this.loadFor(RR), await document.fonts.load(`16px '${gR}'`, RR).catch((JR => {
-           console.warn("[bloxd-wasm-client] the text font did not load for", RR, JR)
-         }))
-       }
-       loadFor(RR) {
-         !this.restWanted && NR.test(RR) && this.loadRest()
-       }
-     }(dR);
+       return Nr
+     }
```

#### 49. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L664` → after: `L641-L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L641-L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L641-L643) · [Before (L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L664)

```diff
-       Object.assign(cR, RR), cR.loadsFontRest && ER.loadRest(), dR(!1)
+       const Sr = (0, jr.m)(),
+         [Qr, Zr] = Yr().size(Sr);
+       return (0, jr.i)(Qr, Zr, Sr, rr.n)
```

#### 50. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L668` → after: `L647-L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L647-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L647-L652) · [Before (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L668)

```diff
-       RR !== PR && (PR = RR, dR())
+       var Sr, Qr, Zr, Wr;
+       const ar = (0, jr.m)(),
+         [fr, Er] = Yr().size(ar);
+       if (fr <= 0 || Er <= 0) return null;
+       const pr = (0, jr.i)(fr, Er, ar, mr().n);
+       return (0, jr.g)(rr, pr), rr.style.left = `${null!==(Sr=null===(Qr=hr)||void 0===Qr?void 0:Qr.rect.left)&&void 0!==Sr?Sr:0}px`, rr.style.top = `${null!==(Zr=null===(Wr=hr)||void 0===Wr?void 0:Wr.rect.top)&&void 0!==Zr?Zr:0}px`, (0, Ir.cb)(rr.style, hr), pr
```

#### 51. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L672-L673` → after: `L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L656) · [Before (L672-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L672-L673)

```diff
-       if ("none" === mR || null === RR) return;
-       RR(HR, "all" === mR ? 0 : oR, new Uint8Array(0)) && (mR = "none")
+       hr = rr, Yr(), (0, Ir.X)(Ur.style, rr, ""), zr()
```

#### 52. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L719-L720` → after: `L659-L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L659-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L659-L660) · [Before (L719-L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L719-L720)

```diff
-     function JJ() {
-       (0, eR.e)().catch((() => {}))
+     function yr(rr, Sr) {
+       rr.style.imageRendering = (0, jr.K)(Sr.pixelated)
```

#### 53. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L723-L779` → after: `L663-L670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L663-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L663-L670) · [Before (L723-L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L723-L779)

```diff
-     function GJ(RR) {
-       return hR.has(RR) ? sR(`icon:${RR}`, (async () => {
-         var JR, GR;
-         return null !== (JR = null === (GR = (0, rR.g)()) || void 0 === GR ? void 0 : GR.textureUrl(RR)) && void 0 !== JR ? JR : (await (0, eR.d)()).ingameIconUrl(RR)
-       })) : null
-     }
-     let yJ = "unasked";
-     const tJ = {
-       get canSeeRealPlayerNames() {
-         return VR.featureFlags.canSeeRealPlayerNames
-       },
-       get canSeePlayerWrittenText() {
-         return VR.featureFlags.canSeePlayerWrittenText
-       },
-       get localPlayerDbId() {
-         return PR
- ... (41 more removed lines; see GitHub link above)
+     function Br(rr, Sr) {
+       const Qr = (0, ar.j)("appManagerUpdated|clientEscMenuOptions", (() => {
+           yr(rr, mr()), Sr()
+         })),
+         Zr = (0, fr.A)(Sr),
+         Wr = (0, Er.q)(Sr);
+       return Yr(), tr.add(Sr), () => {
+         Qr(), Zr(), Wr(), tr.delete(Sr)
```

#### 54. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L783` → after: `L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L674) · [Before (L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L783)

```diff
-   37247: (RR, JR, GR) => {
+   42827: (rr, Sr, Qr) => {
```

#### 55. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L785-L788` → after: `L676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L676) · [Before (L785-L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L785-L788)

```diff
-       b: () => LR,
-       f: () => mR,
-       h: () => vR,
-       i: () => NR
+       b: () => ar
```

#### 56. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L790-L857` → after: `L678-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L678-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L678-L684) · [Before (L790-L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L790-L857)

```diff
-     var yR = GR(37329),
-       tR = GR(37256),
-       uR = GR(37262),
-       ZR = GR(37266);
- 
-     function qR(RR, JR, GR) {
-       const yR = "object" === typeof RR && null !== RR ? RR : {},
-         tR = function(RR, JR, GR) {
-           if (!Array.isArray(RR) || 0 === RR.length) return [];
-           const yR = [{
-             width: 0,
-             height: 0,
-             y: 0,
-             items: []
-           }];
-           for (const qR of (0, ZR.h)(RR, ZR.c.DEFAULT_FONT_SIZE, GR)) {
- ... (52 more removed lines; see GitHub link above)
+     var Zr = Qr(42831),
+       Wr = Qr(42820);
+     const ar = new class {
+       constructor(rr) {
+         this.pack = rr, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, rr.onWanted((() => {
+           this.release()
+         }))
```

#### 57. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L859-L879` → after: `L686-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L686-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L686-L698) · [Before (L859-L879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L859-L879)

```diff
-       const VR = "string" === typeof yR.backgroundColor ? yR.backgroundColor : "#22283b";
-       return {
-         width: qR,
-         height: iR,
-         chars: fR,
-         draw: (RR, JR) => {
-           const yR = [];
-           if (RR.fillStyle = VR, RR.fillRect(0, 0, qR, iR), null === JR)
-             for (const uR of tR) uR.items.length > 0 && (0, ZR.l)(uR.items.map((RR => RR.content)), 0, uR.y, uR.height, RR, GR, yR);
-           else {
-             let uR = 0;
-             for (const qR of tR)
-               for (const tR of qR.items) {
-                 if (uR >= JR) break;
-                 const iR = "text" === tR.content.kind ? {
-                   ...tR.content,
- ... (5 more removed lines; see GitHub link above)
+       setGame(rr) {
+         if (void 0 === rr && null !== this.hold) return void(this.endedWhileHeld = !0);
+         this.hold = null, this.endedWhileHeld = !1;
+         const Sr = this.inGame();
+         if (this.game = rr, this.update(), this.inGame() !== Sr)
+           for (const Qr of this.gameListeners) Qr()
+       }
+       inGame() {
+         return void 0 !== this.game
+       }
+       onGameChange(rr) {
+         return this.gameListeners.add(rr), () => {
+           this.gameListeners.delete(rr)
```

#### 58. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L883-L918` → after: `L743-L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L743-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L743-L746) · [Before (L883-L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L883-L918)

```diff
-     var iR = GR(37272),
-       fR = GR(37325);
-     const VR = 256,
-       KR = 1024,
-       wR = {
-         width: 1,
-         height: 7 / 8
-       };
-     var rR = GR(37338);
-     const eR = {
-       leaderboard: ""
-     };
-     var aR = GR(37341);
-     const LR = {
-         Nametag: 1,
-         MultilineText: 2,
- ... (20 more removed lines; see GitHub link above)
+     async function fr(rr) {
+       let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Zr.K,
+         Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
+       return pr(await Er(rr, Sr), "string" === typeof rr ? rr : null, Qr)
```

#### 59. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L920-L950` → after: `L748-L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L748-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L748-L777) · [Before (L920-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L920-L950)

```diff
-     const OR = {
-         name: "Ag",
-         info: null,
-         colour: "default",
-         ranks: [],
-         effects: [],
-         health: .5,
-         xZ: null,
-         hideNameSeed: null
-       },
-       xR = [vR(LR.Nametag, OR), vR(LR.Nametag, {
-         ...OR,
-         info: {
-           content: [{
-             str: "Ag"
-           }],
- ... (15 more removed lines; see GitHub link above)
+     async function Er(rr, Sr) {
+       if ("string" !== typeof rr) return rr;
+       try {
+         return await Sr(rr)
+       } catch (Qr) {
+         throw new Ir("fetch", rr, {
+           cause: Qr
+         })
+       }
+     }
+     async function pr(rr, Sr, Qr) {
+       try {
+         const Sr = new Blob([rr.slice()], {
+           type: "image/png"
+         });
+         return await createImageBitmap(Sr, {
+ ... (14 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L953-L960` → after: `L780-L785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L780-L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L780-L785) · [Before (L953-L960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L953-L960)

```diff
-       aR.i.load().then((() => {
-         if (RR()) return;
-         const JR = (0, tR.e)(1, 1, {
-           willReadFrequently: !0
-         });
-         var GR;
-         JR && (GR = JR.canvas, xR.map((RR => mR(RR, GR))))
-       }))
+       var Sr;
+       if (xr = rr, null !== rr) {
+         null === (Sr = rr.BWr) || void 0 === Sr || Sr.call(rr, Yr);
+         for (const [Sr, Qr] of mr) hr(rr, Sr, Qr);
+         mr.clear()
+       }
```

#### 61. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L964-L965` → after: `L788-L789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L788-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L788-L789) · [Before (L964-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L964-L965)

```diff
-     function HR() {
-       lR.clear(), pR.clear()
+     function hr(rr, Sr, Qr) {
+       Ur.has(Sr) && void 0 !== rr.yWr ? rr.yWr(Sr, Qr) : rr.eWr(Sr, Qr)
```

#### 62. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L969-L970` → after: `L793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L793) · [Before (L969-L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L969-L970)

```diff
-       const GR = RR.get(JR);
-       return void 0 !== GR && (RR.delete(JR), RR.set(JR, GR)), GR
+       xr ? hr(xr, rr, Sr) : mr.set(rr, Sr)
```

#### 63. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L973-L974` → after: `L796-L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L796-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L796-L804) · [Before (L973-L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L973-L974)

```diff
-     function cR(RR, JR, GR) {
-       RR.set(JR, GR), RR.size > UR && RR.delete(RR.keys().next().value)
+     function Yr(rr) {
+       const Sr = Ur.get(rr);
+       void 0 === Sr || Sr.decoding || (Sr.decoding = !0, pr(Sr.bytes, Sr.url, Sr.orientation).then((Qr => {
+         Sr.decoding = !1, Ur.get(rr) === Sr ? (Sr.failures = 0, zr(rr, Qr)) : Qr.close()
+       }), (Qr => {
+         Sr.decoding = !1, Sr.failures++, 1 === Sr.failures && console.warn(`shellImages: decoding image ${rr} again failed; trying again until it decodes`, Qr), setTimeout((() => {
+           Yr(rr)
+         }), Math.min(ar * 2 ** (Sr.failures - 1), jr))
+       })))
```

#### 64. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L977-L1054` → after: `L807-L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L807-L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L807-L809) · [Before (L977-L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L977-L1054)

```diff
-     function PR(RR, JR, GR) {
-       if (RR === LR.Nametag) {
-         let RR = oR(lR, JR);
-         return void 0 === RR && (RR = (0, iR.e)(JSON.parse(JR), GR, MR), cR(lR, JR, RR)), RR
-       }
-       if (RR === LR.MultilineText) {
-         var tR;
-         const RR = JSON.parse(JR),
-           yR = JSON.stringify(null !== (tR = RR.box) && void 0 !== tR ? tR : null),
-           uR = "number" === typeof RR.shown ? RR.shown : null;
-         let ZR = oR(pR, yR);
-         void 0 === ZR && (ZR = qR(RR.box, GR, MR), cR(pR, yR, ZR));
-         const iR = null === uR ? null : Math.min(Math.max(0, Math.floor(uR)), ZR.chars),
-           fR = ZR;
-         return {
-           width: fR.width,
- ... (62 more removed lines; see GitHub link above)
+     function nr(rr) {
+       const Sr = Nr++;
+       return zr(Sr, rr), Sr
```

#### 65. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1056-L1059` → after: `L811-L813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L811-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L811-L813) · [Before (L1056-L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L1056-L1059)

```diff
-     const IR = 2 ** Math.floor(Math.log2(nR));
- 
-     function mR(RR, JR) {
-       let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+     async function er(rr) {
+       let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Zr.K,
+         Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none",
```

#### 66. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1061-L1103` → after: `L815-L832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L815-L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/243.js#L815-L832) · [Before (L1061-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/243.js#L1061-L1103)

```diff
-       try {
-         if (RR.length < 2) return [0, 0];
-         const uR = (0, tR.c)(JR);
-         if (!uR) return [0, 0];
-         const ZR = DR();
-         ZR !== BR && (BR = ZR, HR());
-         const [qR] = RR, iR = XR.decode(RR.subarray(1));
-         let fR;
-         qR !== LR.Board && qR !== LR.Leaderboard || !MR.canSeePlayerWrittenText || MR.glyphsShown(iR), uR.save();
-         try {
-           fR = PR(qR, iR, uR)
-         } finally {
-           uR.restore()
-         }
-         if (null === fR || !(fR.width > 0 && fR.height > 0)) return [0, 0];
-         const VR = Math.min(1, nR / fR.width, nR / fR.height),
- ... (27 more removed lines; see GitHub link above)
+       const jr = "string" === typeof rr ? rr : null,
+         Ir = await Er(rr, Sr),
+         fr = await pr(Ir, jr, Qr),
+         {
+           width: xr,
+           height: mr
+         } = fr,
+         tr = Nr++;
+       return ar && xr * mr * 4 >= Wr && Ur.set(tr, {
+         bytes: Ir.slice(),
+         url: jr,
+         orientation: Qr,
+         decoding: !1,
+         failures: 0
+       }), zr(tr, fr), {
+         id: tr,
+ ... (2 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/244.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/244.js` (59 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38)

#### 1. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4-L8` → after: `L4-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L4-L31) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L4-L8)

```diff
-   37256: (RR, JR, GR) => {
-     function yR(RR, JR, GR) {
-       if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(RR, JR).getContext("2d", GR);
-       const yR = document.createElement("canvas");
-       return yR.width = RR, yR.height = JR, yR.getContext("2d", GR)
+   37743: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       b: () => Ir,
+       e: () => jr
+     });
+     var Zr = Qr(4494);
+     let Wr = null,
+       ar = null;
+ 
+     function jr() {
+       return ar ??= Qr.e(242).then((() => Qr(37580))).then((rr => {
+         let {
+           ITEM_SPRITES: Sr,
+           ITEM_SPRITES_WITHOUT_FILE: Qr,
+           ITEM_FILES_WITHOUT_SPRITE: ar
+         } = rr;
+ ... (12 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L11-L12` → after: `L34-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L34-L36) · [Before (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L11-L12)

```diff
-     function tR(RR, JR) {
-       return RR.getContext("2d", JR)
+     function Ir(rr) {
+       var Sr, Qr;
+       return null !== (Sr = null === (Qr = Wr) || void 0 === Qr ? void 0 : Qr.has(rr)) && void 0 !== Sr && Sr
```

#### 3. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L19` → after: `L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L39) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L19)

```diff
-   42274: (RR, JR, GR) => {
+   37726: (rr, Sr, Qr) => {
```

#### 4. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L21` → after: `L41-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L41-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L41-L44) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L21)

```diff
-       b: () => qR
+       d: () => pr,
+       g: () => fr,
+       j: () => Ir,
+       k: () => Er
```

#### 5. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L23-L26` → after: `L46-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L46-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L46-L49) · [Before (L23-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L23-L26)

```diff
-     const yR = 1 << 20,
-       tR = 1 << 21,
-       uR = 1024,
-       ZR = 2048;
+     var Zr = Qr(2098);
+     let Wr = null,
+       ar = 0;
+     const jr = new Set;
```

#### 6. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L28-L32` → after: `L51-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L51-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L51-L65) · [Before (L28-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L28-L32)

```diff
-     function qR(RR, JR, GR) {
-       const qR = RR + yR,
-         iR = JR + uR,
-         fR = GR + yR;
-       return qR < 0 || qR >= tR || fR < 0 || fR >= tR || iR < 0 || iR >= ZR ? -1 : (qR * tR + fR) * ZR + iR
+     function Ir() {
+       return Wr
+     }
+ 
+     function fr() {
+       return ar
+     }
+ 
+     function Er(rr) {
+       Wr = rr, ar++, (0, Zr.b)();
+       for (const Sr of jr) Sr()
+     }
+ 
+     function pr(rr) {
+       jr.add(rr)
```

#### 7. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L35` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L68) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L35)

```diff
-   42265: (RR, JR, GR) => {
+   37734: (rr, Sr, Qr) => {
```

#### 8. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L37-L44` → after: `L70-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L70-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L70-L71) · [Before (L37-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L37-L44)

```diff
-       b: () => yR,
-       e: () => ZR,
-       g: () => tR,
-       h: () => uR,
-       k: () => VR,
-       m: () => fR,
-       p: () => iR,
-       r: () => qR
+       c: () => jr,
+       g: () => Ir
```

#### 9. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L46-L47` → after: `L73-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L73-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L73-L75) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L46-L47)

```diff
-     GR(4781);
-     GR(42274);
+     var Zr = Qr(37743);
+     let Wr = null,
+       ar = null;
```

#### 10. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L49` → after: `L77-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L77-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L77-L81) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L49)

```diff
-     function yR(RR) {}
+     function jr() {
+       return Wr ??= Qr.e(74).then((() => Qr(43057))).catch((rr => {
+         throw Wr = null, rr
+       })), Wr
+     }
```

#### 11. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L51` → after: `L83-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L83-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L83-L126) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L51)

```diff
-     function tR(RR) {}
+     function Ir() {
+       return ar ??= Promise.all([jr(), (0, Zr.e)()]).then((rr => {
+         let [Sr] = rr;
+         return Sr
+       }), (rr => {
+         throw ar = null, rr
+       })), ar
+     }
+   },
+   37635: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       c: () => yr
+     });
+     var Zr = Qr(5223),
+       Wr = Qr(1321),
+       ar = Qr(672),
+ ... (28 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L53` → after: `L128-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L128-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L128-L131) · [Before (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L53)

```diff
-     function uR(RR) {}
+     function hr(rr) {
+       return "object" !== typeof rr || null === rr || Array.isArray(rr) ? void 0 : rr
+     }
+     const zr = new Set(Zr.b);
```

#### 13. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L55` → after: `L133-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L133-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L133-L135) · [Before (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L55)

```diff
-     function ZR(RR) {}
+     function Yr(rr, Sr) {
+       return "string" === typeof rr ? (0, fr.u)(rr, Sr) : Sr
+     }
```

#### 14. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L57` → after: `L137-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L137-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L137-L139) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L57)

```diff
-     function qR(RR) {}
+     function nr(rr) {
+       return Yr(rr.width, pr)
+     }
```

#### 15. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L59` → after: `L141-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L141-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L141-L145) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L59)

```diff
-     function iR(RR, JR, GR) {}
+     function er(rr, Sr) {
+       var Qr;
+       const Zr = null !== (Qr = rr.applyTo) && void 0 !== Qr ? Qr : "both";
+       return "both" === Zr || Zr === Sr
+     }
```

#### 16. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L61` → after: `L147-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L147-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L147-L150) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L61)

```diff
-     function fR(RR) {}
+     function Kr(rr) {
+       const Sr = nr(rr);
+       return "glow" === rr.style ? Sr * xr : Math.ceil(Sr / 2) + 1
+     }
```

#### 17. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L63` → after: `L152-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L152-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L152-L293) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L63)

```diff
-     function VR(RR) {}
+     function yr(rr, Sr, Qr) {
+       var Zr, jr;
+       const pr = null !== (Zr = hr(rr.info)) && void 0 !== Zr ? Zr : {},
+         yr = "string" === typeof rr.name ? rr.name : "",
+         Br = pr.subtitle;
+       if (Array.isArray(pr.content) && 0 === pr.content.length && !(Array.isArray(Br) && Br.length > 0)) return null;
+       const Tr = "number" === typeof rr.hideNameSeed ? rr.hideNameSeed : null,
+         vr = "" === yr || !0 === rr.mesh ? yr : (0, Wr.e)(yr, !Qr.canSeeRealPlayerNames, Tr);
+       if (!vr && !pr.content) return null;
+       const Or = "string" === typeof rr.colour ? rr.colour : "default",
+         Lr = Object.hasOwn(ar.r, Or) ? ar.r[Or] : void 0,
+         lr = pr.content ? (0, fr.i)(pr.content, fr.d.DEFAULT_FONT_SIZE, Qr, Lr) : [{
+           kind: "text",
+           text: vr,
+           size: fr.d.DEFAULT_FONT_SIZE,
+           colour: Lr
+ ... (126 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L65` → after: `L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L295) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L65)

```diff
-   42310: (RR, JR, GR) => {
+   37630: (rr, Sr, Qr) => {
```

#### 19. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L67-L69` → after: `L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L297) · [Before (L67-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L67-L69)

```diff
-       b: () => WR,
-       e: () => eR,
-       f: () => kR,
+       d: () => ar,
```

#### 20. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L71-L73` → after: `L299-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L299-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L299-L300) · [Before (L71-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L71-L73)

```diff
-       j: () => dR,
-       n: () => OR,
-       p: () => xR,
+       i: () => Nr,
+       m: () => Kr,
```

#### 21. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L75-L83` → after: `L302-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L302-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L302-L304) · [Before (L75-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L75-L83)

```diff
-       r: () => LR,
-       v: () => nR,
-       w: () => pR,
-       x: () => zR,
-       B: () => XR,
-       E: () => cR,
-       G: () => YR,
-       K: () => NR,
-       O: () => HR
+       s: () => nr,
+       u: () => Er,
+       y: () => xr
```

#### 22. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L85-L183` → after: `L306-L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L306-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L306-L317) · [Before (L85-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L85-L183)

```diff
-     var yR = GR(5676),
-       tR = GR(42170),
-       uR = (GR(42265), GR(14));
-     class ZR {
-       constructor(RR, JR) {
-         this.memory = RR, this.access = JR, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.hK = 0, this.u32 = new uR.j(0), this.f32 = new uR.d(0), this.u8 = new uR.c(0), this.dataView = new uR.h(new ArrayBuffer(0)), this.refresh()
-       }
-       refresh() {
-         this.ptr = this.access.ptr(), this.hK = this.access.hK(), this.buffer = (0, uR.D)(this.memory()), this.u32 = new uR.j(this.buffer, this.ptr, this.hK >>> 2), this.f32 = new uR.d(this.buffer, this.ptr, this.hK >>> 2), this.u8 = new uR.c(this.buffer, this.ptr, this.hK), this … [truncated]
-       }
-       ensureViews() {
-         (0, uR.D)(this.memory()) !== this.buffer && this.refresh()
-       }
-       get view() {
-         return this.ensureViews(), this.dataView
-       }
- ... (83 more removed lines; see GitHub link above)
+     var Zr = Qr(672),
+       Wr = Qr(360);
+     const ar = {
+         DEFAULT_FONT_SIZE: 47,
+         DEFAULT_SUBTITLE_FONT_SIZE: 30,
+         HORIZONTAL_PADDING: 30,
+         VERTICAL_PADDING: 22,
+         TEXT_SHADOW_WIDTH: 2,
+         LINE_SPACING: 8,
+         EFFECT_ICON_SIZE: 70
+       },
+       jr = 41;
```

#### 23. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L186-L189` → after: `L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L320) · [Before (L186-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L186-L189)

```diff
-       if (0 === RR) return qR;
-       const JR = new uR.c(yR.Vb);
-       for (let GR = 0; GR < yR.Vb; GR++) JR[GR] = RR >>> 8 * GR & 255;
-       return JR
+       return `bolder ${rr}px 'Jetbrains Mono'`
```

#### 24. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L191-L213` → after: `L322-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L322-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L322-L324) · [Before (L191-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L191-L213)

```diff
-     class fR {
-       constructor(RR, JR) {
-         this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new ZR(JR, {
-           ptr: () => RR.ww(),
-           hK: () => RR.aqR(),
-           reserve: JR => RR.gqR(JR)
-         }), this.net = new ZR(JR, {
-           ptr: () => RR.MqR(),
-           hK: () => RR.XqR(),
-           reserve: JR => RR.bqR(JR)
-         }), this.worker = new ZR(JR, {
-           ptr: () => RR.TqR(),
-           hK: () => RR.FqR(),
-           reserve: JR => RR.vqR(JR)
-         }), this.cmd = new ZR(JR, {
-           ptr: () => RR.uqR(),
- ... (7 more removed lines; see GitHub link above)
+ 
+     function fr(rr) {
+       return "object" === typeof rr && null !== rr
```

#### 25. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L239-L251` → after: `L328-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L328-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L328-L329) · [Before (L239-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L239-L251)

```diff
-       RR.forEachWorkerOut(((GR, tR, uR) => {
-         if ((0, yR.je)(GR)) try {
-           var ZR;
-           null === (ZR = JR.worldgen) || void 0 === ZR || ZR.take(GR, uR)
-         } catch (iR) {
-           RR.crash(XR, iR)
-         } else try {
-           var qR;
-           null === (qR = JR.mesh) || void 0 === qR || qR.take(GR, tR, uR)
-         } catch (iR) {
-           RR.crash(xR, iR)
-         }
-       }))
+       const Qr = "number" === typeof rr ? rr : "string" === typeof rr ? Number(rr.replace("px", "")) : NaN;
+       return Number.isFinite(Qr) && Qr > 0 ? Qr : Sr
```

#### 26. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L255-L262` → after: `L332-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L332-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L332-L333) · [Before (L255-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L255-L262)

```diff
-     function HR(RR, JR) {
-       let GR = !1;
-       const yR = () => {
-         GR = !1, JR()
-       };
-       return () => {
-         !GR && RR.cursor >= DR && (GR = !0, queueMicrotask(yR))
-       }
+     function pr(rr) {
+       return fr(rr) ? rr : void 0
```

#### 27. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L267-L280` → after: `L337-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L337-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L337-L339) · [Before (L267-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L267-L280)

```diff
-       return vR.has(RR.site) ? RR.error instanceof WebAssembly.RuntimeError || (0, tR.i)(RR.error) : !oR.has(RR.site) && RR.error instanceof Error
-     }
-     const PR = "events",
-       IR = [],
-       mR = "debugLog",
-       zR = "terrainTextures",
-       SR = "sunShadowTextures",
-       jR = "joinWarm",
-       dR = {
-         Home: 0,
-         Play: 1,
-         Joined: 2
-       },
-       ER = new TextDecoder;
+       const Sr = "number" === typeof rr ? Zr.v[rr] : rr;
+       return "string" === typeof Sr && Object.hasOwn(Zr.k, Sr) ? Zr.k[Sr] : void 0
+     }
```

#### 28. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L283-L296` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L342) · [Before (L283-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L283-L296)

```diff
-       const {
-         site: GR,
-         error: tR,
-         header: uR
-       } = RR, ZR = uR ? (0, yR.ge)(uR.lastError) : "noFrame", qR = `CORE-${GR===aR?ZR:GR}`, iR = null === tR || void 0 === tR ? "" : ` ${(0,VR.k)(tR)}`, fR = {
-         site: GR,
-         wasmBuild: JR.wasm,
-         clientVersion: JR.client
-       };
-       return uR && (fR.status = String(uR.status), fR.lastError = ZR, fR.lastErrorCode = String(uR.lastError), fR.lastErrorDetail = String(uR.lastErrorDetail), fR.errorCount = String(uR.errorCount), fR.frameIndex = String(uR.frameIndex), fR.tickIndex = String(uR.tickIndex)), {
-         code: qR,
-         message: `core ${GR}, last error ${ZR};${iR}`,
-         details: fR
-       }
+       return "string" === typeof rr ? rr : fr(rr) ? "string" === typeof rr.translationKey ? Sr.translate(rr.translationKey, rr.params).map((rr => "string" === typeof rr ? rr : rr.icon)).join("") : "string" === typeof rr.entityName ? Sr.shownPlayerName(rr.entityName) : "" : void 0 … [truncated]
```

#### 29. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L298-L377` → after: `L344-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L344-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L344-L348) · [Before (L298-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L298-L377)

```diff
-     class kR {
-       constructor(RR, JR, GR) {
-         this.core = RR, this.memory = JR, this.handlers = GR, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.loadCountsBuffer = nu … [truncated]
-           ptr: 0,
-           len: 0,
-           net: IR,
-           netOffsets: this.netOffsets,
-           kind: "none"
-         }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.atSendsStop = !1, this.rings = new fR(RR, JR)
-       }
-       get netKeptFrames() {
-         return this.keptFrames
-       }
-       get netWrittenSinceFrame() {
-         return this.rings.net.cursor - this.netKept
-       }
- ... (64 more removed lines; see GitHub link above)
+ 
+     function Nr(rr, Sr, Qr, Zr) {
+       if (!Array.isArray(rr)) return [];
+       const jr = [];
+       for (const Ur of rr) {
```

#### 30. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L379-L406` → after: `L350-L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L350-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L350-L355) · [Before (L379-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L379-L406)

```diff
-         null !== OR && null !== HR && LR === yR.L.Errors && (null === (oR = (cR = this.handlers).onErrors) || void 0 === oR || oR.call(cR, OR));
-         const PR = null === HR ? IR : this.readEvents(VR);
-         if (qR.consume(VR - (null !== HR && void 0 !== HR ? HR : 0)), this.netKept = null !== HR && void 0 !== HR ? HR : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== XR) return this.crash(eR, void 0 === CR || CR instanceof tR.c ? XR.error : CR), !1;
-         if (void 0 !== CR || null === OR) return this.crashOn(eR, CR), !1;
-         if (bR) return this.crash(aR, null), !1;
-         const mR = this.headerView()[yR.kb.FrameDraw];
-         if (this.lastFrameKind = (0, wR.e)(KR, mR), LR === yR.L.Fatal) return this.crash(aR, null), !1;
-         if (null === HR) return this.crash(UR, `the core kept ${DR} of ${VR} net-in bytes`), !1;
-         if (this.eventWalker) {
-           if (this.stopped) return !1;
-           const RR = this.frameEvents,
-             JR = this.headerView();
-           RR.ptr = JR[yR.kb.EventsPtr], RR.len = JR[yR.kb.EventsLen], RR.net = PR, RR.kind = this.lastFrameKind;
-           try {
-             this.eventWalker(RR)
-           } catch (jR) {
- ... (12 more removed lines; see GitHub link above)
+         if (fr(Ur) && "chatTag" in Ur) {
+           jr.push({
+             kind: "rank",
+             rank: Ur
+           });
+           continue
```

#### 31. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L408-L418` → after: `L357-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L357-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L357-L364) · [Before (L408-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L408-L418)

```diff
-         return this.handEnvEvents()
-       }
-       handEnvEvents() {
-         for (const uR of this.graceEvents) {
-           if (this.stopped) return !1;
-           try {
-             var RR, JR;
-             null === (RR = (JR = this.handlers).onReconnectGrace) || void 0 === RR || RR.call(JR, uR)
-           } catch (tR) {
-             return this.crashOn(BR, tR), !1
-           }
+         if (fr(Ur) && "icon" in Ur && !("mainRGB" in Ur)) {
+           var Nr;
+           jr.push({
+             kind: "icon",
+             icon: String(Ur.icon),
+             size: Er(null === (Nr = pr(Ur.style)) || void 0 === Nr ? void 0 : Nr.fontSize, ar.DEFAULT_FONT_SIZE)
+           });
+           continue
```

#### 32. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L420-L427` → after: `L366-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L366-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L366-L373) · [Before (L420-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L420-L427)

```diff
-         for (const uR of this.envEvents) {
-           if (this.stopped) return !1;
-           try {
-             var GR, yR;
-             null === (GR = (yR = this.handlers).onEnvEvent) || void 0 === GR || GR.call(yR, uR)
-           } catch (tR) {
-             return this.crashOn(lR, tR), !1
-           }
+         if (fr(Ur) && (0, Wr.xb)(Ur)) {
+           jr.push({
+             kind: "text",
+             text: "",
+             size: Sr,
+             colour: Zr
+           });
+           continue
```

#### 33. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L429-L456` → after: `L375-L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L375-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L375-L392) · [Before (L429-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L429-L456)

```diff
-         return !this.stopped
-       }
-       setEventWalker(RR) {
-         this.eventWalker = RR
-       }
-       writePendingInput() {
-         if (this.stopped) return !1;
-         const {
-           input: RR
-         } = this.rings;
-         try {
-           const JR = this.unsentUiPrefs;
-           JR && RR.writeRecord(yR.wb.UiPrefs, 0, JR.nametagCutDistance, 0, (0, yR.Ae)(JR)) && (this.unsentUiPrefs = null);
-           const GR = this.unsentEnvPrefs;
-           GR && RR.writeRecord(yR.wb.EnvPrefs, (0, yR.ie)(GR), GR.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
-           const tR = this.unsentLookPrefs;
- ... (12 more removed lines; see GitHub link above)
+         let rr, tr;
+         fr(Ur) && (0, Wr.wb)(Ur) ? (rr = Qr.keyBindingText(String(Ur.action)), tr = pr(Ur.style)) : fr(Ur) && "str" in Ur ? (rr = Ur.str, tr = pr(Ur.style)) : rr = Ur;
+         const hr = Er(null === (Ir = tr) || void 0 === Ir ? void 0 : Ir.fontSize, Sr),
+           zr = null !== (xr = (0, Wr._b)(tr)) && void 0 !== xr ? xr : Zr;
+         if (fr(rr) && "string" === typeof rr.translationKey) {
+           const Sr = Qr.translate(rr.translationKey, rr.params);
+           if (Sr.some((rr => "string" !== typeof rr))) {
+             for (const rr of Sr) jr.push("string" === typeof rr ? {
+               kind: "text",
+               text: rr,
+               size: hr,
+               colour: zr
+             } : {
+               kind: "icon",
+               icon: rr.icon,
+               size: hr
+ ... (2 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L477-L540` → after: `L402-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L402-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L402-L441) · [Before (L477-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L477-L540)

```diff
-       setLookPrefs(RR) {
-         this.unsentLookPrefs = {
-           ...RR
-         }
-       }
-       queueOptions(RR, JR) {
-         return !this.isStopped && (JR.byteLength > yR.$b.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
-           aux: RR,
-           payload: JR
-         }), !0))
-       }
-       setChunkCap(RR) {
-         return this.callCore("setChunkCap", null, (JR => JR.cqR(RR)))
-       }
-       shedMemory(RR) {
-         const JR = this.callCore("shedMemory", null, (JR => JR.jqR(RR)));
- ... (48 more removed lines; see GitHub link above)
+       return jr
+     }
+ 
+     function Ur(rr) {
+       return void 0 !== rr && "rank" !== rr.kind
+     }
+ 
+     function tr(rr, Sr) {
+       const Qr = Ur(rr),
+         Zr = Ur(Sr);
+       return void 0 === rr && !Zr || !Qr && void 0 === Sr ? 0 : Qr !== Zr ? .5 * ar.HORIZONTAL_PADDING : 0
+     }
+ 
+     function hr(rr) {
+       return "rank" === rr.kind ? ar.DEFAULT_FONT_SIZE : rr.size
+     }
+ ... (24 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L542-L543` → after: `L443-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L443-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L443-L446) · [Before (L542-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L542-L543)

```diff
-       terrainTextureNames() {
-         return this.callCore(zR, [], (RR => RR.QqR()))
+       return {
+         width: jr,
+         height: Zr + ar.VERTICAL_PADDING,
+         sizes: Wr
```

#### 36. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L545-L546` → after: `L448-L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L448-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L448-L454) · [Before (L545-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L545-L546)

```diff
-       setTerrainTextures(RR, JR, GR, yR) {
-         return this.callCore(zR, !1, (tR => tR.zqR(RR, GR, JR, yR)))
+     }
+ 
+     function nr(rr, Sr, Qr, Zr, Wr, ar, jr) {
+       Sr += tr(void 0, rr[0]);
+       for (let Ir = 0; Ir < rr.length; Ir++) {
+         const fr = er(rr[Ir], Sr, Qr, Zr, Wr, ar, jr);
+         Sr += 0 === fr ? 0 : fr + tr(rr[Ir], rr[Ir + 1])
```

#### 37. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L548-L549` → after: `L456-L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L456-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L456-L471) · [Before (L548-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L548-L549)

```diff
-       setShaderPack(RR, JR, GR, yR, tR, uR) {
-         return this.callCore("setShaderPack", !1, (ZR => {
+     }
+ 
+     function er(rr, Sr, Qr, Zr, Wr, fr, Er, pr) {
+       var xr;
+       if ("icon" === rr.kind) {
+         const Zr = fr.iconImage(rr.icon);
+         return Zr && Er.push({
+           image: Zr,
+           x: Sr,
+           y: Qr + ar.VERTICAL_PADDING / 2,
+           size: rr.size
+         }), rr.size
+       }
+       if ("rank" === rr.kind) {
+         const Ir = null !== pr && void 0 !== pr ? pr : zr(rr, Wr, fr);
+         return function(rr, Sr, Qr, Zr, Wr, Ir, fr) {
```

#### 38. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L551-L558` → after: `L473-L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L473-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L473-L562) · [Before (L551-L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L551-L558)

```diff
-           return null !== (qR = null === (iR = ZR.ntR) || void 0 === iR ? void 0 : iR.call(ZR, RR, JR, GR, yR, tR, uR)) && void 0 !== qR && qR
-         }))
-       }
-       warmBeforeJoin(RR, JR) {
-         this.callCore(jR, void 0, (GR => {
-           var yR;
-           null === (yR = GR.VqR) || void 0 === yR || yR.call(GR, RR, JR)
-         }))
+           const {
+             rank: xr
+           } = rr;
+           Ir.fillStyle = xr.mainRGB, Ir.fillRect(Sr, Qr, Zr, Wr);
+           const mr = fr.rankIcon(xr.icon);
+           if (!mr) return;
+           const Nr = jr / mr.height,
+             Ur = Sr + (Zr - mr.width * Nr) / 2,
+             tr = Qr + (Wr - jr) / 2,
+             hr = new Path2D(mr.path),
+             zr = ar.TEXT_SHADOW_WIDTH,
+             Yr = (null === (Er = xr.nameTag) || void 0 === Er ? void 0 : Er.iconShadowRGB) || "black";
+           for (const ar of [-1, 1])
+             for (const rr of [-1, 1]) yr(Ir, hr, Ur + zr * ar, tr + zr * rr, Nr, Yr);
+           yr(Ir, hr, Ur, tr, Nr, (null === (pr = xr.nameTag) || void 0 === pr ? void 0 : pr.iconRGB) || "white")
+         }(rr, Sr, Qr, Ir, Zr, Wr, fr), Ir
+ ... (74 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L560-L564` → after: `L564-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L564-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L564-L590) · [Before (L560-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L560-L564)

```diff
-       firstViewTerrainCodes() {
-         return this.callCore(jR, null, (RR => {
-           var JR, GR;
-           return null !== (JR = null === (GR = RR.KtR) || void 0 === GR ? void 0 : GR.call(RR)) && void 0 !== JR ? JR : null
-         }))
+     }
+     const Br = new Map(Object.entries(Kr).map((rr => {
+       let [Sr, Qr] = rr;
+       return [Sr, yr(Qr)]
+     })));
+     let Tr = !1;
+     const vr = new Set;
+     var Or = Qr(37748);
+     const Lr = "Jetbrains Mono",
+       lr = "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2190-2193,U+2212,U+2215,U+2248,U+26A1,U+2713,U+FEFF,U+FFFD",
+       Xr = "U+0100-0130,U+0132-0151,U+0154-017F,U+018F-0190,U+0192,U+019B,U+01A0-01A1,U+01AF-01B0,U+01CD-01CE,U+01D0,U+01D2,U+01D4,U+01D6,U+01D8,U+01DA,U+01DC,U+01E6-01E7,U+01EA-01EB,U+01F4-01F5,U+01FC-01FF,U+0218-021B,U+0232-0233,U+0237,U+0259,U+02B9-02BA,U+02C7,U+02C9,U+02D8-02 … [truncated]
+ 
+     function Pr(rr) {
+       return rr.split(",").map((rr => {
+         const [Sr, Qr = Sr] = rr.slice(2).split("-");
+         return [parseInt(Sr, 16), parseInt(Qr, 16)]
+ ... (11 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L566-L570` → after: `L592-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L592-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L592-L613) · [Before (L566-L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L566-L570)

```diff
-       sunShadowWantedTextures() {
-         return this.callCore(SR, null, (RR => {
-           var JR, GR;
-           return null !== (JR = null === (GR = RR.dqR) || void 0 === GR ? void 0 : GR.call(RR)) && void 0 !== JR ? JR : null
-         }))
+     }
+     const gr = 397,
+       Cr = 1,
+       Mr = {
+         translate: rr => [rr],
+         keyBindingText: rr => rr,
+         isFriend: () => !1,
+         hiddenNames: {},
+         loadsFontRest: !1
+       };
+     let Gr = null,
+       kr = 0,
+       Ar = "none";
+ 
+     function Vr() {
+       return kr
+ ... (6 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L572-L576` → after: `L615-L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L615-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L615-L647) · [Before (L572-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L572-L576)

```diff
-       setSunShadowTexture(RR, JR, GR, yR, tR) {
-         this.callCore(SR, void 0, (uR => {
-           var ZR;
-           null === (ZR = uR.mqR) || void 0 === ZR || ZR.call(uR, RR, JR, GR, yR, tR)
-         }))
+     }
+ 
+     function cr() {
+       kr++, !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? Ar = "all" : "none" === Ar && (Ar = "notBoards");
+       for (const rr of ir) rr()
+     }(0, mr.m)((() => {
+       cr(!1)
+     })), (0, fr.s)((() => {
+       (function() {
+         const rr = Tr;
+         return Tr = !1, rr
+       })() && cr(!1)
+     }));
+     const Fr = new class {
+       constructor(rr) {
+         this.loaded = rr, this.latin = null, this.rest = null, this.restWanted = !1
+ ... (17 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L578-L582` → after: `L649-L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L649-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L649-L651) · [Before (L578-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L578-L582)

```diff
-       takeSunShadowWarnings() {
-         return this.callCore(SR, [], (RR => {
-           var JR, GR;
-           return null !== (JR = null === (GR = RR.YqR) || void 0 === GR ? void 0 : GR.call(RR)) && void 0 !== JR ? JR : []
-         }))
+       loadRest() {
+         var rr;
+         this.restWanted || (this.restWanted = !0, null === (rr = this.rest) || void 0 === rr || rr.load())
```

#### 43. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L584-L587` → after: `L653-L655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L653-L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L653-L655) · [Before (L584-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L584-L587)

```diff
-       sunShadowsHeld() {
-         return this.callCore(SR, null, (RR => {
-           var JR, GR;
-           return null !== (JR = null === (GR = RR.EqR) || void 0 === GR ? void 0 : GR.call(RR)) && void 0 !== JR ? JR : null
+       async untilLoadedFor(rr) {
+         await this.load(), this.loadFor(rr), await document.fonts.load(`16px '${Lr}'`, rr).catch((Sr => {
+           console.warn("[bloxd-wasm-client] the text font did not load for", rr, Sr)
```

#### 44. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L590-L703` → after: `L658-L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L658-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L658-L659) · [Before (L590-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L590-L703)

```diff
-       callCore(RR, JR, GR) {
-         if (this.stopped) return JR;
-         try {
-           return GR(this.core)
-         } catch (yR) {
-           return this.crash(RR, yR), JR
-         }
-       }
-       readEvents(RR) {
-         this.netOffsets.length = 0;
-         const JR = this.headerView(),
-           GR = JR[yR.kb.EventsPtr],
-           tR = JR[yR.kb.EventsLen];
-         if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === tR) return IR;
-         const uR = [],
-           ZR = this.memory().buffer;
- ... (98 more removed lines; see GitHub link above)
+       loadFor(rr) {
+         !this.restWanted && qr.test(rr) && this.loadRest()
```

#### 45. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L705-L706` → after: `L661-L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L661-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L661-L691) · [Before (L705-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L705-L706)

```diff
-       takeSends(RR) {
-         this.atSendsStop = !0;
+     }(cr);
+ 
+     function or(rr) {
+       Object.assign(Mr, rr), Mr.loadsFontRest && Fr.loadRest(), cr(!1)
+     }
+ 
+     function br(rr) {
+       rr !== Gr && (Gr = rr, cr())
+     }
+ 
+     function Jr(rr) {
+       if ("none" === Ar || null === rr) return;
+       rr(gr, "all" === Ar ? 0 : Cr, new Uint8Array(0)) && (Ar = "none")
+     }
+     const Dr = new Map,
+       dr = new Map;
+ ... (15 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L708-L710` → after: `L693-L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L693-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L693-L700) · [Before (L708-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L708-L710)

```diff
-           RR()
-         } catch (JR) {
-           this.crashOn(bR, JR)
+           return function(rr, Sr) {
+             let [Qr, Zr, Wr] = Sr;
+             const ar = (0, Er.g)(rr.width, rr.height),
+               {
+                 canvas: jr
+               } = ar;
+             return ar.drawImage(rr, 0, 0), ar.globalCompositeOperation = "multiply", ar.fillStyle = `rgb(${Qr}, ${Zr}, ${Wr})`, ar.fillRect(0, 0, jr.width, jr.height), ar.globalCompositeOperation = "destination-in", ar.drawImage(rr, 0, 0), jr
+           }(Zr, Qr)
```

#### 47. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L712` → after: `L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L702) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L712)

```diff
-           this.atSendsStop = !1
+           Zr.close()
```

#### 48. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L714-L793` → after: `L704-L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L704-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L704-L724) · [Before (L714-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L714-L793)

```diff
-         return !this.stopped
-       }
-       forEachNetOut(RR) {
-         this.forEachOut(AR, "net-out", yR.kb.NetOutPtr, yR.kb.NetOutLen, yR.Yb, 0, ((JR, GR, tR, uR) => {
-           const ZR = (0, yR.me)(GR);
-           ZR === yR.Zb.Frame ? RR((0, yR.ke)(GR), tR) : this.crash(AR, `net-out record at ${uR} is kind ${ZR}, not a frame`)
-         }))
-       }
-       forEachWorkerOut(RR) {
-         this.forEachOut(CR, "worker-out", yR.kb.WorkerOutPtr, yR.kb.WorkerOutLen, yR.Id, 4, ((JR, GR, tR, uR) => {
-           const ZR = 255 & JR,
-             qR = ZR === yR.Yd.Init ? this.initOf(tR, uR) : tR;
-           null !== qR && RR(ZR, JR >>> 8 & 16777215, qR)
-         }))
-       }
-       initOf(RR, JR) {
- ... (64 more removed lines; see GitHub link above)
+       })).then((rr => {
+         Dr.get(Wr) === jr && dr.delete(Wr), rr !== jr.image && (jr.image = rr, cr(!1))
+       }), (Sr => {
+         console.warn(`[bloxd-wasm-client] text icon ${rr} did not load`, Sr), Dr.get(Wr) === jr && (Dr.delete(Wr), dr.delete(Wr), null !== jr.image && cr(!1))
+       })), jr.image
+     }(0, Nr.d)((() => {
+       dr.clear();
+       for (const [rr, {
+           image: Sr
+         }] of Dr) null !== Sr && dr.set(rr, Sr);
+       Dr.clear(), cr(!1)
+     }));
+     const ur = new Set(Zr.b),
+       rS = new Set(["CubeBlock", "SlabBlock", "StairsBlock"]);
+ 
+     function SS() {
+ ... (5 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L795-L811` → after: `L726-L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L726-L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L726-L779) · [Before (L795-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L795-L811)

```diff
-         const GR = null !== (RR = null === (JR = this.loadCountWords()) || void 0 === JR ? void 0 : JR[yR.Jb.ViewQueuedPrograms]) && void 0 !== RR ? RR : 0;
-         return 0 === GR ? null : GR - 1
-       }
-       readFirstViewWait(RR, JR) {
-         const GR = this.loadCountWords();
-         return null === GR ? null : [GR[yR.Jb.FirstViewLinkMs], GR[yR.Jb.FirstViewTerrainMs], GR[yR.Jb.FirstViewHeldMs], GR[yR.Jb.FirstViewOtherMs], GR[yR.Jb.FirstViewGaps], GR[yR.Jb.FirstViewGapMs], RR, JR]
-       }
-       loadCountWords() {
-         if (this.stopped || null === this.lastHeader) return null;
-         const RR = this.core.Rn();
-         if (0 === RR) return null;
-         const JR = this.memory().buffer;
-         return JR !== this.loadCountsBuffer && (this.loadCountsBuffer = JR, this.loadCounts = new Uint32Array(JR, RR, yR.Db)), this.loadCounts
-       }
-       headerView() {
-         const RR = this.memory().buffer;
- ... (1 more removed lines; see GitHub link above)
+         return null !== (Sr = null === (Qr = (0, Nr.j)()) || void 0 === Qr ? void 0 : Qr.textureUrl(rr)) && void 0 !== Sr ? Sr : (await (0, Ur.c)()).ingameIconUrl(rr)
+       })) : null
+     }
+     let ZS = "unasked";
+     const WS = {
+       get canSeeRealPlayerNames() {
+         return pr.featureFlags.canSeeRealPlayerNames
+       },
+       get canSeePlayerWrittenText() {
+         return pr.featureFlags.canSeePlayerWrittenText
+       },
+       get localPlayerDbId() {
+         return Gr
+       },
+       shownPlayerName: rr => (0, xr.c)(rr, Mr.hiddenNames),
+       translate: (rr, Sr) => {
+ ... (38 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L815` → after: `L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L783) · [Before (L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L815)

```diff
-   42315: (RR, JR, GR) => {
+   37604: (rr, Sr, Qr) => {
```

#### 51. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L817-L818` → after: `L785-L788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L785-L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L785-L788) · [Before (L817-L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L817-L818)

```diff
-       b: () => ZR,
-       f: () => uR
+       e: () => hr,
+       i: () => Ar,
+       j: () => Xr,
+       k: () => qr
```

#### 52. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L820-L821` → after: `L790-L793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L790-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L790-L793) · [Before (L820-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L820-L821)

```diff
-     var yR = GR(5554);
-     let tR = null;
+     var Zr = Qr(37701),
+       Wr = Qr(37613),
+       ar = Qr(37622),
+       jr = Qr(37630);
```

#### 53. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L823-L830` → after: `L795-L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L795-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L795-L880) · [Before (L823-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L823-L830)

```diff
-     function uR(RR) {
-       tR = {
-         scanned: !1
-       };
-       try {
-         return RR()
-       } finally {
-         tR = null
+     function Ir(rr, Sr, Qr) {
+       const Zr = "object" === typeof rr && null !== rr ? rr : {},
+         Wr = function(rr, Sr, Qr) {
+           if (!Array.isArray(rr) || 0 === rr.length) return [];
+           const Zr = [{
+             width: 0,
+             height: 0,
+             y: 0,
+             items: []
+           }];
+           for (const Ir of (0, jr.i)(rr, jr.d.DEFAULT_FONT_SIZE, Qr)) {
+             if ("text" !== Ir.kind) {
+               Zr[Zr.length - 1].items.push({
+                 content: Ir,
+                 chars: 1,
+                 size: {
+ ... (70 more added lines; see GitHub link above)
```

#### 54. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L834-L838` → after: `L915-L918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L915-L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L915-L918) · [Before (L834-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L834-L838)

```diff
-     function ZR() {
-       const RR = tR;
-       if (null === RR) return (0, yR.h)();
-       const JR = (0, yR.h)(!RR.scanned);
-       return RR.scanned = !0, JR
+     function Xr(rr, Sr) {
+       const Qr = lr.encode(JSON.stringify(Sr)),
+         Zr = new Uint8Array(Qr.length + 1);
+       return Zr[0] = rr, Zr.set(Qr, 1), Zr
```

#### 55. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L846-L848` → after: `L921-L960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L921-L960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L921-L960) · [Before (L846-L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L846-L848)

```diff
-       webgpu: "rust_webgpu",
-       webgl: "rust_webgl2",
-       webgl1: "rust_webgl1"
+         name: "Ag",
+         info: null,
+         colour: "default",
+         ranks: [],
+         effects: [],
+         health: .5,
+         Oj: null,
+         hideNameSeed: null
+       },
+       Hr = [Xr(hr.Nametag, Pr), Xr(hr.Nametag, {
+         ...Pr,
+         info: {
+           content: [{
+             str: "Ag"
+           }],
+           subtitle: ["Ag"]
+ ... (24 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L850-L851` → after: `L962-L963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L962-L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L962-L963) · [Before (L850-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L850-L851)

```diff
-   },
-   37362: (RR, JR, GR) => {
+     let Rr = tr.u;
+ 
```

#### 57. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L853` → after: `L965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L965) · [Before (L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L853)

```diff
-       return GR(37370)
+       vr.clear(), Or.clear()
```

#### 58. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L856-L857` → after: `L968-L970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L968-L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L968-L970) · [Before (L856-L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L856-L857)

```diff
-     function tR() {
-       return GR(37379)
+     function Cr(rr, Sr) {
+       const Qr = rr.get(Sr);
+       return void 0 !== Qr && (rr.delete(Sr), rr.set(Sr, Qr)), Qr
```

#### 59. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L860-L861` → after: `L973-L1104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L973-L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/244.js#L973-L1104) · [Before (L860-L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/244.js#L860-L861)

```diff
-     function uR(RR) {
-       return ["pl", "ru", "tr", "uk", "vi"].includes(RR)
+     function Mr(rr, Sr, Qr) {
+       rr.set(Sr, Qr), rr.size > Yr && rr.delete(rr.keys().next().value)
+     }
+ 
+     function Gr(rr, Sr, Qr) {
+       if (rr === hr.Nametag) {
+         let rr = Cr(vr, Sr);
+         return void 0 === rr && (rr = (0, fr.c)(JSON.parse(Sr), Qr, Br), Mr(vr, Sr, rr)), rr
+       }
+       if (rr === hr.MultilineText) {
+         var Wr;
+         const rr = JSON.parse(Sr),
+           Zr = JSON.stringify(null !== (Wr = rr.box) && void 0 !== Wr ? Wr : null),
+           ar = "number" === typeof rr.shown ? rr.shown : null;
+         let jr = Cr(Or, Zr);
+         void 0 === jr && (jr = Ir(rr.box, Qr, Br), Mr(Or, Zr, jr));
+ ... (116 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/245.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/245.js` (31 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc)

#### 1. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L4` → after: `L4-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L4-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/245.js#L4-L19) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/245.js#L4)

```diff
-   37325: (RR, JR, GR) => {
+   37613: (rr, Sr, Qr) => {
+     function Zr(rr, Sr, Qr) {
+       if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(rr, Sr).getContext("2d", Qr);
+       const Zr = document.createElement("canvas");
+       return Zr.width = rr, Zr.height = Sr, Zr.getContext("2d", Qr)
+     }
+ 
+     function Wr(rr, Sr) {
+       return rr.getContext("2d", Sr)
+     }
+     Qr.d(Sr, {
+       d: () => Wr,
+       g: () => Zr
+     })
+   },
+   42593: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L8` → after: `L23-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L23-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/245.js#L23-L26) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/245.js#L8)

```diff
-     var yR = GR(1317);
+     const Zr = 1 << 20,
+       Wr = 1 << 21,
+       ar = 1024,
+       jr = 2048;
```

#### 3. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L10-L144` → after: `L28-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L28-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/245.js#L28-L32) · [Before (L10-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/245.js#L10-L144)

```diff
-     function tR(RR) {
-       const JR = /(\d*\.?\d+)px/.exec(RR);
-       return JR ? Number(JR[1]) : null
-     }
- 
-     function uR(RR) {
-       return RR.split(/[\s,]+/).pop()
-     }
-     let ZR = !1;
-     const qR = {
-       debug: !1,
-       align: "center",
-       vAlign: "middle",
-       fontSize: 14,
-       fontWeight: "",
-       fontStyle: "",
- ... (119 more removed lines; see GitHub link above)
+     function Ir(rr, Sr, Qr) {
+       const Ir = rr + Zr,
+         fr = Sr + ar,
+         Er = Qr + Zr;
+       return Ir < 0 || Ir >= Wr || Er < 0 || Er >= Wr || fr < 0 || fr >= jr ? -1 : (Ir * Wr + Er) * jr + fr
```

#### 4. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L147` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/245.js#L35) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/245.js#L147)

```diff
-   37338: (RR, JR, GR) => {
+   42589: (rr, Sr, Qr) => {
```

#### 5. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L152-L153` → after: `L42-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L42-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/245.js#L42-L44) · [Before (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/245.js#L152-L153)

```diff
-       n: () => VR,
-       r: () => KR
+       m: () => Er,
+       p: () => fr,
+       t: () => Ir
```

#### 6. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L155-L163` → after: `L46-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/245.js#L46-L47) · [Before (L155-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/245.js#L155-L163)

```diff
-     var yR = GR(3017),
-       tR = GR(377);
-     const uR = 1024,
-       ZR = 1536,
-       qR = 2 * yR.h + 1,
-       iR = new Intl.NumberFormat("en", {
-         maximumSignificantDigits: 15
-       }),
-       fR = 1.5;
+     Qr(4699);
+     Qr(42593);
```

#### 7. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L165-L173` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/245.js#L49) · [Before (L165-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/245.js#L165-L173)

```diff
-     function VR(RR, JR, GR) {
-       if ("string" !== typeof RR) return JR;
-       try {
-         const GR = JSON.parse(RR);
-         return GR && "object" === typeof GR ? GR : JR
-       } catch (yR) {
-         return void 0 !== GR && console.error(`Couldn't parse ${GR}`, yR), JR
-       }
-     }
+     function Zr(rr) {}
```

#### 8. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L175-L177` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/245.js#L51) · [Before (L175-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/245.js#L175-L177)

```diff
-     function KR(RR) {
-       return VR(RR, null, "a leaderboard's rows")
-     }
+     function Wr(rr) {}
```

#### 9. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L179-L185` → after: `L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/245.js#L53) · [Before (L179-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/245.js#L179-L185)

```diff
-     function wR(RR, JR) {
-       var GR, yR;
-       return null !== JR && void 0 !== JR ? JR : {
-         status: null !== (GR = RR.status) && void 0 !== GR ? GR : "loading",
-         entries: null !== (yR = RR.entries) && void 0 !== yR ? yR : []
-       }
-     }
+     function ar(rr) {}
```

#### 10. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L187-L189` → after: `L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/245.js#L55) · [Before (L187-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/245.js#L187-L189)

```diff
-     function rR(RR, JR) {
-       return "number" === typeof RR && Number.isFinite(RR) && RR > 0 ? RR : JR
-     }
+     function jr(rr) {}
```

#### 11. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L191-L308` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/245.js#L57) · [Before (L191-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/245.js#L191-L308)

```diff
-     function eR(RR, JR) {
-       const GR = rR(RR.size, 1);
-       let yR = rR(RR.width, rR(2.5 * GR, 2.5)),
-         tR = rR(RR.height, rR(3.75 * GR, 3.75));
-       Number.isFinite(uR * tR / yR) && Number.isFinite(ZR * yR / tR) || (yR = 2.5, tR = 3.75);
-       const qR = tR / yR,
-         iR = Math.max(1, Math.min(uR, JR / qR));
-       return {
-         width: yR,
-         height: tR,
-         layoutWidth: Math.max(uR, ZR / qR),
-         layoutHeight: Math.max(ZR, uR * qR),
-         pixelWidth: Math.round(iR),
-         pixelHeight: Math.round(Math.max(1, Math.min(JR, iR * qR)))
-       }
-     }
- ... (102 more removed lines; see GitHub link above)
+     function Ir(rr) {}
```

#### 12. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L310-L325` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/245.js#L59) · [Before (L310-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/245.js#L310-L325)

```diff
-     function nR(RR, JR) {
-       const GR = [];
-       let yR = !1;
-       return RR.forEach(((tR, uR) => {
-         if (null !== JR && tR.value === JR.value) return void GR.push(JR.rank);
-         const ZR = uR > 0 && tR.value === RR[uR - 1].value;
-         ZR || (yR = 0 === uR && 1 !== tR.rank), GR.push(ZR && !yR ? GR[uR - 1] : tR.rank)
-       })), GR
-     }
-   },
-   37262: (RR, JR, GR) => {
-     GR.d(JR, {
-       d: () => tR,
-       h: () => uR
-     });
-     const yR = 32;
+     function fr(rr, Sr, Qr) {}
```

#### 13. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L327-L329` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/245.js#L61) · [Before (L327-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/245.js#L327-L329)

```diff
-     function tR(RR) {
-       return Array.from(RR).length
-     }
+     function Er(rr) {}
```

#### 14. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L331-L347` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/245.js#L63) · [Before (L331-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/245.js#L331-L347)

```diff
-     function uR(RR) {
-       const JR = [""];
-       let GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         tR = "";
-       const uR = () => {
-         JR.push(""), GR = 0, tR = ""
-       };
-       for (const ZR of RR.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
-         if (/^\r?\n$/.test(ZR)) uR();
-         else if (/^\s+$/.test(ZR)) tR += ZR;
-       else if (ZR.length > 0) {
-         const RR = Array.from(ZR);
-         GR > 0 && GR + tR.length + RR.length > yR && uR(), JR[JR.length - 1] += tR, GR += tR.length, tR = "";
-         for (const tR of RR) GR >= yR && uR(), JR[JR.length - 1] += tR, GR++
-       }
-       return JR[JR.length - 1] += tR, JR
- ... (1 more removed lines; see GitHub link above)
+     function pr(rr) {}
```

#### 15. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L349` → after: `L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/245.js#L65) · [Before (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/245.js#L349)

```diff
-   37278: (RR, JR, GR) => {
+   42627: (rr, Sr, Qr) => {
```

#### 16. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L352-L354` → after: `L68-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L68-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/245.js#L68-L83) · [Before (L352-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/245.js#L352-L354)

```diff
-       e: () => gR,
-       i: () => bR,
-       m: () => vR
+       f: () => Ur,
+       g: () => br,
+       k: () => Lr,
+       n: () => cr,
+       q: () => Pr,
+       u: () => Hr,
+       x: () => Yr,
+       B: () => hr,
+       E: () => zr,
+       G: () => Or,
+       J: () => Vr,
+       M: () => yr,
+       O: () => Mr,
+       R: () => or,
+       S: () => qr,
+       W: () => gr
```

#### 17. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L356-L411` → after: `L85-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L85-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/245.js#L85-L181) · [Before (L356-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/245.js#L356-L411)

```diff
-     var yR = GR(37287),
-       tR = GR(8059),
-       uR = GR(8132),
-       ZR = GR(37293),
-       qR = GR(37298),
-       iR = GR(37301),
-       fR = GR(8461),
-       VR = GR(8583),
-       KR = GR(37303),
-       wR = GR(8784),
-       rR = GR(7934),
-       eR = GR(9048),
-       aR = GR(37309),
-       LR = GR(37312),
-       nR = GR(9074),
-       UR = GR(37314),
- ... (40 more removed lines; see GitHub link above)
+     var Zr = Qr(5610),
+       Wr = Qr(42500),
+       ar = (Qr(42589), Qr(13));
+     class jr {
+       constructor(rr, Sr) {
+         this.memory = rr, this.access = Sr, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.sx = 0, this.u32 = new ar.m(0), this.f32 = new ar.f(0), this.u8 = new ar.c(0), this.dataView = new ar.j(new ArrayBuffer(0)), this.refresh()
+       }
+       refresh() {
+         this.ptr = this.access.ptr(), this.sx = this.access.sx(), this.buffer = (0, ar.J)(this.memory()), this.u32 = new ar.m(this.buffer, this.ptr, this.sx >>> 2), this.f32 = new ar.f(this.buffer, this.ptr, this.sx >>> 2), this.u8 = new ar.c(this.buffer, this.ptr, this.sx), this … [truncated]
+       }
+       ensureViews() {
+         (0, ar.J)(this.memory()) !== this.buffer && this.refresh()
+       }
+       get view() {
+         return this.ensureViews(), this.dataView
+       }
+ ... (81 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L413-L414` → after: `L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/245.js#L183) · [Before (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/245.js#L413-L414)

```diff
-     let lR = !1;
-     const pR = new Set;
+     const Ir = new ar.c(0);
```

#### 19. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L417-L419` → after: `L186-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L186-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/245.js#L186-L212) · [Before (L417-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/245.js#L417-L419)

```diff
-       if (RR !== lR) {
-         lR = RR;
-         for (const RR of pR) RR()
+       if (0 === rr) return Ir;
+       const Sr = new ar.c(Zr.ac);
+       for (let Qr = 0; Qr < Zr.ac; Qr++) Sr[Qr] = rr >>> 8 * Qr & 255;
+       return Sr
+     }
+     class Er {
+       constructor(rr, Sr) {
+         this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new jr(Sr, {
+           ptr: () => rr.Nm(),
+           sx: () => rr.yIr(),
+           reserve: Sr => rr.gIr(Sr)
+         }), this.net = new jr(Sr, {
+           ptr: () => rr.PIr(),
+           sx: () => rr.XIr(),
+           reserve: Sr => rr.CIr(Sr)
+         }), this.worker = new jr(Sr, {
+ ... (11 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L423-L425` → after: `L238-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L238-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/245.js#L238-L251) · [Before (L423-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/245.js#L423-L425)

```diff
-     function bR(RR) {
-       var JR;
-       return "string" === typeof RR && lR && null !== (JR = BR.get(RR.toLowerCase())) && void 0 !== JR ? JR : null
+     function qr(rr, Sr) {
+       rr.forEachWorkerOut(((Qr, Wr, ar) => {
+         if ((0, Zr.Ae)(Qr)) try {
+           var jr;
+           null === (jr = Sr.worldgen) || void 0 === jr || jr.take(Qr, ar)
+         } catch (fr) {
+           rr.crash(yr, fr)
+         } else try {
+           var Ir;
+           null === (Ir = Sr.mesh) || void 0 === Ir || Ir.take(Qr, Wr, ar)
+         } catch (fr) {
+           rr.crash(Hr, fr)
+         }
+       }))
```

#### 21. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L428-L430` → after: `L255-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L255-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/245.js#L255-L261) · [Before (L428-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/245.js#L428-L430)

```diff
-     function vR(RR) {
-       return pR.add(RR), () => {
-         pR.delete(RR)
+     function gr(rr, Sr) {
+       let Qr = !1;
+       const Zr = () => {
+         Qr = !1, Sr()
+       };
+       return () => {
+         !Qr && rr.cursor >= Rr && (Qr = !0, queueMicrotask(Zr))
```

#### 22. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L433-L467` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/245.js#L264) · [Before (L433-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/245.js#L433-L467)

```diff
-   },
-   37329: (RR, JR, GR) => {
-     GR.d(JR, {
-       A: () => nR,
-       E: () => WR,
-       d: () => tR,
-       g: () => rR,
-       i: () => ZR,
-       k: () => eR,
-       n: () => UR,
-       o: () => wR,
-       p: () => AR,
-       r: () => uR,
-       s: () => VR,
-       t: () => KR,
-       u: () => aR,
- ... (19 more removed lines; see GitHub link above)
+     const Cr = new Set([tr, hr, yr, Hr]);
```

#### 23. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L470` → after: `L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/245.js#L267) · [Before (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/245.js#L470)

```diff
-       return (0, yR.q)(RR.toWellFormed().replace(/\uFFFD+/g, "\ufffd"))
+       return Xr.has(rr.site) ? rr.error instanceof WebAssembly.RuntimeError || (0, Wr.i)(rr.error) : !Cr.has(rr.site) && rr.error instanceof Error
```

#### 24. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L475-L487` → after: `L284-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L284-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/245.js#L284-L295) · [Before (L475-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/245.js#L475-L487)

```diff
-         numLines: GR,
-         charsPerLine: yR
-       } = tR[JR];
-       return CR(RR, GR, yR, !1)
-     }
-     const qR = 7 / 8,
-       iR = .25,
-       fR = 8;
- 
-     function VR(RR, JR) {
-       return {
-         width: Math.min(RR, fR) - 2 * iR,
-         height: Math.min(JR, fR) - 2 * iR
+         site: Qr,
+         error: Wr,
+         header: ar
+       } = rr, jr = ar ? (0, Zr.te)(ar.lastError) : "noFrame", Ir = `CORE-${Qr===tr?jr:Qr}`, fr = null === Wr || void 0 === Wr ? "" : ` ${(0,pr.l)(Wr)}`, Er = {
+         site: Qr,
+         wasmBuild: Sr.wasm,
+         clientVersion: Sr.client
+       };
+       return ar && (Er.status = String(ar.status), Er.lastError = jr, Er.lastErrorCode = String(ar.lastError), Er.lastErrorDetail = String(ar.lastErrorDetail), Er.errorCount = String(ar.errorCount), Er.frameIndex = String(ar.frameIndex), Er.tickIndex = String(ar.tickIndex)), {
+         code: Ir,
+         message: `core ${Qr}, last error ${jr};${fr}`,
+         details: Er
```

#### 25. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L490-L499` → after: `L298-L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L298-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/245.js#L298-L811) · [Before (L490-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/245.js#L490-L499)

```diff
- 
-     function KR(RR, JR, GR) {
-       const yR = VR(RR, JR),
-         {
-           numLines: uR,
-           charsPerLine: ZR
-         } = tR[GR];
-       return {
-         numLines: Math.max(1, Math.floor(uR / qR * yR.height)),
-         charsPerLine: Math.max(1, Math.floor(ZR * yR.width))
+     class br {
+       constructor(rr, Sr, Qr) {
+         this.core = rr, this.memory = Sr, this.handlers = Qr, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.loadCountsBuffer = nu … [truncated]
+           ptr: 0,
+           len: 0,
+           net: kr,
+           netOffsets: this.netOffsets,
+           kind: "none"
+         }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.atSendsStop = !1, this.rings = new Er(rr, Sr)
+       }
+       get netKeptFrames() {
+         return this.keptFrames
+       }
+       get netWrittenSinceFrame() {
+         return this.rings.net.cursor - this.netKept
+       }
+ ... (498 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L502-L510` → after: `L814-L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L814-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/245.js#L814-L821) · [Before (L502-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/245.js#L502-L510)

```diff
- 
-     function wR(RR, JR, GR, yR) {
-       const {
-         numLines: tR,
-         charsPerLine: uR
-       } = KR(GR, yR, JR);
-       return CR(RR, tR, uR, !1)
-     }
-     const rR = 32e3;
+   },
+   42635: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       d: () => jr,
+       g: () => ar
+     });
+     var Zr = Qr(5498);
+     let Wr = null;
```

#### 27. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L513` → after: `L824-L831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L824-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/245.js#L824-L831) · [Before (L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/245.js#L513)

```diff
-       return RR.slice(0, rR)
+       Wr = {
+         scanned: !1
+       };
+       try {
+         return rr()
+       } finally {
+         Wr = null
+       }
```

#### 28. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L519-L522` → after: `L834-L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L834-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/245.js#L834-L838) · [Before (L519-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/245.js#L519-L522)

```diff
-     function UR(RR, JR) {
-       const GR = Math.max(0, nR - JR),
-         yR = Math.min(aR, GR);
-       return RR.slice(0, yR)
+     function jr() {
+       const rr = Wr;
+       if (null === rr) return (0, Zr.h)();
+       const Sr = (0, Zr.h)(!rr.scanned);
+       return rr.scanned = !0, Sr
```

#### 29. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L525-L540` → after: `L846-L854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L846-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/245.js#L846-L854) · [Before (L525-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/245.js#L525-L540)

```diff
-       book: {
-         numLines: 13,
-         charsPerLine: 19,
-         uiFontSize: 1.95
-       },
-       XV: {
-         numLines: 1,
-         charsPerLine: 19,
-         uiFontSize: 1.95
-       },
-       nameTag: {
-         numLines: 1,
-         charsPerLine: 13,
-         uiFontSize: 4.6
-       }
-     };
+       webgpu: "rust_webgpu",
+       webgl: "rust_webgl2",
+       webgl1: "rust_webgl1"
+     }
+   },
+   37748: (rr, Sr, Qr) => {
+     function Zr() {
+       return Qr(37757)
+     }
```

#### 30. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L542-L547` → after: `L856-L857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L856-L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/245.js#L856-L857) · [Before (L542-L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/245.js#L542-L547)

```diff
-     function AR(RR, JR) {
-       const {
-         numLines: GR,
-         charsPerLine: yR
-       } = WR[JR];
-       return CR(RR, GR, yR, !1)
+     function Wr() {
+       return Qr(37760)
```

#### 31. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L550-L558` → after: `L860-L861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L860-L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/245.js#L860-L861) · [Before (L550-L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/245.js#L550-L558)

```diff
-     function CR(RR, JR, GR, yR, tR) {
-       (tR || yR) && (RR = RR.slice(0, null !== tR && void 0 !== tR ? tR : JR * GR));
-       const uR = RR.split("\n");
-       if (uR.length > JR && uR.splice(JR, uR.length - JR), !yR)
-         for (let ZR = 0; ZR < uR.length; ZR++) {
-           const RR = uR[ZR];
-           RR.length > GR && (uR[ZR] = RR.substring(0, GR), uR.length < JR && uR.splice(ZR + 1, 0, RR.substring(GR)))
-         }
-       return uR.join("\n")
+     function ar(rr) {
+       return ["pl", "ru", "tr", "uk", "vi"].includes(rr)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/246.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/246.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835)

#### 1. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/246.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/246.js#L4)

```diff
-   40333: (RR, JR, GR) => {
+   37699: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L6` → after: `L6-L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L6-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/246.js#L6-L322) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/246.js#L6)

```diff
-       b: () => uR,
+       d: () => Ir
+     });
+     var Zr = Qr(1279);
+ 
+     function Wr(rr) {
+       const Sr = /(\d*\.?\d+)px/.exec(rr);
+       return Sr ? Number(Sr[1]) : null
+     }
+ 
+     function ar(rr) {
+       return rr.split(/[\s,]+/).pop()
+     }
+     let jr = !1;
+     const Ir = {
+       debug: !1,
+       align: "center",
+ ... (301 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L9-L17` → after: `L325-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L325-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/246.js#L325-L346) · [Before (L9-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/246.js#L9-L17)

```diff
-     var yR = GR(32);
-     let tR = !1;
- 
-     function uR() {
-       return tR
-     }
- 
-     function ZR(RR) {
-       tR !== RR && (tR = RR, yR.n.JK("replayViewer|videoExportChanged"))
+     const Zr = 32;
+ 
+     function Wr(rr) {
+       return Array.from(rr).length
+     }
+ 
+     function ar(rr) {
+       const Sr = [""];
+       let Qr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+         Wr = "";
+       const ar = () => {
+         Sr.push(""), Qr = 0, Wr = ""
+       };
+       for (const jr of rr.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
+         if (/^\r?\n$/.test(jr)) ar();
+         else if (/^\s+$/.test(jr)) Wr += jr;
+ ... (6 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L20-L76` → after: `L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/246.js#L349) · [Before (L20-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/246.js#L20-L76)

```diff
-   37620: (RR, JR, GR) => {
-     GR.d(JR, {
-       b: () => wR,
-       e: () => VR,
-       h: () => rR,
-       i: () => KR
-     });
-     var yR = GR(377),
-       tR = GR(717),
-       uR = GR(729),
-       ZR = GR(46);
-     const qR = {
-         idStorageKey: "playSessionId",
-         lastActivityStorageKey: "playSessionLastActivityMs",
-         expiryMs: 3e5
-       },
- ... (41 more removed lines; see GitHub link above)
+   37642: (rr, Sr, Qr) => {
```

#### 5. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L81-L83` → after: `L443-L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L443-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/246.js#L443-L449) · [Before (L81-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/246.js#L81-L83)

```diff
-       l: () => uR,
-       o: () => qR,
-       s: () => fR
+       n: () => mr,
+       r: () => er,
+       s: () => ar,
+       t: () => pr,
+       u: () => xr,
+       x: () => tr,
+       z: () => hr
```

#### 6. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L85-L186` → after: `L451-L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L451-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/246.js#L451-L539) · [Before (L85-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/246.js#L85-L186)

```diff
-     let yR = null,
-       tR = null;
- 
-     function uR(RR, JR) {
-       return yR = RR, tR = null, qR(JR), () => {
-         yR === RR && (yR = null, tR = null)
-       }
-     }
- 
-     function ZR() {
-       return null === tR ? null : {
-         ...tR
-       }
-     }
- 
-     function qR(RR) {
- ... (86 more removed lines; see GitHub link above)
+     var Zr = Qr(2049);
+     const Wr = [{
+       numLines: 7,
+       charsPerLine: 16,
+       uiFontSize: 3.3,
+       ingameFontSize: 25
+     }, {
+       numLines: 5,
+       charsPerLine: 11,
+       uiFontSize: 4.6,
+       ingameFontSize: 36
+     }, {
+       numLines: 3,
+       charsPerLine: 7,
+       uiFontSize: 7.5,
+       ingameFontSize: 58
+ ... (73 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L189-L194` → after: `L542-L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L542-L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/246.js#L542-L558) · [Before (L189-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/246.js#L189-L194)

```diff
-     function tR(RR) {
-       yR = RR
-     }
- 
-     function uR() {
-       return yR
+     function er(rr, Sr) {
+       const {
+         numLines: Qr,
+         charsPerLine: Zr
+       } = nr[Sr];
+       return Kr(rr, Qr, Zr, !1)
+     }
+ 
+     function Kr(rr, Sr, Qr, Zr, Wr) {
+       (Wr || Zr) && (rr = rr.slice(0, null !== Wr && void 0 !== Wr ? Wr : Sr * Qr));
+       const ar = rr.split("\n");
+       if (ar.length > Sr && ar.splice(Sr, ar.length - Sr), !Zr)
+         for (let jr = 0; jr < ar.length; jr++) {
+           const rr = ar[jr];
+           rr.length > Qr && (ar[jr] = rr.substring(0, Qr), ar.length < Sr && ar.splice(jr + 1, 0, rr.substring(Qr)))
+         }
+ ... (1 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/247.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/247.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f)

#### 1. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L4` → after: `L4-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L4-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/247.js#L4-L20) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/247.js#L4)

```diff
-   37394: (RR, JR, GR) => {
+   40646: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       e: () => ar,
+       f: () => jr
+     });
+     var Zr = Qr(34);
+     let Wr = !1;
+ 
+     function ar() {
+       return Wr
+     }
+ 
+     function jr(rr) {
+       Wr !== rr && (Wr = rr, Zr.i.Jp("replayViewer|videoExportChanged"))
+     }
+   },
+ ... (1 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L7` → after: `L23-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L23-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/247.js#L23-L25) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/247.js#L7)

```diff
-       f: () => wR
+       h: () => pr,
+       l: () => Nr,
+       o: () => xr
```

#### 3. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L9-L15` → after: `L27-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L27-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/247.js#L27-L51) · [Before (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/247.js#L9-L15)

```diff
-     var yR = GR(66),
-       tR = GR(1493),
-       uR = GR(1270),
-       ZR = GR(1465),
-       qR = GR(4824),
-       iR = GR(5814),
-       fR = GR(1378);
+     var Zr = Qr(379),
+       Wr = Qr(723),
+       ar = Qr(731),
+       jr = Qr(43);
+     const Ir = {
+         idStorageKey: "playSessionId",
+         lastActivityStorageKey: "playSessionLastActivityMs",
+         expiryMs: 3e5
+       },
+       fr = "playSessionGameNameWithVariation",
+       Er = "wasMatchmakePlayer";
+ 
+     function pr() {
+       let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jr.n;
+       (0, ar.h)(rr, Ir)
+     }
+ ... (9 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L18-L50` → after: `L54-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L54-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/247.js#L54-L103) · [Before (L18-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/247.js#L18-L50)

```diff
-       let {
-         loading: JR,
-         schematics: GR,
-         onSchematicPicked: yR,
-         selectedSchematicIdList: tR = [],
-         disableAutoExport: iR
-       } = RR;
-       const {
-         t: VR
-       } = (0, uR.A)();
-       return (0, fR.jsxs)("div", {
-         className: "SchematicList",
-         children: [JR && (0, fR.jsx)(ZR.d, {}), !JR && 0 === GR.length && (0, fR.jsx)("div", {
-           className: "NoSchematicsText",
-           children: VR("worldBuilder:noSavedSchematic")
-         }), !JR && GR.map((RR => (0, fR.jsx)(qR.i, {
- ... (17 more removed lines; see GitHub link above)
+       let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jr.n;
+       const Qr = (0, ar.d)(Sr, Ir),
+         pr = function(rr) {
+           const Sr = rr.getItem(fr);
+           return "string" !== typeof Sr ? null : Sr
+         }(Sr),
+         xr = function() {
+           return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jr.n).getItem(Er)
+         }(Sr);
+       let mr;
+       return mr = null !== Qr && null !== pr && (0, ar.e)(Sr, Ir) && function(rr, Sr, Qr) {
+           const Wr = (0, Zr.Mb)(rr),
+             ar = (0, Zr.Mb)(Sr),
+             jr = (0, Zr.Hb)(rr),
+             Ir = (0, Zr.Hb)(Sr);
+           return !(Wr !== ar || !Qr) || Wr === ar && jr === Ir
+ ... (34 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L54-L93` → after: `L107-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L107-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/247.js#L107-L141) · [Before (L54-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/247.js#L54-L93)

```diff
-     function KR(RR) {
-       let {
-         ownedSchematics: JR,
-         currentWorldSchematicId: GR,
-         onClose: tR
-       } = RR;
-       const {
-         t: ZR
-       } = (0, uR.A)(), [qR, KR] = (0, yR.useState)(null);
-       return (0, fR.jsxs)("div", {
-         className: "SchematicListWindow",
-         children: [null === qR && (0, fR.jsxs)(fR.Fragment, {
-           children: [(0, fR.jsx)("h1", {
-             className: "SchematicPopupTitle",
-             children: ZR("worldBuilder:schematicList")
-           }), (0, fR.jsx)("h2", {
- ... (24 more removed lines; see GitHub link above)
+     function fr() {
+       return "undefined" === typeof location ? null : function(rr) {
+         const Sr = new URLSearchParams(rr).get("renderDistanceMax");
+         if (null === Sr || !/^\d{1,2}$/.test(Sr)) return null;
+         const Qr = Number(Sr);
+         return Qr >= 1 && Qr <= 64 ? Qr : null
+       }(location.search)
+     }
+ 
+     function Er(rr, Sr) {
+       return null === Sr ? rr : {
+         horizontal: Math.min(rr.horizontal, Sr),
+         vertical: rr.vertical
+       }
+     }
+ 
+ ... (19 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L97-L111` → after: `L145-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L145-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/247.js#L145-L147) · [Before (L97-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/247.js#L97-L111)

```diff
-       let {
-         ownedSchematics: JR,
-         currentWorldSchematicId: GR,
-         onClose: yR
-       } = RR;
-       tR.NotificationProvider.showCustomPopup({
-         body: RR => (0, fR.jsx)(KR, {
-           ownedSchematics: JR,
-           currentWorldSchematicId: GR,
-           onClose: RR
-         }),
-         middleScreenPopupClassName: "SchematicPopup",
-         onClose: yR,
-         unlockPointerKey: "schematicListPopup"
-       })
+       var Sr;
+       const Qr = (null === (Sr = Zr) || void 0 === Sr ? void 0 : Sr.conn) === rr ? Zr.reason : null;
+       return Zr = null, Qr
```

#### 7. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L114-L116` → after: `L150-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L150-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/247.js#L150-L155) · [Before (L114-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/247.js#L114-L116)

```diff
-   53753: (RR, JR, GR) => {
-     GR.r(JR), GR.d(JR, {
-       runClientGameMessage: () => bR
+   37726: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       d: () => pr,
+       g: () => fr,
+       j: () => Ir,
+       k: () => Er
```

#### 8. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L118-L131` → after: `L157-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L157-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/247.js#L157-L160) · [Before (L118-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/247.js#L118-L131)

```diff
-     var yR = GR(2502),
-       tR = GR(2532),
-       uR = GR(1449),
-       ZR = GR(37394),
-       qR = GR(6003),
-       iR = GR(1163),
-       fR = GR.n(iR),
-       VR = GR(66),
-       KR = GR(1493),
-       wR = GR(1590),
-       rR = GR(377),
-       eR = GR(1270),
-       aR = GR(1468),
-       LR = GR(1378);
+     var Zr = Qr(2098);
+     let Wr = null,
+       ar = 0;
+     const jr = new Set;
```

#### 9. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L133-L194` → after: `L162-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L162-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/247.js#L162-L167) · [Before (L133-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/247.js#L133-L194)

```diff
-     function nR(RR) {
-       let {
-         onFilePicked: JR
-       } = RR;
-       const {
-         t: GR
-       } = (0, eR.A)(), [yR, tR] = (0, VR.useState)(null), {
-         getRootProps: uR,
-         getInputProps: ZR,
-         isDragActive: iR
-       } = (0, qR.e)({
-         onDrop: RR => {
-           RR.length > 0 && tR(RR[0])
-         },
-         useFsAccessApi: !1
-       }), KR = yR && yR.size > 1024 * rR._c;
- ... (46 more removed lines; see GitHub link above)
+     function Ir() {
+       return Wr
+     }
+ 
+     function fr() {
+       return ar
```

#### 10. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L198-L305` → after: `L171-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L171-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/247.js#L171-L172) · [Before (L198-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/247.js#L198-L305)

```diff
-       let {
-         ownedSchematics: JR,
-         onClose: GR,
-         onChosenPreset: yR,
-         onChosenFile: tR
-       } = RR;
-       const {
-         t: uR
-       } = (0, eR.A)();
-       return (0, LR.jsxs)(LR.Fragment, {
-         children: [(0, LR.jsx)("h1", {
-           className: "SchematicPopupTitle",
-           children: uR("worldBuilder:loadSchematic")
-         }), (0, LR.jsx)("h2", {
-           className: "SchematicPopupSubtitle",
-           children: uR("worldBuilder:chooseOneOfYourSchematics")
- ... (92 more removed lines; see GitHub link above)
+       Wr = rr, ar++, (0, Zr.b)();
+       for (const Sr of jr) Sr()
```

#### 11. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L309-L389` → after: `L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/247.js#L176) · [Before (L309-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/247.js#L309-L389)

```diff
-       let {
-         type: JR,
-         prepopName: GR,
-         ownedSchematics: yR,
-         onSubmit: tR,
-         onBack: uR
-       } = RR;
-       const {
-         t: ZR
-       } = (0, eR.A)(), [qR, iR] = (0, VR.useState)(""), [KR, rR] = (0, VR.useState)(""), [aR, nR] = (0, VR.useState)(null), [UR, WR] = (0, VR.useState)(!0), MR = RR => {
-         var tR;
-         RR = null !== (tR = RR) && void 0 !== tR ? tR : qR;
-         const uR = (0, XR.tb)(RR, "new" === JR || "existing" === JR && RR !== GR);
-         return uR ? (nR(ZR(uR.translationKey, uR.params)), !1) : "new" === JR && yR.find((JR => JR.name === RR)) ? (nR(ZR("worldBuilder:schematicAlreadyExists")), !1) : (nR(null), !0)
-       };
-       return (0, LR.jsxs)("div", {
- ... (65 more removed lines; see GitHub link above)
+       jr.add(rr)
```

#### 12. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L391-L393` → after: `L178-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L178-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/247.js#L178-L187) · [Before (L391-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/247.js#L391-L393)

```diff
-     var lR = GR(1282),
-       pR = GR(1943),
-       gR = GR(1201);
+   },
+   42845: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       d: () => ar,
+       e: () => Wr
+     });
+     let Zr = {
+       fire: () => {},
+       close: () => {}
+     };
```

#### 13. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L395-L541` → after: `L189-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L189-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/247.js#L189-L194) · [Before (L395-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/247.js#L395-L541)

```diff
-     function bR(RR, JR) {
-       if ("devDownloadJson" !== RR) ! function(RR, JR) {
-         const GR = lR.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, uR.d)().websocketUrl);
-         let qR = !1;
-         const iR = async (RR, JR) => {
-           if (qR) return;
-           qR = !0;
-           const {
-             gameNameWithVariation: yR,
-             lobbyName: ZR
-           } = (0, uR.d)(), iR = {
-             gameNameWithVariation: yR,
-             lobbyName: ZR
-           };
-           return await (0, gR.postJsonWithMetricsCookiesAndJsonResponse)(`${GR}/schematic/${RR}`, tR.w[RR].toBuffer({
-             ...iR,
- ... (131 more removed lines; see GitHub link above)
+     function Wr(rr) {
+       Zr = rr
+     }
+ 
+     function ar() {
+       return Zr
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/248.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/248.js` (40 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6)

#### 1. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/248.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/248.js#L2)

```diff
- export const ids = [60, 248];
+ export const ids = [248];
```

#### 2. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/248.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/248.js#L4)

```diff
-   39862: (RR, JR, GR) => {
+   37780: (rr, Sr, Qr) => {
```

#### 3. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L6-L103` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/248.js#L6-L7) · [Before (L6-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/248.js#L6-L103)

```diff
-       c: () => tR,
-       f: () => uR
-     });
-     const yR = new WeakMap;
- 
-     function tR(RR, JR) {
-       return yR.set(RR, JR), RR
-     }
- 
-     function uR(RR) {
-       var JR;
-       return null !== (JR = yR.get(RR)) && void 0 !== JR ? JR : null
-     }
-   },
-   39727: (RR, JR, GR) => {
-     GR.d(JR, {
- ... (82 more removed lines; see GitHub link above)
+       e: () => pr,
+       i: () => mr
```

#### 4. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L105-L8036` → after: `L9-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/248.js#L9-L15) · [Before (L105-L8036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/248.js#L105-L8036)

```diff
-     const yR = "island";
-     var tR = GR(39713);
- 
-     function uR(RR, JR, GR) {
-       const uR = "local" === JR,
-         qR = RR.background,
-         iR = JR => qR ? (0, tR.d)(JR[0] - RR.mapOrigin[0], JR[2] - RR.mapOrigin[2], qR.bounds) : [50, 50],
-         fR = (RR.insideDungeon ? [] : RR.landmarks).map((RR => {
-           var JR, yR;
-           return {
-             id: RR.id,
-             name: GR(RR.visited && RR.nameKey ? null !== (JR = RR.mapLabelKey) && void 0 !== JR ? JR : RR.nameKey : "skyblockGame:mapUnknown"),
-             icon: RR.visited && null !== (yR = RR.icon) && void 0 !== yR ? yR : "unknown",
-             visited: RR.visited,
-             current: !1,
-             position: iR(RR.position),
- ... (7916 more removed lines; see GitHub link above)
+     var Zr = Qr(72),
+       Wr = Qr(1475),
+       ar = Qr(1251),
+       jr = Qr(1444),
+       Ir = Qr(4743),
+       fr = Qr(5745),
+       Er = Qr(1338);
```

#### 5. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L8040-L8042` → after: `L19-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L19-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/248.js#L19-L23) · [Before (L8040-L8042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/248.js#L8040-L8042)

```diff
-         page: JR,
-         letGoShown: GR,
-         hiddenWaters: yR
+         loading: Sr,
+         schematics: Qr,
+         onSchematicPicked: Zr,
+         selectedSchematicIdList: Wr = [],
+         disableAutoExport: fr
```

#### 6. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L8046-L8190` → after: `L27-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L27-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/248.js#L27-L50) · [Before (L8046-L8190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/248.js#L8046-L8190)

```diff
-       } = (0, it.A)();
-       return JR.awake ? (0, Vt.jsx)("ul", {
-         className: "SkyblockReachLogGrid",
-         children: JR.fish.map((RR => (0, Vt.jsx)(LZ, {
-           fish: RR,
-           letGoShown: GR
-         }, RR.itemName)))
-       }) : (0, Vt.jsxs)(Vt.Fragment, {
-         children: [(0, Vt.jsx)("p", {
-           className: "SkyblockReachLogAsleep",
-           children: tR("skyblockGame:reachLogAsleep")
-         }), (0, Vt.jsx)(iZ, {
-           view: yR,
-           island: JR.id
-         })]
-       })
- ... (129 more removed lines; see GitHub link above)
+       } = (0, ar.E)();
+       return (0, Er.jsxs)("div", {
+         className: "SchematicList",
+         children: [Sr && (0, Er.jsx)(jr.c, {}), !Sr && 0 === Qr.length && (0, Er.jsx)("div", {
+           className: "NoSchematicsText",
+           children: pr("worldBuilder:noSavedSchematic")
+         }), !Sr && Qr.map((rr => (0, Er.jsx)(Ir.e, {
+           source: {
+             type: "schematic",
+             schematic: rr
+           },
+           gameWidth: "25%",
+           useLongRatio: !0,
+           onClick: () => {
+             Zr(rr)
+           },
+ ... (8 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L8196` → after: `L56-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/248.js#L56-L58) · [Before (L8196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/248.js#L8196)

```diff
-         controller: JR
+         ownedSchematics: Sr,
+         currentWorldSchematicId: Qr,
+         onClose: Wr
```

#### 8. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L8200-L8368` → after: `L62-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L62-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/248.js#L62-L71) · [Before (L8200-L8368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/248.js#L8200-L8368)

```diff
-       } = (0, it.A)(), yR = (0, ft.h)(zy, JR.getSnapshot()), tR = Xt();
-       if (!yR.enabled) return null;
-       const uR = !yR.loading && 0 === yR.conversations.length;
-       return (0, Vt.jsx)(Wt.e, {
-         show: yR.open,
-         close: JR.dismiss,
-         togglePointerLock: !1,
-         className: "SkyblockSkillsOverlay",
-         children: (0, Vt.jsxs)("section", {
-           className: "SkyblockSkillsPanel SkyblockDialoguePanel",
-           role: "dialog",
-           "aria-modal": "true",
-           "aria-labelledby": "skyblockDialogueTitle",
-           tabIndex: -1,
-           ref: tR,
-           onKeyDown: Ct,
- ... (153 more removed lines; see GitHub link above)
+       } = (0, ar.E)(), [Ir, xr] = (0, Zr.useState)(null);
+       return (0, Er.jsxs)("div", {
+         className: "SchematicListWindow",
+         children: [null === Ir && (0, Er.jsxs)(Er.Fragment, {
+           children: [(0, Er.jsx)("h1", {
+             className: "SchematicPopupTitle",
+             children: jr("worldBuilder:schematicList")
+           }), (0, Er.jsx)("h2", {
+             className: "SchematicPopupSubtitle",
+             children: jr("worldBuilder:clickSchematicForOptions")
```

#### 9. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L8370-L8380` → after: `L73-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L73-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/248.js#L73-L80) · [Before (L8370-L8380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/248.js#L8370-L8380)

```diff
-             className: "SkyblockQuestWaypointTextClip",
-             children: (0, Vt.jsxs)("div", {
-               className: "SkyblockQuestWaypointText",
-               children: [(0, Vt.jsx)("span", {
-                 className: "SkyblockQuestWaypointLabel"
-               }), (0, Vt.jsx)("span", {
-                 className: "SkyblockQuestWaypointDistance"
-               }), (0, Vt.jsx)("span", {
-                 className: "SkyblockQuestWaypointHint",
-                 hidden: !0
-               })]
+             className: "SchematicPopupSchematicListContainer",
+             children: (0, Er.jsx)(pr, {
+               loading: !1,
+               schematics: Sr,
+               onSchematicPicked: rr => {
+                 xr(rr)
+               },
+               disableAutoExport: !1
```

#### 10. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L8383-L8417` → after: `L83-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L83-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/248.js#L83-L87) · [Before (L8383-L8417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/248.js#L8383-L8417)

```diff
-         })
-       })),
-       BZ = {
-         started: "!",
-         quest: "\u2605",
-         step: "\u2713",
-         skillLevel: "\u25b2",
-         landmark: "\u25c6",
-         npcNote: "\u2709\ufe0e"
-       };
- 
-     function lZ(RR) {
-       return "next" === RR.phase ? "\u2192" : BZ[RR.kind]
-     }
-     const pZ = (0, MR.memo)((function(RR) {
-       let {
- ... (19 more removed lines; see GitHub link above)
+         }), null !== Ir && (0, Er.jsx)(fr.f, {
+           schematic: Ir,
+           inSourceWorld: Ir.schematicId === Qr,
+           onSchematicUpdate: rr => {
+             xr(rr)
```

#### 11. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L8419-L8495` → after: `L89-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/248.js#L89-L90) · [Before (L8419-L8495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/248.js#L8419-L8495)

```diff
-           children: [(0, Vt.jsxs)("div", {
-             className: "SkyblockQuestNotificationSymbols" + (yR.iconItem ? " WithIcon" : ""),
-             "aria-hidden": "true",
-             children: [(0, Vt.jsx)("span", {
-               className: "SkyblockQuestNotificationMark",
-               children: lZ(yR)
-             }), yR.iconItem && (0, Vt.jsx)("span", {
-               className: "SkyblockQuestNotificationIcon",
-               children: (0, Vt.jsx)(ut.b, {
-                 itemName: yR.iconItem,
-                 amount: 0
-               })
-             })]
-           }), (0, Vt.jsxs)("div", {
-             className: "SkyblockQuestNotificationText",
-             children: [(0, Vt.jsx)("span", {
- ... (61 more removed lines; see GitHub link above)
+           onClose: () => {
+             xr(null), Wr()
```

#### 12. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L8640` → after: `L98-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L98-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/248.js#L98-L100) · [Before (L8640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/248.js#L8640)

```diff
-         day: JR
+         ownedSchematics: Sr,
+         currentWorldSchematicId: Qr,
+         onClose: Zr
```

#### 13. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L8642-L8714` → after: `L102-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L102-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/248.js#L102-L106) · [Before (L8642-L8714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/248.js#L8642-L8714)

```diff
-       const GR = pR(JR);
-       return (0, Vt.jsx)("ol", {
-         className: "SkyblockDailyRewardStrip",
-         children: BR.map(((RR, yR) => {
-           const tR = yR + 1;
-           return (0, Vt.jsxs)("li", {
-             className: Jt()("SkyblockDailyRewardTile", {
-               Claimed: tR < JR && tR !== GR,
-               Today: tR === JR,
-               Tomorrow: tR === GR,
-               Jackpot: tR === lR
-             }),
-             children: [(0, Vt.jsx)("span", {
-               className: "SkyblockDailyRewardTileDay",
-               children: tR
-             }), (0, Vt.jsxs)("span", {
- ... (57 more removed lines; see GitHub link above)
+       Wr.NotificationProvider.showCustomPopup({
+         body: rr => (0, Er.jsx)(xr, {
+           ownedSchematics: Sr,
+           currentWorldSchematicId: Qr,
+           onClose: rr
```

#### 14. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L8716-L8864` → after: `L108-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L108-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/248.js#L108-L110) · [Before (L8716-L8864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/248.js#L8716-L8864)

```diff
-         style: {
-           "--daily-duration": `${JR.durationMs}ms`
-         },
-         role: "status",
-         "aria-live": "polite",
-         children: [(0, Vt.jsx)("div", {
-           className: "SkyblockDailyRewardGlow",
-           "aria-hidden": "true"
-         }), (0, Vt.jsxs)("div", {
-           className: "SkyblockDailyRewardCard",
-           children: [(0, Vt.jsxs)("div", {
-             className: "SkyblockDailyRewardHeading",
-             children: [(0, Vt.jsx)("span", {
-               className: "SkyblockDailyRewardTitle",
-               children: GR("skyblockGame:dailyRewardTitle")
-             }), (0, Vt.jsx)("span", {
- ... (133 more removed lines; see GitHub link above)
+         middleScreenPopupClassName: "SchematicPopup",
+         onClose: Zr,
+         unlockPointerKey: "schematicListPopup"
```

#### 15. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L8870` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/248.js#L135) · [Before (L8870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/248.js#L8870)

```diff
-         view: JR
+         onFilePicked: Sr
```

#### 16. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L8874-L8904` → after: `L139-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L139-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/248.js#L139-L154) · [Before (L8874-L8904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/248.js#L8874-L8904)

```diff
-       } = (0, it.A)();
-       return (0, Vt.jsx)("div", {
-         className: "SkyblockMailbox",
-         style: {
-           "--mail-duration": `${JR.durationMs}ms`,
-           "--flag-up": "300ms",
-           "--door-open": "500ms",
-           "--more-land": `${SZ(JR.letters.length)+300}ms`
-         },
-         role: "status",
-         "aria-live": "polite",
-         children: (0, Vt.jsxs)("div", {
-           className: "SkyblockMailboxCard",
-           children: [(0, Vt.jsxs)("div", {
-             className: "SkyblockMailboxHeading",
-             children: [(0, Vt.jsx)(dZ, {
- ... (15 more removed lines; see GitHub link above)
+       } = (0, Ur.E)(), [Zr, Wr] = (0, pr.useState)(null), {
+         getRootProps: ar,
+         getInputProps: jr,
+         isDragActive: fr
+       } = (0, Ir.b)({
+         onDrop: rr => {
+           rr.length > 0 && Wr(rr[0])
+         },
+         useFsAccessApi: !1
+       }), xr = Zr && Zr.size > 1024 * Nr.Zc;
+       return (0, hr.jsxs)("div", {
+         className: "SchematicUploadContainer",
+         children: [(0, hr.jsxs)("div", {
+           ...ar({
+             className: Er()("SchematicUpload", {
+               ActiveDrag: fr
```

#### 17. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9002-L9011` → after: `L157-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L157-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/248.js#L157-L161) · [Before (L9002-L9011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/248.js#L9002-L9011)

```diff
-           style: {
-             "--glowtide-colour": tR.colour
-           },
-           "aria-label": GR("skyblockGame:glowtideChipLabel"),
-           children: [(0, Vt.jsx)("div", {
-             className: "SkyblockGlowtideChipOrb"
-           }), tR.inRange ? (0, Vt.jsx)("span", {
-             className: "SkyblockGlowtideChipCall SmallTextBold",
-             children: GR("skyblockGame:glowtideChipInRange")
-           }, `call:${tR.inRangeToken}`) : (0, Vt.jsxs)(Vt.Fragment, {
+           children: [(0, hr.jsx)("input", {
+             ...jr({
+               accept: ".bloxdschem"
+             })
+           }), !fr && Zr ? (0, hr.jsxs)(hr.Fragment, {
```

#### 18. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9013-L9018` → after: `L163-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L163-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/248.js#L163-L167) · [Before (L9013-L9018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/248.js#L9013-L9018)

```diff
-               ref: JR.mountArrow,
-               className: "SkyblockGlowtideChipArrow"
-             }), (0, Vt.jsx)("span", {
-               className: "SkyblockGlowtideChipDistance SmallTextBold",
-               children: GR("skyblockGame:waypointDistance", {
-                 distance: AR(tR.distance, yR.code)
+               className: Er()("SchematicUploadIcon", "Active", {
+                 TooBig: xr
+               }),
+               children: (0, hr.jsx)(tr.c, {
+                 name: "file-lines"
```

#### 19. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9020-L9235` → after: `L169-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/248.js#L169-L170) · [Before (L9020-L9235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/248.js#L9020-L9235)

```diff
-             })]
-           })]
-         })
-       })
-     }
- 
-     function TZ(RR) {
-       let {
-         controller: JR
-       } = RR;
-       const {
-         t: GR
-       } = (0, it.A)(), yR = (0, ft.h)(Cy, JR.getSnapshot());
-       return null === yR ? null : (0, Vt.jsx)(yt.d, {
-         placement: "statBars",
-         children: (0, Vt.jsxs)("div", {
- ... (200 more removed lines; see GitHub link above)
+             }), (0, hr.jsx)("div", {
+               className: "SchematicUploadInstructions Active",
```

#### 20. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9237-L9239` → after: `L172-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/248.js#L172-L173) · [Before (L9237-L9239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/248.js#L9237-L9239)

```diff
-             }, RR.island)))
-           }), (0, Vt.jsxs)("div", {
-             className: "SkyblockTideChartsBody",
+             })]
+           }) : (0, hr.jsxs)(hr.Fragment, {
```

#### 21. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9241-L9247` → after: `L175-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L175-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/248.js#L175-L177) · [Before (L9241-L9247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/248.js#L9241-L9247)

```diff
-               className: "SkyblockTideChartsMap",
-               role: "img",
-               "aria-label": uR.gridLabel,
-               children: (0, Vt.jsx)(hZ, {
-                 chart: uR,
-                 showHere: !0,
-                 className: "Large"
+               className: "SchematicUploadIcon",
+               children: (0, hr.jsx)(tr.c, {
+                 name: "up-from-bracket"
```

#### 22. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9249-L9287` → after: `L179-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L179-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/248.js#L179-L181) · [Before (L9249-L9287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/248.js#L9249-L9287)

```diff
-             }), (0, Vt.jsxs)("div", {
-               className: "SkyblockTideChartsInfo",
-               children: [(0, Vt.jsx)("h3", {
-                 children: uR.islandName
-               }), (0, Vt.jsx)("p", {
-                 className: "SkyblockTideChartsLit",
-                 children: uR.litText
-               }), null === uR.pictureName ? (0, Vt.jsx)("p", {
-                 className: "SkyblockTideChartsPicture",
-                 children: yR("skyblockGame:tideChartsPictureHidden")
-               }) : (0, Vt.jsx)("p", {
-                 className: "SkyblockTideChartsPicture Revealed",
-                 children: yR("skyblockGame:tideChartsPictureRevealed", {
-                   picture: uR.pictureName
-                 })
-               }, uR.pictureName), (0, Vt.jsxs)("ul", {
- ... (23 more removed lines; see GitHub link above)
+             }), (0, hr.jsx)("div", {
+               className: "SchematicUploadInstructions",
+               children: Qr("worldBuilder:dragAFileHere")
```

#### 23. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9290-L9291` → after: `L184-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L184-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/248.js#L184-L194) · [Before (L9290-L9291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/248.js#L9290-L9291)

```diff
-         })
-       }) : null
+         }), (0, hr.jsx)(mr.p, {
+           disabled: xr || !Zr,
+           className: "SchematicUploadButton",
+           onClick: () => {
+             !xr && Zr && Sr(Zr)
+           },
+           children: xr ? Qr("worldBuilder:fileTooBig", {
+             maxSizeKb: Nr.Zc
+           }) : Qr("worldBuilder:upload")
+         })]
+       })
```

#### 24. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9297` → after: `L199-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L199-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/248.js#L199-L202) · [Before (L9297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/248.js#L9297)

```diff
-         controller: GR
+         ownedSchematics: Sr,
+         onClose: Qr,
+         onChosenPreset: Zr,
+         onChosenFile: Wr
```

#### 25. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9300-L9308` → after: `L205-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/248.js#L205-L206) · [Before (L9300-L9308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/248.js#L9300-L9308)

```diff
-         selectedLanguage: yR
-       } = (0, it.A)(), tR = yR.code;
-       (0, MR.useEffect)((() => {
-         GR.setTranslator(((RR, JR) => (0, it.w)(tR, RR, JR)), tR, ((RR, JR) => (0, it.r)(tR, RR, JR)))
-       }), [GR, tR]);
-       const uR = (0, ft.h)(fR, GR.map.getSnapshot()),
-         {
-           openInGameMenuName: ZR
-         } = (0, Gt.o)(["openInGameMenuName"]);
+         t: ar
+       } = (0, Ur.E)();
```

#### 26. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9310-L9324` → after: `L208-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L208-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/248.js#L208-L222) · [Before (L9310-L9324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/248.js#L9310-L9324)

```diff
-         children: [(0, Vt.jsx)(pZ, {
-           controller: GR.quests,
-           display: GR.navigation.display
-         }), uR.enabled && !ZR && (0, Vt.jsx)(Ot, {
-           controller: GR.navigation
-         }), (0, Vt.jsx)(Kt, {
-           controller: GR,
-           minimap: uR.enabled && (null === (JR = uR.presentation) || void 0 === JR ? void 0 : JR.minimap) && (0, Vt.jsx)(vt, {
-             view: uR.presentation.minimap,
-             navigation: GR.navigation,
-             controller: GR.map
-           }),
-           children: (0, Vt.jsx)(mt, {
-             controller: GR.quests,
-             surface: "hud"
+         children: [(0, hr.jsx)("h1", {
+           className: "SchematicPopupTitle",
+           children: ar("worldBuilder:loadSchematic")
+         }), (0, hr.jsx)("h2", {
+           className: "SchematicPopupSubtitle",
+           children: ar("worldBuilder:chooseOneOfYourSchematics")
+         }), (0, hr.jsx)("div", {
+           className: "SchematicPopupSchematicListContainer",
+           children: (0, hr.jsx)(jr.e, {
+             schematics: Sr,
+             onSchematicPicked: rr => {
+               Zr(rr.schematicId), Qr()
+             },
+             loading: !1,
+             disableAutoExport: !0
```

#### 27. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9327-L9352` → after: `L228-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L228-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/248.js#L228-L236) · [Before (L9327-L9352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/248.js#L9327-L9352)

```diff
-           controller: GR.navigation
-         }), (0, Vt.jsx)(bZ, {
-           controller: GR.portalTransit
-         }), (0, Vt.jsx)(mZ, {
-           controller: GR.dailyReward
-         }), (0, Vt.jsx)(kZ, {
-           controller: GR.mailbox
-         }), (0, Vt.jsx)(QZ, {
-           controller: GR.magmaward
-         }), (0, Vt.jsx)(FZ, {
-           controller: GR.glowtide
-         }), (0, Vt.jsx)(Iu, {
-           controller: GR.passage
-         }), (0, Vt.jsx)(Rq, {
-           controller: GR.tideCharts
-         }), (0, Vt.jsx)(TZ, {
- ... (10 more removed lines; see GitHub link above)
+           onFilePicked: async rr => {
+             try {
+               await Wr(rr)
+             } catch (Sr) {
+               console.warn("Schematic upload failed", Sr)
+             } finally {
+               Qr()
+             }
+           }
```

#### 28. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9359` → after: `L248-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L248-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/248.js#L248-L252) · [Before (L9359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/248.js#L9359)

```diff
-         controller: JR
+         ownedSchematics: Qr,
+         onClose: Zr,
+         onChosenEdit: Wr,
+         onChosenNew: ar,
+         onChosenDownload: Ir
```

#### 29. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9362-L9397` → after: `L258-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L258-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/248.js#L258-L303) · [Before (L9362-L9397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/248.js#L9362-L9397)

```diff
-         children: [(0, Vt.jsx)(bt, {
-           controller: JR.map,
-           navigation: JR.navigation
-         }), (0, Vt.jsx)(xt, {
-           controller: JR.skills,
-           surface: "menu"
-         }), (0, Vt.jsx)(mt, {
-           controller: JR.quests,
-           surface: "menu"
-         }), (0, Vt.jsx)(Au, {
-           controller: JR.dungeons
-         }), (0, Vt.jsx)(Mu, {
-           controller: JR.collections
-         }), (0, Vt.jsx)(pu, {
-           controller: JR.questGraph
-         }), (0, Vt.jsx)(xu, {
- ... (20 more removed lines; see GitHub link above)
+         children: [(0, hr.jsx)("h1", {
+           className: "SchematicPopupTitle",
+           children: fr("worldBuilder:saveSchematic")
+         }), "choose" === Er && (0, hr.jsxs)(hr.Fragment, {
+           children: [(0, hr.jsx)("h2", {
+             className: "SchematicPopupSubtitle",
+             children: fr("worldBuilder:overwriteOneOfYourSchematics")
+           }), (0, hr.jsx)("div", {
+             className: "SchematicPopupSchematicListContainer",
+             children: (0, hr.jsx)(jr.e, {
+               schematics: Qr,
+               onSchematicPicked: rr => {
+                 tr(rr.schematicId), Yr("existing"), xr("save")
+               },
+               loading: !1,
+               disableAutoExport: !1
+ ... (30 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9404-L9734` → after: `L308-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L308-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/248.js#L308-L318) · [Before (L9404-L9734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/248.js#L9404-L9734)

```diff
-     function Zq(RR, JR) {
-       const GR = [{
-         sound: "rpgKnifeSlice1",
-         beat: DG,
-         lead: 260,
-         volume: .5,
-         rate: 1
-       }, {
-         sound: "sweep6",
-         beat: DG,
-         lead: 140,
-         volume: .35,
-         rate: .85
-       }, {
-         sound: "rpgMetalPot1",
-         beat: DG,
- ... (315 more removed lines; see GitHub link above)
+     function Tr(rr) {
+       let {
+         type: Sr,
+         prepopName: Qr,
+         ownedSchematics: Zr,
+         onSubmit: Wr,
+         onBack: ar
+       } = rr;
+       const {
+         t: jr
+       } = (0, Ur.E)(), [Ir, fr] = (0, pr.useState)(""), [xr, Nr] = (0, pr.useState)(""), [tr, zr] = (0, pr.useState)(null), [Yr, nr] = (0, pr.useState)(!0), Br = rr => {
```

#### 31. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9736-L9920` → after: `L320-L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L320-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/248.js#L320-L331) · [Before (L9736-L9920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/248.js#L9736-L9920)

```diff
-         const JR = this.unlocked ? this.portal.unlockedBlock : null !== (RR = this.portal.lockedBlock) && void 0 !== RR ? RR : "Light Gray Portal",
-           {
-             min: GR,
-             max: yR
-           } = this.portal;
-         for (let tR = GR[0]; tR <= yR[0]; tR++)
-           for (let RR = GR[1]; RR <= yR[1]; RR++)
-             for (let uR = GR[2]; uR <= yR[2]; uR++) this.presentation.hasChunk(tR, RR, uR) && this.presentation.rW(tR, RR, uR) !== JR && this.presentation.lD(tR, RR, uR, JR)
-       }
-     }
-     var lq = GR(39758);
-     GR(39741);
-     const pq = {
-         farming_1: {
-           raises: RR => "NPC" === RR.type && "chef" === RR.variation,
-           rise: .4
- ... (169 more removed lines; see GitHub link above)
+         rr = null !== (Wr = rr) && void 0 !== Wr ? Wr : Ir;
+         const ar = (0, yr.Eb)(rr, "new" === Sr || "existing" === Sr && rr !== Qr);
+         return ar ? (zr(jr(ar.translationKey, ar.params)), !1) : "new" === Sr && Zr.find((Sr => Sr.name === rr)) ? (zr(jr("worldBuilder:schematicAlreadyExists")), !1) : (zr(null), !0)
+       };
+       return (0, hr.jsxs)("div", {
+         className: "SaveSchematicWindow",
+         children: [(0, hr.jsx)("h2", {
+           className: "SchematicPopupSubtitle",
+           children: jr("general:name")
+         }), (0, hr.jsx)(er.b, {
+           className: Er()("SaveSchematicName", {
+             Error: tr
```

#### 32. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9922-L9942` → after: `L333-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L333-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/248.js#L333-L341) · [Before (L9922-L9942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/248.js#L9922-L9942)

```diff
-           kR = new qq({
-             getLineOwner: RR => OR.checkValid(RR) ? OR.getLineOwner(RR) : null,
-             isLocalPlayer: RR => OR.isLocalPlayer(RR),
-             getHookPosition: RR => {
-               const [JR, , GR] = OR.vW(RR);
-               return [JR, GR]
-             },
-             isHushWaiting: () => {
-               var RR;
-               return "waiting" === (null === (RR = ZR.hushWait.getSnapshot()) || void 0 === RR ? void 0 : RR.phase)
-             },
-             onCastLanded: (RR, JR) => {
-               ZR.tideCharts.castLanded(RR, JR)
-             },
-             onLocalHookSettled: () => {
-               zR.onLocalHookSettled()
- ... (5 more removed lines; see GitHub link above)
+           forcedText: Qr,
+           onValueChange: rr => {
+             fr(rr), Br(rr)
+           },
+           placeholderText: jr("worldBuilder:schematicNamePlaceholder"),
+           maxLength: yr.sb
+         }), (0, hr.jsx)("h2", {
+           className: Er()("SaveSchematicError", {
+             Hidden: !tr
```

#### 33. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9944-L9951` → after: `L343-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L343-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/248.js#L343-L346) · [Before (L9944-L9951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/248.js#L9944-L9951)

```diff
-           QR = new Uq({
-             now: () => performance.now(),
-             playerPosition: () => OR.checkValid(uR) ? OR.vW(uR) : null,
-             play: (RR, JR, GR, yR, tR, ZR) => OR.playSound(uR, RR, JR, 1, {
-               TG: GR,
-               maxHearDist: yR,
-               refDistance: tR
-             }, ZR)
+           children: tr
+         }), (0, hr.jsx)("h2", {
+           className: Er()("SchematicPopupSubtitle", {
+             Hidden: "file" === Sr
```

#### 34. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9953-L9973` → after: `L348-L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L348-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/248.js#L348-L445) · [Before (L9953-L9973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/248.js#L9953-L9973)

```diff
-           FR = new Map;
-         let TR;
-         return {
-           onCreate: RR => {
-             if (OR = RR, NR = new Aq.SkyblockEntityFacing(RR, cR ? mR : null), ZR.portalTransit.resumeArrival(null !== GR && void 0 !== GR ? GR : null), (null !== GR && void 0 !== GR ? GR : yR) === yR) {
-               let RR = -1 / 0;
-               TR = ER.n.subscribe("toggleMenu", (JR => {
-                 const GR = performance.now();
-                 "inventory|Workbench" !== JR || "cross_to_hub" !== ZR.quests.getTrackedQuestId() || GR - RR < 1e4 || (RR = GR, OR.sendCommand("skyblockWorkbenchOpened"))
-               }))
-             }
-             for (const [yR, tR] of Object.entries(null !== (JR = DR[null !== GR && void 0 !== GR ? GR : ""]) && void 0 !== JR ? JR : {})) {
-               var JR;
-               FR.set(yR, new Bq({
-                 hasChunk: (JR, GR, yR) => RR.isBlockInLoadedChunk(JR, GR, yR),
-                 rW: (JR, GR, yR) => RR.blockIdToBlockName(RR.getBlockId(JR, GR, yR)),
- ... (5 more removed lines; see GitHub link above)
+           children: jr("general:description")
+         }), (0, hr.jsx)(er.b, {
+           className: Er()("SaveSchematicDescription", {
+             Hidden: "file" === Sr
+           }),
+           onValueChange: Nr,
+           placeholderText: jr("worldBuilder:schematicDescriptionPlaceholder"),
+           maxLength: yr.qb,
+           useTextarea: !0
+         }), (0, hr.jsxs)("div", {
+           className: Er()("SaveSchematicCheckboxContainer", {
+             WarningBorder: "existing" === Sr
+           }),
+           children: [(0, hr.jsx)(Kr.e, {
+             checked: Yr,
+             onChange: rr => {
+ ... (82 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9975-L10011` → after: `L447-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L447-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/248.js#L447-L452) · [Before (L9975-L10011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/248.js#L9975-L10011)

```diff
-               }, tR))
-             }
-             vR = (0, Wq.h)((RR => (0, BJ.g)(RR) ? (0, BJ.d)(RR) : null)), ZR.resolveItemName = (JR, GR) => {
-               const yR = RR.getItemStat(uR, JR, "displayName");
-               return yR && "object" === typeof yR && "translationKey" in yR ? GR(yR.translationKey, (0, it.o)(yR.params, rq.e.shown)) : "string" === typeof yR ? GR(yR) : JR
-             }, ZR.quests.notifications.onShown = RR => {
-               "quest" === RR ? OR.playSound(uR, "magicAccent1", 1, 1) : "skillLevel" === RR ? OR.playSound(uR, "magicAccent1", 1, .6) : "landmark" === RR ? OR.playSound(uR, "trumpetFlare", 1, .6) : "npcNote" === RR ? OR.playSound(uR, "magicAccent2", .8, 1.1) : "started" === RR ?  … [truncated]
-             }, ZR.forge.onPartSelected = () => {
-               OR.playSound(uR, "rpgMetalClick", .6, .9 + .2 * Math.random())
-             }, ZR.forge.onOpened = () => {
-               ! function(RR) {
-                 RR.preloadSounds(Zq(4, !0).map((RR => RR.sound)))
-               }(RR)
-             }, ZR.forge.onForgeStarted = (JR, GR, yR) => function(RR, JR, GR, yR, tR) {
-               const uR = [],
-                 ZR = [],
- ... (21 more removed lines; see GitHub link above)
+               } = Sr;
+               const Wr = Zr.Dp.from(Qr);
+               (0, Or.downloadBlob)(new Blob([Wr], {
+                 type: "application/octet-stream"
+               }), `${rr}.bloxdschem`)
+             }))
```

#### 36. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L10014-L10037` → after: `L455-L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L455-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/248.js#L455-L463) · [Before (L10014-L10037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/248.js#L10014-L10037)

```diff
-             var RR, JR, GR, yR, tR, uR, fR, KR, eR, aR, LR, nR, UR, XR, MR;
-             TR && ER.n.unsubscribe(TR), null === (RR = vR) || void 0 === RR || RR(), QR.dispose(), null === (JR = NR) || void 0 === JR || JR.dispose(), kR.dispose(), ZR.dispose(), null === (GR = qR) || void 0 === GR || GR(), null === (yR = iR) || void 0 === yR || yR(), null === ( … [truncated]
-           },
-           onPlayerChangeBlock: (RR, JR, yR, tR, qR, iR) => {
-             if (RR === uR && "Air" === iR) {
-               const RR = OR.getClientOption(uR, "creative");
-               ZR.skills.predictBlock([JR, yR, tR], qR, RR);
-               const iR = function(RR, JR) {
-                   if ("hub" === JR || "farming_1" === JR || "mining_1" === JR) return !PR.has(RR) || "hub" !== JR && "mining_1" !== JR ? Object.hasOwn(oR, RR) ? oR[RR] : void 0 : HR
-                 }(qR, GR),
-                 fR = ("hub" === GR || "mining_1" === GR) && (KR.od.some((RR => RR === qR)) || Object.hasOwn(IR, qR) || "mining_1" === GR && "Block of Coal" === qR);
-               RR || void 0 === iR && !fR || OR.lD(JR, yR, tR, null !== iR && void 0 !== iR ? iR : HR)
-             }
-           },
-           onPlayerAttackEntity: (RR, JR) => {
-             if (RR !== uR || "Player" !== OR.getEntityType(JR)) return;
- ... (8 more removed lines; see GitHub link above)
+             fr("cancel", {})
+           },
+           onChosenEdit: (rr, Sr, Qr, Zr) => {
+             fr("save-to-profile", {
+               schematicId: rr,
+               name: Sr,
+               description: Qr,
+               includeLobbyCode: Zr
+             })
```

#### 37. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L10039-L10215` → after: `L465-L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L465-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/248.js#L465-L503) · [Before (L10039-L10215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/248.js#L10039-L10215)

```diff
-           onReceivedMessageFromServer: (RR, JR) => {
-             if ("skyblockGatedPortal" === RR) {
-               var GR;
-               const [RR, yR] = JR;
-               return void(null === (GR = FR.get(RR)) || void 0 === GR || GR.BK(yR))
-             }
-             if ("skyblockDailyReward" === RR) return void ZR.dailyReward.BK(JR);
-             if ("skyblockMailbox" === RR) return void ZR.mailbox.BK(JR);
-             if ("skyblockPortalTransit" === RR) return void ZR.portalTransit.BK(JR);
-             if ("skyblockLava" === RR) return void QR.BK(JR);
-             if ("skyblockForge" === RR) return void ZR.forge.BK(JR);
-             if ("skyblockMagmaward" === RR) return void ZR.magmaward.BK(JR);
-             if ("skyblockGlowtide" === RR) return void ZR.glowtide.BK(JR);
-             if ("skyblockGlowMeter" === RR) return void ZR.glowMeter.BK(JR);
-             if ("skyblockHushWait" === RR) return void ZR.hushWait.BK(JR);
-             if ("skyblockPassage" === RR) {
- ... (161 more removed lines; see GitHub link above)
+           onChosenNew: (rr, Sr, Qr) => {
+             fr("save-to-profile", {
+               schematicId: null,
+               name: rr,
+               description: Sr,
+               includeLobbyCode: Qr
+             })
+           }
+         });
+         else if ("Plugin|WorldBuilder|LoadSchematic" === rr) ! function(rr) {
+           let {
+             ownedSchematics: Sr,
+             onChosenFile: Qr,
+             onChosenPreset: Zr,
+             onClose: Wr
+           } = rr;
+ ... (23 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L10217-L10221` → after: `L505-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L505-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/248.js#L505-L511) · [Before (L10217-L10221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/248.js#L10217-L10221)

```diff
-               content: (0, MR.createElement)(yq, {
-                 controller: ZR
-               }),
-               onClose: ZR.close
-             }))
+               retries: 1
+             }, Lr.HttpPayloadType.json)
+           },
+           onChosenPreset: rr => {
+             fr("load-from-profile", {
+               schematicId: rr
+             })
```

#### 39. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L10223-L10226` → after: `L513-L514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L513-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/248.js#L513-L514) · [Before (L10223-L10226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/248.js#L10223-L10226)

```diff
-           gK: () => {
-             var RR;
-             for (const JR of FR.values()) JR.gK();
-             QR.gK(), null === (RR = NR) || void 0 === RR || RR.gK(), ZR.skills.gK(), ZR.quests.gK(), ZR.dailyReward.gK(), ZR.mailbox.gK(), ZR.map.gK()
+           onClose: () => {
+             fr("cancel", {})
```

#### 40. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L10228-L10305` → after: `L516-L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L516-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/248.js#L516-L540) · [Before (L10228-L10305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/248.js#L10228-L10305)

```diff
-         }
-       }
-   },
-   39722: (RR, JR, GR) => {
-     GR.d(JR, {
-       e: () => uR,
-       g: () => tR
-     });
-     var yR = GR(377);
-     const tR = (0, yR.Bb)([0, 0, -1]),
-       uR = [{
-         name: "S",
-         bearing: (0, yR.Bb)([0, 0, 1])
-       }, {
-         name: "E",
-         bearing: (0, yR.Bb)([-1, 0, 0])
- ... (62 more removed lines; see GitHub link above)
+         });
+         else if ("Plugin|WorldBuilder|ListSchematics" === rr)(0, jr.i)({
+           ownedSchematics: Array.isArray(Sr) ? Sr : Sr.schematics,
+           currentWorldSchematicId: Array.isArray(Sr) ? null : Sr.currentWorldSchematicId,
+           onClose: () => {
+             fr("cancel", {})
+           }
+         });
+         else if ("Plugin|WorldBuilder|ExportWorld" === rr) {
+           var Er;
+           const rr = null !== (Er = Sr.schematic) && void 0 !== Er ? Er : Sr;
+           (0, nr.h)({
+             schematic: rr,
+             inSourceWorld: rr.schematicId === Sr.currentWorldSchematicId,
+             onClose: () => {
+               fr("cancel", {})
+ ... (9 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/249.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/249.js` (22 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479)

#### 1. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/249.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/249.js#L2)

```diff
- export const ids = [249];
+ export const ids = [60, 249];
```

#### 2. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L4` → after: `L4-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L4-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/249.js#L4-L101) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/249.js#L4)

```diff
-   37422: (RR, JR, GR) => {
+   40197: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       c: () => Wr,
+       g: () => ar
+     });
+     const Zr = new WeakMap;
+ 
+     function Wr(rr, Sr) {
+       return Zr.set(rr, Sr), rr
+     }
+ 
+     function ar(rr) {
+       var Sr;
+       return null !== (Sr = Zr.get(rr)) && void 0 !== Sr ? Sr : null
+     }
+   },
+ ... (82 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L8-L29` → after: `L105-L8793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L105-L8793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/249.js#L105-L8793) · [Before (L8-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/249.js#L8-L29)

```diff
-     var yR = GR(1163),
-       tR = GR.n(yR),
-       uR = GR(1677),
-       ZR = GR(1155),
-       qR = GR(858),
-       iR = GR(1270),
-       fR = GR(1590),
-       VR = GR(1663),
-       KR = GR(4904),
-       wR = GR(1468),
-       rR = GR(4824),
-       eR = GR(3706),
-       aR = GR(1378);
-     const LR = 2;
- 
-     function nR(RR) {
- ... (6 more removed lines; see GitHub link above)
+     const Zr = "island";
+     var Wr = Qr(40045);
+ 
+     function ar(rr, Sr, Qr) {
+       const ar = "local" === Sr,
+         Ir = rr.background,
+         fr = Sr => Ir ? (0, Wr.b)(Sr[0] - rr.mapOrigin[0], Sr[2] - rr.mapOrigin[2], Ir.bounds) : [50, 50],
+         Er = (rr.insideDungeon ? [] : rr.landmarks).map((rr => {
+           var Sr, Zr;
+           return {
+             id: rr.id,
+             name: Qr(rr.visited && rr.nameKey ? null !== (Sr = rr.mapLabelKey) && void 0 !== Sr ? Sr : rr.nameKey : "skyblockGame:mapUnknown"),
+             icon: rr.visited && null !== (Zr = rr.icon) && void 0 !== Zr ? Zr : "unknown",
+             visited: rr.visited,
+             current: !1,
+             position: fr(rr.position),
+ ... (8673 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L35-L37` → after: `L8799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R8799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L8799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/249.js#L8799) · [Before (L35-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/249.js#L35-L37)

```diff
-         game: JR,
-         disabled: GR,
-         showPlaceholder: yR
+         letterCount: Sr
```

#### 5. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L39-L48` → after: `L8801-L8824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R8801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L8801-L8824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/249.js#L8801-L8824) · [Before (L39-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/249.js#L39-L48)

```diff
-       return null !== JR ? (0, aR.jsx)(rR.i, {
-         source: nR(JR),
-         gameWidth: "100%",
-         useLongRatio: !0,
-         disabled: GR,
-         entrySource: "customGamePlace"
-       }) : yR ? (0, aR.jsx)(rR.e, {
-         gameWidth: "100%",
-         useLongRatio: !0
-       }) : null
+       return (0, pW.jsxs)("div", {
+         className: "SkyblockMailboxArt",
+         "aria-hidden": "true",
+         children: [(0, pW.jsx)("img", {
+           className: "SkyblockMailboxFrame",
+           src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
+           alt: ""
+         }), (0, pW.jsx)("img", {
+           className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
+           src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
+           alt: ""
+         }), (0, pW.jsx)("img", {
+           className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
+           src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
+           alt: ""
+         }), Array.from({
+ ... (8 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L52` → after: `L8828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R8828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L8828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/249.js#L8828) · [Before (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/249.js#L52)

```diff
-       var JR;
+       var Sr, Qr, Zr;
```

#### 7. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L54-L59` → after: `L8830-L8831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R8830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L8830-L8831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/249.js#L8830-L8831) · [Before (L54-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/249.js#L54-L59)

```diff
-         category: GR,
-         title: yR,
-         tintColour: tR,
-         layout: uR,
-         games: ZR,
-         landscape: qR = !1
+         letter: Wr,
+         index: ar
```
